import React, { useState } from 'react';

export default function Page_GEOKpiSetting() {
  const [imgFailed, setImgFailed] = useState(false);

  // Optional image path inside Step 1 card
  const imagePath = "/images/geo-kpi-check.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-16 px-12">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title with solid blue dot accent */}
      <div className="w-full flex items-center gap-4 mb-14 relative z-10 shrink-0">
        <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
        <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
          问题三：到底应该怎么设定合理的提及率，top率等 KPI？
        </h2>
      </div>

      {/* Middle Section: Equal Two-Column Grid Layout (Stretched to PPT Edges) */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-full flex-grow flex-1 min-h-0 relative z-10 mb-8 items-stretch">
        
        {/* Left Column: GEO Health Check (Equal Width) */}
        <div className="group flex flex-col p-10 bg-zinc-900/35 border border-zinc-800/80 rounded-3xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
          {/* Internal ambient glowing circle */}
          <div className="absolute -right-20 -bottom-20 w-52 h-52 rounded-full bg-blue-600/5 blur-[60px] pointer-events-none transition-all duration-300 group-hover:bg-blue-600/10" />
          
          {/* Card Top: Outline capsule badge */}
          <div className="self-start">
            <span className="inline-block border border-blue-500/30 text-blue-400 bg-blue-500/5 px-6 py-2 rounded-full text-base font-black font-mono tracking-widest uppercase">
              STEP 01
            </span>
          </div>
          
          {/* Card Header */}
          <h3 className="text-4xl xl:text-5xl font-extrabold text-white mt-8 mb-6 tracking-wide">
            GEO 体检
          </h3>
          
          {/* Card Body Paragraph */}
          <p className="text-xl xl:text-2xl text-zinc-300 leading-relaxed font-medium mb-6">
            就像医生治病也要先检查一样，得先系统地知道自己和竞品在 AI 里的情况，也就是拿到品牌的数据报告，才能进行下一步。
          </p>

          {/* Bottom Section: Image Slot within the card */}
          <div className="flex-1 w-full min-h-[160px] flex items-center justify-center border border-zinc-800 bg-zinc-950/40 rounded-2xl overflow-hidden relative z-10">
            {!imgFailed ? (
              <img
                src={imagePath}
                alt="GEO 体检报告"
                className="max-w-full max-h-full object-contain p-2"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-zinc-600 gap-2 p-6 w-full h-full">
                <svg className="w-12 h-12 text-zinc-700 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                </svg>
                <span className="text-sm font-bold text-zinc-500 font-mono bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800/60">
                  geo-kpi-check.png
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: KPI Setting (Equal Width) */}
        <div className="group flex flex-col p-10 bg-zinc-900/35 border border-zinc-800/80 rounded-3xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
          {/* Internal ambient glowing circle */}
          <div className="absolute -left-20 -bottom-20 w-52 h-52 rounded-full bg-purple-600/5 blur-[60px] pointer-events-none transition-all duration-300 group-hover:bg-purple-600/10" />
          
          {/* Card Top: Outline capsule badge */}
          <div className="self-start">
            <span className="inline-block border border-purple-500/30 text-purple-400 bg-purple-500/5 px-6 py-2 rounded-full text-base font-black font-mono tracking-widest uppercase">
              STEP 02
            </span>
          </div>
          
          {/* Card Header */}
          <h3 className="text-4xl xl:text-5xl font-extrabold text-white mt-8 mb-4 tracking-wide">
            设定合理 KPI
          </h3>
          
          {/* Card Body Paragraph */}
          <p className="text-xl xl:text-2xl text-zinc-300 leading-relaxed font-semibold mb-6">
            有点像我们找对象：不高攀、慢慢来、比情敌好就赢了。
          </p>

          {/* Sub-sections explaining KPI rules - Balanced grouped spacing with larger text, pushed down */}
          <div className="flex flex-col gap-6 mt-10 justify-start">
            <div className="flex flex-col gap-1 border-l-2 border-purple-500/40 pl-4">
              <h4 className="text-xl xl:text-2xl font-bold text-purple-300">不高攀</h4>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                不跨越品牌真实地位。不强求不切实际的高提及率 KPI，避免逼迫服务商数据造假。
              </p>
            </div>
            
            <div className="flex flex-col gap-1 border-l-2 border-purple-500/40 pl-4">
              <h4 className="text-xl xl:text-2xl font-bold text-purple-300">慢慢来</h4>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                循序渐进。AI 需要时间去抓取、消化和重估品牌资产，警惕“首月见效、次月霸榜”。
              </p>
            </div>
            
            <div className="flex flex-col gap-1 border-l-2 border-purple-500/40 pl-4">
              <h4 className="text-xl xl:text-2xl font-bold text-purple-300">比情敌好就赢了</h4>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                以直接竞品作为优化极限。比同等梯队的第二名做得更好，就是短期优化的极限位置。
              </p>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOKpiSetting.hideHeader = true;
