import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Radar, TrendingUp, Rocket, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Page_EmergingMediaAttempts() {
  const steps = [
    {
      no: '01',
      icon: Radar,
      title: '监控模型动向',
      desc: '持续追踪各 AI 模型的更新公告与引用偏好变化，第一时间捕捉规则调整的早期信号。'
    },
    {
      no: '02',
      icon: TrendingUp,
      title: '预判权重迁移',
      desc: '根据模型的更新方向，预测下一阶段哪些新兴媒体、内容形态会被优先采信。'
    },
    {
      no: '03',
      icon: Rocket,
      title: '数据出来前抢先占位',
      desc: '趁红利尚未真正体现、竞品还没察觉时，提前在这些新媒体上布局内容。'
    },
    {
      no: '04',
      icon: ShieldCheck,
      title: '形成先发独家壁垒',
      desc: '率先占住新的权重媒体，等竞对反应过来，早已慢了一步，我们已是难以撼动的先发方。',
      highlight: true
    }
  ];

  return (
    <SlideLayout title="新兴媒体尝试">
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
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-start z-10 pl-0"
        style={{ top: '40px', height: '750px' }}
      >
        {/* ==================== 上半部分：金句大总结 ==================== */}
        <div className="w-full flex flex-col items-start mb-6 shrink-0">
          <p className="text-[30px] text-white font-extrabold tracking-wide max-w-[1760px] leading-relaxed">
            最后 20% 预算用来押注新媒体：紧盯 AI 模型的更新方向，在红利真正兑现之前，比竞争对手更早占住新的权重媒体。
          </p>
        </div>

        {/* ==================== 下半部分：方法论四步流程 ==================== */}
        <div className="flex-grow w-full flex items-center min-h-0">
          <div className="w-full flex items-stretch gap-3">

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = step.highlight;
              return (
                <React.Fragment key={idx}>

                  {/* 单步卡片 */}
                  <div
                    className={`flex-1 h-[560px] rounded-[32px] p-9 flex flex-col backdrop-blur-md transition-all duration-200 ${isLast
                        ? 'bg-blue-500/10 border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.25)]'
                        : 'bg-zinc-950/40 border border-zinc-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)]'
                      }`}
                  >
                    {/* 顶部：图标 + 步骤水印数字 */}
                    <div className="flex items-start justify-between shrink-0">
                      <div
                        className={`w-[76px] h-[76px] rounded-2xl flex items-center justify-center ${isLast ? 'bg-blue-500/20' : 'bg-blue-500/10'
                          }`}
                      >
                        <Icon className={`w-10 h-10 ${isLast ? 'text-blue-300' : 'text-blue-400'}`} strokeWidth={2} />
                      </div>
                      <span
                        className={`text-[80px] leading-none font-black font-['Montserrat'] tracking-tighter ${isLast ? 'text-blue-500/40' : 'text-white/10'
                          }`}
                      >
                        {step.no}
                      </span>
                    </div>

                    {/* 底部：标题 + 说明 */}
                    <div className="mt-auto flex flex-col">
                      <h3 className="text-[36px] font-black text-white font-['MiSans'] leading-tight mb-5">
                        {step.title}
                      </h3>
                      <div className={`w-14 h-[4px] rounded-full mb-6 ${isLast ? 'bg-blue-400' : 'bg-blue-500/60'}`} />
                      <p className="text-[24px] text-zinc-400 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* 步骤间箭头 (最后一张卡片后不显示) */}
                  {idx < steps.length - 1 && (
                    <div className="flex items-center justify-center shrink-0 self-center">
                      <ChevronRight className="w-9 h-9 text-blue-500/70" strokeWidth={3} />
                    </div>
                  )}

                </React.Fragment>
              );
            })}

          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_EmergingMediaAttempts.hideHeader = true;
