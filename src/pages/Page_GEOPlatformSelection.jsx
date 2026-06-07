import React, { useState } from 'react';

export default function Page_GEOPlatformSelection() {
  const [imgFailed, setImgFailed] = useState(false);

  // Optional local image path - will fallback to premium SVG graphics if file is not found
  const imagePath = "/images/geo-platform-selection.png";

  return (
    <div className="w-full h-full flex flex-col relative bg-zinc-950 text-white font-sans select-none overflow-hidden justify-between pt-8 pb-16 px-12">

      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Top Section: Title & Subtitle container */}
      <div className="w-full flex flex-col relative z-10 shrink-0 mb-6">
        {/* Title with solid blue dot accent */}
        <div className="w-full flex items-center gap-4 mb-8">
          <div className="w-2.5 h-8 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          <h2 className="text-4xl xl:text-5xl font-black tracking-wide text-white leading-tight">
            问题二：GEO 优化到底应该怎么选词条，选平台？
          </h2>
        </div>
        {/* Subtitle centered inside a premium outline badge */}
        <div className="w-full flex justify-center mt-3">
          <div className="px-8 py-2 border border-blue-500/25 bg-blue-500/5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.06)]">
            <span className="text-2xl xl:text-3xl font-black text-blue-400 tracking-wider">
              怎么选平台
            </span>
          </div>
        </div>
      </div>

      {/* Middle Section: Image Slot / Fallback Placeholder */}
      <div className="w-full flex-1 flex-grow flex items-center justify-center relative z-10 min-h-0 mb-6">
        {!imgFailed ? (
          <img
            src={imagePath}
            alt="GEO优化平台选择"
            className="max-w-full max-h-full object-contain rounded-2xl border border-zinc-900/30 bg-zinc-900/10 p-1.5 shadow-subtle-glow"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-zinc-500 border border-zinc-800/80 rounded-2xl p-12 w-full h-full bg-zinc-950/40 max-w-4xl relative overflow-hidden shadow-subtle-glow">
            {/* Tech-style corner bracket decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-zinc-800" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-zinc-800" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-zinc-800" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-800" />
            
            {/* Minimalist blueprint design lines */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            {/* Stylized placeholder icon */}
            <div className="w-20 h-20 mb-6 rounded-full border border-blue-500/10 flex items-center justify-center bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.04)]">
              <svg className="w-9 h-9 text-blue-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
              </svg>
            </div>
            
            <div className="text-center relative z-10">
              <p className="text-xl font-bold text-zinc-400 tracking-wider">图片占位区域 (图片位已留)</p>
              <p className="text-xs text-zinc-600 mt-3 max-w-md mx-auto leading-relaxed">
                请放置对应的图片文件：<span className="text-blue-400 font-mono font-bold bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">/public/images/geo-platform-selection.png</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section: Text block with premium styling card */}
      <div className="w-full flex flex-col relative z-10 mb-8 p-6 bg-zinc-900/10 border border-zinc-900/30 rounded-2xl backdrop-blur-sm shadow-subtle-glow">
        <h3 className="text-2xl xl:text-3xl font-bold text-zinc-300 leading-relaxed text-center">
          只选用户量最高的三个：<span className="text-blue-400 font-extrabold drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">豆包、DeepSeek、千问</span>；如果预算够，可以兼顾 <span className="text-zinc-400 font-bold">元宝、KIMI、文心</span>
        </h3>
      </div>

    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOPlatformSelection.hideHeader = true;
