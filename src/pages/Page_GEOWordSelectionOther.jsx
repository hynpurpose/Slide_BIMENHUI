import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionOther() {
  return (
    <SlideLayout
      title="GEO 应该怎么选词条？"
      subtitle="市场上其他做法（一）：AI批量生成"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: Centered Card stretching to fill safe zone height */}
      <div className="w-full h-full flex items-center justify-center relative z-10 select-none">
        
        {/* ==================== CARD 1: AI 批量生成 (Scaled Up Card - Full Width) ==================== */}
        <div className="w-full h-[715px] bg-zinc-950/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Card Header */}
          <div className="flex items-center justify-between p-8 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-5">
              {/* Double Arrow Circle Icon */}
              <div className="w-14 h-14 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square"/>
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] font-black text-white leading-tight">AI批量生成</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-8 bg-zinc-950 relative overflow-hidden flex flex-col justify-center">
            {/* Background glowing effects for dark luxury feeling */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] -left-12 -top-12 pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/3 blur-[140px] -right-12 -bottom-12 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-4 gap-5 w-full">
              {/* Category 1: 品牌词 */}
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[23px] xl:text-[25px] font-bold text-white border-l-4 border-[#004CE5] pl-3 leading-none font-['MiSans']">
                    品牌词
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    "慕思床垫防伪查询方法",
                    "慕思太空漫步系列价格",
                    "慕思智能床垫评测好用吗",
                    "慕思3D乳胶床垫深度体验",
                    "慕思弹簧床垫软硬度调整",
                    "慕思歌蒂娅系列口碑怎么样",
                    "慕思床垫保养与清洁指南",
                    "慕思床垫专卖店正品保障",
                    "慕思床垫官方售后服务电话",
                    "慕思床垫官方保修年限及政策"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i+1).padStart(2, '0')}</span>
                      <span className="whitespace-nowrap">{term}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: 场景词 */}
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[23px] xl:text-[25px] font-bold text-white border-l-4 border-[#004CE5] pl-3 leading-none font-['MiSans']">
                    场景词
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    "备孕期孕妇床垫推荐",
                    "搬新家除甲醛硬床垫",
                    "腰椎不好买什么床垫",
                    "儿童房防螨透气床垫",
                    "老人睡塌了怎么补救",
                    "新婚婚房喜庆双人床垫",
                    "小户型折叠多功能床垫",
                    "大体重人群不塌陷床垫",
                    "梅雨季节防潮防霉硬床垫",
                    "夫妻体重差大防干扰静音床垫"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i+11).padStart(2, '0')}</span>
                      <span className="whitespace-nowrap">{term}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: 竞品词 */}
              <div className="bg-zinc-900/40 border border-[#004CE5]/30 rounded-2xl p-5 flex flex-col gap-3.5 shadow-[0_0_15px_rgba(0,76,229,0.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-[23px] xl:text-[25px] font-bold text-white border-l-4 border-[#004CE5] pl-3 leading-none font-['MiSans']">
                    竞品词
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    "慕思对比金可儿床垫",
                    "慕思和喜临门怎么选",
                    "舒达和慕思哪个好",
                    "慕思对比梦百合记忆棉",
                    "丝涟与慕思床垫对比评测",
                    "慕思对比雅兰床垫优缺点",
                    "慕思和芝华仕床垫谁更舒服",
                    "慕思与泰普尔床垫选购对比",
                    "顾家对比金可儿和慕思床垫",
                    "金可儿对比舒达和慕思床垫"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i+21).padStart(2, '0')}</span>
                      <span className="whitespace-nowrap">{term}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 4: 产品词 */}
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[23px] xl:text-[25px] font-bold text-white border-l-4 border-[#004CE5] pl-3 leading-none font-['MiSans']">
                    产品词
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    "独立袋装弹簧床垫",
                    "天然椰棕防螨硬床垫",
                    "护脊记忆棉慢回弹床垫",
                    "防尘螨乳胶双面床垫",
                    "智能电动按摩加热床垫",
                    "五区感应分区支撑床垫",
                    "石墨烯恒温抗菌面料床垫",
                    "高弹性冷泡绵舒压床垫",
                    "深睡释压护脊慢回弹床垫",
                    "无胶水环保热压3D纤维床垫"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i+31).padStart(2, '0')}</span>
                      <span className="whitespace-nowrap">{term}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionOther.hideHeader = true;
