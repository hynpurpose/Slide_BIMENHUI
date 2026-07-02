import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoContentPrinciples() {
  return (
    <SlideLayout title="内容撰写原则">
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* ── 主排版区 (左右双立柱大卡片，高度拉伸至 705px) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between z-10"
        style={{ top: '90px', height: '705px' }}
      >

        {/* ==================== 左侧：原则一 (中立视角) ==================== */}
        <div
          className="relative w-[880px] h-full bg-gradient-to-br from-[#004CE5] via-[#003cb8] to-[#0B0C10] border border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(0,76,229,0.45)] rounded-[32px] p-16 flex flex-col justify-start"
        >
          {/* Number */}
          <div className="mb-10">
            <span className="text-[80px] font-black font-['Montserrat'] tracking-tight block leading-none text-white opacity-90">
              01
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[48px] font-black text-white tracking-wide leading-tight mt-2 font-['MiSans']">
            中立视角，避免自夸
          </h3>

          {/* Description (大字号，信息极简) */}
          <p className="text-[28px] text-white/95 leading-relaxed font-sans font-medium mt-8 pr-12">
            文风要中立、客观，可以讲优势，也可以讲短板。<br />
            大模型有事实校验机制，中立客观的内容更容易被 AI 算法采信。
          </p>
        </div>

        {/* ==================== 右侧：原则二 (结构化排版) ==================== */}
        <div
          className="relative w-[880px] h-full bg-gradient-to-br from-[#004CE5] via-[#003cb8] to-[#0B0C10] border border-blue-500/30 shadow-[0_30px_60px_-15px_rgba(0,76,229,0.45)] rounded-[32px] p-16 flex flex-col justify-start"
        >
          {/* Number */}
          <div className="mb-10">
            <span className="text-[80px] font-black font-['Montserrat'] tracking-tight block leading-none text-white opacity-90">
              02
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[48px] font-black text-white tracking-wide leading-tight mt-2 font-['MiSans']">
            结构化排版，AI友好
          </h3>

          {/* Description (大字号，信息极简) */}
          <p className="text-[28px] text-white/95 leading-relaxed font-sans font-medium mt-8 pr-12">
            标题、段落、参数都要非常清楚，不能散乱。<br />
            清晰的架构能保证 AI 检索和提取时快速抓取重点。
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GeoContentPrinciples.hideHeader = true;
