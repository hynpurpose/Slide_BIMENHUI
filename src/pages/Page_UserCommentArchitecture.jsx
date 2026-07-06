import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 版本 A 复刻自 J:\GEO\Fake_App 的真实 UI 资源
 * （设计系统、导航图标、SVG 图表算法、评论卡片均取自项目源码）
 * 版本 B 使用项目真实界面截图。
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

// —— 真实侧边栏（复刻 Sidebar）——
function SidebarMock({ active = '数据总览' }) {
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

// —— 系统分析工作流（业务视角：评论 → 洞察）——
const WORKFLOW = [
  { t: '采集真实评论', d: '从淘宝 / 京东商品页抓取海量用户评论' },
  { t: 'AI 情感四分类', d: '逐条判定 好评 / 差评 / 疑似刷评 / 无效' },
  { t: '刷评识别与净化', d: '可疑评论标注判定依据，剔除水军与噪声' },
  { t: '多维口碑拆解', d: '按 功能 / 质量 / 颜值 / 服务 归类，聚合 VOC、词云、趋势' },
  { t: '输出决策洞察', d: '10 个视图呈现，可按商品筛选下钻', out: true },
];

/* ============================================================
 * 版本 A — 真实界面复刻 + 分析工作流
 * 左侧「搭」出真实应用窗口，右侧讲这个系统如何把评论变成洞察。
 * ============================================================ */
export function Page_UserCommentArchitecture_A() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        左为系统真实界面，右为它<span className="text-white font-bold">如何工作</span> —— 把海量电商评论，一步步变成可决策的口碑洞察。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] flex gap-6 font-['MiSans'] select-none">
        {/* 左：应用窗口复刻 */}
        <div className="flex-1 min-w-0 rounded-2xl overflow-hidden" style={{ background: C.bg, border: `1px solid ${C.lineStrong}`, boxShadow: '0 24px 60px rgba(0,0,0,0.8)' }}>
          <div className="flex items-center gap-3 px-5" style={{ height: 46, background: C.elevated, borderBottom: `1px solid ${C.line}` }}>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="mx-auto px-4 py-1 rounded-md text-[13px]" style={{ background: C.inset, color: C.tertiary, fontFamily: 'Montserrat' }}>localhost:5654</div>
          </div>

          <div className="flex gap-5 p-5" style={{ height: 'calc(100% - 46px)' }}>
            <SidebarMock active="数据总览" />

            <div className="flex-1 min-w-0 flex flex-col gap-4">
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

        {/* 右：系统如何工作（分析工作流） */}
        <div className="w-[600px] shrink-0 flex flex-col gap-3">
          <div className="text-[22px] font-bold text-white flex items-center gap-2.5 shrink-0">
            <span className="w-1.5 h-6 rounded-full" style={{ background: C.accent }} />
            这个系统怎么工作
          </div>
          {WORKFLOW.map((s, i) => (
            <React.Fragment key={s.t}>
              <div className="flex-1 rounded-2xl px-5 flex items-center gap-4" style={{ background: s.out ? C.accentSoft : C.elevated, border: `1px solid ${s.out ? C.accentLine : C.line}` }}>
                <span className="shrink-0 flex items-center justify-center rounded-full" style={{ width: 46, height: 46, background: s.out ? C.accent : C.inset, color: s.out ? '#fff' : C.accent, fontSize: 21, fontWeight: 800, fontFamily: 'Montserrat' }}>{i + 1}</span>
                <div className="min-w-0">
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{s.t}</div>
                  <div style={{ fontSize: 16, color: C.sub, marginTop: 3, lineHeight: 1.4 }}>{s.d}</div>
                </div>
              </div>
              {i < WORKFLOW.length - 1 && (
                <div className="flex justify-center shrink-0" style={{ margin: '-3px 0' }}>
                  <svg className="w-6 h-6" style={{ color: C.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 真实界面截图（少文字，说明系统由哪些模块构成）
 * 一个总览入口 + 多个深度分析模块，共享同一份评论数据。
 * ============================================================ */
const MODULES = [
  { src: '/user-comment/compare.png', label: '商品横向对比' },
  { src: '/user-comment/sentiment.png', label: '好评 / 差评分布' },
  { src: '/user-comment/voices.png', label: '用户之声 VOC' },
  { src: '/user-comment/dimensions.png', label: '卖点维度' },
  { src: '/user-comment/wordcloud.png', label: '关键词云' },
  { src: '/user-comment/fake.png', label: '刷评识别', hot: true },
];

export function Page_UserCommentArchitecture_B() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        同一份电商评论数据，拆解为 <span className="text-white font-bold">10 个分析视图</span> —— 一个总览入口，多个深度分析模块。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] flex gap-6 font-['MiSans'] select-none">
        {/* 左：总览主界面大图 */}
        <div className="w-[760px] shrink-0 flex flex-col">
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <span className="text-[15px] font-bold text-white bg-[#6366f1] px-3 py-1 rounded-md">入口</span>
            <span className="text-[22px] font-bold text-white">数据总览</span>
            <span className="text-[17px] text-zinc-500">全局 KPI · 可信度 · 商品对比</span>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
            <img src="/user-comment/overview.png" alt="数据总览" className="w-full h-full object-cover object-top" draggable={false} />
          </div>
        </div>

        {/* 右：深度分析模块网格 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <span className="w-1.5 h-6 rounded-full bg-[#6366f1]" />
            <span className="text-[22px] font-bold text-white">深度分析模块</span>
            <span className="text-[17px] text-zinc-500">同源下钻 · 从不同角度剖析口碑</span>
          </div>
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4 min-h-0">
            {MODULES.map((m) => (
              <div
                key={m.src}
                className="relative rounded-xl overflow-hidden border bg-black shadow-lg"
                style={{ borderColor: m.hot ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.12)' }}
              >
                <img src={m.src} alt={m.label} className="w-full h-full object-cover object-top" draggable={false} />
                <div className="absolute bottom-0 inset-x-0 flex items-center gap-2 bg-gradient-to-t from-black/90 to-transparent px-3 pt-5 pb-2">
                  {m.hot && <span className="w-2 h-2 rounded-full" style={{ background: SENT.fake.c }} />}
                  <span className="text-[15px] font-bold text-white/95">{m.label}</span>
                  {m.hot && <span className="text-[12px] font-bold text-[#f59e0b] bg-[#f59e0b]/15 px-2 py-0.5 rounded-full ml-auto">核心差异</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture_A.hideHeader = true;
Page_UserCommentArchitecture_B.hideHeader = true;
