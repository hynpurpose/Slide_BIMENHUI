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

      {/* Middle Section: Image / Chart Area with Data Source inside */}
      <div className="w-full flex-1 flex-grow bg-zinc-900/10 border border-zinc-900/30 rounded-2xl flex flex-col items-center justify-between p-6 pb-4 relative z-10 min-h-0 mb-4 shadow-subtle-glow backdrop-blur-sm">

        {/* Image/SVG Container */}
        <div className="flex-grow flex-1 w-full flex items-center justify-center min-h-0">
          {!imgFailed ? (
            <img
              src={imagePath}
              alt="GEO 销售转化率对比"
              className="max-w-full max-h-full object-contain rounded-xl"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <svg viewBox="0 0 800 300" className="h-full w-auto max-w-full overflow-visible">
              {/* Y Axis Grid Lines */}
              <line x1="60" y1="240" x2="740" y2="240" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="60" y1="145" x2="740" y2="145" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />
              <line x1="60" y1="50" x2="740" y2="50" stroke="#1f2937" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />

              {/* Group 1: B2B 细分领域 (AI 6.8% vs 其它 2.2%) */}
              <rect x="135" y="174" width="35" height="66" rx="4" fill="#1f2937" opacity="0.2" />
              <rect x="135" y="174" width="35" height="66" rx="4" fill="#4b5563" />
              <text x="152.5" y="162" fill="#9ca3af" fontSize="12" fontWeight="bold" textAnchor="middle">2.2%</text>

              <rect x="180" y="40" width="35" height="200" rx="4" fill="#3b82f6" />
              <text x="197.5" y="28" fill="#3b82f6" fontSize="13" fontWeight="bold" textAnchor="middle">6.8%</text>

              {/* 3.1x Indicator */}
              <path d="M 152.5 156 L 152.5 110 L 197.5 110 L 197.5 50" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
              <g transform="translate(175, 103)">
                <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#3b82f6" />
                <text x="0" y="3" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">3.1x</text>
              </g>
              <text x="166.25" y="264" fill="#71717a" fontSize="11" fontWeight="bold" textAnchor="middle">B2B 细分领域</text>

              {/* Group 2: SaaS 行业 (AI 5.4% vs 其它 2.4%) */}
              <rect x="335" y="168" width="35" height="72" rx="4" fill="#1f2937" opacity="0.2" />
              <rect x="335" y="168" width="35" height="72" rx="4" fill="#4b5563" />
              <text x="352.5" y="156" fill="#9ca3af" fontSize="12" fontWeight="bold" textAnchor="middle">2.4%</text>

              <rect x="380" y="80" width="35" height="160" rx="4" fill="#3b82f6" />
              <text x="397.5" y="68" fill="#3b82f6" fontSize="13" fontWeight="bold" textAnchor="middle">5.4%</text>

              {/* 2.25x Indicator */}
              <path d="M 352.5 150 L 352.5 115 L 397.5 115 L 397.5 90" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
              <g transform="translate(375, 108)">
                <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#3b82f6" />
                <text x="0" y="3" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">2.25x</text>
              </g>
              <text x="366.25" y="264" fill="#71717a" fontSize="11" fontWeight="bold" textAnchor="middle">SaaS 软件服务</text>

              {/* Group 3: 零售与消费品 (AI 4.2% vs 其它 2.1%) */}
              <rect x="535" y="177" width="35" height="63" rx="4" fill="#1f2937" opacity="0.2" />
              <rect x="535" y="177" width="35" height="63" rx="4" fill="#4b5563" />
              <text x="552.5" y="165" fill="#9ca3af" fontSize="12" fontWeight="bold" textAnchor="middle">2.1%</text>

              <rect x="580" y="115" width="35" height="125" rx="4" fill="#3b82f6" />
              <text x="597.5" y="103" fill="#3b82f6" fontSize="13" fontWeight="bold" textAnchor="middle">4.2%</text>

              {/* 2.0x Indicator */}
              <path d="M 552.5 159 L 552.5 125 L 597.5 125 L 597.5 120" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
              <g transform="translate(575, 118)">
                <rect x="-18" y="-9" width="36" height="18" rx="4" fill="#3b82f6" />
                <text x="0" y="3" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">2.0x</text>
              </g>
              <text x="566.25" y="264" fill="#71717a" fontSize="11" fontWeight="bold" textAnchor="middle">零售与消费品</text>

              {/* Title & Legend */}
              <text x="60" y="22" fill="#e5e7eb" fontSize="12" fontWeight="bold" textAnchor="start" letterSpacing="0.05em">
                各行业销售转化率对比 (AI 搜索渠道 vs 传统渠道)
              </text>

              <g transform="translate(500, 15)">
                <rect x="0" y="0" width="10" height="10" rx="2" fill="#4b5563" />
                <text x="16" y="9" fill="#71717a" fontSize="9" fontWeight="500">其他渠道平均</text>
                <rect x="90" y="0" width="10" height="10" rx="2" fill="#3b82f6" />
                <text x="106" y="9" fill="#71717a" fontSize="9" fontWeight="500">AI 搜索优化 (GEO)</text>
              </g>
            </svg>
          )}
        </div>

        {/* Data Source Label inside Card */}
        <div className="text-center w-full mt-2 shrink-0">
          <span className="text-sm xl:text-base text-zinc-400 font-medium tracking-wider">
            数据来源：FirstPageSage
          </span>
        </div>
      </div>

      {/* Bottom Section: Text block with short left border */}
      <div className="w-full flex flex-col relative z-10 mb-4">
        <h3 className="text-2xl xl:text-3xl font-bold text-zinc-300 leading-relaxed border-l-[3px] border-blue-500 pl-4">
          相比其他渠道，AI的转化率在各个行业里都有比较明显的优势。尤其是在一些更细分 的 <span className="text-blue-400 font-extrabold">B2B 领域</span>，增幅甚至能达到 <span className="text-blue-400 font-extrabold">整整1倍</span>。
        </h3>
      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesConversion.hideHeader = true;
