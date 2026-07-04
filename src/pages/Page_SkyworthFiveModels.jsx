import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthFiveModels() {
  const tableData = [
    {
      series: "A系列 | 线上配置线",
      model: "A7H Pro (基础款)",
      target: "预算有限、看重无缝壁画美学的年轻家庭",
      price: "¥10,499 (正常)\n¥8,499 (国补后)",
      specs: "QD-Mini LED | 1344 分区\n3800 尼特 | 300Hz | 99% DCI-P3",
      compNotes: "直接竞品（此价位段参数竞争激烈）：\n• 长虹 D8S Pro (¥9411 / 国补 ¥7999)：Mini LED | 5000 尼特\n• TCL 85Art 7M (¥7763 / 国补 ¥6599)：Mini LED | 288Hz"
    },
    {
      series: "A系列 | 线上配置线",
      model: "A8H (音画升级款)",
      target: "追求客厅影音体验、不愿妥协音质的消费者",
      price: "¥11,499 (正常)\n¥9,999 (国补后)",
      specs: "SQD-Mini LED | 3600 分区\n5500 尼特 | 300Hz | 110% DCI-P3",
      compNotes: "市场真空期：\n• 暂无直接竞品。创维深度卡位，抢占空位独占市场。"
    },
    {
      series: "A系列 | 线上配置线",
      model: "A10H (系列旗舰款)",
      target: "高预算、对背光分区与亮度有极致追求的科技发烧友",
      price: "¥17,499 (正常)\n¥15,999 (国补后)",
      specs: "SQD-Mini LED | 11520 分区\n10000 尼特 | 330Hz | 103% BT.2020",
      compNotes: "主流对标（消费者会与海外设计品牌对比）：\n• 三星 LS03D (¥21999 / 国补 ¥18699)：ELED | 无分区\n• 海信 A7Q (¥14999 / 无国补)：LCD | 40 分区 | 132Hz"
    },
    {
      series: "Q系列 | 线下体验线",
      model: "Q7H (高端均衡款)",
      target: "习惯线下消费、看重真机质感的高端用户",
      price: "¥14,999 (渠道)\n¥10,999 (三方最低)",
      specs: "QD-Mini LED | 2160 分区\n4500 尼特 | 480Hz | 110% DCI-P3",
      compNotes: "体验溢价：\n• 暂无直接竞品。主打线下高质感形态与高端影音均衡。"
    },
    {
      series: "Q系列 | 线下体验线",
      model: "Q8H (分体顶配款)",
      target: "大平层或别墅业主，有分体独立环绕声学需求的高端群体",
      price: "¥20,999 (渠道)\n¥14,999 (三方最低)",
      specs: "QD-Mini LED | 4350 分区\n4500 尼特 | 480Hz | 103% BT.2020",
      compNotes: "旗舰系统：\n• 暂无直接竞品。专为高预算大客厅设计，配备完整分体影音系统。"
    }
  ];

  return (
    <SlideLayout title="创维五款壁纸电视的区别">
      {/* ── 顶部核心结论 ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <h2
          className="text-zinc-300 font-normal font-['MiSans'] leading-tight"
          style={{ fontSize: '42px', lineHeight: '52px' }}
        >
          产品布局：<span className="text-white font-extrabold">A系列</span>偏线上高配置（主打参数），<span className="text-white font-extrabold">Q系列</span>偏线下高体验（主打分体与质感）
        </h2>
      </div>

      {/* ── 极简宽屏表格排版区 (全宽 1840px, 高度 705px 抵底) ── */}
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: '100px', height: '695px' }}
      >
        <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-black/30 w-full h-full flex flex-col">
          <table className="w-full h-full text-left border-collapse select-none table-fixed">
            <thead>
              <tr className="border-b border-[#004CE5]/30 text-white text-[19px] xl:text-[21px] font-bold font-['MiSans'] bg-[#004CE5]/15">
                <th className="px-5 py-2.5 w-[220px] border-r border-[#004CE5]/20">型号与定位</th>
                <th className="px-5 py-2.5 w-[420px] border-r border-[#004CE5]/20">人群定位</th>
                <th className="px-5 py-2.5 w-[220px] border-r border-[#004CE5]/20">零售价格对照</th>
                <th className="px-5 py-2.5 w-[360px] border-r border-[#004CE5]/20">核心配置参数</th>
                <th className="px-5 py-2.5 w-[620px]">竞品对照与竞争格局</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900/80 text-[17px] xl:text-[19px] font-sans">
              {tableData.map((row, idx) => {
                const isQSeries = row.series.startsWith("Q系列");
                return (
                  <tr
                    key={idx}
                    className="align-top hover:bg-zinc-950/10"
                  >
                    {/* Model & Position */}
                    <td className="px-5 py-3 border-r border-zinc-900/80 font-['MiSans']">
                      <div className="font-bold text-white text-[20px] xl:text-[22px]">{row.model}</div>
                      <div className={`inline-block text-[11px] font-extrabold px-2 py-0.5 rounded mt-1.5 ${isQSeries
                        ? 'bg-amber-950/50 text-amber-400 border border-amber-900/30'
                        : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                        }`}>
                        {row.series}
                      </div>
                    </td>

                    {/* Target & Driver */}
                    <td className="px-5 py-3 border-r border-zinc-900/80 text-zinc-200 leading-relaxed font-['MiSans']">
                      {row.target}
                    </td>

                    {/* Price Data */}
                    <td className="px-5 py-3 border-r border-zinc-900/80 text-zinc-300 leading-relaxed font-sans whitespace-pre-line font-medium">
                      {row.price}
                    </td>

                    {/* Specs Data */}
                    <td className="px-5 py-3 border-r border-zinc-900/80 text-zinc-300 leading-relaxed font-sans whitespace-pre-line">
                      {row.specs}
                    </td>

                    {/* Competitor Comparison */}
                    <td className="px-5 py-3 text-zinc-300 leading-relaxed font-['MiSans'] whitespace-pre-line">
                      {row.compNotes.split('\n').map((line, lIdx) => {
                        const isHeader = lIdx === 0;
                        if (isHeader) {
                          return (
                            <div key={lIdx} className="font-bold text-zinc-200 mb-1.5">
                              {line}
                            </div>
                          );
                        }
                        return (
                          <div key={lIdx} className="text-[16px] xl:text-[18px] text-zinc-400 pl-2 leading-relaxed mt-0.5">
                            {line}
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthFiveModels.hideHeader = true;
