import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionRuleCase() {
  return (
    <SlideLayout
      title="GEO 应该怎么选词条？"
      subtitle="法则一：扬长避短"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 2-Column Layout */}
      <div className="w-full h-full flex gap-12 relative z-10 py-[20px] select-none items-stretch">

        {/* ==================== LEFT COLUMN: Card 1 (Light Grey - Rule 01) ==================== */}
        <div className="w-[580px] flex-shrink-0 bg-zinc-150 border border-zinc-200 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-fade-in">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-300/60 bg-zinc-200">
            <div className="flex items-center gap-4">
              {/* Rule Number Badge */}
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                <span className="text-[22px] font-black text-white font-mono">01</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] font-black text-zinc-900 leading-tight">法则一：扬长避短</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-8 bg-zinc-100 flex flex-col justify-center gap-9">

            {/* Step 1 */}
            <div className="flex gap-5 items-start pl-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-zinc-900 mt-2" />
                <div className="w-[2.5px] h-[75px] bg-zinc-300 my-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-black text-zinc-900">定位优势词</span>
                <span className="text-[18px] xl:text-[19px] font-bold text-zinc-700 mt-2 leading-relaxed">
                  深入绑定长板卖点。如理想汽车做“续航长的电动车推荐”、“我有充电焦虑电车怎么选”等绝对优势词条。
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 items-start pl-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-zinc-900 mt-2" />
                <div className="w-[2.5px] h-[75px] bg-zinc-300 my-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-black text-zinc-900">过滤弱势词</span>
                <span className="text-[18px] xl:text-[19px] font-bold text-zinc-700 mt-2 leading-relaxed">
                  避开产品短板。增程车型既有电机又有引擎，维修结构复杂，强行去竞标“维修成本低的电动车”只会引来反效果。
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 items-start pl-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-zinc-900 mt-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-black text-zinc-900">建立 AI 信任</span>
                <span className="text-[18px] xl:text-[19px] font-bold text-zinc-700 mt-2 leading-relaxed">
                  AI 抓取会综合考察产品特点与用户口碑，欺骗 AI 和用户的虚假广告终会被算法排斥。精准定位、说真话才是核心。
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ==================== RIGHT COLUMN: Case Study Visualizer ==================== */}
        <div className="flex-grow flex flex-col justify-center pl-4 animate-fade-in [animation-delay:150ms]">

          <div className="bg-zinc-950/40 border border-[#004CE5]/30 rounded-[28px] p-10 flex flex-col shadow-[0_20px_50px_rgba(0,76,229,0.15)] backdrop-blur-sm relative overflow-hidden h-full justify-center">

            {/* Header / Question */}
            <div className="mb-10">
              <h3 className="text-[38px] xl:text-[42px] font-black text-white leading-tight font-['MiSans']">
                理想汽车最核心的优势是什么？
              </h3>
            </div>

            {/* Word Evaluation List */}
            <div className="flex flex-col gap-6">

              {/* Item 1 */}
              <div className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl hover:border-[#035C00]/30 transition-all duration-300">
                <span className="text-[26px] xl:text-[28px] font-black text-white font-['MiSans']">
                  “续航长的电动车推荐”
                </span>
                <div className="w-8 h-8 rounded-full bg-[#035C00] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl hover:border-[#035C00]/30 transition-all duration-300">
                <span className="text-[26px] xl:text-[28px] font-black text-white font-['MiSans']">
                  “我有充电焦虑，有没有合适的电动车推荐”
                </span>
                <div className="w-8 h-8 rounded-full bg-[#035C00] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl hover:border-[#DE1919]/30 transition-all duration-300">
                <span className="text-[26px] xl:text-[28px] font-black text-zinc-400 line-through decoration-rose-500/50 font-['MiSans']">
                  “维修成本低的电动车推荐”
                </span>
                <div className="w-8 h-8 rounded-full bg-[#DE1919] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionRuleCase.hideHeader = true;
