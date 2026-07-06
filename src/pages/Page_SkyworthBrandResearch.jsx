import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 我们怎么调研品牌 —— 「大众真评」采集与分析 Agent 架构
 * 下一页放系统演示视频，本页用一张图快速讲清它的运行架构：
 * 从哪里抓取 → 怎么分析 → 净化去掉不要的结论 → 最终呈现。
 * 提供 3 个可左右滑动的版本供挑选。
 * ============================================================ */

// —— 共用数据 ——
const SOURCES = [
  { name: '京东', tag: '电商评价', glyph: '京', color: '#E1251B' },
  { name: '天猫', tag: '电商评价', glyph: '猫', color: '#FF0F23' },
  { name: '小红书', tag: '种草笔记', glyph: '书', color: '#FE2C55' },
  { name: 'B 站', tag: '测评视频', glyph: 'B', color: '#00AEEC' },
  { name: '抖音', tag: '短视频口碑', glyph: '抖', color: '#25F4EE', gradient: 'linear-gradient(135deg,#25F4EE,#FE2C55)' },
  { name: '知乎', tag: '深度讨论', glyph: '知', color: '#0084FF' },
];

// 分析动作
const ANALYZE = ['情感识别', '意图归类', '语义聚类', '观点提取'];

// 净化：被"去掉"的无效信息
const NOISE = ['水军刷评', '广告软文', '重复灌水', '无关话题', '极端个例'];

// 呈现：三类最终结论
const OUTPUTS = [
  { label: '购买理由', color: '#34D399', bg: 'rgba(52,211,153,0.10)', ring: 'rgba(52,211,153,0.40)' },
  { label: '核心顾虑', color: '#FBBF24', bg: 'rgba(251,191,36,0.10)', ring: 'rgba(251,191,36,0.40)' },
  { label: '真实吐槽', color: '#FB7185', bg: 'rgba(251,113,133,0.10)', ring: 'rgba(251,113,133,0.40)' },
];

// —— 共用关键帧动画 ——
function FlowKeyframes() {
  return (
    <style>{`
      @keyframes brFlowDot { 0% { left: 2%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 98%; opacity: 0; } }
      @keyframes brFlowDown { 0% { top: 2%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 98%; opacity: 0; } }
      @keyframes brDash { to { stroke-dashoffset: -48; } }
      @keyframes brPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.06); opacity: 0.85; } }
      @keyframes brBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
    `}</style>
  );
}

const Subtitle = ({ children }) => (
  <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
    {children}
  </div>
);

/* 平台品牌徽标：品牌色圆角块 + 标识字 */
function BrandBadge({ source, size = 38 }) {
  return (
    <span
      className="flex items-center justify-center rounded-[11px] shrink-0 font-black font-['MiSans'] text-white leading-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.5,
        background: source.gradient || source.color,
        boxShadow: `0 0 16px ${source.color}55`,
      }}
    >
      {source.glyph}
    </span>
  );
}

function LiveDot({ color = '#34D399', size = 10 }) {
  return (
    <span
      className="inline-block rounded-full shrink-0"
      style={{ width: size, height: size, background: color, boxShadow: `0 0 12px ${color}`, animation: 'brBlink 1.5s ease-in-out infinite' }}
    />
  );
}

/* 阶段序号徽章 */
function StepBadge({ n, color }) {
  return (
    <span
      className="flex items-center justify-center rounded-xl font-black font-['MiSans'] text-[22px] text-white shrink-0"
      style={{ width: 44, height: 44, background: color, boxShadow: `0 0 22px ${color}66` }}
    >
      {n}
    </span>
  );
}

