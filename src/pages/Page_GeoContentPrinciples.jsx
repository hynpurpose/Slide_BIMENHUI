import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 讲稿核心逻辑（三个版本共用）：
 *   左：EEAT 源自谷歌《搜索质量评估指南》……但不完全适配中国模型。
 *   右：我们实践下来更有效的是写「用户视角的议论文」，并拆解两个词的定义。
 *
 * 统一配色：品牌蓝 #004CE5，浅蓝强调 #5B8CFF / #8CB0FF
 * ============================================================ */

const BLUE = '#004CE5';
const BLUE_LT = '#5B8CFF';
const BLUE_TX = '#8CB0FF';

/* 共用：背景光晕 */
function Glow() {
  return (
    <>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />
    </>
  );
}

/* 共用：议论文的三个「一个」 */
const ONES = [
  { k: '一个', v: '关键词' },
  { k: '一个', v: '用户问题' },
  { k: '一个', v: '推荐目标' },
];

/* 共用：E-E-A-T 四词释义 */
const EEAT_ITEMS = [
  { en: 'Experience', zh: '经验' },
  { en: 'Expertise', zh: '专业性' },
  { en: 'Authoritativeness', zh: '权威性' },
  { en: 'Trustworthiness', zh: '可靠性/信任度' },
];

