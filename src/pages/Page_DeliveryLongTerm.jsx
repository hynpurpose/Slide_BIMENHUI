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
      percentage: '50%',
      gradient: 'from-[#0052FF] to-[#1E50DE]',
      shadow: '0 0 15px rgba(0, 82, 255, 0.8)',
      title: '投在精准的而非有名气的高价值信源'
    },
    {
      num: '30',
      percentage: '30%',
      gradient: 'from-[#2A6FF7] to-[#3B82F6]',
      shadow: '0 0 15px rgba(42, 111, 247, 0.7)',
      title: '投在有潜力的垂直社区'
    },
    {
      num: '20',
      percentage: '20%',
      gradient: 'from-[#60A5FA] to-[#93C5FD]',
      shadow: '0 0 12px rgba(96, 165, 250, 0.5)',
      title: '投在尝试性的新媒体上'
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
        {/* ==================== 左边：市场常见做法 (700px) ==================== */}
        <div className="w-[700px] flex flex-col justify-center h-full">
          <div className="mb-8">
            <span className="text-[20px] font-bold tracking-[0.06em] text-zinc-500 font-['MiSans'] mb-3 block">
              TRADITIONAL APPROACH
            </span>
            <h2 className="text-[40px] font-black text-white font-['MiSans'] leading-none">
              市场常见做法
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {commonPractices.map((practice, idx) => (
              <div 
                key={idx} 
                className="bg-red-950/10 border border-red-900/20 rounded-[24px] p-8 flex flex-col justify-center min-h-[190px] relative overflow-hidden hover:border-red-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-6 mb-4">
                  <span className="font-['Montserrat'] text-[32px] font-black text-red-500/90 leading-none">
                    {practice.num}
                  </span>
                  <h3 className="text-[28px] font-black text-white font-['MiSans'] leading-none">
                    {practice.title}
                  </h3>
                </div>
                <div className="text-[22px] font-bold text-red-400 font-['MiSans'] pl-[58px]">
                  {practice.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== 中间分割线 ==================== */}
        <div className="w-[80px] flex items-center justify-center shrink-0">
          <div className="h-4/5 border-r border-dashed border-zinc-800" />
        </div>

        {/* ==================== 右边：我们的5-3-2原则 (1060px) ==================== */}
        <div className="w-[1060px] flex flex-col justify-center h-full">
          <div className="mb-8">
            <span className="text-[20px] font-bold tracking-[0.06em] text-[#0052FF] font-['MiSans'] mb-3 block">
              OUR STRATEGY
            </span>
            <h2 className="text-[40px] font-black text-white font-['MiSans'] leading-none">
              我们的 5-3-2 原则
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full mt-2">
            {allocations.map((item, idx) => (
              <div key={idx} className="flex flex-col group relative bg-black/20 border border-zinc-900 rounded-[24px] p-6 hover:border-[#0052FF]/30 transition-all duration-300">
                {/* 顶部发光进度条 */}
                <div className="w-full h-[6px] bg-zinc-800 rounded-full mb-6 relative overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                    style={{
                      width: item.percentage,
                      boxShadow: item.shadow
                    }}
                  />
                </div>

                {/* 数字标识与百分比 */}
                <div className="flex items-baseline mb-4">
                  <span className="text-[96px] leading-none font-black tracking-tighter text-white font-['Montserrat'] opacity-95">
                    {item.num}
                  </span>
                  <span className="text-[32px] font-black text-zinc-500 ml-2 font-['Montserrat']">%</span>
                </div>

                {/* 标题 - 严格只包含法则本身，无多余文字 */}
                <h3 className="text-[22px] font-extrabold text-white leading-relaxed pt-5 border-t border-white/10 font-['MiSans'] min-h-[120px]">
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