/* 横向连接器：带流动光点的箭头 */
function HConnector({ delay = 0, color = '#2E6BFF' }) {
  return (
    <div className="relative shrink-0 flex items-center justify-center" style={{ width: 84 }}>
      <div className="relative w-full h-[3px] rounded-full" style={{ background: `linear-gradient(90deg, ${color}22, ${color}88)` }}>
        <span
          className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 12, height: 12, background: color, boxShadow: `0 0 16px ${color}`, animation: `brFlowDot 2.4s ${delay}s linear infinite` }}
        />
      </div>
      {/* 箭头头部 */}
      <svg className="absolute right-[-2px]" width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M2 3 L15 10 L2 17" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

/* 阶段卡片外框 */
function StageCard({ n, color, title, sub, children, faint = false }) {
  return (
    <div
      className="relative flex-1 h-full rounded-[26px] border p-8 flex flex-col overflow-hidden"
      style={{
        borderColor: faint ? 'rgba(255,255,255,0.12)' : `${color}55`,
        background: faint ? 'rgba(255,255,255,0.02)' : `${color}0d`,
        boxShadow: faint ? 'none' : `0 18px 50px -20px ${color}55`,
      }}
    >
      {/* 顶部色条 */}
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: `linear-gradient(90deg, ${color}, ${color}33)` }} />
      <div className="flex items-center gap-3 mb-2">
        <StepBadge n={n} color={color} />
        <div className="flex flex-col">
          <span className="text-white font-bold font-['MiSans'] text-[27px] leading-tight">{title}</span>
        </div>
      </div>
      <p className="text-zinc-400 font-['MiSans'] text-[18px] leading-snug mb-5 min-h-[44px]">{sub}</p>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}

const Chip = ({ children, color, strike = false }) => (
  <span
    className="inline-flex items-center rounded-full font-['MiSans'] font-medium"
    style={{
      fontSize: 19,
      padding: '7px 16px',
      color: strike ? '#71717a' : color,
      border: `1px solid ${strike ? 'rgba(113,113,122,0.4)' : color + '55'}`,
      background: strike ? 'rgba(113,113,122,0.08)' : `${color}14`,
      textDecoration: strike ? 'line-through' : 'none',
    }}
  >
    {children}
  </span>
);

/* ============================================================
 * 版本 A — 横向四段流水线（最直观的"架构流程图"）
 * 采集 → 分析 → 净化(去掉不要的) → 呈现，箭头串联 + 流光。
 * ============================================================ */
