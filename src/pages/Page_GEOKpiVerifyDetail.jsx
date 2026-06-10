import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOKpiVerifyDetail() {
  const [imgFailed, setImgFailed] = useState(false);

  const CardBgTexture = ({ accent = false }) => {
    const cols = 8;
    const rows = 6;
    const total = cols * rows;
    return (
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0 overflow-hidden pointer-events-none bg-[#020617]/40">
        {Array.from({ length: total }).map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          
          const xFactor = c / (cols - 1);
          const yFactor = r / (rows - 1);
          const distance = (xFactor + yFactor) / 2;
          const smoothFactor = Math.pow(distance, 1.4);
          
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
      subtitle="看 KPI 有没有完成"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-950/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: Left card + Right image */}
      <div className="w-full h-full flex items-center justify-start relative z-10 select-none">
        
        {/* Left: Card 1 (KPI Verify - Narrower) */}
        <div className="relative w-[600px] h-[520px] bg-[#020617] border border-[#004CE5]/15 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-12 xl:p-14 flex flex-col justify-between shrink-0">
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

          {/* Bottom Area: Text Container */}
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

        {/* Right: Full-height Image Slot (top-[-145px] to bottom-0, touching guide lines) */}
        <div className="absolute top-[-145px] bottom-0 left-[660px] right-0 border border-[#004CE5]/30 bg-zinc-950/40 rounded-r-[32px] rounded-l-none shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex items-center justify-center z-20">
          {!imgFailed ? (
            <img
              src="/images/geo-kpi-verify.png"
              alt="人工手动抽查报告截图"
              className="w-full h-full object-cover"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-4 select-none">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-[#004CE5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="text-zinc-400 font-bold text-2xl font-['MiSans']">人工手动抽查报告截图</span>
              <span className="text-zinc-650 text-[16px]">此处展示实测数据抽样核对图表</span>
            </div>
          )}
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOKpiVerifyDetail.hideHeader = true;
