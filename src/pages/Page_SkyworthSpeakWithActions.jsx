import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@700;800;900&display=swap');`;

const SUBTITLE = '两个核心词条的战果 · 6月28日 → 7月6日';

/* ── 数据来源：创维GEO投放效果TOP20（7月7日导出）+ GEO ONE 监测截图 ── */
export const PRIMARY = {
  tag: '核心战果 01',
  keyword: '超薄电视品牌排行榜',
  // 窄栏展示用：手动控制断行，避免「榜」字单独落在行尾
  keywordDisplay: '超薄电视品牌\n排行榜',
  platform: '通义千问',
  afterLabel: '第 1 名',
  no: 'NO.1',
  screenshot: '/images/speak_with_actions_case1.png',
  citeShot: '/images/speak_with_actions_case1_cite.png',
  fullShot: '/images/speak_with_actions_entry1_full.png',
  citePositions: [3, 4],
  highlight: '创维 A10H、创维 65S8A 双型号霸占榜单前二',
  ranking: [
    { rank: 1, name: '创维 A10H', ours: true },
    { rank: 2, name: '创维 65S8A', ours: true },
    { rank: 3, name: '华为智慧屏 S Pro 65英寸' },
    { rank: 4, name: '海信 55E3ND Pro' },
    { rank: 5, name: '海信 55E3F' },
  ],
  totalNote: '…… AI 共列出 16 个型号',
  articles: [
    '[金投网] 2026年换新房必看，适配现代装修风格的电视推荐与避坑指南',
    '[IT之家] 七千左右壁纸电视怎么选？2026适配现代装修的贴墙电视推荐',
  ],
};

export const SECONDARY = {
  tag: '战果 02',
  keyword: '口碑好的电视推荐',
  platform: 'DeepSeek',
  afterLabel: '第 3 名',
  no: 'NO.3',
  screenshot: '/images/speak_with_actions_case2.png',
  citeShot: '/images/speak_with_actions_case2_cite.png',
  fullShot: '/images/speak_with_actions_entry2_full.png',
  citePositions: [4, 7],
  highlight: '创维 A7H Pro 第 3、创维 75A3F 第 8，双型号进前十',
  ranking: [
    { rank: 1, name: '索尼电视7系二代 XR70M2' },
    { rank: 2, name: '三星 S85H OLED' },
    { rank: 3, name: '创维 A7H Pro', ours: true },
    { gap: true },
    { rank: 8, name: '创维 75A3F', ours: true },
  ],
  totalNote: '…… AI 共列出 10 个型号',
  articles: [
    '[IT168] 2026年七千左右壁纸电视怎么选？我跑了三家卖场后写出这篇',
    '[IT168] 2026艺术电视品牌盘点：要换新房，客厅电视这样挑不踩坑',
  ],
};

export function PlatformChip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-[17px] font-semibold font-['MiSans'] bg-[#004CE5]/15 text-[#8FBFFF] border border-[#004CE5]/25 whitespace-nowrap leading-snug">
      {children}
    </span>
  );
}

export function DateChip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-[17px] font-medium font-['MiSans'] bg-white/[0.06] text-zinc-400 border border-white/10 whitespace-nowrap leading-snug">
      {children}
    </span>
  );
}

