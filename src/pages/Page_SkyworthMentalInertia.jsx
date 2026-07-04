import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthMentalInertia() {
  return (
    <SlideLayout title="一个思维惯性的误区">
      {/* 背景柔光 */}
      <div className="absolute w-[680px] h-[680px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 -top-20 pointer-events-none z-0" />
      <div className="absolute w-[520px] h-[520px] rounded-full bg-amber-500/[0.05] blur-[150px] -left-20 bottom-0 pointer-events-none z-0" />

      {/* 主排版容器：上中下三段 */}
      <div
        className="absolute w-[1840px] flex flex-col justify-between select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', paddingTop: '8px', paddingBottom: '4px' }}
      >
        {/* ── 上：过去的思维惯性（错误认知，做减弱 + 划掉处理）── */}
        <div className="shrink-0">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[22px] font-bold tracking-[0.08em] text-zinc-500 font-['MiSans']">
              过去的思维惯性
            </span>
            <span className="px-3 py-[3px] rounded-md bg-red-500/10 border border-red-500/40 text-red-400 text-[20px] font-bold font-['MiSans']">
              其实是个误区
            </span>
            <div className="flex-1 h-[1px] bg-zinc-800" />
          </div>

          <div className="relative flex items-center gap-5">
            {['产品卖点', '包装成高质量内容', '发到高权重平台', '以为就能影响 AI'].map((t, i, arr) => (
              <React.Fragment key={t}>
                <div className="px-7 py-4 rounded-2xl border border-zinc-700/70 bg-zinc-900/40">
                  <span className="text-[30px] font-bold text-zinc-500 font-['MiSans'] whitespace-nowrap line-through decoration-red-500/60 decoration-2">
                    {t}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-[32px] font-black text-zinc-700 leading-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── 中：核心洞察（视觉主角，高亮对比）── */}
        <div className="shrink-0">
          <p className="font-['MiSans'] mb-8" style={{ fontSize: '46px', lineHeight: '1.25' }}>
            <span className="text-zinc-400">但我们忽略了一点：</span>
            <span className="text-white font-bold">AI 更看用户的感受，而不是品牌想讲的卖点</span>
          </p>

          <div className="flex items-stretch gap-8">
            {/* 品牌卖点 —— 被弱化 */}
            <div className="flex-1 rounded-[28px] border border-zinc-700/60 bg-zinc-900/30 px-10 py-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-zinc-700/50 flex items-center justify-center text-zinc-300 text-[24px] font-black leading-none">✕</span>
                <span className="text-[30px] font-black text-zinc-400 font-['MiSans']">品牌的「卖点」</span>
              </div>
              <p className="text-[26px] text-zinc-500 font-['MiSans'] leading-relaxed">
                品牌自己想讲的话 —— AI 并不买账
              </p>
            </div>

            {/* AI 更看 —— 箭头 */}
            <div className="flex flex-col items-center justify-center shrink-0 px-2">
              <span className="text-[22px] font-bold text-[#5B8CFF] font-['MiSans'] mb-1">AI 更看</span>
              <span className="text-[48px] font-black text-[#004CE5] leading-none">➜</span>
            </div>

            {/* 用户买点 + 吐槽点 —— 高亮主角 */}
            <div className="flex-[1.35] rounded-[28px] px-10 py-8 bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-[22px] font-black leading-none">✓</span>
                <span className="text-[32px] font-black text-white font-['MiSans']">用户的「买点」+「吐槽点」</span>
              </div>
              <p className="text-[26px] text-blue-100 font-['MiSans'] leading-relaxed">
                消费者真实的选择理由与不满 —— 这才是 AI 采信、推荐的依据
              </p>
            </div>
          </div>
        </div>

        {/* ── 下：风险结论（警示条）── */}
        <div className="shrink-0 rounded-[24px] border-l-[6px] border-amber-500 bg-amber-500/[0.08] px-10 py-7 flex items-center gap-8">
          <span className="text-amber-400 text-[40px] font-black leading-none shrink-0">⚠</span>
          <p className="font-['MiSans']" style={{ fontSize: '32px', lineHeight: '1.4' }}>
            <span className="text-zinc-300">当反复讲的卖点，和消费者真实感受</span>
            <span className="text-amber-300 font-bold">冲突</span>
            <span className="text-zinc-300">时：内容发得越多，反而越会</span>
            <span className="text-amber-300 font-bold">加深 AI 对品牌的误解</span>
            <span className="text-zinc-300">。</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthMentalInertia.hideHeader = true;
