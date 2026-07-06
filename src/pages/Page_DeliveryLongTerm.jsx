import React from 'react';
import SlideLayout from '../components/SlideLayout';

const COMMON = [
  {
    num: '01',
    title: '自建或免费账号',
    desc: '不花钱 — 低权重号易被查重过滤，内容留存差',
  },
  {
    num: '02',
    title: '有名高权重信源',
    desc: '价格高但不准确 — 只看引用率排名，错把「显示引用」当真实影响',
  },
];

const ALLOCATION = [
  {
    pct: 50,
    title: '精准高权重信源',
    desc: '区分显示引用与真实影响，不投名高实低平台',
  },
  {
    pct: 30,
    title: '潜力垂直社区',
    desc: '引用率低但被引后可主导答案结构 — 例：白酒「酒排名」独家合作',
  },
  {
    pct: 20,
    title: '尝试性新媒体',
    desc: '跟踪模型更新方向，在数据验证前抢先布局新权重媒体',
  },
];

function PanelRow({ num, title, desc, accent = false, isLast = false }) {
  return (
    <div
      className={`flex-1 flex items-center gap-8 px-10 min-h-0 ${
        !isLast ? 'border-b border-white/[0.06]' : ''
      }`}
    >
      <div className="w-[120px] shrink-0 flex items-baseline justify-end">
        <span
          className={`font-['Montserrat'] font-black leading-none ${
            accent ? 'text-[#004CE5]' : 'text-zinc-700'
          }`}
          style={{ fontSize: accent ? '72px' : '64px' }}
        >
          {num}
        </span>
        {accent && (
          <span className="text-[28px] font-black text-zinc-600 font-['Montserrat'] ml-0.5">%</span>
        )}
      </div>

      <div className="w-px h-[72px] bg-white/[0.08] shrink-0" />

      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-[30px] font-black text-white font-['MiSans'] leading-tight">
          {title}
        </h3>
        <p className="text-[21px] text-zinc-500 font-['MiSans'] leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Page_DeliveryLongTerm() {
  return (
    <SlideLayout title="初阶做法 VS 我们5-3-2原则">
      <div
        className="absolute w-[1840px] h-full flex flex-col select-none animate-fadeIn"
        style={{ top: 0 }}
      >
        {/* 双栏 */}
        <div className="flex-1 min-h-0 flex gap-8">

          {/* ── 左：市场常见做法 ── */}
          <div className="flex-1 flex flex-col min-w-0">
            <h2 className="text-[42px] font-black text-zinc-400 font-['MiSans'] mb-6 shrink-0 leading-none">
              市场常见做法
            </h2>
            <div className="flex-1 min-h-0 bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px] flex flex-col overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
              {COMMON.map((item, idx) => (
                <PanelRow
                  key={item.num}
                  num={item.num}
                  title={item.title}
                  desc={item.desc}
                  isLast={idx === COMMON.length - 1}
                />
              ))}
            </div>
          </div>

          {/* ── 中：VS ── */}
          <div className="w-[48px] shrink-0 flex items-center justify-center self-center">
            <span className="text-[20px] font-black text-zinc-600 font-mono tracking-[0.3em]">
              VS
            </span>
          </div>

          {/* ── 右：5-3-2 原则 ── */}
          <div className="flex-1 flex flex-col min-w-0">
            <h2 className="text-[42px] font-black text-white font-['MiSans'] mb-6 shrink-0 leading-none">
              我们的 <span className="text-[#004CE5]">5 · 3 · 2</span> 原则
            </h2>
            <div className="flex-1 min-h-0 bg-[#0B0D19]/45 border border-[#004CE5]/20 rounded-[24px] flex flex-col overflow-hidden shadow-[0_15px_35px_rgba(0,76,229,0.06)]">
              {ALLOCATION.map((item, idx) => (
                <PanelRow
                  key={item.pct}
                  num={item.pct}
                  title={item.title}
                  desc={item.desc}
                  accent
                  isLast={idx === ALLOCATION.length - 1}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_DeliveryLongTerm.hideHeader = true;
