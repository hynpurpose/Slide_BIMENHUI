import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SearchEntryTrend() {
  // Data points mapped to SVG viewport coordinate space (1000 x 500)
  // X range: 100 to 920, Y range: 60 (1.00E+9) to 410 (0)
  
  const traditionalData = [
    { x: 80, y: 347.0, label: '07/25', value: '1.8E+8' },
    { x: 154.5, y: 336.5, label: '01/26', value: '2.1E+8' },
    { x: 229.1, y: 326.0, label: '07/26', value: '2.4E+8' },
    { x: 303.6, y: 315.5, label: '01/27', value: '2.7E+8' },
    { x: 378.2, y: 305.0, label: '07/27', value: '3.0E+8' },
    { x: 452.7, y: 294.5, label: '01/28', value: '3.3E+8' },
    { x: 527.3, y: 280.5, label: '07/28', value: '3.7E+8' },
    { x: 601.8, y: 266.5, label: '01/29', value: '4.1E+8' },
    { x: 676.4, y: 252.5, label: '07/29', value: '4.5E+8' },
    { x: 750.9, y: 235.0, label: '01/30', value: '5.0E+8' },
    { x: 825.5, y: 217.5, label: '07/30', value: '5.5E+8' },
    { x: 900.0, y: 200.0, label: '01/31', value: '6.0E+8' },
  ];

  const aiData = [
    { x: 80, y: 404.8, label: '07/25', value: '0.15E+8' },
    { x: 154.5, y: 401.3, label: '01/26', value: '0.25E+8' },
    { x: 229.1, y: 396.0, label: '07/26', value: '0.4E+8' },
    { x: 303.6, y: 389.0, label: '01/27', value: '0.6E+8' },
    { x: 378.2, y: 378.5, label: '07/27', value: '0.9E+8' },
    { x: 452.7, y: 364.5, label: '01/28', value: '1.3E+8' },
    { x: 527.3, y: 343.5, label: '07/28', value: '1.9E+8' },
    { x: 601.8, y: 315.5, label: '01/29', value: '2.7E+8' },
    { x: 676.4, y: 273.5, label: '07/29', value: '3.9E+8' },
    { x: 750.9, y: 217.5, label: '01/30', value: '5.5E+8' },
    { x: 825.5, y: 147.5, label: '07/30', value: '7.5E+8' },
    { x: 900.0, y: 53.0, label: '01/31', value: '10.2E+8' },
  ];

  // Helper to generate a smooth Catmull-Rom / Cubic Bezier path
  const getBezierPath = (points, tension = 0.15) => {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(i - 1, 0)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(i + 2, points.length - 1)];

      const cp1x = p1.x + (p2.x - p0.x) * tension;
      const cp1y = p1.y + (p2.y - p0.y) * tension;
      const cp2x = p2.x - (p3.x - p1.x) * tension;
      const cp2y = p2.y - (p3.y - p1.y) * tension;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const traditionalPath = getBezierPath(traditionalData, 0.15);
  const aiPath = getBezierPath(aiData, 0.15);

  return (
    <SlideLayout
      title="2030年，AI 搜索入口将超过传统搜索入口。"
      subtitle="我们团队为什么在2024年决定全力押注 GEO？"
    >
      <div className="grid grid-cols-12 gap-0 w-full h-full items-stretch relative">
        
        {/* Left Column: Expanded Trend Curve Chart */}
        <div className="col-span-9 pr-8 flex flex-col justify-center py-4 select-none">
          <div className="relative w-full flex flex-col items-center">
            
            {/* SVG Line Chart (Larger Container) */}
            <div className="w-full h-[640px] pt-6 pb-6 pr-6 pl-0 flex items-center justify-center relative">
              <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">
                
                {/* Y Axis Grid Lines & Labels */}
                {[
                  { y: 60, label: '1.00E+9' },
                  { y: 147.5, label: '7.50E+8' },
                  { y: 235, label: '5.00E+8' },
                  { y: 322.5, label: '2.50E+8' },
                  { y: 410, label: '0' }
                ].map((grid, idx) => (
                  <g key={idx}>
                    {/* Grid Line */}
                    <line 
                      x1="80" 
                      y1={grid.y} 
                      x2="900" 
                      y2={grid.y} 
                      stroke={grid.label === '0' ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.08)"} 
                      strokeWidth={grid.label === '0' ? "1.5" : "1"} 
                    />
                    {/* Y Label */}
                    <text 
                      x="60" 
                      y={grid.y} 
                      fill="#71717a" 
                      fontSize="18" 
                      fontFamily="MiSans, sans-serif" 
                      textAnchor="end" 
                      dominantBaseline="middle"
                    >
                      {grid.label}
                    </text>
                  </g>
                ))}

                {/* X Axis Labels */}
                {traditionalData.map((p, i) => (
                  <text
                    key={i}
                    x={p.x}
                    y="445"
                    fill="#71717a"
                    fontSize="18"
                    fontFamily="MiSans, sans-serif"
                    textAnchor="middle"
                  >
                    {p.label}
                  </text>
                ))}

                {/* Traditional Search Curve (Cool White/Gray Line) */}
                <path
                  d={traditionalPath}
                  fill="none"
                  stroke="#E4E4E7"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* AI Search Curve (Theme Blue Line) */}
                <path
                  d={aiPath}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_4px_12px_rgba(59,130,246,0.4)]"
                />

                {/* Annotation Text for Traditional Curve (+12%) */}
                <g transform="translate(400, 240)" className="text-center">
                  <text
                     x="0"
                     y="0"
                     fill="#FFFFFF"
                     fontSize="18"
                     fontWeight="bold"
                     fontFamily="MiSans, sans-serif"
                     textAnchor="middle"
                  >
                    +12%
                  </text>
                  <text
                     x="0"
                     y="18"
                     fill="#A1A1AA"
                     fontSize="18"
                     fontFamily="MiSans, sans-serif"
                     textAnchor="middle"
                  >
                    传统搜索入口
                  </text>
                </g>

                {/* Annotation Text for AI Curve (+38% - Theme Blue) */}
                <g transform="translate(720, 110)" className="text-center">
                  <text
                    x="0"
                    y="0"
                    fill="#3B82F6"
                    fontSize="24"
                    fontWeight="black"
                    fontFamily="MiSans, sans-serif"
                    textAnchor="middle"
                  >
                    +38%
                  </text>
                  <text
                    x="0"
                    y="22"
                    fill="#3B82F6"
                    fontSize="18"
                    fontWeight="bold"
                    fontFamily="MiSans, sans-serif"
                    textAnchor="middle"
                  >
                    AI 搜索入口
                  </text>
                </g>

                {/* Legend at the bottom center */}
                <g transform="translate(490, 480)">
                  {/* Legend 1: Traditional */}
                  <g transform="translate(-190, 0)">
                    <line x1="-95" y1="-8" x2="-65" y2="-8" stroke="#E4E4E7" strokeWidth="4" strokeLinecap="round" />
                    <text x="0" y="-8" fill="#E4E4E7" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                      传统搜索入口
                    </text>
                    <text x="0" y="16" fill="#71717a" fontSize="18" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                      （包括百度、小红书、B站等）
                    </text>
                  </g>
                  {/* Legend 2: AI */}
                  <g transform="translate(190, 0)">
                    <line x1="-95" y1="-8" x2="-65" y2="-8" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
                    <text x="0" y="-8" fill="#3B82F6" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                      AI 搜索入口
                    </text>
                    <text x="0" y="16" fill="#71717a" fontSize="18" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                      （包括豆包、DeepSeek、元宝等）
                    </text>
                  </g>
                </g>

              </svg>
            </div>

            {/* Source Caption */}
            <div className="mt-4 text-center">
              <span className="text-[18px] text-zinc-400 font-medium tracking-wider font-sans">
                数据来源：QuestMobile、麦肯锡、中国信通院、量子位智库等
              </span>
            </div>

          </div>
        </div>

        {/* Vertical Divider Line, centered between chart (ends at 1380 - 32 = 1348) and right column content (starts at 1380 + 12 = 1392) */}
        <div className="absolute top-4 bottom-4 w-px bg-zinc-800/80" style={{ left: '1370px' }} />

        {/* Right Column: Key Insights */}
        <div className="col-span-3 pl-3 flex flex-col justify-center gap-12 py-4">
          
          {/* Insight 1: 趋势预测 */}
          <div className="flex flex-col justify-start">
            <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-3 mb-5">
              <h3 className="text-3xl font-extrabold text-white tracking-wide">
                趋势预测 <span className="text-zinc-500 text-xl font-normal ml-3 font-mono">TREND</span>
              </h3>
              <span className="text-blue-500 text-2xl font-light">↗</span>
            </div>
            <p className="text-[22px] font-medium text-zinc-200 leading-relaxed">
              到 <span className="text-blue-400 font-extrabold">2030 年</span>，AI 搜索入口大概率会超过传统搜索入口。
            </p>
          </div>

          {/* Insight 2: 决策影响 */}
          <div className="flex flex-col justify-start">
            <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-3 mb-5">
              <h3 className="text-3xl font-extrabold text-white tracking-wide">
                决策影响 <span className="text-zinc-500 text-xl font-normal ml-3 font-mono">IMPACT</span>
              </h3>
              <span className="text-blue-500 text-2xl font-light">↗</span>
            </div>
            <p className="text-[22px] font-medium text-zinc-350 leading-relaxed">
              过去中国的搜索生态长期比较分散，一直缺少像 Google 那样的绝对入口；而 <span className="text-blue-400 font-bold">AI 搜索的崛起</span>，很可能会第一次重塑这个格局，成为用户获取信息和做决策的核心入口。
            </p>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SearchEntryTrend.hideHeader = true;
