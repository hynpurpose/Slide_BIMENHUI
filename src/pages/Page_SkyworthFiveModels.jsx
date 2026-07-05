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
      <div className="w-full h-full relative select-none animate-fadeIn">

        {/* ==================== 左栏：人群定位 ( w-[590px] ) ==================== */}
        <div className="absolute left-0 top-0 w-[590px] bottom-0 flex flex-col justify-start py-2 pr-6 border-r border-white/[0.16]">
          <h2 className="text-[34px] font-bold text-white font-['MiSans'] border-b border-zinc-900 pb-3 mb-6 select-none shrink-0">
            人群定位
          </h2>
          
          {/* 梯度人群定位，去除繁杂卡片背景，精简线条 */}
          <div className="flex-1 flex flex-col justify-around min-h-0 py-2">
            {/* A系列梯队 */}
            <div className="flex flex-col gap-4">
              <div className="text-[28px] xl:text-[30px] font-extrabold text-[#60A5FA] font-['MiSans'] mb-1">
                A系列 · 线上高配置（参数升级）
              </div>
              <div className="flex flex-col gap-4 pl-1">
                <div className="leading-relaxed">
                  <span className="text-white font-bold block text-[19px] xl:text-[21px] mb-1">A7H Pro (基础款)</span>
                  <span className="text-zinc-400 text-[17px] xl:text-[19px]">想买艺术/壁纸电视但预算不想太高的新装家庭</span>
                </div>
                <div className="leading-relaxed border-t border-white/[0.06] pt-3.5">
                  <span className="text-white font-bold block text-[19px] xl:text-[21px] mb-1">A8H (音画升级款)</span>
                  <span className="text-zinc-400 text-[17px] xl:text-[19px]">预算高一些，希望明显提升画质与高级感的进阶用户</span>
                </div>
                <div className="leading-relaxed border-t border-white/[0.06] pt-3.5">
                  <span className="text-white font-bold block text-[19px] xl:text-[21px] mb-1">A10H (系列旗舰款)</span>
                  <span className="text-zinc-400 text-[17px] xl:text-[19px]">追求A系列最顶尖配置与最强参数的科技发烧友</span>
                </div>
              </div>
            </div>

            {/* Q系列梯队 */}
            <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6">
              <div className="text-[28px] xl:text-[30px] font-extrabold text-amber-400 font-['MiSans'] mb-1">
                Q系列 · 线下高体验（分体与质感）
              </div>
              <div className="flex flex-col gap-4 pl-1">
                <div className="leading-relaxed">
                  <span className="text-white font-bold block text-[19px] xl:text-[21px] mb-1">Q7H (高端均衡款)</span>
                  <span className="text-zinc-400 text-[17px] xl:text-[19px]">被壁画功能吸引，看重线下真机质感的品质用户</span>
                </div>
                <div className="leading-relaxed border-t border-white/[0.06] pt-3.5">
                  <span className="text-white font-bold block text-[19px] xl:text-[21px] mb-1">Q8H (分体顶配款)</span>
                  <span className="text-zinc-400 text-[17px] xl:text-[19px]">被壁画功能吸引，同时要求极致画质与分体声学的高端家庭</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 右栏：具体数据 ( w-[1200px] ) ==================== */}
        <div className="absolute left-[640px] top-0 w-[1200px] bottom-0 flex flex-col py-2 min-h-0">
          <h2 className="text-[34px] font-bold text-white font-['MiSans'] border-b border-zinc-900 pb-3 mb-3 select-none shrink-0">
            具体数据
          </h2>
          <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#09090b]/40 w-full flex-1 min-h-0 flex flex-col shadow-inner">
            {/* 表头 */}
            <div className="grid grid-cols-[200px_220px_340px_1fr] shrink-0 border-b border-[#004CE5]/30 bg-[#004CE5]/15 text-white text-[16px] font-bold font-['MiSans']">
              <div className="px-4 py-[21px] border-r border-[#004CE5]/20">型号</div>
              <div className="px-4 py-[21px] border-r border-[#004CE5]/20">零售价格对照</div>
              <div className="px-4 py-[21px] border-r border-[#004CE5]/20">核心配置参数</div>
              <div className="px-4 py-[21px]">竞品对照与竞争格局</div>
            </div>

            {/* 表体：5 行均分剩余高度 */}
            <div className="flex-1 min-h-0 grid grid-rows-5">
              {tableData.map((row, idx) => {
                const isQSeries = row.series.startsWith("Q系列");
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-[200px_220px_340px_1fr] min-h-0 border-b border-zinc-900/80 last:border-b-0 text-[14px] leading-snug font-sans"
                  >
                    {/* Model & Position */}
                    <div className="px-4 py-2.5 border-r border-zinc-900/80 font-['MiSans'] flex flex-col justify-center">
                      <div className="font-bold text-white text-[16px] xl:text-[18px]">
                        {row.model.replace(/\s*\(.*?\)/, '')}
                      </div>
                      <div className={`inline-block self-start text-[10px] font-extrabold px-1.5 py-0.5 rounded mt-1.5 ${
                        isQSeries
                          ? 'bg-amber-950/50 text-amber-400 border border-amber-900/30'
                          : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                      }`}>
                        {row.series}
                      </div>
                    </div>

                    {/* Price Data */}
                    <div className="px-4 py-2.5 border-r border-zinc-900/80 text-zinc-300 whitespace-pre-line font-medium flex flex-col justify-center">
                      {row.price}
                    </div>

                    {/* Specs Data */}
                    <div className="px-4 py-2.5 border-r border-zinc-900/80 text-zinc-300 whitespace-pre-line flex flex-col justify-center">
                      {row.specs}
                    </div>

                    {/* Competitor Comparison */}
                    <div className="px-4 py-2.5 text-zinc-300 whitespace-pre-line min-h-0 overflow-hidden flex flex-col justify-center">
                      {row.compNotes.split('\n').map((line, lIdx) => {
                        const isHeader = lIdx === 0;
                        if (isHeader) {
                          return (
                            <div key={lIdx} className="font-bold text-zinc-200 mb-1 text-[13px] xl:text-[14px]">
                              {line}
                            </div>
                          );
                        }
                        return (
                          <div key={lIdx} className="text-[12px] xl:text-[13px] text-zinc-400 pl-2 leading-relaxed mt-0.5">
                            {line}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthFiveModels.hideHeader = true;
