import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthPositioningShift() {
  const CardBgTexture = ({ accent = false }) => {
    const cols = 8;
    const rows = 6;
    const total = cols * rows;
    return (
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0 overflow-hidden pointer-events-none bg-[#020617]/40">
        {Array.from({ length: total }).map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          
          // Normalized positions
          const xFactor = c / (cols - 1);
          const yFactor = r / (rows - 1);
          
          // Smooth diagonal gradient factor from top-left (dark) to bottom-right (bright)
          const distance = (xFactor + yFactor) / 2;
          
          // Exponential curve for softer transition near the dark areas
          const smoothFactor = Math.pow(distance, 1.4);
          
          // Set smooth opacity limits with absolutely zero noise to prevent "mosaic" patterns
          const minOpacity = 0.01;
          const maxOpacity = accent ? 0.42 : 0.28;
          const opacity = minOpacity + smoothFactor * (maxOpacity - minOpacity);
          
          return (
            <div 
              key={i} 
              className={accent ? "bg-[#004CE5]" : "bg-[#0A328C]"} 
              style={{ opacity }} 
            />
          );
        })}
      </div>
    );
  };

  return (
    <SlideLayout title="策略转变">
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
        从“逆向自证”转向“迎合AI采信逻辑的坦诚”，以客观的优缺点解构重塑壁纸电视推荐权重。
      </div>

      {/* ── 左右策略转变对比区域 ── */}
      <div 
        className="absolute left-0 w-full flex items-center justify-between select-none animate-fadeIn"
        style={{ top: '100px', height: '540px' }}
      >
        {/* 1. 左侧卡片：强行自证策略 */}
        <div className="relative w-[870px] h-[520px] bg-[#020617] border border-[#004CE5]/15 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-12 flex flex-col justify-center">
          <CardBgTexture />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 w-full">
            {/* H3 Title */}
            <h3 className="text-[32px] font-bold text-zinc-450 leading-tight mb-8 font-['MiSans']">
              强行自证策略
            </h3>

            {/* 极简说明 (突出“证明不贵”) */}
            <div className="text-[52px] font-black text-zinc-300 tracking-wider mb-8 font-['MiSans']">
              试图证明“不贵”
            </div>

            {/* 一句话再简要说明 */}
            <p className="text-[24px] text-zinc-500 font-medium leading-relaxed font-['MiSans'] border-t border-zinc-800/60 pt-6">
              回避高价顾虑，堆砌测评对比进行合理化，大模型极易判定为推广软文而降低权重。
            </p>
          </div>
        </div>

        {/* 2. 中间：大箭头转换区 */}
        <div className="w-[100px] h-full flex flex-col items-center justify-center shrink-0">
          {/* Flat Minimalist Arrow */}
          <svg className="w-[80px] h-[30px]" viewBox="0 0 80 30" fill="none">
            <path 
              d="M 5 15 L 75 15 M 75 15 L 60 5 M 75 15 L 60 25" 
              stroke="#3f3f46" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 3. 右侧卡片：定位匹配策略 */}
        <div className="relative w-[870px] h-[520px] bg-[#020617] border border-[#004CE5]/15 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-12 flex flex-col justify-center">
          <CardBgTexture accent={true} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004CE5]/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 w-full">
            {/* H3 Title */}
            <h3 className="text-[32px] font-bold text-blue-400 leading-tight mb-8 font-['MiSans']">
              定位匹配策略
            </h3>

            {/* 极简说明 (突出“承认小贵”) */}
            <div className="text-[52px] font-black text-white tracking-wider mb-8 font-['MiSans']">
              直接承认“小贵”
            </div>

            {/* 一句话再简要说明 */}
            <p className="text-[24px] text-zinc-200 font-bold leading-relaxed font-['MiSans'] border-t border-zinc-800/80 pt-6">
              讲透为什么贵、适合谁与不适合谁，符合大模型采信逻辑而获得AI优先推荐。
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthPositioningShift.hideHeader = true;
