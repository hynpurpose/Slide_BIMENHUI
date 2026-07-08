import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 讲稿核心：分类只看「一件事」——
 *   这句话的答案里，「某家电品牌」一定会出现吗？
 *     · 不一定出现 → 优化词（例：好看的电视推荐）→ 看 提及率 / 出现位置
 *     · 一定会出现 → 监测词（例：某家电品牌跟竞品A比哪个好，问题里已带“某家电品牌”）→ 看 信息准确 / 有无负面
 *   为什么要分：混在一起算，监测词天然 100% 提及，会把整体提及率虚高，数据失去意义。
 *
 * 统一配色：优化词 = 蓝 (#5B8CFF)；监测词 = 琥珀 (#F5A623)
 * ============================================================ */

const OPT = {
  name: '优化词',
  tag: '主动争取被推荐',
  answer: '不一定出现',
  mark: '✕',
  example: '“好看的电视推荐”',
  purpose: '答案里不一定有某家电品牌，要靠优化去争取',
  metrics: ['提及率', '出现位置'],
  accent: '#5B8CFF',
  accentText: '#8CB0FF',
};

const MON = {
  name: '监测词',
  tag: '守住信息底线',
  answer: '一定会出现',
  mark: '✓',
  example: '“某家电品牌跟竞品A比哪个好”',
  purpose: '问题里已带“某家电品牌”，某家电品牌必然在场',
  metrics: ['信息准确', '有无负面'],
  accent: '#F5A623',
  accentText: '#F5C574',
};

/* 底部提醒条 —— 三个版本共用 */
function WhyBar({ className = '' }) {
  return (
    <div
      className={`shrink-0 rounded-2xl border border-zinc-800 bg-[#0D0D10]/60 px-8 py-5 flex items-center gap-6 ${className}`}
    >
      <span className="shrink-0 w-[46px] h-[46px] rounded-full border-2 border-zinc-600 flex items-center justify-center text-[30px] font-black text-zinc-400 font-['MiSans'] leading-none">
        !
      </span>
      <p className="text-[27px] text-zinc-400 font-['MiSans'] leading-snug">
        为什么要拆开算：混在一起，监测词天然
        <strong className="text-white font-bold">「100% 提及」</strong>，会把整体
        <strong className="text-white font-bold">提及率虚高</strong>，数据便失去意义。
      </p>
    </div>
  );
}

/* ============================================================
 * 版本 A — 两个例子 · 归类 → 指标
 * 顶部保留一行判断标准，下方用两条横向行卡把例子落到归类与指标：
 *   例子问法 → 归为 优化词/监测词 → 主要看的指标。
 * ============================================================ */
const SUMMARY_ROWS = [
  {
    example: '“好看的电视推荐”',
    name: '优化词',
    focusLabel: '主要看',
    focus: ['提及率', '出现位置'],
    accent: '#5B8CFF',
    accentText: '#8CB0FF',
  },
  {
    example: '“某家电品牌跟竞品A比哪个好”',
    name: '监测词',
    focusLabel: '主要看',
    focus: ['产品信息是否准确', '是否有负面信息'],
    accent: '#F5A623',
    accentText: '#F5C574',
  },
];

export function Page_SkyworthKeywordWhySplit_A() {
  const LABEL_H = 'h-[36px]';

  const Row = ({ d }) => (
    <div
      className="flex-1 rounded-[30px] flex items-stretch px-12 gap-10 py-10"
      style={{ border: `1px solid ${d.accent}3A`, background: `${d.accent}0A` }}
    >
      {/* 例子 */}
      <div className="w-[620px] shrink-0 flex flex-col">
        <span className={`${LABEL_H} text-[24px] text-zinc-500 font-['MiSans']`}>用户会这么问</span>
        <div className="flex-1 flex items-center">
          <div className="text-[52px] font-black text-white font-['MiSans'] leading-tight">
            {d.example}
          </div>
        </div>
      </div>

      {/* 归类箭头 */}
      <div className="shrink-0 flex flex-col items-center">
        <span className={`${LABEL_H} text-[22px] text-zinc-500 font-['MiSans']`}>归为</span>
        <div className="flex-1 flex items-center">
          <span className="text-[40px] leading-none" style={{ color: d.accent }}>→</span>
        </div>
      </div>

      {/* 分类名 */}
      <div className="shrink-0 w-[210px] flex flex-col">
        <span className={LABEL_H} />
        <div className="flex-1 flex items-center justify-center">
          <span
            className="px-8 py-4 rounded-2xl text-[46px] font-black font-['MiSans'] leading-none whitespace-nowrap"
            style={{ background: `${d.accent}20`, border: `1.5px solid ${d.accent}66`, color: d.accentText }}
          >
            {d.name}
          </span>
        </div>
      </div>

      <div className="w-px self-stretch bg-zinc-800" />

      {/* 关注指标 */}
      <div className="flex-1 min-w-0 flex flex-col">
        <span className={`${LABEL_H} text-[24px] text-zinc-500 font-['MiSans']`}>{d.focusLabel}</span>
        <div className="flex-1 flex items-center">
          <div className="flex flex-wrap gap-4">
            {d.focus.map((f) => (
              <span
                key={f}
                className="px-7 py-3.5 rounded-xl text-[32px] font-bold font-['MiSans'] leading-none"
                style={{ background: `${d.accent}26`, border: `1px solid ${d.accent}55`, color: d.accentText }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SlideLayout title="监测词与优化词怎么分类？">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        {/* 顶部单行判断标准 */}
        <p className="shrink-0 text-[38px] text-zinc-300 font-['MiSans'] leading-tight mb-8">
          分类只看一件事：用户的搜索问法中，
          <strong className="text-white font-bold" style={{ color: '#5B8CFF' }}>「某家电品牌」</strong>
          <strong className="text-white font-bold">一定会出现吗？</strong>
        </p>

        {/* 居中小结标题 */}
        <p className="shrink-0 text-center text-[46px] font-black text-white font-['MiSans'] leading-[1.1] mb-9">
          两个例子，两种<span style={{ color: '#5B8CFF' }}>归类</span>，看的是完全不同的
          <span style={{ color: '#F5A623' }}>指标</span>
        </p>

        {/* 两条总结行 */}
        <div className="flex-1 min-h-0 flex flex-col gap-9">
          {SUMMARY_ROWS.map((d) => (
            <Row key={d.name} d={d} />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 中心问句 · 二分岔
 * 顶部把「唯一判断标准」做成居中大问句，下方两张卡片各自顶着一枚
 * 「答案徽标」，让 问题 → 答案 → 分类 一眼连成线。
 * ============================================================ */
export function Page_SkyworthKeywordWhySplit_B() {
  const Card = ({ d }) => (
    <div className="relative h-full">
      {/* 答案徽标（骑在卡片上沿） */}
      <span
        className="absolute left-1/2 -translate-x-1/2 -top-5 z-10 px-8 py-3 rounded-full bg-[#0b0b0f] text-[28px] font-black font-['MiSans'] leading-none whitespace-nowrap"
        style={{ border: `1.5px solid ${d.accent}80`, color: d.accentText }}
      >
        {d.mark} 某家电品牌{d.answer}
      </span>

      <div
        className="h-full rounded-[30px] pt-16 px-11 pb-10 flex flex-col"
        style={{ border: `1px solid ${d.accent}40`, background: `${d.accent}0D` }}
      >
        <div className="flex items-baseline gap-4 shrink-0">
          <span className="text-[50px] font-black text-white font-['MiSans'] leading-none">{d.name}</span>
          <span className="text-[25px] text-zinc-400 font-['MiSans']">{d.tag}</span>
        </div>

        <div className="shrink-0 mt-8 rounded-2xl border border-zinc-700/70 bg-zinc-900/40 px-8 py-6">
          <span className="text-[22px] text-zinc-500 font-['MiSans']">典型问法</span>
          <div className="text-[36px] text-zinc-100 font-semibold font-['MiSans'] mt-1.5">{d.example}</div>
        </div>

        <div className="flex-1" />

        <div className="shrink-0">
          <span className="text-[23px] text-zinc-500 font-['MiSans']">主要分析</span>
          <div className="flex gap-4 mt-3">
            {d.metrics.map((m) => (
              <span
                key={m}
                className="px-7 py-3.5 rounded-xl text-[31px] font-bold font-['MiSans'] leading-none"
                style={{ background: `${d.accent}26`, border: `1px solid ${d.accent}55`, color: d.accentText }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SlideLayout title="监测词与优化词怎么分类？">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '18px' }}
      >
        {/* 顶部：唯一判断标准 */}
        <div className="shrink-0 flex flex-col items-center text-center mb-11">
          <span className="text-[23px] font-bold tracking-[0.35em] text-zinc-500 font-['MiSans'] mb-4">
            分类只看一件事
          </span>
          <p className="text-[54px] font-black text-white font-['MiSans'] leading-[1.1]">
            用户的搜索问法中，<span style={{ color: '#5B8CFF' }}>「某家电品牌」</span>一定会出现吗？
          </p>
        </div>

        {/* 两分岔卡片 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-10">
          <Card d={OPT} />
          <Card d={MON} />
        </div>

        <WhyBar className="mt-8" />
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 一道判断题 · 横向决策流
 * 左栏立住「判断标准」，右栏两条横向行卡：判定 → 例子 → 分析维度，
 * 从左读到右就是一条完整的分类逻辑。
 * ============================================================ */
export function Page_SkyworthKeywordWhySplit_C() {
  const Row = ({ d }) => (
    <div
      className="flex-1 rounded-[26px] flex items-center px-10 gap-9"
      style={{ border: `1px solid ${d.accent}3A`, background: `${d.accent}0A` }}
    >
      {/* 判定 + 分类名 */}
      <div className="w-[300px] shrink-0">
        <div className="text-[44px] font-black text-white font-['MiSans'] leading-none">{d.name}</div>
        <div
          className="inline-flex items-center gap-2.5 mt-4 px-5 py-2 rounded-full text-[24px] font-bold font-['MiSans'] leading-none"
          style={{ background: `${d.accent}20`, color: d.accentText }}
        >
          <span className="text-[26px] leading-none">{d.mark}</span> 某家电品牌{d.answer}
        </div>
      </div>

      <div className="w-px self-stretch my-6 bg-zinc-800" />

      {/* 例子 */}
      <div className="flex-1 min-w-0">
        <span className="text-[21px] text-zinc-500 font-['MiSans']">典型问法</span>
        <div className="text-[33px] text-zinc-100 font-semibold font-['MiSans'] mt-1 truncate">{d.example}</div>
        <div className="text-[21px] text-zinc-500 font-['MiSans'] mt-1.5">{d.purpose}</div>
      </div>

      {/* 分析维度 */}
      <div className="shrink-0">
        <span className="text-[21px] text-zinc-500 font-['MiSans']">主要分析</span>
        <div className="flex gap-3 mt-2.5">
          {d.metrics.map((m) => (
            <span
              key={m}
              className="px-6 py-3 rounded-xl text-[28px] font-bold font-['MiSans'] leading-none"
              style={{ background: `${d.accent}26`, border: `1px solid ${d.accent}55`, color: d.accentText }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <SlideLayout title="监测词与优化词怎么分类？">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        <div className="flex-1 min-h-0 flex gap-12">
          {/* 左：判断标准 */}
          <div className="w-[560px] shrink-0 flex flex-col justify-center">
            <div className="w-[64px] h-[6px] rounded-full mb-8" style={{ background: '#5B8CFF' }} />
            <span className="text-[24px] font-bold tracking-[0.28em] text-zinc-500 font-['MiSans'] mb-5">
              先做一道判断题
            </span>
            <p className="text-[46px] font-black text-white font-['MiSans'] leading-[1.2]">
              用户的搜索问法中，<br />
              <span style={{ color: '#5B8CFF' }}>「某家电品牌」</span>一定会出现吗？
            </p>
            <p className="text-[26px] text-zinc-400 font-['MiSans'] leading-relaxed mt-8">
              答案不同，<strong className="text-white font-bold">归类不同</strong>，
              盯的<strong className="text-white font-bold">指标</strong>也完全不同。
            </p>
          </div>

          {/* 右：两条决策行 */}
          <div className="flex-1 min-w-0 flex flex-col gap-8">
            <Row d={OPT} />
            <Row d={MON} />
          </div>
        </div>

        <WhyBar className="mt-9" />
      </div>
    </SlideLayout>
  );
}

/* 默认导出保留（指向版本 A），兼容旧的 component 引用 */
export default Page_SkyworthKeywordWhySplit_A;

Page_SkyworthKeywordWhySplit_A.hideHeader = true;
Page_SkyworthKeywordWhySplit_B.hideHeader = true;
Page_SkyworthKeywordWhySplit_C.hideHeader = true;
