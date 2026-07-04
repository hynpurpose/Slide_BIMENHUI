import React from 'react';
import SlideLayout from '../components/SlideLayout';

const questions = [
  { num: '01', text: '五款产品分别的\n侧重与方向' },
  { num: '02', text: '如何用五款产品整体抬升\n「艺术电视」与创维品牌' },
  { num: '03', text: '监测词的\n意义与价值' },
];

export default function Page_SkyworthStrategyFramework() {
  return (
    <SlideLayout title="核心策略架构">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '24px' }}
      >
        {/* 导语 */}
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-12"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          先把整体策略架构讲清楚——本章回答<strong className="text-white font-bold">三个关键问题</strong>。
        </p>

        {/* 三个问题 */}
        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          {questions.map((q) => (
            <div
              key={q.num}
              className="rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 p-11 flex flex-col justify-between"
            >
              <span className="text-[96px] font-black font-['Montserrat'] text-[#004CE5] leading-none">
                {q.num}
              </span>
              <h3
                className="text-white font-black font-['MiSans'] whitespace-pre-line"
                style={{ fontSize: '40px', lineHeight: '1.35' }}
              >
                {q.text}
              </h3>
            </div>
          ))}
        </div>

        {/* 底部分组：优化词主攻 / 监测词辅助 */}
        <div className="grid grid-cols-3 gap-8 shrink-0 mt-8">
          <div className="col-span-2 border-t-2 border-white/70 pt-4">
            <span className="text-[28px] font-black text-white font-['MiSans']">优化词</span>
            <span className="text-[24px] text-zinc-500 font-['MiSans'] ml-3">主攻 · 争排名与位次</span>
          </div>
          <div className="col-span-1 border-t-2 border-zinc-700 pt-4">
            <span className="text-[28px] font-black text-zinc-300 font-['MiSans']">监测词</span>
            <span className="text-[24px] text-zinc-500 font-['MiSans'] ml-3">辅助 · 守底线</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthStrategyFramework.hideHeader = true;
