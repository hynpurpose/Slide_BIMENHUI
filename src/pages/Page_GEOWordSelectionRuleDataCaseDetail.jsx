import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionRuleDataCaseDetail() {
  const [phone1Failed, setPhone1Failed] = useState(false);
  const [phone2Failed, setPhone2Failed] = useState(false);

  // Paths for assets
  const phone1ImagePath = "/images/geo-word-selection-rule-phone-1.png";
  const phone2ImagePath = "/images/geo-word-selection-rule-phone-2.png";

  return (
    <SlideLayout
      title="GEO 应该怎么选词条？"
      subtitle="法则二：数据优先"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-start relative z-10">
        <div className="relative w-full h-[775px]">

          {/* ==================== LEFT COLUMN: Card 2 (Brand Blue - Rule 02) ==================== */}
          <div className="absolute left-0 w-[580px] top-[20px] h-[735px] bg-[#004CE5] border border-blue-600/50 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,76,229,0.3)] animate-fade-in relative select-none">
            {/* Card Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#004CE5]">
              <div className="flex items-center gap-3.5">
                {/* Rule Number Badge */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="text-[22px] font-black text-[#004CE5] font-mono">02</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[28px] font-black text-white leading-tight">法则二：数据优先</span>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
              </div>
            </div>

            {/* Card Body */}
            <div className="flex-grow p-8 bg-[#004CE5] flex flex-col justify-center gap-9">
              {/* Step 1 */}
              <div className="flex gap-5 items-start pl-2">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-white mt-2" />
                  <div className="w-[2.5px] h-[75px] bg-blue-300/50 my-1.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[24px] font-black text-white">影子测试模拟</span>
                  <span className="text-[18px] xl:text-[19px] font-bold text-blue-100 mt-2 leading-relaxed">
                    不靠感觉猜词，将不同的用户长短问法放进系统，在豆包、千问、DeepSeek等AI端做大量影子跑测。
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5 items-start pl-2">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-white mt-2" />
                  <div className="w-[2.5px] h-[75px] bg-blue-300/50 my-1.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[24px] font-black text-white">回答稳定性评估</span>
                  <span className="text-[18px] xl:text-[19px] font-bold text-blue-100 mt-2 leading-relaxed">
                    评估各家 AI 的返回答案：是否有目标品牌？是否经常带出竞争对手？回答内容是否稳定、意图是否强烈？
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5 items-start pl-2">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-white mt-2" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[24px] font-black text-white">依据数据排序</span>
                  <span className="text-[18px] xl:text-[19px] font-bold text-blue-100 mt-2 leading-relaxed">
                    剔除只会泛泛讲参数、不触发具体品牌的词条。基于影子跑测的返回数据，量化决定哪个问法具有最高的优化优先级。
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: Two Enlarged Phone Mockups ==================== */}
          <div className="absolute left-[628px] right-0 top-[-145px] bottom-0 z-20 flex items-end justify-center gap-10 pb-[20px] select-none animate-fade-in [animation-delay:150ms]">

            {/* Phone Group 1 */}
            <div className="flex flex-col items-center gap-4">
              {/* Phone Mockup 1 */}
              <div className="relative w-[390px] h-[780px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[52px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-900 border border-zinc-800/80 ml-auto mr-3.5" />
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 z-10 w-full h-full bg-zinc-900 flex items-center justify-center p-1">
                  {!phone1Failed ? (
                    <img
                      src={phone1ImagePath}
                      alt="手机端搜索截图 1"
                      className="w-full h-full object-cover rounded-[42px]"
                      onError={() => setPhone1Failed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-center p-6 gap-2">
                      <ImageIcon className="w-12 h-12 text-zinc-600 opacity-60" />
                      <span className="text-zinc-500 font-bold text-sm font-['MiSans']">
                        [ 手机端搜索截图 1 ]
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <span className="text-[24px] font-bold text-zinc-400 font-['MiSans']">
                纯科普，没有推荐品牌
              </span>
            </div>

            {/* Phone Group 2 */}
            <div className="flex flex-col items-center gap-4">
              {/* Phone Mockup 2 */}
              <div className="relative w-[390px] h-[780px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[52px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-900 border border-zinc-800/80 ml-auto mr-3.5" />
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 z-10 w-full h-full bg-zinc-900 flex items-center justify-center p-1">
                  {!phone2Failed ? (
                    <img
                      src={phone2ImagePath}
                      alt="手机端搜索截图 2"
                      className="w-full h-full object-cover rounded-[42px]"
                      onError={() => setPhone2Failed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-center p-6 gap-2">
                      <ImageIcon className="w-12 h-12 text-zinc-600 opacity-60" />
                      <span className="text-zinc-500 font-bold text-sm font-['MiSans']">
                        [ 手机端搜索截图 2 ]
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <span className="text-[24px] font-bold text-[#004CE5] font-['MiSans']">
                推荐了品牌
              </span>
            </div>

          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionRuleDataCaseDetail.hideHeader = true;
