import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOTS = [
  { src: '/user-comment/overview.png', label: '数据总览' },
  { src: '/user-comment/compare.png', label: '横向对比' },
  { src: '/user-comment/sentiment.png', label: '情感分布' },
  { src: '/user-comment/dimensions.png', label: '卖点维度' },
  { src: '/user-comment/wordcloud.png', label: '关键词云' },
  { src: '/user-comment/trend.png', label: '时间趋势' },
  { src: '/user-comment/fake.png', label: '刷评识别' },
  { src: '/user-comment/wall.png', label: '评论墙' },
];

const TECH = ['React 18', 'TypeScript', 'Vite', 'React Router', 'Framer Motion', '纯手写 SVG', '零后端'];

function ScreenshotStrip({ height, note }) {
  return (
    <div className="shrink-0">
      {note && (
        <div className="text-[20px] font-bold text-zinc-300 mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />
          {note}
        </div>
      )}
      <div className="flex gap-2.5" style={{ height }}>
        {SHOTS.map((s) => (
          <div
            key={s.src}
            className="flex-1 min-w-0 relative rounded-lg overflow-hidden border border-white/15 bg-black shadow-lg"
          >
            <img src={s.src} alt="" className="w-full h-full object-cover object-top" draggable={false} />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent px-2.5 pt-4 pb-1.5">
              <span className="text-[13px] font-bold text-white/90 font-['MiSans']">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const RightArrow = () => (
  <div className="flex items-center shrink-0">
    <svg className="w-8 h-8 text-[#004CE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

/* ============================================================
 * 版本 A — 三层技术架构
 * 数据层 → 逻辑层 → 视图层，强调「一套纯前端系统由哪些层组成」
 * ============================================================ */
const layersA = [
  {
    tag: '数据层',
    en: 'DATA',
    accent: 'text-zinc-300',
    bar: 'bg-zinc-500',
    items: [
      { t: 'extract-data.mjs', d: '离线数据管线：解析源 Excel、清洗去伪、情感映射、聚合' },
      { t: 'dataset.json', d: '预生成静态数据集，随构建打包，无需数据库 / 接口' },
    ],
  },
  {
    tag: '逻辑层',
    en: 'LOGIC',
    accent: 'text-blue-400',
    bar: 'bg-[#004CE5]',
    core: true,
    items: [
      { t: 'StoreProvider', d: '全局状态：维护当前商品筛选范围（scope）' },
      { t: 'useScoped()', d: '按 scope 实时派生评论、统计与时间线' },
      { t: 'data.ts · lexicon.ts', d: '情感统计工具 + 关键词词典匹配' },
    ],
  },
  {
    tag: '视图层',
    en: 'VIEW',
    accent: 'text-zinc-300',
    bar: 'bg-[#004CE5]',
    items: [
      { t: 'React Router · 10 路由', d: '10 个分析视图，共享同一数据与筛选' },
      { t: '手写 SVG 图表', d: '环形仪表盘 / 情感环 / 雷达 / 堆叠面积，零图表库' },
      { t: 'ModalProvider · Framer Motion', d: '评论详情弹窗 + 切页与入场动画' },
    ],
  },
];

export function Page_UserCommentArchitecture_A() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        一套<span className="text-white font-bold">纯前端、零后端</span>的评论分析系统：数据分
        <span className="text-white font-bold">三层</span>逐级向上流动 —— 数据层备料、逻辑层运算、视图层呈现。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-7 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none font-['MiSans'] flex flex-col gap-5">
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider">分层架构</span>
        </div>

        <ScreenshotStrip height="178px" note="系统实际界面 · 10 屏分析视图" />

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[16px] font-bold text-zinc-500 mr-1">技术栈</span>
          {TECH.map((t) => (
            <span
              key={t}
              className="text-[15px] font-bold text-zinc-300 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex-1 flex items-stretch gap-4 min-h-0">
          {layersA.map((layer, i) => (
            <React.Fragment key={layer.tag}>
              <div
                className={`flex-1 min-w-0 rounded-2xl border p-5 flex flex-col ${
                  layer.core
                    ? 'bg-gradient-to-b from-[#003bb3]/80 to-[#001430]/80 border-[#60A5FA]/40 shadow-[0_0_30px_rgba(0,76,229,0.25)]'
                    : 'bg-[#111115] border-white/10'
                }`}
              >
                <div className="flex items-baseline justify-between mb-4 shrink-0">
                  <span className={`text-[24px] font-black text-white flex items-center gap-2.5`}>
                    <span className={`w-1.5 h-6 rounded-full ${layer.bar}`} />
                    {layer.tag}
                  </span>
                  <span className="text-[15px] font-black text-white/20 font-['Montserrat'] tracking-[0.2em]">
                    {layer.en}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-3">
                  {layer.items.map((it) => (
                    <div
                      key={it.t}
                      className={`rounded-xl px-4 py-3 ${
                        layer.core ? 'bg-white/[0.08] border border-white/20' : 'bg-white/[0.03] border border-white/10'
                      }`}
                    >
                      <div className="text-[19px] font-bold text-white leading-tight font-['Montserrat']">{it.t}</div>
                      <div className="text-[15px] text-zinc-400 mt-1 leading-snug">{it.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              {i < layersA.length - 1 && <RightArrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 运行时数据流时序
 * 构建时离线管线 → 运行时浏览器内流程 → 输出看板，强调「系统怎么跑起来」
 * ============================================================ */
const buildFlow = [
  { t: '电商评论源 · Excel', d: '汇总表 + 明细' },
  { t: 'extract-data.mjs', d: '清洗 · 情感映射 · 聚合' },
  { t: 'dataset.json', d: '静态数据集，打包进前端' },
];

const runtimeFlow = [
  { t: 'SPA 启动', d: 'Vite + React 加载，数据随包就绪' },
  { t: 'StoreProvider', d: '建立全局商品筛选范围' },
  { t: 'ProductSwitcher', d: '用户切换商品，全站同步' },
  { t: 'useScoped()', d: '按范围派生评论与统计' },
  { t: '页面 + SVG 图表', d: '渲染分析视图与可视化' },
  { t: 'ModalProvider', d: '点击评论弹出详情 / 看图' },
];

export function Page_UserCommentArchitecture_B() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        <span className="text-white font-bold">构建时</span>把原始评论离线加工成静态数据集，
        <span className="text-white font-bold">运行时</span>由浏览器内的 React SPA 完成筛选、统计与可视化 —— 全程无后端。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-7 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none font-['MiSans'] flex flex-col gap-4">
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider">运行时数据流</span>
        </div>

        {/* 构建时泳道 */}
        <div className="shrink-0">
          <div className="text-[18px] font-bold text-zinc-400 mb-2.5 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-zinc-500 rounded-full" />
            构建时 · 离线数据管线
          </div>
          <div className="flex items-stretch gap-3">
            {buildFlow.map((s, i) => (
              <React.Fragment key={s.t}>
                <div className="flex-1 bg-[#111115] border border-white/10 rounded-xl px-5 py-3.5 flex flex-col justify-center">
                  <div className="text-[20px] font-bold text-white leading-tight font-['Montserrat']">{s.t}</div>
                  <div className="text-[15px] text-zinc-400 mt-1">{s.d}</div>
                </div>
                {i < buildFlow.length - 1 && <RightArrow />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 运行时泳道 */}
        <div className="shrink-0">
          <div className="text-[18px] font-bold text-blue-400 mb-2.5 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />
            运行时 · 浏览器内（React SPA）
          </div>
          <div className="rounded-2xl bg-gradient-to-b from-[#003bb3]/60 to-[#001430]/60 border border-[#60A5FA]/40 shadow-[0_0_30px_rgba(0,76,229,0.2)] p-4">
            <div className="flex items-stretch gap-2.5">
              {runtimeFlow.map((s, i) => (
                <React.Fragment key={s.t}>
                  <div className="flex-1 min-w-0 bg-white/[0.08] border border-white/20 rounded-xl px-3.5 py-3 flex flex-col justify-center backdrop-blur">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#004CE5]/40 border border-[#7FA6FF]/50 text-[12px] font-black text-white flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-[17px] font-bold text-white leading-tight font-['Montserrat'] truncate">{s.t}</span>
                    </div>
                    <div className="text-[14px] text-blue-100/70 leading-snug">{s.d}</div>
                  </div>
                  {i < runtimeFlow.length - 1 && (
                    <div className="flex items-center shrink-0">
                      <svg className="w-6 h-6 text-blue-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 输出：截图带 */}
        <div className="flex-1 min-h-0 flex flex-col">
          <ScreenshotStrip height="100%" note="输出 · 10 屏分析看板（真实系统界面）" />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture_A.hideHeader = true;
Page_UserCommentArchitecture_B.hideHeader = true;
