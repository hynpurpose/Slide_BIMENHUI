import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 复刻自 J:\GEO\Fake_App 的真实 UI 资源
 * 设计系统、导航图标、SVG 图表算法、评论卡片均取自项目源码，
 * 用来在幻灯片里「搭」出真实产品界面与数据流，而非贴截图。
 * ============================================================ */

// —— 真实设计系统配色（src/index.css）——
const C = {
  bg: '#000000',
  elevated: '#09090b',
  inset: '#18181b',
  line: 'rgba(255,255,255,0.06)',
  lineStrong: 'rgba(255,255,255,0.1)',
  text: '#f8fafc',
  sub: '#a1a1aa',
  tertiary: '#71717a',
  faint: '#3f3f46',
  accent: '#6366f1',
  accentSoft: 'rgba(99,102,241,0.1)',
  accentLine: 'rgba(99,102,241,0.25)',
};

// —— 情感四分类调色板（src/lib/data.ts）——
const SENT = {
  positive: { c: '#10b981', soft: 'rgba(16,185,129,0.1)', label: '好评' },
  negative: { c: '#ef4444', soft: 'rgba(239,68,68,0.1)', label: '差评' },
  fake: { c: '#f59e0b', soft: 'rgba(245,158,11,0.12)', label: '疑似刷评' },
  invalid: { c: '#71717a', soft: 'rgba(113,113,122,0.1)', label: '无效' },
};
const SENT_ORDER = ['positive', 'negative', 'fake', 'invalid'];

// —— 真实导航图标（src/components/Icon.tsx）——
const ICON_PATHS = {
  grid: (<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>),
  compare: (<><path d="M12 3v18" /><rect x="4" y="7" width="4" height="10" rx="1" /><rect x="16" y="5" width="4" height="14" rx="1" /></>),
  split: (<><path d="M12 4v16" /><path d="M7 9l-2 3 2 3" /><path d="M17 9l2 3-2 3" /></>),
  quote: (<><path d="M7 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2V7zm0 0c0 4-1 5-3 6" /><path d="M17 7h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2V7zm0 0c0 4-1 5-3 6" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  cloud: (<path d="M7 18h9a4 4 0 0 0 .5-7.97A6 6 0 0 0 5 9a4 4 0 0 0 2 9z" />),
  trend: (<><path d="M3 17l5-6 4 3 5-8" /><path d="M17 6h4v4" /></>),
  shield: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>),
  wall: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 4v6M15 10v10" /></>),
  focus: (<><circle cx="12" cy="12" r="3.5" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></>),
  spark: (<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></>),
};

function NavIcon({ name, size = 20, color = 'currentColor', sw = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {ICON_PATHS[name] ?? ICON_PATHS.grid}
    </svg>
  );
}

// —— 真实导航结构（src/lib/nav.ts）——
const NAV = [
  { title: '宏观大盘', items: [{ label: '数据总览', icon: 'grid' }, { label: '商品横向对比', icon: 'compare' }] },
  { title: '深度口碑', items: [{ label: '好评 / 差评分布', icon: 'split' }, { label: '用户之声（VOC）', icon: 'quote' }, { label: '卖点维度', icon: 'layers' }, { label: '关键词云', icon: 'cloud' }, { label: '时间趋势', icon: 'trend' }] },
  { title: '真实性甄别', items: [{ label: '刷评识别', icon: 'shield' }, { label: '全量评论墙', icon: 'wall' }, { label: '单商品详情', icon: 'focus' }] },
];

