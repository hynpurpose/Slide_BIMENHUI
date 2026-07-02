import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_QuantitativeModel() {
  return (
    <SlideLayout title="">
      <div className="w-full h-full flex items-center justify-between pl-12 pr-0 select-none relative z-10">
        
        {/* Left Column: Big Number, Title & Narrative (占宽 48%) */}
        <div className="w-[800px] flex flex-col justify-center gap-6 animate-fadeIn pl-4">
          {/* Large Montserrat Number */}
          <span className="font-['Montserrat'] text-[120px] text-[#004CE5] font-black leading-none mt-2">
            02
          </span>

          {/* Large Title (H1 moved to H2 position) - Size 80px */}
          <h2 className="text-[80px] font-black text-white font-['MiSans'] tracking-wide leading-[95px] -mt-3">
            GEO量化竞争模型（Alpha模型）
          </h2>

          {/* Narration text */}
          <p className="text-zinc-300 text-[28px] font-normal leading-[48px] font-['MiSans'] text-justify mt-4 pr-10">
            今年年初启动的内部研发项目，灵感来自股票领域的<span className="text-white font-bold">量化交易</span>：
            量化交易不是靠交易员拍脑袋买股票，而是用<span className="text-white font-bold">数据和模型</span>判断机会。
            放到 GEO 里也是一样。<span className="text-white font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">我们不是简单对着监测数据做判断</span>：
            AI 喜欢引用什么文章，我们就写什么文章；哪个平台引用率高，我们就投哪个平台。
          </p>
        </div>

        {/* Right Column: Giant Illustration/Graphic (view-competitors.png) - Touches right margin */}
        <div className="flex-grow flex items-center justify-end h-full relative pr-0">
          {/* Background spotlight behind the graphic */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none z-0 right-10" />
          
          <img
            src="/capabilities/view-competitors.png"
            alt="GEO Quantitative Model Graphic"
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
Page_QuantitativeModel.hideHeader = true;
