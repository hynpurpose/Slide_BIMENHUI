import React, { useState } from 'react';

export default function Page_SearchEntryTrend() {
  const [leftImgFailed, setLeftImgFailed] = useState(false);
  const [rightImgFailed, setRightImgFailed] = useState(false);

  // Optional local images paths - will fallback to premium SVG graphics if files are not found
  const leftImagePath = "/images/trend-ai-vs-traditional.png";
  const rightImagePath = "/images/trend-consumer-trust.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-6 px-20">

      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[150px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title */}
      <div className="w-full flex flex-col items-start relative z-10 shrink-0 mb-4">
        <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
          为什么我们团队决定在 2024 年全力押注 GEO？
        </h2>
      </div>

      {/* Middle Section: Two Columns Layout */}
      <div className="grid grid-cols-2 gap-10 w-full flex-grow items-stretch relative z-10 min-h-0 mb-2">

        {/* Left Column */}
        <div className="flex flex-col h-full transition-all duration-300">

          {/* Image Slot 1 */}
          <div className="w-full h-[460px] xl:h-[540px] flex items-center justify-center p-2">
            {!leftImgFailed ? (
              <img
                src={leftImagePath}
                alt="AI 搜索入口与传统搜索入口趋势"
                className="h-full w-auto max-w-full object-contain"
                onError={() => setLeftImgFailed(true)}
              />
            ) : (
              <svg viewBox="0 0 400 240" className="h-full w-auto max-w-full overflow-visible">
                {/* Y Axis Grid Lines */}
                <line x1="40" y1="180" x2="380" y2="180" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="130" x2="380" y2="130" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="80" x2="380" y2="80" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="30" x2="380" y2="30" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />

                {/* Curves */}
                <path
                  d="M 40 50 C 120 60, 200 90, 280 130 C 320 150, 360 170, 380 180"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 190 C 120 180, 200 150, 280 110 C 320 90, 360 50, 380 20"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Intersection Point (2029) */}
                <circle cx="280" cy="110" r="6" fill="#06b6d4" stroke="#000" strokeWidth="1.5" />

                {/* Label for Intersection */}
                <g transform="translate(245, 140)">
                  <rect x="0" y="-16" width="70" height="22" rx="4" fill="#06b6d4" />
                  <text x="35" y="0" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">2029年交汇</text>
                </g>

                {/* X Axis Line */}
                <line x1="40" y1="200" x2="380" y2="200" stroke="#374151" strokeWidth="1.5" />
                {/* Labels */}
                <text x="40" y="218" fill="#9ca3af" fontSize="10" textAnchor="middle">2024</text>
                <text x="200" y="218" fill="#9ca3af" fontSize="10" textAnchor="middle">2027</text>
                <text x="280" y="218" fill="#9ca3af" fontSize="10" textAnchor="middle">2029</text>
                <text x="380" y="218" fill="#9ca3af" fontSize="10" textAnchor="middle">2031</text>

                {/* Legend */}
                <g transform="translate(50, 15)">
                  <rect x="0" y="0" width="10" height="10" rx="2" fill="#4f46e5" />
                  <text x="16" y="9" fill="#9ca3af" fontSize="10">传统搜索入口</text>
                  <rect x="100" y="0" width="10" height="10" rx="2" fill="#06b6d4" />
                  <text x="116" y="9" fill="#9ca3af" fontSize="10">AI 搜索入口</text>
                </g>
              </svg>
            )}
          </div>

          {/* Conclusion 1 */}
          <div className="mt-2 flex flex-col justify-center flex-grow border-t border-zinc-900 pt-2">
            <h3 className="text-xl xl:text-2xl font-bold text-zinc-100 leading-relaxed">
              到 2029 年，AI 搜索入口将超过传统搜索入口。
            </h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full transition-all duration-300">

          {/* Image Slot 2 */}
          <div className="w-full h-[460px] xl:h-[540px] flex items-center justify-center p-2">
            {!rightImgFailed ? (
              <img
                src={rightImagePath}
                alt="消费者对 AI 的信任度"
                className="h-full w-auto max-w-full object-contain"
                onError={() => setRightImgFailed(true)}
              />
            ) : (
              <svg viewBox="0 0 400 240" className="h-full w-auto max-w-full overflow-visible">
                {/* Y Axis Grid Lines */}
                <line x1="40" y1="180" x2="380" y2="180" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="110" x2="380" y2="110" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="40" y1="40" x2="380" y2="40" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" />

                {/* Bar 1: Traditional Search Trust (38%) */}
                <rect x="90" y="40" width="50" height="140" rx="6" fill="#1f2937" opacity="0.4" />
                <rect x="90" y="127" width="50" height="53" rx="6" fill="#4f46e5" />
                <text x="115" y="115" fill="#4f46e5" fontSize="12" fontWeight="bold" textAnchor="middle">38%</text>
                <text x="115" y="202" fill="#9ca3af" fontSize="10" textAnchor="middle">传统搜索引擎</text>

                {/* Bar 2: AI Search Trust (76%) */}
                <rect x="260" y="40" width="50" height="140" rx="6" fill="#1f2937" opacity="0.4" />
                <rect x="260" y="74" width="50" height="106" rx="6" fill="#06b6d4" />
                <text x="285" y="60" fill="#06b6d4" fontSize="14" fontWeight="bold" textAnchor="middle">76%</text>
                <text x="285" y="202" fill="#9ca3af" fontSize="10" textAnchor="middle">AI 搜索与回答</text>

                {/* Title */}
                <text x="200" y="20" fill="#e5e7eb" fontSize="11" fontWeight="semibold" textAnchor="middle">消费者对生成信息的信任度对比</text>
              </svg>
            )}
          </div>

          {/* Conclusion 2 */}
          <div className="mt-2 flex flex-col justify-center flex-grow border-t border-zinc-900 pt-2">
            <h3 className="text-xl xl:text-2xl font-bold text-white leading-relaxed">
              消费者更信任AI给出的答案，进不了AI的推荐的品牌，很难进入用户的购买选择。
            </h3>
          </div>
        </div>

      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SearchEntryTrend.hideHeader = true;
