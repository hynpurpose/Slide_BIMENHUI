import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 沿用 J:\GEO\Fake_App 的视觉语言（纯黑底 / 发丝边框 / 靛蓝 accent /
 * 情感四色 / 极简 Linear 风 / Montserrat 数字）重新设计架构呈现。
 * 版本 A：架构图；版本 B：真实界面截图。
 * ============================================================ */

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
  accentSoft: 'rgba(99,102,241,0.08)',
  accentLine: 'rgba(99,102,241,0.3)',
};

const SENT = {
  positive: { c: '#10b981', soft: 'rgba(16,185,129,0.1)', label: '好评' },
  negative: { c: '#ef4444', soft: 'rgba(239,68,68,0.1)', label: '差评' },
  fake: { c: '#f59e0b', soft: 'rgba(245,158,11,0.12)', label: '疑似刷评' },
  invalid: { c: '#71717a', soft: 'rgba(113,113,122,0.1)', label: '无效' },
};
const SENT_ORDER = ['positive', 'negative', 'fake', 'invalid'];

// 真实导航图标（src/components/Icon.tsx）
const ICON_PATHS = {
  grid: (<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  shield: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>),
  quote: (<><path d="M7 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2V7zm0 0c0 4-1 5-3 6" /><path d="M17 7h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2V7zm0 0c0 4-1 5-3 6" /></>),
  split: (<><path d="M12 4v16" /><path d="M7 9l-2 3 2 3" /><path d="M17 9l2 3-2 3" /></>),
  spark: (<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></>),
};

function NavIcon({ name, size = 20, color = 'currentColor', sw = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {ICON_PATHS[name] ?? ICON_PATHS.grid}
    </svg>
  );
}

const Eyebrow = ({ children }) => (
  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.12em', color: C.tertiary, textTransform: 'uppercase' }}>{children}</div>
);

