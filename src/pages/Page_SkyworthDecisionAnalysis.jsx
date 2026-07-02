import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthDecisionAnalysis() {
  const chartData = [
    { label: "价格高，不值", value: 60, highlight: true },
    { label: "开机广告影响体验", value: 15, highlight: false },
    { label: "系统卡顿不够流畅", value: 12, highlight: false },
    { label: "高端品牌认知弱", value: 8, highlight: false },
    { label: "售后安装维护顾虑", value: 5, highlight: false }
  ];

  // SVG dimensions
  const svgWidth = 900;
  const svgHeight = 440;

  // Margins
  const xMarginLeft = 80;
  const plotWidth = 760;
  const yMarginTop = 20;
  const plotHeight = 320;

  // Math helper
  const scale = plotHeight / 80; // Max Y is 80%

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
    <SlideLayout title="创维壁纸电视用户决策分析">
      <div className="w-full h-full relative animate-fadeIn select-none">
        
        {/* ==================== 左侧：标题与柱状图 ==================== */}
        <div className="absolute left-0 top-0 w-[1000px] h-full flex flex-col justify-start py-2 pr-8 border-r border-zinc-800/80">
          
          {/* H2 Subtitle */}
          <h2
            className="text-white font-normal font-['MiSans'] mb-12"
            style={{ fontSize: '42px', lineHeight: '52px' }}
          >
            用户觉得<span className="text-blue-500 font-bold">“价格高，不值”</span>是流失的首要原因
          </h2>

          {/* Chart area */}
          <div className="w-full flex flex-col items-center mt-14">
            <span className="w-full text-center text-[24px] text-zinc-400 font-['MiSans'] font-bold tracking-wide mb-3 block">
              流失原因分布 (用户不买创维原因占比)
            </span>
            <div className="w-full flex items-center justify-center">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto overflow-visible">
                <defs>
                  {/* Highlight Blue Gradient */}
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#59B2FF" />
                    <stop offset="100%" stopColor="#1A75FF" />
                  </linearGradient>
                </defs>

                {/* Y Axis Grid Lines */}
                {[0, 20, 40, 60, 80].map((val) => {
                  const y = yMarginTop + plotHeight - val * scale;
                  return (
                    <g key={val}>
                      <line
                        x1={xMarginLeft}
                        y1={y}
                        x2={xMarginLeft + plotWidth}
                        y2={y}
                        stroke={val === 0 ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth={val === 0 ? "1.5" : "1"}
                        strokeDasharray={val === 0 ? "0" : "4 4"}
                      />
                      <text
                        x={xMarginLeft - 15}
                        y={y}
                        fill="#71717a"
                        fontSize="18"
                        fontFamily="MiSans, sans-serif"
                        fontWeight="bold"
                        textAnchor="end"
                        dominantBaseline="middle"
                      >
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Bars */}
                {chartData.map((d, i) => {
                  const bandWidth = plotWidth / 5;
                  const barWidth = 60;
                  const barX = xMarginLeft + i * bandWidth + (bandWidth - barWidth) / 2;

                  const barHeight = d.value * scale;
                  const barY = yMarginTop + plotHeight - barHeight;
                  const xCenter = barX + barWidth / 2;

                  return (
                    <g key={i} className="transition-all duration-300 hover:opacity-90">
                      {/* Bar Path */}
                      <path
                        d={getRoundedTopBarPath(barX, barY, barWidth, barHeight, 6)}
                        fill={d.highlight ? "url(#blueGrad)" : "rgba(255, 255, 255, 0.15)"}
                      />

                      {/* Percentage Value on Top of Bar */}
                      <text
                        x={xCenter}
                        y={barY - 12}
                        fill={d.highlight ? "#60A5FA" : "#A1A1AA"}
                        fontSize="20"
                        fontWeight="900"
                        textAnchor="middle"
                        fontFamily="MiSans, sans-serif"
                      >
                        {d.value}%
                      </text>

                      {/* X Axis Labels */}
                      <text
                        x={xCenter}
                        y={yMarginTop + plotHeight + 32}
                        fill={d.highlight ? "#FFFFFF" : "#71717a"}
                        fontSize="18"
                        fontFamily="MiSans, sans-serif"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {d.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ==================== 右侧：真实图片位（向上抵满 content top） ==================== */}
        <div className="absolute left-[1080px] top-0 w-[760px] h-[795px] bg-[#09090b]/40 border border-zinc-800 rounded-3xl flex flex-col justify-between p-8 shadow-inner">
          <span className="text-[14px] text-zinc-500 font-mono font-bold tracking-wider block mb-4">PRODUCT DISPLAY</span>
          
          {/* Real Image Slot with Fallback */}
          <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden rounded-2xl bg-black/40 border border-zinc-800/80">
            <img 
              src="/images/wallpaper-tv.png" 
              alt="创维壁纸电视" 
              className="max-w-[90%] max-h-[90%] object-contain transition-all duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder (when the user hasn't dropped the image file yet) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0c0f] hidden">
              <svg className="w-12 h-12 text-zinc-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[14px] text-zinc-500 font-mono">请将电视图片放入以下路径：</span>
              <span className="text-[13px] text-zinc-400 font-mono mt-1 select-all font-semibold">
                public\images\wallpaper-tv.png
              </span>
            </div>
          </div>

          {/* Product Caption */}
          <div className="border-t border-zinc-900 pt-6 text-center">
            <h3 className="text-[22px] font-bold text-white mb-2 font-['MiSans']">创维壁纸电视</h3>
            <p className="text-[18px] text-zinc-400 font-normal leading-relaxed">
              纤薄无缝贴墙设计，艺术与科技的极致平衡
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthDecisionAnalysis.hideHeader = true;
