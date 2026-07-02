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
    <SlideLayout title="优质内容的复利效应">
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

        {/* ==================== 下半部分：极简端点说明 (完美抵边，去除 icon) ==================== */}
        <div className="w-full h-[130px] bg-zinc-950/40 border border-zinc-900 rounded-[28px] px-8 flex justify-between items-center shadow-md">
          {/* 左观点 */}
          <div className="w-[850px] flex items-center pl-4">
            <h4 className="text-[28px] font-black text-white font-['MiSans'] leading-normal">
              人工写的文章被 AI 长期采信，持续时间更长
            </h4>
          </div>

          {/* 垂直分割线 */}
          <div className="h-1/2 w-[1px] bg-zinc-900" />

          {/* 右观点 */}
          <div className="w-[850px] flex items-center pr-4">
            <h4 className="text-[28px] font-black text-white font-['MiSans'] leading-normal">
              人工文章阅读量更高，AI 和真实用户都会高频看
            </h4>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ContentQualityValue.hideHeader = true;
