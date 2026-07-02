import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_WallpaperVsConventional() {
  return (
    <SlideLayout title="壁纸电视 VS 常规电视">
      {/* ── 顶部核心结论 ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <h2 
          className="text-white font-normal font-['MiSans'] leading-tight"
          style={{ fontSize: '42px', lineHeight: '52px' }}
        >
          消费者购买决策心智：看重<span className="text-[#004CE5] font-bold">居家美学</span>，顾虑<span className="text-zinc-300 font-bold">高价低配与后期安装</span>
        </h2>
      </div>

      {/* ── 极简宽屏双栏排版区 ── */}
      <div 
        className="absolute w-[1840px] flex gap-20 select-none animate-fadeIn"
        style={{ top: '100px', height: '695px' }}
      >
        {/* ==================== 左栏：对比对照表 (w-[840px]) ==================== */}
        <div className="w-[840px] h-full flex flex-col justify-start gap-8 pr-8 border-r border-zinc-850">
          <h3 className="text-[34px] font-bold text-white font-['MiSans'] tracking-wide">
            壁纸电视核心卖点和痛点
          </h3>

          <div className="flex-1 flex flex-col justify-center">
            <table className="w-full text-left border-collapse select-none">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 text-[20px] font-bold font-['MiSans']">
                  <th className="py-4 w-[160px]">项目</th>
                  <th className="py-4 w-[330px]">核心表现</th>
                  <th className="py-4 w-[350px]">对应人群心理与画像</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-[22px] font-sans">
                <tr className="align-top">
                  <td className="py-8 pr-4 font-bold text-white font-['MiSans']">
                    核心卖点
                  </td>
                  <td className="py-8 pr-6 text-zinc-200 leading-relaxed font-['MiSans']">
                    追求家居美学：希望电视能与整体家居风格适配。
                  </td>
                  <td className="py-8 text-zinc-400 leading-relaxed font-['MiSans']">
                    预算较充足；不在乎/感知不到音画质折损。
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="py-8 pr-4 font-bold text-zinc-300 font-['MiSans']">
                    核心痛点
                  </td>
                  <td className="py-8 pr-6 text-zinc-200 leading-relaxed font-['MiSans']">
                    性价比低：无法接受花高配的钱，买中低配的实际体验。
                  </td>
                  <td className="py-8 text-zinc-400 leading-relaxed font-['MiSans']">
                    影音爱好者；看重性价比；预算有限或租房党。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================== 右栏：痛点占比条形图 (w-[900px]) ==================== */}
        <div className="flex-1 h-full flex flex-col justify-start gap-12 pl-4">
          <h3 className="text-[34px] font-bold text-white font-['MiSans'] tracking-wide">
            对比主流电视劣势及权重
          </h3>

          <div className="flex-1 flex flex-col justify-center gap-10">
            {/* 痛点 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[26px] font-bold text-white font-['MiSans']">
                  价格溢价严重 (为超薄设计买单，性价比低)
                </span>
                <span className="text-[32px] font-black text-white font-sans">
                  25% - 30%
                </span>
              </div>
              <div className="w-full h-5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div className="h-full bg-zinc-200 rounded-full" style={{ width: '30%' }} />
              </div>
            </div>

            {/* 痛点 2 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[26px] font-bold text-white font-['MiSans']">
                  安装与墙面适配 (要求严苛，极易翻车)
                </span>
                <span className="text-[32px] font-black text-white font-sans">
                  20% - 30%
                </span>
              </div>
              <div className="w-full h-5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div className="h-full bg-zinc-200 rounded-full" style={{ width: '28%' }} />
              </div>
            </div>

            {/* 痛点 3 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[26px] font-bold text-white font-['MiSans']">
                  哑光屏画质损耗 (防眩光膜损耗画质)
                </span>
                <span className="text-[32px] font-black text-white font-sans">
                  20% - 25%
                </span>
              </div>
              <div className="w-full h-5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div className="h-full bg-zinc-200 rounded-full" style={{ width: '23%' }} />
              </div>
            </div>

            {/* 痛点 4 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[26px] font-bold text-white font-['MiSans']">
                  其他体验缺陷 (音响受限、常亮耗电、售后维修)
                </span>
                <span className="text-[32px] font-black text-white font-sans">
                  5% - 20%
                </span>
              </div>
              <div className="w-full h-5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div className="h-full bg-zinc-200 rounded-full" style={{ width: '15%' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_WallpaperVsConventional.hideHeader = true;
