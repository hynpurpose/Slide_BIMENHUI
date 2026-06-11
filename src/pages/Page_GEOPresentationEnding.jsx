import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOPresentationEnding() {
  const [qrFailed, setQrFailed] = useState(false);
  const qrImagePath = "/images/ending-qrcode.png";

  return (
    <SlideLayout
      title=""
      subtitle=""
    >
      {/* Background glowing effects */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[180px] -right-64 -bottom-64 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[160px] -left-32 -top-32 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-between relative z-10 select-none">

        {/* Left Side: Brand Copy */}
        <div className="flex flex-col justify-center items-start max-w-[1100px]">
          {/* Accent Line + Tag */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-1.5 bg-[#004CE5]" />
            <span className="text-[24px] xl:text-[26px] font-bold text-[#004CE5] tracking-widest font-mono uppercase">
              GEO INDEX FUTURE
            </span>
          </div>

          <h2 className="text-7xl xl:text-8xl font-black text-white tracking-wide mb-10 font-['AlimamaShuHeiTi'] leading-tight">
            GEO 索引未来
          </h2>

          <p className="text-[28px] xl:text-[30px] text-zinc-300 leading-relaxed font-['MiSans'] font-medium">
            「<span className="text-white font-bold">GEO 索引未来</span>」是国内头部 GEO 服务商，已经服务过
            <span className="text-[#004CE5] font-bold"> 慕思、皇家宠物食品、菜鸟物流、百度、古井贡酒、创维 </span>
            等多个行业头部客户，也是阿里、百度等平台认证的 GEO 服务商，并获得多家权威科技媒体推荐。
          </p>
        </div>

        {/* Right Side: QR Code Area (Shifted up by 30px) */}
        <div className="flex flex-col items-center justify-center mr-6 shrink-0 relative top-[-30px]">
          {/* Glassmorphism Card Container (Enlarged further) */}
          <div className="bg-zinc-950/65 border border-zinc-800/80 rounded-[32px] p-12 flex flex-col items-center justify-between shadow-[0_30px_60px_rgba(0,0,0,0.85)] w-[520px] h-[640px]">
            {/* 1:1 QR Code Frame (Enlarged further) */}
            <div className="w-[400px] h-[400px] bg-zinc-900/60 border border-zinc-800/40 rounded-2xl flex items-center justify-center overflow-hidden relative group">
              {!qrFailed ? (
                <img
                  src={qrImagePath}
                  alt="Ending QR Code"
                  className="w-full h-full object-contain p-4 bg-white"
                  onError={() => setQrFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-4 bg-zinc-950">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[#004CE5] opacity-80">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="3" height="3" rx="0.5" />
                    <rect x="18" y="18" width="3" height="3" rx="0.5" />
                    <rect x="14" y="18" width="3" height="3" rx="0.5" />
                    <rect x="18" y="14" width="3" height="3" rx="0.5" />
                  </svg>
                  <span className="text-zinc-500 font-bold text-lg font-['MiSans']">QR Code Placeholder</span>
                </div>
              )}
            </div>

            {/* Bottom Welfare Text (Enlarged further) */}
            <div className="flex flex-col items-center text-center mt-4">
              <span className="text-[30px] xl:text-[32px] font-bold text-[#ADC9FF] font-['MiSans'] leading-normal tracking-wide">
                专属福利
              </span>
              <span className="text-[22px] xl:text-[24px] text-zinc-400 font-['MiSans'] mt-2">
                为在场品牌方，提供一次免费数据诊断
              </span>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOPresentationEnding.hideHeader = true;