export function Page_SkyworthBrandResearch_A() {
  return (
    <SlideLayout title="消费者是怎么看待品牌的">
      <FlowKeyframes />
      <Subtitle>
        「大众真评」采集与分析 Agent 的运行架构：全网抓取 → AI 分析 → 净化去噪 → 结论呈现，一条链路自动跑通。
      </Subtitle>

      <div
        className="absolute left-0 w-full flex items-stretch select-none animate-fadeIn"
        style={{ top: '108px', height: '600px' }}
      >
        {/* 1. 采集 */}
        <StageCard n={1} color="#5B8CFF" title="全网抓取" sub="打通主流电商与内容社区，7×24h 持续采集真实评论。">
          <div className="flex flex-wrap gap-2.5 content-start">
            {SOURCES.map((s) => (
              <span key={s.name} className="flex flex-col items-start rounded-xl border border-[#5B8CFF]/35 bg-[#5B8CFF]/10 px-3.5 py-2">
                <span className="text-white font-bold font-['MiSans'] text-[20px] leading-tight">{s.name}</span>
                <span className="text-[#8DB0FF] font-['MiSans'] text-[13px]">{s.tag}</span>
              </span>
            ))}
          </div>
        </StageCard>

        <HConnector delay={0} color="#5B8CFF" />

        {/* 2. 分析 */}
        <StageCard n={2} color="#A78BFA" title="AI 分析" sub="大模型逐条理解语义，识别情感与意图并聚类。">
          <div className="flex flex-wrap gap-2.5 content-start">
            {ANALYZE.map((a) => <Chip key={a} color="#C4B5FD">{a}</Chip>)}
          </div>
          <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-[#A78BFA]/25 bg-[#A78BFA]/[0.07] px-4 py-3">
            <LiveDot color="#A78BFA" />
            <span className="text-zinc-300 font-['MiSans'] text-[17px]">大模型语义引擎 · 实时处理中</span>
          </div>
        </StageCard>

        <HConnector delay={0.6} color="#A78BFA" />

        {/* 3. 净化 */}
        <StageCard n={3} color="#F472B6" title="净化去噪" sub="剔除干扰信息，只保留真实、有代表性的观点。">
          <div className="flex flex-wrap gap-2.5 content-start">
            {NOISE.map((x) => <Chip key={x} strike>{x}</Chip>)}
          </div>
          <div className="mt-5 flex items-center gap-2 text-[#F9A8D4] font-['MiSans'] text-[17px] font-medium">
            <span className="text-[20px]">✕</span> 去掉不该进入结论的噪声
          </div>
        </StageCard>

        <HConnector delay={1.2} color="#F472B6" />

        {/* 4. 呈现 */}
        <StageCard n={4} color="#34D399" title="结论呈现" sub="聚合高频观点，输出可直接指导策略的洞察。">
          <div className="flex flex-col gap-3">
            {OUTPUTS.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-3 rounded-xl border px-4 py-3.5"
                style={{ borderColor: o.ring, background: o.bg }}
              >
                <span className="inline-block rounded-full" style={{ width: 12, height: 12, background: o.color }} />
                <span className="font-bold font-['MiSans'] text-[22px]" style={{ color: o.color }}>{o.label}</span>
              </div>
            ))}
          </div>
        </StageCard>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 中枢 Agent（左侧数据源汇入 → 中央引擎 → 右侧结论）
 * 用 SVG 连线把"多源汇聚 · 中央处理 · 三类输出"讲成一张架构图。
 * ============================================================ */
export function Page_SkyworthBrandResearch_B() {
  return (
    <SlideLayout title="我们怎么做品牌定位">
      <FlowKeyframes />
      <Subtitle>
        一个中枢 Agent：把全网多平台数据汇聚进来，在引擎内完成分析与净化，最终稳定输出三类品牌洞察。
      </Subtitle>

      <div
        className="absolute left-0 w-full flex items-stretch select-none animate-fadeIn"
        style={{ top: '108px', height: '600px' }}
      >
        {/* 左：数据源 */}
        <div className="w-[440px] shrink-0 h-full flex flex-col justify-center gap-3">
          <span className="text-[#8DB0FF] font-['MiSans'] font-bold text-[20px] tracking-wide mb-1">数据来源 · 从哪里抓</span>
          {SOURCES.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-xl border border-[#5B8CFF]/30 bg-[#5B8CFF]/[0.08] px-5 py-3"
            >
              <div className="flex items-center gap-4 min-w-0">
                <BrandBadge source={s} />
                <span className="text-white font-bold font-['MiSans'] text-[22px]">{s.name}</span>
              </div>
              <span className="text-[#8DB0FF] font-['MiSans'] text-[16px]">{s.tag}</span>
            </div>
          ))}
        </div>

        {/* 左→中 连线 */}
        <div className="relative shrink-0" style={{ width: 96 }}>
          <svg className="w-full h-full" viewBox="0 0 96 600" preserveAspectRatio="none" fill="none">
            {[110, 190, 270, 350, 430, 510].map((y, i) => (
              <path
                key={i}
                d={`M0 ${y} C 48 ${y}, 48 300, 96 300`}
                stroke="#5B8CFF"
                strokeWidth="2.5"
                strokeOpacity="0.5"
                strokeDasharray="8 8"
              />
            ))}
          </svg>
        </div>

        {/* 中：Agent 引擎 */}
        <div className="flex-1 h-full flex items-center justify-center px-2">
          <div className="relative w-full h-[440px] rounded-[30px] border border-[#2E6BFF]/50 bg-gradient-to-b from-[#0B2E80]/40 to-[#004CE5]/[0.06] shadow-[0_0_60px_-10px_rgba(0,76,229,0.5)] flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#5B8CFF] via-[#A78BFA] to-[#34D399]" />
            {/* 引擎标题 */}
            <div className="flex items-center gap-3 px-8 pt-7 pb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2E6BFF] to-[#0B2E80] border border-blue-300/40 shadow-[0_0_24px_rgba(0,76,229,0.6)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-white font-black font-['MiSans'] text-[28px] leading-tight">大众真评 Agent</span>
                <span className="text-blue-200/80 font-['MiSans'] text-[16px]">采集与分析引擎</span>
              </div>
              <span className="ml-auto flex items-center gap-2"><LiveDot color="#34D399" /><span className="text-emerald-300 font-['MiSans'] text-[16px]">RUNNING</span></span>
            </div>

            {/* 内部三步 */}
            <div className="flex-1 px-8 pb-8 flex flex-col justify-center gap-4">
              {[
                { n: 1, color: '#5B8CFF', t: '采集清洗', d: '增量抓取、去重、结构化入库' },
                { n: 2, color: '#A78BFA', t: 'AI 分析', d: '情感 / 意图识别与语义聚类' },
                { n: 3, color: '#F472B6', t: '净化去噪', d: '剔除水军、广告、无关与极端个例' },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-4 rounded-2xl border px-5 py-3.5" style={{ borderColor: `${s.color}44`, background: `${s.color}12` }}>
                  <StepBadge n={s.n} color={s.color} />
                  <div className="flex flex-col">
                    <span className="text-white font-bold font-['MiSans'] text-[22px] leading-tight">{s.t}</span>
                    <span className="text-zinc-400 font-['MiSans'] text-[16px]">{s.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 中→右 连线 */}
        <div className="relative shrink-0" style={{ width: 96 }}>
          <svg className="w-full h-full" viewBox="0 0 96 600" preserveAspectRatio="none" fill="none">
            {[180, 300, 420].map((y, i) => (
              <path
                key={i}
                d={`M0 300 C 48 300, 48 ${y}, 96 ${y}`}
                stroke={OUTPUTS[i].color}
                strokeWidth="2.5"
                strokeOpacity="0.6"
                strokeDasharray="8 8"
              />
            ))}
          </svg>
        </div>

        {/* 右：三类结论 */}
        <div className="w-[360px] shrink-0 h-full flex flex-col justify-center gap-4">
          <span className="text-emerald-300 font-['MiSans'] font-bold text-[20px] tracking-wide mb-1">输出结论 · 怎么呈现</span>
          {OUTPUTS.map((o) => (
            <div
              key={o.label}
              className="rounded-2xl border px-6 py-5"
              style={{ borderColor: o.ring, background: o.bg }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full" style={{ width: 14, height: 14, background: o.color }} />
                <span className="font-black font-['MiSans'] text-[26px]" style={{ color: o.color }}>{o.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 漏斗式净化架构（强调"去掉不要的结论"）
 * 海量原始评论 → 逐层收窄 → 精炼结论；右侧标注每层被去掉了什么。
 * ============================================================ */
export function Page_SkyworthBrandResearch_C() {
  const layers = [
    { color: '#5B8CFF', w: 100, t: '全网原始评论', v: '52,800+', d: '京东 / 天猫 / 小红书 / B 站 / 抖音 / 知乎', drop: null },
    { color: '#7C9BFF', w: 84, t: '结构化采集', v: '41,600', d: '去重、清洗、统一入库', drop: '重复灌水 · 乱码残句' },
    { color: '#A78BFA', w: 66, t: 'AI 语义分析', v: '18,300', d: '情感识别 + 意图归类 + 观点聚类', drop: '无关话题 · 闲聊噪声' },
    { color: '#F472B6', w: 46, t: '净化去噪', v: '3,200', d: '剔除失真与不可采信信息', drop: '水军刷评 · 广告软文 · 极端个例' },
    { color: '#34D399', w: 30, t: '精炼结论', v: '3 类', d: '购买理由 · 核心顾虑 · 真实吐槽', drop: null },
  ];

  return (
    <SlideLayout title="消费者是怎么看待品牌的">
      <FlowKeyframes />
      <Subtitle>
        像漏斗一样层层收窄：从数万条原始评论中，把不可采信的噪声逐层"去掉"，最后只沉淀出三类真实结论。
      </Subtitle>

      <div
        className="absolute left-0 w-full flex select-none animate-fadeIn"
        style={{ top: '108px', height: '600px' }}
      >
        {/* 左：漏斗主体 */}
        <div className="flex-1 h-full flex flex-col items-center justify-between py-1">
          {layers.map((l, i) => (
            <React.Fragment key={l.t}>
              <div
                className="relative rounded-2xl border flex items-center justify-between px-9"
                style={{
                  width: `${l.w}%`,
                  height: 88,
                  borderColor: `${l.color}66`,
                  background: `linear-gradient(90deg, ${l.color}22, ${l.color}0d)`,
                  boxShadow: `0 14px 40px -18px ${l.color}88`,
                }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <StepBadge n={i + 1} color={l.color} />
                  <div className="flex flex-col min-w-0">
                    <span className="text-white font-bold font-['MiSans'] text-[25px] leading-tight truncate">{l.t}</span>
                    <span className="text-zinc-400 font-['MiSans'] text-[16px] truncate">{l.d}</span>
                  </div>
                </div>
                <span className="font-black font-['MiSans'] shrink-0 ml-4" style={{ color: l.color, fontSize: 30 }}>{l.v}</span>
              </div>
              {/* 层间向下流光箭头 */}
              {i < layers.length - 1 && (
                <div className="relative flex items-center justify-center" style={{ height: 26, width: 4 }}>
                  <div className="relative w-[3px] h-full rounded-full" style={{ background: `linear-gradient(180deg, ${l.color}, ${layers[i + 1].color})` }}>
                    <span
                      className="absolute left-1/2 -translate-x-1/2 rounded-full"
                      style={{ width: 9, height: 9, background: layers[i + 1].color, boxShadow: `0 0 12px ${layers[i + 1].color}`, animation: `brFlowDown 2s ${i * 0.4}s linear infinite` }}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 右：被去掉了什么 */}
        <div className="w-[430px] shrink-0 h-full flex flex-col justify-center pl-10 ml-6 border-l border-zinc-800/80">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#F9A8D4] text-[24px] font-black">✕</span>
            <span className="text-[#F9A8D4] font-['MiSans'] font-bold text-[24px]">每层去掉了什么</span>
          </div>
          <div className="flex flex-col gap-4">
            {layers.filter((l) => l.drop).map((l) => (
              <div key={l.t} className="rounded-xl border border-zinc-700/50 bg-zinc-800/20 px-5 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block rounded-full" style={{ width: 9, height: 9, background: l.color }} />
                  <span className="text-zinc-300 font-['MiSans'] font-medium text-[17px]">{l.t} 阶段</span>
                </div>
                <span className="text-zinc-500 font-['MiSans'] text-[19px] line-through decoration-[#FB7185]/60">{l.drop}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 text-zinc-500 font-['MiSans'] text-[17px] leading-relaxed">
            正因为把这些不可采信的内容剔除干净，最终沉淀的三类结论才真实、客观、可直接指导策略。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthBrandResearch_A.hideHeader = true;
Page_SkyworthBrandResearch_B.hideHeader = true;
Page_SkyworthBrandResearch_C.hideHeader = true;

// 默认导出保留（默认版本 A），兼容其它引用
export default Page_SkyworthBrandResearch_A;