const Arrow = () => (
  <div className="shrink-0 flex items-center justify-center" style={{ width: 44 }}>
    <svg width={38} height={38} viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

/* ============================================================
 * 版本 A — 架构图：输入 → AI 分析引擎 → 洞察输出
 * ============================================================ */
export function Page_UserCommentArchitecture_A() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        从一条条真实评论，到一屏可决策的口碑洞察 —— <span className="text-white font-bold">AI 分析引擎</span>居中驱动。
      </div>

      <div className="absolute left-0 top-[60px] w-full h-[720px] flex items-stretch font-['MiSans'] select-none">
        {/* 输入 */}
        <div className="shrink-0 flex flex-col justify-center items-center text-center px-8" style={{ width: 360, background: C.elevated, border: `1px solid ${C.line}`, borderRadius: 20 }}>
          <Eyebrow>INPUT · 数据输入</Eyebrow>
          <div className="mt-8 flex items-center justify-center rounded-full" style={{ width: 96, height: 96, background: C.inset, border: `1px solid ${C.line}` }}>
            <NavIcon name="quote" size={44} color={C.accent} sw={1.4} />
          </div>
          <div className="mt-7" style={{ fontSize: 26, fontWeight: 700, color: C.text }}>电商真实评论</div>
          <div className="mt-2.5" style={{ fontSize: 17, color: C.sub, lineHeight: 1.5 }}>淘宝 / 京东 商品页<br />未经筛选的原始用户声音</div>
        </div>

        <Arrow />

        {/* AI 分析引擎（核心） */}
        <div className="flex-1 rounded-[20px] flex flex-col px-8 py-7" style={{ background: C.accentSoft, border: `1px solid ${C.accentLine}`, boxShadow: '0 0 60px rgba(99,102,241,0.08) inset' }}>
          <div className="flex items-center justify-between shrink-0">
            <Eyebrow>CORE · AI 分析引擎</Eyebrow>
            <div className="flex items-center gap-2" style={{ color: C.accent }}>
              <NavIcon name="spark" size={18} color={C.accent} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>逐条读懂 · 去伪 · 拆解</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4 mt-5">
            {/* 情感四分类 */}
            <div className="rounded-2xl px-6 py-5" style={{ background: 'rgba(0,0,0,0.28)', border: `1px solid ${C.line}` }}>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 44, height: 44, background: C.inset, border: `1px solid ${C.line}` }}>
                  <NavIcon name="split" size={22} color={C.accent} />
                </span>
                <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>情感四分类</div>
                <div className="ml-auto flex gap-2">
                  {SENT_ORDER.map((k) => (
                    <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 999, fontSize: 15, fontWeight: 600, color: SENT[k].c, background: SENT[k].soft }}>
                      <span style={{ width: 7, height: 7, borderRadius: 999, background: SENT[k].c }} />{SENT[k].label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 刷评识别 */}
            <div className="rounded-2xl px-6 py-5" style={{ background: SENT.fake.soft, border: `1px solid rgba(245,158,11,0.28)` }}>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 44, height: 44, background: 'rgba(245,158,11,0.12)', border: `1px solid rgba(245,158,11,0.3)` }}>
                  <NavIcon name="shield" size={22} color={SENT.fake.c} />
                </span>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>刷评识别</div>
                  <div style={{ fontSize: 16, color: C.sub, marginTop: 2 }}>可疑评论标注 AI 判定依据，与原文同框，剔除水军噪声</div>
                </div>
              </div>
            </div>

            {/* 多维拆解 */}
            <div className="rounded-2xl px-6 py-5" style={{ background: 'rgba(0,0,0,0.28)', border: `1px solid ${C.line}` }}>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 44, height: 44, background: C.inset, border: `1px solid ${C.line}` }}>
                  <NavIcon name="layers" size={22} color={C.accent} />
                </span>
                <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>多维口碑拆解</div>
                <div className="ml-auto flex gap-2">
                  {['功能', '质量', '颜值', '服务'].map((t) => (
                    <span key={t} style={{ padding: '5px 14px', borderRadius: 8, fontSize: 15, fontWeight: 500, color: C.sub, background: C.inset }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Arrow />

        {/* 洞察输出 */}
        <div style={{ width: 400, background: C.elevated, border: `1px solid ${C.line}`, borderRadius: 20 }} className="shrink-0 flex flex-col justify-center px-8">
          <Eyebrow>OUTPUT · 洞察输出</Eyebrow>
          <div className="flex items-baseline gap-2.5 mt-5">
            <span style={{ fontSize: 60, fontWeight: 800, color: C.text, fontFamily: 'Montserrat', letterSpacing: '-0.03em', lineHeight: 1 }}>10</span>
            <span style={{ fontSize: 22, fontWeight: 600, color: C.sub }}>个分析视图</span>
          </div>
          <div style={{ fontSize: 16, color: C.tertiary, marginTop: 8 }}>共享同一数据 · 可按商品筛选下钻</div>

          <div className="flex flex-col gap-5 mt-9">
            {[
              { icon: 'grid', t: '宏观大盘', d: '总览 · 横向对比' },
              { icon: 'layers', t: '深度口碑', d: '情感 · VOC · 维度 · 词云 · 趋势' },
              { icon: 'shield', t: '真实性甄别', d: '刷评识别 · 评论墙 · 下钻' },
            ].map((g) => (
              <div key={g.t} className="flex items-center gap-4">
                <span className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 46, height: 46, background: C.inset, border: `1px solid ${C.line}` }}>
                  <NavIcon name={g.icon} size={22} color={C.accent} />
                </span>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: C.text }}>{g.t}</div>
                  <div style={{ fontSize: 15.5, color: C.tertiary, marginTop: 2 }}>{g.d}</div>
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
 * 版本 B — 真实界面截图（少文字，精确 16:10 完整显示）
 * ============================================================ */
const SHOTS = [
  { src: '/user-comment/overview.png', label: '数据总览' },
  { src: '/user-comment/compare.png', label: '商品横向对比' },
  { src: '/user-comment/sentiment.png', label: '好评 / 差评分布' },
  { src: '/user-comment/voices.png', label: '用户之声 VOC' },
  { src: '/user-comment/dimensions.png', label: '卖点维度' },
  { src: '/user-comment/fake.png', label: '刷评识别', hot: true },
];

export function Page_UserCommentArchitecture_B() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        一份电商评论数据，同时驱动 <span className="text-white font-bold">10 个分析视图</span> —— 下为其中 6 屏真实界面。
      </div>

      <div className="absolute left-0 top-[60px] w-full h-[720px] flex items-center justify-center font-['MiSans'] select-none">
        <div className="grid grid-cols-3 gap-6">
          {SHOTS.map((m) => (
            <div
              key={m.src}
              className="relative rounded-xl overflow-hidden bg-black"
              style={{ width: 576, height: 360, border: `1px solid ${m.hot ? 'rgba(245,158,11,0.55)' : C.lineStrong}` }}
            >
              <img src={m.src} alt={m.label} className="w-full h-full object-cover" draggable={false} />
              <div className="absolute bottom-0 inset-x-0 flex items-center gap-2 px-4 pt-6 pb-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                {m.hot && <span className="w-2 h-2 rounded-full" style={{ background: SENT.fake.c }} />}
                <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{m.label}</span>
                {m.hot && <span className="ml-auto text-[13px] font-bold px-2.5 py-0.5 rounded-full" style={{ color: SENT.fake.c, background: 'rgba(245,158,11,0.15)' }}>核心差异</span>}
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
