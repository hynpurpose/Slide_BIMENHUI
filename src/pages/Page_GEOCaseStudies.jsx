import React, { useState } from 'react';

export default function Page_GEOCaseStudies() {
  const [leftImgFailed, setLeftImgFailed] = useState(false);
  const [rightImgFailed, setRightImgFailed] = useState(false);

  // Paths for the vertical case study images
  const leftImagePath = "/images/geo-case-2b.png";
  const rightImagePath = "/images/geo-case-2c.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-4 px-12">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with solid blue dot accent and keyword */}
      <div className="w-full flex flex-col relative z-10 shrink-0 mb-6">
        <div className="w-full flex items-center gap-4 mb-6">
          <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
            GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
          </h2>
        </div>
        {/* Subtitle centered in premium outline badge */}
        <div className="w-full flex justify-center">
          <div className="px-8 py-2 border border-blue-500/25 bg-blue-500/5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.06)]">
            <span className="text-2xl xl:text-3xl font-black text-blue-400 tracking-wider">
              两个实际案例（截图是AI生成的，待替换）
            </span>
          </div>
        </div>
      </div>

      {/* Middle Section: Two Columns PPT Case Card Layout (Equal columns stretching to PPT edges) */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-full flex-grow flex-1 min-h-0 relative z-10 mb-4 items-stretch">

        {/* Left Column: 2B Case Study (Left Image, Right Text) */}
        <div className="group flex flex-row p-6 bg-zinc-900/35 border border-zinc-800/80 rounded-3xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] justify-between items-center gap-6">
          <div className="absolute -right-20 -bottom-20 w-52 h-52 rounded-full bg-blue-600/5 blur-[60px] pointer-events-none transition-all duration-300 group-hover:bg-blue-600/10" />

          {/* Left Part: Large Vertical Image Slot (Takes 68% width to stretch fully) */}
          <div className="w-[68%] h-full flex items-center justify-center relative z-10 shrink-0 min-w-0">
            {!leftImgFailed ? (
              <img
                src={leftImagePath}
                alt="2B广告公司案例图"
                className="w-full h-full object-contain rounded-2xl border border-zinc-900/30 bg-zinc-900/10 shadow-subtle-glow"
                onError={() => setLeftImgFailed(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-zinc-650 gap-2 p-4 w-full h-full text-center border border-zinc-800 bg-zinc-950/40 rounded-2xl">
                <svg className="w-10 h-10 text-zinc-700 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                </svg>
                <span className="text-xs font-bold text-zinc-500 font-mono bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800/60 block truncate max-w-full">
                  geo-case-2b.png
                </span>
                <span className="text-[10px] text-zinc-600">竖版图片位</span>
              </div>
            )}
          </div>

          {/* Right Part: Text Content Sidebar (Takes remaining 32% width) */}
          <div className="w-[32%] flex flex-col justify-start py-2 h-full relative z-10 pl-2">
            {/* Pill Badges - Stacked vertically in the narrow column */}
            <div className="flex flex-col gap-2 mb-6 shrink-0">
              <span className="self-start bg-blue-500/10 border border-blue-500/30 text-blue-400 font-extrabold px-4 py-1 rounded-full text-sm tracking-wide uppercase">
                2B领域
              </span>
              <span className="self-start bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 font-extrabold px-4 py-1 rounded-full text-sm tracking-wide">
                广告公司
              </span>
            </div>

            {/* Quote Block */}
            <div className="relative pl-6 mt-4">
              <span className="absolute left-0 -top-5 text-6xl font-serif text-blue-500/25 leading-none select-none">“</span>
              <p className="text-2xl xl:text-3xl font-black text-zinc-100 leading-snug tracking-wide">
                现在平均每三个新客户里，就有一个是通过 <span className="text-blue-400 font-extrabold drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">AI搜索</span> 来的。
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 2C Case Study (Left Image, Right Text) */}
        <div className="group flex flex-row p-6 bg-zinc-900/35 border border-zinc-800/80 rounded-3xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] justify-between items-center gap-6">
          <div className="absolute -left-20 -bottom-20 w-52 h-52 rounded-full bg-purple-600/5 blur-[60px] pointer-events-none transition-all duration-300 group-hover:bg-purple-600/10" />

          {/* Left Part: Large Vertical Image Slot (Takes 68% width to stretch fully) */}
          <div className="w-[68%] h-full flex items-center justify-center relative z-10 shrink-0 min-w-0">
            {!rightImgFailed ? (
              <img
                src={rightImagePath}
                alt="2C家居门店案例图"
                className="w-full h-full object-contain rounded-2xl border border-zinc-900/30 bg-zinc-900/10 shadow-subtle-glow"
                onError={() => setRightImgFailed(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-zinc-650 gap-2 p-4 w-full h-full text-center border border-zinc-800 bg-zinc-950/40 rounded-2xl">
                <svg className="w-10 h-10 text-zinc-700 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                </svg>
                <span className="text-xs font-bold text-zinc-500 font-mono bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800/60 block truncate max-w-full">
                  geo-case-2c.png
                </span>
                <span className="text-[10px] text-zinc-600">竖版图片位</span>
              </div>
            )}
          </div>

          {/* Right Part: Text Content Sidebar (Takes remaining 32% width) */}
          <div className="w-[32%] flex flex-col justify-start py-2 h-full relative z-10 pl-2">
            {/* Pill Badges - Stacked vertically in the narrow column */}
            <div className="flex flex-col gap-2 mb-6 shrink-0">
              <span className="self-start bg-purple-500/10 border border-purple-500/30 text-purple-400 font-extrabold px-4 py-1 rounded-full text-sm tracking-wide uppercase">
                2C领域
              </span>
              <span className="self-start bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 font-extrabold px-4 py-1 rounded-full text-sm tracking-wide">
                家居行业
              </span>
              <span className="self-start bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 font-extrabold px-4 py-1 rounded-full text-sm tracking-wide">
                有门店
              </span>
            </div>

            {/* Quote Block */}
            <div className="relative pl-6 mt-4">
              <span className="absolute left-0 -top-5 text-6xl font-serif text-purple-500/25 leading-none select-none">“</span>
              <p className="text-lg xl:text-xl font-bold text-zinc-100 leading-relaxed tracking-wide">
                差不多有 <span className="text-purple-400 font-extrabold drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">10% 的进店顾客</span>，是在 AI 上看到了过来的。有些人还会现场问 AI 产品价格相关的问题，看线下是不是和 AI 回答的一样。
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOCaseStudies.hideHeader = true;
