import React from 'react';
import SlideLayout from './SlideLayout';

/* ============================================================
 * 服务案例（深度）通用排版组件
 * 数据来源：各品牌《GEO 阶段性月报》
 *
 * 提供 3 个排版方案（通过 data 驱动，可复用于任意品牌）：
 *   A —— 报表还原式（贴近月报「核心数据总览」表格）
 *   B —— 指标卡片式（各产品线 KPI 卡）
 *   C —— 位次跃升叙事式（讲「如何冲到 / 稳住现在的位次」）
 *
 * data 结构见各 Page_CaseStudy_* 页面。
 * ============================================================ */

/* 背景光晕 */
function Glow() {
  return (
    <div className="absolute w-[420px] h-[420px] rounded-full bg-[#004CE5]/8 blur-[120px] -right-32 -top-32 pointer-events-none" />
  );
}

/* 顶部品牌信息条 */
function BrandBar({ data }) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6 shrink-0">
      <div className="flex items-center gap-6">
        <span className="inline-block text-[18px] font-bold tracking-widest text-[#004CE5] bg-[#004CE5]/10 px-4 py-2 rounded-full border border-[#004CE5]/20 font-sans leading-none">
          {data.industry}
        </span>
        <h3 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.9)]" />
          {data.brand}
          <span className="text-zinc-500 text-2xl font-medium ml-2">{data.brandSub}</span>
        </h3>
      </div>
      <div className="flex items-center gap-8">
        {data.meta.map((m, i) => (
          <React.Fragment key={m.label}>
            {i > 0 && <div className="w-px h-10 bg-white/10" />}
            <div className="flex flex-col items-end">
              <span className="text-[13px] text-zinc-500 font-semibold tracking-widest uppercase">{m.label}</span>
              <span className="text-white font-bold text-lg mt-1">{m.value}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* 底部总结条 */
function SummaryBar({ text }) {
  return (
    <div className="mt-6 shrink-0 bg-gradient-to-r from-[#004CE5]/15 to-transparent border border-[#004CE5]/25 rounded-2xl px-8 py-5 flex items-start gap-4">
      <span className="text-[#004CE5] text-2xl font-black shrink-0 mt-0.5">“</span>
      <p className="text-zinc-200 leading-relaxed text-[21px] font-medium text-justify">{text}</p>
    </div>
  );
}

const Arrow = () => <span className="text-zinc-600 mx-1.5 font-black">→</span>;

/* 外壳：统一页眉 + 卡片容器 */
function Shell({ children }) {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col relative z-10 select-none">
        <div className="flex-1 bg-[#101010] border border-white/10 rounded-[1.5rem] flex flex-col overflow-hidden relative p-8 sm:p-10">
          <Glow />
          {children}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 方案 A —— 报表还原式
 * ============================================================ */
export function CaseReportVariantA({ data }) {
  const cols = [
    { label: '提及率', from: 'mFrom', to: 'mTo', strong: false },
    { label: '平均提及位次', from: 'rFrom', to: 'rTo', strong: false },
    { label: '竞品排名', from: 'cFrom', to: 'cTo', strong: true },
  ];
  return (
    <Shell>
      <BrandBar data={data} />
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          <span className="text-[24px] font-black tracking-wider text-zinc-200 font-['MiSans']">核心数据总览</span>
          <span className="text-zinc-500 text-base font-medium">（{data.period}）</span>
        </div>

        <div className="flex-1 rounded-2xl border border-white/10 overflow-hidden flex flex-col">
          {/* 表头 */}
          <div className="flex bg-[#004CE5] text-white shrink-0">
            <div className="w-[26%] py-4 px-6 font-bold text-lg flex items-center">产品</div>
            {cols.map((c) => (
              <div key={c.label} className="flex-1 border-l border-white/20 flex flex-col">
                <div className="py-2.5 text-center font-bold text-lg">{c.label}</div>
                <div className="flex border-t border-white/20">
                  <div className="flex-1 py-1.5 text-center text-sm text-white/80 border-r border-white/20">5月</div>
                  <div className="flex-1 py-1.5 text-center text-sm text-white/80">6月</div>
                </div>
              </div>
            ))}
          </div>
          {/* 数据行 */}
          {data.products.map((p, i) => (
            <div
              key={p.name}
              className={`flex flex-1 items-stretch ${i < data.products.length - 1 ? 'border-b border-white/10' : ''} ${p.highlight ? 'bg-[#004CE5]/10' : 'bg-black/20'}`}
            >
              <div className="w-[26%] px-6 flex items-center gap-2 font-bold text-white text-xl">
                {p.highlight && <span className="w-2 h-2 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]" />}
                {p.name}
              </div>
              {cols.map((c) => (
                <div key={c.label} className="flex-1 border-l border-white/10 flex items-center">
                  <div className="flex-1 text-center text-zinc-500 text-2xl font-bold">{p[c.from]}</div>
                  <div className={`flex-1 text-center text-3xl font-black ${c.strong && p.highlight ? 'text-[#004CE5]' : c.strong ? 'text-white' : 'text-[#5B8CFF]'}`}>{p[c.to]}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <SummaryBar text={data.summary} />
    </Shell>
  );
}

/* ============================================================
 * 方案 B —— 指标卡片式
 * ============================================================ */
function Metric({ label, from, to, strong, tone }) {
  const toColor = tone === 'green' ? 'text-emerald-400' : strong ? 'text-[#004CE5]' : 'text-white';
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <span className="text-[12px] text-zinc-500 font-semibold tracking-wide block">{label}</span>
      <div className="flex items-baseline gap-1 mt-1.5">
        {from && <><span className="text-zinc-600 text-base font-bold">{from}</span><span className="text-zinc-700 text-sm">→</span></>}
        <span className={`text-2xl font-black ${toColor}`}>{to}</span>
      </div>
    </div>
  );
}

export function CaseReportVariantB({ data }) {
  const single = data.products.length === 1;
  return (
    <Shell>
      <BrandBar data={data} />

      {single ? (
        /* 单产品：横向 Hero 卡 */
        <div className="flex-1 flex">
          {(() => {
            const p = data.products[0];
            return (
              <div className="flex-1 rounded-[1.5rem] bg-gradient-to-r from-[#004CE5]/20 to-black border border-[#004CE5]/40 shadow-[0_0_40px_rgba(0,76,229,0.15)] flex items-center gap-12 px-12 relative overflow-hidden">
                <div className="flex flex-col shrink-0">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]" />
                    <h4 className="text-3xl font-extrabold text-white">{p.name}</h4>
                  </div>
                  <span className="text-[13px] text-zinc-500 font-semibold tracking-widest uppercase">提及率</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-zinc-500 text-3xl font-bold">{p.mFrom}</span>
                    <Arrow />
                    <span className="text-[#5B8CFF] text-7xl font-black leading-none">{p.mTo}</span>
                  </div>
                </div>
                <div className="w-px h-44 bg-white/10 shrink-0" />
                <div className="grid grid-cols-2 gap-5 flex-1">
                  <Metric label="平均提及位次" from={p.rFrom} to={p.rTo} />
                  <Metric label="竞品排名" from={p.cFrom} to={p.cTo} strong />
                  <Metric label="Top1 提及率" to={p.top1} />
                  <Metric label="正面声量占比" to={p.positive} tone="green" />
                </div>
              </div>
            );
          })()}
        </div>
      ) : (
        /* 多产品：并列 KPI 卡 */
        <div className="flex-1 flex gap-6 min-h-0">
          {data.products.map((p) => (
            <div
              key={p.name}
              className={`flex-1 rounded-[1.25rem] flex flex-col p-7 relative overflow-hidden
                ${p.highlight
                  ? 'bg-gradient-to-b from-[#004CE5]/20 to-black border border-[#004CE5]/40 shadow-[0_0_40px_rgba(0,76,229,0.15)]'
                  : 'bg-black border border-white/10'}`}
            >
              {p.highlight && (
                <span className="absolute top-5 right-5 text-[11px] font-bold tracking-widest text-[#004CE5] bg-[#004CE5]/15 px-3 py-1.5 rounded-full border border-[#004CE5]/30">
                  {p.badge || '本月最大突破'}
                </span>
              )}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]" />
                <h4 className="text-2xl font-extrabold text-white">{p.name}</h4>
              </div>
              <div className="mb-6">
                <span className="text-[13px] text-zinc-500 font-semibold tracking-widest uppercase">提及率</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-zinc-500 text-2xl font-bold">{p.mFrom}</span>
                  <Arrow />
                  <span className="text-[#5B8CFF] text-5xl font-black leading-none">{p.mTo}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <Metric label="平均提及位次" from={p.rFrom} to={p.rTo} />
                <Metric label="竞品排名" from={p.cFrom} to={p.cTo} strong={p.highlight} />
                <Metric label="Top1 提及率" to={p.top1} />
                <Metric label="正面声量占比" to={p.positive} tone="green" />
              </div>
            </div>
          ))}
        </div>
      )}

      <SummaryBar text={data.summary} />
    </Shell>
  );
}

/* ============================================================
 * 方案 C —— 位次跃升叙事式
 * ============================================================ */
export function CaseReportVariantC({ data }) {
  const hero = data.hero;
  const pct = (v) => parseFloat(v);
  const statColor = (c) => (c === 'green' ? 'text-emerald-400' : 'text-[#5B8CFF]');
  return (
    <Shell>
      <BrandBar data={data} />
      <div className="flex-1 flex gap-6 min-h-0">
        {/* 左：英雄区 */}
        <div className="w-[36%] shrink-0 bg-gradient-to-b from-[#004CE5]/20 to-black border border-[#004CE5]/40 rounded-[1.25rem] p-8 flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-[13px] text-[#8CB0FF] font-semibold tracking-widest uppercase">{hero.tag}</span>
            <h4 className="text-3xl font-extrabold text-white mt-3">{hero.productName}</h4>
            <p className="text-zinc-400 text-base mt-1">{hero.desc}</p>
          </div>

          {hero.from ? (
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="flex flex-col items-center">
                <span className="text-zinc-500 text-lg font-bold">{hero.fromLabel || '上月'}</span>
                <span className="text-zinc-400 text-6xl font-black leading-none mt-1">{hero.from}</span>
              </div>
              <span className="text-[#004CE5] text-6xl font-black">→</span>
              <div className="flex flex-col items-center">
                <span className="text-[#8CB0FF] text-lg font-bold">{hero.toLabel || '本月'}</span>
                <span className="text-white text-7xl font-black leading-none mt-1 drop-shadow-[0_0_20px_rgba(0,76,229,0.6)]">{hero.to}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center my-2">
              <span className="text-[#8CB0FF] text-lg font-bold">{hero.toLabel || '本月'}</span>
              <span className="text-white text-[7rem] font-black leading-none mt-1 drop-shadow-[0_0_24px_rgba(0,76,229,0.6)]">{hero.to}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {hero.stats.map((s) => (
              <div key={s.label} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-center">
                <span className="text-zinc-500 text-xs block">{s.label}</span>
                <span className={`text-2xl font-black ${statColor(s.color)}`}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 右：提及率进阶条 */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
            <span className="text-[22px] font-black tracking-wider text-zinc-200 font-['MiSans']">提及率进阶 · 5月 → 6月</span>
          </div>
          <div className="flex-1 flex flex-col justify-around gap-4">
            {data.products.map((p) => (
              <div key={p.name} className="bg-black border border-white/10 rounded-2xl px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-bold text-xl flex items-center gap-2">
                    {p.highlight && <span className="w-2 h-2 rounded-full bg-[#004CE5]" />}
                    {p.name}
                  </span>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-zinc-500">位次 {p.rFrom}<span className="mx-1">→</span><span className="text-[#8CB0FF] font-bold">{p.rTo}</span></span>
                    <span className="text-zinc-500">Top1 <span className="text-white font-bold">{p.top1}</span></span>
                    <span className="text-zinc-500">竞品 <span className="text-white font-bold">{p.cTo}</span></span>
                  </div>
                </div>
                <div className="relative h-9 bg-white/5 rounded-lg overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-zinc-700/60 rounded-lg flex items-center justify-end pr-2" style={{ width: `${pct(p.mFrom)}%` }}>
                    <span className="text-zinc-300 text-xs font-bold">{p.mFrom}</span>
                  </div>
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#004CE5] to-[#5B8CFF] rounded-lg flex items-center justify-end pr-3 opacity-90" style={{ width: `${pct(p.mTo)}%`, mixBlendMode: 'screen' }}>
                    <span className="text-white text-sm font-black">{p.mTo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SummaryBar text={data.summary} />
    </Shell>
  );
}
