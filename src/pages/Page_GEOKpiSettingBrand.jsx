import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOKpiSettingBrand() {
  return (
    <SlideLayout
      title="品牌方怎么定 KPI？"
      subtitle="行业二线品牌该怎么设定？"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 2-Column Equal Layout (Left: Image, Right: 2x2 Grid) */}
      <div className="w-full h-full grid grid-cols-2 gap-0 relative z-10 select-none items-stretch border border-zinc-800/80">

        {/* Left Column: Image (Top) + Goal Text (Bottom) */}
        <div className="w-full h-full flex flex-col justify-between items-stretch bg-black overflow-hidden border-r border-zinc-800/80">
          {/* Top: Image */}
          <div className="flex-1 w-full overflow-hidden flex items-start">
            <img
              src="/images/geo-kpi-current.png"
              alt="自身品牌 GEO 诊断报告"
              className="w-full h-auto block rounded-none"
            />
          </div>

          {/* Bottom: Goal Text Block */}
          <div className="bg-[#08080a] p-10 border-t border-zinc-800/60 flex flex-col justify-center shrink-0">
            <div className="flex items-center gap-2.5 text-[#ADC9FF] text-[24px] xl:text-[26px] font-black tracking-wide mb-4">
              <div className="w-3 h-3 bg-[#004CE5]" />
              理想目标：
            </div>
            <ul className="space-y-4 text-[20px] xl:text-[22px] text-zinc-300 font-medium leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#004CE5] mt-2 shrink-0 select-none">•</span>
                <span>提及率做到 <span className="text-white font-bold">80% 左右</span>，Top3 出现率做到 <span className="text-white font-bold">70% 左右</span></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#004CE5] mt-2 shrink-0 select-none">•</span>
                <span>紧追行业头部品牌水平，先进入 AI 的 <span className="text-white font-bold">主流推荐名单</span>，再逐步提高排名和稳定性</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: 2x2 Grid Cells */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0 h-full">
          {/* Cell 1: 提及率 */}
          <div className="bg-[#004CE5] text-white rounded-none p-10 flex flex-col justify-between shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] relative">
            <div>
              <div
                className="text-[78px] xl:text-[90px] font-black tracking-tight leading-none text-white"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                70.4%
              </div>
              <div className="text-[24px] xl:text-[26px] font-bold mt-4 tracking-wide text-white">
                提及率
              </div>
            </div>
            <p className="text-[21px] xl:text-[23px] leading-relaxed text-white/90 mt-6">
              在测试的词条中，AI回复中包含目标品牌的概率。
            </p>
          </div>

          {/* Cell 2: Top1提及率 */}
          <div className="bg-[#DDE3EE] text-zinc-900 rounded-none p-10 flex flex-col justify-between relative">
            <div>
              <div
                className="text-[78px] xl:text-[90px] font-black tracking-tight leading-none text-zinc-900"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                57.3%
              </div>
              <div className="text-[24px] xl:text-[26px] font-bold mt-4 tracking-wide text-zinc-900">
                Top1提及率
              </div>
            </div>
            <p className="text-[21px] xl:text-[23px] leading-relaxed text-zinc-700 mt-6">
              「目标产品」在对话中排名第一的对话占所有对话的比例。
            </p>
          </div>

          {/* Cell 3: Top3提及率 */}
          <div className="bg-[#ADC9FF] text-zinc-900 rounded-none p-10 flex flex-col justify-between relative">
            <div>
              <div
                className="text-[78px] xl:text-[90px] font-black tracking-tight leading-none text-zinc-900"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                63.2%
              </div>
              <div className="text-[24px] xl:text-[26px] font-bold mt-4 tracking-wide text-zinc-900">
                Top3提及率
              </div>
            </div>
            <p className="text-[21px] xl:text-[23px] leading-relaxed text-zinc-800 mt-6">
              「目标产品」在对话中排名前三的对话占所有对话的比例。
            </p>
          </div>

          {/* Cell 4: 负面信息回答率 */}
          <div className="bg-white text-zinc-900 rounded-none p-10 flex flex-col justify-between relative">
            <div>
              <div
                className="text-[78px] xl:text-[90px] font-black tracking-tight leading-none text-zinc-900"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                6.3%
              </div>
              <div className="text-[24px] xl:text-[26px] font-bold mt-4 tracking-wide text-zinc-900">
                负面信息回答率
              </div>
            </div>
            <p className="text-[21px] xl:text-[23px] leading-relaxed text-zinc-650 mt-6">
              AI回答中包含负面信息的比例。
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOKpiSettingBrand.hideHeader = true;
