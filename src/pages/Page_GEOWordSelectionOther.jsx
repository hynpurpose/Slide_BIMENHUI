import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionOther() {
  return (
    <SlideLayout
      title="其他做法一：批量生成"
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
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
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
                    "创维电视防伪查询方法",
                    "创维壁纸电视价格表2026",
                    "创维智能电视评测好用吗",
                    "创维壁纸电视深度体验",
                    "创维电视色彩对比度调整",
                    "创维壁纸电视口碑怎么样",
                    "创维电视保养与屏幕清洁",
                    "创维电视专卖店正品保障",
                    "创维电视官方售后服务电话",
                    "创维电视官方保修年限政策"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i + 1).padStart(2, '0')}</span>
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
                    "极简客厅背景墙电视推荐",
                    "新房装修大平层护眼电视",
                    "游戏党买什么刷新率电视",
                    "卧室床头背景挂墙艺术电视",
                    "老人视力不好买多大电视",
                    "婚房影音室高画质电视",
                    "小户型客厅超薄贴墙电视",
                    "大别墅百寸巨幕分体电视",
                    "梅雨季节防潮防爆电视",
                    "开放式客厅防眩光电视"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i + 11).padStart(2, '0')}</span>
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
                    "创维对比三星画壁电视",
                    "创维和海信壁纸电视选哪个",
                    "TCL和创维电视哪个质量好",
                    "创维对比索尼OLED电视",
                    "LG与创维壁纸电视对比评测",
                    "创维对比长虹壁纸电视优缺点",
                    "创维和小米电视谁性价比高",
                    "创维与卡萨帝艺术电视对比",
                    "海信对比三星和创维电视",
                    "TCL对比索尼和创维电视"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i + 21).padStart(2, '0')}</span>
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
                    "哑光屏艺术画壁电视",
                    "QD-Mini LED电视评测",
                    "超薄无缝贴墙电视型号",
                    "独立分体式客厅音响电视",
                    "智能高刷抗光护眼电视",
                    "多分区背光控光电视",
                    "杜比全景声音画一体电视",
                    "超高清艺术常亮壁纸电视",
                    "智能语音控制护眼电视",
                    "环保护脊一体化壁挂电视"
                  ].map((term, i) => (
                    <div key={i} className="bg-zinc-950/60 hover:bg-blue-950/20 border border-zinc-800 hover:border-[#004CE5]/40 px-3 py-1 rounded-xl text-zinc-300 hover:text-white text-[18px] xl:text-[20px] font-medium leading-normal flex items-center gap-2.5 transition-all duration-200">
                      <span className="text-[#004CE5] font-black font-mono text-[13px] shrink-0">{String(i + 31).padStart(2, '0')}</span>
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
