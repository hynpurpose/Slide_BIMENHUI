import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ────────────────────────────────────────────────────────────
 * 词条分类逻辑 · 极简排印版
 * 叙事：左侧一团散乱无体系的词条（混沌词云）
 *      → 经过「创维词条」体系梳理，分流为优化词 / 监测词
 *      → 右侧词条示例干净整洁、层级分明
 * ──────────────────────────────────────────────────────────── */

/* 产品标签配色：每款产品一个固定色，全系列词用中性色 */
const PRODUCT_STYLE = {
  'A7H PRO': { color: '#60A5FA', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.35)' },
  'A8H': { color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.35)' },
  'A10H': { color: '#FBBF24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.35)' },
  'Q7H': { color: '#FB7185', bg: 'rgba(251,113,133,0.1)', border: 'rgba(251,113,133,0.35)' },
  'Q8H': { color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.35)' },
  '全系列': { color: '#A1A1AA', bg: 'rgba(161,161,170,0.1)', border: 'rgba(161,161,170,0.3)' },
};

/* 词条 → 产品集合，均来自 创维词条分类.xlsx（src/data/skyworthKeywords.json） */
const OPT_CATEGORY_WORDS = [
  { t: '壁纸电视品牌排行榜', p: '全系列' },
  { t: '电视排行榜前十名', p: '全系列' },
];

/* 按产品分组排序：A7H PRO → A8H → A10H → Q7H → Q8H */
const OPT_PRODUCT_WORDS = [
  { t: '销量最好的壁纸电视推荐', p: 'A7H PRO' },
  { t: '入门级高品质壁纸电视推荐', p: 'A7H PRO' },
  { t: '7000块钱左右的壁纸电视推荐', p: 'A7H PRO' },
  { t: '有没有适合线上直接买的高性价比壁纸电视？', p: 'A7H PRO' },
  { t: '音画升级款壁纸电视推荐', p: 'A8H' },
  { t: '一万块钱左右的壁纸电视推荐', p: 'A8H' },
  { t: '顶配旗舰款壁纸电视推荐', p: 'A10H' },
  { t: '1.5万块钱左右的壁纸电视推荐', p: 'A10H' },
  { t: '高端体验款壁纸电视推荐？', p: 'Q7H' },
  { t: '一万左右在线下能体验的壁纸电视推荐', p: 'Q7H' },
  { t: '有没有适合到店体验的高端壁纸电视？', p: 'Q7H' },
  { t: '分体影院壁纸电视推荐', p: 'Q8H' },
  { t: '2万左右在线下能体验的壁纸电视推荐', p: 'Q8H' },
];

const MON_CATEGORY_WORDS = [{ t: '创维电视算一线品牌吗', p: '全系列' }];
const MON_PRODUCT_WORDS = [{ t: '创维壁纸电视A7H Pro怎么样', p: 'A7H PRO' }];

const ACCENT = {
  blue: { core: '#60A5FA', soft: 'rgba(96,165,250,0.55)', chipBg: 'rgba(96,165,250,0.08)', chipBorder: 'rgba(96,165,250,0.35)' },
  teal: { core: '#2DD4BF', soft: 'rgba(45,212,191,0.55)', chipBg: 'rgba(45,212,191,0.08)', chipBorder: 'rgba(45,212,191,0.35)' },
  white: { core: 'rgba(255,255,255,0.85)', soft: 'rgba(255,255,255,0.4)', chipBg: 'rgba(255,255,255,0.06)', chipBorder: 'rgba(255,255,255,0.25)' },
};

/* 横向四列均匀分布：词云 5-375 / 创维词条 545-785 / 优化·监测 965-1145 / 词条列表 1300-1840 */
const HUB_X = 545;
const HUB_W = 240;
const NODE_X = 965;
const NODE_W = 180;
const PANEL_X = 1300;
const PANEL_W = 540;

/* 混沌词云：圆心与半径（相对 1840x795 内容区） */
const CLOUD_CX = 190;
const CLOUD_CY = 397;
const CLOUD_R = 185;

/* 散乱词条：位置为相对圆心的偏移，字号/旋转/透明度各不相同，刻意杂乱 */
const CHAOS_WORDS = [
  { t: '壁纸电视', dx: -62, dy: -128, size: 25, rot: -8, o: 0.72 },
  { t: '创维电视', dx: 48, dy: -86, size: 21, rot: 5, o: 0.6 },
  { t: '排行榜', dx: -118, dy: -68, size: 16, rot: 10, o: 0.42 },
  { t: 'A7H Pro', dx: 92, dy: -40, size: 15, rot: -12, o: 0.38 },
  { t: '品牌词', dx: -34, dy: -46, size: 23, rot: 3, o: 0.66 },
  { t: '哪个好', dx: 112, dy: 2, size: 14, rot: 8, o: 0.35 },
  { t: '原形词', dx: -108, dy: -4, size: 19, rot: -6, o: 0.55 },
  { t: '电视推荐', dx: 22, dy: 22, size: 18, rot: -3, o: 0.5 },
  { t: '产品词', dx: -52, dy: 58, size: 24, rot: 7, o: 0.68 },
  { t: '价格', dx: 96, dy: 52, size: 13, rot: 12, o: 0.32 },
  { t: '竞品词', dx: 38, dy: 92, size: 20, rot: -9, o: 0.58 },
  { t: '高端电视', dx: -116, dy: 92, size: 15, rot: 5, o: 0.4 },
  { t: '怎么样', dx: -20, dy: 128, size: 16, rot: -5, o: 0.44 },
  { t: '创维A5D', dx: 62, dy: 138, size: 13, rot: 9, o: 0.34 },
];

