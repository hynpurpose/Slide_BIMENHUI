import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 讲稿核心（监测词）：
 *   · 监测词 = 辅助监测；负面信息 10% 是红线
 *       ≤10% 影响不大 → 常态监测；>10% 超线 → 重点处理
 *   · 我们的核心作用：把所有情况「细分、定位」到具体是哪篇文章在影响
 *   · 定位后分两类处置：
 *       类型 01 恶意 / 虚假信息 → 走平台投诉 → 大部分可直接清除（快、成本低）
 *       类型 02 真实存在的问题 → 联合品牌公关协商，必要时借助媒体手段 → 视具体情况而定
 *
 * 三版共用「顶部红绿阈值示意图」，仅重构下方「处理逻辑」的呈现方式。
 * ============================================================ */

const LOCATE = {
  title: '细分定位',
  desc: '把每一条负面细分、定位到具体是哪一篇文章在影响',
};

const TYPES = [
  {
    no: '01',
    name: '恶意 / 虚假信息',
    accent: '#38BDF8',
    accentText: '#7DD3FC',
    nature: '内容不实、恶意抹黑',
    action: '走平台投诉流程',
    result: '大部分可直接清除',
    tone: '快 · 成本低',
  },
  {
    no: '02',
    name: '真实存在的问题',
    accent: '#FB923C',
    accentText: '#FDBA74',
    nature: '确有其事、真实反馈',
    action: '联合品牌公关协商，必要时借助媒体手段',
    result: '视具体情况而定',
    tone: '需多方协作',
  },
];

