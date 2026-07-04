import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_WallpaperVsConventional() {
  return (
    <SlideLayout title="壁纸电视 VS 常规电视">
      {/* ── 顶部核心结论 (标白重点，无蓝色标) ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <h2 
          className="text-white font-normal font-['MiSans'] leading-tight"
          style={{ fontSize: '42px', lineHeight: '52px' }}
        >
          消费者购买决策心智：看重<span className="text-white font-bold">居家美学</span>VS顾虑<span className="text-white font-bold">高价低配与后期安装</span>
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
              <tbody className="divide-y divide-zinc-900 text-[20px]">
                <tr className="align-top">
                  <td className="py-4 pr-2 font-bold text-white font-['MiSans']">
                    核心卖点
                  </td>
                  <td className="py-4 pr-4 text-zinc-200 leading-relaxed font-['MiSans']">
                    追求家居美学：希望电视能与整体家居风格适配。
                  </td>
                  <td className="py-4 text-zinc-400 leading-relaxed font-['MiSans']">
                    预算较充足；不在乎/感知不到音画质折损。
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="py-4 pr-2 font-bold text-zinc-350 font-['MiSans']">
                    核心痛点
                  </td>
                  <td className="py-4 pr-4 text-zinc-200 leading-relaxed font-['MiSans']">
                    性价比低：无法接受花高配的钱，买中低配的实际体验。
                  </td>
                  <td className="py-4 text-zinc-400 leading-relaxed font-['MiSans']">
                    影音爱好者；看重性价比；预算有限或租房党。
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
              对比主流电视劣势及权重
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {/* 痛点 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <span className="text-[18px] font-bold text-zinc-300 font-['MiSans']">
                    价格溢价严重
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
                    安装与墙面适配
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
                    哑光屏画质损耗
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
                    其他体验缺陷
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
