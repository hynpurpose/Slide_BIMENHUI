import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_DeliveryLongTerm() {
  const commonPractices = [
    {
      num: '01',
      title: '自建或免费账号',
      tag: '不花钱'
    },
    {
      num: '02',
      title: '有名气高权重信源',
      tag: '价格高，但不准确'
    }
  ];

  const allocations = [
    {
      num: '50',
      percentage: '%',
      title: '投在精准的而非有名气的高价值信源',
      color: '#0052FF'
    },
    {
      num: '30',
      percentage: '%',
      title: '投在有潜力的垂直社区',
      color: '#2A6FF7'
    },
    {
      num: '20',
      percentage: '%',
      title: '投在尝试性的新媒体上',
      color: '#60A5FA'
    }
  ];

  return (
    <SlideLayout title="初阶做法 VS 我们5-3-2原则">
      {/* ── 背景点状矩阵 ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ── 主排版区 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch z-10 pl-0"
        style={{ top: '30px', height: '740px' }}
      >
        {/* ==================== 左边：市场常见做法 (750px) ==================== */}
        <div className="w-[750px] flex flex-col justify-center h-full pr-4">
          <div className="mb-10">
            <h2 className="text-[42px] font-black text-white font-['MiSans'] leading-none">
              市场常见做法
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {commonPractices.map((practice, idx) => (
              <div 
                key={idx} 
                className="bg-red-950/10 border border-red-900/20 rounded-[24px] px-8 py-8 flex items-center gap-8 hover:border-red-500/30 transition-all duration-300"
              >
                {/* 左侧大数字 */}
                <span className="font-['Montserrat'] text-[56px] font-black text-red-500/90 leading-none shrink-0 w-[70px]">
                  {practice.num}
                </span>

                {/* 分割线 */}
                <div className="w-px h-16 bg-red-900/20 shrink-0" />

                {/* 右侧内容 */}
                <div className="flex-grow flex flex-col gap-2 justify-center">
                  <h3 className="text-[30px] font-black text-white font-['MiSans'] leading-tight">
                    {practice.title}
                  </h3>
                  <span className="text-[22px] font-bold text-red-400 font-['MiSans'] leading-none">
                    {practice.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== 中间分割线 ==================== */}
        <div className="w-[80px] flex items-center justify-center shrink-0">
          <div className="h-4/5 border-r border-dashed border-zinc-800" />
        </div>

        {/* ==================== 右边：我们的 5-3-2 原则 (1010px) ==================== */}
        <div className="w-[1010px] flex flex-col justify-center h-full pl-4">
          <div className="mb-10">
            <h2 className="text-[42px] font-black text-[#0052FF] font-['MiSans'] leading-none">
              我们的 5-3-2 原则
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {allocations.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-8 bg-[#0052FF]/5 border rounded-[24px] px-8 py-7 hover:bg-white/[0.01] transition-all duration-300"
                style={{
                  borderColor: `${item.color}33`,
                  boxShadow: `0 4px 20px ${item.color}02`
                }}
              >
                {/* 左侧：百分比大数字 */}
                <div className="flex items-baseline shrink-0 w-[150px]">
                  <span className="text-[64px] font-black font-['Montserrat'] text-white leading-none">
                    {item.num}
                  </span>
                  <span className="text-[26px] font-black text-zinc-500 ml-1 leading-none font-['Montserrat']">%</span>
                </div>

                {/* 分割线 */}
                <div className="w-px h-16 shrink-0" style={{ backgroundColor: `${item.color}30` }} />

                {/* 右侧：规则详情 (无多余文案) */}
                <h3 className="text-[26px] font-extrabold text-white font-['MiSans'] leading-snug flex-grow">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryLongTerm.hideHeader = true;
