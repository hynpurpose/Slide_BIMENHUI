import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOKpiVerifyBeforeTransition() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center relative z-10">

        {/* Quote Icon positioned absolutely between top guide (80px) and content top (225px), moved right by 40px */}
        <div className="absolute top-[-168px] left-[40px] select-none">
          <img
            src="/icons/closed_meeting_quote.png"
            alt="Quote"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Title Row */}
        <div className="flex items-center justify-center w-full relative" style={{ top: '-80px' }}>
          <div className="w-full px-12">
            <h2
              className="text-7xl xl:text-8xl font-black tracking-wide text-white text-center font-['MiSans']"
              style={{ lineHeight: '1.7' }}
            >
              项目做完之后，<br />
              <span className="text-[#004CE5] font-extrabold">品牌方到底怎么验收？</span>
            </h2>
          </div>
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-0 left-[40px] select-none flex items-center gap-3">
          <div className="w-[2px] h-6 bg-[#004CE5]" />
          <span
            className="text-[26px] text-zinc-400 tracking-wider font-['AlimamaShuHeiTi']"
            style={{ fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
          >
            品牌做好 GEO 的三道关
          </span>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOKpiVerifyBeforeTransition.hideHeader = true;
