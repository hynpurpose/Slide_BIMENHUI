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
      <div className="w-full h-full flex flex-col justify-center pl-[60px] pr-[120px] relative z-10 py-6">
        <div className="flex flex-col gap-8 xl:gap-10 w-full max-w-[1450px]">
          {menuItems.map((item, index) => (
            <div
              key={item.num}
              className="flex items-center justify-between py-6 xl:py-7 border-b border-zinc-800/80 last:border-0 hover:bg-white/[0.01] transition-all duration-300 px-8 rounded-2xl group cursor-pointer"
            >
              {/* Left Side: Title and number */}
              <div className="flex items-baseline gap-6">
                <span className="text-[44px] xl:text-[52px] font-black text-white group-hover:text-[#004CE5] transition-colors duration-300 font-['MiSans']">
                  {item.title}
                </span>
                <span className="text-2xl xl:text-[28px] font-mono text-zinc-500 group-hover:text-blue-400/70 transition-colors duration-300">
                  ({item.num})
                </span>
              </div>

              {/* Right Side: Circular arrow button */}
              <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full border border-white/10 group-hover:border-[#004CE5] group-hover:bg-[#004CE5] flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(0,76,229,0.3)]">
                <ArrowRight className="text-[#004CE5] group-hover:text-white transition-colors duration-300 w-7 h-7 xl:w-9 xl:h-9" />
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
