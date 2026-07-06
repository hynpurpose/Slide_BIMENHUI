import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';
import { WebPanel, WebHeader, fmtPct, fmtDay } from '../components/GeoReportWeb';

const MAX_ROWS = 14;

export function Page_SkyworthReport_OptEntries() {
  const { meta, entries, platforms } = report;
  const platformMap = Object.fromEntries(platforms.map((p) => [p.id, p]));
  const rows = entries.list.slice(0, MAX_ROWS);

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">
          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 词条表现分析
            </h1>
          </div>

          <WebPanel>
            <WebHeader
              title="词条"
              meta={meta}
              right={
                <span className="text-[13px] text-[#6b7280] shrink-0">
                  共 {entries.total} 条{entries.total > MAX_ROWS ? `（展示前 ${MAX_ROWS} 条）` : ''}
                </span>
              }
            />

            <div className="flex-1 px-6 pb-4 min-h-0 flex flex-col">
              <table className="w-full border-collapse table-fixed flex-1">
                <thead>
                  <tr className="border-y border-[#f3f4f6] text-[13px] text-[#6b7280]">
                    <th className="w-[4%] py-2 font-medium text-center">#</th>
                    <th className="w-[38%] py-2 font-medium text-left pl-2">词条</th>
                    <th className="w-[12%] py-2 font-medium text-center">提及率</th>
                    <th className="w-[14%] py-2 font-medium text-center">平均提及位次</th>
                    <th className="w-[16%] py-2 font-medium text-center">监测平台</th>
                    <th className="w-[16%] py-2 font-medium text-center">最近更新时间</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((e, idx) => (
                    <tr key={e.entry_id} className="border-b border-[#f3f4f6] last:border-none text-[14px]">
                      <td className="text-center text-[#9ca3af]">{idx + 1}</td>
                      <td className="pl-2 text-[#111827] font-medium truncate">{e.entry_name}</td>
                      <td className="text-center text-[#374151]">{fmtPct(e.mention_rate)}</td>
                      <td className="text-center text-[#374151]">
                        {e.position === null ? '-' : Number(e.position).toFixed(1)}
                      </td>
                      <td>
                        <div className="flex items-center justify-center gap-1">
                          {e.platform_ids.map((pid) => {
                            const p = platformMap[pid];
                            if (!p) return null;
                            return <img key={pid} src={p.url} alt={p.name} title={p.name} className="w-[18px] h-[18px] rounded" />;
                          })}
                          {e.platform_ids.length === 0 && <span className="text-[#d1d5db]">-</span>}
                        </div>
                      </td>
                      <td className="text-center text-[#3b82f6]">{fmtDay(e.last_conversation_time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </WebPanel>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptEntries.hideHeader = true;
