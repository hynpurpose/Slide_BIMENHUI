import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* 版本 A：架构图 + Fake_App UI 风格点缀（非整屏照搬）
 * 版本 B：截图方案（不改动） */

const C = {
  elevated: '#09090b',
  inset: '#18181b',
  line: 'rgba(255,255,255,0.06)',
  lineStrong: 'rgba(255,255,255,0.1)',
  text: '#f8fafc',
  sub: '#a1a1aa',
  tertiary: '#71717a',
  accent: '#6366f1',
  accentSoft: 'rgba(99,102,241,0.1)',
  accentLine: 'rgba(99,102,241,0.28)',
};

const SENT = {
  positive: { c: '#10b981', soft: 'rgba(16,185,129,0.1)', label: '好评' },
  negative: { c: '#ef4444', soft: 'rgba(239,68,68,0.1)', label: '差评' },
  fake: { c: '#f59e0b', soft: 'rgba(245,158,11,0.12)', label: '疑似刷评' },
  invalid: { c: '#71717a', soft: 'rgba(113,113,122,0.1)', label: '无效' },
};

const ICONS = {
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

function Icon({ name, size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

function SentBadge({ label, color, soft }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 999, fontSize: 16, fontWeight: 600, color, background: soft }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: color }} />
      {label}
    </span>
  );
}

const COMMENT_CARDS = [
  { lines: 4, w2: 100, w3: 82, w4: 65, offset: 0, shift: 0 },
  { lines: 3, w2: 88, w3: 70, offset: 20, shift: 6 },
  { lines: 4, w2: 95, w3: 78, w4: 55, offset: 4, shift: -4 },
  { lines: 3, w2: 92, w3: 60, offset: 26, shift: 10 },
  { lines: 4, w2: 100, w3: 85, w4: 72, offset: 8, shift: 2 },
  { lines: 3, w2: 78, w3: 68, offset: 16, shift: -6 },
];

function CommentMiniCard({ lines = 3, w2 = 92, w3 = 70, w4 = 60, offset = 0, shift = 0, opacity = 1 }) {
  const skel = 'rgba(255,255,255,0.38)';
  const skelSoft = 'rgba(255,255,255,0.26)';
  return (
    <div
      className="rounded-2xl px-4 py-4"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: `1px solid rgba(255,255,255,0.22)`,
        marginTop: offset,
        marginLeft: shift,
        opacity,
        minHeight: lines === 4 ? 118 : 96,
      }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full shrink-0" style={{ background: skel }} />
        <div className="flex-1 min-w-0">
          <div className="h-2.5 rounded-full mb-1.5" style={{ background: skel, width: '55%' }} />
          <div className="h-2 rounded-full" style={{ background: skelSoft, width: '38%' }} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2.5 rounded-full" style={{ background: skel, width: `${w2}%` }} />
        <div className="h-2.5 rounded-full" style={{ background: skel, width: `${w3}%` }} />
        {lines === 4 && <div className="h-2.5 rounded-full" style={{ background: skelSoft, width: `${w4}%` }} />}
      </div>
    </div>
  );
}

const ColHeader = ({ children }) => (
  <div className="shrink-0 h-[56px] flex items-center text-[26px] font-bold gap-2.5" style={{ color: C.text }}>
    <span className="w-1.5 h-6 rounded-full shrink-0" style={{ background: C.accent }} />
    {children}
  </div>
);

