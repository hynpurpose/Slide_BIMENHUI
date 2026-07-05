import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ContentQualityValue() {
  const timeTicks = [
    { label: '发布期', x: '5%' },
    { label: '15天', x: '22%' },
    { label: '1个月', x: '40%' },
    { label: '3个月', x: '60%' },
    { label: '6个月', x: '78%' },
    { label: '12个月', x: '95%' }
  ];

  return (
    <SlideLayout title="用人写的好处和坏处">
      {/* ── 主排版区 (高度拉伸至 795px，两栏结构，gap 24px) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex gap-6"
        style={{ top: '0px', height: '795px' }}
      >
        {/* ==================== 左栏：好处 (占 2/3, 统一的大框) ==================== */}
        <div className="w-[1210px] h-full bg-zinc-955/40 backdrop-blur-md rounded-[32px] p-9 flex flex-col justify-between border border-white/40 shadow-md shrink-0">

          {/* 顶部好处统一标识 */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="px-5 py-1.5 rounded-full text-[24px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-['MiSans']">
              好处
            </span>
          </div>

          {/* 1. 文章保质期长 */}
          <div className="flex flex-col mt-4">
            <h3 className="text-[42px] font-black text-white font-['MiSans'] mb-3">
              1. 文章保质期长
            </h3>

            {/* 简化版时间轴图表 (框高 260px) */}
            <div className="relative w-full h-[260px] bg-black/60 border border-zinc-800/80 rounded-2xl p-4 overflow-hidden">
              {/* 刻度背景虚线 */}
              <div className="absolute inset-0 flex justify-between px-8 pointer-events-none">
                {timeTicks.map((tick, i) => (
                  <div key={i} className="h-full border-r border-dashed border-zinc-800/30" style={{ left: tick.x, position: 'absolute' }} />
                ))}
              </div>

              {/* 刻度文字 */}
              <div className="absolute left-0 right-0 top-2.5 px-8 flex justify-between pointer-events-none">
                {timeTicks.map((tick, i) => (
                  <span key={i} className="text-[20px] font-black text-zinc-400 font-sans whitespace-nowrap" style={{ left: tick.x, position: 'absolute', transform: 'translateX(-50%)' }}>
                    {tick.label}
                  </span>
                ))}
              </div>

              {/* Lifespan Bars (在 260px 高度下 top-75 显得极其宽敞美观) */}
              <div className="absolute left-8 right-8 top-[75px] bottom-3 flex flex-col justify-around">
                {/* AI创作文章 */}
                <div className="relative flex items-center">
                  <div className="w-[22%] h-[42px] bg-zinc-700/80 border border-zinc-650 rounded-full flex items-center justify-between px-5 shadow-sm">
                    <span className="text-[18px] font-black text-zinc-300">AI 创作文章</span>
                    <span className="text-[14px] font-black text-zinc-400 bg-zinc-855 px-3 py-0.5 rounded-full shrink-0">15天内</span>
                  </div>
                  <span className="text-[20px] text-zinc-500 font-black ml-6">15天后开始失效</span>
                </div>

                {/* 人工创作文章 */}
                <div className="relative flex items-center">
                  <div
                    className="w-[90%] h-[44px] rounded-full flex items-center justify-between px-7 shadow-lg border border-teal-500/20"
                    style={{ background: 'linear-gradient(to right, #004CE5 0%, #0D9488 100%)' }}
                  >
                    <span className="text-[20px] font-black text-white">人工创作文章</span>
                    <span className="text-[16px] font-black text-white bg-white/20 px-4 py-1 rounded-full shrink-0">6个月+ 持续被大模型高频引用</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 居中横向分割线 */}
          <div className="w-full h-[1px] bg-zinc-800/50 my-4 shrink-0" />

          {/* 2. 一文两用 */}
          <div className="flex flex-col mb-2">
            <h3 className="text-[42px] font-black text-white font-['MiSans'] mb-3">
              2. 一文两用
            </h3>

            {/* 渠道双重效应图解 */}
            <div className="flex items-stretch justify-between gap-6">
              {/* GEO 搜索侧 */}
              <div className="flex-1 bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="px-4 py-1 rounded text-[18px] font-black bg-blue-500/20 text-blue-300 border border-blue-500/30 inline-block">
                    GEO 搜索侧
                  </span>
                  <h4 className="text-[28px] font-black text-white font-['MiSans'] mt-3 leading-tight">
                    面向 AI 引擎：获取高频引用
                  </h4>
                </div>
                <p className="text-[22px] font-black text-white mt-4 font-['MiSans']">
                  沉淀为长期的搜索引用流量资产
                </p>
              </div>

              {/* 连接加号 */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <span className="text-[32px] text-zinc-600 font-black">+</span>
              </div>

              {/* 传统公关侧 */}
              <div className="flex-1 bg-teal-500/5 border border-teal-500/20 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="px-4 py-1 rounded text-[18px] font-black bg-teal-500/20 text-teal-300 border border-teal-500/30 inline-block">
                    传统公关侧
                  </span>
                  <h4 className="text-[28px] font-black text-white font-['MiSans'] mt-3 leading-tight">
                    面向真人阅读：带来社媒种草
                  </h4>
                </div>
                <p className="text-[22px] font-black text-white mt-4 font-['MiSans']">
                  直接节省并替代独立的传统 PR 预算
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 右栏：成本增加 (坏处 - 占 1/3) ==================== */}
        <div className="w-[606px] h-full bg-red-955/10 backdrop-blur-md rounded-[32px] p-9 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/20 shrink-0">
          <div className="flex flex-col gap-2">
            <span className="px-5 py-1.5 rounded-full text-[18px] font-black text-red-400 bg-red-500/10 border border-red-500/20 self-start font-['MiSans']">
              坏处
            </span>
            <h3 className="text-[46px] font-black text-white font-['MiSans'] leading-tight mt-3">
              单篇内容成本剧增
            </h3>
          </div>

          {/* 成本对比 */}
          <div className="flex flex-col gap-6 my-auto">
            {/* 1. Agent成本 */}
            <div className="flex items-center justify-between bg-zinc-900/40 border border-zinc-800 rounded-2xl p-7">
              <span className="text-[22px] text-zinc-300 font-black font-['MiSans']">Agent 创作成本</span>
              <span className="text-[32px] font-black text-zinc-400 font-sans">约 ¥ 3 / 篇</span>
            </div>

            {/* 2. 人工成本 */}
            <div className="flex items-center justify-between bg-red-500/5 border border-red-500/25 rounded-2xl p-7 shadow-[0_0_15px_rgba(239,68,68,0.05)]">
              <span className="text-[22px] text-red-300 font-black font-['MiSans']">人工创作成本</span>
              <span className="text-[32px] font-black text-red-400 font-sans">约 ¥ 300 / 篇</span>
            </div>
          </div>

          {/* 成本涨幅痛点提示 */}
          <div className="w-full rounded-2xl bg-red-500/10 border border-red-500/20 p-9 flex items-center justify-center">
            <div className="flex items-baseline gap-3">
              <span className="text-[26px] font-black text-white font-['MiSans']">单篇制作成本相差</span>
              <span className="text-[66px] font-black text-red-500 font-sans leading-none">100倍</span>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ContentQualityValue.hideHeader = true;
