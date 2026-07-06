import React, { useState } from 'react';
import { Image as ImageIcon, Search } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const SEARCH_QUERY = '推荐几款好看的电视';

function BaiduSearchBox() {
  return (
    <div className="w-[420px] bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-zinc-200/80 flex items-center overflow-hidden shrink-0">
      <div className="flex items-center gap-2 pl-5 pr-3 py-3 flex-1 min-w-0">
        <span className="text-[#2932E1] font-black text-[18px] font-['MiSans'] shrink-0">百度</span>
        <span className="text-zinc-800 text-[20px] font-medium font-['MiSans'] truncate">{SEARCH_QUERY}</span>
      </div>
      <div className="h-full px-6 py-3.5 bg-[#3385FF] text-white text-[18px] font-bold font-['MiSans'] shrink-0 flex items-center">
        百度一下
      </div>
    </div>
  );
}

function XiaohongshuSearchBox() {
  return (
    <div className="w-[340px] bg-white rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.3)] border border-[#FE2C55]/25 flex items-center overflow-hidden shrink-0">
      <div className="flex items-center gap-2 pl-4 pr-2 py-2.5 flex-1 min-w-0">
        <Search className="w-[18px] h-[18px] text-[#FE2C55] shrink-0" strokeWidth={2.5} />
        <span className="text-zinc-700 text-[17px] font-medium font-['MiSans'] truncate">{SEARCH_QUERY}</span>
      </div>
      <div className="w-9 h-9 mr-1.5 rounded-full bg-[#FE2C55] flex items-center justify-center shrink-0">
        <Search className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
    </div>
  );
}

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

      {/* Main Container：三栏布局，过渡区独占中间缝隙 */}
      <div className="w-full h-full flex items-stretch relative z-10 select-none">

        {/* 左侧：百度营销/小红书聚光月均搜索指数 */}
        <div className="w-[850px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
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
          <div className="flex-grow min-h-0 p-6 pb-4 bg-zinc-950 flex flex-col">
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

          {/* 卡片内数据来源：与右侧结论平齐 */}
          <div className="shrink-0 px-6 pb-5 pt-1 border-t border-zinc-900/80 bg-zinc-950 text-center">
            <span className="text-white text-[22px] font-sans font-bold font-['MiSans']">
              数据来源：百度广告、小红书聚光搜索指数
            </span>
          </div>
        </div>

        {/* 中间过渡：横平居中于两框缝隙 */}
        <div className="w-[140px] shrink-0 flex flex-col items-center justify-center gap-4 self-center z-30 overflow-visible">
          <span className="text-[24px] font-black text-white font-['MiSans'] leading-none whitespace-nowrap px-5 py-3 rounded-full bg-[#004CE5]/30 border-2 border-[#2E6BFF] shadow-[0_0_32px_rgba(46,107,255,0.65),0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            AI搜索形式变了
          </span>
          <svg width="100" height="28" viewBox="0 0 100 28" fill="none" aria-hidden="true" className="drop-shadow-[0_0_12px_rgba(46,107,255,0.8)]">
            <path d="M0 14H76" stroke="#2E6BFF" strokeWidth="5" strokeLinecap="round" />
            <path d="M66 5L88 14L66 23" stroke="#2E6BFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 右侧：手机端真实搜索截图 */}
        <div className="w-[850px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
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
              <span className="text-[28px] font-black text-white leading-tight">AI 平台真实用户提问</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow min-h-0 p-6 pb-4 bg-zinc-950 flex items-center justify-center gap-10">
            {/* 手机左侧：传统搜索框示意 */}
            <div className="flex flex-col items-end justify-center gap-8 flex-1 min-w-0 pr-2">
              <div className="flex flex-col items-end gap-2">
                <span className="text-zinc-500 text-[15px] font-bold font-['MiSans'] tracking-wide">百度搜索</span>
                <BaiduSearchBox />
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-zinc-500 text-[15px] font-bold font-['MiSans'] tracking-wide">小红书搜索</span>
                <XiaohongshuSearchBox />
              </div>
            </div>

            <div className="relative w-[304px] h-[620px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[56px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden shrink-0">
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

          {/* 卡片内结论：与百度搜索框居中对齐 */}
          <div className="shrink-0 px-6 pb-5 pt-1 border-t border-zinc-900/80 bg-zinc-950 flex items-center gap-10">
            <div className="flex-1 min-w-0 pr-2 flex justify-end">
              <div className="w-[420px] text-center">
                <span className="text-white text-[22px] font-sans font-bold font-['MiSans']">
                  搜索逻辑变了，数据也变了
                </span>
              </div>
            </div>
            <div className="w-[304px] shrink-0" aria-hidden="true" />
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOWordSelectionOther.hideHeader = true;
