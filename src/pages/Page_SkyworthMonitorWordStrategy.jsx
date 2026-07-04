import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthMonitorWordStrategy() {
  return (
    <SlideLayout title="监测词：守住底线">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '24px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-10"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          监测词用于守底线：<strong className="text-white font-bold">负面信息 10% 是红线</strong>。
        </p>

        {/* 阈值可视化 */}
        <div className="shrink-0 mb-12 flex flex-col gap-4">
          {/* 进度条与霓虹红线 */}
          <div className="relative w-full h-[76px] bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center overflow-visible shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
            {/* 0% - 10% 安全填充 */}
            <div className="h-full flex items-center pl-8 bg-emerald-950/20" style={{ width: '33.33%' }}>
              <span className="text-[26px] text-emerald-400/80 font-black font-['MiSans']">正常范围</span>
            </div>
            {/* 10% - 30% 警报填充 */}
            <div className="h-full flex items-center pl-8 flex-1 bg-gradient-to-r from-red-950/45 via-red-950/15 to-transparent">
              <span className="text-[26px] text-red-500 font-black font-['MiSans']">超出红线 · 立即干预</span>
            </div>

            {/* 10% 危机红线 刻度线 (贯穿整条，带红色霓虹光晕) */}
            <div className="absolute top-[-10px] bottom-[-10px] z-20 flex flex-col items-center" style={{ left: '33.33%' }}>
              {/* 顶部指示牌 */}
              <div className="absolute -top-[36px] bg-red-600 text-white text-[16px] font-black px-3.5 py-1 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.8)] font-['MiSans'] tracking-wider">
                10% 报警红线
              </div>
              {/* 红色发光线条 */}
              <div className="w-[4px] h-full bg-red-500 shadow-[0_0_15px_#ef4444,0_0_5px_#ef4444] rounded-full" />
              {/* 底部三角形指示符 */}
              <div className="absolute -bottom-[20px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-red-500" />
            </div>
          </div>

          {/* 底部刻度尺轴 */}
          <div className="relative w-full h-8 px-1">
            <div className="absolute flex justify-between w-full text-[18px] text-zinc-500 font-bold font-sans">
              <span style={{ left: '0%', transform: 'translateX(-50%)' }} className="absolute">0%</span>
              <span style={{ left: '16.67%', transform: 'translateX(-50%)' }} className="absolute">5%</span>
              <span style={{ left: '33.33%', transform: 'translateX(-50%)' }} className="absolute text-red-500 font-black">10% (红线)</span>
              <span style={{ left: '50.0%', transform: 'translateX(-50%)' }} className="absolute">15%</span>
              <span style={{ left: '66.67%', transform: 'translateX(-50%)' }} className="absolute">20%</span>
              <span style={{ left: '83.33%', transform: 'translateX(-50%)' }} className="absolute">25%</span>
              <span style={{ left: '100%', transform: 'translateX(-100%)' }} className="absolute">30%</span>
            </div>
          </div>
        </div>

        {/* 处理路径 */}
        <div className="flex-1 min-h-0 flex flex-col">
          <p className="text-[26px] text-zinc-400 font-['MiSans'] shrink-0 mb-6">
            超线后，先<strong className="text-white font-bold">定位到具体是哪篇文章</strong>在影响，再分两类处理：
          </p>

          <div className="flex-1 grid grid-cols-2 gap-10">
            {/* 恶意虚假信息 */}
            <div className="rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 p-11 flex flex-col justify-center">
              <span className="text-[26px] text-zinc-500 font-bold font-['MiSans'] mb-4">类型 01</span>
              <h3 className="text-[42px] font-black text-white font-['MiSans'] leading-tight mb-6">恶意 / 虚假信息</h3>
              <p className="text-[28px] text-zinc-400 leading-[46px] font-['MiSans'] font-medium">
                走平台<strong className="text-white font-bold">投诉</strong>流程，大部分可直接清除。
              </p>
            </div>

            {/* 真实问题 */}
            <div className="rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 p-11 flex flex-col justify-center">
              <span className="text-[26px] text-zinc-500 font-bold font-['MiSans'] mb-4">类型 02</span>
              <h3 className="text-[42px] font-black text-white font-['MiSans'] leading-tight mb-6">真实存在的问题</h3>
              <p className="text-[28px] text-zinc-400 leading-[46px] font-['MiSans'] font-medium">
                联合<strong className="text-white font-bold">品牌公关</strong>协商解决，必要时借助媒体手段，视具体情况而定。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthMonitorWordStrategy.hideHeader = true;
