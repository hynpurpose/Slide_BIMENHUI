import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesConversionTrend() {
  // Data points mapped to SVG viewport coordinate space (1000 x 500)
  // X range: 80 to 900, Y range: 60 (2500) to 410 (0)
  // y = 410 - 0.14 * value

  const googleData = [
    { x: 80, y: 298.0, label: '2015', value: '800' },
    { x: 182.5, y: 256.0, label: '2017', value: '1100' },
    { x: 285.0, y: 214.0, label: '2019', value: '1400' },
    { x: 387.5, y: 158.0, label: '2021', value: '1800' },
    { x: 490.0, y: 137.0, label: '2023', value: '1950' },
    { x: 592.5, y: 123.0, label: '2024', value: '2050' },
    { x: 695.0, y: 113.2, label: '2025', value: '2120' },
    { x: 797.5, y: 102.0, label: '2026(现)', value: '2200' },
    { x: 900.0, y: 81.0, label: '2028(预)', value: '2350' },
  ];

  const metaData = [
    { x: 80, y: 382.0, label: '2015', value: '200' },
    { x: 182.5, y: 347.0, label: '2017', value: '450' },
    { x: 285.0, y: 319.0, label: '2019', value: '650' },
    { x: 387.5, y: 298.0, label: '2021', value: '800' },
    { x: 490.0, y: 291.0, label: '2023', value: '850' },
    { x: 592.5, y: 286.8, label: '2024', value: '880' },
    { x: 695.0, y: 284.0, label: '2025', value: '900' },
    { x: 797.5, y: 281.2, label: '2026(现)', value: '920' },
    { x: 900.0, y: 277.0, label: '2028(预)', value: '950' },
  ];

  const aiData = [
    { x: 80, y: 410.0, label: '2015', value: '0' },
    { x: 182.5, y: 410.0, label: '2017', value: '0' },
    { x: 285.0, y: 410.0, label: '2019', value: '0' },
    { x: 387.5, y: 410.0, label: '2021', value: '0' },
    { x: 490.0, y: 409.7, label: '2023', value: '2' },
    { x: 592.5, y: 407.2, label: '2024', value: '20' },
    { x: 695.0, y: 394.6, label: '2025', value: '110' },
    { x: 797.5, y: 379.2, label: '2026(现)', value: '220' },
    { x: 900.0, y: 347.0, label: '2028(预)', value: '450' },
  ];

  // Helper to generate a straight polyline path string
  const getPolylinePath = (points, startIdx, endIdx) => {
    let d = `M ${points[startIdx].x} ${points[startIdx].y}`;
    for (let i = startIdx + 1; i <= endIdx; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    return d;
  };

  const googlePathSolid = getPolylinePath(googleData, 0, 7);
  const googlePathDashed = getPolylinePath(googleData, 7, 8);

  const metaPathSolid = getPolylinePath(metaData, 0, 7);
  const metaPathDashed = getPolylinePath(metaData, 7, 8);

  const aiPathSolid = getPolylinePath(aiData, 0, 7);
  const aiPathDashed = getPolylinePath(aiData, 7, 8);

  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="海外各渠道获客趋势"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      <div className="w-full h-full flex flex-col items-center justify-center relative select-none pt-4 pb-2">

        {/* SVG Line Chart (Full Width Container) */}
        <div className="w-[1400px] h-[580px] flex items-center justify-center relative">
          <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">

            <g transform="translate(-25, -45) scale(1.06)">
              {/* Y Axis Grid Lines & Labels */}
              {[
                { y: 60, label: '2500' },
                { y: 130, label: '2000' },
                { y: 200, label: '1500' },
                { y: 270, label: '1000' },
                { y: 340, label: '500' },
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
                (百万次)
              </text>

              {/* X Axis Labels */}
              {googleData.map((p, i) => (
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

              {/* Google Search Curve */}
              <path
                d={googlePathSolid}
                fill="none"
                stroke="#E4E4E7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d={googlePathDashed}
                fill="none"
                stroke="#E4E4E7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 4"
              />

              {/* Facebook/Meta Curve */}
              <path
                d={metaPathSolid}
                fill="none"
                stroke="#01C096"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d={metaPathDashed}
                fill="none"
                stroke="#01C096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 4"
              />

              {/* AI Platform Curve */}
              <path
                d={aiPathSolid}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                className="drop-shadow-[0_2px_6px_rgba(59,130,246,0.3)]"
              />
              <path
                d={aiPathDashed}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 4"
                className="drop-shadow-[0_2px_6px_rgba(59,130,246,0.3)]"
              />

              {/* End Values Labels */}
              <text x="915" y="86" fill="#E4E4E7" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif">2,350</text>
              <text x="915" y="282" fill="#01C096" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif">950</text>
              <text x="915" y="352" fill="#3B82F6" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif">450</text>

            </g>

            {/* Legends at the bottom center (Without secondary description text) */}
            <g transform="translate(490, 480)">
              {/* Legend 1: Google */}
              <g transform="translate(-250, 0)">
                <line x1="-95" y1="0" x2="-65" y2="0" stroke="#E4E4E7" strokeWidth="1.5" strokeLinecap="round" />
                <text x="0" y="0" fill="#E4E4E7" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                  Google 搜索
                </text>
              </g>
              {/* Legend 2: Facebook */}
              <g transform="translate(0, 0)">
                <line x1="-95" y1="0" x2="-65" y2="0" stroke="#01C096" strokeWidth="1.5" strokeLinecap="round" />
                <text x="0" y="0" fill="#01C096" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                  Facebook广告
                </text>
              </g>
              {/* Legend 3: AI */}
              <g transform="translate(250, 0)">
                <line x1="-95" y1="0" x2="-65" y2="0" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                <text x="0" y="0" fill="#3B82F6" fontSize="18" fontWeight="bold" fontFamily="MiSans, sans-serif" textAnchor="middle" dominantBaseline="middle">
                  AI 平台
                </text>
              </g>
            </g>

          </svg>
        </div>

        {/* Source Caption */}
        <div className="mt-6 text-center">
          <span className="text-[18px] text-zinc-500 font-medium tracking-wider font-sans">
            数据来源：Gartner、Semrush、HubSpot & Salesforce、Ahrefs
          </span>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesConversionTrend.hideHeader = true;
