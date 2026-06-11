import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOServiceProviderSelection4() {
  const [imgFailed, setImgFailed] = useState(false);
  const [rightImgFailed, setRightImgFailed] = useState(false);
  const iconPath = "/icons/provider-icon-4.svg";

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
        
        {/* Card 04 (Using Card 02 Blue Highlight Styling) */}
        <div className="relative w-[380px] h-[500px] bg-gradient-to-br from-[#004CE5] via-[#003cb8] to-[#0B0C10] border border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(0,76,229,0.45)] rounded-[32px] p-12 flex flex-col justify-start">
          {/* Number */}
          <div className="mb-8">
            <span className="text-[64px] font-black font-mono tracking-tight block leading-none text-white opacity-90">
              04
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-[38px] font-black text-white tracking-wide leading-tight mt-2 font-['MiSans']">
            看投放策略
          </h3>

          {/* Icon at Bottom Right */}
          <div className="absolute bottom-10 right-10 w-16 h-16 flex items-center justify-center">
            {!imgFailed ? (
              <img
                src={iconPath}
                alt="Icon 04"
                className="w-full h-full object-contain"
                onError={() => setImgFailed(true)}
              />
            ) : (
              /* Fallback Sparkle Icon */
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-white/60">
                <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="currentColor"/>
              </svg>
            )}
          </div>
        </div>

        {/* Right Top Text (Sits right above Contenttop line) */}
        <div className="absolute right-0 top-[-48px] text-right z-20">
          <span className="text-[32px] font-bold text-zinc-150 font-['MiSans'] leading-none tracking-wide block">
            看服务商有没有真正的 <span className="text-[#004CE5]">投放逻辑</span>。
          </span>
        </div>

        {/* Right Column: 16:9 Image Spot (top-0 bottom-0 right-0 w-[1378px] - sharp corners, blue border) */}
        <div className="absolute w-[1378px] right-0 top-0 bottom-0 border border-[#004CE5]/60 bg-zinc-950/40 overflow-hidden flex items-center justify-center z-20 p-6">
          {!rightImgFailed ? (
            <img
              src="/images/geo-service-provider-4.png"
              alt="投放策略"
              className="w-full h-full object-contain"
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
              <span className="text-zinc-400 font-bold text-2xl font-['MiSans']">投放策略 示意图</span>
              <span className="text-zinc-650 text-[16px]">此处展示投放策略或投放逻辑脑图截图</span>
            </div>
          )}
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOServiceProviderSelection4.hideHeader = true;
