import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOTestDifferenceQuestion() {
  const [imgFailed, setImgFailed] = useState(false); // Initialize as false to allow loading the image

  // Path for the comparison screenshot
  const imagePath = "/images/geo-test-difference-compare.png";

  return (
    <SlideLayout
      title="GEO 行业的原罪—数据造假"
      subtitle="服务商汇报的“对话截图”"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-start relative z-10">
        <div className="relative w-full h-[775px]">

          {/* Left Text Box */}
          <div className="absolute left-[40px] w-[800px] top-[20px] bottom-[20px] z-20 flex flex-col justify-center">
            <div className="bg-zinc-950/45 border border-zinc-800/80 backdrop-blur-md rounded-3xl p-12 flex flex-col justify-center relative overflow-hidden h-[650px] shadow-2xl">
              {/* Quotation mark decoration */}
              <div className="absolute top-6 left-8 text-zinc-800/20 text-[180px] font-serif leading-none select-none pointer-events-none">
                “
              </div>

              <div className="relative z-10 flex flex-col pl-8 pr-4">
                <p className="text-[34px] xl:text-[38px] leading-[1.8] text-zinc-200 font-medium font-['MiSans']">
                  你看这些数据里都有 AI 平台的对话原图，这总该是真的吧？
                </p>
                <div className="h-8" />
                <p className="text-[34px] xl:text-[38px] leading-[1.8] text-zinc-200 font-medium font-['MiSans']">
                  可为什么我和同事自己拿手机去问，就是看不到我们的品牌？
                </p>
              </div>

              <div className="absolute bottom-4 right-8 text-zinc-800/20 text-[180px] font-serif leading-none select-none pointer-events-none">
                ”
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="absolute left-[900px] w-[900px] top-[-145px] bottom-0 z-20 flex items-center justify-center">
            {!imgFailed ? (
              <img
                src={imagePath}
                alt="AI平台对话截图与真实对比"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-3xl border border-zinc-800/60 bg-zinc-950/40 p-2 shadow-2xl"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/10 border border-dashed border-zinc-800 rounded-3xl p-8 gap-4 select-none">
                <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                <span className="text-zinc-550 font-bold text-2xl font-['MiSans']">
                  [ AI平台对话原图 与 真实检索对照截图位 ]
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOTestDifferenceQuestion.hideHeader = true;
