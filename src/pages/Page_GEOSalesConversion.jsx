import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesConversion() {
  const [imgFailed, setImgFailed] = useState(false);

  // Optional local image path - will fallback to premium SVG graphics if file is not found
  const imagePath = "/images/geo-sales-conversion.png";

  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="各行业销售转化率对比 (AI 搜索渠道 vs 传统渠道)"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Middle Section: Image / Chart Area and Formula Side-by-Side */}
      <div className="w-full h-full grid grid-cols-12 gap-8 items-stretch relative z-10">

        {/* Left Column: Chart Area */}
        <div className="col-span-8 flex flex-col items-start justify-center relative z-10 min-h-0 pr-12">
          <div className="flex flex-col items-start justify-center max-w-full">
            {/* Image Title in capsule shape */}
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/25 rounded-full px-5 py-1.5 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="text-[18px] xl:text-xl font-bold text-blue-400 tracking-wider">
                ChatGPT各行业转化率数据
              </span>
            </div>
            {/* Image/SVG Container */}
            <div className="w-full flex items-center justify-start min-h-0">
              {!imgFailed ? (
                <img
                  src={imagePath}
                  alt="GEO 销售转化率对比"
                  className="max-w-full max-h-[500px] xl:max-h-[580px] object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-800/50"
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
                  <text x="152.5" y="156" fill="#9ca3af" fontSize="18" fontWeight="bold" textAnchor="middle">2.2%</text>

                  <rect x="180" y="40" width="35" height="200" rx="4" fill="#3b82f6" />
                  <text x="197.5" y="24" fill="#3b82f6" fontSize="18" fontWeight="bold" textAnchor="middle">6.8%</text>

                  {/* 3.1x Indicator */}
                  <path d="M 152.5 156 L 152.5 110 L 197.5 110 L 197.5 50" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
                  <g transform="translate(175, 103)">
                    <rect x="-30" y="-13" width="60" height="26" rx="6" fill="#3b82f6" />
                    <text x="0" y="5" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">3.1x</text>
                  </g>
                  <text x="166.25" y="270" fill="#a1a1aa" fontSize="18" fontWeight="bold" textAnchor="middle">B2B 细分领域</text>

                  {/* Group 2: SaaS 行业 (AI 5.4% vs 其它 2.4%) */}
                  <rect x="335" y="168" width="35" height="72" rx="4" fill="#1f2937" opacity="0.2" />
                  <rect x="335" y="168" width="35" height="72" rx="4" fill="#4b5563" />
                  <text x="352.5" y="150" fill="#9ca3af" fontSize="18" fontWeight="bold" textAnchor="middle">2.4%</text>

                  <rect x="380" y="80" width="35" height="160" rx="4" fill="#3b82f6" />
                  <text x="397.5" y="64" fill="#3b82f6" fontSize="18" fontWeight="bold" textAnchor="middle">5.4%</text>

                  {/* 2.25x Indicator */}
                  <path d="M 352.5 150 L 352.5 115 L 397.5 115 L 397.5 90" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
                  <g transform="translate(375, 108)">
                    <rect x="-30" y="-13" width="60" height="26" rx="6" fill="#3b82f6" />
                    <text x="0" y="5" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">2.25x</text>
                  </g>
                  <text x="366.25" y="270" fill="#a1a1aa" fontSize="18" fontWeight="bold" textAnchor="middle">SaaS 软件服务</text>

                  {/* Group 3: 零售与消费品 (AI 4.2% vs 其它 2.1%) */}
                  <rect x="535" y="177" width="35" height="63" rx="4" fill="#1f2937" opacity="0.2" />
                  <rect x="535" y="177" width="35" height="63" rx="4" fill="#4b5563" />
                  <text x="552.5" y="159" fill="#9ca3af" fontSize="18" fontWeight="bold" textAnchor="middle">2.1%</text>

                  <rect x="580" y="115" width="35" height="125" rx="4" fill="#3b82f6" />
                  <text x="597.5" y="99" fill="#3b82f6" fontSize="18" fontWeight="bold" textAnchor="middle">4.2%</text>

                  {/* 2.0x Indicator */}
                  <path d="M 552.5 159 L 552.5 125 L 597.5 125 L 597.5 120" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" />
                  <g transform="translate(575, 118)">
                    <rect x="-30" y="-13" width="60" height="26" rx="6" fill="#3b82f6" />
                    <text x="0" y="5" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">2.0x</text>
                  </g>
                  <text x="566.25" y="270" fill="#a1a1aa" fontSize="18" fontWeight="bold" textAnchor="middle">零售与消费品</text>

                  {/* Legend (centered) */}
                  <g transform="translate(210, 18)">
                    <rect x="0" y="-6" width="12" height="12" rx="2" fill="#4b5563" />
                    <text x="20" y="5" fill="#71717a" fontSize="18" fontWeight="500">其他渠道平均</text>
                    <rect x="180" y="-6" width="12" height="12" rx="2" fill="#3b82f6" />
                    <text x="200" y="5" fill="#71717a" fontSize="18" fontWeight="500">AI 搜索优化 (GEO)</text>
                  </g>
                </svg>
              )}
            </div>

            {/* Data Source Label */}
            <div className="text-center w-full mt-4 shrink-0">
              <span className="text-[18px] text-zinc-400 font-medium tracking-wider">
                数据来源：FirstPageSage
              </span>
            </div>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div className="absolute top-4 bottom-4 w-px bg-zinc-800/80" style={{ left: '1220px' }} />

        {/* Right Column: Formula Card */}
        <div className="col-span-4 flex flex-col justify-center pl-8 relative">
          <div className="border-b border-zinc-800/80 pb-3 mb-8">
            <h3 className="text-3xl font-extrabold text-white tracking-wide">
              转化率公式 <span className="text-zinc-500 text-xl font-normal ml-3 font-mono">FORMULA</span>
            </h3>
          </div>

          <div className="p-8 bg-zinc-900/40 border border-zinc-800/85 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.02)]">
            <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-blue-600/5 blur-[40px] pointer-events-none" />

            <div className="flex flex-col items-center justify-center gap-6 w-full text-white font-sans">
              <div className="bg-blue-500/10 border border-blue-500/25 px-4 py-1.5 rounded-full text-blue-400 font-extrabold text-[18px] tracking-wider self-start mb-2 font-['MiSans']">
                GEO 销售转化率计算方式
              </div>

              <div className="flex flex-col items-center justify-center w-full min-w-0">
                {/* Numerator */}
                <div className="text-center pb-5 border-b border-zinc-800 w-full leading-relaxed">
                  <div className="text-2xl font-black text-zinc-100 font-['MiSans']">
                    在官网完成特定转化行为
                  </div>
                  <div className="text-blue-400 font-semibold text-[20px] mt-2 font-['MiSans']">
                    （留资、咨询、购买）的人数
                  </div>
                </div>

                {/* Denominator */}
                <div className="text-center pt-5 w-full leading-relaxed">
                  <div className="text-2xl font-black text-zinc-350 font-['MiSans']">
                    点击 AI 回答里的推荐链接
                  </div>
                  <div className="text-zinc-400 font-semibold text-[20px] mt-2 font-['MiSans']">
                    进入官网的总访客数
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesConversion.hideHeader = true;
