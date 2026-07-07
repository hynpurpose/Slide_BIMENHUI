import React from 'react';
import SlideLayout from '../components/SlideLayout';
import overview from '../data/geoOverview.json';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

const METRIC_COLS = [
  { key: 'mention', label: '提及率', color: '#004CE5' },
  { key: 'top1', label: 'TOP1 提及率', color: '#60A5FA' },
  { key: 'top3', label: 'TOP3 提及率', color: '#34D399' },
];

function Num({ children, className = '' }) {
  return (
    <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {children}
    </span>
  );
}

const pct = (v) => (v === null || v === undefined ? '—' : `${v}%`);

function getRows() {
  const cat = overview.category_opt;
  const prodAvg = overview.product_opt_avg;
  return [
    { label: '品类优化词', mention: cat.mention_rate, top1: cat.top1_rate, top3: cat.top3_rate },
    { label: '产品专属优化词', sub: '(五款产品汇总)', mention: prodAvg.mention_rate, top1: prodAvg.top1_rate, top3: prodAvg.top3_rate },
  ];
}

function ProgressBar({ value, color }) {
  const w = typeof value === 'number' ? Math.min(value, 100) : 0;
  return (
    <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden mt-2">
      <div className="h-full rounded-full transition-all" style={{ width: `${w}%`, backgroundColor: color }} />
    </div>
  );
}

