import React from 'react';
import { CameraOff } from 'lucide-react';

export default function Page_ClosedMeetingIntro() {
  return (
    <div className="w-full h-full flex flex-col justify-center relative bg-black text-white font-sans select-none overflow-hidden px-24">

      <div className="w-full flex flex-col relative z-10 gap-12 xl:gap-16">

        {/* Quote + Title Row */}
        <div className="flex items-start w-full">
          {/* Left Part: Giant Quote Icon aligned with H2 top */}
          <div className="w-[30%] flex justify-end pr-16 pt-6 xl:pt-8">
            <img
              src="/icons/closed_meeting_quote.png"
              alt="Quote"
              className="w-48 h-48 xl:w-56 xl:h-56 object-contain"
            />
          </div>

          {/* Right Part: Title Text */}
          <div className="flex-1">
            <h2
              className="text-7xl xl:text-8xl font-black tracking-wide text-white"
              style={{ lineHeight: '1.5' }}
            >
              闭门会，<br />
              讲点外面<span className="text-[#004CE5] font-extrabold ml-2">听不到的。</span>
            </h2>
          </div>
        </div>

        {/* CameraOff Row */}
        <div className="flex w-full">
          <div className="w-[30%] pr-16" />
          <div className="flex-1 flex items-center gap-5 text-red-500 pl-1">
            <CameraOff size={56} className="opacity-95 text-red-500" />
            <span
              className="font-medium tracking-wide text-zinc-300"
              style={{ fontSize: '3rem' }}
            >
              请大家不要拍照录音
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ClosedMeetingIntro.hideHeader = true;
