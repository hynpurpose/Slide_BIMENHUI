import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_UserCommentAnalysis() {
  return (
    <SlideLayout title="">
      <div className="w-full h-full flex items-center justify-between pl-12 pr-0 select-none relative z-10">
        
        {/* Left Column: Big Number, Title & Narrative (占宽 48%) */}
        <div className="w-[800px] flex flex-col justify-center gap-6 animate-fadeIn pl-4">
          {/* Large Montserrat Number */}
          <span className="font-['Montserrat'] text-[120px] text-[#004CE5] font-black leading-none mt-2">
            04
          </span>

          {/* Large Title (H1 moved to H2 position) - Size 80px */}
          <h2 className="text-[80px] font-black text-white font-['MiSans'] tracking-wide leading-[95px] -mt-3">
            用户评论分析系统
          </h2>

          {/* Narration text */}
          <p className="text-zinc-300 text-[28px] font-normal leading-[48px] font-['MiSans'] text-justify mt-4 pr-10">
            通过自研<span className="text-white font-bold">用户真评引擎</span>，跨平台采集并解析真实用户评论，去除噪声与异常数据，
            将分散、碎片化的用户反馈转化为<span className="text-white font-bold">结构化洞察</span>，
            准确还原用户真实认知与关注重点，为品牌判断内容方向与产品问题提供<span className="text-white font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">可靠依据</span>。
          </p>
        </div>

        {/* Right Column: Giant Illustration/Graphic (view-sentiment.png) - Touches right margin */}
        <div className="flex-grow flex items-center justify-end h-full relative pr-0">
          {/* Background spotlight behind the graphic */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none z-0 right-10" />
          
          <img
            src="/capabilities/view-sentiment.png"
            alt="GEO User Comment Analysis Graphic"
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
Page_UserCommentAnalysis.hideHeader = true;
