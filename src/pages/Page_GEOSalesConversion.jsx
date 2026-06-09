import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesConversion() {
  const chartData = [
    { industry: "Hotels & Resorts", overall: 3.6, chatgpt: 7.0, lift: 3.4 },
    { industry: "Higher Education & College", overall: 2.8, chatgpt: 4.9, lift: 2.1 },
    { industry: "Entertainment", overall: 2.9, chatgpt: 4.7, lift: 1.8 },
    { industry: "Legal Services", overall: 3.8, chatgpt: 5.6, lift: 1.8 },
    { industry: "Manufacturing", overall: 2.1, chatgpt: 3.8, lift: 1.7 },
    { industry: "Luxury Goods", overall: 1.4, chatgpt: 1.9, lift: 0.5 },
    { industry: "Biotech", overall: 1.8, chatgpt: 2.1, lift: 0.3 },
    { industry: "Engineering", overall: 1.2, chatgpt: 1.4, lift: 0.2 },
    { industry: "Heavy Equipment", overall: 1.7, chatgpt: 1.8, lift: 0.1 },
    { industry: "Financial Services", overall: 1.8, chatgpt: 1.9, lift: 0.1 }
  ];

  const labels = {
    "Hotels & Resorts": ["Hotels &", "Resorts"],
    "Higher Education & College": ["Higher Education", "& College"],
    "Entertainment": ["Entertainment"],
    "Legal Services": ["Legal Services"],
    "Manufacturing": ["Manufacturing"],
    "Luxury Goods": ["Luxury Goods"],
    "Biotech": ["Biotech"],
    "Engineering": ["Engineering"],
    "Heavy Equipment": ["Heavy", "Equipment"],
    "Financial Services": ["Financial", "Services"]
  };

  // SVG dimensions
  const svgWidth = 1800;
  const svgHeight = 520;
  
  // Margins
  const xMarginLeft = 80;
  const plotWidth = 1680;
  const yMarginTop = 80;
  const plotHeight = 340;
  
  // Math helper
  const scale = plotHeight / 8.0; // 8.0% max

  const getRoundedTopBarPath = (x, y, w, h, rx) => {
    const radius = Math.min(rx, h);
    return `M ${x} ${y + radius} 
            Q ${x} ${y} ${x + radius} ${y} 
            L ${x + w - radius} ${y} 
            Q ${x + w} ${y} ${x + w} ${y + radius} 
            L ${x + w} ${y + h} 
            L ${x} ${y + h} Z`;
  };

  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="各行业AI转化率对比"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      <div className="w-full h-full flex flex-col items-center justify-between relative z-10 pt-4 pb-2">
        
        {/* Top Header Badge & Legend */}
        <div className="w-full flex items-center justify-between px-10 mb-2">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/25 rounded-full px-5 py-1.5 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="text-[18px] font-bold text-blue-400 tracking-wider font-['MiSans']">
              ChatGPT各行业转化率数据
            </span>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-8 text-[18px] font-medium text-zinc-400 font-['MiSans']">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-[#1E40AF]" />
              <span>整体渠道平均转化率 (Overall Conversion Rate)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-gradient-to-t from-[#1A75FF] to-[#59B2FF]" />
              <span>AI 搜索优化提升额 (ChatGPT Lift)</span>
            </div>
          </div>
        </div>

        {/* SVG Chart */}
        <div className="w-full flex-grow flex items-center justify-center min-h-0 px-4">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto max-h-[580px] overflow-visible">
            {/* Gradients */}
            <defs>
              <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#59B2FF" />
                <stop offset="100%" stopColor="#1A75FF" />
              </linearGradient>
            </defs>

            {/* Y-axis grid lines */}
            {[0, 2, 4, 6, 8].map((val) => {
              const y = yMarginTop + plotHeight - val * scale;
              return (
                <g key={val}>
                  <line 
                    x1={xMarginLeft} 
                    y1={y} 
                    x2={xMarginLeft + plotWidth} 
                    y2={y} 
                    stroke={val === 0 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"} 
                    strokeWidth={val === 0 ? "2" : "1"}
                    strokeDasharray={val === 0 ? "0" : "4 4"}
                  />
                  <text 
                    x={xMarginLeft - 15} 
                    y={y} 
                    fill="#9CA3AF" 
                    fontSize="16" 
                    fontFamily="MiSans, sans-serif" 
                    textAnchor="end" 
                    dominantBaseline="middle"
                  >
                    {val.toFixed(1)}%
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {chartData.map((d, i) => {
              const bandWidth = plotWidth / 10;
              const barWidth = 72;
              const barX = xMarginLeft + i * bandWidth + (bandWidth - barWidth) / 2;
              
              const overallHeight = d.overall * scale;
              const liftHeight = d.lift * scale;
              const totalHeight = d.chatgpt * scale;
              
              const baseLineY = yMarginTop + plotHeight;
              const overallY = baseLineY - overallHeight;
              const liftY = overallY - liftHeight;

              const xCenter = barX + barWidth / 2;
              const lines = labels[d.industry] || [d.industry];

              return (
                <g key={i} className="transition-all duration-300 hover:opacity-95">
                  {/* Bottom Bar: Overall Rate */}
                  <rect 
                    x={barX} 
                    y={overallY} 
                    width={barWidth} 
                    height={overallHeight} 
                    fill="#1E40AF" 
                  />

                  {/* Top Bar: Lift */}
                  <path 
                    d={getRoundedTopBarPath(barX, liftY, barWidth, liftHeight, 8)} 
                    fill="url(#blueGrad)" 
                  />

                  {/* Base Rate Text inside bottom bar */}
                  {overallHeight > 24 && (
                    <text 
                      x={xCenter} 
                      y={overallY + overallHeight / 2} 
                      fill="#93C5FD" 
                      fontSize="14" 
                      fontWeight="bold" 
                      textAnchor="middle" 
                      dominantBaseline="middle"
                      fontFamily="MiSans, sans-serif"
                    >
                      {d.overall.toFixed(1)}%
                    </text>
                  )}

                  {/* Stacked values on top of bar */}
                  <text x={xCenter} y={liftY - 24} textAnchor="middle" fontFamily="MiSans, sans-serif">
                    <tspan x={xCenter} dy="0" fill="#FFFFFF" fontSize="19" fontWeight="900">
                      {d.chatgpt.toFixed(1)}%
                    </tspan>
                    <tspan x={xCenter} dy="18" fill="#60A5FA" fontSize="14" fontWeight="bold">
                      +{d.lift.toFixed(1)}%
                    </tspan>
                  </text>

                  {/* X Axis Labels */}
                  <text
                    x={xCenter}
                    y={baseLineY + 25}
                    fill="#9CA3AF"
                    fontSize="15"
                    fontFamily="MiSans, sans-serif"
                    textAnchor="middle"
                  >
                    {lines.map((line, lineIdx) => (
                      <tspan key={lineIdx} x={xCenter} dy={lineIdx === 0 ? 0 : 20} fontWeight={lineIdx === 0 ? "bold" : "normal"}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Data Source & Caption */}
        <div className="w-full flex justify-between items-center px-10 mt-2">
          <span className="text-[18px] text-zinc-500 font-medium tracking-wider font-['MiSans']">
            数据来源：FirstPageSage
          </span>
          <span className="text-[18px] text-blue-400/80 font-semibold tracking-wide font-['MiSans']">
            * 调查数据证实：在各主要行业中，AI 渠道转化率（ChatGPT）均成倍提升，超越传统渠道平均水平。
          </span>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesConversion.hideHeader = true;
