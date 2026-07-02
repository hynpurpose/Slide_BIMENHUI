import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthBrandResearch() {
  return (
    <SlideLayout title="我们怎么调研品牌">
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
        以海量大模型语料抓取为基石，结合真实消费者反馈净化，构建客观立体的品牌调研基础。
      </div>

      {/* ── 左右非等分双栏排版区 ── */}
      <div 
        className="absolute left-0 w-full flex items-center justify-between select-none animate-fadeIn"
        style={{ top: '100px', height: '695px' }}
      >
        {/* ==================== 1. 左栏：团队增加了懂品牌定位的人 (收窄) ==================== */}
        <div className="w-[580px] h-full flex flex-col justify-start pr-8 border-r border-zinc-800/80 shrink-0">
          <h3 className="text-[32px] font-bold text-white mb-6 font-['MiSans'] shrink-0">
            1. 团队增加了懂品牌定位的人
          </h3>
          
          <div className="flex-1 flex items-end justify-start pl-10">
            {/* Booklet Mockup */}
            <div className="relative w-[480px] h-[580px]">
              
              {/* Layer 3: Backing Board - Offset right/bottom */}
              <div className="absolute left-[24px] top-[16px] w-[420px] h-[560px] bg-[#1d1d22] rounded-r-2xl rounded-l-md shadow-2xl border border-zinc-900/50" />
              
              {/* Layer 2: White Paper Page - Offset right/bottom */}
              <div className="absolute left-[12px] top-[8px] w-[420px] h-[560px] bg-white rounded-r-2xl rounded-l-md shadow-lg" />
              
              {/* Layer 1: Front Cover (Blue) */}
              <div className="absolute left-0 top-0 w-[420px] h-[560px] bg-[#004CE5] rounded-r-2xl rounded-l-sm shadow-[4px_8px_30px_rgba(0,0,0,0.55)] p-12 flex flex-col justify-between overflow-hidden">
                
                {/* Vertical Crease Line Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-[28px] bg-black/12 border-r border-black/8" />
                
                {/* Left Edge Binder Holes */}
                <div className="absolute left-[-7px] top-[130px] w-3.5 h-3.5 rounded-full bg-[#020617] shadow-inner" />
                <div className="absolute left-[-7px] bottom-[130px] w-3.5 h-3.5 rounded-full bg-[#020617] shadow-inner" />
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between pl-8 relative z-10 h-full">
                  
                  {/* Top-aligned Area: Date & Title */}
                  <div className="flex flex-col justify-start">
                    <div className="text-[18px] text-blue-200/80 font-bold tracking-wider font-sans">
                      22 Sep, 2025
                    </div>
                    
                    <div className="mt-8 space-y-2">
                      <h4 className="text-[42px] font-black text-white leading-tight font-sans tracking-wide">
                        创维电视
                      </h4>
                      <h4 className="text-[34px] font-bold text-blue-100 leading-snug font-sans tracking-wide">
                        品牌调研报告
                      </h4>
                    </div>
                  </div>
                  
                  {/* Bottom-aligned Area: Authors */}
                  <div className="text-[18px] text-blue-200/90 font-bold font-sans">
                    GEO 索引未来项目组
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ==================== 2. 右栏：大众真评用户评论分析系统 (拓宽) ==================== */}
        <div className="w-[1220px] h-full flex flex-col justify-start shrink-0">
          <h3 className="text-[32px] font-bold text-white mb-6 font-['MiSans'] shrink-0">
            2. 大众真评用户评论分析系统
          </h3>
          
          {/* Flush-fitting Large Image Slot Frame */}
          <div className="flex-1 w-full bg-black border border-white/30 rounded-[28px] overflow-hidden relative shadow-2xl">
            <img 
              src="/images/comment-analysis-system.png" 
              alt="大众真评用户评论分析系统" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0c0f] hidden">
              <svg className="w-16 h-16 text-zinc-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[16px] text-zinc-500 font-mono">请将系统运行截图放入以下路径：</span>
              <span className="text-[15px] text-zinc-400 font-mono mt-1 select-all font-semibold">
                public\images\comment-analysis-system.png
              </span>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthBrandResearch.hideHeader = true;
