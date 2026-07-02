import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthResearchConclusions() {
  const rings = [60, 160, 260, 360, 460];

  return (
    <SlideLayout title="品牌调研报告核心结论">
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
        厘清壁纸电视品类优势与品牌定位矩阵。
      </div>

      {/* ── 翻开的报告章节排版区 ── */}
      <div 
        className="absolute w-[1500px] flex items-center justify-between select-none animate-fadeIn overflow-visible"
        style={{ top: '120px', left: '170px', height: '580px' }}
      >
        {/* ==================== 1. 左页：封面字样 ==================== */}
        <div className="relative w-[750px] h-[580px] bg-gray-50 rounded-l-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] p-16 pr-20 flex flex-col justify-between border-r border-zinc-200 text-black z-10 pl-10">
          {/* Spine crease shadow (left side) */}
          <div className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-black/12 to-transparent pointer-events-none" />
          
          {/* Date */}
          <div className="text-[18px] text-zinc-400 font-bold tracking-wider font-sans">
            22 Sep, 2025
          </div>

          {/* Cover Titles (High contrast black) */}
          <div className="my-auto space-y-3">
            <h2 className="text-[52px] font-black text-zinc-950 font-sans leading-tight tracking-wide">
              创维电视
            </h2>
            <h2 className="text-[44px] font-black text-zinc-850 font-sans leading-snug">
              品牌调研报告
            </h2>
          </div>
          
          {/* Author */}
          <div className="text-[18px] text-zinc-400 font-bold font-sans">
            GEO 索引未来项目组
          </div>
        </div>

        {/* ==================== 2. 中间：活页金属装订环 ==================== */}
        {rings.map((y, idx) => (
          <div 
            key={idx}
            className="absolute w-[18px] h-[48px] rounded-full border-[3px] border-zinc-300 bg-gradient-to-r from-zinc-400 via-zinc-150 to-zinc-400 shadow-md z-30"
            style={{ left: '741px', top: `${y}px` }}
          />
        ))}

        {/* ==================== 3. 右页：垂直排列几个标题 ==================== */}
        <div className="relative w-[750px] h-[580px] bg-white rounded-r-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] p-16 pl-20 flex flex-col justify-between">
          {/* Spine crease shadow (right side) */}
          <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-gradient-to-r from-black/12 to-transparent pointer-events-none" />

          {/* Vertical Titles list */}
          <div className="flex-grow flex flex-col h-full py-4 justify-between">
            {/* Title 1 */}
            <div className="flex-1 flex flex-col justify-center border-b border-zinc-150 pb-6 pr-4">
              <h3 className="text-[38px] font-black text-zinc-950 font-sans leading-snug">
                壁纸电视 VS 常规电视
              </h3>
            </div>
            {/* Title 2 */}
            <div className="flex-1 flex flex-col justify-center border-b border-zinc-150 pb-6 pr-4">
              <h3 className="text-[38px] font-black text-zinc-950 font-sans leading-snug">
                创维壁纸电视 VS 竞品壁纸电视
              </h3>
            </div>
            {/* Title 3 */}
            <div className="flex-1 flex flex-col justify-center pt-8 pr-4">
              <h3 className="text-[38px] font-black text-zinc-950 font-sans leading-tight">
                创维五款壁纸电视的区别
              </h3>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthResearchConclusions.hideHeader = true;
