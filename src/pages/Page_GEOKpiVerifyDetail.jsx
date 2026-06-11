import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOKpiVerifyDetail() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <SlideLayout
      title="如何验收效果？"
      subtitle="看 KPI 有没有完成"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-950/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: Full-width Image Card */}
      <div className="w-full h-full flex items-center justify-start relative z-10 select-none">
        
        {/* Full-width Image Slot filling the entire Content Zone (1840px * 775px) */}
        <div className="w-full h-full border border-[#004CE5]/30 bg-zinc-950/40 rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex items-center justify-center z-20">
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
