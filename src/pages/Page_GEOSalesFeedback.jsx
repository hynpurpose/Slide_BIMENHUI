import React from 'react';

export default function Page_GEOSalesFeedback() {
  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-14 pl-10 pr-10">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with solid blue dot accent and keyword (same as conversion page) */}
      <div className="w-full flex items-center relative z-10 shrink-0 mb-4 gap-4">
        <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
        <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </h2>
      </div>

      {/* Subtitle in capsule shape - Centered, Alimama ShuHeiTi, positioned lower */}
      <div className="w-full flex justify-center z-10 shrink-0 mt-16 mb-4">
        <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-8 py-2.5 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <span className="text-2xl xl:text-3xl font-bold text-blue-400 tracking-wider font-['AlimamaShuHeiTi']">
            线下销售反馈的真实现象
          </span>
        </div>
      </div>

      {/* Middle Section: Two Columns Card Layout with solid color themes matching the reference */}
      <div className="w-full flex-grow flex-1 grid grid-cols-2 gap-8 items-center relative z-10 min-h-0 mb-16">

        {/* Card 1 (Left - Electric Blue background with white text) */}
        <div className="bg-[#1b43e3] rounded-3xl p-10 flex flex-col justify-between h-[480px] xl:h-[540px] relative overflow-hidden shadow-[0_15px_40px_rgba(27,67,227,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          
          {/* Top part: H4 and Description */}
          <div className="flex flex-col gap-12">
            <h4 className="text-3xl xl:text-4xl font-bold text-white/90 font-['AlimamaShuHeiTi'] tracking-wide">
              来店前
            </h4>
            <p className="text-2xl xl:text-3xl font-bold text-white" style={{ lineHeight: 1.4 }}>
              大概有 <span className="text-[#a5b4fc] font-extrabold">20% 左右</span> 的到店客户，在来店之前已经先问过 AI、查过相关信息。
            </p>
          </div>
          
          {/* Bottom part: Giant statement in AlimamaShuHeiTi */}
          <div className="text-5xl xl:text-6xl font-black text-white font-['AlimamaShuHeiTi'] tracking-wide leading-tight select-none">
            20%的客户来自AI
          </div>
        </div>

        {/* Card 2 (Right - Pure White background with dark slate text) */}
        <div className="bg-white rounded-3xl p-10 flex flex-col justify-between h-[480px] xl:h-[540px] relative overflow-hidden shadow-[0_15px_40px_rgba(255,255,255,0.05)]">
          
          {/* Top part: H4 and Description */}
          <div className="flex flex-col gap-12">
            <h4 className="text-3xl xl:text-4xl font-bold text-zinc-800 font-['AlimamaShuHeiTi'] tracking-wide">
              来店后
            </h4>
            <p className="text-2xl xl:text-3xl font-bold text-zinc-900" style={{ lineHeight: 1.4 }}>
              顾客到了门店之后，会当着销售的面直接用 <span className="text-[#1b43e3] font-extrabold">豆包搜索</span>：这款床垫最低价多少钱、评价怎么样、有没有坑等问题。
            </p>
          </div>
          
          {/* Bottom part: Giant statement in AlimamaShuHeiTi (Enlarged) */}
          <div className="text-5xl xl:text-6xl font-black text-zinc-950 font-['AlimamaShuHeiTi'] tracking-wide leading-tight select-none">
            销售变得可有可无
          </div>
        </div>

      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesFeedback.hideHeader = true;
