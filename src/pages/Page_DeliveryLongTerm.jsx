import React from 'react';
import SlideLayout from '../components/SlideLayout';

const COMMON_PRACTICES = [
  {
    num: '01',
    title: '自建或免费账号',
    tag: '不花钱',
    note: '低权重号易被查重过滤，内容留存差'
  },
  {
    num: '02',
    title: '有名高权重信源',
    tag: '价格高，但不准确',
    note: '只看引用率排名，错把「显示引用」当真实影响'
  }
];

const ALLOCATIONS = [
  {
    num: 50,
    title: '精准高权重信源',
    insight: '区分显示引用与真实影响，不投名高实低平台',
    hint: '豆包中抖音常被引用，AI 却仅读标题与字幕',
    color: '#0052FF',
    flex: 5
  },
  {
    num: 30,
    title: '潜力垂直社区',
    insight: '整体引用率低，一旦被引却可主导答案结构',
    hint: '白酒「酒排名」— 独家排他合作，竞品难追赶',
    color: '#2A6FF7',
    flex: 3
  },
  {
    num: 20,
    title: '尝试性新媒体',
    insight: '跟踪模型更新方向，在数据验证前抢先布局',
    hint: null,
    color: '#60A5FA',
    flex: 2
  }
];

export default function Page_DeliveryLongTerm() {
  return (
    <SlideLayout title="初阶做法 VS 我们5-3-2原则">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn relative z-10">

        {/* ── 顶部核心结论 ── */}
        <p className="text-[28px] text-zinc-400 font-['MiSans'] leading-snug mb-8 shrink-0">
          长期预算分配：
          <span className="text-white font-bold">不跟引用率排名走</span>
          ，而是锁定真正左右 AI 答案的信源
        </p>

        {/* ── 双栏主体 ── */}
        <div className="flex-grow flex items-stretch gap-0 min-h-0">

          {/* ==================== 左栏：市场常见做法 ==================== */}
          <div className="flex-1 flex flex-col pr-8 border-r border-white/[0.12]">
            <h2 className="text-[34px] font-black text-white font-['MiSans'] leading-none mb-6 shrink-0">
              市场常见做法
            </h2>

            <div className="flex-grow flex flex-col justify-center gap-6">
              {COMMON_PRACTICES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-stretch gap-6 bg-red-950/10 border border-red-900/25 rounded-2xl px-7 py-6 hover:border-red-500/30 transition-colors duration-300"
                >
                  <span className="font-['Montserrat'] text-[52px] font-black text-red-500/90 leading-none shrink-0 w-[72px] flex items-center">
                    {item.num}
                  </span>
                  <div className="w-px bg-red-900/25 shrink-0 self-stretch" />
                  <div className="flex flex-col justify-center gap-2 min-w-0">
                    <h3 className="text-[28px] font-black text-white font-['MiSans'] leading-tight">
                      {item.title}
                    </h3>
                    <span className="text-[20px] font-bold text-red-400 font-['MiSans']">
                      {item.tag}
                    </span>
                    <p className="text-[19px] text-zinc-500 font-['MiSans'] leading-snug mt-1">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 中间 VS ==================== */}
          <div className="w-[72px] shrink-0 flex items-center justify-center">
            <span className="text-white font-black text-[22px] font-mono tracking-widest drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
              VS
            </span>
          </div>

          {/* ==================== 右栏：5-3-2 原则 ==================== */}
          <div className="flex-1 flex flex-col pl-8">
            <div className="flex items-end justify-between mb-6 shrink-0">
              <h2 className="text-[34px] font-black text-[#0052FF] font-['MiSans'] leading-none">
                我们的 5-3-2 原则
              </h2>
              {/* 比例条 */}
              <div className="flex items-center gap-3">
                <div className="flex h-[10px] w-[200px] rounded-full overflow-hidden">
                  {ALLOCATIONS.map((item, idx) => (
                    <div
                      key={idx}
                      style={{ flex: item.flex, backgroundColor: item.color }}
                    />
                  ))}
                </div>
                <span className="text-[16px] text-zinc-600 font-bold font-['Montserrat'] tracking-wide">
                  50 · 30 · 20
                </span>
              </div>
            </div>

            <div className="flex-grow flex flex-col gap-4 min-h-0">
              {ALLOCATIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-stretch gap-6 rounded-2xl px-7 py-5 border transition-colors duration-300 hover:bg-white/[0.02]"
                  style={{
                    flex: item.flex,
                    borderColor: `${item.color}33`,
                    backgroundColor: `${item.color}08`,
                    boxShadow: `0 4px 24px ${item.color}06`
                  }}
                >
                  {/* 百分比 */}
                  <div className="flex items-baseline shrink-0 w-[100px] self-center">
                    <span
                      className="text-[56px] font-black font-['Montserrat'] leading-none"
                      style={{ color: item.color }}
                    >
                      {item.num}
                    </span>
                    <span className="text-[22px] font-black text-zinc-600 ml-0.5 font-['Montserrat']">%</span>
                  </div>

                  <div className="w-px shrink-0 self-stretch" style={{ backgroundColor: `${item.color}30` }} />

                  {/* 内容 */}
                  <div className="flex flex-col justify-center gap-1.5 min-w-0 py-1">
                    <h3 className="text-[26px] font-black text-white font-['MiSans'] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[20px] text-zinc-300 font-['MiSans'] leading-snug">
                      {item.insight}
                    </p>
                    {item.hint && (
                      <p className="text-[17px] text-zinc-600 font-['MiSans'] leading-snug">
                        {item.hint}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_DeliveryLongTerm.hideHeader = true;
