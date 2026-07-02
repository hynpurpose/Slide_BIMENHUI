import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthIntro() {
  const trendData = [
    { x: 80, y: 274, label: '1月', value: '20%' },
    { x: 208, y: 162, label: '2月', value: '60%' },
    { x: 336, y: 159.2, label: '3月', value: '61%' },
    { x: 464, y: 162, label: '4月', value: '60%' },
    { x: 592, y: 164.8, label: '5月', value: '59%' },
    { x: 720, y: 170.4, label: '6月', value: '57%' },
  ];

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

  const trendPath = getBezierPath(trendData, 0.15);

  return (
    <SlideLayout title="没做品牌调研的“坑”">
      <div className="w-full h-full flex flex-col gap-6 animate-fadeIn">
        {/* H2 Subtitle */}
        <h2
          className="text-white font-normal font-['MiSans']"
          style={{ fontSize: '48px', lineHeight: '58px' }}
        >
          不做品牌调研和产品定位，提及率做到60%很难再上升！
        </h2>

        {/* Content columns */}
        <div className="flex-1 grid grid-cols-12 gap-8 items-stretch min-h-0">
          {/* Left Column: Trend Chart */}
          <div className="col-span-9 flex flex-col justify-center pr-8 border-r border-zinc-800/80 select-none">
            <div className="w-full h-[520px] relative flex items-center justify-center">
              <svg viewBox="0 0 800 350" className="w-full h-full overflow-visible">
                {/* Y Axis Grid Lines & Labels */}
                {[
                  { y: 50, label: '100%' },
                  { y: 106, label: '80%' },
                  { y: 162, label: '60%' },
                  { y: 218, label: '40%' },
                  { y: 274, label: '20%' },
                  { y: 330, label: '0%' }
                ].map((grid, idx) => (
                  <g key={idx}>
                    {/* Grid Line */}
                    <line
                      x1="60"
                      y1={grid.y}
                      x2="740"
                      y2={grid.y}
                      stroke={grid.label === '0%' ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.08)"}
                      strokeWidth={grid.label === '0%' ? "1.5" : "1"}
                    />
                    {/* Y Label */}
                    <text
                      x="40"
                      y={grid.y}
                      fill="#71717a"
                      style={{ fontSize: '18px', fontFamily: "'MiSans', sans-serif" }}
                      textAnchor="end"
                      dominantBaseline="middle"
                    >
                      {grid.label}
                    </text>
                  </g>
                ))}

                {/* X Axis Labels */}
                {trendData.map((p, i) => (
                  <text
                    key={i}
                    x={p.x}
                    y="360"
                    fill="#71717a"
                    style={{ fontSize: '20px', fontFamily: "'MiSans', sans-serif" }}
                    textAnchor="middle"
                  >
                    {p.label}
                  </text>
                ))}

                {/* Stagnant Highlight Area (60% zone background glow) */}
                <rect
                  x="180"
                  y="130"
                  width="560"
                  height="60"
                  fill="url(#stagnantGlow)"
                  opacity="0.08"
                />

                {/* Definition of glow gradient */}
                <defs>
                  <linearGradient id="stagnantGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#004CE5" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>

                {/* Trend Curve Path */}
                <path
                  d={trendPath}
                  fill="none"
                  stroke="#004CE5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_4px_12px_rgba(0,76,229,0.3)]"
                />

                {/* Connection Dots & Data Value Labels */}
                {trendData.map((p, i) => (
                  <g key={i}>
                    {/* Outer shadow circle */}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="6"
                      fill="#004CE5"
                      opacity="0.15"
                    />
                    {/* Main circle */}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="4"
                      fill="#FFFFFF"
                      stroke="#004CE5"
                      strokeWidth="1.5"
                    />
                    {/* Value label */}
                    <text
                      x={p.x}
                      y={p.y - 14}
                      fill="#FFFFFF"
                      fontWeight="bold"
                      style={{ fontSize: '18px', fontFamily: "'Montserrat', sans-serif" }}
                      textAnchor="middle"
                    >
                      {p.value}
                    </text>
                  </g>
                ))}

                {/* Label text in chart */}
                <g transform="translate(464, 110)">
                  <text
                    x="0"
                    y="0"
                    fill="#A1A1AA"
                    style={{ fontSize: '18px', fontFamily: "'MiSans', sans-serif" }}
                    textAnchor="middle"
                  >
                    瓶颈期：数据停留在60%左右难以突破
                  </text>
                </g>
              </svg>
            </div>
            {/* Title / Description below the chart */}
            <div className="text-center" style={{ marginTop: '40px' }}>
              <span style={{ fontSize: '24px', color: '#004CE5', fontFamily: "'MiSans', sans-serif" }}>
                往年某客户提及率6个月趋势变化图
              </span>
            </div>
          </div>

          {/* Right Column: Text block */}
          <div className="col-span-3 flex flex-col justify-center pl-8 gap-6">
            <div className="flex items-baseline justify-between border-b border-zinc-800 pb-3">
              <h3
                className="text-white font-extrabold tracking-wide"
                style={{ fontSize: '36px', lineHeight: '46px', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
              >
                亲自踩过的坑
              </h3>
            </div>

            <p
              className="text-zinc-300 font-normal leading-relaxed font-['MiSans']"
              style={{ fontSize: '24px', lineHeight: '38px' }}
            >
              提及率做到 <span className="text-white font-bold">60% 左右</span> 之后，就怎么都上不去了。后面继续加内容、加资源，数据不但没有明显提升，甚至一段时间后还下滑了。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