// —— 真实 SVG 图表算法（src/components/charts/svgUtils.ts）——
function polar(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function arcPath(cx, cy, r, startAngle, endAngle) {
  const start = polar(cx, cy, r, endAngle);
  const end = polar(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

// —— 情感四分类环（复刻 SentimentRing）——
function SentimentRing({ size = 200, thickness = 18, fractions, centerTop, centerBottom }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - thickness / 2 - 4;
  const gap = 2.2;
  let cursor = -90;
  const segs = SENT_ORDER.map((k) => {
    const frac = fractions[k];
    const span = frac * (360 - gap * SENT_ORDER.length);
    const start = cursor;
    const end = cursor + span;
    cursor = end + gap;
    return { k, start, end };
  });
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ display: 'block' }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.inset} strokeWidth={thickness} />
        {segs.map((s) => (
          <path key={s.k} d={arcPath(cx, cy, r, s.start + 90, s.end + 90)} fill="none" stroke={SENT[s.k].c} strokeWidth={thickness} strokeLinecap="round" />
        ))}
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {centerTop && <div style={{ fontSize: size * 0.15, fontWeight: 700, color: C.text, letterSpacing: '-0.02em' }}>{centerTop}</div>}
        {centerBottom && <div style={{ fontSize: 13, color: C.tertiary, marginTop: 2 }}>{centerBottom}</div>}
      </div>
    </div>
  );
}

// —— 卖点四维雷达（复刻 Radar）——
function Radar({ size = 200, axes, values, color = C.accent, levels = 4 }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 30;
  const n = axes.length;
  const pt = (i, frac) => polar(cx, cy, r * frac, (360 / n) * i);
  const toPath = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  const dataPts = values.map((v, i) => pt(i, v));
  return (
    <svg width={size} height={size} style={{ display: 'block', overflow: 'visible' }}>
      {Array.from({ length: levels }).map((_, l) => (
        <polygon key={l} points={axes.map((_, i) => { const p = pt(i, (l + 1) / levels); return `${p.x},${p.y}`; }).join(' ')} fill="none" stroke={C.line} strokeWidth={1} />
      ))}
      {axes.map((_, i) => { const p = pt(i, 1); return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={C.line} strokeWidth={1} />; })}
      <path d={toPath(dataPts)} fill={color} fillOpacity={0.12} stroke={color} strokeWidth={2} strokeLinejoin="round" />
      {dataPts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={3} fill={color} />)}
      {axes.map((label, i) => { const p = pt(i, 1.22); return <text key={label} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={13} fontWeight={500} fill={C.sub}>{label}</text>; })}
    </svg>
  );
}

