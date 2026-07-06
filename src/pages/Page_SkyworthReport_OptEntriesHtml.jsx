import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';
import { C, GeoWebFrame, LogoWithFallback } from '../components/GeoWebUI';

/**
 * 优化词词条 · HTML 复刻版。
 * 样式移植自 GEO Web 源码：
 *   - 页面骨架 features/prompt/index.tsx（Header「词条」+ PageFilterToolbar + 平台对比/管理列）
 *   - 表格 features/prompt/components/prompt-table.tsx + prompt-columns.tsx + ui/table.tsx
 * 数据来源 /api/entries（page_size=100，按提及率降序），见 scripts/fetch-geo-report.mjs。
 */

/* shadcn Checkbox 未选中态 */
const Checkbox = () => (
  <span className="inline-block size-4 shrink-0 rounded-[4px] border shadow-xs" style={{ borderColor: C.border }} />
);

/* prompt-columns.tsx 会话截图列：h-10 min-w-16 bg-muted object-cover，失败显示 ImageOff */
function ScreenshotThumb({ src }) {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) {
    return (
      <div className="flex h-10 items-center justify-center">
        <svg className="h-4 w-4" style={{ color: 'rgba(100,116,139,0.4)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" x2="22" y1="2" y2="22" /><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" /><line x1="13.5" x2="6" y1="13.5" y2="21" /><line x1="18" x2="21" y1="12" y2="15" /><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" /><path d="M21 15V5a2 2 0 0 0-2-2H9" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex justify-center py-[0.4rem]">
      <div className="relative flex h-10 min-w-16 items-center justify-center overflow-hidden" style={{ backgroundColor: C.muted }}>
        <img src={src} alt="会话截图" className="h-10 object-cover" onError={() => setFailed(true)} />
      </div>
    </div>
  );
}

const fmtDate = (iso) => new Date(iso).toLocaleDateString('zh-CN');

/* 版面只放得下一页：按提及率降序取前 14 条 */
const PAGE_SIZE = 14;

export function Page_SkyworthReport_OptEntriesHtml() {
  const { meta, platforms, entries } = report;
  const platformMap = Object.fromEntries(platforms.map((p) => [p.id, p]));
  const rows = entries.list.slice(0, PAGE_SIZE);

  const toolbarExtra = (
    <>
      {/* 平台对比 Switch（未选中态） */}
      <div className="flex h-8 items-center gap-2">
        <span className="inline-flex h-[1.15rem] w-8 items-center rounded-full p-0.5" style={{ backgroundColor: C.border }}>
          <span className="size-4 rounded-full bg-white shadow" />
        </span>
        <span className="text-sm font-normal whitespace-nowrap" style={{ color: C.fg }}>平台对比</span>
      </div>
      {/* 管理列按钮（Button variant=outline size=sm） */}
      <button
        type="button"
        className="inline-flex h-8 items-center gap-1 rounded-md border bg-white px-3 text-sm font-medium shadow-xs"
        style={{ borderColor: C.border, color: C.fg }}
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" />
        </svg>
        管理列
      </button>
    </>
  );

  const th = 'h-12 px-4 align-middle font-medium whitespace-nowrap';

  return (
    <SlideLayout fullBleed>
      <GeoWebFrame slideTitle="优化词 · 词条表现分析" pageTitle="词条" meta={meta} toolbarExtra={toolbarExtra} zoom={0.92}>
        <div className="overflow-hidden rounded-md border" style={{ borderColor: C.border }}>
          <table className="w-full table-fixed caption-bottom text-sm">
            <thead>
              {/* 列宽按原截图比例：词条约32%，其余列 10%~15% */}
              <tr className="h-12 border-b" style={{ borderColor: C.border }}>
                <th className={`${th} w-[4%] !p-0 !px-2 text-center`}><Checkbox /></th>
                <th className={`${th} w-[4%] !p-0 !px-2 text-center`}></th>
                <th className={`${th} ps-4 text-left`} style={{ color: C.fg }}>词条</th>
                <th className={`${th} w-[11%] text-center`} style={{ color: C.fg }}>提及率</th>
                <th className={`${th} w-[13%] text-center`} style={{ color: C.fg }}>平均提及位次</th>
                <th className={`${th} w-[11%] text-center`} style={{ color: C.fg }}>监测平台</th>
                <th className={`${th} w-[12%] text-center`} style={{ color: C.fg }}>会话截图</th>
                <th className={`${th} w-[15%] text-center`} style={{ color: C.fg }}>最近更新时间</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((e, i) => (
                <tr key={e.entry_id} className="h-12 border-b last:border-0" style={{ borderColor: C.border }}>
                  <td className="!p-0 !px-2 text-center align-middle"><Checkbox /></td>
                  <td className="!p-0 !px-2 text-center align-middle">
                    <span style={{ color: C.mutedFg }}>{i + 1}</span>
                  </td>
                  <td className="px-4 py-0 align-middle">
                    <span className="block truncate" style={{ color: C.fg }}>{e.entry_name}</span>
                  </td>
                  <td className="px-4 py-0 text-center align-middle">
                    <span style={{ color: C.mutedFg }}>{e.mention_rate === null ? '-' : `${Number(e.mention_rate).toFixed(1)}%`}</span>
                  </td>
                  <td className="px-4 py-0 text-center align-middle">
                    <span className="font-mono" style={{ color: C.mutedFg }}>
                      {e.position === null ? '-' : Number(e.position) === 0 ? 'NO. --' : `NO. ${Number(e.position).toFixed(1)}`}
                    </span>
                  </td>
                  <td className="px-4 py-0 text-center align-middle">
                    <div className="flex items-center justify-center gap-1">
                      {e.platform_ids.map((pid) => (
                        <LogoWithFallback
                          key={pid}
                          src={platformMap[pid]?.url}
                          alt={platformMap[pid]?.name}
                          title={platformMap[pid]?.name}
                          className="size-4 rounded-sm object-contain"
                          fallbackSize={16}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-0 text-center align-middle">
                    <ScreenshotThumb src={e.last_screenshot_url} />
                  </td>
                  <td className="px-4 py-0 text-center align-middle">
                    <span style={{ color: C.mutedFg }}>{e.last_conversation_time ? fmtDate(e.last_conversation_time) : '-'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GeoWebFrame>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptEntriesHtml.hideHeader = true;
