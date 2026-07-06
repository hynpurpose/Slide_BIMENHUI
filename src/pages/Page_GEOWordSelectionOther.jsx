import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionOther() {
  const [imgFailed, setImgFailed] = useState(false);
  const [phoneImgFailed, setPhoneImgFailed] = useState(false);
  const middleImagePath = "/images/trend-consumer-trust.png";
  const phoneImagePath = "/images/geo-word-selection-other-phone.png";

  return (
    <SlideLayout
      title="市场上其他做法"
      subtitle="关键词是怎么来的，也就是我们怎么判断这些词最接近真实用户在 AI 平台上的提问。"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-between gap-12 relative z-10 select-none">

        {/* 左侧：百度营销/小红书聚光月均搜索指数 */}
        <div className="w-[880px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">百度营销/小红书聚光月均搜索指数</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-6 bg-zinc-950 flex flex-col justify-between">
            <div className="flex-grow bg-white border border-zinc-200 rounded-xl relative overflow-hidden flex items-center justify-start h-[620px] shadow-inner">
              {!imgFailed ? (
                <img
                  src={middleImagePath}
                  alt="百度营销/小红书聚光月均搜索指数"
                  className="w-full h-full object-contain object-left"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 bg-zinc-50">
                  <ImageIcon className="w-16 h-16 text-zinc-400 opacity-60" />
                  <span className="text-zinc-500 font-bold text-[22px] font-['MiSans']">
                    [ 百度营销/小红书聚光月均搜索指数图表 ]
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 右侧：手机端真实搜索截图 */}
        <div className="w-[880px] h-full relative flex items-center justify-center shrink-0 overflow-visible">
          <div className="absolute inset-x-0 top-[-120px] bottom-0 z-20 flex items-center justify-center">
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

        {/* Footnote */}
        <div className="absolute bottom-[-48px] left-0 w-[880px] text-center text-white text-[22px] font-sans font-bold z-20">
          数据来源：百度广告搜索指数
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOWordSelectionOther.hideHeader = true;
