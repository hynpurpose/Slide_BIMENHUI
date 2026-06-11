import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ClosedMeetingIntro() {
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
              className="text-[128px] font-black tracking-wide text-white text-center"
              style={{ lineHeight: '1.3' }}
            >
              闭门会，<br />
              讲点外面<span className="text-[#004CE5] font-extrabold ml-2">听不到的。</span>
            </h2>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ClosedMeetingIntro.hideHeader = true;
