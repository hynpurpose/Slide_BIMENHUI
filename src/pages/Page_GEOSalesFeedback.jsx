import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesFeedback() {
  const cols = 10;
  const rows = 10;
  const cellSize = 73;
  const gap = 0; // 1:1 Restoration: gapless grid to form the star shape at intersections
  const gridWidth = cols * cellSize; // 730px
  const gridHeight = rows * cellSize; // 730px
  const yOffset = 22.5; // (775 - 730) / 2 = 22.5px to leave more than 20px margin from top and bottom edges

  // Generate cells with progressive corner radius and interpolated color based on distance from center
  const cells = [];
  const cx = (cols - 1) / 2; // 4.5
  const cy = (rows - 1) / 2; // 4.5
  const maxD = Math.sqrt(cx * cx + cy * cy); // 6.364

  const colorCenter = [0, 76, 255]; // Bright blue #004cff
  const colorEdge = [0, 18, 90];    // Deep navy blue #00125a

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dc = Math.sqrt(Math.pow(c - cx, 2) + Math.pow(r - cy, 2));
      const factor = dc / maxD;
      const x = c * cellSize;
      const y = r * cellSize;

      // Interpolate corner radius: center is circle (36.5px), edges are slightly rounded (5px)
      const rx = 36.5 - 31.5 * Math.pow(factor, 0.8);

      let fill = '';
      if (c >= 8) {
        // Rightmost 2 columns (20% of cells) are soft neon cyan-blue representing the "20% from AI"
        fill = '#00C8FE';
      } else {
        // Remaining 80% are blue gradient cells
        // Use Math.pow(factor, 1.2) to give the center glowing cluster more prominence
        const colorFactor = Math.pow(factor, 1.2);
        const red = Math.round(colorCenter[0] + colorFactor * (colorEdge[0] - colorCenter[0]));
        const green = Math.round(colorCenter[1] + colorFactor * (colorEdge[1] - colorCenter[1]));
        const blue = Math.round(colorCenter[2] + colorFactor * (colorEdge[2] - colorCenter[2]));
        fill = `rgb(${red}, ${green}, ${blue})`;
      }

      cells.push({
        id: `${r}-${c}`,
        x,
        y,
        rx,
        fill,
        row: r,
        col: c
      });
    }
  }

  // Y-coordinates of connecting lines (centered vertically inside cells)
  // Center is at 387.5px (4.5 * 73 + 22.5 = 387.5px)
  // Row 1 center: 1.5 * 73 + 22.5 = 132px (shifted up by 1 cell from row 2)
  // Row 5 center: 5.5 * 73 + 22.5 = 424px (shifted up by 2 cells from row 7)
  const line1Y = 132;
  const line2Y = 424;

  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="线下销售反馈"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container centered vertically inside SlideLayout's 775px safe zone */}
      <div className="w-full h-full flex items-center justify-start relative z-10">

        {/* Layout wrapper occupying the entire 775px safe zone height */}
        <div className="relative w-full h-[775px]">

          {/* SVG for Grid cells, overlay grid lines, and connector lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1840 775" fill="none">
            {/* Grid cells */}
            {cells.map(cell => (
              <rect
                key={cell.id}
                x={cell.x}
                y={cell.y + yOffset} // centered vertically
                width={cellSize}
                height={cellSize}
                rx={cell.rx}
                ry={cell.rx}
                fill={cell.fill}
              />
            ))}

            {/* Grid lines overlay (drawn on top of cells) */}
            {/* Horizontal lines */}
            {Array.from({ length: rows + 1 }).map((_, r) => (
              <line
                key={`h-${r}`}
                x1={0}
                y1={r * cellSize + yOffset}
                x2={gridWidth}
                y2={r * cellSize + yOffset}
                stroke="#000000"
                strokeWidth="1.5"
              />
            ))}
            {/* Vertical lines */}
            {Array.from({ length: cols + 1 }).map((_, c) => (
              <line
                key={`v-${c}`}
                x1={c * cellSize}
                y1={yOffset}
                x2={c * cellSize}
                y2={gridHeight + yOffset}
                stroke="#000000"
                strokeWidth="1.5"
              />
            ))}

            {/* Connector Line 1 (Top - connects row 1, col 9 center to right text block) */}
            <line
              x1={693.5}
              y1={line1Y}
              x2={980}
              y2={line1Y}
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1.5"
            />
            <circle cx={693.5} cy={line1Y} r="4.5" fill="#ffffff" className="shadow-lg" />

            {/* Connector Line 2 (Bottom - connects row 5, col 8 center to right text block) */}
            <line
              x1={620.5}
              y1={line2Y}
              x2={980}
              y2={line2Y}
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1.5"
            />
            <circle cx={620.5} cy={line2Y} r="4.5" fill="#ffffff" className="shadow-lg" />
          </svg>

          {/* Left: Giant text overlay over the bottom-left grid cells */}
          <div className="absolute left-[20px] bottom-[20px] flex flex-col pointer-events-none select-none">
            <span className="text-[140px] font-black text-white font-['Montserrat'] leading-[0.85] tracking-tight">
              20%
            </span>
            <span className="text-[46px] font-extrabold text-white font-['Montserrat'] tracking-wider mt-2 uppercase">
              From AI
            </span>
          </div>

          {/* Right Text Block 1 (来店前) - Title center aligned at line1Y */}
          <div
            className="absolute left-[980px] w-[800px] flex flex-col gap-5 font-['MiSans']"
            style={{ top: `${line1Y - 24}px` }}
          >
            <h4 className="text-[42px] font-bold text-white tracking-wide">
              来店前
            </h4>
            <p className="text-[32px] font-medium text-zinc-300 leading-[1.5]">
              大概有 <span className="text-[#004CE5] font-extrabold drop-shadow-[0_0_6px_rgba(0,76,229,0.15)]">20% 左右</span> 的到店客户，在来店之前已经先问过 AI、查过相关信息。
            </p>
          </div>

          {/* Right Text Block 2 (来店后) - Title center aligned at line2Y */}
          <div
            className="absolute left-[980px] w-[800px] flex flex-col gap-5 font-['MiSans']"
            style={{ top: `${line2Y - 24}px` }}
          >
            <h4 className="text-[42px] font-bold text-white tracking-wide">
              来店后
            </h4>
            <p className="text-[32px] font-medium text-zinc-300 leading-[1.5]">
              顾客到了门店之后，会当着销售直接用 <span className="text-[#004CE5] font-extrabold drop-shadow-[0_0_6px_rgba(0,76,229,0.15)]">豆包等AI搜索</span>：这款产品最低价多少钱、评价怎么样、有没有坑等问题。
            </p>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesFeedback.hideHeader = true;