function FlowArrow() {
  return (
    <div className="shrink-0 self-center flex items-center justify-center px-2">
      <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

const EMP = 'font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8';

function PageSubtitle() {
  return (
    <div className="absolute top-[5px] left-0 w-full text-[22px] text-white font-medium font-['MiSans'] leading-relaxed">
      海量评论经 <span className={EMP}>AI 逐条分析</span>，提纯为<span className={EMP}>结构化口碑数据</span>。
    </div>
  );
}

const NAV_GROUPS = [
  { title: '宏观大盘', items: [{ icon: 'grid', label: '数据总览' }, { icon: 'compare', label: '横向对比' }] },
  { title: '深度口碑', items: [{ icon: 'split', label: '情感分布' }, { icon: 'quote', label: 'VOC' }, { icon: 'layers', label: '卖点维度' }, { icon: 'cloud', label: '词云' }, { icon: 'trend', label: '趋势' }] },
  { title: '真实性甄别', items: [{ icon: 'shield', label: '刷评识别' }, { icon: 'wall', label: '评论墙' }, { icon: 'focus', label: '下钻' }] },
];

/* ============================================================
 * 版本 A
 * ============================================================ */
export function Page_UserCommentArchitecture_A() {
  return (
    <SlideLayout title="用户评论分析系统架构">
      <PageSubtitle />

      <div
        className="absolute left-0 top-[66px] w-full h-[740px] rounded-3xl px-10 py-8 select-none font-['MiSans'] flex items-stretch gap-4"
        style={{ background: 'rgba(8,8,11,0.55)', border: `1px solid ${C.accentLine}`, boxShadow: '0 0 36px rgba(99,102,241,0.1)' }}
      >
        {/* —— ① 评论输入 —— */}
        <div className="flex-1 min-w-0 flex flex-col">
          <ColHeader>评论输入</ColHeader>
          <div className="flex-1 flex flex-col justify-center min-h-0">
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {COMMENT_CARDS.map((c, i) => (
                <CommentMiniCard key={i} {...c} opacity={1 - i * 0.02} />
              ))}
            </div>
            <div className="text-center mt-5 shrink-0 text-[20px] font-medium" style={{ color: '#ffffff' }}>
              跨平台原始评论
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* —— ② 分析引擎 —— */}
        <div className="flex-1 min-w-0 flex flex-col">
          <ColHeader>分析引擎</ColHeader>
          <div className="flex-1 flex flex-col justify-center gap-5 min-h-0">
            <div className="rounded-2xl px-6 py-5" style={{ background: C.elevated, border: `1px solid ${C.lineStrong}` }}>
              <div className="text-[26px] font-bold text-white mb-4">情感四分类</div>
              <div className="flex flex-wrap gap-2.5">
                {Object.values(SENT).map((s) => (
                  <SentBadge key={s.label} label={s.label} color={s.c} soft={s.soft} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl px-6 py-5" style={{ background: C.elevated, border: `1px solid ${C.lineStrong}` }}>
              <div className="text-[26px] font-bold text-white mb-4">刷评识别</div>
              <div className="rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <div className="flex items-center gap-2 mb-2" style={{ fontSize: 15, fontWeight: 700, color: '#ffffff' }}>
                  <Icon name="spark" size={16} color="#ffffff" />AI 判定
                </div>
                <div style={{ fontSize: 17, color: '#ffffff', lineHeight: 1.5 }}>判定依据与评论原文同框展示</div>
              </div>
            </div>

            <div className="rounded-2xl px-6 py-5" style={{ background: C.elevated, border: `1px solid ${C.lineStrong}` }}>
              <div className="text-[26px] font-bold text-white mb-4">卖点维度拆解</div>
              <div className="flex flex-wrap gap-2.5">
                {['功能', '质量', '颜值', '服务'].map((t) => (
                  <span key={t} style={{ padding: '6px 16px', borderRadius: 8, fontSize: 17, fontWeight: 500, color: C.sub, background: C.inset }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* —— ③ 结构化洞察 —— */}
        <div className="flex-1 min-w-0 flex flex-col">
          <ColHeader>结构化洞察</ColHeader>
          <div className="flex-1 flex flex-col justify-center gap-5 min-h-0">
            {NAV_GROUPS.map((g) => (
              <div key={g.title} className="rounded-2xl px-6 py-5" style={{ background: C.elevated, border: `1px solid ${C.lineStrong}` }}>
                <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.06em', color: C.tertiary, marginBottom: 14 }}>
                  {g.title}
                </div>
                <div className="flex flex-wrap gap-3">
                  {g.items.map((it) => (
                    <span
                      key={it.label}
                      className="inline-flex items-center gap-2.5"
                      style={{ padding: '10px 18px', borderRadius: 999, fontSize: 20, fontWeight: 500, color: '#ffffff', border: `1px solid ${C.line}` }}
                    >
                      <Icon name={it.icon} size={22} color="rgba(255,255,255,0.55)" />
                      {it.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 真实界面截图
 * ============================================================ */
const SHOTS = [
  { src: '/user-comment/overview.png', label: '数据总览' },
  { src: '/user-comment/compare.png', label: '商品横向对比' },
  { src: '/user-comment/sentiment.png', label: '好评 / 差评分布' },
  { src: '/user-comment/voices.png', label: '用户之声 VOC' },
  { src: '/user-comment/dimensions.png', label: '卖点维度' },
  { src: '/user-comment/fake.png', label: '刷评识别' },
];

export function Page_UserCommentArchitecture_B() {
  return (
    <SlideLayout title="用户评论分析系统架构">
      <PageSubtitle />

      <div className="absolute left-0 top-[76px] w-full h-[720px] flex items-center justify-center font-['MiSans'] select-none">
        <div className="grid grid-cols-3 gap-6">
          {SHOTS.map((m) => (
            <div
              key={m.src}
              className="relative rounded-xl overflow-hidden bg-black"
              style={{ width: 576, height: 360, border: `1px solid ${C.lineStrong}` }}
            >
              <img src={m.src} alt={m.label} className="w-full h-full object-cover" draggable={false} />
              <div className="absolute bottom-0 inset-x-0 flex items-center gap-2 px-4 pt-6 pb-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture_A.hideHeader = true;
Page_UserCommentArchitecture_B.hideHeader = true;