// —— 真实侧边栏（复刻 Sidebar）——
function SidebarMock({ active = '刷评识别' }) {
  return (
    <div style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column', background: C.elevated, borderRadius: 20, border: `1px solid ${C.line}`, overflow: 'hidden' }}>
      <div style={{ padding: '22px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/user-comment/logo-analyse.svg" alt="" width={30} height={30} style={{ flexShrink: 0 }} />
        <div style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: '-0.02em', lineHeight: 1.25 }}>用户评论分析系统2.0</div>
      </div>
      <div style={{ flex: 1, padding: '4px 12px', overflow: 'hidden' }}>
        {NAV.map((g) => (
          <div key={g.title} style={{ marginBottom: 14 }}>
            <div style={{ padding: '0 10px 6px', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.tertiary }}>{g.title}</div>
            {g.items.map((it) => {
              const on = it.label === active;
              return (
                <div key={it.label} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 14px', borderRadius: 999, marginBottom: 2, background: on ? 'rgba(255,255,255,0.08)' : 'transparent', color: on ? '#fff' : C.sub }}>
                  <NavIcon name={it.icon} size={20} color={on ? '#fff' : C.tertiary} />
                  <span style={{ fontSize: 16, fontWeight: on ? 600 : 500 }}>{it.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ padding: '14px 20px 18px', borderTop: `1px solid ${C.line}`, fontSize: 14, color: C.tertiary, lineHeight: 1.6 }}>
        <div style={{ fontWeight: 600, color: C.sub, fontFamily: 'Montserrat' }}>10 个分析视图</div>
        <div>共享同一数据与筛选范围</div>
      </div>
    </div>
  );
}

// —— 真实评论卡（复刻 CommentCard，展示刷评识别能力）——
function CommentCardMock() {
  return (
    <div style={{ background: C.elevated, border: `1px solid rgba(245,158,11,0.28)`, borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 999, display: 'grid', placeItems: 'center', background: C.inset, color: C.tertiary, fontSize: 15, fontWeight: 600 }}>t</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>t***8</div>
          <div style={{ fontSize: 12.5, color: C.tertiary, display: 'flex', gap: 6, alignItems: 'center' }}>
            <span>淘宝</span><span>·</span><span style={{ fontFamily: 'Montserrat' }}>2025-03-12</span>
          </div>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 11px', borderRadius: 999, fontSize: 13, fontWeight: 600, color: SENT.fake.c, background: SENT.fake.soft }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: SENT.fake.c }} />{SENT.fake.label}
        </span>
      </div>
      <div style={{ padding: '11px 13px', borderRadius: 10, background: SENT.fake.soft, border: '1px solid rgba(245,158,11,0.22)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: '0.03em', color: SENT.fake.c, marginBottom: 5 }}>
          <NavIcon name="spark" size={14} color={SENT.fake.c} />AI 判定依据
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: C.sub }}>多个账号在相近时段发布高度雷同的好评措辞，用词模板化，判定为疑似刷评。</div>
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.65, color: C.text }}>屏幕效果很好，客服态度也不错，安装师傅很专业，值得推荐给大家购买使用。</div>
      <div style={{ display: 'flex', gap: 6 }}>
        {['画质', '服务'].map((t) => (
          <span key={t} style={{ padding: '2px 9px', borderRadius: 6, fontSize: 12.5, fontWeight: 500, color: C.sub, background: C.inset }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

const FRACTIONS = { positive: 0.49, negative: 0.04, fake: 0.21, invalid: 0.26 };

const RightArrow = ({ small }) => (
  <div className="flex items-center shrink-0">
    <svg className={small ? 'w-6 h-6' : 'w-8 h-8'} style={{ color: C.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

/* ============================================================
 * 版本 A — 真实界面复刻 + 架构解说
 * 左侧「搭」出真实应用窗口（侧边栏 + 数据总览主区），右侧讲三层运行逻辑。
 * ============================================================ */
export function Page_UserCommentArchitecture_A() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        一套<span className="text-white font-bold">纯前端、零后端</span>的评论分析系统 —— 左为真实产品界面，右为它<span className="text-white font-bold">如何运行</span>。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] flex gap-6 font-['MiSans'] select-none">
        {/* 左：应用窗口复刻 */}
        <div className="flex-1 min-w-0 rounded-2xl overflow-hidden" style={{ background: C.bg, border: `1px solid ${C.lineStrong}`, boxShadow: '0 24px 60px rgba(0,0,0,0.8)' }}>
          {/* 窗口标题栏 */}
          <div className="flex items-center gap-3 px-5" style={{ height: 46, background: C.elevated, borderBottom: `1px solid ${C.line}` }}>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="mx-auto px-4 py-1 rounded-md text-[13px]" style={{ background: C.inset, color: C.tertiary, fontFamily: 'Montserrat' }}>localhost:5654</div>
          </div>

          {/* 窗口主体：侧边栏 + 主区 */}
          <div className="flex gap-5 p-5" style={{ height: 'calc(100% - 46px)' }}>
            <SidebarMock active="数据总览" />

            <div className="flex-1 min-w-0 flex flex-col gap-4">
              {/* PageHeader */}
              <div className="flex items-end justify-between pb-3.5" style={{ borderBottom: `1px solid ${C.line}` }}>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', color: C.tertiary }}>OVERVIEW</div>
                  <div style={{ fontSize: 27, fontWeight: 700, color: C.text, letterSpacing: '-0.02em', marginTop: 4 }}>数据总览</div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: C.inset, border: `1px solid ${C.line}`, color: C.sub, fontSize: 14, fontWeight: 500 }}>
                  全部商品
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M8 10l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>

              {/* 情感四分类 KPI */}
              <div className="grid grid-cols-4 gap-3 shrink-0">
                {SENT_ORDER.map((k) => (
                  <div key={k} className="rounded-2xl px-4 py-4" style={{ background: C.elevated, border: `1px solid ${C.line}` }}>
                    <div style={{ fontSize: 15, fontWeight: 550, color: SENT[k].c }}>{SENT[k].label}</div>
                    <div style={{ fontSize: 34, fontWeight: 700, color: '#fff', letterSpacing: '-0.04em', fontFamily: 'Montserrat', marginTop: 4 }}>
                      {Math.round(FRACTIONS[k] * 100)}<span style={{ fontSize: 18, color: C.sub, marginLeft: 1 }}>%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 情感环 + 刷评卡 */}
              <div className="flex-1 flex gap-4 min-h-0">
                <div className="rounded-2xl p-5 flex flex-col" style={{ background: C.elevated, border: `1px solid ${C.line}`, width: 320 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>情感四分类分布</div>
                  <div className="flex-1 flex items-center justify-center">
                    <SentimentRing size={188} fractions={FRACTIONS} centerTop="四分类" centerBottom="强制切割" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {SENT_ORDER.map((k) => (
                      <div key={k} className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ background: SENT[k].c }} />
                        <span style={{ fontSize: 13.5, color: C.sub }}>{SENT[k].label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 min-w-0 flex flex-col">
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 10 }}>刷评识别 · 判定依据与原文同框</div>
                  <CommentCardMock />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右：三层运行逻辑 */}
        <div className="w-[600px] shrink-0 flex flex-col gap-4">
          <div className="text-[22px] font-bold text-white flex items-center gap-2.5 shrink-0">
            <span className="w-1.5 h-6 rounded-full" style={{ background: C.accent }} />
            系统怎么运行
          </div>

          {[
            { n: '①', t: '数据层', en: 'DATA', items: ['extract-data.mjs 离线管线', 'Excel 解析 · 清洗去伪 · 情感映射 · 聚合', '产出 dataset.json 静态数据集，随构建打包'] },
            { n: '②', t: '逻辑层', en: 'LOGIC', core: true, items: ['StoreProvider 全局商品筛选范围', 'useScoped() 按范围实时派生数据', 'data.ts 统计 · lexicon.ts 词典匹配'] },
            { n: '③', t: '视图层', en: 'VIEW', items: ['React Router · 10 个分析路由', '手写 SVG 图表：情感环 / 雷达 / 面积图', 'ModalProvider 弹窗 · Framer Motion 动画'] },
          ].map((s) => (
            <div key={s.t} className="flex-1 rounded-2xl p-5 flex flex-col justify-center" style={{ background: s.core ? C.accentSoft : C.elevated, border: `1px solid ${s.core ? C.accentLine : C.line}` }}>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ fontSize: 26, fontWeight: 800, color: C.accent, fontFamily: 'Montserrat' }}>{s.n}</span>
                <span style={{ fontSize: 23, fontWeight: 700, color: '#fff' }}>{s.t}</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.18)', fontFamily: 'Montserrat', letterSpacing: '0.2em', marginLeft: 'auto' }}>{s.en}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {s.items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2.5" style={{ fontSize: 16, color: C.sub, lineHeight: 1.45 }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: C.accent }} />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="shrink-0 flex flex-wrap gap-2">
            {['React 18', 'TypeScript', 'Vite', 'React Router', 'Framer Motion', '纯手写 SVG', '零后端 · 可离线'].map((t) => (
              <span key={t} style={{ fontSize: 14, fontWeight: 600, color: C.sub, background: C.inset, border: `1px solid ${C.line}`, padding: '5px 12px', borderRadius: 999 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 数据流逻辑图（真实图表作为输出节点）
 * 上：构建时 → 运行时 数据流水线；下：视图层用真实 SVG 组件呈现。
 * ============================================================ */
export function Page_UserCommentArchitecture_B() {
  const buildFlow = [
    { t: '电商评论源', d: 'Excel · 汇总表 + 明细', mono: false },
    { t: 'extract-data.mjs', d: '清洗 · 情感映射 · 聚合', mono: true },
    { t: 'dataset.json', d: '静态数据集，打包进前端', mono: true },
    { t: 'StoreProvider + useScoped', d: '全局筛选 · 按范围派生数据', mono: true },
  ];
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        原始评论经<span className="text-white font-bold">离线管线</span>加工为静态数据集，浏览器内的 React 状态层按需派生，最终由<span className="text-white font-bold">手写 SVG 组件</span>呈现。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] rounded-3xl p-8 font-['MiSans'] select-none flex flex-col gap-6" style={{ background: C.elevated, border: `1px solid ${C.lineStrong}` }}>
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full" style={{ background: C.accent, boxShadow: `0 0 10px ${C.accent}` }} />
          <span className="text-[24px] font-bold text-white tracking-wider">数据流</span>
        </div>

        {/* 上：数据流水线 */}
        <div className="shrink-0">
          <div style={{ fontSize: 18, fontWeight: 700, color: C.sub, marginBottom: 14 }} className="flex items-center gap-2.5">
            <span className="w-1.5 h-5 rounded-full" style={{ background: C.tertiary }} />
            数据流水线 · 构建时（离线）→ 运行时（浏览器内）
          </div>
          <div className="flex items-stretch gap-3">
            {buildFlow.map((s, i) => (
              <React.Fragment key={s.t}>
                <div className="flex-1 rounded-2xl px-5 py-4 flex flex-col justify-center" style={{ background: i === buildFlow.length - 1 ? C.accentSoft : C.bg, border: `1px solid ${i === buildFlow.length - 1 ? C.accentLine : C.line}` }}>
                  <div style={{ fontSize: 19, fontWeight: 700, color: '#fff', fontFamily: s.mono ? 'Montserrat' : undefined, letterSpacing: s.mono ? '-0.01em' : undefined }}>{s.t}</div>
                  <div style={{ fontSize: 14.5, color: C.tertiary, marginTop: 4 }}>{s.d}</div>
                </div>
                {i < buildFlow.length - 1 && <RightArrow small />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="flex-1 h-px" style={{ background: C.line }} />
          <span style={{ fontSize: 15, color: C.tertiary }}>渲染到视图层 · 10 路由共享同一份派生数据</span>
          <div className="flex-1 h-px" style={{ background: C.line }} />
        </div>

        {/* 下：视图层真实组件 */}
        <div className="flex-1 min-h-0 flex flex-col">
          <div style={{ fontSize: 18, fontWeight: 700, color: C.sub, marginBottom: 14 }} className="flex items-center gap-2.5">
            <span className="w-1.5 h-5 rounded-full" style={{ background: C.accent }} />
            视图层 · 手写 SVG 可视化 + 评论卡片（真实组件）
          </div>
          <div className="flex-1 grid grid-cols-3 gap-5 min-h-0">
            {/* 情感环 */}
            <div className="rounded-2xl p-5 flex flex-col" style={{ background: C.bg, border: `1px solid ${C.line}` }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.text }}>情感四分类环</div>
              <div style={{ fontSize: 13.5, color: C.tertiary, marginTop: 2 }}>好评 / 差评 / 疑似刷评 / 无效</div>
              <div className="flex-1 flex items-center justify-center">
                <SentimentRing size={196} fractions={FRACTIONS} centerTop="四分类" />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {SENT_ORDER.map((k) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ background: SENT[k].c }} />
                    <span style={{ fontSize: 13, color: C.sub }}>{SENT[k].label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 雷达 */}
            <div className="rounded-2xl p-5 flex flex-col" style={{ background: C.bg, border: `1px solid ${C.line}` }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.text }}>卖点四维雷达</div>
              <div style={{ fontSize: 13.5, color: C.tertiary, marginTop: 2 }}>长评归类拆解</div>
              <div className="flex-1 flex items-center justify-center">
                <Radar size={224} axes={['功能', '质量', '颜值', '服务']} values={[0.86, 0.72, 0.92, 0.6]} />
              </div>
            </div>

            {/* 评论卡 */}
            <div className="rounded-2xl p-5 flex flex-col" style={{ background: C.bg, border: `1px solid ${C.line}` }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.text }}>刷评识别评论卡</div>
              <div style={{ fontSize: 13.5, color: C.tertiary, marginTop: 2, marginBottom: 12 }}>判定依据与原文同框</div>
              <CommentCardMock />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture_A.hideHeader = true;
Page_UserCommentArchitecture_B.hideHeader = true;
