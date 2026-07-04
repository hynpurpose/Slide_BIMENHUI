import React from 'react';
import SlideLayout from '../components/SlideLayout';

// AI 实际回答里会混合推荐多个品牌与型号
const pool = [
  { brand: '索尼', model: 'X90L', sw: false },
  { brand: '创维', model: 'A7H Pro', sw: true },
  { brand: '三星', model: 'The Frame', sw: false },
  { brand: '创维', model: 'A8H', sw: true },
  { brand: 'TCL', model: 'T7K', sw: false },
  { brand: '海信', model: 'E8N', sw: false },
  { brand: '创维', model: 'A10H', sw: true },
  { brand: 'LG', model: 'B4', sw: false },
  { brand: '小米', model: 'S Pro', sw: false },
  { brand: '创维', model: 'Q8H', sw: true },
  { brand: '华为', model: '智慧屏 V5', sw: false },
  { brand: '创维', model: 'A5D', sw: true },
];

const TARGET = 'A8H';

function Chip({ label, state }) {
  // state: 'hit'(白) | 'sw'(创维但不算, 描边) | 'other'(其他品牌, 灰)
  const base = "px-4 py-2.5 rounded-xl text-[26px] font-bold font-['MiSans'] leading-none text-center truncate";
  if (state === 'hit') return <span className={`${base} bg-white text-black`}>{label}</span>;
  if (state === 'sw')
    return <span className={`${base} bg-transparent border border-dashed border-zinc-600 text-zinc-500`}>{label}</span>;
  return <span className={`${base} bg-zinc-900/40 text-zinc-600`}>{label}</span>;
}

export default function Page_SkyworthKeywordOptTwoTypes() {
  return (
    <SlideLayout title="壁纸电视大类词与产品专属词">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '30px' }}
      >
        {/* 重点句 */}
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-8"
          style={{ fontSize: '38px', lineHeight: '1.2' }}
        >
          大类词看<strong className="text-white font-bold">创维有没有被推进来</strong>；专属词看<strong className="text-white font-bold">框定那款有没有被推准</strong>。
        </p>

        {/* 双栏 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
          {/* ============ 左：大类词 ============ */}
          <div className="h-full rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 p-9 flex flex-col">
            <div className="flex items-baseline gap-4 shrink-0">
              <span className="text-[38px] font-black text-white font-['MiSans'] leading-none">大类词</span>
              <span className="text-[24px] text-zinc-500 font-['MiSans']">品类选择阶段</span>
            </div>

            <div className="shrink-0 mt-6 flex flex-col items-start gap-3">
              <span className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/60 text-[24px] text-zinc-300 font-['MiSans']">“画质好的壁纸电视推荐”</span>
              <span className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/60 text-[24px] text-zinc-300 font-['MiSans']">“壁纸电视怎么选”</span>
            </div>

            {/* 推荐池：所有创维产品都算命中 */}
            <div className="flex-1 min-h-0 mt-7 flex flex-col justify-start">
              <span className="text-[22px] text-zinc-500 font-['MiSans'] mb-4">AI 可能推荐结果</span>
              <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-6 grid grid-cols-4 gap-3">
                {pool.map((p) => (
                  <Chip
                    key={p.brand + p.model}
                    label={`${p.brand} ${p.model}`}
                    state={p.sw ? 'hit' : 'other'}
                  />
                ))}
              </div>
            </div>

            <div className="shrink-0 mt-7 flex items-center gap-4">
              <span className="text-[40px] text-white font-black leading-none">✓</span>
              <span className="text-[28px] text-zinc-300 font-['MiSans']">
                <strong className="text-white font-bold">任意一款创维</strong>被推荐，即算有效提及
              </span>
            </div>
          </div>

          {/* ============ 右：产品专属词 ============ */}
          <div className="h-full rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 p-9 flex flex-col">
            <div className="flex items-baseline gap-4 shrink-0">
              <span className="text-[38px] font-black text-white font-['MiSans'] leading-none">产品专属词</span>
              <span className="text-[24px] text-zinc-500 font-['MiSans']">框定具体特征 / 人群</span>
            </div>

            <div className="shrink-0 mt-6 flex flex-col items-start gap-3">
              <span className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/60 text-[24px] text-zinc-300 font-['MiSans']">“适合小客厅的入门壁纸电视”<span className="text-zinc-500"> → A8H</span></span>
              <span className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/60 text-[24px] text-zinc-300 font-['MiSans']">“主打线下的高端壁纸电视”<span className="text-zinc-500"> → A10H</span></span>
            </div>

            {/* 推荐池：只有框定那款算命中 */}
            <div className="flex-1 min-h-0 mt-7 flex flex-col justify-start">
              <span className="text-[22px] text-zinc-500 font-['MiSans'] mb-4">AI 可能推荐结果</span>
              <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-6 grid grid-cols-4 gap-3">
                {pool.map((p) => (
                  <Chip
                    key={p.brand + p.model}
                    label={`${p.brand} ${p.model}`}
                    state={p.sw ? (p.model === TARGET ? 'hit' : 'sw') : 'other'}
                  />
                ))}
              </div>
              <span className="text-[20px] text-zinc-600 font-['MiSans'] mt-3">虚线框：是创维、但不是框定的那款，不算推准</span>
            </div>

            <div className="shrink-0 mt-7 flex items-center gap-4">
              <span className="text-[40px] text-white font-black leading-none">✓</span>
              <span className="text-[28px] text-zinc-300 font-['MiSans']">
                只有<strong className="text-white font-bold">框定的那款（A8H）</strong>被推准，才算命中
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordOptTwoTypes.hideHeader = true;
