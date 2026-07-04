import React from 'react';
import SlideLayout from '../components/SlideLayout';

const online = [
  { model: 'A7H Pro', tier: '基础款', focus: '销量王者，守住主力预算带' },
  { model: 'A8H', tier: '音画升级款', focus: '卡位市场空档，独占价位' },
  { model: 'A10H', tier: '系列旗舰款', focus: '对标海外高端，撑起天花板' },
];

const offline = [
  { model: 'Q7H', tier: '高端均衡款', focus: '主打线下质感体验' },
  { model: 'Q8H', tier: '分体顶配款', focus: '大客厅高端影音' },
];

function ModelChip({ model, tier, focus }) {
  return (
    <div className="flex-1 rounded-2xl border border-zinc-800 bg-[#0D0D10] px-7 py-6 flex flex-col justify-center">
      <div className="flex items-baseline gap-3">
        <span className="text-[34px] font-black text-white font-['MiSans'] leading-none">{model}</span>
        <span className="text-[22px] text-zinc-500 font-['MiSans']">{tier}</span>
      </div>
      <p className="text-[23px] text-zinc-400 font-['MiSans'] font-medium mt-3 leading-snug">{focus}</p>
    </div>
  );
}

export default function Page_SkyworthProductStrategy() {
  return (
    <SlideLayout title="五款产品的分工">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '24px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-10"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          线上<strong className="text-white font-bold">打参数与专属词</strong>，线下<strong className="text-white font-bold">打体验与引导词</strong>。
        </p>

        <div className="flex-1 min-h-0 flex flex-col gap-8">
          {/* A系列 线上 */}
          <div className="flex-1 rounded-[28px] border border-zinc-800 bg-zinc-950/30 p-9 flex flex-col">
            <div className="flex items-center justify-between shrink-0 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[34px] font-black text-white font-['MiSans']">A 系列</span>
                <span className="text-[24px] text-zinc-500 font-['MiSans']">线上配置线 · 3 款</span>
              </div>
              <span className="px-5 py-2 rounded-full bg-[#004CE5]/15 border border-[#004CE5]/40 text-[24px] text-white font-bold font-['MiSans']">
                主攻 产品专属词 + 参数
              </span>
            </div>
            <div className="flex-1 flex gap-5">
              {online.map((m) => <ModelChip key={m.model} {...m} />)}
            </div>
          </div>

          {/* Q系列 线下 */}
          <div className="flex-1 rounded-[28px] border border-zinc-800 bg-zinc-950/30 p-9 flex flex-col">
            <div className="flex items-center justify-between shrink-0 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[34px] font-black text-white font-['MiSans']">Q 系列</span>
                <span className="text-[24px] text-zinc-500 font-['MiSans']">线下体验线 · 2 款</span>
              </div>
              <span className="px-5 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-[24px] text-white font-bold font-['MiSans']">
                不争线上词，主攻 线下体验 / 去哪看
              </span>
            </div>
            <div className="flex-1 flex gap-5">
              {offline.map((m) => <ModelChip key={m.model} {...m} />)}
              {/* 引导说明占位，与线上三列对齐 */}
              <div className="flex-1 rounded-2xl border border-dashed border-zinc-800 px-7 py-6 flex items-center">
                <p className="text-[23px] text-zinc-500 font-['MiSans'] leading-snug">
                  抓住<strong className="text-zinc-300 font-semibold">「看得见 / 去哪看」</strong>类词，提前把到店路径推给用户。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthProductStrategy.hideHeader = true;
