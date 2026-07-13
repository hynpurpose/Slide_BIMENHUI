import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Page_SuningCampaignStrategy() {
  const stages = [
    {
      num: '01',
      phase: '蓄水期 (T-45~T-20)',
      action: '先铺“壳” · 积攒权重',
      desc: '发布攻略大框架（如“以旧换新叠国补攻略”），不带具体价格，提前让AI收录占稳答案位。',
    },
    {
      num: '02',
      phase: '预热期 (T-20~T-7)',
      action: '填一层“馅” · 融入机制',
      desc: '活动机制、预售日历确定后，更新进已有权重的框架页面中，避免新网页收录延时。',
    },
    {
      num: '03',
      phase: '爆发期 (T-7~T+3)',
      action: '填二层“馅” · 实时抓取',
      desc: '具体特价与爆款榜单通过时效信源密集发布，供AI联网检索抓取最新鲜的比价结果。',
      isHighlight: true,
    },
    {
      num: '04',
      phase: '长尾期 (T+3~T+21)',
      action: '做“沉淀” · 语料培育',
      desc: '战报和买后复盘不仅能承接延时流量，更能沉淀为各模型下一轮训练的基础语料库。',
    },
  ];

  return (
    <SlideLayout
      title="大促投放策略：抢占“时效问题”检索入口"
      subtitle="以“先铺壳、后填馅”解决收录时滞，爆发期精准切换渠道配比为 6-3-1"
    >
      <div className="absolute w-[1840px] h-full flex gap-8 select-none animate-fadeIn" style={{ top: 0 }}>
        
        {/* ── 左侧：四段式投放节奏 2x2 网格 (1120px) ── */}
        <div className="w-[1120px] flex flex-col min-h-0">
          <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            四段式“壳与馅”大促投放模型
          </h2>

          <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className={`border rounded-[24px] p-6 flex flex-col justify-between transition-all duration-300 ${
                  stage.isHighlight
                    ? 'border-blue-500 bg-[#0B0D19]/60 shadow-[0_0_30px_rgba(0,82,255,0.1)]'
                    : 'border-white/[0.06] bg-[#0B0D19]/45 hover:border-white/[0.12]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[20px] font-bold text-blue-400 font-['Montserrat'] tracking-wide">
                      {stage.phase}
                    </span>
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center font-['Montserrat'] font-black text-[18px] ${
                      stage.isHighlight ? 'bg-blue-600 text-white' : 'bg-white/5 text-zinc-400'
                    }`}>
                      {stage.num}
                    </span>
                  </div>
                  <h3 className="text-[28px] font-black text-white font-['MiSans'] mb-2.5">
                    {stage.action}
                  </h3>
                </div>
                <p className="text-[22px] text-zinc-300 font-['MiSans'] leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 中间分隔线 ── */}
        <div className="w-[1px] h-[720px] bg-white/[0.08] self-center shrink-0" />

        {/* ── 右侧：大促渠道结构切换 6-3-1 (680px) ── */}
        <div className="flex-1 flex flex-col min-h-0 justify-between">
          <div>
            <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
              大促爆发期配比：6-3-1
            </h2>

            <div className="space-y-4">
              {/* 配比对比 */}
              <div className="bg-[#0B0D19]/45 border border-white/[0.06] rounded-[20px] p-5 flex items-center justify-between">
                <span className="text-[22px] text-zinc-400 font-bold font-['MiSans']">日常配比</span>
                <span className="text-[22px] font-black font-['Montserrat'] text-zinc-500">50% : 30% : 20%</span>
                <ArrowRight size={20} className="text-zinc-500" />
                <span className="text-[22px] text-blue-400 font-black font-['MiSans']">大促配比</span>
                <span className="text-[22px] font-black font-['Montserrat'] text-blue-400">60% : 30% : 10%</span>
              </div>

              {/* 6-3-1 细则 */}
              <div className="bg-[#0B0D19]/60 border border-blue-500/20 rounded-[24px] p-6 space-y-5">
                {/* 60% */}
                <div className="flex items-start gap-4">
                  <span className="text-[24px] font-black font-['Montserrat'] text-white bg-blue-600/10 border border-blue-500/20 w-16 h-10 rounded-lg flex items-center justify-center shrink-0">
                    60%
                  </span>
                  <div>
                    <h4 className="text-[24px] font-bold text-white font-['MiSans']">精准高权重信源</h4>
                    <p className="text-[20px] text-zinc-300 font-['MiSans'] leading-snug mt-1">
                      加码权威媒体及大流量门户，强力承接“哪家优惠大”等泛提问。
                    </p>
                  </div>
                </div>

                {/* 30% */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/[0.04]">
                  <span className="text-[24px] font-black font-['Montserrat'] text-white bg-zinc-800 border border-white/10 w-16 h-10 rounded-lg flex items-center justify-center shrink-0">
                    30%
                  </span>
                  <div>
                    <h4 className="text-[24px] font-bold text-white font-['MiSans']">潜力垂直社区</h4>
                    <p className="text-[20px] text-zinc-300 font-['MiSans'] leading-snug mt-1">
                      集中释放日常锁定的独家社区资源，发布精细化品类比价与评测。
                    </p>
                  </div>
                </div>

                {/* 10% */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/[0.04]">
                  <span className="text-[24px] font-black font-['Montserrat'] text-white bg-zinc-800 border border-white/10 w-16 h-10 rounded-lg flex items-center justify-center shrink-0">
                    10%
                  </span>
                  <div>
                    <h4 className="text-[24px] font-bold text-zinc-400 font-['MiSans']">新媒体监测</h4>
                    <p className="text-[20px] text-zinc-500 font-['MiSans'] leading-snug mt-1">
                      收缩试投预算，仅用于对模型大促前后引用权重波动的信号捕捉。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 黄金法则 */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-[20px] p-6 hover:border-blue-500/35 transition-all mt-4">
            <h4 className="text-[24px] font-black text-white font-['MiSans'] mb-1.5 flex items-center gap-2">
              <Sparkles size={20} className="text-blue-400" />
              今年的大促，就是明年的地基
            </h4>
            <p className="text-[22px] text-zinc-300 font-['MiSans'] leading-relaxed">
              大促沉淀的战报与爆品长尾问答，将作为训练语料进入各模型，直接塑造来年AI推荐决策的默认品牌倾向。
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SuningCampaignStrategy.hideHeader = true;