function EeatExpansions({ className = '', cols = 2, variant = 'compact' }) {
  if (variant === 'balanced') {
    const Card = ({ en, zh }) => (
      <div className="h-full rounded-[22px] border border-zinc-700/70 bg-zinc-900/35 px-8 py-6 flex flex-col justify-center min-h-0">
        <span className="text-[24px] font-['Montserrat'] font-semibold text-zinc-500 leading-[1.25]">
          {en}
        </span>
        <span className="text-[30px] font-black text-zinc-200 font-['MiSans'] mt-2.5 leading-none">
          （{zh}）
        </span>
      </div>
    );

    return (
      <div className={`flex-1 min-h-0 flex flex-col gap-5 ${className}`}>
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">
          <Card {...EEAT_ITEMS[0]} />
          <Card {...EEAT_ITEMS[1]} />
        </div>
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-5">
          <Card {...EEAT_ITEMS[2]} />
          <Card {...EEAT_ITEMS[3]} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid shrink-0 ${cols === 1 ? 'grid-cols-1 gap-y-2' : 'grid-cols-2 gap-x-6 gap-y-2.5'} ${className}`}
    >
      {EEAT_ITEMS.map(({ en, zh }) => (
        <p key={en} className="text-[18px] leading-[26px] font-['MiSans'] min-w-0">
          <span className="text-zinc-500 font-['Montserrat'] font-medium">{en}</span>
          <span className="text-zinc-400">（{zh}）</span>
        </p>
      ))}
    </div>
  );
}

/* 共用：盖章打叉标识 */
function RejectStamp({ className = 'absolute -right-2 top-1/2 -translate-y-1/2' }) {
  return (
    <div
      className={`${className} rotate-[-14deg] pointer-events-none select-none z-30`}
      aria-hidden
    >
      <div className="flex flex-col items-center justify-center w-[128px] h-[128px] rounded-full border-[3px] border-red-500/85 text-red-500 shadow-[0_0_24px_rgba(239,68,68,0.18)] bg-black/45">
        <span className="text-[46px] font-black leading-none opacity-95">✕</span>
        <span className="text-[17px] font-black font-['MiSans'] tracking-[0.25em] text-red-400/95 mt-1.5 pl-[3px]">
          不适配
        </span>
      </div>
    </div>
  );
}

/* ============================================================
 * 版本 A — 左右两栏等大方框
 *   左：讨论最多的是；右：用户视角议论文及拆解。
 * ============================================================ */
export function Page_GeoContentPrinciples_A() {
  const headerH = '148px';

  const RightCard = ({ index, title, children }) => (
    <div
      className="flex-1 min-h-0 rounded-[22px] px-8 py-6 flex flex-col justify-center bg-white/[0.02] border border-white/[0.08]"
    >
      <div className="flex items-baseline gap-3 mb-2.5 shrink-0">
        <span className="font-['Montserrat'] text-[28px] xl:text-[32px] font-black leading-none text-[#004CE5]">{index}</span>
        <span className="text-[28px] xl:text-[32px] font-black text-white font-['MiSans']">{title}</span>
      </div>
      <p className="text-[20px] xl:text-[22px] text-zinc-300 leading-relaxed font-['MiSans']">{children}</p>
    </div>
  );

  return (
    <SlideLayout title="我们的内容标准：用户视角议论文">
      <Glow />
      <div
        className="absolute w-[1840px] flex select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', paddingTop: '18px' }}
      >
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-10 items-stretch">
          {/* 左：EEAT */}
          <div className="rounded-[30px] border border-zinc-900 bg-zinc-950/20 px-11 py-10 flex flex-col min-h-0 relative">
            <div className="shrink-0 mb-6 flex flex-col justify-end" style={{ height: '135px' }}>
              <h3 className="text-[44px] xl:text-[48px] font-black text-white font-['MiSans'] leading-tight">
                讨论最多的是
              </h3>
              <div className="mt-4">
                <span className="text-white font-['Montserrat'] font-black text-[38px] xl:text-[42px] tracking-wider leading-none">
                  E-E-A-T 原则
                </span>
              </div>
            </div>

            {/* EEAT与下面解释划为一个整体 */}
            <div className="flex-1 min-h-0 rounded-[22px] px-8 py-7 flex flex-col justify-between bg-white/[0.02] border border-white/[0.08]">
              {/* 4个EEAT解析 */}
              <div className="grid grid-cols-2 gap-4">
                {EEAT_ITEMS.map(({ en, zh }) => (
                  <div key={en} className="rounded-2xl border border-zinc-800 bg-black/40 px-6 py-5 flex flex-col justify-center h-[96px] xl:h-[105px]">
                    <span className="text-[18px] xl:text-[20px] font-['Montserrat'] font-semibold text-zinc-500 leading-none">
                      {en}
                    </span>
                    <span className="text-[24px] xl:text-[27px] font-black text-zinc-200 font-['MiSans'] mt-2.5 leading-none">
                      {zh}
                    </span>
                  </div>
                ))}
              </div>

              {/* 底部的3行解释文字，全部用白色，重点加大 */}
              <div className="border-t border-zinc-900 pt-5 mt-4 space-y-3.5 text-white pr-[140px] relative">
                <p className="text-[22px] xl:text-[24px] leading-relaxed font-['MiSans']">
                  最早来自 <strong className="text-[26px] xl:text-[28px] font-black text-white">谷歌《搜索质量评估指南》</strong>
                </p>
                <p className="text-[22px] xl:text-[24px] leading-relaxed font-['MiSans']">
                  常用于 <strong className="text-[26px] xl:text-[28px] font-black text-white">国外模型优化</strong>
                </p>
                <p className="text-[22px] xl:text-[24px] leading-relaxed font-['MiSans']">
                  但和中国模型实际情况 <strong className="text-[28px] xl:text-[30px] font-black text-white">并不适配</strong>。
                </p>
                <RejectStamp className="absolute right-0 bottom-[-10px]" />
              </div>
            </div>
          </div>

          {/* 右：用户视角议论文 */}
          <div
            className="rounded-[30px] px-11 py-10 flex flex-col min-h-0 relative bg-gradient-to-br from-[#004CE5]/5 to-zinc-950/20 border border-[#004CE5]/30 shadow-[0_12px_40px_rgba(0,76,229,0.05)]"
          >
            <div className="shrink-0 mb-6 flex flex-col justify-end" style={{ height: '135px' }}>
              <h3 className="text-[44px] xl:text-[48px] font-black text-white font-['MiSans'] leading-tight">
                我们实践最有效的是
              </h3>
              <div className="mt-4">
                <span className="text-[#004CE5] font-['MiSans'] font-black text-[38px] xl:text-[42px] leading-none">
                  写用户视角的议论文
                </span>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex flex-col gap-5">
              <RightCard index="01" title="用户视角">
                不要站在品牌角度写，而是站在<strong className="text-white font-bold">真实用户</strong>的角度
                写主观感受，优点要有，缺点也必须要有。
              </RightCard>

              <RightCard index="02" title="议论文">
                每篇文章都服务<strong className="text-white font-bold">一个明确的关键词、一个明确的用户问题、一个明确的推荐目标</strong>。
              </RightCard>
            </div>

            <p className="text-[26px] text-zinc-400 font-['MiSans'] mt-6 shrink-0">
              这样的内容，AI 更容易<strong className="text-white font-bold">抓取和理解</strong>。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 中心公式主导
 *   居中大公式 用户视角 ＋ 议论文 ＝ AI 友好，
 *   下方两张定义卡展开，底部一条 EEAT 脚注。
 * ============================================================ */
export function Page_GeoContentPrinciples_B() {
  return (
    <SlideLayout title="我们的内容标准：用户视角议论文">
      <Glow />
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', paddingTop: '10px' }}
      >
        {/* 中心公式 */}
        <div className="shrink-0 flex flex-col items-center">
          <span className="text-[23px] font-bold tracking-[0.35em] text-zinc-500 font-['MiSans'] mb-6">
            我们实践有效的是
          </span>
          <div className="flex items-center gap-7">
            <div
              className="px-11 py-7 rounded-[26px]"
              style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0B2E80 100%)`, border: '1px solid rgba(96,143,255,0.4)', boxShadow: '0 20px 50px -15px rgba(0,76,229,0.5)' }}
            >
              <span className="text-[58px] font-black text-white font-['MiSans'] leading-none">用户视角</span>
            </div>
            <span className="text-[54px] font-black text-zinc-600 leading-none">＋</span>
            <div
              className="px-11 py-7 rounded-[26px]"
              style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0B2E80 100%)`, border: '1px solid rgba(96,143,255,0.4)', boxShadow: '0 20px 50px -15px rgba(0,76,229,0.5)' }}
            >
              <span className="text-[58px] font-black text-white font-['MiSans'] leading-none">议论文</span>
            </div>
            <span className="text-[46px] font-black text-zinc-700 leading-none mx-1">＝</span>
            <span className="text-[32px] text-zinc-300 font-['MiSans'] font-medium leading-tight max-w-[440px]">
              这样的内容，AI 更容易<br />
              <strong className="text-white font-bold">抓取 · 理解</strong>
            </span>
          </div>
        </div>

        {/* 两张定义卡 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-10 mt-9">
          {/* 用户视角 */}
          <div className="rounded-[30px] px-11 py-9 flex flex-col" style={{ border: `1px solid ${BLUE_LT}40`, background: `${BLUE_LT}0D` }}>
            <div className="flex items-baseline gap-4 shrink-0">
              <span className="text-[40px] font-black text-white font-['MiSans']">用户视角</span>
              <span className="text-[24px] text-zinc-400 font-['MiSans']">怎么写</span>
            </div>
            <p className="text-[27px] text-zinc-300 leading-[46px] font-['MiSans'] mt-6">
              不要站在品牌角度写，而是站在<strong className="text-white font-bold">真实用户</strong>的角度
              写主观感受，优点要有，缺点也必须要有。
            </p>
            <div className="flex-1" />
            <div className="flex items-center gap-4 mt-6">
              <span className="flex-1 rounded-2xl border border-zinc-700 bg-black/30 px-6 py-4 text-center text-[30px] font-bold text-white font-['MiSans']">
                优点要有
              </span>
              <span
                className="flex-1 rounded-2xl px-6 py-4 text-center text-[30px] font-black font-['MiSans']"
                style={{ border: `1px solid ${BLUE_LT}80`, background: `${BLUE_LT}26`, color: BLUE_TX }}
              >
                缺点也必须要有
              </span>
            </div>
          </div>

          {/* 议论文 */}
          <div className="rounded-[30px] px-11 py-9 flex flex-col" style={{ border: `1px solid ${BLUE_LT}40`, background: `${BLUE_LT}0D` }}>
            <div className="flex items-baseline gap-4 shrink-0">
              <span className="text-[40px] font-black text-white font-['MiSans']">议论文</span>
              <span className="text-[24px] text-zinc-400 font-['MiSans']">怎么写</span>
            </div>
            <p className="text-[27px] text-zinc-300 leading-[46px] font-['MiSans'] mt-6">
              每篇文章都服务<strong className="text-white font-bold">一个明确的关键词、一个明确的用户问题、一个明确的推荐目标</strong>。
            </p>
            <div className="flex-1" />
            <div className="flex items-center gap-4 mt-6">
              {ONES.map((o) => (
                <span key={o.v} className="flex-1 rounded-2xl border border-zinc-700 bg-black/30 px-4 py-4 text-center">
                  <span className="block text-[20px] text-zinc-500 font-['MiSans']">{o.k}</span>
                  <span className="block text-[30px] font-bold text-white font-['MiSans'] mt-0.5">{o.v}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EEAT 脚注 */}
        <div className="shrink-0 mt-8 rounded-2xl border border-zinc-800 bg-[#0D0D10]/60 px-9 py-5 flex items-center gap-5">
          <span className="shrink-0 text-[24px] font-bold tracking-[0.06em] text-zinc-500 font-['MiSans']">
            讨论最多的是
          </span>
          <span className="shrink-0 text-zinc-600">|</span>
          <p className="text-[26px] text-zinc-400 font-['MiSans'] leading-snug">
            最早来自谷歌《搜索质量评估指南》，常用于国外模型优化，但
            <strong className="text-zinc-200 font-bold">和中国模型实际情况并不适配</strong>。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 左立论 · 右双卡逐条对应
 *   左栏讲「为什么不照搬 EEAT，我们更信用户视角议论文」，
 *   右栏两条横向行卡，把两个词的定义各成一行、一读到底。
 * ============================================================ */
export function Page_GeoContentPrinciples_C() {
  const Row = ({ index, name, desc, children }) => (
    <div
      className="flex-1 rounded-[26px] flex items-center px-10 gap-8"
      style={{ border: `1px solid ${BLUE_LT}3A`, background: `${BLUE_LT}0A` }}
    >
      <div className="w-[300px] shrink-0">
        <span className="font-['Montserrat'] text-[46px] font-black leading-none" style={{ color: BLUE_LT }}>{index}</span>
        <div className="text-[40px] font-black text-white font-['MiSans'] leading-none mt-2">{name}</div>
      </div>
      <div className="w-px self-stretch my-7 bg-zinc-800" />
      <div className="flex-1 min-w-0">
        <p className="text-[26px] text-zinc-300 leading-[42px] font-['MiSans']">{desc}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );

  return (
    <SlideLayout title="我们的内容标准：用户视角议论文">
      <Glow />
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        <div className="flex-1 min-h-0 flex gap-12">
          {/* 左：EEAT */}
          <div className="w-[560px] shrink-0 flex flex-col justify-center">
            <div className="w-[64px] h-[6px] rounded-full mb-8" style={{ background: BLUE }} />
            <span className="text-[24px] font-bold tracking-[0.06em] text-zinc-500 font-['MiSans'] mb-5">
              讨论最多的是
            </span>
            <div className="mb-2 shrink-0">
              <span className="text-zinc-300 font-['Montserrat'] font-black text-[64px] leading-none">E-E-A-T</span>
            </div>
            <EeatExpansions className="mb-8" cols={1} />
            <div className="space-y-4">
              <p className="text-[28px] text-zinc-400 font-['MiSans'] leading-[46px]">
                最早来自谷歌《搜索质量评估指南》
              </p>
              <p className="text-[28px] text-zinc-400 font-['MiSans'] leading-[46px]">
                常用于国外模型优化
              </p>
            </div>
            <div className="relative pr-[160px] mt-10">
              <p className="text-[28px] text-zinc-300 font-['MiSans'] leading-[46px]">
                但和中国模型实际情况
                <strong className="text-zinc-100 font-bold">并不适配</strong>。
              </p>
              <RejectStamp />
            </div>
          </div>

          {/* 右：用户视角议论文 */}
          <div className="flex-1 min-w-0 flex flex-col gap-8 justify-center">
            <div>
              <span className="text-[24px] font-bold tracking-[0.06em] font-['MiSans'] mb-4 block" style={{ color: BLUE_LT }}>
                我们实践有效的是
              </span>
              <p className="text-[44px] font-black text-white font-['MiSans'] leading-[1.25]">
                写<span style={{ color: BLUE_LT }}>用户视角</span>的<span style={{ color: BLUE_LT }}>议论文</span>
              </p>
            </div>

            <Row
              index="01"
              name="用户视角"
              desc={
                <>
                  不要站在品牌角度写，而是站在<strong className="text-white font-bold">真实用户</strong>的角度
                  写主观感受，优点要有，缺点也必须要有。
                </>
              }
            >
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-zinc-700 bg-black/30 px-7 py-3 text-[28px] font-bold text-white font-['MiSans'] leading-none">
                  优点要有
                </span>
                <span
                  className="rounded-xl px-7 py-3 text-[28px] font-black font-['MiSans'] leading-none"
                  style={{ border: `1px solid ${BLUE_LT}80`, background: `${BLUE_LT}26`, color: BLUE_TX }}
                >
                  缺点也必须要有
                </span>
              </div>
            </Row>

            <Row
              index="02"
              name="议论文"
              desc={
                <>
                  每篇文章都服务<strong className="text-white font-bold">一个明确的关键词、一个明确的用户问题、一个明确的推荐目标</strong>。
                </>
              }
            >
              <div className="flex items-center gap-3">
                {ONES.map((o) => (
                  <span key={o.v} className="rounded-xl border border-zinc-700 bg-black/30 px-6 py-3 text-[26px] font-bold text-white font-['MiSans'] leading-none">
                    <span className="text-zinc-500">{o.k}</span>{o.v}
                  </span>
                ))}
              </div>
            </Row>

            <p className="text-[26px] text-zinc-400 font-['MiSans'] leading-relaxed shrink-0">
              这样的内容，AI 更容易<strong className="text-white font-bold">抓取和理解</strong>。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 默认导出：指向版本 B（中心公式主导），兼容旧引用 */
export default Page_GeoContentPrinciples_B;

Page_GeoContentPrinciples_A.hideHeader = true;
Page_GeoContentPrinciples_B.hideHeader = true;
Page_GeoContentPrinciples_C.hideHeader = true;
