import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ContentQualityValue() {
  const timeTicks = [
    { label: '发布期', x: 100 },
    { label: '15天', x: 300 },
    { label: '1个月', x: 500 },
    { label: '3个月', x: 800 },
    { label: '6个月', x: 1200 },
    { label: '12个月+', x: 1600 }
  ];

  return (
    <SlideLayout title="优质内容的“保质期”">
      {/* ── 主排版区 (高度拉伸至 795px，顶部和底部完全抵齐页边距) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-between"
        style={{ top: '0px', height: '795px' }}
      >

        {/* ==================== 上半部分：高保真 Gantt/Timeline 视觉图板 (高度 645px, 纯黑底色，白色框线) ==================== */}
        <div className="w-full h-[645px] bg-black border border-white/15 rounded-[28px] p-6 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* 背景光斑微弱点缀 */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-teal-500/2 blur-[120px] left-[400px] top-[220px] pointer-events-none" />

          {/* 1. 顶部时间刻度 */}
          <div className="absolute left-0 right-0 top-[25px] h-[30px] px-8 flex pointer-events-none z-10">
            {timeTicks.map((tick, i) => (
              <span
                key={i}
                className="text-[18px] font-semibold text-zinc-555 font-sans"
                style={{
                  position: 'absolute',
                  left: `${tick.x}px`,
                  transform: 'translateX(-50%)'
                }}
              >
                {tick.label}
              </span>
            ))}
          </div>

          {/* 2. 纵向“AI文章失效平均时间点”指示线 (白色虚线，字号放大) */}
          <div
            className="absolute top-[65px] bottom-[35px] w-[1px] border-l border-dashed border-white/45 z-10"
            style={{ left: '300px' }}
          >
            {/* 顶部指示小三角 */}
            <div className="absolute -top-1 -left-[4px] w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-t-[7px] border-t-white/70" />
            <span className="absolute top-[8px] left-[8px] text-[18px] font-black text-white bg-zinc-950/90 border border-white/15 px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
              AI文章失效平均时间点
            </span>
          </div>

          {/* 2b. 纵向“人工文章失效平均时间点”指示线 (高亮白色虚线，字号放大，用更亮的白色) */}
          <div
            className="absolute top-[65px] bottom-[35px] w-[1px] border-l border-dashed border-white z-10 shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            style={{ left: '1400px' }}
          >
            {/* 顶部指示小三角 */}
            <div className="absolute -top-1 -left-[4px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-white" />
            <span className="absolute top-[8px] right-[8px] text-[18px] font-black text-black bg-white px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
              人工文章失效平均时间点
            </span>
          </div>

          {/* 3. Staggered Gantt Bars (完全错落的瀑布流/蹉跎感排版，AI文章使用接近白色的浅灰色) */}
          <div className="absolute inset-x-8 top-[80px] bottom-[25px] relative z-20">

            {/* Row 1: AI 创作文章 (起于 120px, 止于 300px, 极其接近白色的浅灰色) */}
            <div
              className="absolute h-[42px] bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center px-4 shadow-md"
              style={{ left: '120px', top: '15px', width: '180px' }}
            >
              <span className="text-[16px] font-extrabold text-zinc-950 font-['MiSans'] whitespace-nowrap">
                AI 创作文章
              </span>
            </div>

            {/* Row 2: 人工创作文章 (起于 200px, 止于 1650px, 渐变色) */}
            <div
              className="absolute h-[42px] rounded-full flex items-center justify-start px-6 shadow-lg"
              style={{
                left: '200px',
                top: '73px',
                width: '1450px',
                background: 'linear-gradient(to right, #004CE5 0%, #0D9488 100%)'
              }}
            >
              <span className="text-[16px] font-bold text-white font-['MiSans'] whitespace-nowrap">
                人工创作文章
              </span>
            </div>

            {/* Row 3: AI 创作文章 (起于 320px, 止于 500px, 极其接近白色的浅灰色) */}
            <div
              className="absolute h-[42px] bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center px-4 shadow-md"
              style={{ left: '320px', top: '131px', width: '180px' }}
            >
              <span className="text-[16px] font-extrabold text-zinc-950 font-['MiSans'] whitespace-nowrap">
                AI 创作文章
              </span>
            </div>

            {/* Row 4: 人工创作文章 (起于 80px, 止于 1100px, 渐变色) */}
            <div
              className="absolute h-[42px] rounded-full flex items-center justify-start px-6 shadow-lg"
              style={{
                left: '80px',
                top: '189px',
                width: '1020px',
                background: 'linear-gradient(to right, #004CE5 0%, #0D9488 100%)'
              }}
            >
              <span className="text-[16px] font-bold text-white font-['MiSans'] whitespace-nowrap">
                人工创作文章
              </span>
            </div>

            {/* Row 5: AI 创作文章 (起于 520px, 止于 700px, 极其接近白色的浅灰色) */}
            <div
              className="absolute h-[42px] bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center px-4 shadow-md"
              style={{ left: '520px', top: '247px', width: '180px' }}
            >
              <span className="text-[16px] font-extrabold text-zinc-950 font-['MiSans'] whitespace-nowrap">
                AI 创作文章
              </span>
            </div>

            {/* Row 6: 人工创作文章 (起于 410px, 止于 1550px, 渐变色) */}
            <div
              className="absolute h-[42px] rounded-full flex items-center justify-start px-6 shadow-lg"
              style={{
                left: '410px',
                top: '305px',
                width: '1140px',
                background: 'linear-gradient(to right, #004CE5 0%, #0D9488 100%)'
              }}
            >
              <span className="text-[16px] font-bold text-white font-['MiSans'] whitespace-nowrap">
                人工创作文章
              </span>
            </div>

            {/* Row 7: 人工创作文章 (起于 730px, 止于 1380px, 渐变色) */}
            <div
              className="absolute h-[42px] rounded-full flex items-center justify-start px-6 shadow-lg"
              style={{
                left: '730px',
                top: '363px',
                width: '650px',
                background: 'linear-gradient(to right, #004CE5 0%, #0D9488 100%)'
              }}
            >
              <span className="text-[16px] font-bold text-white font-['MiSans'] whitespace-nowrap">
                人工创作文章
              </span>
            </div>

          </div>

          {/* 4. 颜色图例 (大号胶囊图例，水平居中) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[25px] flex items-center gap-16 z-20">
            <div className="flex items-center gap-4">
              <span className="w-12 h-5 rounded-full bg-zinc-100" />
              <span className="text-[24px] font-black text-zinc-400 font-['MiSans']">AI 创作文章</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
              <span className="text-[24px] font-black text-white font-['MiSans']">人工创作文章</span>
            </div>
          </div>
        </div>

        {/* ==================== 下半部分：两大好处 (保质期更长 / 一文两用·替代PR稿件) ==================== */}
        <div className="w-full h-[130px] bg-zinc-950/40 border border-zinc-900 rounded-[28px] px-8 flex justify-between items-stretch shadow-md">
          {/* 好处 ①：文章保质期更长 */}
          <div className="w-[810px] flex items-center gap-5 pl-2">
            <span className="shrink-0 w-[52px] h-[52px] rounded-2xl bg-white text-black text-[26px] font-black font-['Montserrat'] flex items-center justify-center shadow-md">
              1
            </span>
            <div className="flex flex-col justify-center">
              <h4 className="text-[27px] font-black text-white font-['MiSans'] leading-tight">
                文章保质期更长
              </h4>
              <p className="text-[18px] font-medium text-zinc-400 font-['MiSans'] leading-snug mt-1">
                年初发布的文章，<span className="text-white font-bold">至今仍被 AI 持续引用</span>
              </p>
            </div>
          </div>

          {/* 垂直分割线 */}
          <div className="self-center h-3/5 w-[1px] bg-zinc-800" />

          {/* 好处 ②：一文两用 · 可替代传统 PR 稿件 */}
          <div className="w-[880px] flex items-center gap-5 pr-2">
            <span className="shrink-0 w-[52px] h-[52px] rounded-2xl text-white text-[26px] font-black font-['Montserrat'] flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #004CE5 0%, #0D9488 100%)' }}>
              2
            </span>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <h4 className="text-[27px] font-black text-white font-['MiSans'] leading-tight">
                  一文两用
                </h4>
                <span className="text-[16px] font-bold text-teal-300 font-['MiSans'] border border-teal-400/40 bg-teal-500/10 rounded-full px-3 py-[2px] whitespace-nowrap">
                  可替代传统 PR 稿件
                </span>
              </div>
              <p className="text-[18px] font-medium text-zinc-400 font-['MiSans'] leading-snug mt-1">
                AI 抓取 + 真人阅读双高，<span className="text-white font-bold">品牌把 PR 预算直接拨给我们一起做</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ContentQualityValue.hideHeader = true;
