import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionRuleDataCase() {
  return (
    <SlideLayout
      title="GEO 应该怎么选词条？"
      subtitle="法则二：数据优先"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 2-Column Layout */}
      <div className="w-full h-full flex gap-12 relative z-10 py-[20px] select-none items-stretch">

        {/* ==================== LEFT COLUMN: Card 2 (Brand Blue - Rule 02) ==================== */}
        <div className="w-[580px] flex-shrink-0 bg-[#004CE5] border border-blue-600/50 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,76,229,0.3)] animate-fade-in relative">

          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#004CE5]">
            <div className="flex items-center gap-3.5">
              {/* Rule Number Badge */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-[22px] font-black text-[#004CE5] font-mono">02</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] font-black text-white leading-tight">法则二：数据优先</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-8 bg-[#004CE5] flex flex-col justify-center gap-9">

            {/* Step 1 */}
            <div className="flex gap-5 items-start pl-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-white mt-2" />
                <div className="w-[2.5px] h-[75px] bg-blue-300/50 my-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-black text-white">影子测试模拟</span>
                <span className="text-[18px] xl:text-[19px] font-bold text-blue-100 mt-2 leading-relaxed">
                  不靠感觉猜词，将不同的用户长短问法放进系统，在豆包、千问、DeepSeek等AI端做大量影子跑测。
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 items-start pl-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-white mt-2" />
                <div className="w-[2.5px] h-[75px] bg-blue-300/50 my-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-black text-white">回答稳定性评估</span>
                <span className="text-[18px] xl:text-[19px] font-bold text-blue-100 mt-2 leading-relaxed">
                  评估各家 AI 的返回答案：是否有目标品牌？是否经常带出竞争对手？回答内容是否稳定、意图是否强烈？
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 items-start pl-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-white mt-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-black text-white">依据数据排序</span>
                <span className="text-[18px] xl:text-[19px] font-bold text-blue-100 mt-2 leading-relaxed">
                  剔除只会泛泛讲参数、不触发具体品牌的词条。基于影子跑测的返回数据，量化决定哪个问法具有最高的优化优先级。
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ==================== RIGHT COLUMN: Word Choice Comparison ==================== */}
        <div className="flex-grow flex flex-col justify-center pl-4 animate-fade-in [animation-delay:150ms]">

          <div className="bg-zinc-950/40 border border-[#004CE5]/30 rounded-[28px] p-10 flex flex-col shadow-[0_20px_50px_rgba(0,76,229,0.15)] backdrop-blur-sm relative overflow-hidden h-full justify-center">

            {/* Heading / Question */}
            <div className="text-center -mt-5 mb-10">
              <h3 className="text-[34px] xl:text-[38px] font-black text-white leading-normal font-['MiSans']">
                用户到底更可能问哪一个？
              </h3>
            </div>

            {/* Comparison Options Container */}
            <div className="flex flex-col gap-6 w-full max-w-[850px] mx-auto">

              {/* Option A */}
              <div className="bg-zinc-900/40 border border-zinc-800/60 p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden transition-all duration-300">
                <span className="text-[34px] xl:text-[40px] font-black text-zinc-400 font-['MiSans'] text-center">
                  “续航时间长的电动车推荐”
                </span>
              </div>

              {/* VS Divider */}
              <div className="flex items-center justify-center my-1">
                <div className="h-[1px] bg-zinc-800 flex-grow" />
                <span className="px-6 py-2 bg-blue-950/40 border border-[#004CE5]/30 rounded-full text-[#004CE5] font-black text-[18px] uppercase tracking-widest font-mono mx-4">
                  VS
                </span>
                <div className="h-[1px] bg-zinc-800 flex-grow" />
              </div>

              {/* Option B */}
              <div className="bg-[#004CE5]/5 border border-[#004CE5]/30 p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,76,229,0.08)]">
                <span className="text-[34px] xl:text-[40px] font-black text-white font-['MiSans'] text-center">
                  “我有充电焦虑，有没有合适的电车推荐” ？
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionRuleDataCase.hideHeader = true;
