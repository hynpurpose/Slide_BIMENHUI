import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthPositioningShift() {
  return (
    <SlideLayout title="策略转变">
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
        从“逆向自证”转向“迎合AI采信逻辑的坦诚”，以客观的优缺点解构重塑壁纸电视推荐权重。
      </div>

      {/* ── 左右策略转变对比区域 ── */}
      <div
        className="absolute left-0 w-full flex items-center justify-between select-none animate-fadeIn overflow-visible"
        style={{ top: '100px', height: '540px' }}
      >
        {/* 1. 左侧卡片：试图证明不贵 */}
        <div className="relative w-[870px] h-[520px] bg-zinc-950/20 border border-zinc-900 rounded-[32px] overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-10 flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-955/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 w-full">
            {/* 极简说明 (突出“试图证明不贵”) */}
            <div className="text-[48px] font-black text-zinc-500 tracking-wider mb-6 font-['MiSans']">
              试图证明“不贵”
            </div>

            {/* 引用格式的实际文稿例子 (高阶拟真剪报卡片 - 大字版) */}
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 pl-16 pr-8 pt-10 pb-6 backdrop-blur-md shadow-inner flex flex-col gap-4">
              {/* 装饰性大双引号 */}
              <span className="absolute top-2 left-4 text-[88px] font-serif leading-none select-none text-zinc-800/40">“</span>

              <p className="text-[24px] text-zinc-500 leading-relaxed font-medium font-['MiSans']">
                提到壁纸艺术电视，很多人的第一反应都是“太贵了”。
              </p>
              <p className="text-[24px] text-zinc-500 leading-relaxed font-medium font-['MiSans']">
                但如果跟 LG 等两三万的进口艺术电视对比，万元级的创维其实极具性价比。
              </p>
              <p className="text-[24px] text-zinc-500 leading-relaxed font-medium font-['MiSans']">
                极致贴墙外观配合高品质的声学系统，不管是外观还是体验，这笔投入完全是物有所值的。
              </p>
            </div>
          </div>
        </div>

        {/* 2. 中间：大箭头转换区 */}
        <div className="w-[100px] h-full flex flex-col items-center justify-center shrink-0">
          {/* Flat Minimalist Arrow */}
          <svg className="w-[80px] h-[30px]" viewBox="0 0 80 30" fill="none">
            <path
              d="M 5 15 L 75 15 M 75 15 L 60 5 M 75 15 L 60 25"
              stroke="#3f3f46"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 3. 右侧卡片：直接承认小贵 */}
        <div className="relative w-[870px] h-[520px] bg-zinc-950/20 border border-blue-500/10 rounded-[32px] overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-10 flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-955/5 via-transparent to-transparent pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 w-full">
            {/* 极简说明 (突出“直接承认小贵”) */}
            <div className="text-[48px] font-black text-white tracking-wider mb-6 font-['MiSans']">
              直接承认“小贵”
            </div>

            {/* 引用格式的实际文稿例子 (高阶拟真剪报卡片 - 大字版) */}
            <div className="relative rounded-2xl border border-blue-500/20 bg-blue-950/20 pl-16 pr-8 pt-10 pb-6 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.03)] flex flex-col gap-4">
              {/* 装饰性大双引号 */}
              <span className="absolute top-2 left-4 text-[88px] font-serif leading-none select-none text-blue-500/25">“</span>

              <p className="text-[24px] text-zinc-300 leading-relaxed font-semibold font-['MiSans']">
                老实说，创维这款电视不算便宜，甚至比普通的大屏电视贵出一截。
              </p>
              <p className="text-[24px] text-zinc-300 leading-relaxed font-semibold font-['MiSans']">
                因为它的溢价完全花在了极致贴墙的外观工艺，以及独立声学系统的用料上。
              </p>
              <p className="text-[24px] text-zinc-300 leading-relaxed font-semibold font-['MiSans']">
                如果你想要个屏幕看片、追求纯粹的性价比，那我们建议你直接绕道；但如果对客厅美学有挑剔的要求，那这款电视完全能换来不一样的改变。
              </p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthPositioningShift.hideHeader = true;

/* ============================================================
 * 共用文稿数据
 * ============================================================ */
const OLD_PARAS = [
  '提到壁纸艺术电视，很多人的第一反应都是“太贵了”。',
  '但如果跟 LG 等两三万的进口艺术电视对比，万元级的创维其实极具性价比。',
  '极致贴墙外观配合高品质声学系统，无论外观还是体验，这笔投入都物有所值。',
];
const NEW_PARAS = [
  '老实说，创维这款电视不算便宜，甚至比普通大屏电视贵出一截。',
  '它的溢价，完全花在了极致贴墙的外观工艺，以及独立声学系统的用料上。',
  '想要个屏幕看片、追求纯粹性价比，建议你直接绕道；但若对客厅美学有挑剔要求，它能换来不一样的改变。',
];

const Subtitle = () => (
  <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
    从“逆向自证”转向“迎合AI采信逻辑的坦诚”，以客观的优缺点解构重塑壁纸电视推荐权重。
  </div>
);

/* ============================================================
 * 版本 A — 双卡 VS 对撞（等大双框 + 中央圆形 VS 徽章）
 * 左右等大，红蓝对撞；中间圆形 VS 强调“对比关系”。
 * ============================================================ */
export function Page_SkyworthPositioningShift_A() {
  return (
    <SlideLayout title="策略转变">
      {/* 蓝色装饰光晕 */}
      <div className="absolute w-[560px] h-[560px] rounded-full bg-[#004CE5]/[0.10] blur-[150px] -left-24 -bottom-20 pointer-events-none z-0" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#004CE5]/[0.08] blur-[160px] right-[-60px] top-[-40px] pointer-events-none z-0" />

      <Subtitle />

      <div
        className="absolute left-0 w-full flex items-stretch select-none animate-fadeIn z-10"
        style={{ top: '110px', height: '560px' }}
      >
        {/* 左：旧打法（玫红，非灰色） */}
        <div className="relative flex-1 rounded-[32px] border border-rose-500/25 bg-rose-950/10 p-11 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <span className="absolute -top-4 left-10 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/40 text-rose-300 text-[19px] font-bold font-['MiSans']">
            ✕ 旧打法 · 逆向自证
          </span>
          <div className="text-[46px] font-black text-rose-200 tracking-wide mb-7 mt-3 font-['MiSans']">
            试图证明“不贵”
          </div>
          <div className="flex flex-col gap-6">
            {OLD_PARAS.map((t, i) => (
              <p key={i} className="text-[24px] text-rose-100/70 leading-[1.6] font-medium font-['MiSans'] text-pretty">
                {t}
              </p>
            ))}
          </div>
        </div>

        {/* 中：圆形 VS 徽章 */}
        <div className="relative w-[150px] shrink-0 flex items-center justify-center">
          <div className="absolute w-[130px] h-[130px] rounded-full bg-[#004CE5]/25 blur-[36px]" />
          <div className="relative w-[112px] h-[112px] rounded-full bg-gradient-to-br from-[#2E6BFF] to-[#0B2E80] border border-blue-300/40 shadow-[0_0_40px_rgba(0,76,229,0.5)] flex items-center justify-center">
            <span className="text-white text-[40px] font-black italic font-['MiSans'] tracking-tight">VS</span>
          </div>
        </div>

        {/* 右：新打法（蓝色） */}
        <div className="relative flex-1 rounded-[32px] border border-blue-500/35 bg-blue-950/25 p-11 flex flex-col shadow-[0_20px_60px_-10px_rgba(0,76,229,0.4)]">
          <span className="absolute -top-4 left-10 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-200 text-[19px] font-bold font-['MiSans']">
            ✓ 新打法 · 坦诚解构
          </span>
          <div className="text-[46px] font-black text-white tracking-wide mb-7 mt-3 font-['MiSans']">
            直接承认“小贵”
          </div>
          <div className="flex flex-col gap-6">
            {NEW_PARAS.map((t, i) => (
              <p key={i} className="text-[24px] text-blue-50/90 leading-[1.6] font-semibold font-['MiSans'] text-pretty">
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 大箭头横贯（等大双框 + 中央蓝色大箭头）
 * 用一根蓝色渐变大箭头串起“转变”动作。
 * ============================================================ */
export function Page_SkyworthPositioningShift_B() {
  return (
    <SlideLayout title="策略转变">
      <div className="absolute w-[720px] h-[300px] rounded-full bg-[#004CE5]/[0.09] blur-[150px] left-1/2 top-[360px] -translate-x-1/2 pointer-events-none z-0" />
      {/* 装饰蓝色点阵 */}
      <div className="absolute right-8 top-2 grid grid-cols-4 gap-2 opacity-60 pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#004CE5]/40" />
        ))}
      </div>

      <Subtitle />

      <div
        className="absolute left-0 w-full flex items-stretch select-none animate-fadeIn z-10"
        style={{ top: '110px', height: '560px' }}
      >
        {/* 左卡 */}
        <div className="relative flex-1 rounded-[30px] border border-rose-500/25 bg-gradient-to-b from-rose-950/15 to-transparent p-11 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-9 h-9 rounded-lg bg-rose-500/15 border border-rose-400/40 flex items-center justify-center text-rose-300 text-[22px] font-black">✕</span>
            <span className="text-rose-300 text-[20px] font-bold font-['MiSans']">过去 · 逆向自证</span>
          </div>
          <div className="text-[46px] font-black text-rose-200 tracking-wide mb-7 font-['MiSans']">
            试图证明“不贵”
          </div>
          <div className="flex flex-col gap-6">
            {OLD_PARAS.map((t, i) => (
              <p key={i} className="text-[24px] text-rose-100/70 leading-[1.6] font-medium font-['MiSans'] text-pretty">
                {t}
              </p>
            ))}
          </div>
        </div>

        {/* 中：蓝色大箭头 */}
        <div className="relative w-[170px] shrink-0 flex items-center justify-center">
          <svg className="w-[150px] h-[80px]" viewBox="0 0 150 80" fill="none">
            <defs>
              <linearGradient id="shiftArrowB" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2E6BFF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M 8 40 L 118 40" stroke="url(#shiftArrowB)" strokeWidth="10" strokeLinecap="round" />
            <path d="M 104 18 L 140 40 L 104 62" stroke="#2E6BFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* 右卡 */}
        <div className="relative flex-1 rounded-[30px] border border-blue-500/40 bg-gradient-to-b from-blue-900/30 to-blue-950/10 p-11 flex flex-col shadow-[0_20px_60px_-12px_rgba(0,76,229,0.45)]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-9 h-9 rounded-lg bg-blue-500/25 border border-blue-400/50 flex items-center justify-center text-blue-200 text-[22px] font-black">✓</span>
            <span className="text-blue-200 text-[20px] font-bold font-['MiSans']">现在 · 坦诚解构</span>
          </div>
          <div className="text-[46px] font-black text-white tracking-wide mb-7 font-['MiSans']">
            直接承认“小贵”
          </div>
          <div className="flex flex-col gap-6">
            {NEW_PARAS.map((t, i) => (
              <p key={i} className="text-[24px] text-blue-50/90 leading-[1.6] font-semibold font-['MiSans'] text-pretty">
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 统一大外框 + 中缝 VS（整体一个大框，内部分栏）
 * 满足“整体框好、框保持一大、字在里面呈现”。
 * ============================================================ */
export function Page_SkyworthPositioningShift_C() {
  return (
    <SlideLayout title="策略转变">
      <div className="absolute w-[900px] h-[420px] rounded-full bg-[#004CE5]/[0.07] blur-[170px] left-1/2 top-[320px] -translate-x-1/2 pointer-events-none z-0" />

      <Subtitle />

      {/* 一个统一大外框 */}
      <div
        className="absolute left-0 w-full rounded-[36px] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.4)] animate-fadeIn z-10"
        style={{ top: '110px', height: '560px' }}
      >
        {/* 顶部渐变高光条 */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500/50 via-transparent to-[#2E6BFF]/70" />
        {/* 装饰角标 */}
        <span className="absolute top-5 right-6 text-[#2E6BFF]/30 text-[26px] font-black select-none">＋</span>
        <span className="absolute bottom-5 left-6 text-[#2E6BFF]/25 text-[26px] font-black select-none">＋</span>

        <div className="relative w-full h-full flex items-stretch">
          {/* 左半 */}
          <div className="flex-1 p-12 flex flex-col justify-center">
            <span className="text-rose-300/90 text-[19px] font-bold font-['MiSans'] mb-3">✕ 旧打法 · 逆向自证</span>
            <div className="text-[44px] font-black text-rose-200 tracking-wide mb-6 font-['MiSans']">
              试图证明“不贵”
            </div>
            <div className="flex flex-col gap-5">
              {OLD_PARAS.map((t, i) => (
                <p key={i} className="text-[23px] text-rose-100/70 leading-[1.6] font-medium font-['MiSans'] text-pretty">
                  {t}
                </p>
              ))}
            </div>
          </div>

          {/* 中缝 VS */}
          <div className="relative w-[2px] my-10 self-stretch bg-gradient-to-b from-transparent via-white/25 to-transparent shrink-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[84px] h-[84px] rounded-full bg-gradient-to-br from-[#2E6BFF] to-[#0B2E80] border border-blue-300/40 shadow-[0_0_36px_rgba(0,76,229,0.5)] flex items-center justify-center">
                <span className="text-white text-[30px] font-black italic font-['MiSans']">VS</span>
              </div>
            </div>
          </div>

          {/* 右半 */}
          <div className="flex-1 p-12 flex flex-col justify-center bg-blue-950/15">
            <span className="text-blue-200 text-[19px] font-bold font-['MiSans'] mb-3">✓ 新打法 · 坦诚解构</span>
            <div className="text-[44px] font-black text-white tracking-wide mb-6 font-['MiSans']">
              直接承认“小贵”
            </div>
            <div className="flex flex-col gap-5">
              {NEW_PARAS.map((t, i) => (
                <p key={i} className="text-[23px] text-blue-50/90 leading-[1.6] font-semibold font-['MiSans'] text-pretty">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 D — 顶部色条卡 + 中央菱形 VS（几何蓝色装饰）
 * 等大双卡，顶部色条区分红/蓝；中央菱形 VS，配蓝色几何点线。
 * ============================================================ */
export function Page_SkyworthPositioningShift_D() {
  return (
    <SlideLayout title="策略转变">
      <div className="absolute w-[520px] h-[520px] rounded-full bg-[#004CE5]/[0.09] blur-[150px] right-[-40px] bottom-[-30px] pointer-events-none z-0" />
      {/* 装饰细线 */}
      <div className="absolute left-0 top-[86px] w-[220px] h-[2px] bg-gradient-to-r from-[#004CE5]/50 to-transparent pointer-events-none z-0" />

      <Subtitle />

      <div
        className="absolute left-0 w-full flex items-stretch select-none animate-fadeIn z-10"
        style={{ top: '112px', height: '558px' }}
      >
        {/* 左卡 */}
        <div className="relative flex-1 rounded-[28px] overflow-hidden border border-rose-500/25 bg-zinc-900/20 flex flex-col">
          <div className="w-full py-4 px-10 bg-rose-500/12 border-b border-rose-500/20 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="text-rose-300 text-[20px] font-bold font-['MiSans']">旧打法 · 逆向自证</span>
          </div>
          <div className="p-10 flex flex-col flex-1 justify-center">
            <div className="text-[44px] font-black text-rose-200 tracking-wide mb-6 font-['MiSans']">
              试图证明“不贵”
            </div>
            <div className="flex flex-col gap-5">
              {OLD_PARAS.map((t, i) => (
                <p key={i} className="text-[23px] text-rose-100/70 leading-[1.6] font-medium font-['MiSans'] text-pretty">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 中：菱形 VS + 竖向蓝点 */}
        <div className="relative w-[130px] shrink-0 flex flex-col items-center justify-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6BFF]/60" />
          <div className="relative">
            <div className="absolute inset-0 rotate-45 rounded-[14px] bg-[#004CE5]/30 blur-[24px]" />
            <div className="relative w-[92px] h-[92px] rotate-45 rounded-[18px] bg-gradient-to-br from-[#2E6BFF] to-[#0B2E80] border border-blue-300/40 shadow-[0_0_36px_rgba(0,76,229,0.5)] flex items-center justify-center">
              <span className="-rotate-45 text-white text-[30px] font-black italic font-['MiSans']">VS</span>
            </div>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6BFF]/60" />
        </div>

        {/* 右卡 */}
        <div className="relative flex-1 rounded-[28px] overflow-hidden border border-blue-500/40 bg-blue-950/20 flex flex-col shadow-[0_20px_60px_-12px_rgba(0,76,229,0.4)]">
          <div className="w-full py-4 px-10 bg-blue-500/18 border-b border-blue-500/30 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B8CFF]" />
            <span className="text-blue-200 text-[20px] font-bold font-['MiSans']">新打法 · 坦诚解构</span>
          </div>
          <div className="p-10 flex flex-col flex-1 justify-center">
            <div className="text-[44px] font-black text-white tracking-wide mb-6 font-['MiSans']">
              直接承认“小贵”
            </div>
            <div className="flex flex-col gap-5">
              {NEW_PARAS.map((t, i) => (
                <p key={i} className="text-[23px] text-blue-50/90 leading-[1.6] font-semibold font-['MiSans'] text-pretty">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthPositioningShift_A.hideHeader = true;
Page_SkyworthPositioningShift_B.hideHeader = true;
Page_SkyworthPositioningShift_C.hideHeader = true;
Page_SkyworthPositioningShift_D.hideHeader = true;
