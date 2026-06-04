import React from 'react';
import { CameraOff } from 'lucide-react';

export default function Page_ClosedMeetingIntro() {
  return (
    <div className="w-full h-full flex relative bg-zinc-950 text-white font-sans select-none overflow-hidden items-center px-20">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] -left-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] right-24 bottom-24 pointer-events-none" />

      {/* Left Part: Giant Quote Icon */}
      <div className="w-[35%] flex justify-center items-center relative z-10">
        <div className="relative group">
          {/* Ambient glow behind quote */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full scale-90" />

          <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 relative z-10 drop-shadow-[0_10px_20px_rgba(59,130,246,0.25)]">
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
      </div>

      {/* Right Part: Simplified Text Block */}
      <div className="flex-1 flex flex-col justify-center pl-10 relative z-10 gap-8">
        <h2
          className="text-7xl xl:text-8xl font-black tracking-wide text-white"
          style={{ lineHeight: '1.5' }}
        >
          闭门会，<br />
          讲点外面<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-extrabold ml-2">听不到的</span>。
        </h2>

        <div className="flex items-center gap-5 text-red-500 pl-1 mt-6">
          <CameraOff size={56} className="opacity-95 animate-pulse text-red-500" />
          <span
            className="font-medium tracking-wide text-zinc-300"
            style={{ fontSize: '3rem' }}
          >
            请大家不要拍照录音
          </span>
        </div>
      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ClosedMeetingIntro.hideHeader = true;
