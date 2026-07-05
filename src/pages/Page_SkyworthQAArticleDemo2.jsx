import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthQAArticleDemo2() {
  return (
    <SlideLayout title="评测类文章示意">
      <div className="w-full h-full flex flex-col gap-6 animate-fadeIn relative z-10">

        {/* Callout Text */}
        <div className="absolute top-[-56px] right-0 z-30 flex items-center gap-2.5 text-zinc-400 text-[28px] font-bold">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shrink-0" />
          <span className="tracking-wide">
            深挖产品细节与真实痛点，提供真实可信的评测依据，形成<span className="text-white font-extrabold">深度消费说服力</span>。
          </span>
        </div>

        {/* 单张大图展示，模拟 Mac 浏览器窗口 */}
        <div className="w-full flex-1 min-h-0 flex items-center justify-center group" style={{ perspective: '2000px' }}>
          <div className="w-full h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 hover:scale-[1.01] flex flex-col hover:border-blue-500/30">

            {/* Mac Browser Header */}
            <div className="w-full h-[36px] bg-[#E5E7EB] border-b border-zinc-300 flex items-center px-4 shrink-0 relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-white/70 border border-zinc-300 rounded-md" />
            </div>

            {/* Image Content Area */}
            <div className="flex-1 w-full relative flex flex-col items-center justify-start overflow-hidden bg-white">
              <img
                src="/charts/geo-article-generation-demo2.png"
                alt="问题解答类文章示意图二"
                className="w-full h-full object-contain z-10 relative"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center w-full h-full z-10 relative pointer-events-none pb-8 text-zinc-400">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <span className="text-lg font-medium tracking-widest text-zinc-400 uppercase">问题解答类文章示意图二</span>
                <span className="text-sm mt-3 text-zinc-500 opacity-80">请在 public/charts/ 中放入图片文件 geo-article-generation-demo2.png</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthQAArticleDemo2.hideHeader = true;
