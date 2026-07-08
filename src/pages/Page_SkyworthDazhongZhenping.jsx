import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 「大众真评」用户评论分析系统
 * 三个"像 GIF / 视频"的自动上滚版本，供挑选。
 * 内容为示意文案（某家电品牌壁纸电视场景），可后续替换为真实数据。
 * ============================================================ */

// —— 示意评论数据（自动生成的演示内容）——
const REASONS = [
  { text: '贴墙几乎零缝隙，一整面墙像挂了幅画', platform: '小红书' },
  { text: 'Mini LED 分区控光，晚上看电影黑场很纯净', platform: '京东' },
  { text: '壁纸屏太薄了，客厅质感一下就拉满', platform: '天猫' },
  { text: '无主灯风格配它，整个装修终于统一了', platform: '小红书' },
  { text: '遥控简单，爸妈一学就会用', platform: '京东' },
  { text: '开机快、切换流畅，日常追剧完全够', platform: 'B 站' },
];

const CONCERNS = [
  { text: '壁纸电视是不是普遍偏贵？预算怕打不住', platform: '知乎' },
  { text: '挂墙要预埋线，装修没留槽还能装吗', platform: '小红书' },
  { text: '分体主机放哪、线怎么藏比较头疼', platform: 'B 站' },
  { text: '白天客厅光强，亮度够不够、会不会反光', platform: '京东' },
  { text: '外接音响会不会占地方、影响颜值', platform: '天猫' },
];

const COMPLAINTS = [
  { text: '主机连接线还是有点难彻底藏干净', platform: 'B 站' },
  { text: '开机广告希望能一键彻底关掉', platform: '京东' },
  { text: '系统偶尔要等一两秒才反应', platform: '小红书' },
  { text: '外接音箱位置得提前规划，不然有点尴尬', platform: '天猫' },
];

const CAT = {
  buy: { label: '购买理由', color: '#34D399', ring: 'rgba(52,211,153,0.38)', bg: 'rgba(52,211,153,0.08)' },
  concern: { label: '核心顾虑', color: '#FBBF24', ring: 'rgba(251,191,36,0.38)', bg: 'rgba(251,191,36,0.08)' },
  complaint: { label: '真实吐槽', color: '#FB7185', ring: 'rgba(251,113,133,0.38)', bg: 'rgba(251,113,133,0.08)' },
};

// 关键帧：无缝向上滚动（内容复制两份，位移 -50%）
function ScrollKeyframes() {
  return (
    <style>{`
      @keyframes dzScrollUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
      @keyframes dzBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }
    `}</style>
  );
}

function LiveDot({ color = '#34D399' }) {
  return (
    <span
      className="inline-block rounded-full"
      style={{ width: 12, height: 12, background: color, boxShadow: `0 0 12px ${color}`, animation: 'dzBlink 1.4s ease-in-out infinite' }}
    />
  );
}

