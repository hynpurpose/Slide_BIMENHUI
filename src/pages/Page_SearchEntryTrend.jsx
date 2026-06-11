import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SearchEntryTrend() {
  // Data points mapped to SVG viewport coordinate space (1000 x 500)
  // X range: 100 to 920, Y range: 60 (1.00E+9) to 410 (0)

  const traditionalData = [
    { x: 80, y: 230.0, label: '2024', value: '36.0' },
    { x: 216.7, y: 226.0, label: '2025', value: '36.8' },
    { x: 353.3, y: 222.0, label: '2026', value: '37.6' },
    { x: 490.0, y: 212.0, label: '2027', value: '39.6' },
    { x: 626.7, y: 204.0, label: '2028', value: '41.2' },
    { x: 763.3, y: 196.0, label: '2029', value: '42.8' },
    { x: 900.0, y: 188.0, label: '2030', value: '44.4' },
  ];

  const aiData = [
    { x: 80, y: 360.0, label: '2024', value: '10.0' },
    { x: 216.7, y: 320.0, label: '2025', value: '18.0' },
    { x: 353.3, y: 270.0, label: '2026', value: '28.0' },
    { x: 490.0, y: 240.0, label: '2027', value: '34.0' },
    { x: 626.7, y: 220.0, label: '2028', value: '38.0' },
    { x: 763.3, y: 170.0, label: '2029', value: '48.0' },
    { x: 900.0, y: 110.0, label: '2030', value: '60.0' },
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
      title="我们团队为什么在2024年决定全力押注 GEO？"
      subtitle="互联网信息搜索入口趋势图"
    >
      <div className="grid grid-cols-12 gap-0 w-full h-full items-stretch relative">

        {/* Left Column: Expanded Trend Curve Chart */}
        <div className="col-span-9 pr-8 flex flex-col justify-center py-4 select-none">
          <div className="relative w-full flex flex-col items-center">

            {/* SVG Line Chart (Larger Container) */}
            <div className="w-full h-[640px] pt-6 pb-6 pr-6 pl-0 flex items-center justify-center relative">
              <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">

                <g transform="translate(-25, -45) scale(1.06)">
                  {/* Y Axis Grid Lines & Labels */}
                  {[
                    { y: 60, label: '70' },
                    { y: 147.5, label: '52.5' },
                    { y: 235, label: '35' },
                    { y: 322.5, label: '17.5' },
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

                  {/* Unit label above the vertical axis */}
                  <text
                    x="60"
                    y="45"
                    fill="#71717a"
                    fontSize="16"
                    fontFamily="MiSans, sans-serif"
                    textAnchor="end"
                  >
                    (亿次/日)
                  </text>

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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* AI Search Curve (Theme Blue Line) */}
                  <path
                    d={aiPath}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_4px_12px_rgba(59,130,246,0.4)]"
                  />

                  {/* Annotation Text for Traditional Curve (+11%) */}
                  <g transform="translate(300, 160)" className="text-center">
                    <text
                      x="0"
                      y="0"
                      fill="#FFFFFF"
                      fontSize="24"
                      fontWeight="bold"
                      fontFamily="MiSans, sans-serif"
                      textAnchor="middle"
                    >
                      +11%
                    </text>
                    <text
                      x="0"
                      y="22"
                      fill="#A1A1AA"
                      fontSize="18"
                      fontFamily="MiSans, sans-serif"
                      textAnchor="middle"
                    >
                      传统搜索入口
                    </text>
                  </g>

                  {/* Annotation Text for AI Curve (+500% - Theme Blue) */}
                  <g transform="translate(750, 95)" className="text-center">
                    <text
                      x="0"
                      y="0"
                      fill="#3B82F6"
                      fontSize="24"
                      fontWeight="black"
                      fontFamily="MiSans, sans-serif"
                      textAnchor="middle"
                    >
                      +473%
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
                </g>

                {/* Legend at the bottom center */}
                <g transform="translate(490, 480)">
                  {/* Legend 1: Traditional */}
                  <g transform="translate(-190, 0)">
                    <line x1="-95" y1="-8" x2="-65" y2="-8" stroke="#E4E4E7" strokeWidth="1.5" strokeLinecap="round" />
                    <text x="0" y="-8" fill="#E4E4E7" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                      传统搜索入口
                    </text>
                    <text x="0" y="16" fill="#71717a" fontSize="18" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                      （包括百度、小红书、B站等）
                    </text>
                  </g>
                  {/* Legend 2: AI */}
                  <g transform="translate(190, 0)">
                    <line x1="-95" y1="-8" x2="-65" y2="-8" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
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
              到 <span className="text-blue-400 font-extrabold">2028 年</span>，AI 搜索入口大概率会超过传统搜索入口。
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
