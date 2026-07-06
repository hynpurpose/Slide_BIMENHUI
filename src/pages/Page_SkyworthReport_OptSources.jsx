import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';
import { WebPanel, WebHeader, RankBadge } from '../components/GeoReportWeb';

const DONUT_COLORS = ['#ec4899', '#ef4444', '#8b5cf6', '#38bdf8', '#22c55e', '#9ca3af'];

function Donut({ segments, size = 210, stroke = 26 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
      {segments.map((s, i) => {
        const len = (s.share / 100) * c;
        const el = (
          <circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={`${Math.max(len - 3, 0.1)} ${c - Math.max(len - 3, 0.1)}`}
            strokeDashoffset={-offset}
            strokeLinecap="round"
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

export function Page_SkyworthReport_OptSources() {
  const { meta, citations } = report;
  const top = citations.platform_stats;
  const otherShare = Math.max(0, 100 - top.reduce((s, p) => s + (p.share ?? 0), 0));
  const segments = [
    ...top.map((p, i) => ({ name: p.platform_name, share: p.share ?? 0, color: DONUT_COLORS[i % 5] })),
    { name: '其他', share: otherShare, color: DONUT_COLORS[5] },
  ];
  const articles = citations.articles.slice(0, 4);

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">
          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 引用源分析
            </h1>
          </div>

          <WebPanel>
            <WebHeader title="Top引用数据" meta={meta} />

            <div className="flex-1 flex flex-col gap-3 px-6 pb-4 min-h-0">
              {/* 上半部分：来源分布 + 平台榜单 */}
              <div className="grid grid-cols-2 gap-4 h-[46%] shrink-0 min-h-0">
                <div className="flex flex-col min-h-0">
                  <p className="text-[13px] text-[#6b7280] mb-1.5 shrink-0">目标词条引用来源分布</p>
                  <div className="flex-1 border border-[#e5e7eb] rounded-xl p-4 flex min-h-0">
                    <div className="flex flex-col justify-between min-w-0 flex-1">
                      <div>
                        <p className="text-[13px] text-[#ec4899]">引用率最高的平台</p>
                        <p className="text-[18px] font-bold text-[#111827]">
                          {top[0] ? `${top[0].platform_name}: ${top[0].share?.toFixed(1)}%` : '--'}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {segments.map((s) => (
                          <span key={s.name} className="flex items-center gap-1 text-[12px] text-[#6b7280]">
                            <span className="w-3 h-3 rounded-[3px] inline-block" style={{ backgroundColor: s.color }} />
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="h-full aspect-square shrink-0">
                      <Donut segments={segments} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col min-h-0">
                  <p className="text-[13px] text-[#6b7280] mb-1.5 shrink-0">目标词条高频引用平台榜单</p>
                  <div className="flex-1 border border-[#e5e7eb] rounded-xl px-4 py-2 min-h-0">
                    <table className="w-full border-collapse table-fixed h-full">
                      <thead>
                        <tr className="border-b border-[#f3f4f6] text-[13px] text-[#6b7280]">
                          <th className="w-[12%] py-1.5 font-medium" />
                          <th className="w-[58%] py-1.5 font-medium text-left">平台名称</th>
                          <th className="w-[30%] py-1.5 font-medium text-right pr-2">引用占比</th>
                        </tr>
                      </thead>
                      <tbody>
                        {top.map((p, i) => (
                          <tr key={p.domain} className="border-b border-[#f3f4f6] last:border-none text-[14px]">
                            <td className="text-center py-1"><RankBadge rank={i + 1} /></td>
                            <td>
                              <div className="flex items-center gap-2 min-w-0">
                                {p.logo_url ? (
                                  <img src={p.logo_url} alt="" className="w-[18px] h-[18px] rounded-sm shrink-0 object-contain" />
                                ) : (
                                  <span className="w-[18px] h-[18px] rounded-sm bg-[#f3f4f6] shrink-0" />
                                )}
                                <span className="truncate font-medium text-[#111827]">{p.platform_name}</span>
                              </div>
                            </td>
                            <td className="text-right pr-2 font-semibold text-[#374151]">{p.share?.toFixed(1)}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 下半部分：引用文章列表 */}
              <div className="flex-1 flex flex-col min-h-0">
                <h3 className="text-[17px] font-bold text-[#111827] mb-1.5 shrink-0">引用文章列表</h3>
                <div className="flex-1 border border-[#e5e7eb] rounded-xl px-4 py-1 min-h-0">
                  <table className="w-full border-collapse table-fixed h-full">
                    <thead>
                      <tr className="border-b border-[#f3f4f6] text-[13px] text-[#6b7280]">
                        <th className="w-[6%] py-1.5 font-medium" />
                        <th className="w-[52%] py-1.5 font-medium text-left">文章标题</th>
                        <th className="w-[14%] py-1.5 font-medium text-center">目标产品是否提及</th>
                        <th className="w-[10%] py-1.5 font-medium text-center">总引用次数</th>
                        <th className="w-[10%] py-1.5 font-medium text-center">平均引用次数</th>
                        <th className="w-[8%] py-1.5 font-medium text-center">来源</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articles.map((a, i) => (
                        <tr key={a.link_url} className="border-b border-[#f3f4f6] last:border-none">
                          <td className="text-center py-1"><RankBadge rank={i + 1} /></td>
                          <td className="pr-4 min-w-0">
                            <p className="text-[14px] font-medium text-[#111827] truncate">{a.title}</p>
                            <p className="text-[12px] text-[#3b82f6] truncate">{a.link_url}</p>
                          </td>
                          <td className="text-center">
                            {a.has_target_product ? (
                              <span className="inline-block text-[12px] px-2 py-0.5 rounded bg-[#dcfce7] text-[#16a34a]">是</span>
                            ) : (
                              <span className="inline-block text-[12px] px-2 py-0.5 rounded bg-[#fee2e2] text-[#dc2626]">否</span>
                            )}
                          </td>
                          <td className="text-center text-[14px] text-[#374151]">{a.total_citations}</td>
                          <td className="text-center text-[14px] text-[#374151]">
                            {a.avg_citations === null ? '-' : Number(a.avg_citations).toFixed(1)}
                          </td>
                          <td className="text-center">
                            {a.logo_url ? (
                              <img src={a.logo_url} alt={a.platform_name} title={a.platform_name} className="w-5 h-5 rounded inline-block object-contain" />
                            ) : (
                              <span className="text-[12px] text-[#6b7280]">{a.platform_name}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </WebPanel>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptSources.hideHeader = true;
