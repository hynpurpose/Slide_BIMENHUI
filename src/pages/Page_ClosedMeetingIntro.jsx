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
            <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 xl:w-56 xl:h-56">
              <defs>
                <linearGradient id="quote-gradient-meeting" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <path d="M0 50C0 22.4 22.4 0 50 0V30C39 30 30 39 30 50H50V100H0V50Z" fill="url(#quote-gradient-meeting)" />
              <path d="M65 50C65 22.4 87.4 0 115 0V30C104 30 95 39 95 50H115V100H65V50Z" fill="url(#quote-gradient-meeting)" />
            </svg>
          </div>

          {/* Right Part: Title Text */}
          <div className="flex-1">
            <h2
              className="text-7xl xl:text-8xl font-black tracking-wide text-white"
              style={{ lineHeight: '1.5' }}
            >
              闭门会，<br />
              讲点外面<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-extrabold ml-2">听不到的</span>。
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
