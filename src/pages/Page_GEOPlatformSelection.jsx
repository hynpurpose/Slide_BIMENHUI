import React, { useState, useEffect } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOPlatformSelection() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Exact data from user
  const data = [
    { name: '豆包', value: 34493, delta: 10107 },
    { name: '千问', value: 16567, delta: 12633 },
    { name: 'DeepSeek', value: 12717, delta: 63 },
    { name: '元宝', value: 5735, delta: 820 },
    { name: '蚂蚁阿福', value: 2715, delta: 140 },
    { name: '豆包爱学', value: 1434, delta: 144 },
    { name: '即梦AI', value: 1352, delta: 507 },
    { name: 'Lovekey', value: 1034, delta: 478 },
    { name: 'Kimi', value: 834, delta: 57 },
    { name: '文心一言', value: 6, delta: -2 }
  ];

  const maxVal = 42000;
  const chartWidth = 1000;
  const chartHeight = 520;
  const paddingLeft = 140;
  const paddingRight = 220;
  const paddingTop = 45;
  const paddingBottom = 25;
  
  const graphWidth = chartWidth - paddingLeft - paddingRight;
  const graphHeight = chartHeight - paddingTop - paddingBottom;
  
  const rowHeight = graphHeight / data.length;

  return (
    <SlideLayout
      title="GEO 应该怎么选平台？"
      subtitle="各平台用户量对比"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container within Safe Zone (775px height): Two Columns */}
      <div className="w-full h-full grid grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Chart Area (Span 8) */}
        <div className="col-span-8 bg-zinc-900/10 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col justify-between h-full">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
            <h3 className="text-[24px] font-black text-white tracking-wide font-['MiSans']">
              2026年3月月活跃用户规模 TOP10 AI原生App
            </h3>
          </div>

          <div className="w-full flex-grow flex items-center justify-center relative mt-6 overflow-hidden">
            <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible select-none">
              <defs>
                {/* Shadow filters for bars */}
                <filter id="barGlow" x="-5%" y="-15%" width="115%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Table Column Headers */}
              <text x="15" y="20" fill="rgba(255, 255, 255, 0.45)" fontSize="15" fontWeight="bold">排名</text>
              <text x="45" y="20" fill="rgba(255, 255, 255, 0.45)" fontSize="15" fontWeight="bold">App</text>
              <text x={paddingLeft} y="20" fill="rgba(255, 255, 255, 0.45)" fontSize="15" fontWeight="bold">用户规模趋势</text>
              <text x="810" y="20" fill="rgba(255, 255, 255, 0.45)" fontSize="15" fontWeight="bold" textAnchor="end">月活跃用户数</text>
              <text x="945" y="20" fill="rgba(255, 255, 255, 0.45)" fontSize="15" fontWeight="bold" textAnchor="end">一季度增量</text>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                const x = paddingLeft + ratio * graphWidth;
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={paddingTop - 10}
                    x2={x}
                    y2={paddingTop + graphHeight}
                    stroke="rgba(255, 255, 255, 0.04)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}

              {/* Rendering rows */}
              {data.map((item, index) => {
                const y = paddingTop + index * rowHeight + (rowHeight - 22) / 2;
                const barWidth = Math.max(2, (item.value / maxVal) * graphWidth);
                const isTop3 = index < 3;
                
                return (
                  <g key={index} className="group">
                    {/* Rank label */}
                    <text
                      x="15"
                      y={y + 17}
                      fill={isTop3 ? '#00C8FE' : 'rgba(255, 255, 255, 0.3)'}
                      fontSize="17"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {index + 1}
                    </text>

                    {/* App Name */}
                    <text
                      x="45"
                      y={y + 17}
                      fill={isTop3 ? '#ffffff' : 'rgba(255, 255, 255, 0.75)'}
                      fontSize="17"
                      fontWeight={isTop3 ? 'bold' : 'normal'}
                      fontFamily="sans-serif"
                    >
                      {item.name}
                    </text>

                    {/* Bar background track */}
                    <rect
                      x={paddingLeft}
                      y={y}
                      width={graphWidth}
                      height="22"
                      fill="rgba(255,255,255,0.02)"
                    />

                    {/* Value Bar */}
                    <rect
                      x={paddingLeft}
                      y={y}
                      width={active ? barWidth : 0}
                      height="22"
                      fill="#004CE5"
                      style={{ transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />

                    {/* Value Tag aligned at column */}
                    <text
                      x="810"
                      y={y + 17}
                      fill="#ffffff"
                      fontSize="17"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="end"
                      style={{
                        opacity: active ? 1 : 0,
                        transition: 'opacity 0.8s ease-out 0.4s'
                      }}
                    >
                      {item.value.toLocaleString()}
                    </text>

                    {/* Growth Indicator aligned at column */}
                    <text
                      x="945"
                      y={y + 17}
                      fill={item.delta >= 0 ? '#10B981' : '#F43F5E'}
                      fontSize="16"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="end"
                      style={{
                        opacity: active ? 1 : 0,
                        transition: 'opacity 0.8s ease-out 0.6s'
                      }}
                    >
                      {item.delta >= 0 ? `+${item.delta.toLocaleString()}` : item.delta.toLocaleString()}
                    </text>
                  </g>
                );
              })}

              {/* Baseline axis */}
              <line
                x1={paddingLeft}
                y1={paddingTop - 10}
                x2={paddingLeft}
                y2={paddingTop + graphHeight}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* Right Column: Clean & Simple Conclusions (Span 4) */}
        <div className="col-span-4 bg-zinc-900/10 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col justify-start gap-12 h-full">
          <div className="flex items-center gap-4 border-b border-zinc-800/80 pb-5">
            <div className="w-2 h-7 bg-[#004CE5]" />
            <h3 className="text-[28px] font-black text-white tracking-wide font-['MiSans']">
              核心建议
            </h3>
          </div>

          <div className="flex flex-col gap-12 mt-4">
            {/* 90% Brands Recommendation */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#004CE5]" />
                <span className="text-[22px] font-black text-white">90% 的普通品牌</span>
              </div>
              <p className="text-[20px] xl:text-[21px] font-medium text-zinc-300 leading-relaxed pl-6 font-['MiSans']">
                建议聚焦资源，<span className="text-white font-extrabold bg-[#004CE5]/15 border border-[#004CE5]/30 px-3 py-1.5 rounded-xl">只选择用户量最高的前三个平台</span>（豆包、DeepSeek、通义千问）进行重点优化。
              </p>
            </div>

            {/* 10% Brands Recommendation */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-zinc-500" />
                <span className="text-[22px] font-black text-zinc-300">其余 10% 预算充裕品牌</span>
              </div>
              <p className="text-[20px] xl:text-[21px] font-medium text-zinc-400 leading-relaxed pl-6 font-['MiSans']">
                可以在核心三个平台的基础上，把 <span className="text-zinc-200 font-bold">腾讯元宝、Kimi、文心一言</span> 也同步纳入优化范围。
              </p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOPlatformSelection.hideHeader = true;
