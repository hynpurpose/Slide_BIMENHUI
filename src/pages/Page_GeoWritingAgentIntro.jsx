import React from 'react';
import SlideLayout from '../components/SlideLayout';
import VideoFrame from '../components/VideoFrame';

const VIDEO_SRC = '/videos/content-agent-demo.mp4';

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

        {/* ==================== 右栏：系统运行演示视频 ==================== */}
        {/* 视频实际显示比例 ≈1.722（非方形像素），按满高 795px 配宽 1369px，不裁切画面 */}
        <div className="w-[1413px] h-full shrink-0 flex justify-center">
          <div className="w-[1369px] h-full">
            <VideoFrame src={VIDEO_SRC} radius={32} />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GeoWritingAgentIntro.hideHeader = true;
