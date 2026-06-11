import React from 'react';
import { ArrowRight } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ClosedMeetingOutline() {
  const menuItems = [
    { num: '01', title: 'GEO 到底有没有用' },
    { num: '02', title: 'GEO 行业的原罪' },
    { num: '03', title: '品牌做好 GEO 的三道关' },
    { num: '04', title: '如何识别靠谱的服务商' },
  ];

  return (
    <SlideLayout
      title="内容大纲"
      subtitle="接下来，我将分享以下四部分内容："
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex flex-col justify-center pl-6 pr-12 relative z-10 py-4">
        <div className="flex flex-col gap-4 w-full">
          {menuItems.map((item, index) => (
            <div
              key={item.num}
              className="flex items-center gap-10 py-6 border-b border-zinc-800/30 last:border-0 px-8 rounded-3xl"
            >
              {/* Left Side: Number and Slash */}
              <div className="flex items-center gap-8 flex-shrink-0 select-none">
                <span className="text-[84px] xl:text-[108px] font-black font-mono leading-none tracking-tighter text-[#004CE5]">
                  {item.num}
                </span>
                <span className="text-[56px] xl:text-[72px] font-light text-zinc-700 leading-none">
                  /
                </span>
              </div>

              {/* Right Side: Title & Arrow */}
              <div className="flex-grow flex items-center justify-between gap-8 pl-2">
                <span className="text-[76px] xl:text-[96px] font-extrabold text-white leading-none font-['MiSans'] tracking-wide">
                  {item.title}
                </span>
                
                <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full border border-[#004CE5]/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,76,229,0.05)]">
                  <ArrowRight className="text-[#004CE5] w-8 h-8 xl:w-10 xl:h-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ClosedMeetingOutline.hideHeader = true;
