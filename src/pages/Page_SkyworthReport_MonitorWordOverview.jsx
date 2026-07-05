import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

function Num({ children, className = '' }) {
  return (
    <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-[28px] xl:text-[30px] font-bold text-white shrink-0 flex items-center gap-2.5">
      <span className="w-2 h-6 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      {children}
    </h3>
  );
}

const CATEGORY_SENTIMENT = { positive: 88.5, negative: 11.5 };

const PRODUCT_DUELS = [
  { product: '创维 A10H', self: 66, note: '旗舰口碑领先，音画双优被 AI 采信' },
  { product: '创维 A8H', self: 61, note: '走量爆款，好评稳居同价位前列' },
  { product: '创维 A7H Pro', self: 57, note: '与同价竞品咬得较紧' },
  { product: '创维 Q8H', self: 54, note: '仅小幅领先竞品' },
  { product: '创维 Q7H', self: 51, note: '与竞品差距最小' },
];

export function Page_SkyworthReport_MonitorWordOverview() {
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-6">

          <div className="text-center shrink-0">
            <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
              监测词总览
            </h1>
          </div>

          {/* 第一部分：品类监测词正负面信息比例 */}
          <div className="shrink-0 flex flex-col gap-3">
            <SectionTitle>品类监测词</SectionTitle>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl px-8 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="h-[72px] rounded-xl overflow-hidden flex shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500/80 to-emerald-400/80 flex items-center px-6"
                  style={{ width: `${CATEGORY_SENTIMENT.positive}%` }}
                >
                  <span className="text-[24px] xl:text-[26px] font-bold text-white whitespace-nowrap">
                    正面信息 <Num>{CATEGORY_SENTIMENT.positive}%</Num>
                  </span>
                </div>
                <div
                  className="h-full bg-gradient-to-r from-rose-500/70 to-rose-400/70 flex items-center justify-end px-6"
                  style={{ width: `${CATEGORY_SENTIMENT.negative}%` }}
                >
                  <span className="text-[22px] xl:text-[24px] font-bold text-white whitespace-nowrap">
                    负面 <Num>{CATEGORY_SENTIMENT.negative}%</Num>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 第二部分：产品专属监测词口碑对比 */}
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <SectionTitle>产品专属监测词</SectionTitle>
            <div className="flex-1 min-h-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl px-8 py-5 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.2)]">

              <div className="flex items-center justify-between shrink-0 pb-3 mb-2 border-b border-white/5 text-[18px] xl:text-[20px] font-bold">
                <span className="flex items-center gap-2.5 text-[#60A5FA]">
                  <span className="w-4 h-4 rounded-sm bg-[#004CE5]" />
                  说创维产品好
                </span>
                <span className="flex items-center gap-2.5 text-zinc-400">
                  说竞品产品好
                  <span className="w-4 h-4 rounded-sm bg-zinc-600" />
                </span>
              </div>

              <div className="flex-1 min-h-0 grid" style={{ gridTemplateRows: `repeat(${PRODUCT_DUELS.length}, 1fr)` }}>
                {PRODUCT_DUELS.map((d) => {
                  const rivalShare = 100 - d.self;
                  return (
                    <div key={d.product} className="flex items-center gap-5 min-h-0 py-2">
                      <span className="w-[200px] shrink-0 text-[22px] xl:text-[24px] font-bold text-zinc-100">
                        {d.product}
                      </span>
                      <div className="flex-1">
                        <div className="h-14 rounded-xl overflow-hidden flex shadow-inner border border-white/5">
                          <div
                            className="h-full bg-gradient-to-r from-[#004CE5] to-[#3b7bff] flex items-center px-4"
                            style={{ width: `${d.self}%` }}
                          >
                            <Num className="text-[22px] xl:text-[24px] font-black text-white">{d.self}%</Num>
                          </div>
                          <div
                            className="h-full bg-zinc-700/70 flex items-center justify-end px-4"
                            style={{ width: `${rivalShare}%` }}
                          >
                            <Num className="text-[20px] xl:text-[22px] font-bold text-zinc-300">{rivalShare}%</Num>
                          </div>
                        </div>
                      </div>
                      <span className="w-[280px] shrink-0 text-[16px] xl:text-[18px] text-zinc-400 leading-snug">{d.note}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_MonitorWordOverview.hideHeader = true;
