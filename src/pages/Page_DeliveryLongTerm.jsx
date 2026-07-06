import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

// SVG 环形进度条组件，用于版本 B
const CircularProgress = ({ percentage, color }) => {
  const radius = 32;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0 w-[80px] h-[80px]">
      {/* 底部轨道 */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="40"
          cy="40"
          r={radius}
          className="stroke-zinc-800/60"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* 进度弧 */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          style={{
            stroke: color,
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            filter: `drop-shadow(0 0 6px ${color}80)`
          }}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      {/* 居中数字 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-['Montserrat'] text-[16px] font-black text-white">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default function Page_DeliveryLongTerm() {
  const [version, setVersion] = useState('A');

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

      {/* ── 交互式版本切换器 (Pill-shaped, 高级渐变) ── */}
      <div className="absolute top-[-58px] left-[520px] z-40 flex items-center bg-zinc-950/80 border border-zinc-800 rounded-full p-1 gap-2.5 shadow-lg shadow-black/50">
        <button 
          onClick={() => setVersion('A')}
          className={`px-5 py-1.5 rounded-full text-[14px] font-black transition-all duration-300 ${version === 'A' ? 'bg-[#0052FF] text-white shadow-[0_0_15px_rgba(0,82,255,0.4)]' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          版本 A：对称卡片
        </button>
        <button 
          onClick={() => setVersion('B')}
          className={`px-5 py-1.5 rounded-full text-[14px] font-black transition-all duration-300 ${version === 'B' ? 'bg-[#0052FF] text-white shadow-[0_0_15px_rgba(0,82,255,0.4)]' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          版本 B：圆环看板
        </button>
        <button 
          onClick={() => setVersion('C')}
          className={`px-5 py-1.5 rounded-full text-[14px] font-black transition-all duration-300 ${version === 'C' ? 'bg-[#0052FF] text-white shadow-[0_0_15px_rgba(0,82,255,0.4)]' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          版本 C：极简线框
        </button>
      </div>

      {/* ── 主排版区 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch z-10 pl-0"
        style={{ top: '30px', height: '740px' }}
      >
        
        {/* ============================================================
         * ── 左半边：市场常见做法 (750px) ──
         * ============================================================ */}
        <div className="w-[750px] flex flex-col justify-center h-full pr-4">
          <div className="mb-10 shrink-0">
            <h2 className="text-[42px] font-black text-white font-['MiSans'] leading-none">
              市场常见做法
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {commonPractices.map((practice, idx) => (
              React.useMemo(() => {
                if (version === 'C') {
                  // 版本 C：极简线框样式
                  return (
                    <div 
                      key={idx} 
                      className="border-l-4 border-red-500 bg-white/[0.01] py-8 pl-8 pr-4 relative overflow-hidden group transition-all duration-300 hover:bg-white/[0.02]"
                    >
                      {/* 背景大水印数字 */}
                      <span className="absolute right-4 bottom-[-15px] font-['Montserrat'] text-[110px] font-black text-red-500/[0.02] pointer-events-none select-none">
                        {practice.num}
                      </span>
                      <h3 className="text-[30px] font-black text-white font-['MiSans'] mb-3.5 leading-none">
                        {practice.title}
                      </h3>
                      <span className="text-[22px] font-bold text-red-400 font-['MiSans'] leading-none">
                        {practice.tag}
                      </span>
                    </div>
                  );
                }

                // 版本 A 和 B：卡片样式
                return (
                  <div 
                    key={idx} 
                    className="bg-red-950/10 border border-red-900/20 rounded-[24px] px-8 py-8 flex items-center gap-8 hover:border-red-500/30 transition-all duration-300"
                  >
                    <span className="font-['Montserrat'] text-[56px] font-black text-red-500/90 leading-none shrink-0 w-[70px]">
                      {practice.num}
                    </span>
                    <div className="w-px h-16 bg-red-900/20 shrink-0" />
                    <div className="flex-grow flex flex-col gap-2 justify-center">
                      <h3 className="text-[30px] font-black text-white font-['MiSans'] leading-tight">
                        {practice.title}
                      </h3>
                      <span className="text-[22px] font-bold text-red-400 font-['MiSans'] leading-none">
                        {practice.tag}
                      </span>
                    </div>
                  </div>
                );
              }, [version, idx])
            ))}
          </div>
        </div>

        {/* ==================== 中间分割线 ==================== */}
        <div className="w-[80px] flex items-center justify-center shrink-0">
          <div className="h-4/5 border-r border-dashed border-zinc-800" />
        </div>

        {/* ============================================================
         * ── 右半边：我们的 5-3-2 原则 (1010px) ──
         * ============================================================ */}
        <div className="w-[1010px] flex flex-col justify-center h-full pl-4">
          <div className="mb-10 shrink-0">
            <h2 className="text-[42px] font-black text-[#0052FF] font-['MiSans'] leading-none">
              我们的 5-3-2 原则
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {allocations.map((item, idx) => (
              React.useMemo(() => {
                if (version === 'B') {
                  // 版本 B：高科技圆环看板样式
                  return (
                    <div 
                      key={idx} 
                      className="flex items-center gap-8 bg-zinc-950/20 border rounded-[24px] px-8 py-6 hover:bg-white/[0.01] transition-all duration-300"
                      style={{
                        borderColor: `${item.color}33`,
                        boxShadow: `0 4px 20px ${item.color}02`
                      }}
                    >
                      {/* SVG 进度圆环 */}
                      <CircularProgress percentage={parseInt(item.num)} color={item.color} />
                      <div className="w-px h-16 shrink-0" style={{ backgroundColor: `${item.color}30` }} />
                      <h3 className="text-[26px] font-extrabold text-white font-['MiSans'] leading-snug flex-grow">
                        {item.title}
                      </h3>
                    </div>
                  );
                }

                if (version === 'C') {
                  // 版本 C：极简线框样式
                  return (
                    <div 
                      key={idx} 
                      className="border-l-4 bg-white/[0.01] py-7 pl-8 pr-4 relative overflow-hidden group transition-all duration-300 hover:bg-white/[0.02]"
                      style={{ borderLeftColor: item.color }}
                    >
                      {/* 背景大水印百分比数字 */}
                      <span className="absolute right-4 bottom-[-15px] font-['Montserrat'] text-[110px] font-black pointer-events-none select-none" style={{ color: `${item.color}06` }}>
                        {item.num}%
                      </span>
                      <div className="flex items-center gap-4.5 mb-2.5">
                        <span className="font-['Montserrat'] text-[24px] font-extrabold leading-none" style={{ color: item.color }}>
                          {item.num}%
                        </span>
                      </div>
                      <h3 className="text-[26px] font-extrabold text-white font-['MiSans'] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  );
                }

                // 版本 A：经典横向对称卡片
                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-8 bg-[#0052FF]/5 border rounded-[24px] px-8 py-7 hover:bg-white/[0.01] transition-all duration-300"
                    style={{
                      borderColor: `${item.color}33`,
                      boxShadow: `0 4px 20px ${item.color}02`
                    }}
                  >
                    <div className="flex items-baseline shrink-0 w-[150px]">
                      <span className="text-[64px] font-black font-['Montserrat'] text-white leading-none">
                        {item.num}
                      </span>
                      <span className="text-[26px] font-black text-zinc-500 ml-1 leading-none font-['Montserrat']">%</span>
                    </div>
                    <div className="w-px h-16 shrink-0" style={{ backgroundColor: `${item.color}30` }} />
                    <h3 className="text-[26px] font-extrabold text-white font-['MiSans'] leading-snug flex-grow">
                      {item.title}
                    </h3>
                  </div>
                );
              }, [version, idx])
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryLongTerm.hideHeader = true;
