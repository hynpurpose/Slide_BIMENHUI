import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * GEO 量化竞争模型的目标 · 灵感来自股票量化交易
 * 5 个版式变体，左右键切换挑选。
 */

const STOCK_STEPS = [
  { t: '市场信号', d: '价格、成交量、资金流向' },
  { t: '因子模型', d: '拆解影响收益的关键变量' },
  { t: '策略下单', d: '按模型结果自动/半自动执行' },
  { t: '超额收益', d: '跑赢基准，拿到 Alpha' },
];

const GEO_STEPS = [
  { t: 'AI 引用信号', d: '提及率、位次、引用来源' },
  { t: '因子模型', d: '拆解内容/平台/竞品权重' },
  { t: '内容与投放', d: '按模型结果决定写什么、投哪里' },
  { t: '超额提及率', d: '同预算下把品牌推到第 1' },
];

const Subtitle = ({ children }) => (
  <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
    {children}
  </div>
);

const GoalSubtitle = () => (
  <Subtitle>
    同样的钱，别人做完只能把品牌推到第 <span className="text-white font-bold">3</span>，我们能把品牌推到第{' '}
    <span className="text-[#60A5FA] font-black">1</span>
  </Subtitle>
);

function ArrowRight({ label = '灵感来源' }) {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 w-[120px] gap-3">
      <div className="text-[15px] text-[#60A5FA] font-bold tracking-wider whitespace-nowrap">{label}</div>
      <svg width="72" height="28" viewBox="0 0 72 28" fill="none" className="overflow-visible">
        <path d="M2 14 H58" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 4 L64 14 L50 24" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_12px_#004CE5]" />
    </div>
  );
}

/* ============================================================
 * 版 A：严格按需求 — 左右两栏示意 + 中间箭头 + 底部共同点
 * ==========================================================*/
