import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { C } from '../components/GeoWebUI';
import overview from '../data/geoOverview.json';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

const RANK_COLORS = { 1: '#FFD700', 2: '#E0E0E0', 3: '#F5C28C' };

function RankBadge({ rank, compact = false }) {
  const size = compact ? 'h-5 w-5 text-[10px]' : 'h-6 w-6 text-xs';
  if (rank > 9) {
    return (
      <div
        className={`flex items-center justify-center font-medium shrink-0 ${compact ? 'text-[10px] w-[28px]' : 'text-xs w-8'}`}
        style={{ color: C.mutedFg }}
      >
        {rank}
      </div>
    );
  }
  if (RANK_COLORS[rank]) {
    return (
      <div
        className={`flex ${size} items-center justify-center rounded-full font-semibold shrink-0`}
        style={{ backgroundColor: RANK_COLORS[rank], color: '#1f2937' }}
      >
        {rank}
      </div>
    );
  }
  return (
    <div className={`flex ${size} items-center justify-center font-medium shrink-0`} style={{ color: C.mutedFg }}>
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
  const cellPx = compact ? 'px-1.5' : 'px-3';
  const thBase = compact
    ? 'h-7 align-middle text-[11px] font-medium whitespace-nowrap'
    : 'h-8 align-middle text-sm font-medium whitespace-nowrap';
  const rowPy = compact ? 'py-1' : 'py-2';
  const nameSize = compact ? 'text-[11px]' : 'text-sm';
  const valueSize = compact ? 'text-xs' : 'text-base';
  const valueCol = compact ? 'w-[52px]' : 'w-[96px]';
  const cardPad = compact ? 'p-2.5' : 'p-4';

  const valueCell = compact ? 'px-1.5 text-right tabular-nums' : 'px-3 text-right tabular-nums';

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
        <div className={`flex flex-1 flex-col min-h-0 ${cardPad}`}>
          <table className="w-full h-full caption-bottom border-collapse table-fixed">
            <colgroup>
              <col className={compact ? 'w-[28px]' : 'w-[36px]'} />
              <col />
              <col className={valueCol} />
            </colgroup>
            <thead>
              <tr className="border-b" style={{ borderColor: C.border }}>
                <th className={`${thBase} ${cellPx}`} />
                <th className={`${thBase} ${cellPx} text-left`} style={{ color: C.fg }}>
                  {compact ? '产品' : '品牌名称'}
                </th>
                <th className={`${thBase} ${valueCell}`} style={{ color: C.fg }}>
                  {valueLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className="border-b last:border-0" style={{ borderColor: C.border }}>
                  <td className={`${cellPx} ${rowPy} align-middle`}>
                    <RankBadge rank={item.rank ?? idx + 1} compact={compact} />
                  </td>
                  <td className={`${cellPx} ${rowPy} align-middle`}>
                    <div className="flex items-center gap-1 min-w-0">
                      <span className={`${nameSize} font-medium truncate leading-tight`} style={{ color: C.fg }}>
                        {item.name}
                      </span>
                      {item.self && <TargetProductTag />}
                    </div>
                  </td>
                  <td className={`${valueCell} ${rowPy} align-middle ${valueSize} font-medium whitespace-nowrap`} style={{ color: C.fg }}>
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function Page_SkyworthReport_CoreDataCompetitor() {
  const cat = overview.category_opt;

  // === 品类层面竞品对比数据（来自 geoOverview.json） ===
  const mentionRateData = cat.mention_ranking.map((b) => ({
    name: b.name, value: `${b.rate}%`, self: b.is_target,
  }));
  const top1RateData = cat.top1_ranking.map((b) => ({
    name: b.name, value: `${b.rate}%`, self: b.is_target,
  }));
  const avgRankData = cat.position_ranking.map((b) => ({
    name: b.name, value: `NO. ${b.position}`, self: b.is_target,
  }));

  // === 产品层面竞品对比数据（各产品优化词项目的提及率排名前5） ===
  // 目标产品未进接口返回的前5时，用人工核实的完整榜单排名替换末行，保证本品行始终可见
  const MANUAL_TARGET_ROWS = {
    '创维Q7H': { rank: 107, name: '创维 Q7H', value: '0%' },
  };
  const productTables = overview.product_opt.map((p) => {
    const rows = p.mention_ranking.map((b, i) => ({
      rank: i + 1, name: b.name, value: `${b.rate}%`, self: b.is_target,
    }));
    const manual = MANUAL_TARGET_ROWS[p.project_name];
    if (manual && !rows.some((r) => r.self)) {
      rows[rows.length - 1] = { ...manual, self: true };
    }
    return { title: p.project_name.replace(/^创维/, '创维 '), data: rows };
  });

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-8 sm:px-10 py-12 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

        {/* 页面标题 */}
        <div className="text-center shrink-0 mb-4">
          <h1 className="text-[36px] xl:text-[40px] font-bold text-white tracking-widest leading-tight">
            竞品对比
          </h1>
        </div>

        <div className="w-full max-w-[1840px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 justify-between py-4">

          {/* ===== 品类优化词竞品对比 (并列三个表) ===== */}
          <div className="shrink-0 flex flex-col gap-3 text-left">
            <SectionTitle>品类优化词竞品对比</SectionTitle>
            <div className="grid grid-cols-3 gap-6 h-[292px]">
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
            <div className="grid grid-cols-5 gap-3 h-[252px]">
              {productTables.map((t) => (
                <RankingCard key={t.title} title={t.title} valueLabel="提及率" data={t.data} compact />
              ))}
            </div>
          </div>

          {/* ===== 极简数据总结 ===== */}
          {/* 注意：以下总结文案基于当前 geoOverview.json 数据撰写，重新采集数据后需人工同步更新 */}
          <div className="shrink-0 border-t border-white/10 pt-8 mt-2">
            <div className="flex items-start gap-5">
              <span className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 bg-[#004CE5] px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(0,76,229,0.3)]">
                数据总结
              </span>
              <p className="text-[19px] xl:text-[21px] text-zinc-200 leading-relaxed text-justify flex-1">
                品类层面，创维 <strong className="text-white font-bold">TOP1 提及率（24.7%）行业第一</strong>，一旦被提及往往被首推；但整体提及率（<strong className="text-white font-bold">59.4%</strong>）与平均位次（NO.4.2）仍落后于海信、TCL，「被想起」的频率是当前短板。产品层面，<strong className="text-white font-bold">A7H Pro（61.7%）与 A10H（51%）</strong>在各自词组中排名第一，且各产品榜单前列多被创维自家产品占据，形成内部矩阵优势；但 <strong className="text-white font-bold">A8H、Q8H 被自家高端款盖过，Q7H 排名第 107、提及率为 0</strong>，产品间的曝光分配仍需针对性调优。
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_CoreDataCompetitor.hideHeader = true;
