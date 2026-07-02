import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthVsCompetitor() {
  const tableData = [
    {
      brand: "三星\nThe Frame 系列",
      sales: "国内低于 100 万台",
      target: "追求极致壁画拟真，不在乎常规画质损失",
      prosCons: "优势：艺术质感极度拟真，行业最佳标杆\n劣势：电视基础音画质平庸，溢价虚高",
      isHighlight: false
    },
    {
      brand: "LG\nOLED evo G6 / G5 系列",
      sales: "国内销量极低",
      target: "高预算，追求极致音画质的超高端用户",
      prosCons: "优势：OLED 顶级显示效果，音画质极佳\n劣势：价格极其昂贵，大众消费者难考虑",
      isHighlight: false
    },
    {
      brand: "创维\nA10H / A8H / A7H 系列",
      sales: "全球总销售额：216.66 亿元",
      target: "兼顾空间美学设计与高品质音画体验者",
      prosCons: "优势：产品线最丰富，多价位段广泛覆盖，音画体验均衡\n劣势：哑光艺术拟真效果较三星仍有差距",
      isHighlight: true
    },
    {
      brand: "海信\nA7Q",
      sales: "全球总出货：2990 万台\n国内总销售：246.34 亿元",
      target: "看重稳妥大品牌背书的传统电视用户",
      prosCons: "优势：品牌大认知度高，售后服务体系稳妥\n劣势：细分品类布局单一，目前机型配置偏低",
      isHighlight: false
    },
    {
      brand: "TCL\n85Art 7M",
      sales: "全球总出货：3040 万台\n全球总销售：647.08 亿港元",
      target: "注重生活方式、年轻化家居艺术表达的人群",
      prosCons: "优势：年轻化设计感强，主打生活态度，价格更有性价比\n劣势：壁纸细分型号极少，专业心智建立中",
      isHighlight: false
    },
    {
      brand: "长虹\nD8S 系列",
      sales: "全球总销售额：147.47 亿元",
      target: "追求壁画上墙效果但预算有限的性价比用户",
      prosCons: "优势：零售门槛价格极低，性价比优势突出\n劣势：整体设计感、高端品牌形象与专业度较弱",
      isHighlight: false
    }
  ];

  return (
    <SlideLayout title="创维壁纸电视 VS 竞品壁纸电视">
      {/* ── 顶部核心结论 ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <h2
          className="text-white font-normal font-['MiSans'] leading-tight"
          style={{ fontSize: '38px', lineHeight: '48px' }}
        >
          用户认知定位：海信主打稳妥，TCL主打年轻设计，创维聚焦壁纸本身，长虹主打性价比
        </h2>
      </div>

      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: '90px', height: '705px' }}
      >
        <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-black/30 w-full h-full flex flex-col">
          <table className="w-full h-full text-left border-collapse select-none table-fixed">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-[22px] font-bold font-['MiSans'] bg-zinc-950/80">
                <th className="px-6 py-2.5 w-[260px] border-r border-zinc-800">品牌 / 推荐系列</th>
                <th className="px-6 py-2.5 w-[360px] border-r border-zinc-800">
                  销量数据 <span className="text-[13px] font-normal text-zinc-500 block mt-0.5">(2025电视品类总数据，非壁纸系列数据)</span>
                </th>
                <th className="px-6 py-2.5 w-[520px] border-r border-zinc-800">目标人群</th>
                <th className="px-6 py-2.5 w-[700px]">产品优劣势对照总结</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-[22px] font-sans">
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`align-top transition-colors ${row.isHighlight ? 'bg-zinc-900/60 font-medium' : 'hover:bg-zinc-950/20'
                    }`}
                >
                  {/* Brand & Series */}
                  <td className={`px-6 py-2 border-r border-zinc-800 font-bold font-['MiSans'] whitespace-pre-line ${row.isHighlight ? 'text-white' : 'text-zinc-200'
                    }`}>
                    {row.brand}
                  </td>

                  {/* Sales Data */}
                  <td className="px-6 py-2 border-r border-zinc-800 text-zinc-300 leading-relaxed font-sans whitespace-pre-line">
                    {row.sales}
                  </td>

                  {/* Target Audience */}
                  <td className="px-6 py-2 border-r border-zinc-800 text-zinc-300 leading-relaxed font-['MiSans']">
                    {row.target}
                  </td>

                  {/* Pros & Cons */}
                  <td className="px-6 py-2 text-zinc-300 leading-relaxed font-['MiSans'] whitespace-pre-line">
                    {row.prosCons.split('\n').map((line, lIdx) => {
                      const isPro = line.startsWith('优势：');
                      return (
                        <div key={lIdx} className={lIdx > 0 ? "mt-1 flex items-start" : "flex items-start"}>
                          <span className={`inline-flex items-center justify-center text-[16px] font-extrabold px-2.5 py-0.5 rounded mr-3 shrink-0 select-none ${isPro
                            ? 'bg-zinc-800 text-zinc-100 border border-zinc-700'
                            : 'bg-zinc-900 text-zinc-400 border border-zinc-800/80'
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
    </SlideLayout>
  );
}

Page_SkyworthVsCompetitor.hideHeader = true;
