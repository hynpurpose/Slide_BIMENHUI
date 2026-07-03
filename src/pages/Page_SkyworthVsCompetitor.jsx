import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthVsCompetitor() {
  const tableData = [
    {
      brand: "三星\nThe Frame 系列",
      sales: "国内销量极低\n(低于 100 万台)",
      target: "追求极致壁画拟真，不在乎常规画质损失",
      prosCons: "优势：艺术质感极度拟真，行业最佳标杆\n劣势：电视基础音画质平庸，属于“中看不中用”",
      isHighlight: false
    },
    {
      brand: "LG\nOLED evo G6 / G5 系列",
      sales: "国内销量极低",
      target: "高预算，追求极致音画质的超高端用户",
      prosCons: "优势：OLED 顶级显示效果，音画质极佳\n劣势：价格极其昂贵，属于“买不起”",
      isHighlight: false
    },
    {
      brand: "创维\nA10H / A8H / A7H 系列",
      sales: "全球总销售额：216.66 亿元",
      target: "兼顾空间美学设计与高品质音画体验者",
      prosCons: "优势：拥有最丰富的产品线，多价位段广泛覆盖，兼顾空间美学与高品质音画体验\n劣势：哑光艺术拟真效果较三星仍有差距",
      isHighlight: true
    },
    {
      brand: "海信\nA7Q",
      sales: "全球总出货：2990 万台\n国内总销售：246.34 亿元",
      target: "看重稳妥大品牌背书的传统电视用户",
      prosCons: "优势：品牌大认知度高，售后服务体系稳妥\n劣势：细分品类布局单一，在壁纸电视赛道没有深度投入",
      isHighlight: false
    },
    {
      brand: "TCL\n85Art 7M",
      sales: "全球总出货：3040 万台\n全球总销售：647.08 亿港元",
      target: "注重生活方式、年轻化家居艺术表达的人群",
      prosCons: "优势：年轻化设计感强，主打生活态度，价格更有性价比\n劣势：壁纸细分型号极少，在壁纸电视赛道没有深度投入",
      isHighlight: false
    },
    {
      brand: "长虹\nD8S 系列",
      sales: "全球总销售额：147.47 亿元",
      target: "追求壁画上墙效果但预算有限的性价比用户",
      prosCons: "优势：零售门槛价格极低，性价比优势突出\n劣势：整体设计感较弱，在壁纸电视赛道没有深度投入",
      isHighlight: false
    }
  ];

  return (
    <SlideLayout title="创维壁纸电视 VS 竞品壁纸电视">
      <div className="w-full h-full relative select-none animate-fadeIn">
        
        {/* ==================== 左栏：用户认知定位 ( w-[580px] ) ==================== */}
        <div className="absolute left-0 top-0 w-[580px] bottom-0 flex flex-col justify-start py-2 pr-6 border-r border-zinc-800/80">
          <h2 className="text-[34px] font-bold text-white font-['MiSans'] border-b border-zinc-900 pb-3 mb-4 select-none">
            用户认知定位
          </h2>

          <div className="flex flex-col flex-1 justify-between">
            {/* 创维单独一个框 */}
            <div className="bg-zinc-900/60 border border-zinc-700/60 rounded-2xl p-5 flex flex-col gap-2 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
              <span className="text-[26px] font-extrabold text-white">创维</span>
              <span className="text-[22px] text-zinc-300">颜值高、音画效果好</span>
            </div>

            {/* 两个框之间放一个 VS */}
            <div className="text-white font-black text-[26px] font-mono tracking-widest text-center select-none py-1 drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]">
              VS
            </div>

            {/* 其他竞品单独一个框 - 填充并抵到最底部 */}
            <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between flex-grow shadow-inner">
              {/* 三星 */}
              <div className="flex flex-col gap-1">
                <span className="text-[22px] font-extrabold text-zinc-300">三星</span>
                <span className="text-[20px] text-zinc-400">壁纸效果最好但基础音画平庸</span>
              </div>
              <div className="border-t border-zinc-850" />

              {/* LG */}
              <div className="flex flex-col gap-1">
                <span className="text-[22px] font-extrabold text-zinc-300">LG</span>
                <span className="text-[20px] text-zinc-400">价格贵</span>
              </div>
              <div className="border-t border-zinc-850" />

              {/* 海信 */}
              <div className="flex flex-col gap-1">
                <span className="text-[22px] font-extrabold text-zinc-300">海信</span>
                <span className="text-[20px] text-zinc-400">壁纸电视品类单一</span>
              </div>
              <div className="border-t border-zinc-850" />

              {/* TCL */}
              <div className="flex flex-col gap-1">
                <span className="text-[22px] font-extrabold text-zinc-300">TCL</span>
                <span className="text-[20px] text-zinc-400">壁纸电视品类单一</span>
              </div>
              <div className="border-t border-zinc-850" />

              {/* 长虹 */}
              <div className="flex flex-col gap-1">
                <span className="text-[22px] font-extrabold text-zinc-300">长虹</span>
                <span className="text-[20px] text-zinc-400">性价比高，但设计感较弱</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 右栏：数据对比表格 ( w-[1200px] ) ==================== */}
        <div className="absolute left-[640px] top-0 w-[1200px] bottom-0 flex flex-col">
          <div className="border border-zinc-850 rounded-2xl overflow-hidden bg-[#09090b]/40 w-full h-full flex flex-col shadow-inner">
            <table className="w-full h-full text-left border-collapse select-none table-fixed">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 text-[18px] font-bold font-['MiSans'] bg-zinc-950/80">
                  <th className="px-5 py-3 w-[190px] border-r border-zinc-800">品牌 / 推荐系列</th>
                  <th className="px-5 py-3 w-[250px] border-r border-zinc-800">
                    销量数据 <span className="text-[11px] font-normal text-zinc-500 block mt-0.5">(2025年电视品类数据)</span>
                  </th>
                  <th className="px-5 py-3 w-[320px] border-r border-zinc-800">目标人群</th>
                  <th className="px-5 py-3 w-[440px]">产品优劣势对照总结</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-[16px] font-sans">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`align-top transition-colors ${row.isHighlight ? 'bg-zinc-900/40 font-medium' : 'hover:bg-zinc-950/10'
                      }`}
                  >
                    {/* Brand & Series */}
                    <td className={`px-5 py-4 border-r border-zinc-800 font-bold font-['MiSans'] whitespace-pre-line ${row.isHighlight ? 'text-white' : 'text-zinc-200'
                      }`}>
                      {row.brand}
                    </td>

                    {/* Sales Data */}
                    <td className="px-5 py-4 border-r border-zinc-800 text-zinc-300 leading-relaxed font-sans whitespace-pre-line">
                      {row.sales}
                    </td>

                    {/* Target Audience */}
                    <td className="px-5 py-4 border-r border-zinc-800 text-zinc-300 leading-relaxed font-['MiSans']">
                      {row.target}
                    </td>

                    {/* Pros & Cons */}
                    <td className="px-5 py-4 text-zinc-300 leading-relaxed font-['MiSans'] whitespace-pre-line">
                      {row.prosCons.split('\n').map((line, lIdx) => {
                        const isPro = line.startsWith('优势：');
                        return (
                          <div key={lIdx} className={lIdx > 0 ? "mt-2 flex items-start" : "flex items-start"}>
                            <span className={`inline-flex items-center justify-center text-[12px] font-extrabold px-2 py-0.5 rounded mr-2 shrink-0 select-none ${isPro
                              ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                              : 'bg-zinc-900/60 text-zinc-400 border border-zinc-850'
                              }`}>
                              {isPro ? "优势" : "劣势"}
                            </span>
                            <span className={isPro ? "text-zinc-200" : "text-zinc-400"}>
                              {line.substring(3)}
                            </span>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthVsCompetitor.hideHeader = true;
