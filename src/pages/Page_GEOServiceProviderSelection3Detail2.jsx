import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOServiceProviderSelection3Detail2() {
  const [rightImgFailed, setRightImgFailed] = useState(false);

  return (
    <SlideLayout
      title="如何选出靠谱的服务商？"
      subtitle="5个判断技巧"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-start relative z-10 select-none">

        {/* Right Top Text (Sits right above Contenttop line) */}
        <div className="absolute right-0 top-[-48px] text-right z-20">
          <span className="text-[32px] font-bold text-zinc-150 font-['MiSans'] leading-none tracking-wide block">
            除了数量，<span className="text-[#004CE5]">更要看内容质量</span>
          </span>
        </div>

        {/* Full-width Image Spot (top-0 bottom-0 left-0 right-0 / w-full h-full - sharp corners, blue border) */}
        <div className="w-full h-full border border-[#004CE5]/60 bg-zinc-950/40 overflow-hidden flex items-center justify-center z-20">
          {!rightImgFailed ? (
            <img
              src="/images/geo-service-provider-3-detail-2.png"
              alt="内容质量二"
              className="w-full h-full object-cover"
              onError={() => setRightImgFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-4 select-none">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-[#004CE5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span className="text-zinc-400 font-bold text-2xl font-['MiSans']">内容质量 示意图 二</span>
              <span className="text-zinc-650 text-[16px]">此处展示第二个高质量内容对比或具体评判维度截图</span>
            </div>
          )}
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOServiceProviderSelection3Detail2.hideHeader = true;
