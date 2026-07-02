import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ContentAgentIntro() {
  return (
    <SlideLayout title="">
      <div className="w-full h-full flex items-center justify-between pl-12 pr-0 select-none relative z-10">
        
        {/* Left Column: Big Number, Title & Narrative (占宽 48%) */}
        <div className="w-[800px] flex flex-col justify-center gap-6 animate-fadeIn pl-4">
          {/* Large Montserrat Number */}
          <span className="font-['Montserrat'] text-[120px] text-[#004CE5] font-black leading-none mt-2">
            03
          </span>

          {/* Large Title (H1 moved to H2 position) - Size 80px */}
          <h2 className="text-[80px] font-black text-white font-['MiSans'] tracking-wide leading-[95px] -mt-3">
            内容撰写Agent
          </h2>

          {/* Narration text */}
          <p className="text-zinc-300 text-[28px] font-normal leading-[48px] font-['MiSans'] text-justify mt-4 pr-10">
            基于<span className="text-white font-bold">GEO数据监测</span>与用户真实反馈，按统一口径生成并持续优化内容，
            确保输出内容<span className="text-white font-bold">结构稳定、信息可核验、目标明确</span>，
            使内容更符合生成式引擎的<span className="text-white font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">引用与推荐逻辑</span>。
          </p>
        </div>

        {/* Right Column: Giant Illustration/Graphic (generator-2.png) - Touches right margin */}
        <div className="flex-grow flex items-center justify-end h-full relative pr-0">
          {/* Background spotlight behind the graphic */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none z-0 right-10" />
          
          <img
            src="/capabilities/generator-2.png"
            alt="GEO Content Agent Graphic"
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
Page_ContentAgentIntro.hideHeader = true;
