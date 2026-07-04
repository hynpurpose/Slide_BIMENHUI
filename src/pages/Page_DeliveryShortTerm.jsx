import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_DeliveryShortTerm() {
  return (
    <SlideLayout title="投放逻辑">
      {/* ── 背景竖向蓝色发光光柱 (致敬参考图片背景) ── */}
      {/* 左侧竖线群 */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] flex justify-between pointer-events-none opacity-25 z-0">
        <div className="w-[1px] h-full bg-gradient-to-b from-blue-600/30 via-blue-500/0 to-blue-600/30 shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
        <div className="w-[3px] h-full bg-gradient-to-b from-blue-700/40 via-blue-500/0 to-blue-700/40 shadow-[0_0_16px_rgba(29,78,216,0.5)]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-blue-500/20 via-blue-500/0 to-blue-500/20" />
        <div className="w-[6px] h-full bg-gradient-to-b from-blue-800/40 via-blue-500/0 to-blue-800/40 shadow-[0_0_20px_rgba(30,58,138,0.6)]" />
        <div className="w-[2px] h-full bg-gradient-to-b from-blue-600/30 via-blue-500/0 to-blue-600/30" />
      </div>
      {/* 右侧竖线群 */}
      <div className="absolute right-0 top-0 bottom-0 w-[300px] flex justify-between pointer-events-none opacity-25 z-0">
        <div className="w-[2px] h-full bg-gradient-to-b from-blue-600/30 via-blue-500/0 to-blue-600/30" />
        <div className="w-[6px] h-full bg-gradient-to-b from-blue-800/40 via-blue-500/0 to-blue-800/40 shadow-[0_0_20px_rgba(30,58,138,0.6)]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-blue-500/20 via-blue-500/0 to-blue-500/20" />
        <div className="w-[3px] h-full bg-gradient-to-b from-blue-700/40 via-blue-500/0 to-blue-700/40 shadow-[0_0_16px_rgba(29,78,216,0.5)]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-blue-600/30 via-blue-500/0 to-blue-600/30 shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
      </div>

      {/* ── 主排版区 (高度 640px，底端往上移动，顶端起于 content top 下方 80px) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-between z-10"
        style={{ top: '80px', height: '640px' }}
      >

        {/* ==================== 上半部分：大字标题与说明 (左侧对齐 margin line，即 pl-0) ==================== */}
        <div className="pl-0 pt-0 flex flex-col justify-start">
          {/* 小标签 */}
          <div className="inline-block border border-zinc-800 bg-zinc-950/40 rounded-full px-5 py-1.5 w-fit mb-6">
            <span className="text-[18px] text-zinc-550 font-bold uppercase tracking-wider font-sans">
              PLACEMENT CORE PRINCIPLE
            </span>
          </div>

          <h2 className="text-[64px] font-black text-white font-['MiSans'] leading-tight mb-6 max-w-[1200px]">
            不是到处发，而是看 AI 采信哪些平台
          </h2>

          <p className="text-[32px] text-zinc-400 leading-relaxed font-sans font-medium max-w-[1100px]">
            根据数据监测系统，锁定采信度最高的平台渠道，把短期投放预算花在真正能改变 AI 输出答案和位次的节点上。
          </p>
        </div>

        {/* ==================== 下半部分：横向栏目与细分割线 (左侧对齐 margin line，即 px-0) ==================== */}
        <div className="px-0 w-full flex flex-col justify-end">
          {/* 横向分割线 */}
          <div className="w-full border-t border-zinc-800 pt-10 flex justify-between items-start">

            {/* Column 1 (宽 880px) */}
            <div className="w-[880px] flex flex-col justify-start">
              {/* 标题 */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-['Montserrat'] text-[68px] text-[#004CE5] font-black leading-none">
                  01
                </span>
                <span className="text-[34px] font-black text-white font-['MiSans'] tracking-wide">
                  账号权重分水岭
                </span>
              </div>
              {/* 正文 */}
              <p className="text-[26px] text-zinc-400 leading-relaxed font-sans font-medium">
                同一个平台，账号权重决定内容留存率。<br />
                测试表明，网易等体系中高权重号发布的内容效果更稳、存续更久；自己批量注册的低权重号极易被算法查重排重，甚至直接被垃圾过滤。
              </p>
            </div>

            {/* 纵向分割线 */}
            <div className="w-[1px] h-[220px] bg-zinc-900 shrink-0 self-center" />

            {/* Column 2 (宽 880px) */}
            <div className="w-[880px] flex flex-col justify-start">
              {/* 标题 */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-['Montserrat'] text-[68px] text-[#004CE5] font-black leading-none">
                  02
                </span>
                <span className="text-[34px] font-black text-white font-['MiSans'] tracking-wide">
                  真实影响 vs 显示引用
                </span>
              </div>
              {/* 正文 */}
              <p className="text-[26px] text-zinc-400 leading-relaxed font-sans font-medium">
                分清“显示引用”与“真实权重”的巨大差异。<br />
                AI 对视频（如抖音）的理解仅限于标题、摘要和字幕。在特定场景下，制作 10 条视频对最终回答的影响，可能不如在今日头条投递 1 篇高权重文章。
              </p>
            </div>

          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryShortTerm.hideHeader = true;
