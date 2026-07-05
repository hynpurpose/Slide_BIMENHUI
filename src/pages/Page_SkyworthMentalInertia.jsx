import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 版本 A — 极简对撞：卖点 ✕  vs  买点/吐槽点 ✓
 * 只保留一个核心对比，最大化重点。
 * ============================================================ */
export function Page_SkyworthMentalInertia_A() {
  return (
    <SlideLayout title="一个思维惯性的误区">
      <div className="absolute w-[720px] h-[720px] rounded-full bg-[#004CE5]/[0.07] blur-[170px] right-0 top-0 pointer-events-none z-0" />

      <div
        className="absolute w-[1840px] flex flex-col justify-center select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', gap: '72px' }}
      >
        {/* 前提铺垫（弱化） */}
        <p className="text-[30px] text-zinc-500 font-['MiSans'] leading-relaxed">
          我们总以为：把卖点包装成好内容、发到高权重平台，就能影响 AI——
        </p>

        {/* 核心对撞 */}
        <div className="flex items-center justify-between gap-10">
          {/* 品牌卖点：弱化 */}
          <div className="flex-1 text-center">
            <span className="block text-[30px] text-zinc-500 font-['MiSans'] mb-4">品牌想讲的</span>
            <span className="block text-[68px] font-black text-zinc-500 font-['MiSans'] line-through decoration-red-500/70 decoration-4">
              「卖点」
            </span>
          </div>

          {/* 中轴：AI 看的不是这个 */}
          <div className="flex flex-col items-center shrink-0 px-4">
            <span className="text-[22px] font-bold text-zinc-500 font-['MiSans'] mb-2">AI 要的不是左边</span>
            <span className="text-[80px] font-black text-[#004CE5] leading-none">➜</span>
          </div>

          {/* 用户买点/吐槽点：高亮 */}
          <div className="flex-1 text-center">
            <span className="block text-[30px] text-[#7FA6FF] font-['MiSans'] mb-4">AI 真正采信的</span>
            <span className="block text-[68px] font-black text-white font-['MiSans']">
              用户的「买点 · 吐槽点」
            </span>
          </div>
        </div>

        {/* 后果一句话 */}
        <p className="text-[30px] font-['MiSans'] leading-relaxed text-zinc-400">
          卖点与消费者真实感受<span className="text-amber-300 font-bold">冲突</span>时，内容发得越多，<span className="text-amber-300 font-bold">AI 的误解越深</span>。
        </p>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 误区 / 真相 两段式对照
 * 上错下对，红→蓝，认知反转清晰。
 * ============================================================ */
export function Page_SkyworthMentalInertia_B() {
  return (
    <SlideLayout title="一个思维惯性的误区">
      <div className="absolute w-[620px] h-[620px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-24 bottom-0 pointer-events-none z-0" />

      <div
        className="absolute w-[1840px] flex flex-col justify-center select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', gap: '48px' }}
      >
        {/* 误区 */}
        <div className="flex items-start gap-8 rounded-[28px] border border-zinc-700/60 bg-zinc-900/30 px-12 py-10">
          <span className="shrink-0 px-5 py-2 rounded-xl bg-red-500/15 border border-red-500/50 text-red-400 text-[30px] font-black font-['MiSans']">误区</span>
          <p className="font-['MiSans'] text-zinc-500" style={{ fontSize: '42px', lineHeight: '1.35' }}>
            只要把<span className="text-zinc-300">产品卖点</span>包装成高质量内容、发到高权重平台，就能影响 AI。
          </p>
        </div>

        {/* 真相 */}
        <div className="flex items-start gap-8 rounded-[28px] px-12 py-10 bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
          <span className="shrink-0 px-5 py-2 rounded-xl bg-white/20 text-white text-[30px] font-black font-['MiSans']">真相</span>
          <p className="font-['MiSans'] text-blue-100" style={{ fontSize: '42px', lineHeight: '1.35' }}>
            AI 更看用户的<span className="text-white font-black">「买点」和「吐槽点」</span>，而不是品牌自己想讲的<span className="text-white font-black">「卖点」</span>。
          </p>
        </div>

        {/* 后果 */}
        <p className="text-center text-[28px] font-['MiSans'] text-zinc-400 mt-2">
          所以卖点与真实感受冲突时，<span className="text-amber-300 font-bold">发得越多，AI 误解越深</span>。
        </p>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 一句话大字 Hero
 * 把最核心的一句话放到最大，其余全部让位。
 * ============================================================ */
export function Page_SkyworthMentalInertia_C() {
  return (
    <SlideLayout title="一个思维惯性的误区">
      <div className="absolute w-[760px] h-[760px] rounded-full bg-[#004CE5]/[0.07] blur-[180px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <div
        className="absolute w-[1840px] flex flex-col justify-center select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', gap: '56px' }}
      >
        <div className="w-[72px] h-[5px] bg-[#004CE5]/70 rounded-full" />

        {/* 超大核心句 */}
        <h2 className="font-['MiSans']" style={{ fontSize: '78px', lineHeight: '1.28', fontWeight: 800 }}>
          <span className="text-zinc-500">AI 看的不是</span>
          <span className="text-zinc-500 line-through decoration-red-500/70 decoration-4">品牌想讲的卖点</span>
          <span className="text-zinc-500">，</span>
          <br />
          <span className="text-zinc-400">而是</span>
          <span className="text-white">用户的</span>
          <span className="text-[#5B8CFF]">买点</span>
          <span className="text-white"> 和 </span>
          <span className="text-[#5B8CFF]">吐槽点</span>
          <span className="text-white">。</span>
        </h2>

        {/* 后果注解 */}
        <p className="text-[32px] font-['MiSans'] text-zinc-400 leading-relaxed">
          卖点若与真实感受冲突，<span className="text-amber-300 font-bold">内容发得越多，反而越加深 AI 对品牌的误解</span>。
        </p>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthMentalInertia_A.hideHeader = true;
Page_SkyworthMentalInertia_B.hideHeader = true;
Page_SkyworthMentalInertia_C.hideHeader = true;
