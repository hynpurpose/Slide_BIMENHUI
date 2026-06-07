import React, { useState } from 'react';

export default function Page_GEOTestDifference() {
  const [imgFailed, setImgFailed] = useState(false);

  // Optional local image path - will fallback to premium SVG graphics if file is not found
  const imagePath = "/images/geo-test-difference.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-10 px-12">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with solid blue dot accent */}
      {/* Top Section: Title & Middle warning text container */}
      <div className="w-full flex flex-col relative z-10 shrink-0 mb-4">
        {/* Title with solid blue dot accent */}
        <div className="w-full flex items-center gap-4 mb-8">
          <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
            问题一：为什么服务商的测试结果跟你实测差异很大？
          </h2>
        </div>

        {/* Middle Section: Large Warning Text */}
        <div className="w-full flex items-center justify-center py-4 my-2">
          <p className="text-4xl xl:text-5xl font-extrabold text-zinc-100 leading-snug text-center">
            因为 <span className="text-red-500 font-black text-6xl xl:text-7xl mx-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">90%</span> 的服务商都在<span className="text-red-500 font-black text-5xl xl:text-6xl mx-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">数据造假</span>！
          </p>
        </div>
      </div>

      {/* Bottom Section: Image Slot - Larger size */}
      <div className="w-full flex-1 flex-grow flex items-center justify-center p-6 bg-zinc-900/10 border border-zinc-900/30 rounded-2xl shadow-subtle-glow backdrop-blur-sm relative z-10 min-h-0 mb-2">
        {!imgFailed ? (
          <img
            src={imagePath}
            alt="服务商数据造假对比"
            className="max-w-full max-h-full object-contain rounded-xl"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <svg viewBox="0 0 800 240" className="h-full w-auto max-w-full overflow-visible">
            {/* Grid background */}
            <line x1="60" y1="180" x2="740" y2="180" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="60" y1="110" x2="740" y2="110" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="60" y1="40" x2="740" y2="40" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

            {/* Left: Fake Report Data (95%) */}
            <rect x="200" y="45" width="60" height="145" rx="4" fill="#ef4444" opacity="0.25" />
            <rect x="200" y="45" width="60" height="145" rx="4" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
            <text x="230" y="32" fill="#ef4444" fontSize="14" fontWeight="bold" textAnchor="middle">95% (虚假汇报)</text>
            <text x="230" y="206" fill="#71717a" fontSize="11" fontWeight="bold" textAnchor="middle">服务商测试报告</text>

            {/* Right: Real Verified Data (8%) */}
            <rect x="540" y="178" width="60" height="12" rx="2" fill="#3b82f6" />
            <text x="570" y="166" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">8% (真实转化)</text>
            <text x="570" y="206" fill="#71717a" fontSize="11" fontWeight="bold" textAnchor="middle">客户独立核验</text>

            {/* Red Alert arrow indicating the drop */}
            <path d="M 270 110 L 530 170" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 4" />
            <path d="M 530 170 L 520 162 M 530 170 L 522 176" fill="none" stroke="#ef4444" strokeWidth="2.5" />

            {/* Badge for drop */}
            <g transform="translate(400, 125)">
              <rect x="-45" y="-10" width="90" height="20" rx="4" fill="#ef4444" />
              <text x="0" y="4" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">缩水率超过 90%</text>
            </g>

            {/* Warning text */}
            <text x="400" y="232" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.8">
              ⚠️ 服务商利用高频模拟机刷、关键词堆砌产生虚假的GEO收录报告，实则无任何销售转化效果
            </text>
          </svg>
        )}
      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOTestDifference.hideHeader = true;
