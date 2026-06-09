import React from 'react';

export default function Page_GEOWordSelection() {
  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-16 pl-10 pr-10">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title & Subtitle container */}
      <div className="w-full flex flex-col relative z-10 shrink-0 mb-8 items-center">
        {/* Title with solid blue dot accent */}
        <div className="w-full flex items-center gap-4 mb-6 justify-start">
          <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
            问题二：GEO 优化到底应该怎么选词条，选平台？
          </h2>
        </div>
        {/* Subtitle centered inside a premium outline badge */}
        <div className="w-full flex justify-center mt-3">
          <div className="px-8 py-2 border border-blue-500/25 bg-blue-500/5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.06)]">
            <span className="text-2xl xl:text-3xl font-black text-blue-400 tracking-wider">
              怎么选词条
            </span>
          </div>
        </div>
        {/* Core Concept directly below subtitle (No background frame, enlarged text as visual center) */}
        <div className="mt-8 mb-4 text-center max-w-5xl">
          <p className="text-3xl xl:text-4xl font-black text-zinc-100 tracking-wide leading-snug">
            核心理念：做词条选择，就是在 AI 里重新做 <span className="text-blue-400 font-extrabold text-4xl xl:text-5xl drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">“品牌定位”</span>
          </p>
        </div>
      </div>

      {/* Middle Section: Two Columns PPT Card Layout */}
      <div className="grid grid-cols-2 gap-10 w-full flex-grow flex-1 min-h-0 relative z-10 mb-4">
        
        {/* Left Column: Other service providers (Light Grey style) */}
        <div className="flex flex-col p-10 bg-zinc-200 text-zinc-900 rounded-3xl border border-zinc-300 shadow-lg justify-start gap-8">
          {/* Header */}
          <div className="border-b border-zinc-300 pb-4">
            <h3 className="text-3xl xl:text-4xl font-extrabold text-zinc-500 tracking-wide">
              其他服务商
            </h3>
          </div>
          
          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-2xl xl:text-3xl font-extrabold text-zinc-800 mb-2">
                AI批量生成
              </h4>
              <p className="text-lg xl:text-xl font-bold text-zinc-700 mb-2">
                简单模板，用AI一秒批量生成词条。
              </p>
              <p className="text-[18px] xl:text-lg text-zinc-500 leading-relaxed font-medium">
                脱离用户真实搜索习惯。买100个词，实际起效的可能只有10个。
              </p>
            </div>
            
            <div>
              <h4 className="text-2xl xl:text-3xl font-extrabold text-zinc-800 mb-2">
                机械套用数据
              </h4>
              <p className="text-lg xl:text-xl font-bold text-zinc-700 mb-2">
                依赖不准确的外部爬取数据，盲目堆砌自相矛盾的卖点。
              </p>
              <p className="text-[18px] xl:text-lg text-zinc-500 leading-relaxed font-medium">
                AI会判定产品信息不靠谱而不予推荐，未来更面临被标记为“恶意投毒”的合规风险。
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Our approach (Brand Blue style) */}
        <div className="flex flex-col p-10 bg-blue-600 text-white rounded-3xl border-2 border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.25)] justify-start gap-8">
          {/* Header */}
          <div className="border-b border-blue-400/50 pb-4">
            <h3 className="text-3xl xl:text-4xl font-extrabold tracking-wide">
              我们的做法
            </h3>
          </div>
          
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl xl:text-5xl font-black text-yellow-300 leading-none">70%</span>
                <span className="text-2xl xl:text-3xl font-extrabold">品牌定位</span>
              </h4>
              <p className="text-lg xl:text-xl text-blue-50 leading-relaxed font-medium">
                不迷信单一工具，结合产品真实特性与消费者痛点，人工与品牌方协同精选词条。
              </p>
            </div>
            
            <div>
              <h4 className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl xl:text-5xl font-black text-yellow-300/90 leading-none">30%</span>
                <span className="text-2xl xl:text-3xl font-extrabold">数据系统辅助</span>
              </h4>
              <p className="text-lg xl:text-xl text-blue-50 leading-relaxed font-medium">
                持续监测用户在AI端的真实提问习惯，反向修正并辅助优化已选词条，确保选词符合真实消费行为。
              </p>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelection.hideHeader = true;
