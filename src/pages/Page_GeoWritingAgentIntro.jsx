import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoWritingAgentIntro() {
  return (
    <SlideLayout title="我们开发的内容Agent系统">
      {/* ── 主排版容器 (总高度 795px，抵满 content bottom) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex gap-6"
        style={{ top: '0px', height: '795px' }}
      >
        {/* ==================== 左栏：Agent 介绍 + 意向区块 ==================== */}
        <div className="w-[403px] h-full bg-zinc-955/40 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-zinc-900/40 shrink-0">
          {/* 标题区 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[42px] font-black text-white font-['MiSans'] leading-[1.25]">
              基于谷歌<br />
              NotebookLM<br />
              开发
            </h2>

            {/* 说明文字 */}
            <p className="text-zinc-300 text-[24px] font-medium leading-[44px] font-['MiSans'] text-justify mt-4">
              内部基于国外爆火的内容整理模型
              <span className="text-white font-bold">谷歌NotebookLM </span>
              为底座，独立研发的一套
              <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-[6px]">
                专门服务于 GEO 内容写作
              </span>
              的 Agent。右侧为系统实际运行演示。
            </p>
          </div>

          {/* 客户意向区块 */}
          <div className="w-full rounded-2xl bg-emerald-500/10 border border-emerald-500/35 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center">
            <p className="text-white text-[28px] font-black leading-relaxed font-['MiSans'] text-center">
              多个客户明确提出<br />
              单独购买及部署意愿
            </p>
          </div>
        </div>

        {/* ==================== 右栏：16:9 视频位 (留空 - 抵满 content top 和 bottom) ==================== */}
        <div className="w-[1413px] h-full rounded-[32px] bg-black/60 border border-zinc-800/80 flex flex-col items-center justify-center gap-4 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] shrink-0">
          {/* 网格底纹 */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* 光晕 */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

          {/* 极简指示标记 */}
          <div className="flex flex-col items-center gap-3 select-none z-10 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
              <line x1="7" y1="2" x2="7" y2="22" />
              <line x1="17" y1="2" x2="17" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="2" y1="7" x2="7" y2="7" />
              <line x1="2" y1="17" x2="7" y2="17" />
              <line x1="17" y1="17" x2="22" y2="17" />
              <line x1="17" y1="7" x2="22" y2="7" />
            </svg>
            <span className="text-[20px] font-black text-zinc-500 font-['MiSans'] tracking-widest">
              16:9 演示视频预留位
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GeoWritingAgentIntro.hideHeader = true;
