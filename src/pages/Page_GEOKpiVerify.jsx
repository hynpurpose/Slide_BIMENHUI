import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOKpiVerify() {
  const CardBgTexture = ({ accent = false }) => {
    const cols = 8;
    const rows = 6;
    const total = cols * rows;
    return (
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0 overflow-hidden pointer-events-none bg-[#020617]/40">
        {Array.from({ length: total }).map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          
          // Normalized positions
          const xFactor = c / (cols - 1);
          const yFactor = r / (rows - 1);
          
          // Smooth diagonal gradient factor from top-left (dark) to bottom-right (bright)
          const distance = (xFactor + yFactor) / 2;
          
          // Exponential curve for softer transition near the dark areas
          const smoothFactor = Math.pow(distance, 1.4);
          
          // Set smooth opacity limits with absolutely zero noise to prevent "mosaic" patterns
          const minOpacity = 0.01;
          const maxOpacity = accent ? 0.42 : 0.28;
          const opacity = minOpacity + smoothFactor * (maxOpacity - minOpacity);
          
          return (
            <div 
              key={i} 
              className={accent ? "bg-[#004CE5]" : "bg-[#0A328C]"} 
              style={{ opacity }} 
            />
          );
        })}
      </div>
    );
  };

  return (
    <SlideLayout
      title="如何验收效果？"
      subtitle="两个层面"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-950/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Two separate cards centered side-by-side */}
      <div className="w-full h-full flex items-center justify-center gap-12 select-none">
        
        {/* Card 1: KPI Verify */}
        <div className="relative w-[720px] h-[520px] bg-[#020617] border border-[#004CE5]/15 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-12 xl:p-14 flex flex-col justify-between">
          {/* Custom Seamless Smooth Grid Texture Background */}
          <CardBgTexture />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/5 via-transparent to-transparent pointer-events-none" />

          {/* Top Area: Icon Container */}
          <div className="relative z-10 w-full flex items-center justify-between">
            <svg className="w-16 h-16 text-white overflow-visible" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <circle cx="50" cy="38" r="20" />
              <circle cx="38" cy="62" r="20" />
              <circle cx="62" cy="62" r="20" />
            </svg>
          </div>

          {/* Bottom Area: Text Container (Fixed height to guarantee h3 vertical alignment) */}
          <div className="relative z-10 mt-auto w-full h-[240px] flex flex-col justify-start">
            {/* Title (Aligned) */}
            <h3 className="text-[32px] xl:text-[36px] font-extrabold text-white leading-tight mb-6 font-sans">
              1. 看 KPI 有没有完成
            </h3>

            {/* Content */}
            <p className="text-[20px] xl:text-[22px] font-medium text-zinc-300 leading-relaxed font-sans mt-2">
              专业的数据系统 <span className="text-[#3B82F6] font-bold mx-2">+</span> 人工手动抽查
            </p>
          </div>
        </div>

        {/* Card 2: Sales Effect Verify */}
        <div className="relative w-[720px] h-[520px] bg-[#020617] border border-[#004CE5]/15 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-12 xl:p-14 flex flex-col justify-between">
          {/* Custom Seamless Smooth Grid Texture Background (Accent Color) */}
          <CardBgTexture accent={true} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004CE5]/5 via-transparent to-transparent pointer-events-none" />

          {/* Top Area: Icon Container */}
          <div className="relative z-10 w-full flex items-center justify-between">
            <svg className="w-16 h-16 text-[#3B82F6] overflow-visible" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <circle cx="50" cy="38" r="20" />
              <circle cx="38" cy="62" r="20" />
              <circle cx="62" cy="62" r="20" />
            </svg>
          </div>

          {/* Bottom Area: Text Container (Fixed height matching Card 1) */}
          <div className="relative z-10 mt-auto w-full h-[240px] flex flex-col justify-start">
            {/* Title (Aligned) */}
            <h3 className="text-[32px] xl:text-[36px] font-extrabold text-white leading-tight mb-6 font-sans">
              2. 看有没有真实的销售效果
            </h3>

            {/* Content & Glowing Question */}
            <div className="flex flex-col gap-4 w-full mt-2">
              <span className="text-[18px] xl:text-[20px] text-zinc-400 font-medium font-sans">
                问一个最简单的问题：
              </span>
              <div className="bg-[#004CE5]/10 border border-[#004CE5]/20 rounded-2xl p-5 shadow-[0_0_20px_rgba(0,76,229,0.08)] backdrop-blur-sm">
                <p className="text-[20px] xl:text-[22px] font-extrabold text-[#ADC9FF] leading-snug font-sans text-center">
                  “你是从哪里知道我们品牌的？”
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOKpiVerify.hideHeader = true;
