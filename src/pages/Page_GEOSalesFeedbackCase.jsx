import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOSalesFeedbackCase() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="线下销售反馈"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[130px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-start relative z-10">
        <div className="relative w-full h-[775px]">

          {/* Left Image Container */}
          <div className="absolute left-[40px] w-[580px] top-[20px] h-[735px] z-20 flex items-center justify-center">
            {!imgFailed ? (
              <img
                src="/images/geo-sales-feedback.png"
                alt="销售反馈案例截图"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-3xl border border-zinc-800/60 bg-zinc-950/40 p-2 shadow-2xl"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/10 border border-dashed border-zinc-800 rounded-3xl p-8 gap-4 select-none">
                <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                <span className="text-zinc-500 font-bold text-2xl font-['MiSans']">
                  [ 销售反馈案例截图 ]
                </span>
              </div>
            )}
          </div>

          {/* Connection Line from Screenshot Callout */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 1840 775">
            {/* Pulse dot on the image (assumed bubble location) */}
            <circle cx="480" cy="280" r="5" fill="#00C8FE" />
            
            {/* Callout Line (No animations) */}
            <path
              d="M 480 280 L 600 280 L 650 387.5 L 700 387.5"
              stroke="#00C8FE"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.8"
            />
          </svg>

          {/* Right Text Feedback Detail Box */}
          <div className="absolute left-[700px] w-[1100px] top-[20px] h-[735px] z-20 flex flex-col justify-center">
            <div className="bg-zinc-950/45 border border-zinc-800/80 backdrop-blur-md rounded-3xl p-12 flex flex-col justify-center relative overflow-hidden h-[650px] shadow-2xl">
              {/* Quotation mark decoration */}
              <div className="absolute top-6 left-8 text-blue-500/20 text-[140px] font-serif leading-none select-none pointer-events-none">
                “
              </div>
              
              <div className="relative z-10 flex flex-col gap-8 pl-8 pr-4">
                <p className="text-[30px] leading-[1.8] text-zinc-200 font-medium font-['MiSans']">
                  门店普遍反馈，目前客户非常相信豆包的推荐及建议。
                </p>
                <p className="text-[30px] leading-[1.8] text-zinc-200 font-medium font-['MiSans']">
                  到了谈价环节，客户也会先咨询豆包，客户看了豆包会直接杀到5折6折，个别型号豆包给价格给的过低，客户听了我们的报价直接离开。
                </p>
                <p className="text-[30px] leading-[1.8] text-zinc-200 font-medium font-['MiSans']">
                  情况我们先跟你们同步一下，后面合作我们会整理加入热卖款和价格相关，增加权益，可能会另外再走一份合同。
                </p>
              </div>
              
              <div className="absolute bottom-4 right-8 text-blue-500/20 text-[140px] font-serif leading-none select-none pointer-events-none">
                ”
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesFeedbackCase.hideHeader = true;
