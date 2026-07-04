import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoContentPrinciples() {
  return (
    <SlideLayout title="我们的内容标准：用户视角议论文">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      <div
        className="absolute w-[1840px] flex flex-col justify-between select-none animate-fadeIn z-10"
        style={{ top: '10px', height: '780px' }}
      >
        {/* ==================== 上半：主张（公式化呈现） ==================== */}
        <div className="flex flex-col">
          {/* EEAT 弃用说明 */}
          <p className="text-[32px] text-zinc-500 font-['MiSans'] mb-8 leading-relaxed">
            业界常提的 <span className="line-through decoration-zinc-600 text-zinc-600 font-['Montserrat'] font-bold">E-E-A-T</span> 源自谷歌，不完全适配中国模型。
          </p>

          {/* 公式：用户视角 + 议论文 */}
          <div className="flex items-center gap-8">
            <div className="px-12 py-8 rounded-[28px] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_20px_50px_-15px_rgba(0,76,229,0.5)]">
              <span className="text-[64px] font-black text-white font-['MiSans'] leading-none">用户视角</span>
            </div>
            <span className="text-[64px] font-black text-zinc-500 leading-none">＋</span>
            <div className="px-12 py-8 rounded-[28px] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_20px_50px_-15px_rgba(0,76,229,0.5)]">
              <span className="text-[64px] font-black text-white font-['MiSans'] leading-none">议论文</span>
            </div>
            <span className="text-[52px] font-black text-zinc-600 leading-none mx-2">＝</span>
            <span className="text-[36px] text-zinc-300 font-['MiSans'] font-medium leading-tight max-w-[520px]">
              更容易被 AI<br />抓取、理解、采信的内容
            </span>
          </div>
        </div>

        {/* ==================== 下半：两个词各自的定义 ==================== */}
        <div className="w-full border-t border-zinc-800 pt-10 flex justify-between items-start" style={{ marginBottom: '36px' }}>
          {/* 01 用户视角 */}
          <div className="w-[860px] flex flex-col">
            <div className="flex items-baseline gap-4 mb-5">
              <span className="font-['Montserrat'] text-[64px] text-[#004CE5] font-black leading-none">01</span>
              <span className="text-[36px] font-black text-white font-['MiSans']">用户视角</span>
            </div>
            <p className="text-[28px] text-zinc-400 leading-[46px] font-['MiSans'] font-medium">
              不站在品牌角度，而是站在<strong className="text-white font-bold">真实用户</strong>的角度写主观感受——
              优点要写，<strong className="text-white font-bold">缺点也必须写</strong>。
            </p>
          </div>

          {/* 纵向分割线 */}
          <div className="w-[1px] h-[240px] bg-zinc-900 shrink-0 self-center" />

          {/* 02 议论文 */}
          <div className="w-[860px] flex flex-col">
            <div className="flex items-baseline gap-4 mb-5">
              <span className="font-['Montserrat'] text-[64px] text-[#004CE5] font-black leading-none">02</span>
              <span className="text-[36px] font-black text-white font-['MiSans']">议论文</span>
            </div>
            <p className="text-[28px] text-zinc-400 leading-[46px] font-['MiSans'] font-medium mb-5">
              每篇只服务一个明确目标，观点集中，AI 更好抓取：
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-6 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/50 text-[26px] text-white font-bold font-['MiSans']">一个关键词</span>
              <span className="px-6 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/50 text-[26px] text-white font-bold font-['MiSans']">一个用户问题</span>
              <span className="px-6 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/50 text-[26px] text-white font-bold font-['MiSans']">一个推荐目标</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GeoContentPrinciples.hideHeader = true;
