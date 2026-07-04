import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_WallpaperVsConventional() {
  return (
    <SlideLayout title="壁纸电视 VS 常规电视">
      {/* ── 顶部核心结论 (标白重点，无蓝色标) ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <h2 
          className="text-zinc-300 font-normal font-['MiSans'] leading-tight"
          style={{ fontSize: '42px', lineHeight: '52px' }}
        >
          消费者购买决策心智：<span className="text-white font-extrabold">“看重”</span>家居美学 VS <span className="text-white font-extrabold">“顾虑”</span>高配低配与后期安装
        </h2>
      </div>

      {/* ── 双栏排版区 ── */}
      <div 
        className="absolute w-[1840px] flex gap-12 select-none animate-fadeIn"
        style={{ top: '100px', height: '695px' }}
      >
        {/* ==================== 左栏：买/不买核心原因占比卡片 (色彩调整版) ==================== */}
        <div className="w-[860px] h-full flex flex-col justify-between pr-4">
          
          {/* 买的人卡片 */}
          <div className="relative overflow-hidden bg-zinc-950/40 border border-[#00FF66] rounded-3xl p-10 flex justify-between items-center w-full h-[325px] shadow-[0_0_25px_rgba(0,255,102,0.25)]">
            {/* 占比背景填充 85% */}
            <div 
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-zinc-700/80 via-zinc-700/50 to-transparent" 
              style={{ width: '85%' }}
            />
            <div className="relative z-10 flex flex-col justify-center h-full">
              <div className="bg-[#00FF66] text-zinc-950 font-extrabold text-[26px] px-8 py-2 rounded-full inline-block self-start font-sans select-none mb-6">
                买的人
              </div>
              <h3 className="text-[56px] leading-[66px] font-bold text-white font-['MiSans']">
                追求家居美学
              </h3>
            </div>
            <div className="relative z-10 text-right">
              <span className="text-[100px] font-black text-white font-['Montserrat'] tracking-tighter leading-none select-none">
                85%
              </span>
            </div>
          </div>

          {/* 不买的人卡片 */}
          <div className="relative overflow-hidden bg-zinc-950/40 border border-[#DC2626] rounded-3xl p-10 flex justify-between items-center w-full h-[325px] shadow-[0_0_25px_rgba(220,38,38,0.25)]">
            {/* 占比背景填充 63% */}
            <div 
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-zinc-700/80 via-zinc-700/50 to-transparent" 
              style={{ width: '63%' }}
            />
            <div className="relative z-10 flex flex-col justify-center h-full">
              <div className="bg-[#DC2626] text-white font-extrabold text-[26px] px-8 py-2 rounded-full inline-block self-start font-sans select-none mb-6">
                不买的人
              </div>
              <h3 className="text-[56px] leading-[66px] font-bold text-white font-['MiSans']">
                无法接受高价低配
              </h3>
            </div>
            <div className="relative z-10 text-right">
              <span className="text-[100px] font-black text-zinc-300 font-['Montserrat'] tracking-tighter leading-none select-none">
                63%
              </span>
            </div>
          </div>

        </div>

        {/* ==================== 右栏：调研数据框 (包含痛点/卖点表与条形图) ==================== */}
        <div className="w-[930px] h-full bg-[#09090b]/40 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shadow-inner">
          {/* Label */}
          <div className="select-none">
            <span className="text-[14px] text-zinc-500 font-mono font-bold tracking-wider block">SURVEY DATA</span>
            <h3 className="text-[28px] font-bold text-white mt-1 font-['MiSans']">
              调研数据
            </h3>
          </div>

          {/* Top: Combined卖点/痛点 table */}
          <div className="w-full flex-grow flex flex-col justify-center my-4">
            <table className="w-full text-left border-collapse select-none">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-500 text-[18px] font-bold font-['MiSans']">
                  <th className="py-2 w-[120px]">项目</th>
                  <th className="py-2 w-[340px]">核心表现</th>
                  <th className="py-2 w-[400px]">对应人群心理与画像</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-[19px] xl:text-[20px]">
                <tr className="align-top">
                  <td className="py-4 pr-2 font-bold text-[#60A5FA] font-['MiSans']">
                    核心卖点
                  </td>
                  <td className="py-4 pr-4 text-zinc-200 leading-relaxed font-['MiSans']">
                    <span className="text-white font-semibold">家居美学极致融入</span>：要求电视不再是冷冰冰的“电器黑洞”，而是通过极致薄贴墙工艺无缝嵌入，达到挂画般的视觉艺术格调。
                  </td>
                  <td className="py-4 text-zinc-400 leading-relaxed font-['MiSans']">
                    <span className="text-zinc-300 font-medium">品质追求者与家装主导者</span>：注重整体空间美感与硬装档次，对底层硬件参数敏锐度一般，愿意为设计外观及空间溢价付费。
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="py-4 pr-2 font-bold text-zinc-400 font-['MiSans']">
                    核心痛点
                  </td>
                  <td className="py-4 pr-4 text-zinc-200 leading-relaxed font-['MiSans']">
                    <span className="text-white font-semibold">高配低配与安装繁琐</span>：难以接受因“超薄”带来的音画质硬件折损及高溢价，且担心墙体承重、排线隐藏与无缝施工等落地阻碍。
                  </td>
                  <td className="py-4 text-zinc-400 leading-relaxed font-['MiSans']">
                    <span className="text-zinc-300 font-medium">理性消费者与影音发烧友</span>：追求同等价位下屏幕背光、亮度及音响的性价比极限，对厚度妥协较为警惕，抗拒高安装风险。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Horizontal Divider */}
          <div className="border-t border-zinc-800/80 my-4" />

          {/* Bottom: Main Disadvantages Progress bars */}
          <div className="flex flex-col gap-4 select-none">
            <span className="text-[20px] font-bold text-zinc-400 font-['MiSans']">
              对比主流常规电视劣势及权重
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {/* 痛点 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <span className="text-[18px] font-bold text-zinc-300 font-['MiSans']">
                    同等配置价格溢价高
                  </span>
                  <span className="text-[20px] font-black text-white font-sans">
                    25% - 30%
                  </span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-850">
                  <div className="h-full bg-zinc-300 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              {/* 痛点 2 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <span className="text-[18px] font-bold text-zinc-300 font-['MiSans']">
                    后期安装与墙体适配
                  </span>
                  <span className="text-[20px] font-black text-white font-sans">
                    20% - 30%
                  </span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-850">
                  <div className="h-full bg-zinc-300 rounded-full" style={{ width: '28%' }} />
                </div>
              </div>

              {/* 痛点 3 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <span className="text-[18px] font-bold text-zinc-300 font-['MiSans']">
                    音画质性能超薄妥协
                  </span>
                  <span className="text-[20px] font-black text-white font-sans">
                    20% - 25%
                  </span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-850">
                  <div className="h-full bg-zinc-300 rounded-full" style={{ width: '23%' }} />
                </div>
              </div>

              {/* 痛点 4 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <span className="text-[18px] font-bold text-zinc-300 font-['MiSans']">
                    系统软件及配件限制
                  </span>
                  <span className="text-[20px] font-black text-white font-sans">
                    5% - 20%
                  </span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-850">
                  <div className="h-full bg-zinc-400 rounded-full" style={{ width: '15%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_WallpaperVsConventional.hideHeader = true;
