import React, { useState } from 'react';

export default function Page_SearchEntryTrend() {
  const [leftImgFailed, setLeftImgFailed] = useState(false);
  const [rightImgFailed, setRightImgFailed] = useState(false);

  // Optional local images paths - will fallback to premium SVG graphics if files are not found
  const leftImagePath = "/images/trend-ai-vs-traditional.png";
  const rightImagePath = "/images/trend-consumer-trust.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-6 px-20">
      
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with glowing dot accent and gradient keyword */}
      <div className="w-full flex items-center relative z-10 shrink-0 mb-4 gap-4">
        <div className="w-2.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
        <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
          为什么我们团队决定在 2024 年全力押注 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 font-extrabold drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]">GEO</span>？
        </h2>
      </div>

      {/* Middle Section: Two Columns Layout */}
      <div className="grid grid-cols-2 gap-12 w-full flex-grow items-stretch relative z-10 min-h-0 mb-2">
        
        {/* Left Column */}
        <div className="flex flex-col h-full transition-all duration-300">
          
          {/* Image Slot 1 */}
          <div className="w-full h-[460px] xl:h-[540px] flex items-center justify-center p-2 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-300">
            {!leftImgFailed ? (
              <img 
                src={leftImagePath} 
                alt="AI 搜索入口与传统搜索入口趋势" 
                className="h-full w-auto max-w-full object-contain"
                onError={() => setLeftImgFailed(true)}
              />
            ) : (
              <svg viewBox="0 0 400 240" className="h-full w-auto max-w-full overflow-visible">
                <defs>
                  {/* Gradients for curve line area fills */}
                  <linearGradient id="area-traditional" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="area-ai" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
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
                  stroke="#4f46e5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 190 C 120 180, 200 150, 280 110 C 320 90, 360 50, 380 20"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Glowing Radar Intersection Point (2029) */}
                <circle cx="280" cy="110" r="10" fill="#06b6d4" opacity="0.15" className="animate-pulse" />
                <circle cx="280" cy="110" r="5" fill="#06b6d4" stroke="#000" strokeWidth="1.5" />
                <circle cx="280" cy="110" r="1.5" fill="#fff" />
                
                {/* Label for Intersection */}
                <g transform="translate(245, 142)">
                  <rect x="0" y="-16" width="70" height="22" rx="4" fill="#06b6d4" />
                  <text x="35" y="0" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">2029年交汇</text>
                </g>

                {/* X Axis Line */}
                <line x1="40" y1="200" x2="380" y2="200" stroke="#374151" strokeWidth="1.5" />
                {/* Labels */}
                <text x="40" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2024</text>
                <text x="200" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2027</text>
                <text x="280" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2029</text>
                <text x="380" y="218" fill="#71717a" fontSize="10" textAnchor="middle">2031</text>

                {/* Legend */}
                <g transform="translate(50, 15)">
                  <rect x="0" y="0" width="10" height="10" rx="2" fill="#4f46e5" />
                  <text x="16" y="9" fill="#71717a" fontSize="10" fontWeight="500">传统搜索入口</text>
                  <rect x="100" y="0" width="10" height="10" rx="2" fill="#06b6d4" />
                  <text x="116" y="9" fill="#71717a" fontSize="10" fontWeight="500">AI 搜索入口</text>
                </g>
              </svg>
            )}
          </div>
          
          {/* Conclusion 1 */}
          <div className="mt-4 flex flex-col justify-center flex-grow border-l-2 border-blue-500 pl-4 py-1">
            <h3 className="text-xl xl:text-2xl font-bold text-zinc-300 leading-relaxed">
              到 <span className="text-blue-400 font-extrabold">2029 年</span>，AI 搜索入口将超过传统搜索入口。
            </h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full transition-all duration-300">
          
          {/* Image Slot 2 */}
          <div className="w-full h-[460px] xl:h-[540px] flex items-center justify-center p-2 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-300">
            {!rightImgFailed ? (
              <img 
                src={rightImagePath} 
                alt="消费者对 AI 的信任度" 
                className="h-full w-auto max-w-full object-contain"
                onError={() => setRightImgFailed(true)}
              />
            ) : (
              <svg viewBox="0 0 400 240" className="h-full w-auto max-w-full overflow-visible">
                <defs>
                  {/* Gradients for Bars */}
                  <linearGradient id="bar-traditional" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                  <linearGradient id="bar-ai" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>

                {/* Y Axis Grid Lines */}
                <line x1="40" y1="180" x2="380" y2="180" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <line x1="40" y1="110" x2="380" y2="110" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <line x1="40" y1="40" x2="380" y2="40" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

                {/* Bar 1: Traditional Search Trust (38%) */}
                <rect x="95" y="40" width="40" height="140" rx="4" fill="#1f2937" opacity="0.2" />
                <rect x="95" y="127" width="40" height="53" rx="4" fill="url(#bar-traditional)" />
                <text x="115" y="115" fill="#818cf8" fontSize="13" fontWeight="bold" textAnchor="middle">38%</text>
                <text x="115" y="202" fill="#71717a" fontSize="10" fontWeight="500" textAnchor="middle">传统搜索引擎</text>

                {/* Bar 2: AI Search Trust (76%) */}
                <rect x="265" y="40" width="40" height="140" rx="4" fill="#1f2937" opacity="0.2" />
                <rect x="265" y="74" width="40" height="106" rx="4" fill="url(#bar-ai)" />
                <text x="285" y="60" fill="#22d3ee" fontSize="15" fontWeight="bold" textAnchor="middle">76%</text>
                <text x="285" y="202" fill="#71717a" fontSize="10" fontWeight="500" textAnchor="middle">AI 搜索与回答</text>

                {/* Title */}
                <text x="200" y="20" fill="#e5e7eb" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">
                  消费者对生成信息的信任度对比
                </text>
              </svg>
            )}
          </div>
          
          {/* Conclusion 2 */}
          <div className="mt-4 flex flex-col justify-center flex-grow border-l-2 border-cyan-400 pl-4 py-1">
            <h3 className="text-xl xl:text-2xl font-bold text-zinc-300 leading-relaxed">
              消费者<span className="text-cyan-400 font-extrabold">更信任AI</span>给出的答案，进不了AI的推荐的品牌，很难进入用户的购买选择。
            </h3>
          </div>
        </div>

      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SearchEntryTrend.hideHeader = true;
