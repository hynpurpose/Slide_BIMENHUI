import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionOther() {
  const [imgFailed, setImgFailed] = useState(false);
  const middleImagePath = "/images/trend-consumer-trust.png";

  const categories = [
    {
      name: "品牌词",
      words: [
        "创维电视防伪查询方法",
        "创维壁纸电视价格表2026",
        "创维智能电视评测好用吗",
        "创维壁纸电视深度体验",
        "创维电视色彩对比度调整"
      ]
    },
    {
      name: "场景词",
      words: [
        "极简客厅背景墙电视推荐",
        "新房装修大平层护眼电视",
        "游戏党买什么刷新率电视",
        "卧室床头背景挂墙电视",
        "老人视力不好买多大电视"
      ]
    },
    {
      name: "竞品词",
      words: [
        "创维对比三星画壁电视",
        "创维和海信壁纸电视选哪个",
        "TCL和创维电视哪个质量好",
        "创维对比索尼OLED电视",
        "LG与创维壁纸电视对比"
      ]
    },
    {
      name: "产品词",
      words: [
        "哑光屏艺术画壁电视",
        "QD-Mini LED电视评测",
        "超薄无缝贴墙电视型号",
        "独立分体式客厅音响电视",
        "智能高刷抗光护眼电视"
      ]
    }
  ];

  return (
    <SlideLayout
      title="市场上其他做法"
      subtitle="市场上其他做法：AI批量生成 与 复制百度、社媒热词"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-between gap-12 relative z-10 select-none">
        
        {/* ==================== 左侧：AI 批量生成 ==================== */}
        <div className="w-[880px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">做法一：AI批量生成</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body: 2x2 Grid with enlarged font size, vertically centered */}
          <div className="flex-grow p-8 bg-zinc-950 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 pl-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <span className="text-[26px] font-bold text-white border-l-4 border-[#004CE5] pl-2.5 leading-none font-['MiSans']">
                    {cat.name}
                  </span>
                  <div className="flex flex-col gap-3 pl-3">
                    {cat.words.map((word, wIdx) => (
                      <div
                        key={wIdx}
                        className="text-zinc-300 text-[22px] font-medium leading-normal flex items-center gap-2.5"
                      >
                        <span className="text-[#004CE5] font-black font-mono text-[16px] shrink-0">
                          {String(idx * 5 + wIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="truncate">{word}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== 右侧：复制百度、社媒热词 (带图片位) ==================== */}
        <div className="w-[880px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">做法二：照抄百度、社媒数据</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body: Taller Picture Slot */}
          <div className="flex-grow p-6 bg-zinc-950 flex flex-col justify-between">
            {/* Image Placeholder Frame (Taller) */}
            <div className="flex-grow bg-white border border-zinc-200 rounded-xl relative overflow-hidden flex items-center justify-start h-[620px] shadow-inner">
              {!imgFailed ? (
                <img
                  src={middleImagePath}
                  alt="百度社媒搜索词热度趋势"
                  className="w-full h-full object-contain object-left"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 bg-zinc-50">
                  <ImageIcon className="w-16 h-16 text-zinc-400 opacity-60" />
                  <span className="text-zinc-500 font-bold text-[22px] font-['MiSans']">
                    [ 百度/社媒搜索数据图表 ]
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footnote absolutely positioned below the right card */}
        <div className="absolute bottom-[-48px] right-0 w-[880px] text-center text-white text-[22px] font-sans font-bold z-20">
          数据来源：百度广告搜索指数
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOWordSelectionOther.hideHeader = true;
