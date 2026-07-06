import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';
import { WebPanel, WebHeader, RankBadge, fmtPct, fmtPos } from '../components/GeoReportWeb';

function RankTable({ title, headers, rows }) {
  return (
    <div className="flex flex-col min-h-0 border border-[#e5e7eb] rounded-xl bg-white overflow-hidden">
      <div className="shrink-0 px-5 pt-4 pb-2">
        <h3 className="text-[16px] font-bold text-[#111827]">{title}</h3>
      </div>
      <div className="flex-1 px-3 pb-3 min-h-0">
        <table className="w-full border-collapse table-fixed h-full">
          <thead>
            <tr className="border-b border-[#f3f4f6] text-[13px] text-[#6b7280]">
              <th className="w-[15%] py-2 font-medium" />
              <th className="w-[50%] py-2 font-medium text-left">{headers[0]}</th>
              <th className="w-[35%] py-2 font-medium text-right pr-3">{headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                className={`border-b border-[#f3f4f6] last:border-none text-[14px] ${r.isTarget ? 'bg-[#eff6ff]' : ''}`}
              >
                <td className="text-center py-2">
                  <RankBadge rank={r.rank} />
                </td>
                <td>
                  <div className="flex items-center gap-2 min-w-0">
                    {r.favicon && <img src={r.favicon} alt="" className="w-[18px] h-[18px] rounded-sm shrink-0" />}
                    <span className={`truncate ${r.isTarget ? 'font-bold text-[#1d4ed8]' : 'font-medium text-[#111827]'}`}>
                      {r.name}
                    </span>
                    {r.isTarget && (
                      <span className="shrink-0 text-[10px] text-[#6b7280] bg-[#f3f4f6] rounded px-1 py-0.5">目标产品</span>
                    )}
                  </div>
                </td>
                <td className={`text-right pr-3 font-semibold ${r.isTarget ? 'text-[#1d4ed8]' : 'text-[#374151]'}`}>
                  {r.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Page_SkyworthReport_OptCompetitor() {
  const { meta, compare, influence } = report;

  const mentionRows = compare.mention_rate_ranking.map((b, i) => ({
    rank: i + 1,
    name: b.brand_name,
    value: fmtPct(b.mention_rate),
    isTarget: b.is_target,
  }));

  const positionRows = compare.position_ranking.map((b, i) => ({
    rank: i + 1,
    name: b.brand_name,
    value: fmtPos(b.avg_position),
    isTarget: b.is_target,
  }));

  const influenceRows = influence.list.map((b) => ({
    rank: b.rank,
    name: b.brand_name,
    favicon: b.favicon_url,
    value: b.influence_score === null ? '--' : Number(b.influence_score).toFixed(1),
    isTarget: b.is_target,
  }));

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">
          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 竞品横向对比
            </h1>
          </div>

          <WebPanel>
            <WebHeader title="竞品对比" meta={meta} />
            <div className="flex-1 grid grid-cols-3 gap-4 px-6 pb-5 min-h-0">
              <RankTable title="提及率排名" headers={['品牌名称', '提及率']} rows={mentionRows} />
              <RankTable title="平均提及位次排名" headers={['品牌名称', '平均提及位次']} rows={positionRows} />
              <RankTable title="行业影响力排名" headers={['品牌名称', '影响力得分']} rows={influenceRows} />
            </div>
          </WebPanel>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptCompetitor.hideHeader = true;