/* 细线连接：柔和光晕 + 核心贝塞尔曲线 + 两端圆点 */
function Connectors({ links }) {
  return (
    <svg
      className="absolute inset-0 z-0 pointer-events-none"
      width={1840}
      height={795}
      viewBox="0 0 1840 795"
      aria-hidden
    >
      {links.map(([x0, y0, x1, y1, tone], i) => {
        const a = ACCENT[tone];
        const bend = Math.min(60, (x1 - x0) * 0.6);
        const d = `M ${x0} ${y0} C ${x0 + bend} ${y0}, ${x1 - bend} ${y1}, ${x1} ${y1}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={a.soft} strokeWidth="14" opacity="0.2" />
            <path d={d} fill="none" stroke={a.core} strokeWidth="3.5" opacity="0.92" />
            <circle cx={x0} cy={y0} r="9" fill={a.core} opacity="0.2" />
            <circle cx={x0} cy={y0} r="4" fill={a.core} />
            <circle cx={x1} cy={y1} r="9" fill={a.core} opacity="0.2" />
            <circle cx={x1} cy={y1} r="4" fill={a.core} />
          </g>
        );
      })}
    </svg>
  );
}

/* 混沌词云：双层虚线圆 + 内部散乱词条，表达“处理前一团乱” */
function ChaosCloud() {
  return (
    <>
      <svg
        className="absolute inset-0 z-0 pointer-events-none"
        width={1840}
        height={795}
        viewBox="0 0 1840 795"
        aria-hidden
      >
        <defs>
          <radialGradient id="chaosGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="72%" stopColor="rgba(255,255,255,0.015)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <circle cx={CLOUD_CX} cy={CLOUD_CY} r={CLOUD_R} fill="url(#chaosGlow)" />
        <circle
          cx={CLOUD_CX}
          cy={CLOUD_CY}
          r={CLOUD_R}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
        />
        <circle
          cx={CLOUD_CX}
          cy={CLOUD_CY}
          r={CLOUD_R - 22}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
      </svg>

      {CHAOS_WORDS.map(({ t, dx, dy, size, rot, o }) => (
        <span
          key={t}
          className="absolute z-10 text-zinc-300 font-['MiSans'] font-bold whitespace-nowrap select-none"
          style={{
            left: `${CLOUD_CX + dx}px`,
            top: `${CLOUD_CY + dy}px`,
            fontSize: `${size}px`,
            lineHeight: 1,
            opacity: o,
            transform: `translate(-50%, -50%) rotate(${rot}deg)`,
          }}
        >
          {t}
        </span>
      ))}

      {/* 圆下方的小注脚，代替原来的面板大标题 */}
      <div
        className="absolute z-10 flex flex-col items-center gap-2"
        style={{ left: `${CLOUD_CX}px`, top: `${CLOUD_CY + CLOUD_R + 34}px`, transform: 'translateX(-50%)' }}
      >
        <span className="text-[17px] text-zinc-500 font-['MiSans'] leading-none whitespace-nowrap">
          散乱的无体系词条
        </span>
        <span className="text-[10px] tracking-[0.32em] text-zinc-700 font-['MiSans'] leading-none whitespace-nowrap">
          UNSTRUCTURED
        </span>
      </div>
    </>
  );
}

/* 流程节点：中文主标题 + 英文小字，垂直中心对齐到 cy */
function FlowNode({ x, cy, w, h, label, sub, tone = 'blue', big = false }) {
  const a = ACCENT[tone];
  return (
    <div
      className="absolute z-10 rounded-2xl flex flex-col items-center justify-center"
      style={{
        left: `${x}px`,
        top: `${cy - h / 2}px`,
        width: `${w}px`,
        height: `${h}px`,
        background: 'linear-gradient(180deg, #15151A 0%, #0B0B0E 100%)',
        border: `1px solid ${tone === 'white' ? 'rgba(255,255,255,0.14)' : a.chipBorder}`,
        boxShadow: `0 12px 40px rgba(0,0,0,0.6), 0 0 24px ${a.chipBg}`,
      }}
    >
      <span
        className={`${big ? 'text-[40px]' : 'text-[32px]'} font-black text-white font-['MiSans'] leading-none tracking-wide`}
      >
        {label}
      </span>
      {sub && (
        <span className="mt-2.5 text-[11px] tracking-[0.3em] text-zinc-500 font-['MiSans'] leading-none">
          {sub}
        </span>
      )}
    </div>
  );
}

/* 词条条目：小色点 + 文本 + 对应产品标签（数据来自创维词条分类表） */
function KeywordItems({ words, tone = 'blue', size = 19 }) {
  const a = ACCENT[tone];
  return (
    <ul className="list-none m-0 p-0 flex flex-col" style={{ rowGap: '8px' }}>
      {words.map(({ t, p }) => {
        const ps = PRODUCT_STYLE[p] || PRODUCT_STYLE['全系列'];
        return (
          <li
            key={t}
            className="flex items-center gap-2.5 text-zinc-300 font-['MiSans'] min-w-0"
            style={{ fontSize: `${size}px`, lineHeight: `${size + 7}px` }}
          >
            <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: a.core }} />
            <span className="truncate">{t}</span>
            <span
              className="shrink-0 font-semibold rounded-md px-1.5 py-[1px] leading-none"
              style={{
                fontSize: `${size - 5}px`,
                color: ps.color,
                background: ps.bg,
                border: `1px solid ${ps.border}`,
              }}
            >
              {p}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/* 排印分组：左侧细色条 + 标题行 + 词条列表，无边框 */
function TypoGroup({ top, height, title, count, tone = 'blue', children }) {
  const a = ACCENT[tone];
  return (
    <div
      className="absolute z-10 flex flex-col justify-center"
      style={{
        left: `${PANEL_X}px`,
        top: `${top}px`,
        width: `${PANEL_W}px`,
        height: `${height}px`,
        borderLeft: `2px solid ${a.soft}`,
        paddingLeft: '28px',
      }}
    >
      <div className="flex items-baseline gap-3 mb-2.5">
        <span className="text-[22px] font-bold text-white font-['MiSans'] leading-none">{title}</span>
        <span className="text-[13px] font-semibold font-['MiSans'] leading-none" style={{ color: a.core }}>
          {count} 条
        </span>
      </div>
      {children}
    </div>
  );
}

export default function Page_SkyworthKeywordLogic() {
  /* 组间距：品类词/产品专属词之间留 40px 空隙，优化↔监测两个分支之间 36px */
  const B1 = { top: 4, h: 92 };
  const B2 = { top: 136, h: 470 };
  const B3 = { top: 642, h: 60 };
  const B4 = { top: 731, h: 60 };
  const mid = (p) => p.top + p.h / 2;
  const optY = Math.round((mid(B1) + mid(B2)) / 2);
  const monY = Math.round((mid(B3) + mid(B4)) / 2);

  const links = [
    // 混沌词云右缘 → 创维词条
    [CLOUD_CX + CLOUD_R, CLOUD_CY, HUB_X, 397, 'white'],
    // 创维词条 → 优化词 / 监测词
    [HUB_X + HUB_W, 397, NODE_X, optY, 'blue'],
    [HUB_X + HUB_W, 397, NODE_X, monY, 'teal'],
    // 优化词 / 监测词 → 右侧分组
    [NODE_X + NODE_W, optY, PANEL_X, mid(B1), 'blue'],
    [NODE_X + NODE_W, optY, PANEL_X, mid(B2), 'blue'],
    [NODE_X + NODE_W, monY, PANEL_X, mid(B3), 'teal'],
    [NODE_X + NODE_W, monY, PANEL_X, mid(B4), 'teal'],
  ];

  return (
    <SlideLayout title="词条分类逻辑">
      <div className="absolute left-0 top-0 w-[1840px] select-none" style={{ height: '795px' }}>
        <Connectors links={links} />
        <ChaosCloud />

        <FlowNode x={HUB_X} cy={397} w={HUB_W} h={116} label="创维词条" sub="SKYWORTH KEYWORDS" tone="white" big />
        <FlowNode x={NODE_X} cy={optY} w={NODE_W} h={96} label="优化词" sub="OPTIMIZE" tone="blue" />
        <FlowNode x={NODE_X} cy={monY} w={NODE_W} h={96} label="监测词" sub="MONITOR" tone="teal" />

        <TypoGroup top={B1.top} height={B1.h} title="品类词" count={OPT_CATEGORY_WORDS.length} tone="blue">
          <KeywordItems words={OPT_CATEGORY_WORDS} tone="blue" />
        </TypoGroup>
        <TypoGroup top={B2.top} height={B2.h} title="产品专属词" count={OPT_PRODUCT_WORDS.length} tone="blue">
          <KeywordItems words={OPT_PRODUCT_WORDS} tone="blue" />
        </TypoGroup>
        <TypoGroup top={B3.top} height={B3.h} title="品类词" count={MON_CATEGORY_WORDS.length} tone="teal">
          <KeywordItems words={MON_CATEGORY_WORDS} tone="teal" />
        </TypoGroup>
        <TypoGroup top={B4.top} height={B4.h} title="产品专属词" count={MON_PRODUCT_WORDS.length} tone="teal">
          <KeywordItems words={MON_PRODUCT_WORDS} tone="teal" />
        </TypoGroup>
      </div>
    </SlideLayout>
  );
}
