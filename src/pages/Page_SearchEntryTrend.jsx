import React, { useState } from 'react';

export default function Page_SearchEntryTrend() {
  const [leftImgFailed, setLeftImgFailed] = useState(false);

  // Optional local images paths - will fallback to premium SVG graphics if files are not found
  const leftImagePath = "/images/trend-ai-vs-traditional.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-6 px-12">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with solid blue dot accent and keyword */}
      <div className="w-full flex items-center relative z-10 shrink-0 mb-20 xl:mb-24 gap-4">
        <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
        <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
          为什么我们团队决定在 2024 年全力押注 <span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">GEO</span>？
        </h2>
      </div>

      {/* Middle Section: Image and Insights Layout */}
      <div className="flex-grow flex-1 flex items-center justify-center w-full relative z-10 min-h-0 mb-6 pt-0">
        <div className="grid grid-cols-12 gap-0 w-full items-stretch border-t border-zinc-800/80 -mt-6 xl:-mt-10">

          {/* Left Column: Trend Curve Image */}
          <div className="col-span-8 pr-12 border-r border-zinc-800/80 flex flex-col justify-center pt-6 pb-16 xl:pt-8 xl:pb-20">
            <div className="relative w-full flex flex-col items-center">
              {!leftImgFailed ? (
                <img
                  src={leftImagePath}
                  alt="AI 搜索入口与传统搜索入口趋势"
                  className="w-full h-auto max-h-[540px] xl:max-h-[660px] object-contain rounded-2xl p-4 bg-zinc-900/10 border border-zinc-900/30 shadow-subtle-glow"
                  onError={() => setLeftImgFailed(true)}
                />
              ) : (
                <div className="w-full aspect-[400/240] max-h-[540px] xl:max-h-[660px] p-4 bg-zinc-900/10 border border-zinc-900/30 rounded-2xl shadow-subtle-glow flex items-center justify-center">
                  <svg viewBox="0 0 400 240" className="w-full h-full overflow-visible">
                    <defs>
                      {/* Gradients for curve line area fills */}
                      <linearGradient id="area-traditional" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4b5563" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#4b5563" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="area-ai" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Y Axis Grid Lines */}
                    <line x1="40" y1="180" x2="380" y2="180" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <line x1="40" y1="130" x2="380" y2="130" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <line x1="40" y1="80" x2="380" y2="80" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <line x1="40" y1="30" x2="380" y2="30" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

                    {/* Area paths first so lines draw on top */}
                    <path
                      d="M 40 50 C 120 60, 200 90, 280 130 C 320 150, 360 170, 380 180 L 380 200 L 40 200 Z"
                      fill="url(#area-traditional)"
                    />
                    <path
                      d="M 40 190 C 120 180, 200 150, 280 110 C 320 90, 360 50, 380 20 L 380 200 L 40 200 Z"
                      fill="url(#area-ai)"
                    />

                    {/* Curves */}
                    <path
                      d="M 40 50 C 120 60, 200 90, 280 130 C 320 150, 360 170, 380 180"
                      fill="none"
                      stroke="#4b5563"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 40 190 C 120 180, 200 150, 280 110 C 320 90, 360 50, 380 20"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Glowing Radar Intersection Point (2030) */}
                    <circle cx="280" cy="110" r="10" fill="#3b82f6" opacity="0.15" className="animate-pulse" />
                    <circle cx="280" cy="110" r="5" fill="#3b82f6" stroke="#000" strokeWidth="1.5" />
                    <circle cx="280" cy="110" r="1.5" fill="#fff" />

                    {/* Label for Intersection */}
                    <g transform="translate(245, 142)">
                      <rect x="0" y="-16" width="70" height="22" rx="4" fill="#3b82f6" />
                      <text x="35" y="0" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">2030年交汇</text>
                    </g>

                    {/* X Axis Line */}
                    <line x1="40" y1="200" x2="380" y2="200" stroke="#374151" strokeWidth="1.5" />
                    {/* Labels */}
                    <text x="40" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2024</text>
                    <text x="200" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2027</text>
                    <text x="280" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2030</text>
                    <text x="380" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2033</text>

                    {/* Legend */}
                    <g transform="translate(50, 15)">
                      <rect x="0" y="0" width="10" height="10" rx="2" fill="#4b5563" />
                      <text x="16" y="9" fill="#71717a" fontSize="10" fontWeight="500">传统搜索入口</text>
                      <rect x="100" y="0" width="10" height="10" rx="2" fill="#3b82f6" />
                      <text x="116" y="9" fill="#71717a" fontSize="10" fontWeight="500">AI 搜索入口</text>
                    </g>
                  </svg>
                </div>
              )}

              {/* Caption absolutely positioned below the image border */}
              <div className="absolute top-[calc(100%+12px)] left-0 right-0 text-center">
                <span className="text-sm xl:text-base text-zinc-400 font-medium tracking-wider">
                  数据来源：QuestMobile、麦肯锡、中国信通院、量子位智库等
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Insights (WhyAI-style Grid) */}
          <div className="col-span-4 pl-12 flex flex-col justify-between pt-12 pb-24 xl:pt-16 xl:pb-32">

          {/* Insight 1: 趋势预测 */}
          <div className="flex flex-col justify-start">
            {/* Title with diagonal arrow */}
            <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-3 mb-6 xl:mb-8">
              <h3 className="text-2xl xl:text-3xl font-extrabold text-white tracking-wide">
                趋势预测 <span className="text-zinc-500 text-lg font-normal ml-3">TREND</span>
              </h3>
              <span className="text-blue-500 text-xl font-light">↗</span>
            </div>
            {/* Description */}
            <p className="text-xl xl:text-2xl font-bold text-zinc-100 leading-relaxed" style={{ lineHeight: 1.4 }}>
              到 <span className="text-blue-400 font-extrabold">2030 年</span>，AI 搜索入口大概率会超过传统搜索入口。
            </p>
          </div>

          {/* Divider line between the two insights */}
          <div className="border-t border-zinc-800/50 my-4" />

          {/* Insight 2: 决策影响 */}
          <div className="flex flex-col justify-start">
            {/* Title with diagonal arrow */}
            <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-3 mb-6 xl:mb-8">
              <h3 className="text-2xl xl:text-3xl font-extrabold text-white tracking-wide">
                决策影响 <span className="text-zinc-500 text-lg font-normal ml-3">IMPACT</span>
              </h3>
              <span className="text-blue-500 text-xl font-light">↗</span>
            </div>
            {/* Description */}
            <p className="text-xl xl:text-2xl font-bold text-zinc-100 leading-relaxed" style={{ lineHeight: 1.4 }}>
              过去中国的搜索生态长期比较分散，一直缺少像 Google 那样的绝对入口；而 <span className="text-blue-400 font-extrabold">AI 搜索的崛起</span>，很可能会第一次重塑这个格局，成为用户获取信息和做决策的核心入口。
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SearchEntryTrend.hideHeader = true;
