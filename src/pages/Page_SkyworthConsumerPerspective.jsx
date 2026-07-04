import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthConsumerPerspective() {
  return (
    <SlideLayout title="从消费者视角重新定位">
      {/* 蓝色光晕点缀（不参与信息层级） */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#004CE5]/[0.06] blur-[140px] -left-24 top-[120px] pointer-events-none z-0" />
      <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/[0.04] blur-[100px] right-[200px] bottom-[40px] pointer-events-none z-0" />

      <div
        className="absolute w-[1840px] h-full flex flex-col justify-center select-none animate-fadeIn z-10"
        style={{ top: 0, height: '695px' }}
      >
        {/* 装饰线 */}
        <div className="w-[56px] h-[3px] bg-[#004CE5]/60 rounded-full mb-12" />

        {/* 第一层：核心前提 */}
        <p
          className="text-zinc-300 font-normal font-['MiSans'] mb-16"
          style={{ fontSize: '64px', lineHeight: '1.25' }}
        >
          AI 是中立的，<strong className="text-white font-bold">甚至更偏向用户</strong>。
        </p>

        {/* 第二层：推导与结论（合并为一段，避免拆散） */}
        <p
          className="text-zinc-300 font-normal font-['MiSans'] max-w-[1500px]"
          style={{ fontSize: '38px', lineHeight: '62px' }}
        >
          所以我们要从<strong className="text-white font-bold">消费者视角</strong>重新梳理品牌信息，
          再结合 AI 的<strong className="text-white font-bold">理解方式</strong>，
          确定品牌在 AI 里<strong className="text-white font-bold">最适合传播的定位</strong>。
        </p>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthConsumerPerspective.hideHeader = true;
