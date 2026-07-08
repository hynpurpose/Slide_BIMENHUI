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
        {/* ==================== 1. 左页：封面字样 (字号加大) ==================== */}
        <div className="relative w-[750px] h-[580px] bg-gray-50 rounded-l-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] p-16 pr-20 flex flex-col justify-between border-r border-zinc-200 text-black z-10 pl-10">
          {/* Spine crease shadow (left side) */}
          <div className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-black/12 to-transparent pointer-events-none" />
          
          {/* Date */}
          <div className="text-[18px] text-zinc-400 font-bold tracking-wider font-sans">
            5 July 2026
          </div>

          {/* Cover Titles (Enlarged) */}
          <div className="my-auto space-y-4">
            <h2 className="text-[76px] font-black text-zinc-950 font-sans leading-none tracking-wide">
              某家电品牌电视
            </h2>
            <h2 className="text-[58px] font-black text-zinc-800 font-sans leading-snug">
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

        {/* ==================== 3. 右页：垂直排列三个带数字的标题 ==================== */}
        <div className="relative w-[750px] h-[580px] bg-white rounded-r-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] p-16 pl-20 flex flex-col justify-between">
          {/* Spine crease shadow (right side) */}
          <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-gradient-to-r from-black/12 to-transparent pointer-events-none" />

          {/* Vertical Titles list */}
          <div className="flex-grow flex flex-col h-full py-4 justify-between">
            {/* Title 1 */}
            <div className="flex-1 flex items-start border-b border-zinc-150 py-4 pr-4 gap-5">
              <span className="font-['Montserrat'] text-[46px] font-black text-blue-600 shrink-0 leading-none">1.</span>
              <div className="flex flex-col gap-3 min-w-0 pt-1">
                <h3 className="text-[34px] font-black text-zinc-950 font-sans leading-snug">
                  壁纸电视 VS 常规电视
                </h3>
                <p className="text-[22px] text-zinc-400 font-normal font-['MiSans'] leading-relaxed">
                  消费者为什么买壁纸电视，而不是传统电视？
                </p>
              </div>
            </div>
            {/* Title 2 */}
            <div className="flex-1 flex items-start border-b border-zinc-150 py-4 pr-4 gap-5">
              <span className="font-['Montserrat'] text-[46px] font-black text-blue-600 shrink-0 leading-none">2.</span>
              <div className="flex flex-col gap-3 min-w-0 pt-1">
                <h3 className="text-[34px] font-black text-zinc-950 font-sans leading-snug">
                  某家电品牌壁纸电视 VS 竞品壁纸电视
                </h3>
                <p className="text-[22px] text-zinc-400 font-normal font-['MiSans'] leading-relaxed">
                  消费者为什么买某家电品牌壁纸电视，而不是竞品壁纸电视？
                </p>
              </div>
            </div>
            {/* Title 3 */}
            <div className="flex-1 flex items-start pt-6 pr-4 gap-5">
              <span className="font-['Montserrat'] text-[46px] font-black text-blue-600 shrink-0 leading-none">3.</span>
              <div className="flex flex-col gap-3 min-w-0 pt-1">
                <h3 className="text-[34px] font-black text-zinc-950 font-sans leading-tight">
                  某家电品牌五款壁纸电视的区别
                </h3>
                <p className="text-[22px] text-zinc-400 font-normal font-['MiSans'] leading-relaxed">
                  消费者如果买某家电品牌壁纸电视，会选择哪一款？
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthResearchConclusions.hideHeader = true;
