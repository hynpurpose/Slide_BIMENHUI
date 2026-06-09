import React from 'react';

export default function Page_SearchEntryWhyAI() {
  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-6 pl-10 pr-10">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title (Aligned pixel-perfectly with Page_SearchEntryTrend) and Subtitle */}
      <div className="w-full flex flex-col relative z-10 shrink-0 mb-8">
        <div className="w-full flex items-center gap-4">
          <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
            为什么我们团队决定在 2024 年全力押注 <span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">GEO</span>？
          </h2>
        </div>
        <h3 className="w-full text-center text-4xl xl:text-5xl font-medium text-blue-400/90 tracking-wide mt-24 xl:mt-28 font-['AlimamaShuHeiTi']">
          为什么 AI 越来越深入人心？
        </h3>
      </div>

      {/* Middle Section: Centered vertically to add breathing room from header and footer */}
      <div className="flex-grow flex-1 flex items-start w-full relative z-10 py-6">
        <div className="grid grid-cols-2 gap-0 w-full border-t border-zinc-800/80 mt-12 xl:mt-16">

          {/* Left Column: Convenience (spread out with pr-16, tucked in with pl-6 xl:pl-10) */}
          <div className="flex flex-col justify-start py-10 pl-6 xl:pl-10 pr-16 border-r border-zinc-800/80">
            {/* Abstract Dot Pattern Icon */}
            <div className="w-16 h-16 mb-8 relative">
              <img src="/icons/convenience.svg" alt="Convenience" className="w-full h-full object-contain" />
            </div>

            {/* Title with diagonal arrow */}
            <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-4 mb-6">
              <h3 className="text-3xl font-extrabold text-white tracking-wide">
                便利性 <span className="text-zinc-500 text-xl font-normal ml-3">CONVENIENCE</span>
              </h3>
              <span className="text-blue-500 text-2xl font-light">↗</span>
            </div>

            {/* Description */}
            <p className="text-2xl xl:text-3xl text-zinc-200 leading-relaxed font-medium">
              过去用户需要自己搜索、筛选、对比，现在只要问一句，AI 就能直接 <span className="text-blue-400 font-extrabold">整理信息</span> 并 <span className="text-blue-400 font-extrabold">给出建议</span>。
            </p>
          </div>

          {/* Right Column: Trust (spread out with pl-16, tucked in with pr-6 xl:pr-10) */}
          <div className="flex flex-col justify-start py-10 pl-16 pr-6 xl:pr-10">
            {/* Abstract Halftone Arc Pattern Icon */}
            <div className="w-16 h-16 mb-8 relative">
              <img src="/icons/trust.svg" alt="Trust" className="w-full h-full object-contain" />
            </div>

            {/* Title with diagonal arrow */}
            <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-4 mb-6">
              <h3 className="text-3xl font-extrabold text-white tracking-wide">
                信任感 <span className="text-zinc-500 text-xl font-normal ml-3">TRUST</span>
              </h3>
              <span className="text-blue-500 text-2xl font-light">↗</span>
            </div>

            {/* Description */}
            <p className="text-2xl xl:text-3xl text-zinc-200 leading-relaxed font-medium">
              用户天然觉得 AI <span className="text-blue-400 font-extrabold">更客观</span>。它不像广告和品牌自夸，更像一个专业的 <span className="text-blue-400 font-extrabold">第三方助手</span>，因此很容易被当成决策参考。
            </p>
          </div>

        </div>
      </div>


    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SearchEntryWhyAI.hideHeader = true;
