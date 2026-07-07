import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词总览 · HTML 复刻版。
 * 样式逐行移植自 GEO Web 源码（~/Code/GEO_admin/GEO Web）：
 *   - 页面骨架 features/dashboard/index.tsx + components/layout/header.tsx
 *   - KPI 卡 features/dashboard/components/overview-header.tsx
 *   - 提及率区块 features/dashboard/components/overview-charts.tsx + components/chart-section.tsx
 *   - 筛选条 components/page-filter-toolbar.tsx
 *   - 图表基础样式 components/ui/chart-base.tsx
 * 主题色为 shadcn 蓝灰系（styles/theme.css）：
 *   border/input #e2e8f0, muted/secondary #f1f5f9, muted-foreground #64748b, foreground #0f172a
 */

const C = {
  border: '#e2e8f0',
  muted: '#f1f5f9',
  mutedFg: '#64748b',
  fg: '#0f172a',
  axis: '#888888',
  grid: '#f0f0f0',
  blue: '#3b82f6',
  itemTitle: '#585858',
};

/* ── 通用小件 ── */

const HelpIcon = () => (
  <svg className="size-3.5 shrink-0" style={{ color: 'rgba(100,116,139,0.6)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
  </svg>
);

const ChevronDown = () => (
  <svg className="size-4 opacity-50 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* lucide Globe：logo 加载失败时的默认图标（对应 GEO Web CachedImage 的 fallback） */
const GlobeIcon = () => (
  <svg className="size-5" style={{ color: C.mutedFg }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);

/* 带兜底的 logo 图片：加载失败或无 URL 时显示地球图标 */
function LogoWithFallback({ src, alt, title, className }) {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) return <GlobeIcon />;
  return <img src={src} alt={alt} title={title} className={className} onError={() => setFailed(true)} />;
}

/* shadcn Button variant=outline size=sm + border-dashed（筛选条按钮） */
function FilterPill({ icon, title, value }) {
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

/* page-filter-toolbar.tsx 里的目标产品按钮（variant=secondary） */
function TargetProductButton({ name }) {
  return (
    <button
      type="button"
      className="inline-flex h-8 shrink-0 items-center gap-1 rounded-md px-3 text-sm font-medium"
      style={{ backgroundColor: C.muted, color: C.fg }}
    >
      <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-500">
        {/* lucide LocateFixed */}
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

/* overview-header.tsx 的 KPI 卡（Card py-3 + CardContent px-5 py-2） */
function KpiCard({ label, children }) {
  return (
    <div className="flex flex-col rounded-xl border bg-white py-3 shadow-sm" style={{ borderColor: C.border }}>
      <div className="px-5 py-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <span className="text-base font-bold" style={{ color: C.fg }}>{label}</span>
            <HelpIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

/* overview-charts.tsx 的竞品对比开关（shadcn Switch，未选中态） */
function CompetitorToggle() {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-[1.15rem] w-8 items-center rounded-full p-0.5" style={{ backgroundColor: C.border }}>
        <span className="size-4 rounded-full bg-white shadow" />
      </span>
      <span className="text-sm" style={{ color: C.mutedFg }}>竞品对比</span>
    </div>
  );
}

/* 趋势图底部的复选框式图例（mention-rate-trend-chart CustomLegend） */
function ChartLegend({ name }) {
  return (
    <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 pt-4 pl-[30px]">
      <div className="flex items-center gap-1.5">
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] border-2" style={{ backgroundColor: C.blue, borderColor: C.blue }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-sm" style={{ color: C.mutedFg }}>{name}</span>
        <span className="flex h-5 items-center rounded px-1 text-[10px]" style={{ backgroundColor: C.muted, color: C.mutedFg }}>
          目标产品
        </span>
      </div>
    </div>
  );
}

/* ── 图表（复刻 recharts + chart-base.tsx 的渲染效果） ── */

const fmtChartDate = (dateStr) => {
  const [, m, d] = dateStr.split('-');
  return `${Number(m)}月${Number(d)}日`;
};

/* ── 两张图共用的几何参数：总高一致，保证 viewBox 缩放后文字大小一致 ── */
const CHART = {
  width: 620,
  height: 220,
  axisW: 50, // chart-base ChartYAxis width=50
};

const fmtTick = (t) => `${Number(t.toFixed(1))}%`;

/* Y 轴刻度文字 + 对应虚线网格（ChartGrid horizontalCoordinatesGenerator 只在刻度处画线） */
function ChartTicks({ ticks, y, width }) {
  return ticks.map((t, i) => (
    <g key={i}>
      <line x1={CHART.axisW} x2={width} y1={y(t)} y2={y(t)} stroke={C.grid} strokeWidth="1" strokeDasharray="3 3" />
      <text x={CHART.axisW - 8} y={y(t) + 4} textAnchor="end" fontSize="12" fill={C.axis}>
        {fmtTick(t)}
      </text>
    </g>
  ));
}

/* 移植 chart-y-axis.ts computeAdaptiveYAxis（autoOccupancyFromSpan 默认参数）：
   轴范围以数据中点对称展开，5 个刻度取轴范围的 1/6~5/6 内部等分点 */
function adaptiveYAxis(values) {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const span = dataMax - dataMin;
  const mid = (dataMin + dataMax) / 2;
  // 放大倍数：span=0 → ×2，span≥30 → ×1，线性过渡
  const mag = Math.max(1, 2 - Math.min(1, Math.max(0, span) / 30));
  const occupancy = span === 0 ? 1 : Math.min(99, Math.max(1, span * mag));
  const axisSpan = span > 0 ? span / (occupancy / 100) : 10;
  let min = mid - axisSpan / 2;
  let max = mid + axisSpan / 2;
  if (min < 0) { max -= min; min = 0; }
  if (max > 100) { min -= max - 100; max = 100; }
  min = Math.max(0, min);
  max = Math.min(100, max);
  const ticks = Array.from({ length: 5 }, (_, i) => Math.round((min + ((max - min) / 6) * (i + 1)) * 10) / 10);
  return { min, max, ticks };
}

/* 单调三次插值（Fritsch–Carlson），等价 recharts type='monotone' 的平滑曲线 */
function monotonePath(pts) {
  const n = pts.length;
  if (n < 3) return pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
  const dx = [], m = [];
  for (let i = 0; i < n - 1; i++) {
    dx.push(pts[i + 1][0] - pts[i][0]);
    m.push((pts[i + 1][1] - pts[i][1]) / dx[i]);
  }
  const t = [m[0]];
  for (let i = 1; i < n - 1; i++) t.push(m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2);
  t.push(m[n - 2]);
  for (let i = 0; i < n - 1; i++) {
    if (m[i] === 0) { t[i] = 0; t[i + 1] = 0; continue; }
    const a = t[i] / m[i];
    const b = t[i + 1] / m[i];
    const s = a * a + b * b;
    if (s > 9) {
      const f = 3 / Math.sqrt(s);
      t[i] = f * a * m[i];
      t[i + 1] = f * b * m[i];
    }
  }
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    d += `C${pts[i][0] + dx[i] / 3},${pts[i][1] + (t[i] * dx[i]) / 3},${pts[i + 1][0] - dx[i] / 3},${pts[i + 1][1] - (t[i + 1] * dx[i]) / 3},${pts[i + 1][0]},${pts[i + 1][1]}`;
  }
  return d;
}

/* 折线趋势图：monotone 平滑蓝线 + 自适应 Y 轴（内部刻度） */
function TrendLineChart({ data }) {
  const { width, height, axisW } = CHART;
  const topPad = 10;
  const bottomH = 30;
  const plotH = height - topPad - bottomH;

  const { min: yMin, max: yMax, ticks } = adaptiveYAxis(data.map((d) => d.value));

  const xPad = 26; // ChartXAxis padding left/right 26
  const plotW = width - axisW - xPad * 2;
  const n = data.length;
  const axisY = topPad + plotH;
  const x = (i) => axisW + xPad + (n <= 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v) => topPad + plotH - ((v - yMin) / (yMax - yMin || 1)) * plotH;
  const pts = data.map((d, i) => [x(i), y(d.value)]);
  const linePath = monotonePath(pts);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
      <ChartTicks ticks={ticks} y={y} width={width} />
      <line x1={axisW} x2={width} y1={axisY} y2={axisY} stroke={C.grid} strokeWidth="1" />
      {data.map((d, i) => (
        <text key={i} x={x(i)} y={axisY + 20} textAnchor="middle" fontSize="12" fill={C.axis}>
          {d.label}
        </text>
      ))}
      <path d={linePath} fill="none" stroke={C.blue} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {/* 只有一个数据点时画不出线，用实心圆点标出该点 */}
      {n === 1 && <circle cx={pts[0][0]} cy={pts[0][1]} r="4" fill={C.blue} />}
    </svg>
  );
}

/* 平台对比柱状图：#252525 深色柱、barSize 30、顶部圆角2、
   Y轴 padding bottom 15（柱底停在最低刻度线上）、margin top 50 */
function PlatformBarChart({ data }) {
  const { width, height, axisW } = CHART;
  const topPad = 20;
  const bottomH = 60; // XAxis height=60（logo+名字）
  const plotH = height - topPad - bottomH;

  const values = data.map((d) => d.value);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const range = dataMax - dataMin;
  const pad = range * 0.1;
  let yMin = Math.round(Math.max(0, dataMin - pad) * 10) / 10;
  let yMax = Math.round(Math.min(100, dataMax + pad) * 10) / 10;
  if (yMax - yMin < 1) {
    yMin = 0;
    yMax = Math.min(100, Math.max(10, dataMax + 5));
  }
  const ticks = Array.from({ length: 5 }, (_, i) => Math.round((yMin + ((yMax - yMin) / 4) * i) * 10) / 10);

  const plotW = width - axisW;
  const axisY = topPad + plotH;
  const padBottom = 15; // ChartYAxis padding={{ bottom: 15 }}
  const baseY = axisY - padBottom;
  const slot = plotW / data.length;
  const barW = 30;
  const y = (v) => topPad + (plotH - padBottom) * (1 - (v - yMin) / (yMax - yMin || 1));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
      <ChartTicks ticks={ticks} y={y} width={width} />
      <line x1={axisW} x2={width} y1={axisY} y2={axisY} stroke={C.grid} strokeWidth="1" />
      {data.map((d, i) => {
        const cx = axisW + slot * i + slot / 2;
        const barTop = y(d.value);
        const barH = Math.max(baseY - barTop, 0);
        return (
          <g key={d.platform}>
            <path
              d={`M${cx - barW / 2},${barTop + 2} a2,2 0 0 1 2,-2 h${barW - 4} a2,2 0 0 1 2,2 v${Math.max(barH - 2, 0)} h${-barW} Z`}
              fill="#252525"
            />
            {d.iconUrl && <image href={d.iconUrl} x={cx - 12} y={axisY + 6} width="24" height="24" />}
            <text x={cx} y={axisY + 46} textAnchor="middle" fontSize="12" fill={C.axis}>
              {d.platform}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* chart-section.tsx：区块标题行 + 双卡布局 */
function ChartSection({ title, items }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold tracking-tight" style={{ color: C.fg }}>{title}</h2>
        <HelpIcon />
        <span
          className="ml-4 flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 text-xs"
          style={{ color: C.fg, boxShadow: '0 1px 3px 0px rgba(128,128,128,0.15)' }}
        >
          查看明细
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="text-sm" style={{ color: C.itemTitle }}>{item.title}</span>
            <div className="flex h-full flex-col rounded-xl border bg-white py-0 shadow-sm" style={{ borderColor: C.border }}>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-0 flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm" style={{ color: C.mutedFg }}>{item.metricLabel}</span>
                    <span className="text-2xl font-bold" style={{ color: C.fg }}>{item.metric}</span>
                  </div>
                  {item.headerAction}
                </div>
                <div className="flex w-full flex-1 flex-col">{item.chart}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Page_SkyworthReport_OptDashboardHtml() {
  const { meta, stats, influence, citations } = report;
  const mentionRate = stats.brand_mention_rate;
  const avgPosition = stats.avg_position;
  const targetRank = influence.list.find((b) => b.is_target)?.rank ?? null;
  const topPlatforms = citations.platform_stats.slice(0, 3);
  const targetName = meta.target_brand_name || meta.target_product;

  const fmtHeaderDate = (s) => {
    const [yy, mm, dd] = s.split('-');
    return `${yy}/${Number(mm)}/${Number(dd)}`;
  };

  const trendData = stats.daily_stats.map((d) => ({ label: fmtChartDate(d.date), value: d.mention_rate ?? 0 }));
  const barData = stats.platform_stats.map((p) => ({
    platform: p.platform_name,
    value: p.brand_mention_rate ?? 0,
    iconUrl: p.platform_logo,
  }));

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">
          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 核心指标表现概览
            </h1>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center min-h-0 pb-1">
            <div className="w-full h-full max-w-[1700px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col min-h-0">
              <div
                className="flex-1 rounded-xl overflow-hidden bg-white text-left"
                style={{ fontFamily: "'MiSans', 'Inter', sans-serif", color: C.fg }}
              >
                <div style={{ zoom: 1.2 }}>
                  {/* Header 第一行：页面标题独占一行 */}
                  <div className="flex h-14 items-center px-4 pt-4">
                    <h1 className="text-xl font-semibold" style={{ color: C.fg }}>总览</h1>
                  </div>

                  {/* Header 第二行：筛选工具栏 */}
                  <div className="flex w-full items-center gap-2 px-4 pb-4">
                    <FilterPill
                      icon={
                        <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
                        </svg>
                      }
                      title="日期"
                      value={`${fmtHeaderDate(meta.start_date)} - ${fmtHeaderDate(meta.end_date)}`}
                    />
                    <FilterPill
                      icon={
                        <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
                        </svg>
                      }
                      title="平台"
                      value="全部"
                    />
                    <FilterPill
                      icon={
                        <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="5" width="6" height="6" rx="1" /><path d="m3 17 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" />
                        </svg>
                      }
                      title="词条"
                      value="全部"
                    />
                    <TargetProductButton name={targetName} />
                  </div>

                  {/* Main 内容区 */}
                  <div className="flex flex-col gap-6 px-4 pb-4">
                    {/* KPI 卡片 */}
                    <div className="grid grid-cols-4 gap-4">
                      <KpiCard label="提及率">
                        <span className="text-3xl font-bold">{mentionRate !== null ? `${mentionRate}%` : '-'}</span>
                      </KpiCard>
                      <KpiCard label="平均提及位次">
                        <span className="text-3xl font-bold">
                          {avgPosition !== null ? (Number(avgPosition) === 0 ? 'NO. --' : `NO. ${avgPosition}`) : '-'}
                        </span>
                      </KpiCard>
                      <KpiCard label="行业影响力排名">
                        <span className="text-3xl font-bold">{targetRank !== null ? `NO. ${targetRank}` : '-'}</span>
                      </KpiCard>
                      <KpiCard label="Top引用来源">
                        <div className="flex items-center gap-3">
                          {topPlatforms.map((p, i) => (
                            <span key={i} className="flex size-[34px] items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: C.muted }}>
                              <LogoWithFallback
                                src={p.logo_url}
                                alt={p.platform_name}
                                title={p.platform_name}
                                className="size-[34px] rounded-full object-contain"
                              />
                            </span>
                          ))}
                        </div>
                      </KpiCard>
                    </div>

                    {/* 提及率区块 */}
                    <ChartSection
                      title="提及率"
                      items={[
                        {
                          title: '提及率随时间的变化趋势',
                          metricLabel: '目标产品提及率',
                          metric: `${mentionRate}%`,
                          headerAction: <CompetitorToggle />,
                          chart: (
                            <>
                              <div className="flex-1">
                                <TrendLineChart data={trendData} />
                              </div>
                              <ChartLegend name={targetName} />
                            </>
                          ),
                        },
                        {
                          title: '提及率在不同AI平台的对比',
                          metricLabel: '目标产品提及率',
                          metric: `${mentionRate}%`,
                          chart: (
                            <div className="flex-1">
                              <PlatformBarChart data={barData} />
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptDashboardHtml.hideHeader = true;
