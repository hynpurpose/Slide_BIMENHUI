import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthCrossCompare() {
  // Grid conversion settings (shifted originY up to 125 to move grid upwards)
  const originX = 530;
  const originY = 125;
  const uxX = 80;
  const uxY = 40;
  const uyX = -80;
  const uyY = 40;

  // Grid lines data (7x7 lines forming a 6x6 cell grid)
  const gridLines = [];
  for (let i = 0; i <= 6; i++) {
    // Lines parallel to Y-axis (varying gy from 0 to 6)
    gridLines.push({
      x1: originX + i * uxX,
      y1: originY + i * uxY,
      x2: originX + i * uxX + 6 * uyX,
      y2: originY + i * uxY + 6 * uyY
    });
    // Lines parallel to X-axis (varying gx from 0 to 6)
    gridLines.push({
      x1: originX + i * uyX,
      y1: originY + i * uyY,
      x2: originX + i * uyX + 6 * uxX,
      y2: originY + i * uyY + 6 * uxY
    });
  }

  // Cell centers coordinates helper
  const getCellCenter = (gx, gy) => {
    return {
      x: originX + (gx + 0.5) * uxX + (gy + 0.5) * uyX,
      y: originY + (gx + 0.5) * uxY + (gy + 0.5) * uyY
    };
  };

  // 3D Flat colored cells on the grid (ordered by gx + gy ascending for correct SVG drawing order)
  const data = [
    {
      label: "壁纸电视口碑",
      value: "12.9%",
      gx: 1,
      gy: 0,
      color: "#C27854", // Muted desaturated orange
      textColor: "text-orange-400",
      cardYCenter: 313 // Card index 2: top 263px, center is 313px
    },
    {
      label: "电视推荐",
      value: "81.2%",
      gx: 0,
      gy: 3,
      color: "#FFFFFF", // White highlight
      textColor: "text-white",
      cardYCenter: 65, // Card index 0: top 15px, center is 65px
      isTarget: true
    },
    {
      label: "超薄电视推荐",
      value: "53.6%",
      gx: 2,
      gy: 3,
      color: "#5E82B8", // Muted desaturated blue
      textColor: "text-blue-400",
      cardYCenter: 189 // Card index 1: top 139px, center is 189px
    },
    {
      label: "艺术电视评测",
      value: "9.7%",
      gx: 4,
      gy: 2,
      color: "#8B7BB8", // Muted desaturated purple
      textColor: "text-purple-400",
      cardYCenter: 437 // Card index 3: top 387px, center is 437px
    },
    {
      label: "最好的客厅大屏",
      value: "4.8%",
      gx: 5,
      gy: 5,
      color: "#B55E5E", // Muted desaturated red
      textColor: "text-red-400",
      cardYCenter: 561 // Card index 4: top 511px, center is 561px
    }
  ];

  // Grid axis labels positions (placed along the edges of the grid cells)
  const yAxisLabels = [
    { text: "口碑", gx: 0, gy: 0 },
    { text: "选购", gx: 0, gy: 1 },
    { text: "评测", gx: 0, gy: 2 },
    { text: "推荐", gx: 0, gy: 3 },
    { text: "价格", gx: 0, gy: 4 },
    { text: "最好的", gx: 0, gy: 5 }
  ];

  const xAxisLabels = [
    { text: "电视", gx: 0, gy: 6 },
    { text: "壁纸电视", gx: 1, gy: 6 },
    { text: "超薄电视", gx: 2, gy: 6 },
    { text: "贴墙电视", gx: 3, gy: 6 },
    { text: "艺术电视", gx: 4, gy: 6 },
    { text: "客厅大屏", gx: 5, gy: 6 }
  ];

  // Sort data for right hand card rendering order (descending value weight)
  const sortedCards = [
    data.find(d => d.value === "81.2%"),
    data.find(d => d.value === "53.6%"),
    data.find(d => d.value === "12.9%"),
    data.find(d => d.value === "9.7%"),
    data.find(d => d.value === "4.8%")
  ];

  return (
    <SlideLayout
      title={
        <div className="flex items-center gap-6">
          <span className="w-[72px] h-[72px] rounded-full bg-teal-900/60 text-teal-300 border border-teal-850 text-[42px] font-bold font-['Montserrat'] flex items-center justify-center shrink-0">
            3
          </span>
          <span>交叉比对锁定高频优化词</span>
        </div>
      }
    >
      {/* ── 顶部说明结论 ── */}
      <div className="absolute top-[0px] left-0 w-full select-none z-10">
        <p className="text-zinc-350 font-normal font-['MiSans'] leading-relaxed" style={{ fontSize: '32px', lineHeight: '46px' }}>
          将纵轴（修饰词/意图）与横轴（产品/品类词）交叉组合，得出高频词条对 AI 推荐决策的权重影响力。
        </p>
      </div>

      {/* ── 3D 柱状图画布区 (抵到最底部 bottom, 高度 650px) ── */}
      <div 
        className="absolute w-full select-none animate-fadeIn"
        style={{ top: '145px', height: '650px' }}
      >
        
        {/* ==================== SVG 绘制网格、扁平色块、连线 ==================== */}
        <svg className="absolute inset-0 w-[1300px] h-full pointer-events-none z-10 overflow-visible">
          {/* 1. 绘制网格背景线 */}
          <g>
            {gridLines.map((line, idx) => (
              <line
                key={idx}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
              />
            ))}
          </g>

          {/* 2. 绘制扁平的色块格子 (铺满整个格子: dx=40, dy=20) */}
          {data.map((col, idx) => {
            const center = getCellCenter(col.gx, col.gy);
            const dx = 40; 
            const dy = 20; 

            const p1 = `${center.x},${center.y - dy}`;
            const p2 = `${center.x - dx},${center.y}`;
            const p3 = `${center.x},${center.y + dy}`;
            const p4 = `${center.x + dx},${center.y}`;

            return (
              <g key={idx}>
                {/* 扁平填充色块 (菱形格子填充) */}
                <polygon
                  points={`${p1} ${p2} ${p3} ${p4}`}
                  fill={col.color}
                  fillOpacity="0.45"
                  stroke={col.color}
                  strokeWidth="2.5"
                />
                {/* 中心亮点标记 */}
                <circle
                  cx={center.x}
                  cy={center.y}
                  r="5"
                  fill="#FFFFFF"
                  className="shadow-lg"
                />
              </g>
            );
          })}

          {/* 3. 绘制引出的连线 (从扁平格中心引到右侧卡片边缘 1320px 处) */}
          {data.map((col, idx) => {
            const center = getCellCenter(col.gx, col.gy);
            const cardX = 1320;
            const cardY = col.cardYCenter;

            // Draw a clean horizontal path: start -> control -> end
            const pathD = `M ${center.x} ${center.y} L ${center.x + 80} ${center.y} L ${cardX - 100} ${cardY} L ${cardX} ${cardY}`;

            return (
              <g key={idx}>
                {/* 阴影/虚线轨道 */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={col.color}
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="opacity-80"
                />
                {/* 与卡片连接点小圆圈 */}
                <circle
                  cx={cardX}
                  cy={cardY}
                  r="4.5"
                  fill={col.color}
                />
              </g>
            );
          })}
        </svg>

        {/* ==================== 坐标轴标签 (绝对定位 HTML) ==================== */}
        {/* 纵轴 (修饰词/意图) - 沿左上斜边缘 */}
        {yAxisLabels.map((lbl, idx) => {
          const x = originX + lbl.gx * uxX + (lbl.gy + 0.5) * uyX - 100;
          const y = originY + lbl.gx * uxY + (lbl.gy + 0.5) * uyY - 14;
          return (
            <span
              key={idx}
              className="absolute text-zinc-500 font-bold text-[20px] font-['MiSans'] leading-none text-right w-[80px] select-none"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              {lbl.text}
            </span>
          );
        })}

        {/* 横轴 (产品/品类词) - 沿右下斜边缘 */}
        {xAxisLabels.map((lbl, idx) => {
          const x = originX + (lbl.gx + 0.5) * uxX + lbl.gy * uyX - 50;
          const y = originY + (lbl.gx + 0.5) * uxY + lbl.gy * uyY + 28;
          return (
            <span
              key={idx}
              className="absolute text-zinc-555 font-bold text-[20px] font-['MiSans'] leading-none text-center w-[120px] select-none"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              {lbl.text}
            </span>
          );
        })}

        {/* ==================== 右侧：垂直绝对叠放的说明卡片 (left: 1320px) ==================== */}
        {sortedCards.map((col, idx) => (
          <div 
            key={idx}
            className={`absolute flex items-center gap-5 border ${col.isTarget ? 'border-white bg-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.18)]' : 'border-zinc-800/85 bg-zinc-950/90'} px-5 py-3 rounded-2xl h-[100px] select-none`}
            style={{ left: '1320px', top: `${col.cardYCenter - 50}px`, width: '480px' }}
          >
            {/* Value Percentage */}
            <span className={`font-['Montserrat'] font-black tracking-tighter leading-none text-center ${col.textColor} w-[140px] shrink-0 text-[52px]`}>
              {col.value}
            </span>
            
            {/* Text info - Only show title, no subtitle explanation */}
            <div className="flex flex-col justify-center">
              <span className="text-[23px] font-bold text-white leading-none font-['MiSans']">
                {col.label}
              </span>
            </div>
          </div>
        ))}

      </div>
    </SlideLayout>
  );
}

Page_SkyworthCrossCompare.hideHeader = true;
