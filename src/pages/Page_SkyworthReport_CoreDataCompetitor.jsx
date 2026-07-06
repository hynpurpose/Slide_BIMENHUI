import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { C } from '../components/GeoWebUI';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

const RANK_COLORS = { 1: '#FFD700', 2: '#E0E0E0', 3: '#F5C28C' };

function RankBadge({ rank }) {
  if (RANK_COLORS[rank]) {
    return (
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold shrink-0"
        style={{ backgroundColor: RANK_COLORS[rank], color: '#1f2937' }}
      >
        {rank}
      </div>
    );
  }
  return (
    <div className="flex h-6 w-6 items-center justify-center text-xs font-medium shrink-0" style={{ color: C.mutedFg }}>
      {rank}
    </div>
  );
}

function TargetProductTag() {
  return (
    <span
      className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium leading-none"
      style={{ backgroundColor: '#EBF2FF', color: '#64748b' }}
    >
      目标产品
    </span>
  );
}

const TITLE_LEADING = 'flex items-center gap-3 text-left';

function SectionTitle({ children }) {
  return (
    <h3 className={`text-[24px] xl:text-[26px] font-bold text-white tracking-wider ${TITLE_LEADING}`}>
      <span className="w-1.5 h-5.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
      {children}
    </h3>
  );
}

