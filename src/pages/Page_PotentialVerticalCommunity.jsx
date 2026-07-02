import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_PotentialVerticalCommunity() {
  return (
    <SlideLayout title="有潜力的垂直社区">
      <div className="w-full h-full flex flex-col gap-6 animate-fadeIn">
        {/* H2 Subtitle */}
        <h2
          className="text-white font-normal font-['MiSans']"
          style={{ fontSize: '48px', lineHeight: '58px' }}
        >
          案例：白酒行业的“酒排名网”
        </h2>

        {/* 图片展示区 */}
        <div className="flex-1 flex items-center justify-center border border-dashed border-zinc-800/80 rounded-[32px] min-h-0 bg-zinc-950/20 overflow-hidden">
          <img
            src="/images/potential_vertical_community.png"
            alt="有潜力的垂直社区 - 酒排名网"
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              // 当图片未找到时显示友好路径提示
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="flex flex-col items-center gap-4 select-none">
                    <div class="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                      📷
                    </div>
                    <div class="flex flex-col items-center gap-1.5">
                      <span class="text-[20px] font-bold text-zinc-400 font-sans">图片占位符</span>
                      <span class="text-[15px] text-zinc-600 font-mono">请将图片放置在: /public/images/potential_vertical_community.png</span>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_PotentialVerticalCommunity.hideHeader = true;
