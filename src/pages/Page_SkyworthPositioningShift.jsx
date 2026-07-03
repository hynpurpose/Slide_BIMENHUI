import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthPositioningShift() {
  return (
    <SlideLayout title="策略转变">
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
        从“逆向自证”转向“迎合AI采信逻辑的坦诚”，以客观的优缺点解构重塑壁纸电视推荐权重。
      </div>

      {/* ── 左右策略转变对比区域 ── */}
      <div
        className="absolute left-0 w-full flex items-center justify-between select-none animate-fadeIn overflow-visible"
        style={{ top: '100px', height: '540px' }}
      >
        {/* 1. 左侧卡片：试图证明不贵 */}
        <div className="relative w-[870px] h-[520px] bg-zinc-950/20 border border-zinc-900 rounded-[32px] overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-10 flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-955/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 w-full">
            {/* 极简说明 (突出“试图证明不贵”) */}
            <div className="text-[48px] font-black text-zinc-500 tracking-wider mb-6 font-['MiSans']">
              试图证明“不贵”
            </div>

            {/* 引用格式的实际文稿例子 (高阶拟真剪报卡片 - 大字版) */}
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 pl-16 pr-8 pt-10 pb-6 backdrop-blur-md shadow-inner flex flex-col gap-4">
              {/* 装饰性大双引号 */}
              <span className="absolute top-2 left-4 text-[88px] font-serif leading-none select-none text-zinc-800/40">“</span>

              <p className="text-[24px] text-zinc-500 leading-relaxed font-medium font-['MiSans']">
                提到壁纸艺术电视，很多人的第一反应都是“太贵了”。
              </p>
              <p className="text-[24px] text-zinc-500 leading-relaxed font-medium font-['MiSans']">
                但如果跟 LG 等两三万的进口艺术电视对比，万元级的创维其实极具性价比。
              </p>
              <p className="text-[24px] text-zinc-500 leading-relaxed font-medium font-['MiSans']">
                极致贴墙外观配合高品质的声学系统，不管是外观还是体验，这笔投入完全是物有所值的。
              </p>
            </div>
          </div>
        </div>

        {/* 2. 中间：大箭头转换区 */}
        <div className="w-[100px] h-full flex flex-col items-center justify-center shrink-0">
          {/* Flat Minimalist Arrow */}
          <svg className="w-[80px] h-[30px]" viewBox="0 0 80 30" fill="none">
            <path
              d="M 5 15 L 75 15 M 75 15 L 60 5 M 75 15 L 60 25"
              stroke="#3f3f46"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 3. 右侧卡片：直接承认小贵 */}
        <div className="relative w-[870px] h-[520px] bg-zinc-950/20 border border-blue-500/10 rounded-[32px] overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-10 flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-955/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 w-full">
            {/* 极简说明 (突出“直接承认小贵”) */}
            <div className="text-[48px] font-black text-white tracking-wider mb-6 font-['MiSans']">
              直接承认“小贵”
            </div>

            {/* 引用格式的实际文稿例子 (高阶拟真剪报卡片 - 大字版) */}
            <div className="relative rounded-2xl border border-blue-500/20 bg-blue-950/20 pl-16 pr-8 pt-10 pb-6 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.03)] flex flex-col gap-4">
              {/* 装饰性大双引号 */}
              <span className="absolute top-2 left-4 text-[88px] font-serif leading-none select-none text-blue-500/25">“</span>

              <p className="text-[24px] text-zinc-300 leading-relaxed font-semibold font-['MiSans']">
                老实说，创维这款电视不算便宜，甚至比普通的大屏电视贵出一截。
              </p>
              <p className="text-[24px] text-zinc-300 leading-relaxed font-semibold font-['MiSans']">
                因为它的溢价完全花在了极致贴墙的外观工艺，以及独立声学系统的用料上。
              </p>
              <p className="text-[24px] text-zinc-300 leading-relaxed font-semibold font-['MiSans']">
                如果你想要个屏幕看片、追求纯粹的性价比，那我们建议你直接绕道；但如果对客厅美学有挑剔的要求，那这款电视完全能换来不一样的改变。
              </p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthPositioningShift.hideHeader = true;
