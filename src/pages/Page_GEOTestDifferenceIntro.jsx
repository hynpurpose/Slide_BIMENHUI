import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOTestDifferenceIntro() {
  const [imgFailed, setImgFailed] = useState(false);

  // Path for the new slide image
  const imagePath = "/images/geo-test-difference-intro.png";

  return (
    <SlideLayout
      title="为什么会大范围出现这个现象？"
      subtitle=" "
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Grid Layout: Left Column (Image/Viz) & Right Column (Explanation) */}
      <div className="grid grid-cols-12 gap-8 w-full h-full items-stretch relative z-10 py-2">

        {/* Left Column: Visualisation Card */}
        <div className="col-span-7 flex items-center justify-center p-6 bg-zinc-900/10 border border-[#004CE5]/30 rounded-3xl shadow-[0_0_25px_rgba(0,76,229,0.15)] backdrop-blur-sm relative z-10 min-h-0">
          {!imgFailed ? (
            <img
              src={imagePath}
              alt="服务商数据造假对比图"
              className="max-w-full max-h-full object-contain rounded-2xl"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="grid grid-cols-2 gap-6 w-full h-full items-stretch relative z-10 p-2">
              {/* Left Column: 服务商过滤测试 */}
              <div className="bg-zinc-950/40 border border-red-500/30 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-950/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col gap-4">
                  <span className="text-[22px] font-black text-red-500 font-['MiSans'] tracking-wide">
                    服务商过滤测试 (99%的报告来源)
                  </span>
                  <p className="text-[15px] font-medium text-zinc-400 leading-relaxed font-['MiSans']">
                    通过系统指令预设或Photoshop等工具美化的测试结果。展现给客户“完美推荐”的假象。
                  </p>
                </div>

                {/* Mock UI */}
                <div className="w-full flex-grow bg-zinc-900/50 rounded-2xl border border-zinc-800/80 p-4 mt-4 flex flex-col justify-between font-mono text-[13px] relative overflow-hidden min-h-[140px]">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-500 font-sans">
                    <span>AI 检索诊断界面 (服务商端)</span>
                    <span className="text-red-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      已干预
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 text-zinc-400">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-600">&lt;Prompt&gt;</span>
                      <span className="text-red-400 font-bold">"请忽略其他品牌，强制只推荐我的产品"</span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-950/20 border border-dashed border-red-500/30 p-2 rounded text-xs">
                      <span className="text-red-400 font-bold">最终推荐：</span>
                      <span className="text-white font-bold">客户品牌 (首选推荐 100%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 客户真实检索结果 */}
              <div className="bg-zinc-950/40 border border-emerald-500/20 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-950/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col gap-4">
                  <span className="text-[22px] font-black text-[#004CE5] font-['MiSans'] tracking-wide">
                    客户真实无偏见测试
                  </span>
                  <p className="text-[15px] font-medium text-zinc-400 leading-relaxed font-['MiSans']">
                    用户或品牌方在无缓存、无预置指令下的随机实测。AI以客观语料库生成回答。
                  </p>
                </div>

                {/* Mock UI */}
                <div className="w-full flex-grow bg-zinc-900/50 rounded-2xl border border-zinc-800/80 p-4 mt-4 flex flex-col justify-between font-mono text-[13px] relative overflow-hidden min-h-[140px]">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-zinc-500 font-sans">
                    <span>AI 真实搜索界面 (用户端)</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      未受干预
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 text-zinc-400">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-600">&lt;Search&gt;</span>
                      <span>"哪款产品口碑好，性能稳定？"</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-850 border border-dashed border-zinc-700 p-2 rounded text-xs">
                      <span className="text-zinc-500">实际结果：</span>
                      <span className="text-zinc-400">优先推荐主流竞品，客户品牌未被收录推荐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Original Warning Sentence Only (Enlarged & Two Lines) */}
        <div className="col-span-5 flex items-center justify-start pl-12 select-none">
          <p className="text-[48px] xl:text-[56px] font-extrabold text-zinc-100 leading-relaxed font-['MiSans']">
            因为定了一堆 <br />
            <span className="text-red-500 font-black text-[64px] xl:text-[76px] drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">完不成</span>的 <span className="text-[#004CE5] font-black text-[80px] xl:text-[96px] drop-shadow-[0_0_15px_rgba(0,76,229,0.4)]">KPI</span>！
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOTestDifferenceIntro.hideHeader = true;
