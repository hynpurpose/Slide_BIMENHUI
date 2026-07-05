import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

function ScreenshotSlot({ src, alt, hint }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-center items-center min-h-0 pb-1">
      {imgLoaded && !imgError ? (
        <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl transition-all duration-300 hover:border-white/20 group flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full w-auto h-auto rounded-xl object-contain group-hover:scale-[1.002] transition-transform duration-500"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="w-full max-w-[1550px] aspect-[2/1] max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
          <img src={src} alt={alt} className="hidden" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
          <div className="absolute inset-2 flex flex-col items-center justify-center p-4 text-center bg-white/[0.01] rounded-xl border border-dashed border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-zinc-300 font-bold text-base mb-1">{hint}</p>
            <p className="text-zinc-500 text-xs max-w-sm mb-3">上传任意比例的图片，外边框将自动无缝贴合原图尺寸，同时最大化屏幕显示。</p>
            <div className="bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#004CE5]">
              存放路径: {src}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Page_SkyworthReport_OptDashboard() {
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">
          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 核心指标表现概览
            </h1>
          </div>
          <ScreenshotSlot
            src="/geo-report/page-54-dashboard-left.jpg"
            alt="优化词核心指标看板大图"
            hint="此处为优化词核心指标表现大图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptDashboard.hideHeader = true;
