import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesFeedback() {
  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="线下销售反馈的真实现象"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Middle Section: Two Columns Card Layout */}
      <div className="w-full h-full grid grid-cols-2 gap-10 items-stretch relative z-10">

        {/* Card 1 (Left - Electric Blue background with white text) */}
        <div className="bg-[#1b43e3] rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden shadow-[0_15px_40px_rgba(27,67,227,0.15)] border border-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          
          {/* Top part: H4 and Description */}
          <div className="flex flex-col gap-10">
            <h4 className="text-3xl xl:text-4xl font-extrabold text-white/90 font-['MiSans'] tracking-wide border-b border-white/10 pb-4">
              来店前
            </h4>
            <p className="text-2xl xl:text-3xl font-bold text-white font-['MiSans'] leading-relaxed">
              大概有 <span className="text-[#a5b4fc] font-black underline decoration-indigo-450 underline-offset-8">20% 左右</span> 的到店客户，在来店之前已经先问过 AI、查过相关信息。
            </p>
          </div>
          
          {/* Bottom part: Giant statement in AlimamaShuHeiTi */}
          <div className="text-5xl xl:text-6xl font-black text-white font-['AlimamaShuHeiTi'] tracking-wide leading-tight select-none">
            20%的客户来自AI
          </div>
        </div>

        {/* Card 2 (Right - Pure White background with dark slate text) */}
        <div className="bg-white rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden shadow-[0_15px_40px_rgba(255,255,255,0.05)] border border-zinc-200">
          
          {/* Top part: H4 and Description */}
          <div className="flex flex-col gap-10">
            <h4 className="text-3xl xl:text-4xl font-bold text-zinc-500 font-['MiSans'] tracking-wide border-b border-zinc-200 pb-4">
              来店后
            </h4>
            <p className="text-2xl xl:text-3xl font-bold text-zinc-850 font-['MiSans'] leading-relaxed">
              顾客到了门店之后，会当着销售的面直接用 <span className="text-[#1b43e3] font-black underline decoration-blue-500 underline-offset-8">豆包等AI搜索</span>：这款产品最低价多少钱、评价怎么样、有没有坑等问题。
            </p>
          </div>
          
          {/* Bottom part: Giant statement in AlimamaShuHeiTi (Enlarged) */}
          <div className="text-5xl xl:text-6xl font-black text-zinc-950 font-['AlimamaShuHeiTi'] tracking-wide leading-tight select-none">
            销售变得可有可无
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesFeedback.hideHeader = true;
