import React from 'react';
import SlideLayout from '../components/SlideLayout';
import overview from '../data/geoOverview.json';

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

// 注意：以下 note 文案基于当前 geoOverview.json 数据撰写，重新采集数据后需人工同步更新
const PRODUCT_NOTES = {
  '创维A7H Pro': '负面占比相对最高，需关注具体差评点',
  '创维A8H': '口碑接近全正面，表现稳定',
  '创维A10H': '旗舰口碑优异，负面声量极低',
  '创维Q7H': '整体正面，存在少量负面信息',
  '创维Q8H': '监测期内零负面，口碑最佳',
};

export function Page_SkyworthReport_MonitorWordOverview() {
  const cat = overview.category_monitor;
  const products = overview.product_monitor;

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
                  style={{ width: `${cat.positive}%` }}
                >
                  <span className="text-[24px] xl:text-[26px] font-bold text-white whitespace-nowrap">
                    正面信息 <Num>{cat.positive}%</Num>
                  </span>
                </div>
                <div
                  className="h-full bg-gradient-to-r from-rose-500/70 to-rose-400/70 flex items-center justify-end px-6"
                  style={{ width: `${cat.negative}%` }}
                >
                  <span className="text-[22px] xl:text-[24px] font-bold text-white whitespace-nowrap">
                    负面 <Num>{cat.negative}%</Num>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 第二部分：产品专属监测词正负面对比 */}
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <SectionTitle>产品专属监测词</SectionTitle>
            <div className="flex-1 min-h-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl px-8 py-5 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.2)]">

              <div className="flex items-center justify-between shrink-0 pb-3 mb-2 border-b border-white/5 text-[18px] xl:text-[20px] font-bold">
                <span className="flex items-center gap-2.5 text-emerald-400">
                  <span className="w-4 h-4 rounded-sm bg-emerald-500/80" />
                  正面信息
                </span>
                <span className="flex items-center gap-2.5 text-rose-400">
                  负面信息
                  <span className="w-4 h-4 rounded-sm bg-rose-500/70" />
                </span>
              </div>

              <div className="flex-1 min-h-0 grid" style={{ gridTemplateRows: `repeat(${products.length}, 1fr)` }}>
                {products.map((d) => (
                  <div key={d.project_id} className="flex items-center gap-5 min-h-0 py-2">
                    <span className="w-[200px] shrink-0 text-[22px] xl:text-[24px] font-bold text-zinc-100">
                      {d.project_name}
                    </span>
                    <div className="flex-1">
                      <div className="h-14 rounded-xl overflow-hidden flex shadow-inner border border-white/5">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500/80 to-emerald-400/80 flex items-center px-4"
                          style={{ width: `${d.positive}%` }}
                        >
                          <Num className="text-[22px] xl:text-[24px] font-black text-white">{d.positive}%</Num>
                        </div>
                        {d.negative > 0 && (
                          <div
                            className="h-full bg-gradient-to-r from-rose-500/70 to-rose-400/70"
                            style={{ width: `${d.negative}%` }}
                          />
                        )}
                      </div>
                    </div>
                    <span className="w-[120px] shrink-0 text-right text-[20px] xl:text-[22px] font-bold text-rose-400">
                      负面 <Num>{d.negative}%</Num>
                    </span>
                    <span className="w-[280px] shrink-0 text-[16px] xl:text-[18px] text-zinc-400 leading-snug">
                      {PRODUCT_NOTES[d.project_name] || ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_MonitorWordOverview.hideHeader = true;
