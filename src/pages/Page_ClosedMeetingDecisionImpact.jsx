import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ClosedMeetingDecisionImpact() {
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
          <div className="w-full">
            <h2
              className="text-6xl xl:text-7xl font-black tracking-wide text-white text-center"
              style={{ lineHeight: '1.6' }}
            >
              当越来越多用户开始通过 AI 获取信息、做消费决策，<br />
              品牌能不能被 AI 正确理解和推荐，<br />
              就会直接影响未来的<span className="text-[#004CE5] font-extrabold mx-2">流量入口</span>和<span className="text-[#004CE5] font-extrabold ml-2">用户选择。</span>
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
            GEO 到底有没有用？
          </span>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ClosedMeetingDecisionImpact.hideHeader = true;
