import React from 'react';

/**
 * GEO Web HTML 复刻页共享 UI 小件。
 * 样式移植自 ~/Code/GEO_admin/GEO Web 源码（shadcn 蓝灰主题 styles/theme.css）。
 */

export const C = {
  border: '#e2e8f0',
  muted: '#f1f5f9',
  mutedFg: '#64748b',
  fg: '#0f172a',
  axis: '#888888',
  grid: '#f0f0f0',
  blue: '#3b82f6',
  itemTitle: '#585858',
};

export const HelpIcon = () => (
  <svg className="size-3.5 shrink-0" style={{ color: 'rgba(100,116,139,0.6)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
  </svg>
);

export const ChevronDown = () => (
  <svg className="size-4 opacity-50 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* lucide Globe：logo 加载失败时的默认图标（对应 GEO Web CachedImage 的 fallback） */
export const GlobeIcon = ({ size = 20 }) => (
  <svg style={{ width: size, height: size, color: C.mutedFg }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);

/* 带兜底的 logo 图片：加载失败或无 URL 时显示地球图标 */
export function LogoWithFallback({ src, alt, title, className, fallbackSize = 20 }) {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) return <GlobeIcon size={fallbackSize} />;
  return <img src={src} alt={alt} title={title} className={className} onError={() => setFailed(true)} />;
}

/* shadcn Button variant=outline size=sm + border-dashed（page-filter-toolbar 筛选按钮） */
export function FilterPill({ icon, title, value }) {
  return (
    <button
      type="button"
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-dashed bg-white px-3 text-sm font-medium shadow-xs"
      style={{ borderColor: C.border, color: C.fg }}
    >
      {icon}
      {title}
      {value && (
        <>
          <span className="mx-2 h-4 w-px" style={{ backgroundColor: C.border }} />
          <span className="rounded-sm px-1 text-xs font-normal" style={{ backgroundColor: C.muted, color: C.fg }}>
            {value}
          </span>
        </>
      )}
      <ChevronDown />
    </button>
  );
}

/* page-filter-toolbar.tsx 的目标产品按钮（variant=secondary） */
export function TargetProductButton({ name }) {
  return (
    <button
      type="button"
      className="inline-flex h-8 shrink-0 items-center gap-1 rounded-md px-3 text-sm font-medium"
      style={{ backgroundColor: C.muted, color: C.fg }}
    >
      <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-500">
        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" x2="5" y1="12" y2="12" /><line x1="19" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="5" /><line x1="12" x2="12" y1="19" y2="22" /><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" />
        </svg>
      </span>
      目标产品
      <span className="ml-1 h-4 w-px bg-black" />
      <span className="max-w-[180px] truncate rounded-sm px-1 text-[14px] font-medium text-black" style={{ backgroundColor: C.muted }}>
        {name}
      </span>
    </button>
  );
}

export const CalendarIcon = () => (
  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
  </svg>
);

export const BotIcon = () => (
  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
  </svg>
);

export const ListTodoIcon = () => (
  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="6" height="6" rx="1" /><path d="m3 17 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" />
  </svg>
);

export const fmtHeaderDate = (s) => {
  const [yy, mm, dd] = s.split('-');
  return `${yy}/${Number(mm)}/${Number(dd)}`;
};

/* 标准筛选工具栏：日期 / 平台 / 词条 / 目标产品 */
export function FilterToolbar({ meta, extra }) {
  return (
    <div className="flex w-full items-center gap-2 px-4 pb-4">
      <FilterPill icon={<CalendarIcon />} title="日期" value={`${fmtHeaderDate(meta.start_date)} - ${fmtHeaderDate(meta.end_date)}`} />
      <FilterPill icon={<BotIcon />} title="平台" value="全部" />
      <FilterPill icon={<ListTodoIcon />} title="词条" value="全部" />
      <TargetProductButton name={meta.target_brand_name || meta.target_product} />
      {extra && <div className="ml-auto flex items-center gap-2">{extra}</div>}
    </div>
  );
}

/* 深色背景上的数字/结论高亮（白色加粗） */
export const HlD = ({ children }) => (
  <strong className="text-white font-bold">{children}</strong>
);

/* 深色分析区（放在白色数据面板【外部】的黑色底区域），文字浅色、字号大、可读性优先。
   以下三种布局共享同一视觉语言（蓝色 #004CE5 点缀 + text-zinc-300 正文），
   但排布不同，避免每页都是一排三个并列框。 */

/* 布局①：主结论 + 副要点（左侧一块高亮主结论 + 右侧两块副要点） */
export function AnalysisHighlightDark({ lead, points }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 flex flex-col justify-center gap-2 rounded-2xl border border-[#004CE5]/25 bg-gradient-to-br from-[#004CE5]/15 to-white/[0.01] p-5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,76,229,0.06)]">
        <div className="flex items-center gap-2">
          <span className="h-5 w-1.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          <span className="text-[20px] font-bold text-white">{lead.title}</span>
        </div>
        <div className="text-[17px] leading-relaxed text-zinc-200">{lead.body}</div>
      </div>
      <div className="col-span-8 grid grid-cols-2 gap-4">
        {points.map((p, i) => (
          <div key={i} className="flex flex-col justify-center gap-1.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl">
            <span className="text-[18px] font-bold text-white">{p.title}</span>
            <div className="text-[16px] leading-relaxed text-zinc-300">{p.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 布局②：递进流程（步骤卡片 + 箭头连接） */
export function AnalysisFlowDark({ steps }) {
  return (
    <div className="flex items-stretch gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#004CE5] text-[15px] font-bold text-white shadow-[0_0_8px_rgba(0,76,229,0.6)]">{i + 1}</span>
              <span className="text-[19px] font-bold text-white">{s.title}</span>
            </div>
            <div className="text-[16px] leading-relaxed text-zinc-300">{s.body}</div>
          </div>
          {i < steps.length - 1 && (
            <div className="flex shrink-0 items-center text-[#004CE5]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* 布局③：横向面板（左侧竖排标题 + 右侧多列蓝点要点） */
export function AnalysisPanelDark({ title, subtitle, points }) {
  const colClass = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' }[points.length] || 'grid-cols-3';
  return (
    <div className="flex gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl">
      <div className="flex w-[190px] shrink-0 flex-col justify-center gap-1 border-r border-white/10 pr-6">
        <div className="flex items-center gap-2">
          <span className="h-6 w-1.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          <span className="text-[21px] font-bold text-white">{title}</span>
        </div>
        {subtitle && <span className="pl-3.5 text-[13px] text-zinc-400">{subtitle}</span>}
      </div>
      <ul className={`grid flex-1 gap-x-7 gap-y-2 ${colClass}`}>
        {points.map((p, i) => (
          <li key={i} className="flex gap-2.5 text-[16px] leading-relaxed text-zinc-300">
            <span className="mt-[9px] inline-block size-1.5 shrink-0 rounded-full bg-[#004CE5]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* 深色外框 + 白色面板 + GEO Web 页面骨架（Header 标题行 / 筛选条 / 内容区）。
   analysis：可选，渲染在白色数据面板【外部】的黑色底区域（用 AnalysisCardsDark）。 */
export function GeoWebFrame({ slideTitle, pageTitle, meta, toolbarExtra, zoom = 1.2, children, analysis }) {
  return (
    <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
      <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">
        <div className="text-center shrink-0">
          <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">{slideTitle}</h1>
        </div>
        {/* 白色数据面板：只放数据，占据剩余空间 */}
        <div className="flex-1 flex flex-col justify-center items-center min-h-0">
          <div className="w-full h-full max-w-[1700px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col min-h-0">
            <div
              className="flex-1 rounded-xl overflow-hidden bg-white text-left"
              style={{ fontFamily: "'MiSans', 'Inter', sans-serif", color: C.fg }}
            >
              <div style={{ zoom }}>
                <div className="flex h-14 items-center px-4 pt-4">
                  <h1 className="text-xl font-semibold" style={{ color: C.fg }}>{pageTitle}</h1>
                </div>
                <FilterToolbar meta={meta} extra={toolbarExtra} />
                <div className="flex flex-col gap-4 px-4 pb-4">{children}</div>
              </div>
            </div>
          </div>
        </div>
        {/* 文字分析：黑色底区域，浅色大字 */}
        {analysis && <div className="shrink-0">{analysis}</div>}
      </div>
    </div>
  );
}
