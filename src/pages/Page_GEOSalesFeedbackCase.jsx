import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesFeedbackCase() {
  const [imgFailed, setImgFailed] = useState(false);

  const cols = 10;
  const rows = 10;
  const cellSize = 73;
  const gridWidth = cols * cellSize; // 730px
  const gridHeight = rows * cellSize; // 730px
  const yOffset = 22.5;

  const cells = [];
  const cx = (cols - 1) / 2;
  const cy = (rows - 1) / 2;
  const maxD = Math.sqrt(cx * cx + cy * cy);

  const colorCenter = [0, 76, 255];
  const colorEdge = [0, 18, 90];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dc = Math.sqrt(Math.pow(c - cx, 2) + Math.pow(r - cy, 2));
      const factor = dc / maxD;
      const x = c * cellSize;
      const y = r * cellSize;

      const rx = 36.5 - 31.5 * Math.pow(factor, 0.8);

      let fill = '';
      if (c >= 8) {
        fill = '#00C8FE';
      } else {
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

  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="线下销售反馈"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-start relative z-10">
        <div className="relative w-full h-[775px]">

          {/* SVG for Grid cells & overlay grid lines (No connector lines) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1840 775" fill="none">
            {/* Grid cells */}
            {cells.map(cell => (
              <rect
                key={cell.id}
                x={cell.x}
                y={cell.y + yOffset}
                width={cellSize}
                height={cellSize}
                rx={cell.rx}
                ry={cell.rx}
                fill={cell.fill}
              />
            ))}

            {/* Grid lines overlay */}
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

          {/* Right Image Container */}
          <div className="absolute left-[980px] w-[800px] h-[700px] top-[37.5px] z-20 flex items-center justify-center">
            {!imgFailed ? (
              <img
                src="/images/geo-sales-feedback.png"
                alt="销售反馈案例截图"
                className="w-full h-full object-contain rounded-3xl border border-zinc-800/80 shadow-2xl bg-zinc-950/20"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/10 border border-dashed border-zinc-850 rounded-3xl p-8 gap-4 select-none">
                <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                <span className="text-zinc-550 font-bold text-2xl font-['MiSans']">
                  [ 销售反馈案例截图位 ]
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesFeedbackCase.hideHeader = true;