/* AI 引用来源截图面板：橙标「我们投放」是核心证据 */
export function CitePanel({ data, className = '' }) {
  return (
    <div className={`min-h-0 flex flex-col rounded-2xl overflow-hidden border border-[#F97316]/40 ${className}`}>
      <div className="shrink-0 h-[44px] px-4 flex items-center gap-2.5 bg-[#F97316]/15 border-b border-[#F97316]/30">
        <span className="px-2 py-0.5 rounded bg-[#F97316] text-white text-[14px] font-bold font-['MiSans'] shrink-0">
          我们投放
        </span>
        <span className="text-[16px] text-[#FDBA74] font-bold font-['MiSans'] truncate">
          {data.platform}引用来源实拍 · 橙标 = 引用了我们的文章
        </span>
      </div>
      <div className="flex-1 min-h-0 bg-white flex items-center justify-center overflow-hidden">
        <img src={data.citeShot} alt={`${data.keyword} 引用来源截图`} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   版本 A · 主次双卡 + AI 榜单还原（无截图，纯数据渲染）
   ═══════════════════════════════════════════════════════════ */

export function RankList({ data, compact }) {
  const nameSize = compact ? 'text-[21px]' : 'text-[24px]';
  const rankSize = compact ? 'text-[22px]' : 'text-[26px]';
  return (
    <div className="flex-1 min-h-0 flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="shrink-0 px-5 h-[46px] flex items-center border-b border-white/10">
        <span className="text-[17px] text-zinc-400 font-['MiSans']">
          7月6日 · {data.platform}给出的推荐榜单
        </span>
      </div>
      {data.ranking.map((row, i) =>
        row.gap ? (
          <div key={`gap-${i}`} className="flex-1 min-h-0 flex items-center px-5 text-zinc-600 text-[20px] font-black tracking-[0.3em]">
            ······
          </div>
        ) : (
          <div
            key={row.rank}
            className={`flex-1 min-h-0 flex items-center gap-4 px-5 border-b border-white/[0.05] last:border-b-0 ${
              row.ours ? 'bg-[#004CE5]/20' : ''
            }`}
          >
            <span className={`w-9 shrink-0 text-center font-black font-['Montserrat'] ${rankSize} ${row.ours ? 'text-[#8FBFFF]' : 'text-zinc-500'}`}>
              {row.rank}
            </span>
            <span className={`min-w-0 truncate font-['MiSans'] ${nameSize} ${row.ours ? 'font-black text-white' : 'font-medium text-zinc-400'}`}>
              {row.name}
            </span>
            {row.ours && (
              <span className="ml-auto shrink-0 px-2.5 py-0.5 rounded-md bg-[#004CE5] text-white text-[15px] font-bold font-['MiSans']">
                我们
              </span>
            )}
          </div>
        ),
      )}
      <div className="shrink-0 px-5 h-[40px] flex items-center border-t border-white/[0.06]">
        <span className="text-[16px] text-zinc-500 font-['MiSans']">{data.totalNote}</span>
      </div>
    </div>
  );
}

export function BeforeAfterStrip({ data, hero }) {
  const afterSize = hero ? 'text-[64px]' : 'text-[46px]';
  return (
    <div className="shrink-0 flex items-center gap-5">
      <div className="flex flex-col gap-1">
        <span className="text-[16px] text-zinc-500 font-['MiSans']">投放前 · 6月28日</span>
        <span className={`${hero ? 'text-[40px]' : 'text-[32px]'} font-bold text-zinc-500 line-through decoration-zinc-600 decoration-2 font-['MiSans'] leading-none`}>
          未提及
        </span>
      </div>
      <ArrowRight className={`${hero ? 'w-11 h-11' : 'w-8 h-8'} text-[#4ADE80] shrink-0`} strokeWidth={3} />
      <div className="flex flex-col gap-1">
        <span className="text-[16px] text-zinc-500 font-['MiSans']">投放后 · 7月6日</span>
        <span className={`${afterSize} font-black text-[#4ADE80] font-['MiSans'] leading-none drop-shadow-[0_0_18px_rgba(74,222,128,0.35)]`}>
          {data.afterLabel}
        </span>
      </div>
    </div>
  );
}

export function Page_SkyworthSpeakWithActions_A() {
  return (
    <SlideLayout title="用行动说话" subtitle={SUBTITLE} hideHeaderLeft>
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex gap-6">
        {/* 主词条：C 位大卡 */}
        <div className="flex-[1.5] min-w-0 flex flex-col gap-5 rounded-[1.5rem] border-2 border-[#004CE5]/50 bg-gradient-to-br from-[#04123a]/80 to-zinc-950/40 p-7 shadow-[0_0_60px_rgba(0,76,229,0.15)]">
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#004CE5] text-white text-[16px] font-black tracking-[0.12em] font-['MiSans']">
              {PRIMARY.tag}
            </span>
            <PlatformChip>{PRIMARY.platform}</PlatformChip>
          </div>
          <h3 className="shrink-0 text-[50px] font-black text-white font-['MiSans'] leading-tight tracking-tight">
            {PRIMARY.keyword}
          </h3>
          <BeforeAfterStrip data={PRIMARY} hero />
          <div className="flex-1 min-h-0 flex gap-4">
            <RankList data={PRIMARY} />
            <CitePanel data={PRIMARY} className="w-[45%] shrink-0" />
          </div>
          <p className="shrink-0 text-[21px] font-bold text-[#8FBFFF] font-['MiSans'] leading-snug">
            ✦ {PRIMARY.highlight}
          </p>
        </div>

        {/* 次词条：右侧小卡 */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 rounded-[1.5rem] border border-zinc-800/80 bg-zinc-950/40 p-6">
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-white/10 text-zinc-300 text-[15px] font-black tracking-[0.12em] font-['MiSans']">
              {SECONDARY.tag}
            </span>
            <PlatformChip>{SECONDARY.platform}</PlatformChip>
          </div>
          <h3 className="shrink-0 text-[36px] font-black text-white font-['MiSans'] leading-tight tracking-tight">
            {SECONDARY.keyword}
          </h3>
          <BeforeAfterStrip data={SECONDARY} />
          <CitePanel data={SECONDARY} className="flex-1" />
          <p className="shrink-0 text-[18px] font-bold text-zinc-400 font-['MiSans'] leading-snug">
            ✦ {SECONDARY.highlight}
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthSpeakWithActions_A.hideHeader = true;

/* ═══════════════════════════════════════════════════════════
   版本 B · 截图实证版（监测系统真实截图 + 盖章式结论）
   ═══════════════════════════════════════════════════════════ */

function EvidenceBand({ data, hero }) {
  return (
    <div
      className={`min-h-0 flex rounded-[1.5rem] overflow-hidden ${
        hero
          ? 'flex-[1.72] border-2 border-[#004CE5]/50 bg-gradient-to-br from-[#04123a]/80 to-zinc-950/40'
          : 'flex-1 border border-zinc-800/80 bg-zinc-950/40'
      }`}
    >
      {/* 左：结论区 */}
      <div className={`shrink-0 flex flex-col justify-center gap-3 ${hero ? 'w-[640px] p-8' : 'w-[640px] px-8 py-4'}`}>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-md text-[15px] font-black tracking-[0.12em] font-['MiSans'] ${hero ? 'bg-[#004CE5] text-white' : 'bg-white/10 text-zinc-300'}`}>
            {data.tag}
          </span>
          <PlatformChip>{data.platform}</PlatformChip>
          <DateChip>6月28日 → 7月6日</DateChip>
        </div>
        <h3 className={`${hero ? 'text-[44px]' : 'text-[32px]'} font-black text-white font-['MiSans'] leading-tight tracking-tight`}>
          {data.keyword}
        </h3>
        <div className="flex items-end gap-5">
          <span className={`${hero ? 'text-[34px]' : 'text-[26px]'} font-bold text-zinc-500 line-through decoration-2 font-['MiSans'] leading-none pb-2`}>
            未提及
          </span>
          <ArrowRight className={`${hero ? 'w-9 h-9' : 'w-7 h-7'} text-[#4ADE80] shrink-0 mb-2`} strokeWidth={3} />
          <span
            className={`${hero ? 'text-[110px]' : 'text-[64px]'} font-black text-[#4ADE80] font-['Montserrat'] leading-[0.9] tracking-tight drop-shadow-[0_0_24px_rgba(74,222,128,0.35)]`}
          >
            {data.no}
          </span>
        </div>
        <p className={`${hero ? 'text-[21px]' : 'text-[18px]'} font-bold ${hero ? 'text-[#8FBFFF]' : 'text-zinc-400'} font-['MiSans'] leading-snug`}>
          ✦ {data.highlight}
        </p>
        {hero && (
          <div className="flex flex-col gap-1 mt-1">
            {data.articles.map((a, i) => (
              <span key={i} className="text-[16px] text-zinc-500 font-['MiSans'] truncate">
                被引用的投放文章：{a}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 右：监测系统截图 */}
      <div className="flex-1 min-w-0 relative bg-white m-3 ml-0 rounded-xl overflow-hidden">
        <img src={data.screenshot} alt={`${data.keyword} 监测截图`} className="absolute inset-0 w-full h-full object-cover object-top" />
        <span className="absolute bottom-2.5 right-3 px-3 py-1 rounded-md bg-black/70 text-white text-[14px] font-semibold font-['MiSans']">
          GEO ONE 监测系统实拍 · 7月6日
        </span>
      </div>
    </div>
  );
}

export function Page_SkyworthSpeakWithActions_B() {
  return (
    <SlideLayout title="用行动说话" subtitle={SUBTITLE} hideHeaderLeft>
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex flex-col gap-5">
        <EvidenceBand data={PRIMARY} hero />
        <EvidenceBand data={SECONDARY} />
      </div>
    </SlideLayout>
  );
}
Page_SkyworthSpeakWithActions_B.hideHeader = true;

/* ═══════════════════════════════════════════════════════════
   版本 C · 前后时空对比版（左灰「投放前」/ 右蓝「投放后」）
   ═══════════════════════════════════════════════════════════ */

const SPLIT = '34%';

function TimeLane({ data, hero }) {
  return (
    <div className={`relative min-h-0 flex ${hero ? 'flex-[1.5]' : 'flex-1'}`}>
      {/* 左：投放前 */}
      <div className="shrink-0 flex flex-col justify-center gap-3 px-10" style={{ width: SPLIT }}>
        <span className={`${hero ? 'text-[32px]' : 'text-[26px]'} font-bold text-zinc-300 font-['MiSans'] leading-snug`}>
          {data.keyword}
        </span>
        <span className={`${hero ? 'text-[64px]' : 'text-[44px]'} font-black text-zinc-600 font-['MiSans'] leading-none`}>
          未提及
        </span>
        <span className="text-[18px] text-zinc-600 font-['MiSans']">{data.platform}的答案里查无创维</span>
      </div>

      {/* 穿越分界线的箭头 */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20" style={{ left: SPLIT }}>
        <div className={`${hero ? 'w-[76px] h-[76px]' : 'w-[60px] h-[60px]'} rounded-full bg-gradient-to-br from-[#2E6BFF] to-[#0B2E80] border border-blue-300/40 shadow-[0_0_36px_rgba(0,76,229,0.6)] flex items-center justify-center`}>
          <ArrowRight className={`${hero ? 'w-10 h-10' : 'w-8 h-8'} text-white`} strokeWidth={3} />
        </div>
      </div>

      {/* 右：投放后 */}
      <div className="flex-1 min-w-0 flex items-center gap-8 pl-20 pr-8">
        <span
          className={`${hero ? 'text-[130px]' : 'text-[84px]'} font-black text-white font-['MiSans'] leading-none tracking-tight shrink-0 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]`}
        >
          {data.afterLabel}
        </span>
        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
          <span className={`inline-flex max-w-fit items-center px-3.5 py-1 rounded-full ${hero ? 'bg-[#4ADE80] text-[#03240f]' : 'bg-[#4ADE80]/20 text-[#4ADE80] border border-[#4ADE80]/40'} text-[19px] font-black font-['MiSans']`}>
            {hero ? '提升至榜首' : '冲进前三'}
          </span>
          <span className={`${hero ? 'text-[24px]' : 'text-[20px]'} font-bold text-white/90 font-['MiSans'] leading-snug`}>
            {data.highlight}
          </span>
          <span className="text-[17px] text-white/50 font-['MiSans']">{data.platform} · {data.totalNote.replace('…… ', '')}</span>
        </div>
        <CitePanel data={data} className={`shrink-0 ${hero ? 'w-[500px] self-stretch my-6' : 'w-[440px] self-stretch my-4'}`} />
      </div>
    </div>
  );
}

export function Page_SkyworthSpeakWithActions_C() {
  return (
    <SlideLayout title="用行动说话" subtitle={SUBTITLE} hideHeaderLeft>
      <div className="w-full h-full relative z-10 select-none animate-fadeIn rounded-[1.75rem] border border-white/10 overflow-hidden">
        {/* 背景分区 */}
        <div className="absolute inset-y-0 left-0 bg-zinc-900/70" style={{ width: SPLIT }} />
        <div className="absolute inset-y-0 right-0 bg-gradient-to-r from-[#051540] to-[#0a2a7a]/70" style={{ left: SPLIT }} />
        <div className="absolute inset-y-0 w-[2px] bg-white/25 z-10" style={{ left: SPLIT }} />

        {/* 两个时空的表头 */}
        <div className="absolute top-0 left-0 h-[72px] flex items-center justify-center gap-3 z-10" style={{ width: SPLIT }}>
          <span className="text-[22px] font-bold text-zinc-500 font-['MiSans'] tracking-[0.1em]">投放前 · 6月28日</span>
        </div>
        <div className="absolute top-0 right-0 h-[72px] flex items-center justify-center gap-3 z-10" style={{ left: SPLIT }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="text-[22px] font-bold text-white font-['MiSans'] tracking-[0.1em]">投放后 · 7月6日（仅隔 8 天）</span>
        </div>

        {/* 两条词条泳道 */}
        <div className="absolute inset-x-0 top-[72px] bottom-0 flex flex-col">
          <TimeLane data={PRIMARY} hero />
          <div className="shrink-0 h-px bg-white/10 mx-10 z-10" />
          <TimeLane data={SECONDARY} />
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthSpeakWithActions_C.hideHeader = true;

/* ═══════════════════════════════════════════════════════════
   版本 D · 海报大字版（一个数字说明一切）
   ═══════════════════════════════════════════════════════════ */

export function Page_SkyworthSpeakWithActions_D() {
  return (
    <SlideLayout title="用行动说话" subtitle={SUBTITLE} hideHeaderLeft>
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#004CE5]/10 blur-[180px] left-40 top-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex items-center">
        {/* 主词条：巨型数字 */}
        <div className="flex-[1.62] min-w-0 flex flex-col justify-center gap-5 pr-16">
          <div className="flex items-center gap-3">
            <PlatformChip>{PRIMARY.platform}</PlatformChip>
            <DateChip>6月28日 未提及</DateChip>
            <ArrowRight className="w-5 h-5 text-zinc-500" strokeWidth={3} />
            <DateChip>7月6日 榜首</DateChip>
          </div>
          <h3 className="text-[54px] font-black text-white font-['MiSans'] leading-tight tracking-tight">
            {PRIMARY.keyword}
          </h3>
          <div
            className="font-black font-['Montserrat'] leading-[0.85] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-[#9CC2FF] to-[#2E6BFF] drop-shadow-[0_0_50px_rgba(0,76,229,0.45)]"
            style={{ fontSize: '330px' }}
          >
            {PRIMARY.no}
          </div>
          <p className="text-[24px] font-bold text-[#8FBFFF] font-['MiSans'] leading-snug">
            {PRIMARY.highlight}（共 16 个型号）
          </p>
        </div>

        <div className="self-stretch w-px bg-white/15 shrink-0" />

        {/* 次词条：右侧竖排小结 */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-4 pl-16">
          <div className="flex items-center gap-3">
            <PlatformChip>{SECONDARY.platform}</PlatformChip>
            <DateChip>同期战果</DateChip>
          </div>
          <h3 className="text-[36px] font-black text-white font-['MiSans'] leading-tight tracking-tight">
            {SECONDARY.keyword}
          </h3>
          <div className="flex items-center gap-4">
            <span className="text-[26px] font-bold text-zinc-500 line-through decoration-2 font-['MiSans']">未提及</span>
            <ArrowDown className="w-7 h-7 text-[#4ADE80] -rotate-90" strokeWidth={3} />
            <span className="text-[120px] font-black text-white font-['Montserrat'] leading-[0.9] tracking-tight">
              {SECONDARY.no}
            </span>
          </div>
          <p className="text-[20px] font-bold text-zinc-400 font-['MiSans'] leading-snug">
            {SECONDARY.highlight}
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthSpeakWithActions_D.hideHeader = true;

export default Page_SkyworthSpeakWithActions_A;
