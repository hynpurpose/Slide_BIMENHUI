import React, { useState } from 'react';

export default function Page_GEOSalesConversion() {
  const [imgFailed, setImgFailed] = useState(false);

  // Optional local image path - will fallback to premium SVG graphics if file is not found
  const imagePath = "/images/geo-sales-conversion.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-14 px-12">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with solid blue dot accent and keyword */}
      <div className="w-full flex items-center relative z-10 shrink-0 mb-12 gap-4">
        <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
        <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </h2>
      </div>

      {/* Middle Section: Image / Chart Area and Formula Side-by-Side */}
      <div className="w-full flex-grow flex-1 grid grid-cols-12 gap-8 items-stretch relative z-10 min-h-0 mb-4">

        {/* Left Column: Chart Area */}
        <div className="col-span-8 flex flex-col items-start justify-center relative z-10 min-h-0 pr-4">
          <div className="flex flex-col items-start justify-center max-w-full">
            {/* Image Title in capsule shape */}
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-1.5 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="text-base xl:text-lg font-bold text-blue-400 tracking-wider">
                ChatGPT各行业转化率数据
              </span>
            </div>
            {/* Image/SVG Container */}
            <div className="w-full flex items-center justify-start min-h-0">
              {!imgFailed ? (
                <img
                  src={imagePath}
                  alt="GEO 销售转化率对比"
                  className="max-w-full max-h-[520px] xl:max-h-[640px] object-contain rounded-xl"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <svg viewBox="0 0 800 300" className="w-full h-auto max-h-[480px] xl:max-h-[580px] overflow-visible">
                  {/* Y Axis Grid Lines */}
                  <line x1="60" y1="240" x2="740" y2="240" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="60" y1="145" x2="740" y2="145" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="60" y1="50" x2="740" y2="50" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />

                  {/* Group 1: B2B 细分领域 (AI 6.8% vs 其它 2.2%) */}
                  <rect x="135" y="174" width="35" height="66" rx="4" fill="#1f2937" opacity="0.2" />
                  <rect x="135" y="174" width="35" height="66" rx="4" fill="#4b5563" />
                  <text x="152.5" y="160" fill="#9ca3af" fontSize="14" fontWeight="bold" textAnchor="middle">2.2%</text>

                  <rect x="180" y="40" width="35" height="200" rx="4" fill="#3b82f6" />
                  <text x="197.5" y="26" fill="#3b82f6" fontSize="15" fontWeight="bold" textAnchor="middle">6.8%</text>

                  {/* 3.1x Indicator */}
                  <path d="M 152.5 156 L 152.5 110 L 197.5 110 L 197.5 50" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
                  <g transform="translate(175, 103)">
                    <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#3b82f6" />
                    <text x="0" y="3" fill="#000" fontSize="12" fontWeight="bold" textAnchor="middle">3.1x</text>
                  </g>
                  <text x="166.25" y="264" fill="#a1a1aa" fontSize="13" fontWeight="bold" textAnchor="middle">B2B 细分领域</text>

                  {/* Group 2: SaaS 行业 (AI 5.4% vs 其它 2.4%) */}
                  <rect x="335" y="168" width="35" height="72" rx="4" fill="#1f2937" opacity="0.2" />
                  <rect x="335" y="168" width="35" height="72" rx="4" fill="#4b5563" />
                  <text x="352.5" y="154" fill="#9ca3af" fontSize="14" fontWeight="bold" textAnchor="middle">2.4%</text>

                  <rect x="380" y="80" width="35" height="160" rx="4" fill="#3b82f6" />
                  <text x="397.5" y="66" fill="#3b82f6" fontSize="15" fontWeight="bold" textAnchor="middle">5.4%</text>

                  {/* 2.25x Indicator */}
                  <path d="M 352.5 150 L 352.5 115 L 397.5 115 L 397.5 90" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
                  <g transform="translate(375, 108)">
                    <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#3b82f6" />
                    <text x="0" y="3" fill="#000" fontSize="12" fontWeight="bold" textAnchor="middle">2.25x</text>
                  </g>
                  <text x="366.25" y="264" fill="#a1a1aa" fontSize="13" fontWeight="bold" textAnchor="middle">SaaS 软件服务</text>

                  {/* Group 3: 零售与消费品 (AI 4.2% vs 其它 2.1%) */}
                  <rect x="535" y="177" width="35" height="63" rx="4" fill="#1f2937" opacity="0.2" />
                  <rect x="535" y="177" width="35" height="63" rx="4" fill="#4b5563" />
                  <text x="552.5" y="163" fill="#9ca3af" fontSize="14" fontWeight="bold" textAnchor="middle">2.1%</text>

                  <rect x="580" y="115" width="35" height="125" rx="4" fill="#3b82f6" />
                  <text x="597.5" y="101" fill="#3b82f6" fontSize="15" fontWeight="bold" textAnchor="middle">4.2%</text>

                  {/* 2.0x Indicator */}
                  <path d="M 552.5 159 L 552.5 125 L 597.5 125 L 597.5 120" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
                  <g transform="translate(575, 118)">
                    <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#3b82f6" />
                    <text x="0" y="3" fill="#000" fontSize="12" fontWeight="bold" textAnchor="middle">2.0x</text>
                  </g>
                  <text x="566.25" y="264" fill="#a1a1aa" fontSize="13" fontWeight="bold" textAnchor="middle">零售与消费品</text>

                  {/* Title & Legend */}
                  <text x="60" y="24" fill="#e5e7eb" fontSize="14" fontWeight="bold" textAnchor="start" letterSpacing="0.05em">
                    各行业销售转化率对比 (AI 搜索渠道 vs 传统渠道)
                  </text>

                  <g transform="translate(480, 15)">
                    <rect x="0" y="0" width="10" height="10" rx="2" fill="#4b5563" />
                    <text x="16" y="9" fill="#71717a" fontSize="11" fontWeight="500">其他渠道平均</text>
                    <rect x="100" y="0" width="10" height="10" rx="2" fill="#3b82f6" />
                    <text x="116" y="9" fill="#71717a" fontSize="11" fontWeight="500">AI 搜索优化 (GEO)</text>
                  </g>
                </svg>
              )}
            </div>

            {/* Data Source Label */}
            <div className="text-center w-full mt-4 shrink-0">
              <span className="text-sm xl:text-base text-zinc-400 font-medium tracking-wider">
                数据来源：FirstPageSage
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Formula Card */}
        <div className="col-span-4 flex flex-col justify-center relative">
          <div className="flex items-center justify-center gap-4 xl:gap-6 w-full text-white font-sans">
            {/* Left Part: 转化率 label */}
            <div className="text-3xl xl:text-4xl font-black text-blue-400 tracking-wide shrink-0">
              转化率
            </div>

            {/* Equals sign */}
            <div className="text-3xl xl:text-4xl font-light text-zinc-500 shrink-0">
              =
            </div>

            {/* Fraction wrapper */}
            <div className="flex flex-col items-center justify-center flex-1 min-w-0">
              {/* Numerator */}
              <div className="text-center pb-4 border-b border-zinc-800 w-fit mx-auto px-4 leading-relaxed">
                <div className="text-xl xl:text-2xl font-bold text-zinc-100">
                  在官网完成特定转化行为
                </div>
                <div className="text-blue-400 font-semibold text-base xl:text-lg mt-1">
                  （留资、咨询、购买）的人数
                </div>
              </div>
              {/* Denominator */}
              <div className="text-center pt-4 w-fit mx-auto px-4 leading-relaxed">
                <div className="text-xl xl:text-2xl font-bold text-zinc-300">
                  点击 ChatGPT 回答里的推荐链接
                </div>
                <div className="text-zinc-400 font-semibold text-base xl:text-lg mt-1">
                  进入官网的总访客数
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesConversion.hideHeader = true;
