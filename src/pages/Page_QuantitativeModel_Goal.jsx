import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * Alpha 模型 · 目标
 * 讲稿：同样的钱，别人做完只能把品牌推到第 3，我们能推到第 1；
 * 而且这个第 1 不是短期冲上去，而是有数据支撑、有成本壁垒、竞品很难轻易撼动的位置。
 */
export default function Page_QuantitativeModel_Goal() {
  const pillars = [
    ['有数据支撑', '不是拍脑袋冲榜，每一步都由模型算过账'],
    ['有成本壁垒', '守住第一的成本更低，追赶者的代价更高'],
    ['竞品难撼动', '是长期稳固的位置，不是短期一冲就掉'],
  ];

  return (
    <SlideLayout title="同样的钱，把品牌从第 3 推到第 1">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        我们要的不是短期冲上去，而是一个<span className="text-white font-bold">守得住</span>的第 1。
      </div>

      <div className="absolute left-0 top-[70px] w-full h-[720px] flex gap-6 select-none font-['MiSans']">
        {/* 左：同等预算 → 两种结果 */}
        <div className="w-[1050px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-10 flex flex-col">
          <div className="flex items-center gap-4 shrink-0">
            <div className="rounded-2xl bg-[#111115] border border-white/10 px-7 py-4 flex items-center gap-3">
              <span className="font-['Montserrat'] text-[42px] font-black text-white leading-none">¥</span>
              <span className="text-[26px] font-bold text-white">同样的预算</span>
            </div>
            <span className="text-[21px] text-zinc-500">投入相同 · 结果天差地别 →</span>
          </div>

          <div className="mt-8 flex-1 grid grid-cols-2 gap-6">
            {/* 别人 */}
            <div className="rounded-2xl border border-white/10 bg-black/30 p-8 flex flex-col justify-center">
              <div className="text-[22px] text-zinc-500 font-bold">别人 · 经验驱动</div>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-['Montserrat'] text-[150px] font-black text-zinc-600 leading-none">3</span>
                <span className="text-[36px] text-zinc-500 font-bold mb-6">名</span>
              </div>
              <div className="mt-3 text-[22px] text-zinc-500">钱花完，只能推到第三</div>
            </div>
            {/* 我们 */}
            <div className="rounded-2xl border border-[#60A5FA]/50 bg-gradient-to-b from-[#003bb3]/40 to-[#001430]/40 p-8 flex flex-col justify-center shadow-[0_0_40px_rgba(0,76,229,0.25)]">
              <div className="text-[22px] text-blue-300 font-bold">我们 · 模型驱动</div>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-['Montserrat'] text-[150px] font-black text-white leading-none">1</span>
                <span className="text-[36px] text-blue-200 font-bold mb-6">名</span>
              </div>
              <div className="mt-3 text-[22px] text-blue-100/90">同样的钱，推到第一</div>
            </div>
          </div>
        </div>

        {/* 右：稳的第一 · 三个支撑 */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="text-[20px] font-bold text-blue-400 tracking-wider flex items-center gap-2.5 shrink-0">
            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />而且是"稳"的第一
          </div>
          <div className="mt-5 flex-1 flex flex-col gap-5">
            {pillars.map(([t, d]) => (
              <div key={t} className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col justify-center">
                <div className="text-[27px] font-black text-white flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shrink-0" />{t}
                </div>
                <p className="mt-2.5 text-[21px] text-zinc-400 leading-relaxed pl-6">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Goal.hideHeader = true;
