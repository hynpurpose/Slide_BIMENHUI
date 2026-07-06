import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function slideOrderSavePlugin() {
  return {
    name: 'slide-order-save',
    configureServer(server) {
      server.middlewares.use('/api/save-order', (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (!Array.isArray(data.order)) {
              throw new Error("Invalid payload: 'order' must be an array");
            }
            const filePath = path.resolve(__dirname, 'src/slideOrder.json');
            fs.writeFileSync(filePath, JSON.stringify(data.order, null, 2), 'utf-8');
            // 该文件已从 watch 排除（避免每次自动保存都整页刷新），
            // 这里手动失效模块缓存，保证下次刷新读到最新内容
            const mods = server.moduleGraph.getModulesByFile(filePath);
            if (mods) mods.forEach((m) => server.moduleGraph.invalidateModule(m));
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            console.error('Save failed:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      });
    }
  }
}

// 可视化文字/样式编辑的持久化：和排序一样落盘到 src/slideEdits.json，可进 git、可团队共享
function slideEditsSavePlugin() {
  return {
    name: 'slide-edits-save',
    configureServer(server) {
      server.middlewares.use('/api/save-edits', (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const payload = {
              visualEdits:
                data.visualEdits && typeof data.visualEdits === 'object'
                  ? data.visualEdits
                  : {},
              titleOverrides:
                data.titleOverrides && typeof data.titleOverrides === 'object'
                  ? data.titleOverrides
                  : {},
            };
            const filePath = path.resolve(__dirname, 'src/slideEdits.json');
            fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');
            // 与 slideOrder.json 一致：文件已从 watch 排除，这里手动失效模块缓存
            const mods = server.moduleGraph.getModulesByFile(filePath);
            if (mods) mods.forEach((m) => server.moduleGraph.invalidateModule(m));
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            console.error('Save edits failed:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), slideOrderSavePlugin(), slideEditsSavePlugin()],
  server: {
    host: true,
    port: 4466,
    strictPort: true,
    allowedHosts: true,
    watch: {
      // 忽略外部生成的临时目录（如 _tmp_*/report.zip），其被占用会导致 EBUSY 崩溃；
      // slideOrder.json 由自动保存频繁写入，排除掉避免每次保存都触发整页刷新
      ignored: ['**/_tmp_*/**', '**/*.zip', '**/src/slideOrder.json', '**/src/slideEdits.json'],
    },
  },
})
