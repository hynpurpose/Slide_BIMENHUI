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
    <h3 className="text-[26px] xl:text-[28px] font-bold text-zinc-300 tracking-wider flex items-center gap-3">
      <span className="w-1.5 h-6 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      {children}
    </h3>
  );
}

export function Page_SkyworthReport_CoreDataSelf() {
  const brandMetrics = [
    { label: '提及率', value: '73.6%' },
    { label: 'TOP1 提及率', value: '41.2%' },
    { label: 'TOP3 提及率', value: '63.5%' },
  ];

  const productMetrics = [
    { label: '平均提及率', value: '53.3%' },
    { label: '平均 TOP1 提及率', value: '19.5%' },
    { label: '平均 TOP3 提及率', value: '40.0%' },
  ];

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-20 sm:px-28 py-16 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1600px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-10">

          {/* 页面标题 */}
          <div className="text-center shrink-0 mb-4">
            <h1 className="text-[36px] xl:text-[40px] font-bold text-white tracking-widest leading-tight">
              核心数据总览
            </h1>
          </div>

          {/* ===== 品类优化词 ===== */}
          <div className="shrink-0 flex flex-col gap-6">
            <SectionTitle>品类优化词</SectionTitle>
            <div className="grid grid-cols-3 gap-16 pl-4">
              {brandMetrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[20px] xl:text-[22px] font-medium text-zinc-400 tracking-wider">{m.label}</span>
                  <Num className="text-[64px] xl:text-[72px] font-bold text-white mt-2 leading-none tracking-tight">{m.value}</Num>
                </div>
              ))}
            </div>
          </div>

          {/* ===== 产品专属优化词 ===== */}
          <div className="shrink-0 flex flex-col gap-6">
            <SectionTitle>产品专属优化词 <span className="text-[16px] xl:text-[18px] text-zinc-500 font-normal ml-2">（五款产品平均表现）</span></SectionTitle>
            <div className="grid grid-cols-3 gap-16 pl-4">
              {productMetrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[20px] xl:text-[22px] font-medium text-zinc-400 tracking-wider">{m.label}</span>
                  <Num className="text-[64px] xl:text-[72px] font-bold text-white mt-2 leading-none tracking-tight">{m.value}</Num>
                </div>
              ))}
            </div>
          </div>

          {/* ===== 数据总结 ===== */}
          <div className="shrink-0 border-t border-white/10 pt-8 mt-4">
            <div className="flex items-start gap-6">
              <span className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 bg-[#004CE5] px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(0,76,229,0.3)]">数据总结</span>
              <p className="text-[20px] xl:text-[22px] text-zinc-200 leading-relaxed text-justify flex-1">
                品牌层面，创维在品类大词的<strong className="text-white font-bold">提及率达 73.6%</strong>，AI 认知优势稳固，但 <strong className="text-white font-bold">TOP1 仅 41.2%</strong>，仍有近六成首推位被竞品分走。产品平均层面，五款重点产品平均提及率为 <strong className="text-[#60A5FA] font-bold">53.3%</strong>，平均 TOP1 仅为 <strong className="text-[#60A5FA] font-bold">19.5%</strong>，表明直接首推率（TOP1）仍有较大优化空间，亟需通过专属场景和长尾优化词的语料覆盖来拉升推荐精度。
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_CoreDataSelf.hideHeader = true;
