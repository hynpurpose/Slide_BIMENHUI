import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoMonitorIntro() {
  return (
    <SlideLayout title="">
      <div className="w-full h-full flex items-center justify-between pl-12 pr-0 select-none relative z-10">

        {/* Left Column: Big Number, Title & Narrative (占宽 48%) */}
        <div className="w-[800px] flex flex-col justify-center gap-6 animate-fadeIn pl-4">
          {/* Large Montserrat Number */}
          <span className="font-['Montserrat'] text-[120px] text-[#004CE5] font-black leading-none mt-2">
            01
          </span>

          {/* Large Title (H1 moved to H2 position) - Size 80px */}
          <h2 className="text-[80px] font-black text-white font-['MiSans'] tracking-wide leading-[95px] -mt-3">
            GEO ONE<br />数据监测系统
          </h2>

          {/* Narration text */}
          <p className="text-zinc-300 text-[28px] font-normal leading-[48px] font-['MiSans'] text-justify mt-4 pr-10">
            耗时一年研发，它就是我们开展 GEO 业务的眼睛，
            <span className="text-white font-bold">提及率</span>、
            <span className="text-white font-bold">竞品情况</span>、
            <span className="text-white font-bold">引用来源</span>，品牌正负面查询都得靠它。
          </p>
        </div>

        {/* Right Column: Giant Circular Network Graphic (monitor-detail.png) */}
        <div className="flex-grow flex items-center justify-end h-full relative pr-0">
          {/* Background spotlight behind the graphic */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none z-0 right-10" />

          <img
            src="/capabilities/monitor-detail.png"
            alt="GEO Monitor System Graphic"
            className="w-[880px] h-[720px] object-contain z-10 animate-fadeIn"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable standard header
Page_GeoMonitorIntro.hideHeader = true;
