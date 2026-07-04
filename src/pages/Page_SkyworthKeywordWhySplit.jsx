import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthKeywordWhySplit() {
  return (
    <SlideLayout title="监测词与优化词">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '36px' }}
      >
        {/* 唯一重点：一句话点出分类依据 */}
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-10"
          style={{ fontSize: '40px', lineHeight: '1.2' }}
        >
          区分依据：这个问题里，<strong className="text-white font-bold">「创维」会不会一定出现？</strong>
        </p>

        {/* 对比表：行高 135 / 135 / 170 / 135 px（各减 6px） */}
        <div
          className="shrink-0 grid rounded-[28px] border border-zinc-800 overflow-hidden bg-[#0D0D10]/60"
          style={{
            gridTemplateColumns: '300px 1fr 1fr',
            gridTemplateRows: '135px 135px 170px 135px',
          }}
        >
          {/* ── 表头行 ── */}
          <div className="border-b border-zinc-800" />
          <div className="border-b border-l border-zinc-800 px-10 flex items-center">
            <div className="text-[44px] font-black text-white font-['MiSans'] leading-none">优化词</div>
          </div>
          <div className="border-b border-l border-zinc-800 px-10 flex items-center">
            <div className="text-[44px] font-black text-white font-['MiSans'] leading-none">监测词</div>
          </div>

          {/* ── 例子行 ── */}
          <div className="border-b border-zinc-800 px-8 flex items-center">
            <span className="text-[26px] text-zinc-500 font-medium font-['MiSans']">举例</span>
          </div>
          <div className="border-b border-l border-zinc-800 px-10 flex items-center">
            <span className="text-[30px] text-zinc-300 font-medium font-['MiSans']">“好看的电视推荐”</span>
          </div>
          <div className="border-b border-l border-zinc-800 px-10 flex items-center">
            <span className="text-[30px] text-zinc-300 font-medium font-['MiSans']">“创维跟海信比哪个好”</span>
          </div>

          {/* ── 判定行（视觉焦点） ── */}
          <div className="border-b border-zinc-800 px-8 flex items-center bg-white/[0.04]">
            <span className="text-[26px] text-zinc-400 font-semibold font-['MiSans'] leading-snug">
              「创维」会出现吗
            </span>
          </div>
          <div className="border-b border-l border-zinc-800 px-10 flex items-center gap-5 bg-white/[0.04]">
            <span className="text-[48px] text-zinc-600 font-black leading-none">✕</span>
            <span className="text-[48px] font-black text-zinc-400 font-['MiSans'] leading-none">不一定</span>
          </div>
          <div className="border-b border-l border-zinc-800 px-10 flex items-center gap-5 bg-white/[0.04]">
            <span className="text-[48px] text-white font-black leading-none">✓</span>
            <span className="text-[48px] font-black text-white font-['MiSans'] leading-none">一定会</span>
          </div>

          {/* ── 关注指标行 ── */}
          <div className="px-8 flex items-center">
            <span className="text-[26px] text-zinc-500 font-medium font-['MiSans']">分析维度</span>
          </div>
          <div className="border-l border-zinc-800 px-10 flex items-center gap-4">
            <span className="px-6 py-2.5 rounded-xl bg-zinc-800 text-[28px] text-white font-bold font-['MiSans']">提及率</span>
            <span className="px-6 py-2.5 rounded-xl bg-zinc-800 text-[28px] text-white font-bold font-['MiSans']">出现位置</span>
          </div>
          <div className="border-l border-zinc-800 px-10 flex items-center gap-4">
            <span className="px-6 py-2.5 rounded-xl bg-zinc-800 text-[28px] text-white font-bold font-['MiSans']">信息准确</span>
            <span className="px-6 py-2.5 rounded-xl bg-zinc-800 text-[28px] text-white font-bold font-['MiSans']">有无负面</span>
          </div>
        </div>

        <div className="flex-1 min-h-0" />

        {/* 底部一句：贴底对齐 */}
        <p
          className="text-zinc-400 font-normal font-['MiSans'] shrink-0 mt-8"
          style={{ fontSize: '28px', lineHeight: '1.4' }}
        >
          若混在一起算，监测词天然 100% 出现，会把整体
          <strong className="text-white font-bold">提及率虚高</strong>，数据失去意义。
        </p>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordWhySplit.hideHeader = true;