function SummaryBlock({ className = '' }) {
  return (
    <div className={`shrink-0 border-t border-white/10 pt-8 mt-6 ${className}`}>
      <div className="flex items-start gap-6">
        <span className="text-[22px] xl:text-[24px] font-bold text-white shrink-0 bg-[#004CE5] px-5 py-2.5 rounded-xl shadow-[0_0_10px_rgba(0,76,229,0.3)]">数据总结</span>
        <p className="text-[22px] xl:text-[24px] text-zinc-200 leading-relaxed text-justify flex-1">
          品牌层面，创维在品类大词的<strong className="text-white font-bold">提及率为 59.4%</strong>，AI 已具备基础认知，但 <strong className="text-white font-bold">TOP1 仅 24.7%</strong>，超过七成首推位仍被竞品占据，首推转化是当前最大缺口。产品汇总层面，五款重点产品整体提及率为 <strong className="text-[#60A5FA] font-bold">35.5%</strong>，TOP1 仅为 <strong className="text-[#60A5FA] font-bold">15.5%</strong>，且各产品差异悬殊（A7H Pro 达 61.7%，Q7H 尚未被 AI 提及），亟需通过专属场景与长尾优化词的语料覆盖，整体拉升产品级的认知度与推荐精度。
        </p>
      </div>

      <div className="mt-6 pl-[calc(7.5rem+1.5rem)] flex flex-col gap-2">
        <a
          href="https://geotopone.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[20px] xl:text-[22px] font-semibold text-[#60A5FA] hover:text-[#93C5FD] underline underline-offset-4 decoration-[#60A5FA]/60 hover:decoration-[#93C5FD] transition-colors w-fit"
        >
          查看监测系统完整数据
        </a>
        <div className="flex flex-col gap-1 text-[18px] xl:text-[20px] text-zinc-400 leading-relaxed">
          <p>
            帐号：<span className="text-zinc-200 font-medium">chuangweidianshi1</span>
          </p>
          <p>
            密码：<span className="text-zinc-200 font-medium">123456</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function CoreDataSelfPage({ TableComponent, contentClassName = '', summaryClassName = '' }) {
  const rows = getRows();

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-20 sm:px-28 py-16 overflow-hidden animate-fade-in bg-black">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className={`w-full max-w-[1600px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-10 ${contentClassName}`}>

          <div className="text-center shrink-0 mb-4">
            <h1 className="text-[36px] xl:text-[40px] font-bold text-white tracking-widest leading-tight">
              核心数据总览
            </h1>
          </div>

          <div className="shrink-0 mt-2">
            <TableComponent rows={rows} />
          </div>

          <SummaryBlock className={summaryClassName} />

        </div>
      </div>
    </SlideLayout>
  );
}

/* ── 方案 A：卡片面板表格 ── */
function TableVariantA({ rows }) {
  const cellBorder = 'border-r border-white/20 last:border-r-0';
  return (
    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/25 border-t-2 border-t-[#004CE5] rounded-2xl overflow-hidden shadow-xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#004CE5]/15 border-b border-[#004CE5]/60">
            {['优化词分类', '提及率', 'TOP1 提及率', 'TOP3 提及率'].map((h, i) => (
              <th
                key={h}
                className={`py-5 text-[20px] xl:text-[22px] font-bold text-zinc-200 ${cellBorder} ${i === 0 ? 'pl-8 w-[28%]' : 'pl-6 w-[24%]'}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`${i < rows.length - 1 ? 'border-b border-white/20' : ''} hover:bg-white/[0.02] transition-colors`}
            >
              <td className={`py-8 xl:py-10 pl-8 align-middle ${cellBorder}`}>
                <div className="flex items-center gap-3">
                  <span className="w-1 h-10 bg-[#004CE5] rounded-full shrink-0" />
                  <div>
                    <div className="font-bold text-white text-[22px] xl:text-[24px]">{row.label}</div>
                    {row.sub && <div className="text-[16px] xl:text-[18px] text-white mt-1">{row.sub}</div>}
                  </div>
                </div>
              </td>
              {METRIC_COLS.map((col) => (
                <td key={col.key} className={`py-8 xl:py-10 pl-6 align-middle ${cellBorder}`}>
                  <Num className="text-[52px] xl:text-[58px] font-extrabold text-white leading-none tracking-tight">
                    {pct(row[col.key])}
                  </Num>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── 方案 B：仪表盘指标表格（带进度条） ── */
function TableVariantB({ rows }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.1]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/[0.04]">
            <th className="py-4 pl-6 w-[26%] text-[18px] xl:text-[20px] font-bold text-zinc-400 border-r border-white/[0.06]">优化词分类</th>
            {METRIC_COLS.map((col) => (
              <th
                key={col.key}
                className="py-4 px-5 text-[18px] xl:text-[20px] font-bold border-r border-white/[0.06] last:border-r-0"
                style={{ color: col.color }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} border-t border-white/[0.06]`}
            >
              <td className="py-7 xl:py-8 pl-6 align-middle border-r border-white/[0.06]">
                <div className="font-bold text-white text-[22px] xl:text-[24px]">{row.label}</div>
                {row.sub && <div className="text-[13px] xl:text-[14px] text-zinc-500 mt-1">{row.sub}</div>}
              </td>
              {METRIC_COLS.map((col) => (
                <td key={col.key} className="py-7 xl:py-8 px-5 align-middle border-r border-white/[0.06] last:border-r-0">
                  <Num className="text-[48px] xl:text-[54px] font-extrabold leading-none tracking-tight" style={{ color: col.color }}>
                    {pct(row[col.key])}
                  </Num>
                  <ProgressBar value={row[col.key]} color={col.color} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── 方案 C：双面板对比表格 ── */
function MetricCell({ label, value, accent }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
      <span className="text-[13px] xl:text-[14px] text-zinc-500 font-medium mb-2">{label}</span>
      <Num className="text-[44px] xl:text-[50px] font-extrabold leading-none tracking-tight" style={{ color: accent }}>
        {pct(value)}
      </Num>
    </div>
  );
}

function TableVariantC({ rows }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 xl:p-7 flex flex-col shadow-xl"
          style={{ borderTopWidth: '3px', borderTopColor: i === 0 ? '#004CE5' : '#60A5FA' }}
        >
          <div className="mb-5 pb-4 border-b border-white/[0.08]">
            <h3 className="text-[24px] xl:text-[26px] font-bold text-white">{row.label}</h3>
            {row.sub && <p className="text-[14px] xl:text-[15px] text-zinc-500 mt-1">{row.sub}</p>}
          </div>
          <div className="grid grid-cols-3 gap-3 flex-1">
            {METRIC_COLS.map((col) => (
              <MetricCell key={col.key} label={col.label} value={row[col.key]} accent={col.color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Page_SkyworthReport_CoreDataSelf_A() {
  return (
    <CoreDataSelfPage
      TableComponent={TableVariantA}
      contentClassName="pt-4"
      summaryClassName="mt-14 pt-10"
    />
  );
}
Page_SkyworthReport_CoreDataSelf_A.hideHeader = true;

export function Page_SkyworthReport_CoreDataSelf_B() {
  return <CoreDataSelfPage TableComponent={TableVariantB} />;
}
Page_SkyworthReport_CoreDataSelf_B.hideHeader = true;

export function Page_SkyworthReport_CoreDataSelf_C() {
  return <CoreDataSelfPage TableComponent={TableVariantC} />;
}
Page_SkyworthReport_CoreDataSelf_C.hideHeader = true;

export function Page_SkyworthReport_CoreDataSelf() {
  return <Page_SkyworthReport_CoreDataSelf_A />;
}
Page_SkyworthReport_CoreDataSelf.hideHeader = true;

export default Page_SkyworthReport_CoreDataSelf_A;