/* ————— 共用：顶部一句话 + 红绿阈值示意图 ————— */
function TopViz() {
  return (
    <>
      <p
        className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-7"
        style={{ fontSize: '38px', lineHeight: '1.3' }}
      >
        监测词用于<strong className="text-white font-bold">守底线</strong>、作为辅助监测：<strong className="text-white font-bold">负面信息 10% 是红线</strong>。
      </p>

      {/* 阈值可视化（保留） */}
      <div className="shrink-0 mb-9 flex flex-col gap-4">
        <div className="relative w-full h-[76px] bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center overflow-visible shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
          <div className="h-full flex items-center pl-8 bg-emerald-950/20" style={{ width: '33.33%' }}>
            <span className="text-[26px] text-emerald-400/80 font-black font-['MiSans']">正常范围</span>
          </div>
          <div className="h-full flex items-center pl-8 flex-1 bg-gradient-to-r from-red-950/45 via-red-950/15 to-transparent">
            <span className="text-[26px] text-red-500 font-black font-['MiSans']">超出红线 · 立即干预</span>
          </div>

          <div className="absolute top-[-10px] bottom-[-10px] z-20 flex flex-col items-center" style={{ left: '33.33%' }}>
            <div className="absolute -top-[36px] bg-red-600 text-white text-[16px] font-black px-3.5 py-1 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.8)] font-['MiSans'] tracking-wider">
              10% 报警红线
            </div>
            <div className="w-[4px] h-full bg-red-500 shadow-[0_0_15px_#ef4444,0_0_5px_#ef4444] rounded-full" />
            <div className="absolute -bottom-[20px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-red-500" />
          </div>
        </div>

        <div className="relative w-full h-8 px-1">
          <div className="absolute flex justify-between w-full text-[18px] text-zinc-500 font-bold font-sans">
            <span style={{ left: '0%', transform: 'translateX(-50%)' }} className="absolute">0%</span>
            <span style={{ left: '16.67%', transform: 'translateX(-50%)' }} className="absolute">5%</span>
            <span style={{ left: '33.33%', transform: 'translateX(-50%)' }} className="absolute text-red-500 font-black">10% (红线)</span>
            <span style={{ left: '50.0%', transform: 'translateX(-50%)' }} className="absolute">15%</span>
            <span style={{ left: '66.67%', transform: 'translateX(-50%)' }} className="absolute">20%</span>
            <span style={{ left: '83.33%', transform: 'translateX(-50%)' }} className="absolute">25%</span>
            <span style={{ left: '100%', transform: 'translateX(-100%)' }} className="absolute">30%</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
 * 版本 A — 三步链路 · 定位居中枢纽
 * 上：红绿示意图；下：一条「超线 → 定位 → 分两类处置」的逻辑链，
 * 定位作为核心枢纽，向下分叉出两类卡片（性质 / 处理 / 结果 三行对齐）。
 * ============================================================ */
export function Page_SkyworthMonitorWordStrategy_A() {
  const Card = ({ t }) => (
    <div
      className="h-full rounded-[24px] overflow-hidden flex flex-col"
      style={{ border: `1px solid ${t.accent}38`, background: `${t.accent}0A` }}
    >
      <div className="shrink-0 px-8 pt-6 pb-5 flex items-baseline gap-4" style={{ borderTop: `6px solid ${t.accent}` }}>
        <span className="text-[23px] font-bold font-['MiSans']" style={{ color: t.accentText }}>类型 {t.no}</span>
        <span className="text-[38px] font-black text-white font-['MiSans'] leading-none">{t.name}</span>
      </div>
      <div className="flex-1 px-8 pb-7 flex flex-col justify-center gap-5">
        <div className="flex items-start gap-4">
          <span className="shrink-0 w-[66px] text-[21px] text-zinc-500 font-bold font-['MiSans'] pt-1.5">性质</span>
          <span className="text-[27px] text-zinc-300 font-['MiSans'] leading-snug">{t.nature}</span>
        </div>
        <div className="flex items-start gap-4">
          <span className="shrink-0 w-[66px] text-[21px] text-zinc-500 font-bold font-['MiSans'] pt-1.5">处理</span>
          <span className="text-[27px] text-white font-semibold font-['MiSans'] leading-snug">{t.action}</span>
        </div>
        <div
          className="mt-1 rounded-xl px-5 py-3 flex items-center justify-between"
          style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}40` }}
        >
          <span className="text-[27px] font-black font-['MiSans']" style={{ color: t.accentText }}>{t.result}</span>
          <span className="text-[20px] text-zinc-400 font-['MiSans']">{t.tone}</span>
        </div>
      </div>
    </div>
  );

  return (
    <SlideLayout title="监测词：守住底线">
      <div className="absolute w-[1840px] flex flex-col select-none animate-fadeIn" style={{ top: 0, height: '795px', paddingTop: '24px' }}>
        <TopViz />

        <div className="flex-1 min-h-0 flex flex-col">
          {/* 逻辑链：超线 → 定位 → 分两类 */}
          <div className="shrink-0 flex items-stretch gap-4 mb-6">
            <div className="flex items-center px-6 rounded-2xl border border-red-500/40 bg-red-950/20">
              <span className="text-[26px] font-black text-red-400 font-['MiSans']">超出 10% 红线</span>
            </div>
            <div className="flex items-center text-[30px] text-zinc-600">→</div>
            <div className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900/50 px-7 py-4 flex items-center gap-5">
              <span className="text-[24px] font-black text-white font-['MiSans'] px-4 py-1.5 rounded-lg bg-white/10 shrink-0">{LOCATE.title}</span>
              <span className="text-[25px] text-zinc-300 font-['MiSans'] leading-snug">{LOCATE.desc}</span>
            </div>
            <div className="flex items-center text-[30px] text-zinc-600">→</div>
            <div className="flex items-center px-6 rounded-2xl border border-zinc-700 bg-zinc-900/50">
              <span className="text-[26px] font-black text-zinc-200 font-['MiSans']">分两类处置</span>
            </div>
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-8">
            {TYPES.map((t) => (
              <Card key={t.no} t={t} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 枢纽树形分叉
 * 「定位到具体文章」作为唯一枢纽节点居中，向下用连接线分叉出两条分支，
 * 每条分支：性质标签 → 处理手段 → 结果高亮。最具「逻辑分流」的图形感。
 * ============================================================ */
export function Page_SkyworthMonitorWordStrategy_B() {
  const Branch = ({ t }) => (
    <div className="flex flex-col items-center">
      {/* 连接竖线 */}
      <div className="w-[3px] h-8 rounded-full" style={{ background: `${t.accent}88` }} />
      <div
        className="w-full rounded-[24px] overflow-hidden"
        style={{ border: `1px solid ${t.accent}38`, background: `${t.accent}0A` }}
      >
        <div className="px-8 py-5 flex items-center gap-4" style={{ borderTop: `6px solid ${t.accent}` }}>
          <span className="text-[23px] font-bold font-['MiSans']" style={{ color: t.accentText }}>类型 {t.no}</span>
          <span className="text-[36px] font-black text-white font-['MiSans'] leading-none">{t.name}</span>
        </div>
        <div className="px-8 pb-7 pt-1 flex flex-col gap-4">
          <p className="text-[24px] text-zinc-500 font-['MiSans']">{t.nature}</p>
          <div className="flex items-center gap-3">
            <span className="text-[24px] text-zinc-600 font-['MiSans']">处理 →</span>
            <span className="text-[27px] text-white font-semibold font-['MiSans'] leading-snug">{t.action}</span>
          </div>
          <div
            className="mt-1 rounded-xl px-5 py-3.5 flex items-baseline justify-between"
            style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}40` }}
          >
            <span className="text-[28px] font-black font-['MiSans']" style={{ color: t.accentText }}>{t.result}</span>
            <span className="text-[20px] text-zinc-400 font-['MiSans']">{t.tone}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SlideLayout title="监测词：守住底线">
      <div className="absolute w-[1840px] flex flex-col select-none animate-fadeIn" style={{ top: 0, height: '795px', paddingTop: '24px' }}>
        <TopViz />

        <div className="flex-1 min-h-0 flex flex-col">
          {/* 枢纽节点：定位 */}
          <div className="shrink-0 flex justify-center">
            <div className="rounded-2xl border border-zinc-600 bg-zinc-900/70 px-9 py-4 flex items-center gap-5 shadow-[0_0_24px_rgba(0,0,0,0.5)]">
              <span className="text-[24px] font-black text-white font-['MiSans'] px-4 py-1.5 rounded-lg bg-white/10">{LOCATE.title}</span>
              <span className="text-[25px] text-zinc-300 font-['MiSans']">{LOCATE.desc}</span>
            </div>
          </div>

          {/* 分叉横线 */}
          <div className="shrink-0 flex justify-center">
            <div className="w-[3px] h-6 bg-zinc-600" />
          </div>
          <div className="shrink-0 relative h-[2px] mx-[25%]">
            <div className="absolute inset-0 bg-zinc-700" />
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-2 gap-10 items-start">
            {TYPES.map((t) => (
              <Branch key={t.no} t={t} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 分诊对照表
 * 顶部一条整宽「定位」步骤带；下方结构化对照表：
 * 左列固定维度（问题性质 / 处理方式 / 预期结果），右侧两列为两类，
 * 横向逐行对齐，最「结构化」、一眼看清两类差别。
 * ============================================================ */
export function Page_SkyworthMonitorWordStrategy_C() {
  const rows = [
    { label: '问题性质', render: (t) => <span className="text-[27px] text-zinc-300 font-['MiSans'] leading-snug">{t.nature}</span> },
    { label: '处理方式', render: (t) => <span className="text-[28px] text-white font-semibold font-['MiSans'] leading-snug">{t.action}</span> },
    {
      label: '预期结果',
      render: (t) => (
        <div className="flex items-baseline gap-4">
          <span className="text-[28px] font-black font-['MiSans']" style={{ color: t.accentText }}>{t.result}</span>
          <span className="text-[20px] text-zinc-500 font-['MiSans']">{t.tone}</span>
        </div>
      ),
    },
  ];

  return (
    <SlideLayout title="监测词：守住底线">
      <div className="absolute w-[1840px] flex flex-col select-none animate-fadeIn" style={{ top: 0, height: '795px', paddingTop: '24px' }}>
        <TopViz />

        <div className="flex-1 min-h-0 flex flex-col">
          {/* 定位步骤带 */}
          <div className="shrink-0 mb-6 rounded-2xl border border-zinc-700 bg-zinc-900/50 px-8 py-4 flex items-center gap-5">
            <span className="text-[22px] font-black text-red-400 font-['MiSans'] px-4 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 shrink-0">超线后第一步</span>
            <span className="text-[24px] font-black text-white font-['MiSans']">{LOCATE.title}</span>
            <span className="text-[25px] text-zinc-400 font-['MiSans']">{LOCATE.desc}</span>
          </div>

          {/* 对照表 */}
          <div className="flex-1 min-h-0 rounded-[26px] border border-zinc-800 bg-[#0D0D10]/60 overflow-hidden grid grid-cols-[190px_1fr_1fr]">
            {/* 表头 */}
            <div className="border-b border-zinc-800" />
            {TYPES.map((t) => (
              <div key={t.no} className="border-b border-l border-zinc-800 px-8 py-5 flex items-center gap-4" style={{ borderTop: `5px solid ${t.accent}` }}>
                <span className="text-[21px] font-bold font-['MiSans']" style={{ color: t.accentText }}>类型 {t.no}</span>
                <span className="text-[34px] font-black text-white font-['MiSans'] leading-none">{t.name}</span>
              </div>
            ))}

            {/* 数据行 */}
            {rows.map((r, i) => (
              <React.Fragment key={r.label}>
                <div className={`flex items-center px-7 ${i < rows.length - 1 ? 'border-b border-zinc-800' : ''}`}>
                  <span className="text-[22px] text-zinc-500 font-bold font-['MiSans']">{r.label}</span>
                </div>
                {TYPES.map((t) => (
                  <div
                    key={t.no}
                    className={`flex items-center px-8 py-6 border-l border-zinc-800 ${i < rows.length - 1 ? 'border-b' : ''}`}
                  >
                    {r.render(t)}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 默认导出保留（指向版本 A），兼容旧的 component 引用 */
export default Page_SkyworthMonitorWordStrategy_A;

Page_SkyworthMonitorWordStrategy_A.hideHeader = true;
Page_SkyworthMonitorWordStrategy_B.hideHeader = true;
Page_SkyworthMonitorWordStrategy_C.hideHeader = true;
