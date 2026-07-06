import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ────────────────────────────────────────────────────────────
 * 词条分类逻辑 · 精致版
 * 三个版本共用同一套视觉语言：
 *  - 细线 SVG 连接线（1.5px 核心线 + 微光晕 + 端点圆点）
 *  - 节点卡片带英文小字标签与色彩点缀
 *  - 右侧词条示例按分组承载，不与任何区块重叠
 * ──────────────────────────────────────────────────────────── */

const OPT_CATEGORY_WORDS = ['壁纸电视品牌排行榜', '电视排行榜前十名'];

const OPT_PRODUCT_WORDS = [
  '销量最好的壁纸电视推荐',
  '入门级高品质壁纸电视推荐',
  '7000块钱左右的壁纸电视推荐',
  '音画升级款壁纸电视推荐',
  '一万块钱左右的壁纸电视推荐',
  '有没有适合线上直接买的高性价比壁纸电视？',
  '顶配旗舰款壁纸电视推荐',
  '1.5万块钱左右的壁纸电视推荐',
  '高端体验款壁纸电视推荐？',
  '一万左右在线下能体验的壁纸电视推荐',
  '实用店体验的高端壁纸电视推荐？',
  '分体影院壁纸电视推荐',
  '2万左右在线下能体验的壁纸电视推荐',
];

const MON_CATEGORY_WORDS = ['创维电视算一线品牌吗'];
const MON_PRODUCT_WORDS = ['创维壁纸电视A7H Pro怎么样'];

const ACCENT = {
  blue: { core: '#60A5FA', soft: 'rgba(96,165,250,0.55)', chipBg: 'rgba(96,165,250,0.08)', chipBorder: 'rgba(96,165,250,0.35)' },
  teal: { core: '#2DD4BF', soft: 'rgba(45,212,191,0.55)', chipBg: 'rgba(45,212,191,0.08)', chipBorder: 'rgba(45,212,191,0.35)' },
  white: { core: 'rgba(255,255,255,0.85)', soft: 'rgba(255,255,255,0.4)', chipBg: 'rgba(255,255,255,0.06)', chipBorder: 'rgba(255,255,255,0.25)' },
};

const PANEL_X = 1040;
const PANEL_W = 800;

/* 细线连接：柔和光晕 + 1.5px 核心贝塞尔曲线 + 两端圆点 */
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

/* 词条条目：小色点 + 文本，可单列或双列 */
function KeywordItems({ words, tone = 'blue', cols = 1, size = 17, lh = 28 }) {
  const a = ACCENT[tone];
  return (
    <ul
      className="list-none m-0 p-0 grid gap-x-10"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, rowGap: `${lh - size - 5}px` }}
    >
      {words.map((word) => (
        <li
          key={word}
          className="flex items-center gap-2.5 text-zinc-300 font-['MiSans'] min-w-0"
          style={{ fontSize: `${size}px`, lineHeight: `${size + 5}px` }}
        >
          <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: a.core }} />
          <span className="truncate">{word}</span>
        </li>
      ))}
    </ul>
  );
}