function CommentCard({ cat, text, platform, compact = false }) {
  const c = CAT[cat];
  return (
    <div
      className="rounded-2xl border backdrop-blur-sm"
      style={{
        borderColor: c.ring,
        background: c.bg,
        padding: compact ? '16px 20px' : '20px 26px',
        marginBottom: compact ? 14 : 18,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2">
          <span className="inline-block rounded-full" style={{ width: 8, height: 8, background: c.color }} />
          <span className="font-bold font-['MiSans']" style={{ color: c.color, fontSize: compact ? 18 : 20 }}>
            {c.label}
          </span>
        </span>
        <span className="text-zinc-500 font-['MiSans']" style={{ fontSize: compact ? 16 : 18 }}>
          {platform}
        </span>
      </div>
      <p
        className="text-zinc-100 font-['MiSans']"
        style={{ fontSize: compact ? 21 : 24, lineHeight: compact ? '30px' : '34px' }}
      >
        “{text}”
      </p>
    </div>
  );
}

// 通用上滚跑马灯：items 复制两份实现无缝循环
function Marquee({ items, duration = 30, render }) {
  const loop = [...items, ...items];
  return (
    <div className="will-change-transform" style={{ animation: `dzScrollUp ${duration}s linear infinite` }}>
      {loop.map((it, i) => render(it, i))}
    </div>
  );
}

function LeftIntro() {
  return (
    <div className="w-[540px] shrink-0 flex flex-col justify-center pr-12">
      <div className="w-[64px] h-[5px] bg-[#004CE5]/70 rounded-full mb-8" />
      <p className="text-zinc-300 font-normal font-['MiSans']" style={{ fontSize: '32px', lineHeight: '52px' }}>
        从京东、淘宝、小红书、B 站等平台，持续抓取并分析大量用户评论与内容反馈，实时提炼出消费者真正关心的
        <strong className="text-white font-bold">购买理由</strong>、
        <strong className="text-white font-bold">核心顾虑</strong>和
        <strong className="text-white font-bold">真实吐槽</strong>。
      </p>

      <div className="flex flex-col gap-4 mt-12">
        {Object.values(CAT).map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="inline-block rounded-full" style={{ width: 12, height: 12, background: c.color }} />
            <span className="font-['MiSans'] text-[22px] font-medium" style={{ color: c.color }}>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
 * 版本 A — 单列实时评论流
 * 左文案 + 右侧一整列评论卡片自底向上无缝滚动，像直播弹幕/信息流。
 * ============================================================ */
export function Page_SkyworthDazhongZhenping_A() {
  const mixed = [];
  const maxLen = Math.max(REASONS.length, CONCERNS.length, COMPLAINTS.length);
  for (let i = 0; i < maxLen; i++) {
    if (REASONS[i]) mixed.push({ cat: 'buy', ...REASONS[i] });
    if (CONCERNS[i]) mixed.push({ cat: 'concern', ...CONCERNS[i] });
    if (COMPLAINTS[i]) mixed.push({ cat: 'complaint', ...COMPLAINTS[i] });
  }

  return (
    <SlideLayout title="「大众真评」用户评论分析系统">
      <ScrollKeyframes />
      <div className="absolute left-0 w-[1840px] flex select-none animate-fadeIn" style={{ top: 0, height: '795px' }}>
        <LeftIntro />

        {/* 右侧：实时评论流面板 */}
        <div className="flex-1 min-w-0 h-full rounded-[28px] border border-white/15 bg-white/[0.03] overflow-hidden flex flex-col">
          {/* 面板头 */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <LiveDot />
              <span className="text-white font-bold font-['MiSans'] text-[24px]">实时评论采集 · 情感提炼中</span>
            </div>
            <span className="text-zinc-500 font-['MiSans'] text-[18px] tracking-wider">LIVE</span>
          </div>

          {/* 滚动区 + 上下渐隐遮罩 */}
          <div className="relative flex-1 min-h-0 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none bg-gradient-to-b from-[#0a0a0a] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="absolute inset-0 px-8 pt-6">
              <Marquee
                items={mixed}
                duration={26}
                render={(it, i) => <CommentCard key={i} cat={it.cat} text={it.text} platform={it.platform} />}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 三列并行滚动（信息墙）
 * 三个分类各占一列，各自以不同速度自底向上滚动，最有"视频墙"氛围。
 * ============================================================ */
export function Page_SkyworthDazhongZhenping_B() {
  const columns = [
    { cat: 'buy', items: REASONS, duration: 24 },
    { cat: 'concern', items: CONCERNS, duration: 30 },
    { cat: 'complaint', items: COMPLAINTS, duration: 27 },
  ];

  return (
    <SlideLayout title="「大众真评」用户评论分析系统">
      <ScrollKeyframes />
      <div className="absolute left-0 w-[1840px] flex flex-col select-none animate-fadeIn" style={{ top: 0, height: '795px' }}>
        {/* 顶部一句话说明 */}
        <p className="text-zinc-400 font-['MiSans'] shrink-0" style={{ fontSize: '28px', lineHeight: '40px', marginBottom: 22 }}>
          从京东、淘宝、小红书、B 站等平台持续采集评论，AI 实时分流为三类洞察 ——
        </p>

        {/* 三列滚动 */}
        <div className="flex-1 min-h-0 flex gap-6">
          {columns.map((col) => {
            const c = CAT[col.cat];
            return (
              <div key={col.cat} className="flex-1 min-w-0 rounded-[24px] border border-white/12 bg-white/[0.03] overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0" style={{ background: c.bg }}>
                  <span className="flex items-center gap-2.5">
                    <LiveDot color={c.color} />
                    <span className="font-bold font-['MiSans'] text-[24px]" style={{ color: c.color }}>{c.label}</span>
                  </span>
                  <span className="text-zinc-500 font-['MiSans'] text-[16px]">{col.items.length}+ 条</span>
                </div>
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none bg-gradient-to-b from-[#0a0a0a] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  <div className="absolute inset-0 px-5 pt-4">
                    <Marquee
                      items={col.items}
                      duration={col.duration}
                      render={(it, i) => <CommentCard key={i} cat={col.cat} text={it.text} platform={it.platform} compact />}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 分析流水线自动上卷（长报告滚动）
 * 一份"长文档"从下往上滚动，依次呈现：数据接入 → 采集 → 分类 → 结论。
 * ============================================================ */
function PipelineStep({ index, color, title, desc, children }) {
  return (
    <div className="flex gap-6" style={{ marginBottom: 40 }}>
      {/* 时间轴 */}
      <div className="flex flex-col items-center shrink-0" style={{ width: 56 }}>
        <span
          className="flex items-center justify-center rounded-full font-black font-['MiSans'] text-[24px]"
          style={{ width: 56, height: 56, color: '#fff', background: color, boxShadow: `0 0 24px ${color}66` }}
        >
          {index}
        </span>
        <span className="flex-1 w-[3px] mt-2 rounded-full" style={{ background: `${color}55` }} />
      </div>
      {/* 内容 */}
      <div className="flex-1 min-w-0 pb-2">
        <h3 className="text-white font-bold font-['MiSans']" style={{ fontSize: 34, marginBottom: 8 }}>{title}</h3>
        <p className="text-zinc-400 font-['MiSans']" style={{ fontSize: 24, lineHeight: '36px', marginBottom: 18 }}>{desc}</p>
        {children}
      </div>
    </div>
  );
}

export function Page_SkyworthDazhongZhenping_C() {
  const Tag = ({ children, color }) => (
    <span
      className="inline-flex items-center rounded-full font-['MiSans'] font-medium"
      style={{ fontSize: 20, padding: '6px 16px', color, border: `1px solid ${color}66`, background: `${color}14`, marginRight: 12, marginBottom: 12 }}
    >
      {children}
    </span>
  );

  const pipeline = (
    <div>
      <PipelineStep index={1} color="#5B8CFF" title="多平台数据接入" desc="打通主流电商与内容社区，持续抓取海量真实评论与讨论。">
        <div className="flex flex-wrap">
          {['京东', '天猫', '小红书', 'B 站', '抖音', '知乎'].map((p) => <Tag key={p} color="#5B8CFF">{p}</Tag>)}
        </div>
      </PipelineStep>

      <PipelineStep index={2} color="#38BDF8" title="海量评论采集" desc="7×24 小时增量采集，去重清洗后进入分析队列。">
        <div className="flex items-end gap-3">
          <span className="font-black font-['MiSans'] text-[#38BDF8]" style={{ fontSize: 72, lineHeight: 1 }}>52,800</span>
          <span className="text-zinc-400 font-['MiSans'] text-[26px] pb-2">条 · 且持续增长</span>
        </div>
      </PipelineStep>

      <PipelineStep index={3} color="#A78BFA" title="AI 情感分类" desc="大模型对每条评论做情感与意图识别，自动分流为三类洞察。">
        <div className="flex flex-wrap">
          <Tag color={CAT.buy.color}>购买理由</Tag>
          <Tag color={CAT.concern.color}>核心顾虑</Tag>
          <Tag color={CAT.complaint.color}>真实吐槽</Tag>
        </div>
      </PipelineStep>

      <PipelineStep index={4} color="#34D399" title="洞察结论提炼" desc="聚合高频观点，输出可直接指导内容与投放的消费者洞察。">
        <div className="flex flex-col gap-3">
          <CommentCard cat="buy" text="贴墙零缝隙 + Mini LED，是最打动人的两大买点" platform="高频结论" compact />
          <CommentCard cat="concern" text="价格与挂墙安装，是转化前最大的两道心理门槛" platform="高频结论" compact />
        </div>
      </PipelineStep>
    </div>
  );

  return (
    <SlideLayout title="「大众真评」用户评论分析系统">
      <ScrollKeyframes />
      <div className="absolute left-0 w-[1840px] flex select-none animate-fadeIn" style={{ top: 0, height: '795px' }}>
        <LeftIntro />

        {/* 右侧：长报告自动上卷 */}
        <div className="flex-1 min-w-0 h-full rounded-[28px] border border-white/15 bg-white/[0.03] overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none bg-gradient-to-b from-[#0a0a0a] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="absolute inset-0 px-10 pt-8">
              <Marquee items={[0]} duration={32} render={(_, i) => <div key={i}>{pipeline}</div>} />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthDazhongZhenping_A.hideHeader = true;
Page_SkyworthDazhongZhenping_B.hideHeader = true;
Page_SkyworthDazhongZhenping_C.hideHeader = true;

// 默认导出保留（默认用版本 A），兼容其它引用
export default Page_SkyworthDazhongZhenping_A;
