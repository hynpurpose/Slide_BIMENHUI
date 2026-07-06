import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 版本 A：中枢式架构图（对齐 GEO ONE 架构页结构 + Fake_App 靛蓝 accent）
 * 版本 B：真实界面截图（不改动）
 * ============================================================ */

const C = {
  elevated: '#09090b',
  inset: '#18181b',
  line: 'rgba(255,255,255,0.06)',
  lineStrong: 'rgba(255,255,255,0.1)',
  sub: '#a1a1aa',
  tertiary: '#71717a',
  accent: '#6366f1',
  accentLine: 'rgba(99,102,241,0.3)',
};

const SENT = {
  fake: { c: '#f59e0b', soft: 'rgba(245,158,11,0.12)' },
};

const Chevron = () => (
  <div className="flex items-center shrink-0">
    <svg className="w-8 h-8" style={{ color: C.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const engineSteps = [
  { t: '评论采集入库', d: '跨平台原始评论统一接入' },
  { t: '情感四分类', d: '好评 · 差评 · 疑似刷评 · 无效' },
  { t: '刷评识别净化', d: 'AI 判定依据与原文同框，剔除水军噪声', highlight: true },
  { t: '卖点维度拆解', d: '功能 · 质量 · 颜值 · 服务 四维归类' },
];

const views = [
  { group: '宏观大盘', items: ['数据总览', '商品横向对比'] },
  { group: '深度口碑', items: ['情感分布', '用户之声 VOC', '卖点维度', '关键词云', '时间趋势'] },
  { group: '真实性甄别', items: ['刷评识别', '全量评论墙', '单商品下钻'] },
];

/* ============================================================
 * 版本 A — 中枢式架构图
 * ============================================================ */
export function Page_UserCommentArchitecture_A() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        原始评论汇入 <span className="text-white font-bold">真评分析引擎</span>，经分类、去伪、拆解后，输出 <span className="text-white font-bold">10 屏可下钻看板</span>。
      </div>

      <div
        className="absolute left-0 top-[50px] w-full h-[740px] rounded-3xl p-8 select-none font-['MiSans'] flex items-stretch gap-6"
        style={{ background: 'rgba(8,8,11,0.5)', border: `1px solid ${C.accentLine}`, boxShadow: '0 0 30px rgba(99,102,241,0.12)' }}
      >
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full shadow-[0_0_10px_#6366f1]" style={{ background: C.accent }} />
          <span className="text-[24px] font-bold text-white tracking-wider">中枢式架构</span>
        </div>

        {/* 左：数据入口 */}
        <div className="w-[340px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-400 mb-4 flex items-center gap-2.5">
            <span className="w-1.5 h-5 rounded-full bg-zinc-500" />
            数据入口
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="rounded-2xl px-6 py-8 text-center" style={{ background: C.elevated, border: `1px solid ${C.lineStrong}` }}>
              <div className="text-[28px] font-bold text-white leading-tight">电商用户评论</div>
              <div className="text-[17px] mt-3" style={{ color: C.sub }}>淘宝 / 京东 · 原始未清洗</div>
            </div>
            <div className="flex justify-center">
              <svg className="w-7 h-7" style={{ color: C.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="rounded-xl px-5 py-4 text-center" style={{ background: C.inset, border: `1px solid ${C.line}` }}>
              <div className="text-[18px] font-bold text-zinc-300">静态数据集</div>
              <div className="text-[15px] mt-1.5" style={{ color: C.tertiary }}>离线清洗 · 情感映射 · 聚合</div>
            </div>
          </div>
        </div>

        <Chevron />

        {/* 中：分析引擎（纵向流水线） */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="text-[20px] font-bold mb-4 flex items-center gap-2.5" style={{ color: C.accent }}>
            <span className="w-1.5 h-5 rounded-full" style={{ background: C.accent }} />
            真评分析引擎
          </div>
          <div
            className="flex-1 rounded-2xl p-7 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(180deg, rgba(99,102,241,0.18) 0%, rgba(9,9,11,0.95) 100%)',
              border: `1px solid ${C.accentLine}`,
              boxShadow: 'inset 0 0 40px rgba(99,102,241,0.08)',
            }}
          >
            <div className="text-center shrink-0">
              <div className="text-[28px] font-black text-white">四层分析流水线</div>
            </div>

            <div className="flex flex-col gap-3 flex-1 justify-center my-4">
              {engineSteps.map((step, i) => (
                <React.Fragment key={step.t}>
                  <div
                    className="rounded-xl px-5 py-4 backdrop-blur"
                    style={{
                      background: step.highlight ? SENT.fake.soft : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${step.highlight ? 'rgba(245,158,11,0.35)' : 'rgba(255,255,255,0.12)'}`,
                    }}
                  >
                    <div className="text-[22px] font-bold text-white leading-tight">{step.t}</div>
                    <div className="text-[15px] mt-1" style={{ color: step.highlight ? C.sub : 'rgba(199,210,254,0.65)' }}>{step.d}</div>
                  </div>
                  {i < engineSteps.length - 1 && (
                    <div className="flex justify-center">
                      <svg className="w-6 h-6" style={{ color: 'rgba(165,180,252,0.55)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <Chevron />

        {/* 右：10 屏分析看板 */}
        <div className="w-[420px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-300 mb-4 flex items-center gap-2.5">
            <span className="w-1.5 h-5 rounded-full" style={{ background: C.accent }} />
            10 屏分析看板
          </div>
          <div className="flex-1 flex flex-col justify-between gap-3">
            {views.map((v) => (
              <div key={v.group} className="flex-1 rounded-xl px-5 py-4 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.lineStrong}` }}>
                <div className="text-[20px] font-bold text-white leading-tight">{v.group}</div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {v.items.map((item) => (
                    <span key={item} className="text-[14px] font-medium px-2.5 py-1 rounded-md" style={{ color: C.sub, background: C.inset, border: `1px solid ${C.line}` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="shrink-0 mt-3 text-center text-[15px]" style={{ color: C.tertiary }}>
            全局商品筛选 · 10 路由共享同一数据
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
