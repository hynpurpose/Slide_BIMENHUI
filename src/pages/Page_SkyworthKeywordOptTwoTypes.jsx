import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 讲稿核心：优化词再往下拆成「两类」，判定标准完全不同——
 *   · 大类词（品类选择阶段）：问法只圈品类、不锁型号。
 *       只要 AI 端出「任意一款某家电品牌」，这一问就算赢 → 看 有没有被推「进来」
 *   · 产品专属词（框定特征/人群）：问法已锁定唯一那款。
 *       必须端出「框定的那款(旗舰款B)」才算数，端错型号=没推准 → 看 有没有被推「准」
 *
 *   关键教学点：同一批 AI 推荐结果，两类词用「两把不同的尺子」去判命中。
 *
 * 统一配色：大类词 = 蓝 (#5B8CFF)；产品专属词 = 青 (#2DD4BF)
 * ============================================================ */

// AI 实际回答里会混合推荐多个品牌与型号（两类词共用同一批结果）
const POOL = [
  { brand: '进口品牌C', model: 'X90L', sw: false },
  { brand: '某家电品牌', model: '旗舰款A', sw: true },
  { brand: '进口品牌A', model: 'The Frame', sw: false },
  { brand: '某家电品牌', model: '旗舰款B', sw: true },
  { brand: '竞品B', model: 'T7K', sw: false },
  { brand: '竞品A', model: 'E8N', sw: false },
  { brand: '某家电品牌', model: '旗舰款C', sw: true },
  { brand: '进口品牌B', model: 'B4', sw: false },
  { brand: '竞品C', model: 'S Pro', sw: false },
  { brand: '某家电品牌', model: '高端款B', sw: true },
  { brand: '竞品D', model: '智慧屏 V5', sw: false },
  { brand: '某家电品牌', model: '经典款A', sw: true },
];
const TARGET = '旗舰款B';
const SW_COUNT = POOL.filter((p) => p.sw).length; // 5 款某家电品牌

const BROAD = {
  name: '大类词',
  stage: '品类选择阶段',
  accent: '#5B8CFF',
  accentText: '#8CB0FF',
  examples: [{ q: '“画质好的壁纸电视推荐”' }, { q: '“壁纸电视怎么选”' }],
  key: '有没有被推进来',
  rule: '任意一款某家电品牌被推荐，即算有效提及',
  exNote: '问法只圈定「品类」、没锁型号 —— 只要 AI 端出任意一款某家电品牌，这一问就算赢。',
  hitBadge: `命中 ${SW_COUNT} 款 · 全部计入`,
};

const EXACT = {
  name: '产品专属词',
  stage: '框定具体特征 / 人群',
  accent: '#2DD4BF',
  accentText: '#5EEAD4',
  examples: [
    { q: '“适合小客厅的入门壁纸电视”', m: '旗舰款B' },
    { q: '“主打线下的高端壁纸电视”', m: '旗舰款C' },
  ],
  key: '有没有被推准',
  rule: '只有框定的那款（旗舰款B）被推准，才算命中',
  exNote: '问法已锁定「场景 / 人群」、指向唯一那款 —— AI 端出别的某家电品牌型号，也算没推准。',
  note: '虚线框：是某家电品牌、但不是框定的那款，不算推准',
  hitBadge: '命中 1 款 · 另 4 款不算',
};

/* 单个推荐结果标签。state: 'hit' | 'sw'(某家电品牌但不算) | 'other' */
function Chip({ label, state, accent, accentText, sm = false }) {
  const base = `rounded-xl font-bold font-['MiSans'] leading-none text-center truncate ${
    sm ? 'px-3 py-2 text-[20px]' : 'px-4 py-2.5 text-[25px]'
  }`;
  if (state === 'hit')
    return (
      <span
        className={base}
        style={{ background: accent, color: '#0A0F0E', boxShadow: `0 0 22px ${accent}55` }}
      >
        {label}
      </span>
    );
  if (state === 'sw')
    return (
      <span
        className={base}
        style={{ background: 'transparent', border: `1px dashed ${accent}99`, color: accentText }}
      >
        {label}
      </span>
    );
  return <span className={`${base} bg-zinc-900/40 text-zinc-600`}>{label}</span>;
}

function chipState(p, mode) {
  // mode: 'broad' → 任意某家电品牌命中；'exact' → 仅 TARGET 命中，其余某家电品牌为 sw
  if (!p.sw) return 'other';
  if (mode === 'broad') return 'hit';
  return p.model === TARGET ? 'hit' : 'sw';
}

/* ============================================================
 * 版本 A — 双栏对照 · 判定条前置
 * 顶部一句话点明「两把尺子」的差别；两栏各自：分类名 → 用户问法(带补充说明)
 * → 同一批 AI 结果的染色示意 → 底部高亮判定条。重点色贯穿全栏。
 * ============================================================ */
export function Page_SkyworthKeywordOptTwoTypes_A() {
  const Card = ({ d, mode }) => (
    <div
      className="h-full rounded-[28px] overflow-hidden flex flex-col"
      style={{ border: `1px solid ${d.accent}3A`, background: `${d.accent}0A` }}
    >
      {/* 顶栏：分类名 + 阶段 + 关键判定 */}
      <div className="shrink-0 px-9 pt-8 pb-6" style={{ borderTop: `6px solid ${d.accent}` }}>
        <div className="flex items-baseline gap-4">
          <span className="text-[42px] font-black text-white font-['MiSans'] leading-none">{d.name}</span>
          <span className="text-[24px] text-zinc-400 font-['MiSans']">{d.stage}</span>
        </div>
        <div className="mt-4 text-[27px] font-['MiSans'] text-zinc-400 leading-none">
          看某家电品牌<strong className="font-black" style={{ color: d.accentText }}>「{d.key}」</strong>
        </div>
      </div>

      {/* 用户问法 + 补充说明 */}
      <div className="shrink-0 px-9">
        <div className="flex flex-col items-start gap-2.5">
          {d.examples.map((e) => (
            <span
              key={e.q}
              className="px-5 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900/60 text-[24px] text-zinc-200 font-['MiSans']"
            >
              {e.q}
              {e.m && <span style={{ color: d.accentText }}> → {e.m}</span>}
            </span>
          ))}
        </div>
        <p className="text-[21px] text-zinc-500 font-['MiSans'] leading-snug mt-3.5">{d.exNote}</p>
      </div>

      {/* AI 推荐结果染色示意 */}
      <div className="flex-1 min-h-0 px-9 mt-6 flex flex-col justify-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[22px] text-zinc-500 font-['MiSans']">同一批 AI 推荐结果</span>
          <span
            className="px-4 py-1.5 rounded-full text-[21px] font-bold font-['MiSans'] leading-none"
            style={{ background: `${d.accent}22`, color: d.accentText }}
          >
            {d.hitBadge}
          </span>
        </div>
        <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-5 grid grid-cols-4 gap-3">
          {POOL.map((p) => (
            <Chip
              key={p.brand + p.model}
              label={`${p.brand} ${p.model}`}
              state={chipState(p, mode)}
              accent={d.accent}
              accentText={d.accentText}
            />
          ))}
        </div>
      </div>

      {/* 底部判定条 */}
      <div
        className="shrink-0 mx-9 mb-8 mt-6 rounded-2xl px-6 py-4 flex items-center gap-4"
        style={{ background: `${d.accent}1A`, border: `1px solid ${d.accent}44` }}
      >
        <span className="text-[34px] font-black leading-none" style={{ color: d.accentText }}>✓</span>
        <span className="text-[25px] text-zinc-200 font-['MiSans'] leading-snug">{d.rule}</span>
      </div>
    </div>
  );

  return (
    <SlideLayout title="优化词分为大类词和产品专属词">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '18px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-6"
          style={{ fontSize: '38px', lineHeight: '1.2' }}
        >
          大类词看<strong className="text-white font-bold">某家电品牌有没有被推进来</strong>；专属词看<strong className="text-white font-bold">框定那款有没有被推准</strong>。
        </p>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
          <Card d={BROAD} mode="broad" />
          <Card d={EXACT} mode="exact" />
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 结构化对照表 · 逐行对齐
 * 左侧一列固定「对比维度」，右侧两列分别是大类词 / 专属词。
 * 判断对象 → 典型问法 → 命中标准 → AI 结果示意，一行一维度，
 * 横向一读就知道两类词差在哪，最「结构化」。
 * ============================================================ */
export function Page_SkyworthKeywordOptTwoTypes_B() {
  const Head = ({ d }) => (
    <div className="px-7 py-5" style={{ borderTop: `5px solid ${d.accent}` }}>
      <div className="flex items-baseline gap-3">
        <span className="text-[36px] font-black text-white font-['MiSans'] leading-none">{d.name}</span>
        <span className="text-[21px] text-zinc-500 font-['MiSans']">{d.stage}</span>
      </div>
    </div>
  );

  const Examples = ({ d }) => (
    <div className="flex flex-col gap-2">
      {d.examples.map((e) => (
        <span key={e.q} className="text-[25px] text-zinc-100 font-semibold font-['MiSans']">
          {e.q}
          {e.m && <span style={{ color: d.accentText }}> → {e.m}</span>}
        </span>
      ))}
      <span className="text-[19px] text-zinc-500 font-['MiSans'] leading-snug mt-1">{d.exNote}</span>
    </div>
  );

  const Strip = ({ d, mode }) => (
    <div className="flex flex-wrap gap-2">
      {POOL.map((p) => (
        <Chip
          key={p.brand + p.model}
          label={`${p.brand} ${p.model}`}
          state={chipState(p, mode)}
          accent={d.accent}
          accentText={d.accentText}
          sm
        />
      ))}
    </div>
  );

  const Verdict = ({ d }) => (
    <div className="flex items-center gap-3">
      <span className="text-[28px] font-black leading-none" style={{ color: d.accentText }}>✓</span>
      <span className="text-[24px] text-zinc-100 font-['MiSans'] leading-snug">{d.rule}</span>
    </div>
  );

  const rows = [
    {
      label: '典型问法',
      broad: <Examples d={BROAD} />,
      exact: <Examples d={EXACT} />,
    },
    {
      label: 'AI 推荐结果\n（同一批）',
      broad: <Strip d={BROAD} mode="broad" />,
      exact: <Strip d={EXACT} mode="exact" />,
    },
    {
      label: '怎样才算命中',
      broad: <Verdict d={BROAD} />,
      exact: <Verdict d={EXACT} />,
    },
  ];

  return (
    <SlideLayout title="优化词分为大类词和产品专属词">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '18px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-6"
          style={{ fontSize: '38px', lineHeight: '1.2' }}
        >
          大类词看<strong className="text-white font-bold">某家电品牌有没有被推进来</strong>；专属词看<strong className="text-white font-bold">框定那款有没有被推准</strong>。
        </p>

        <div className="flex-1 min-h-0 rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 overflow-hidden grid grid-cols-[210px_1fr_1fr]">
          {/* 表头行 */}
          <div className="border-b border-zinc-800" />
          <div className="border-b border-l border-zinc-800"><Head d={BROAD} /></div>
          <div className="border-b border-l border-zinc-800"><Head d={EXACT} /></div>

          {/* 数据行 */}
          {rows.map((r, i) => (
            <React.Fragment key={r.label}>
              <div className={`flex items-center px-7 ${i < rows.length - 1 ? 'border-b border-zinc-800' : ''}`}>
                <span className="text-[22px] text-zinc-500 font-['MiSans'] font-bold leading-snug whitespace-pre-line">
                  {r.label}
                </span>
              </div>
              <div className={`flex items-center px-7 py-6 border-l border-zinc-800 ${i < rows.length - 1 ? 'border-b' : ''}`}>
                {r.broad}
              </div>
              <div className={`flex items-center px-7 py-6 border-l border-zinc-800 ${i < rows.length - 1 ? 'border-b' : ''}`}>
                {r.exact}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 聚光灯对比 · 例子当主角
 * 把两类词的「关键差别」浓缩成一行大字判定，例子放到最大，
 * 底部只留一条精简的命中示意 + 计数徽标。信息最少、最聚焦。
 * ============================================================ */
export function Page_SkyworthKeywordOptTwoTypes_C() {
  const Card = ({ d, mode }) => (
    <div className="h-full rounded-[30px] border border-zinc-800 bg-[#0D0D10]/60 overflow-hidden flex flex-col">
      {/* 顶：分类名 + 一句判定 */}
      <div className="shrink-0 px-10 pt-9 pb-6" style={{ borderTop: `6px solid ${d.accent}` }}>
        <div className="flex items-baseline justify-between">
          <span className="text-[46px] font-black text-white font-['MiSans'] leading-none">{d.name}</span>
          <span className="text-[23px] text-zinc-500 font-['MiSans']">{d.stage}</span>
        </div>
        <div className="mt-4 text-[30px] font-['MiSans'] text-zinc-300 leading-none">
          看某家电品牌<strong className="font-black" style={{ color: d.accentText }}>「{d.key}」</strong>
        </div>
      </div>

      {/* 例子当主角（顶部对齐，保证左右横平；上方多留空隙） */}
      <div className="flex-1 min-h-0 px-10 pt-14 pb-6 flex flex-col justify-start">
        <span className="text-[21px] text-zinc-500 font-['MiSans'] mb-4">用户会这么问</span>
        <div className="flex flex-col gap-3.5">
          {d.examples.map((e) => (
            <div key={e.q} className="text-[36px] text-white font-black font-['MiSans'] leading-tight">
              {e.q}
              {e.m && <span style={{ color: d.accentText }}> → {e.m}</span>}
            </div>
          ))}
        </div>
        <p className="text-[22px] text-zinc-400 font-['MiSans'] leading-snug mt-5">{d.exNote}</p>
      </div>

      {/* 底部：命中示意 + 计数（等高，保证左右横平） */}
      <div className="shrink-0 px-10 py-7 border-t border-zinc-800">
        <div className="flex items-center justify-between mb-3.5">
          <span className="text-[21px] text-zinc-500 font-['MiSans']">这批 AI 结果里，谁算命中</span>
          <span
            className="px-4 py-1.5 rounded-full text-[21px] font-bold font-['MiSans'] leading-none"
            style={{ background: `${d.accent}22`, color: d.accentText }}
          >
            {mode === 'broad' ? '命中任意 1 款 · 都计入' : d.hitBadge}
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {POOL.filter((p) => p.sw).map((p) => (
            <Chip
              key={p.brand + p.model}
              label={`某家电品牌 ${p.model}`}
              state={chipState(p, mode)}
              accent={d.accent}
              accentText={d.accentText}
              sm
            />
          ))}
        </div>
        {/* 始终占一行高度，让左右两栏底部模块等高对齐 */}
        <p className="text-[19px] text-zinc-600 font-['MiSans'] mt-3 min-h-[24px]">{d.note || '\u00A0'}</p>
      </div>
    </div>
  );

  return (
    <SlideLayout title="优化词分为大类词和产品专属词">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '18px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-6"
          style={{ fontSize: '38px', lineHeight: '1.2' }}
        >
          大类词看<strong className="text-white font-bold">某家电品牌有没有被推进来</strong>；专属词看<strong className="text-white font-bold">框定那款有没有被推准</strong>。
        </p>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
          <Card d={BROAD} mode="broad" />
          <Card d={EXACT} mode="exact" />
        </div>
      </div>
    </SlideLayout>
  );
}

/* 默认导出保留（指向版本 A），兼容旧的 component 引用 */
export default Page_SkyworthKeywordOptTwoTypes_A;

Page_SkyworthKeywordOptTwoTypes_A.hideHeader = true;
Page_SkyworthKeywordOptTwoTypes_B.hideHeader = true;
Page_SkyworthKeywordOptTwoTypes_C.hideHeader = true;
