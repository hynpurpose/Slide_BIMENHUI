import React, { useState, useRef } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOTestDifference() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <SlideLayout
      title={
        <>
          为什么服务商的测试结果跟你实测差异很大？
        </>
      }
      subtitle="数据造假的真相"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Two-Column Grid Layout */}
      <div className="w-full h-full flex items-stretch relative z-10 select-none">
        
        {/* Left Column: Warning Banner only (Centered Vertically) */}
        <div className="w-[980px] flex flex-col justify-center pr-16">
          <div className="w-full flex justify-start">
            <p className="text-[40px] xl:text-[46px] font-extrabold text-zinc-100 leading-snug font-['MiSans'] whitespace-nowrap">
              因为 <span className="text-[#004CE5] font-black text-[62px] xl:text-[70px] mx-1 drop-shadow-[0_0_15px_rgba(0,76,229,0.4)]">90%</span> 的服务商都在<span className="text-red-500 font-black text-[52px] xl:text-[60px] mx-1 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">数据造假</span>！
            </p>
          </div>
        </div>

        {/* Right Column: Mobile Video Frame (starts at Top Guide: top-[-145px], ends at Content Bottom: bottom-0) */}
        <div className="w-[860px] flex items-stretch justify-start relative">
          
          {/* Smartphone mockup */}
          <div className="absolute top-[-145px] bottom-0 w-[425px] left-[80px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[48px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
            
            {/* Notch / Punch hole */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-zinc-900 border border-zinc-800/80 ml-auto mr-4" />
            </div>

            {/* Screen Content Container */}
            <div 
              className="absolute inset-0 z-10 w-full h-full bg-black cursor-pointer"
              onClick={togglePlay}
            >
              {!videoFailed ? (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    src="/videos/geo-test-difference.mp4"
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onError={() => setVideoFailed(true)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 border border-white/40 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110">
                        <span className="text-white text-3xl pl-1">▶</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black p-8 text-center select-none">
                  <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 animate-pulse">
                    <span className="text-[#004CE5] text-4xl">▶</span>
                  </div>
                  <span className="text-zinc-400 font-bold text-2xl font-['MiSans'] mb-2">实测演示录屏</span>
                  <span className="text-zinc-600 text-[16px]">MP4 视频占位符</span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOTestDifference.hideHeader = true;
