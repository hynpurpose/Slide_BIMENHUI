import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 关键词分类 · 一句话总结
 * 把上一页的判断逻辑落到两个具体例子上：
 *   · “好看的电视推荐”   → 优化词（蓝）→ 看 提及率 / 出现位置
 *   · “创维跟海信比哪个好” → 监测词（琥珀）→ 看 信息是否准确 / 是否有负面
 * ============================================================ */

const ROWS = [
  {
    example: '“好看的电视推荐”',
    name: '优化词',
    focusLabel: '主要看',
    focus: ['提及率', '出现位置'],
    accent: '#5B8CFF',
    accentText: '#8CB0FF',
  },
  {
    example: '“创维跟海信比哪个好”',
    name: '监测词',
    focusLabel: '主要看',
    focus: ['产品信息是否准确', '是否有负面信息'],
    accent: '#F5A623',
    accentText: '#F5C574',
  },
];

export default function Page_SkyworthKeywordWhySplitSummary() {
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
        style={{ top: 0, height: '795px', paddingTop: '18px' }}
      >
        {/* 顶部大标题 */}
        <div className="shrink-0 flex flex-col items-center text-center mb-12">
          <span className="text-[23px] font-bold tracking-[0.35em] text-zinc-500 font-['MiSans'] mb-4">
            一句话总结
          </span>
          <p className="text-[58px] font-black text-white font-['MiSans'] leading-[1.1]">
            两个例子，两种<span style={{ color: '#5B8CFF' }}>归类</span>，看的是完全不同的
            <span style={{ color: '#F5A623' }}>指标</span>
          </p>
        </div>

        {/* 两条总结行 */}
        <div className="flex-1 min-h-0 flex flex-col gap-10">
          {ROWS.map((d) => (
            <Row key={d.name} d={d} />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordWhySplitSummary.hideHeader = true;
