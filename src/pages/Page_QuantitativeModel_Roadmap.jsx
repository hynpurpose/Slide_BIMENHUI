import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * Alpha 模型 · 版本路线与成本壁垒
 * 讲稿：1.0 已跑通，在效果和成本上跟别家拉开差距；2.0 年底完成后，同类品牌同等预算下，
 * 客户一旦占到 AI 答案第一位，竞品很难撼动，除非愿意花 5-10 倍的钱去砸内容和投放。
 */
export default function Page_QuantitativeModel_Roadmap() {
  return (
    <SlideLayout title="从 1.0 到 2.0：把第 1 变成壁垒">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        版本迭代路线，以及它为客户筑起的<span className="text-white font-bold">竞争壁垒</span>。
      </div>

      <div className="absolute left-0 top-[70px] w-full h-[720px] flex gap-6 select-none font-['MiSans']">
        {/* 左：1.0 → 2.0 路线 */}
        <div className="w-[1150px] shrink-0 flex flex-col">
          {/* 1.0 */}
          <div className="flex-1 rounded-3xl border border-white/12 bg-white/[0.03] p-9 flex items-center gap-9">
            <div className="shrink-0 w-[190px] text-center">
              <div className="font-['Montserrat'] text-[76px] font-black text-white leading-none">1.0</div>
              <div className="mt-3 inline-block rounded-full bg-[#004CE5]/15 border border-[#004CE5]/40 px-4 py-1 text-[18px] text-blue-300 font-bold">现在 · 已跑通</div>
            </div>
            <div className="w-px self-stretch bg-white/10" />
            <div className="min-w-0">
              <div className="text-[30px] font-black text-white">已在效果与成本上拉开差距</div>
              <p className="mt-3 text-[22px] text-zinc-400 leading-relaxed">1.0 版本已经跑通，让我们在<span className="text-white font-bold">优化效果</span>和<span className="text-white font-bold">成本控制</span>上，明显跟别家拉开了距离。</p>
            </div>
          </div>

          {/* 连接箭头 */}
          <div className="shrink-0 flex justify-center py-2">
            <svg className="w-9 h-9 text-[#004CE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          {/* 2.0 */}
          <div className="flex-1 rounded-3xl border border-[#60A5FA]/50 bg-gradient-to-br from-[#003bb3]/35 to-[#001430]/35 p-9 flex items-center gap-9 shadow-[0_0_40px_rgba(0,76,229,0.2)]">
            <div className="shrink-0 w-[190px] text-center">
              <div className="font-['Montserrat'] text-[76px] font-black text-white leading-none">2.0</div>
              <div className="mt-3 inline-block rounded-full bg-white/10 border border-white/25 px-4 py-1 text-[18px] text-blue-100 font-bold">年底 · 研发中</div>
            </div>
            <div className="w-px self-stretch bg-white/15" />
            <div className="min-w-0">
              <div className="text-[30px] font-black text-white">第一名一旦占住，竞品很难撼动</div>
              <p className="mt-3 text-[22px] text-blue-100/85 leading-relaxed">同类品牌、同等预算下，我们服务的客户一旦在 AI 答案里占到<span className="text-white font-bold">第一位</span>，竞品就很难再撼动。</p>
            </div>
          </div>
        </div>

        {/* 右：成本壁垒 5-10× */}
        <div className="flex-1 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.06] p-9 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,76,229,0.12)] min-w-0">
          <div className="text-[24px] text-blue-200 font-bold leading-snug">竞品若想撼动<br />这个第 1</div>
          <div className="mt-6 flex items-end justify-center">
            <span className="font-['Montserrat'] text-[136px] font-black text-white leading-none">5–10</span>
            <span className="font-['Montserrat'] text-[72px] font-black text-[#60A5FA] leading-none mb-3 ml-1">×</span>
          </div>
          <div className="mt-4 text-[27px] font-black text-white">得花 5–10 倍的钱</div>
          <p className="mt-4 text-[21px] text-zinc-300 leading-relaxed">砸更多内容与投放才有机会追上——<br />这就是模型为客户筑起的成本壁垒。</p>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Roadmap.hideHeader = true;
