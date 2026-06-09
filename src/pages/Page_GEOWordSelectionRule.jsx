import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionRule() {
  return (
    <SlideLayout
      title="GEO 应该怎么选词条？"
      subtitle="两个核心做法"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 3-Column Layout stretching to fill safe zone width and height, leaving 20px padding at top and bottom */}
      <div className="w-full h-full flex gap-10 relative z-10 py-[20px] select-none items-stretch">

        {/* ==================== COLUMN 1: Introduction Slogan Only ==================== */}
        <div className="w-[560px] pl-[120px] flex flex-col justify-center pr-6 animate-fade-in">
          <h3 className="text-[60px] font-black text-white leading-tight tracking-wide">
            在 AI 里<br />
            重新做一遍<br />
            <span className="text-[#004CE5] font-extrabold relative">
              “品牌定位”
              <span className="absolute left-0 bottom-1.5 w-full h-[8px] bg-[#004CE5]/20 -z-10" />
            </span>
          </h3>
        </div>

        {/* ==================== COLUMN 2: Card 1 (Light Grey - Rule 01) ==================== */}
        <div className="w-[500px] flex-shrink-0 bg-zinc-150 border border-zinc-200 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-fade-in [animation-delay:100ms]">
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

        {/* ==================== COLUMN 3: Card 2 (Brand Blue - Rule 02) ==================== */}
        <div className="w-[500px] flex-shrink-0 bg-[#004CE5] border border-blue-600/50 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,76,229,0.3)] animate-fade-in [animation-delay:200ms] relative">
          
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
                  评估各家 AI 的返回答案：是否有目标 brand？是否经常带出竞争对手？回答内容是否稳定、意图是否强烈？
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

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionRule.hideHeader = true;
