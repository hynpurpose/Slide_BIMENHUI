import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionOther2() {
  const [imgFailed, setImgFailed] = useState(false);
  const [phoneImgFailed, setPhoneImgFailed] = useState(false);

  // Paths for assets
  const middleImagePath = "/images/trend-consumer-trust.png";
  const phoneImagePath = "/images/geo-word-selection-other-phone.png";

  return (
    <SlideLayout
      title="传统搜索 VS AI 搜索"
      subtitle="市场上其他做法（二）：复制百度、社媒热词"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-start relative z-10">
        <div className="relative w-full h-[775px]">

          {/* Left Column: WeChat Card with Embedded Image (left-[40px] w-[900px] top-[20px] h-[735px]) */}
          <div className="absolute left-[40px] w-[900px] top-[20px] h-[735px] bg-zinc-950/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] select-none">
            {/* Card Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
              <div className="flex items-center gap-4">
                {/* Double Arrow Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                    <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                    <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                    <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] font-black text-white leading-tight">百度、社媒常见搜索词</span>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              </div>
            </div>

            {/* Card Body: Embedded Image (Flush to borders) */}
            <div className="flex-grow bg-zinc-950 relative overflow-hidden flex items-center justify-center">
              {/* Background glowing effects for dark luxury feeling */}
              <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[80px] -left-12 -top-12 pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-900/3 blur-[100px] -right-12 -bottom-12 pointer-events-none" />

              {!imgFailed ? (
                <img
                  src={middleImagePath}
                  alt="百度社媒热度分析图"
                  className="w-full h-full object-cover"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/10 border border-dashed border-zinc-800 rounded-2xl p-8 gap-4 select-none">
                  <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                  <span className="text-zinc-550 font-bold text-2xl font-['MiSans']">
                    [ 百度/社媒搜索数据图表 ]
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Enlarged Smartphone Mockup Container (left-[1020px] w-[780px] top-[-145px] bottom-0) */}
          <div className="absolute left-[1020px] w-[780px] top-[-145px] bottom-0 z-20 flex items-center justify-center select-none">
            {/* Smartphone Mockup - Significantly Enlarged */}
            <div className="relative w-[440px] h-[900px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[56px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900 border border-zinc-800/80 ml-auto mr-4" />
              </div>

              {/* Screen Content */}
              <div className="absolute inset-0 z-10 w-full h-full bg-zinc-900 flex items-center justify-center p-1">
                {!phoneImgFailed ? (
                  <img
                    src={phoneImagePath}
                    alt="手机端真实搜索截图"
                    className="w-full h-full object-cover rounded-[46px]"
                    onError={() => setPhoneImgFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-center p-6 gap-2">
                    <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                    <span className="text-zinc-550 font-bold text-lg font-['MiSans']">
                      [ 手机端真实搜索截图 ]
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionOther2.hideHeader = true;
