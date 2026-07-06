import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';
import { WebPanel, WebHeader, LineChart, fmtPct, fmtPos } from '../components/GeoReportWeb';

function KpiCard({ label, children }) {
  return (
    <div className="flex-1 border border-[#e5e7eb] rounded-xl px-5 py-4 bg-white flex flex-col gap-2 min-w-0">
      <div className="flex items-center gap-1 text-[14px] text-[#374151] font-medium">
        {label}
        <svg className="w-3.5 h-3.5 text-[#d1d5db]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
      </div>
      {children}
    </div>
  );
}

function PlatformBars({ platforms }) {
  const max = Math.max(...platforms.map((p) => p.brand_mention_rate ?? 0), 1) * 1.15;
  return (
    <div className="flex-1 flex items-end justify-around gap-4 px-4 pb-2 min-h-0">
      {platforms.map((p) => (
        <div key={p.platform_id} className="flex flex-col items-center justify-end gap-2 h-full flex-1 min-w-0">
          <span className="text-[13px] font-semibold text-[#374151]">{fmtPct(p.brand_mention_rate)}</span>
          <div
            className="w-[46px] rounded-t-md bg-[#3b82f6]"
            style={{ height: `${Math.max(((p.brand_mention_rate ?? 0) / max) * 100, 1.5)}%` }}
          />
          <div className="flex items-center gap-1.5 shrink-0">
            {p.platform_logo && <img src={p.platform_logo} alt="" className="w-5 h-5 rounded" />}
            <span className="text-[13px] text-[#6b7280] whitespace-nowrap">{p.platform_name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Page_SkyworthReport_OptDashboard() {
  const { meta, stats, influence, citations } = report;
  const targetRank = influence.list.find((b) => b.is_target)?.rank ?? '--';
  const topSources = citations.platform_stats.slice(0, 4);

  const trendPoints = stats.daily_stats.map((d) => ({
    label: d.date.slice(5).replace('-', '/'),
    value: d.mention_rate,
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

          <WebPanel>
            <WebHeader title="总览" meta={meta} />

            <div className="flex-1 flex flex-col gap-4 px-6 pb-5 min-h-0">
              {/* KPI 卡片行 */}
              <div className="flex gap-4 shrink-0">
                <KpiCard label="提及率">
                  <div className="text-[30px] font-bold text-[#111827] leading-none">{fmtPct(stats.brand_mention_rate)}</div>
                </KpiCard>
                <KpiCard label="平均提及位次">
                  <div className="text-[30px] font-bold text-[#111827] leading-none">{fmtPos(stats.avg_position)}</div>
                </KpiCard>
                <KpiCard label="行业影响力排名">
                  <div className="text-[30px] font-bold text-[#111827] leading-none">NO. {targetRank}</div>
                </KpiCard>
                <KpiCard label="Top引用来源">
                  <div className="flex items-center gap-2.5 mt-1">
                    {topSources.map((s) =>
                      s.logo_url ? (
                        <img key={s.domain} src={s.logo_url} alt={s.platform_name} title={s.platform_name} className="w-7 h-7 rounded-full border border-[#f3f4f6] object-contain bg-white" />
                      ) : (
                        <span key={s.domain} className="w-7 h-7 rounded-full bg-[#f3f4f6] text-[#6b7280] text-[12px] flex items-center justify-center">
                          {s.platform_name.charAt(0)}
                        </span>
                      )
                    )}
                  </div>
                </KpiCard>
              </div>

              {/* 提及率区块标题 */}
              <div className="flex items-center gap-3 shrink-0">
                <h3 className="text-[17px] font-bold text-[#111827]">提及率</h3>
                <span className="text-[13px] text-[#3b82f6] border border-[#e5e7eb] rounded-md px-2 py-0.5">查看明细 ↗</span>
              </div>

              {/* 两张图表 */}
              <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
                <div className="flex flex-col min-h-0">
                  <p className="text-[13px] text-[#6b7280] mb-2 shrink-0">提及率随时间的变化趋势</p>
                  <div className="flex-1 border border-[#e5e7eb] rounded-xl p-4 flex flex-col min-h-0">
                    <div className="shrink-0 mb-1">
                      <p className="text-[13px] text-[#3b82f6]">目标产品提及率</p>
                      <p className="text-[24px] font-bold text-[#111827] leading-tight">{fmtPct(stats.brand_mention_rate)}</p>
                    </div>
                    <div className="flex-1 min-h-0">
                      <LineChart points={trendPoints} />
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 pt-1">
                      <span className="w-3.5 h-3.5 rounded-[3px] bg-[#3b82f6] inline-flex items-center justify-center">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </span>
                      <span className="text-[12px] text-[#6b7280]">{meta.target_product}</span>
                      <span className="text-[10px] text-[#9ca3af] bg-[#f3f4f6] rounded px-1">目标产品</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col min-h-0">
                  <p className="text-[13px] text-[#6b7280] mb-2 shrink-0">提及率在不同AI平台的对比</p>
                  <div className="flex-1 border border-[#e5e7eb] rounded-xl p-4 flex flex-col min-h-0">
                    <div className="shrink-0 mb-1">
                      <p className="text-[13px] text-[#3b82f6]">目标产品提及率</p>
                      <p className="text-[24px] font-bold text-[#111827] leading-tight">{fmtPct(stats.brand_mention_rate)}</p>
                    </div>
                    <PlatformBars platforms={stats.platform_stats} />
                  </div>
                </div>
              </div>
            </div>
          </WebPanel>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptDashboard.hideHeader = true;