export function Page_QuantitativeModel_Why_A() {
  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      <GoalSubtitle />

      <div className="absolute left-0 top-[58px] w-full bottom-0 flex flex-col gap-5 select-none font-['MiSans']">
        {/* 两栏 + 箭头 */}
        <div className="flex-1 min-h-0 flex items-stretch gap-4">
          {/* 左：股票量化 */}
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col">
            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1 rounded-full border border-zinc-600 text-[15px] text-zinc-400 font-bold tracking-wider">STOCK</span>
              <h3 className="text-[28px] font-black text-white">股票 · 量化交易</h3>
            </div>
            <p className="mt-3 text-[20px] text-zinc-400 leading-snug shrink-0">
              不靠交易员拍脑袋买股票，而是用<span className="text-white font-bold">数据和模型</span>判断机会。
            </p>
            <div className="mt-6 flex-1 flex flex-col justify-between gap-3 min-h-0">
              {STOCK_STEPS.map((s, i) => (
                <div key={s.t} className="flex items-center gap-4 rounded-2xl bg-black/40 border border-white/5 px-5 py-3.5">
                  <span className="font-['Montserrat'] text-[26px] font-black text-zinc-500 w-10 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <div className="text-[22px] font-bold text-zinc-100">{s.t}</div>
                    <div className="text-[17px] text-zinc-500 mt-0.5">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ArrowRight label="灵感迁移" />

          {/* 右：GEO 模型 */}
          <div className="flex-1 rounded-3xl border border-[#004CE5]/45 bg-[#004CE5]/[0.07] p-8 flex flex-col shadow-[0_0_40px_rgba(0,76,229,0.15)]">
            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1 rounded-full border border-[#004CE5]/60 text-[15px] text-[#60A5FA] font-bold tracking-wider">GEO</span>
              <h3 className="text-[28px] font-black text-white">GEO · 量化竞争模型</h3>
            </div>
            <p className="mt-3 text-[20px] text-zinc-300 leading-snug shrink-0">
              不靠拍脑袋投内容，而是用<span className="text-white font-bold">因子模型</span>把品牌推到第 1。
            </p>
            <div className="mt-6 flex-1 flex flex-col justify-between gap-3 min-h-0">
              {GEO_STEPS.map((s, i) => (
                <div key={s.t} className="flex items-center gap-4 rounded-2xl bg-black/35 border border-[#004CE5]/25 px-5 py-3.5">
                  <span className="font-['Montserrat'] text-[26px] font-black text-[#004CE5] w-10 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <div className="text-[22px] font-bold text-white">{s.t}</div>
                    <div className="text-[17px] text-blue-200/70 mt-0.5">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 共同点条 */}
        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 flex items-center gap-6">
          <span className="text-[18px] font-bold text-[#60A5FA] whitespace-nowrap shrink-0">相同关键点</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {['数据和模型决策', '因子拆解', '追求 Alpha', '验证后再执行'].map((t) => (
              <span key={t} className="text-[20px] text-zinc-200 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#004CE5]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 B：左右映射对照表 — 每一行是一个启发点
 * ==========================================================*/
export function Page_QuantitativeModel_Why_B() {
  const rows = [
    { stock: '市场信号采集', geo: 'AI 引用信号采集', tip: '先看清战场' },
    { stock: '多因子拆解收益', geo: '多因子拆解提及率', tip: '找到真正杠杆' },
    { stock: '模型打分选标的', geo: '模型打分选内容/平台', tip: '不拍脑袋' },
    { stock: '下单追求超额收益', geo: '投放追求超额提及率', tip: '同预算抢第 1' },
  ];

  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      <GoalSubtitle />

      <div className="absolute left-0 top-[58px] w-full bottom-0 flex flex-col select-none font-['MiSans']">
        <div className="mb-5 text-[22px] text-zinc-400">
          思路来自股票领域的<span className="text-white font-bold">量化交易</span>——左边每一环，都能在右边找到对应打法。
        </div>

        {/* 表头 */}
        <div className="grid grid-cols-[1fr_90px_1fr_220px] gap-3 mb-3 px-2">
          <div className="text-[18px] font-bold text-zinc-500 tracking-wider">股票 · 量化交易</div>
          <div />
          <div className="text-[18px] font-bold text-[#60A5FA] tracking-wider">GEO · 量化竞争模型</div>
          <div className="text-[18px] font-bold text-zinc-500 tracking-wider">启发点</div>
        </div>

        <div className="flex-1 flex flex-col gap-3 min-h-0">
          {rows.map((r, i) => (
            <div
              key={r.tip}
              className="flex-1 grid grid-cols-[1fr_90px_1fr_220px] gap-3 items-stretch min-h-0"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 flex items-center">
                <span className="font-['Montserrat'] text-[22px] font-black text-zinc-600 mr-4">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[26px] font-bold text-zinc-100">{r.stock}</span>
              </div>
              <div className="flex items-center justify-center">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                  <path d="M2 10 H28" stroke="#004CE5" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M22 3 L34 10 L22 17" stroke="#004CE5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="rounded-2xl border border-[#004CE5]/40 bg-[#004CE5]/[0.08] px-7 flex items-center">
                <span className="text-[26px] font-bold text-white">{r.geo}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 px-5 flex items-center justify-center">
                <span className="text-[22px] font-bold text-[#60A5FA]">{r.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 C：中间「共同 DNA」桥接，两侧对称展开
 * ==========================================================*/
export function Page_QuantitativeModel_Why_C() {
  const dna = [
    { label: '数据驱动', desc: '不靠经验拍脑袋' },
    { label: '因子模型', desc: '拆解真正起作用的变量' },
    { label: 'Alpha 目标', desc: '追求超额、不是平均' },
    { label: '闭环迭代', desc: '验证 → 执行 → 再优化' },
  ];

  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      <GoalSubtitle />

      <div className="absolute left-0 top-[58px] w-full bottom-0 flex items-stretch gap-5 select-none font-['MiSans']">
        {/* 左栏 */}
        <div className="w-[420px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col justify-between">
          <div>
            <div className="text-[16px] text-zinc-500 font-bold tracking-[0.2em]">FROM</div>
            <h3 className="mt-2 text-[34px] font-black text-white leading-tight">股票领域<br />量化交易</h3>
            <p className="mt-5 text-[20px] text-zinc-400 leading-relaxed">
              用模型读市场信号，用因子解释收益，用策略拿到超额回报。
            </p>
          </div>
          <div className="space-y-3">
            {['信号采集', '因子打分', '策略执行', '超额收益'].map((t) => (
              <div key={t} className="rounded-xl bg-black/40 border border-white/5 px-5 py-3 text-[22px] font-bold text-zinc-200">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* 中：共同 DNA */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center justify-center gap-4 mb-4 shrink-0">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#004CE5]/60 to-[#004CE5]" />
            <div className="px-5 py-2 rounded-full border border-[#004CE5]/50 bg-[#004CE5]/15 text-[18px] font-bold text-[#93C5FD]">
              被迁移过来的相同关键点
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#004CE5]/60 to-[#004CE5]" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
            {dna.map((d, i) => (
              <div
                key={d.label}
                className="rounded-3xl border border-[#004CE5]/35 bg-gradient-to-b from-[#004CE5]/15 to-transparent p-7 flex flex-col justify-center"
              >
                <span className="font-['Montserrat'] text-[40px] font-black text-[#004CE5]/80 leading-none">{String(i + 1).padStart(2, '0')}</span>
                <div className="mt-4 text-[28px] font-black text-white">{d.label}</div>
                <div className="mt-2 text-[20px] text-zinc-400">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右栏 */}
        <div className="w-[420px] shrink-0 rounded-3xl border border-[#004CE5]/45 bg-[#004CE5]/[0.07] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(0,76,229,0.12)]">
          <div>
            <div className="text-[16px] text-[#60A5FA] font-bold tracking-[0.2em]">TO</div>
            <h3 className="mt-2 text-[34px] font-black text-white leading-tight">GEO<br />量化竞争模型</h3>
            <p className="mt-5 text-[20px] text-zinc-300 leading-relaxed">
              用模型读 AI 引用，用因子决定写什么、投哪里，把品牌推到第 1。
            </p>
          </div>
          <div className="space-y-3">
            {['引用监测', '因子打分', '内容投放', '超额提及率'].map((t) => (
              <div key={t} className="rounded-xl bg-black/35 border border-[#004CE5]/25 px-5 py-3 text-[22px] font-bold text-white">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 D：流程镜像 — 上下两条平行流水线，中间竖向启发标注
 * ==========================================================*/
export function Page_QuantitativeModel_Why_D() {
  const pairs = [
    { stock: '市场信号', geo: 'AI 引用信号', shared: '信号' },
    { stock: '因子模型', geo: '因子模型', shared: '模型' },
    { stock: '策略下单', geo: '内容投放', shared: '执行' },
    { stock: '超额收益', geo: '第 1 名位次', shared: 'Alpha' },
  ];

  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      <GoalSubtitle />

      <div className="absolute left-0 top-[58px] w-full bottom-0 flex flex-col select-none font-['MiSans']">
        <p className="text-[22px] text-zinc-400 mb-6 shrink-0">
          量化交易怎么打市场，我们就怎么打 AI 推荐——<span className="text-white font-bold">同一套逻辑，换了一个战场</span>。
        </p>

        {/* 上：股票 */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6 shrink-0">
          <div className="text-[16px] font-bold text-zinc-500 tracking-wider mb-4">股票 · 量化交易</div>
          <div className="flex items-center gap-3">
            {pairs.map((p, i) => (
              <React.Fragment key={p.stock}>
                <div className="flex-1 rounded-2xl bg-black/40 border border-white/5 px-5 py-5 text-center">
                  <div className="text-[24px] font-black text-zinc-100">{p.stock}</div>
                </div>
                {i < pairs.length - 1 && (
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="shrink-0 opacity-50">
                    <path d="M2 8 H16" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 3 L20 8 L12 13" stroke="#71717a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 中：启发箭头 + 共同点 */}
        <div className="flex items-stretch my-4 px-4 shrink-0">
          {pairs.map((p) => (
            <div key={p.shared} className="flex-1 flex flex-col items-center gap-1">
              <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
                <path d="M10 2 V28" stroke="#004CE5" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
                <path d="M4 22 L10 32 L16 22" stroke="#004CE5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="px-4 py-1.5 rounded-full bg-[#004CE5]/20 border border-[#004CE5]/40 text-[18px] font-bold text-[#93C5FD]">
                {p.shared}
              </span>
            </div>
          ))}
        </div>

        {/* 下：GEO */}
        <div className="rounded-3xl border border-[#004CE5]/45 bg-[#004CE5]/[0.07] px-8 py-6 flex-1 min-h-0 shadow-[0_0_40px_rgba(0,76,229,0.12)] flex flex-col justify-center">
          <div className="text-[16px] font-bold text-[#60A5FA] tracking-wider mb-4">GEO · 量化竞争模型</div>
          <div className="flex items-center gap-3">
            {pairs.map((p, i) => (
              <React.Fragment key={p.geo}>
                <div className="flex-1 rounded-2xl bg-black/35 border border-[#004CE5]/25 px-5 py-5 text-center">
                  <div className="text-[24px] font-black text-white">{p.geo}</div>
                </div>
                {i < pairs.length - 1 && (
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="shrink-0">
                    <path d="M2 8 H16" stroke="#004CE5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 3 L20 8 L12 13" stroke="#004CE5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 E：故事式 — 左大叙事卡 + 右三层「启发 → 迁移 → 结果」
 * ==========================================================*/
export function Page_QuantitativeModel_Why_E() {
  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      <GoalSubtitle />

      <div className="absolute left-0 top-[58px] w-full bottom-0 flex gap-6 select-none font-['MiSans']">
        {/* 左：灵感源 */}
        <div className="w-[620px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-zinc-500/5 blur-3xl pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-[15px] text-zinc-400 font-bold tracking-wider">
              灵感来源
            </div>
            <h3 className="mt-6 text-[42px] font-black text-white leading-[1.15]">
              股票领域的<br />量化交易
            </h3>
            <p className="mt-6 text-[24px] text-zinc-400 leading-[40px]">
              交易员不靠感觉买卖；他们用<span className="text-white font-bold">数据</span>、
              <span className="text-white font-bold">因子</span>和<span className="text-white font-bold">模型</span>
              ，在同样的市场里，多赚出一块超额收益。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
            {[
              ['拍脑袋交易', '靠经验赌方向'],
              ['量化交易', '靠模型拿 Alpha'],
            ].map(([a, b], i) => (
              <div
                key={a}
                className={`rounded-2xl px-5 py-4 border ${i === 1 ? 'border-[#004CE5]/40 bg-[#004CE5]/10' : 'border-white/5 bg-black/30'}`}
              >
                <div className={`text-[20px] font-black ${i === 1 ? 'text-white' : 'text-zinc-500 line-through'}`}>{a}</div>
                <div className={`text-[17px] mt-1 ${i === 1 ? 'text-blue-200/80' : 'text-zinc-600'}`}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 箭头 */}
        <div className="flex flex-col items-center justify-center shrink-0 w-[90px] gap-3">
          <div className="text-[15px] text-[#60A5FA] font-bold tracking-wider">启发</div>
          <svg width="56" height="28" viewBox="0 0 56 28" fill="none">
            <path d="M2 14 H42" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" />
            <path d="M34 4 L50 14 L34 24" stroke="#004CE5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 右：GEO 侧三层 */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          {[
            {
              tag: '相同关键点',
              title: '数据 · 因子 · Alpha · 闭环',
              body: '量化交易里真正管用的四件事，完整迁进 GEO。',
            },
            {
              tag: '变成我们的打法',
              title: 'GEO 量化竞争模型',
              body: '拆 AI 引用权重 → 打分选题与平台 → 决定写什么、投哪里。',
            },
            {
              tag: '最终目标',
              title: '同样预算，推到第 1',
              body: '别人停在第 3，我们用模型把超额提及率变成第一名。',
            },
          ].map((card, i) => (
            <div
              key={card.tag}
              className={`flex-1 rounded-3xl border px-8 py-5 flex items-center gap-6 min-h-0 ${
                i === 2
                  ? 'border-[#004CE5]/50 bg-[#004CE5]/[0.12] shadow-[0_0_30px_rgba(0,76,229,0.2)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <span className="font-['Montserrat'] text-[48px] font-black text-[#004CE5]/70 leading-none shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-[#60A5FA] tracking-wider">{card.tag}</div>
                <div className="mt-1 text-[28px] font-black text-white leading-snug">{card.title}</div>
                <div className="mt-1.5 text-[20px] text-zinc-400 leading-snug">{card.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Why_A.hideHeader = true;
Page_QuantitativeModel_Why_B.hideHeader = true;
Page_QuantitativeModel_Why_C.hideHeader = true;
Page_QuantitativeModel_Why_D.hideHeader = true;
Page_QuantitativeModel_Why_E.hideHeader = true;

export default Page_QuantitativeModel_Why_A;