/* 分组面板：色条 + 标题 + 数量胶囊的头部，下方为词条列表 */
function GroupPanel({ top, height, title, count, tone = 'blue', children }) {
  const a = ACCENT[tone];
  return (
    <div
      className="absolute z-10 rounded-2xl overflow-hidden"
      style={{
        left: `${PANEL_X}px`,
        top: `${top}px`,
        width: `${PANEL_W}px`,
        height: `${height}px`,
        background: 'rgba(13,13,16,0.72)',
        border: '1px solid rgba(63,63,70,0.55)',
      }}
    >
      <div
        className="flex items-center gap-3 px-6 h-[44px] border-b"
        style={{ borderColor: 'rgba(63,63,70,0.45)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span className="w-[3px] h-[18px] rounded-full" style={{ background: a.core }} />
        <span className="text-[20px] font-bold text-white font-['MiSans'] leading-none">{title}</span>
        <span
          className="text-[12px] font-semibold px-2 py-[2px] rounded-full border font-['MiSans'] leading-none"
          style={{ color: a.core, borderColor: a.chipBorder, background: a.chipBg }}
        >
          {count} 条
        </span>
      </div>
      <div className="px-6 flex items-center" style={{ height: `${height - 44}px` }}>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}

/* 版本 C 专用：无边框排印分组，仅左侧细色条 + 标题行 */
function TypoGroup({ top, height, title, count, tone = 'blue', children }) {
  const a = ACCENT[tone];
  return (
    <div
      className="absolute z-10 flex flex-col justify-center"
      style={{
        left: `${PANEL_X + 20}px`,
        top: `${top}px`,
        width: `${PANEL_W - 20}px`,
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

/* 共用骨架：左侧无体系词条面板 + 创维词条 + 优化词/监测词节点 + 连接线 */
function KeywordLogicBase({ optY, monY, branches, panelX = PANEL_X, children }) {
  const links = [
    [320, 397, 450, 397, 'white'],
    [690, 397, 790, optY, 'blue'],
    [690, 397, 790, monY, 'teal'],
    ...branches.opt.map((y) => [970, optY, panelX, y, 'blue']),
    ...branches.mon.map((y) => [970, monY, panelX, y, 'teal']),
  ];
  return (
    <SlideLayout title="词条分类逻辑">
      <div className="absolute left-0 top-0 w-[1840px] select-none" style={{ height: '795px' }}>
        <Connectors links={links} />
        {children}

        {/* 左侧“无体系词条”面板 */}
        <div
          className="absolute z-10 rounded-2xl overflow-hidden"
          style={{
            left: '0px',
            top: '0px',
            width: '320px',
            height: '795px',
            background: 'rgba(13,13,16,0.72)',
            border: '1px solid rgba(63,63,70,0.55)',
          }}
        >
          <div
            className="px-7 pt-6 pb-5 border-b"
            style={{ borderColor: 'rgba(63,63,70,0.45)' }}
          >
            <div className="text-[26px] font-bold text-zinc-300 font-['MiSans'] leading-none">无体系词条</div>
            <div className="mt-2.5 text-[11px] tracking-[0.28em] text-zinc-600 font-['MiSans'] leading-none">
              UNSTRUCTURED WORDS
            </div>
          </div>
          <div className="flex flex-col gap-6 px-7 justify-center" style={{ height: 'calc(100% - 108px)' }}>
            {['品牌词', '原形词', '产品词', '竞品词'].map((word, i) => (
              <div
                key={word}
                className="rounded-xl py-6 px-6 flex items-center justify-between"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(63,63,70,0.5)' }}
              >
                <span className="text-[30px] font-bold text-zinc-300 font-['MiSans'] leading-none">{word}</span>
                <span className="text-[13px] font-mono text-zinc-600 leading-none">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 主干节点 */}
        <FlowNode x={450} cy={397} w={240} h={116} label="创维词条" sub="SKYWORTH KEYWORDS" tone="white" big />
        <FlowNode x={790} cy={optY} w={180} h={96} label="优化词" sub="OPTIMIZE" tone="blue" />
        <FlowNode x={790} cy={monY} w={180} h={96} label="监测词" sub="MONITOR" tone="teal" />
      </div>
    </SlideLayout>
  );
}

/* ────────────────────────────────────────────────────────────
 * 版本 A · 面板分组：四个分组面板，全部 17 条词条完整展示
 * ──────────────────────────────────────────────────────────── */
export function Page_SkyworthKeywordLogic_A() {
  const P1 = { top: 8, h: 124 };
  const P2 = { top: 156, h: 424 };
  const P3 = { top: 608, h: 92 };
  const P4 = { top: 700, h: 92 };
  const mid = (p) => p.top + p.h / 2;
  const optY = Math.round((mid(P1) + mid(P2)) / 2);
  const monY = Math.round((mid(P3) + mid(P4)) / 2);
  const branches = { opt: [mid(P1), mid(P2)], mon: [mid(P3), mid(P4)] };

  return (
    <KeywordLogicBase optY={optY} monY={monY} branches={branches}>
      <GroupPanel top={P1.top} height={P1.h} title="品类词" count={OPT_CATEGORY_WORDS.length} tone="blue">
        <KeywordItems words={OPT_CATEGORY_WORDS} tone="blue" />
      </GroupPanel>
      <GroupPanel top={P2.top} height={P2.h} title="产品专属词" count={OPT_PRODUCT_WORDS.length} tone="blue">
        <KeywordItems words={OPT_PRODUCT_WORDS} tone="blue" />
      </GroupPanel>
      <GroupPanel top={P3.top} height={P3.h} title="品类词" count={MON_CATEGORY_WORDS.length} tone="teal">
        <KeywordItems words={MON_CATEGORY_WORDS} tone="teal" />
      </GroupPanel>
      <GroupPanel top={P4.top} height={P4.h} title="产品专属词" count={MON_PRODUCT_WORDS.length} tone="teal">
        <KeywordItems words={MON_PRODUCT_WORDS} tone="teal" />
      </GroupPanel>
    </KeywordLogicBase>
  );
}

/* ────────────────────────────────────────────────────────────
 * 版本 B · 双栏紧凑：产品专属词双栏排布，版面更疏朗居中
 * ──────────────────────────────────────────────────────────── */
export function Page_SkyworthKeywordLogic_B() {
  const P1 = { top: 46, h: 124 };
  const P2 = { top: 194, h: 264 };
  const P3 = { top: 528, h: 92 };
  const P4 = { top: 652, h: 92 };
  const mid = (p) => p.top + p.h / 2;
  const optY = Math.round((mid(P1) + mid(P2)) / 2);
  const monY = Math.round((mid(P3) + mid(P4)) / 2);
  const branches = { opt: [mid(P1), mid(P2)], mon: [mid(P3), mid(P4)] };

  return (
    <KeywordLogicBase optY={optY} monY={monY} branches={branches}>
      <GroupPanel top={P1.top} height={P1.h} title="品类词" count={OPT_CATEGORY_WORDS.length} tone="blue">
        <KeywordItems words={OPT_CATEGORY_WORDS} tone="blue" />
      </GroupPanel>
      <GroupPanel top={P2.top} height={P2.h} title="产品专属词" count={OPT_PRODUCT_WORDS.length} tone="blue">
        <KeywordItems words={OPT_PRODUCT_WORDS} tone="blue" cols={2} size={16} lh={30} />
      </GroupPanel>
      <GroupPanel top={P3.top} height={P3.h} title="品类词" count={MON_CATEGORY_WORDS.length} tone="teal">
        <KeywordItems words={MON_CATEGORY_WORDS} tone="teal" />
      </GroupPanel>
      <GroupPanel top={P4.top} height={P4.h} title="产品专属词" count={MON_PRODUCT_WORDS.length} tone="teal">
        <KeywordItems words={MON_PRODUCT_WORDS} tone="teal" />
      </GroupPanel>
    </KeywordLogicBase>
  );
}

/* ────────────────────────────────────────────────────────────
 * 版本 C · 极简排印：右侧去掉卡片框，只留细色条 + 排印层级
 * ──────────────────────────────────────────────────────────── */
export function Page_SkyworthKeywordLogic_C() {
  const B1 = { top: 16, h: 104 };
  const B2 = { top: 160, h: 420 };
  const B3 = { top: 620, h: 74 };
  const B4 = { top: 714, h: 74 };
  const mid = (p) => p.top + p.h / 2;
  const optY = Math.round((mid(B1) + mid(B2)) / 2);
  const monY = Math.round((mid(B3) + mid(B4)) / 2);
  const branches = { opt: [mid(B1), mid(B2)], mon: [mid(B3), mid(B4)] };

  return (
    <KeywordLogicBase optY={optY} monY={monY} branches={branches} panelX={PANEL_X + 20}>
      <TypoGroup top={B1.top} height={B1.h} title="品类词" count={OPT_CATEGORY_WORDS.length} tone="blue">
        <KeywordItems words={OPT_CATEGORY_WORDS} tone="blue" size={17} lh={29} />
      </TypoGroup>
      <TypoGroup top={B2.top} height={B2.h} title="产品专属词" count={OPT_PRODUCT_WORDS.length} tone="blue">
        <KeywordItems words={OPT_PRODUCT_WORDS} tone="blue" size={17} lh={29} />
      </TypoGroup>
      <TypoGroup top={B3.top} height={B3.h} title="品类词" count={MON_CATEGORY_WORDS.length} tone="teal">
        <KeywordItems words={MON_CATEGORY_WORDS} tone="teal" size={17} lh={29} />
      </TypoGroup>
      <TypoGroup top={B4.top} height={B4.h} title="产品专属词" count={MON_PRODUCT_WORDS.length} tone="teal">
        <KeywordItems words={MON_PRODUCT_WORDS} tone="teal" size={17} lh={29} />
      </TypoGroup>
    </KeywordLogicBase>
  );
}

export default Page_SkyworthKeywordLogic_A;