function RankingCard({ title, valueLabel, data, compact = false, leading = false }) {
  const cellPx = compact ? 'px-2' : 'px-3';
  const thBase = compact
    ? 'h-8 text-start align-middle text-xs font-medium whitespace-nowrap'
    : 'h-9 text-start align-middle text-sm font-medium whitespace-nowrap';
  const rowPy = compact ? 'py-2' : 'py-2.5';
  const nameSize = compact ? 'text-xs' : 'text-sm';
  const valueSize = compact ? 'text-sm' : 'text-base';
  const valueCol = compact ? 'w-[56px]' : 'w-[96px]';

  const titleClass = compact
    ? 'text-[15px] xl:text-[17px] font-bold text-white shrink-0 truncate'
    : 'text-[20px] xl:text-[22px] font-bold text-white shrink-0 truncate';

  const titleEl = <span className={titleClass}>{title}</span>;

  return (
    <div className="flex flex-col gap-2 h-full min-h-0 text-left">
      {leading ? (
        <div className={TITLE_LEADING}>
          <span className="w-1.5 shrink-0" aria-hidden="true" />
          {titleEl}
        </div>
      ) : (
        titleEl
      )}
      <div
        className="flex-grow flex flex-col rounded-xl border bg-white shadow-sm min-h-0 overflow-hidden"
        style={{ borderColor: C.border, color: C.fg }}
      >
        <div className={`flex flex-1 flex-col min-h-0 ${compact ? 'p-3' : 'p-4'}`}>
          <div className="flex-grow min-h-0 overflow-hidden">
            <table className="w-full caption-bottom border-collapse table-fixed">
              <colgroup>
                <col className="w-[36px]" />
                <col />
                <col className={valueCol} />
              </colgroup>
              <thead>
                <tr className="border-b" style={{ borderColor: C.border }}>
                  <th className={`${thBase} ${cellPx}`} />
                  <th className={`${thBase} ${cellPx}`} style={{ color: C.fg }}>
                    产品名称
                  </th>
                  <th className={`${thBase} ${cellPx} text-right tabular-nums`} style={{ color: C.fg }}>
                    {valueLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0" style={{ borderColor: C.border }}>
                    <td className={`${cellPx} ${rowPy} align-middle`}>
                      <RankBadge rank={idx + 1} />
                    </td>
                    <td className={`${cellPx} ${rowPy} align-middle`}>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className={`${nameSize} font-medium truncate`} style={{ color: C.fg }}>
                          {item.name}
                        </span>
                        {item.self && <TargetProductTag />}
                      </div>
                    </td>
                    <td className={`${cellPx} ${rowPy} text-right align-middle tabular-nums ${valueSize} font-medium`} style={{ color: C.fg }}>
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Page_SkyworthReport_CoreDataCompetitor() {
  // === 品类层面竞品对比数据 (5行) ===
  const mentionRateData = [
    { name: '创维', value: '73.6%', self: true },
    { name: 'TCL', value: '61.5%' },
    { name: '海信', value: '58.2%' },
    { name: '三星', value: '47.9%' },
    { name: '小米', value: '44.3%' },
  ];

  const top1RateData = [
    { name: '创维', value: '41.2%', self: true },
    { name: '海信', value: '38.5%' },
    { name: 'TCL', value: '29.7%' },
    { name: '华为智慧屏', value: '21.3%' },
  ];

  const avgRankData = [
    { name: '海信', value: 'NO. 2.6' },
    { name: '创维', value: 'NO. 2.8', self: true },
    { name: 'TCL', value: 'NO. 3.5' },
    { name: '三星', value: 'NO. 4.8' },
    { name: '小米', value: 'NO. 5.2' },
  ];

  // === 产品层面竞品对比数据 (扩展为5行) ===
  const productA7H = [
    { name: '海信 E5N', value: '74.5%' },
    { name: '创维 A7H Pro', value: '71.0%', self: true },
    { name: 'TCL T7K', value: '69.8%' },
    { name: '三星 Q60D', value: '58.2%' },
    { name: '小米 S Pro', value: '55.4%' },
  ];

  const productA8H = [
    { name: 'TCL T7K Pro', value: '72.1%' },
    { name: '海信 E7N', value: '70.4%' },
    { name: '创维 A8H', value: '66.3%', self: true },
    { name: '三星 Q70D', value: '52.6%' },
    { name: '小米 TV S', value: '49.8%' },
  ];

  const productA10H = [
    { name: '创维 A10H', value: '78.4%', self: true },
    { name: '海信 E8N', value: '75.2%' },
    { name: '三星 The Frame', value: '61.0%' },
    { name: 'TCL Q10K Pro', value: '58.5%' },
    { name: '小米 S Pro 85', value: '51.2%' },
  ];

  const productQ7H = [
    { name: '海信 U7N', value: '68.9%' },
    { name: 'TCL Q10K', value: '64.2%' },
    { name: '创维 Q7H', value: '52.1%', self: true },
    { name: '三星 Q80C', value: '48.7%' },
    { name: '索尼 X90L', value: '45.3%' },
  ];

  const productQ8H = [
    { name: '索尼 A95L', value: '66.5%' },
    { name: '三星 QN900', value: '63.8%' },
    { name: '创维 Q8H', value: '58.7%', self: true },
    { name: '海信 U8KL', value: '54.2%' },
    { name: 'TCL X11H', value: '52.5%' },
  ];

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-8 sm:px-10 py-12 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

        {/* 页面标题 */}
        <div className="text-center shrink-0 mb-2">
          <h1 className="text-[36px] xl:text-[40px] font-bold text-white tracking-widest leading-tight">
            竞品对比
          </h1>
        </div>

        <div className="w-full max-w-[1840px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 justify-center gap-10">

          {/* ===== 品类优化词竞品对比 (并列三个表) ===== */}
          <div className="shrink-0 flex flex-col gap-3 text-left">
            <SectionTitle>品类优化词竞品对比</SectionTitle>
            <div className="grid grid-cols-3 gap-6 h-[280px]">
              <RankingCard leading title="提及率排名" valueLabel="提及率" data={mentionRateData} />
              <RankingCard title="TOP1 提及率排名" valueLabel="Top1提及率" data={top1RateData} />
              <RankingCard title="平均提及位次排名" valueLabel="平均提及位次" data={avgRankData} />
            </div>
          </div>

          {/* ===== 产品专属优化词竞品对比 (并列五个表) ===== */}
          <div className="shrink-0 flex flex-col gap-3 text-left">
            <SectionTitle>
              产品专属优化词竞品对比{' '}
              <span className="text-[16px] xl:text-[18px] text-white font-normal ml-2">（提及率排名对比）</span>
            </SectionTitle>
            <div className="grid grid-cols-5 gap-4 h-[240px]">
              <RankingCard leading title="创维 A7H Pro" valueLabel="提及率" data={productA7H} compact />
              <RankingCard title="创维 A8H" valueLabel="提及率" data={productA8H} compact />
              <RankingCard title="创维 A10H" valueLabel="提及率" data={productA10H} compact />
              <RankingCard title="创维 Q7H" valueLabel="提及率" data={productQ7H} compact />
              <RankingCard title="创维 Q8H" valueLabel="提及率" data={productQ8H} compact />
            </div>
          </div>

          {/* ===== 极简数据总结 ===== */}
          <div className="shrink-0 border-t border-white/10 pt-8 mt-2">
            <div className="flex items-start gap-5">
              <span className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 bg-[#004CE5] px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(0,76,229,0.3)]">
                数据总结
              </span>
              <p className="text-[19px] xl:text-[21px] text-zinc-200 leading-relaxed text-justify flex-1">
                品类层面，创维在提及率（<strong className="text-white font-bold">73.6%</strong>）与 TOP1 率（
                <strong className="text-white font-bold">41.2%</strong>）上居行业第一，优势稳固，但平均提及位次微弱落后于海信。产品层面，旗舰{' '}
                <strong className="text-white font-bold">A10H</strong> 表现抢眼（提及率 78.4% 排名第一）；但走量款与线下款（
                <strong className="text-white font-bold">A8H / A7H Pro / Q8H / Q7H</strong>
                ）提及率仍被海信、TCL 或索尼超越，面临明显的局部拦截压力。
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_CoreDataCompetitor.hideHeader = true;
