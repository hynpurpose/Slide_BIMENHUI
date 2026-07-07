import React, { useState } from 'react';
import { ArrowDown, Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

/* ── 「用行动说话」两个核心词条的数据 ──
   来源：创维GEO投放效果TOP20（7月7日导出）+ GEO ONE 监测截图。
   页面组件见 Page_SkyworthSpeakWithActions_Single.jsx（截图为核心的合并版）。 */

export const PRIMARY = {
  tag: '核心战果 01',
  keyword: '超薄电视品牌排行榜',
  platform: '通义千问',
  afterLabel: '第 1 名',
  no: 'NO.1',
  screenshot: '/images/speak_with_actions_case1.png',
  citeShot: '/images/speak_with_actions_case1_cite.png',
  // 高清版「对话 + 排名及引用来源」合成图（1771x2160，同事更新于 d027a8e）
  fullShot: '/images/speak_with_actions_case1.png',
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
  fullShot: '/images/speak_with_actions_case2.png',
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

const CASES = [
  {
    id: '1',
    keyword: '超薄电视品牌排行榜',
    before: '未提及',
    after: '第一名',
    image: '/images/speak_with_actions_case1.png',
  },
  {
    id: '2',
    keyword: '口碑好的电视推荐',
    before: '未提及',
    after: '第三名',
    image: '/images/speak_with_actions_case2.png',
  },
];

function ImageSlot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    const filename = src ? src.split('/').pop() : 'speak_with_actions_case1.png';
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white border border-dashed border-zinc-300 rounded-2xl gap-2 p-4 select-none text-center">
        <ImageIcon className="w-10 h-10 text-zinc-400 opacity-60" strokeWidth={1.5} />
        <span className="text-zinc-500 text-[18px] font-medium font-['MiSans']">案例截图</span>
        <span className="text-zinc-400 text-[12px] font-sans">请放入图片：public/images/{filename}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain object-left"
      onError={() => setFailed(true)}
    />
  );
}

function MentionBlock({ phase, text }) {
  const isBefore = phase === 'before';
  const label = isBefore ? '优化前排名：' : '我们优化后：';

  return (
    <div
      className={`w-full rounded-xl px-4 py-4 flex flex-row flex-nowrap justify-center items-center ${isBefore
        ? 'bg-zinc-900/40 border border-zinc-800/70'
        : 'bg-[#004CE5]/8 border border-[#004CE5]/25'
      }`}
    >
      <span className="text-[30px] leading-none font-bold font-['MiSans'] text-white whitespace-nowrap">
        {label}
      </span>
      <span className="text-[30px] leading-none font-black font-['MiSans'] text-white whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

function CaseCard({ data }) {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-row bg-zinc-950/35 border border-zinc-800/70 rounded-[1.25rem] overflow-hidden">
      {/* Left Column: Content (Fixed Narrow Width) */}
      <div className="w-[320px] shrink-0 flex flex-col justify-between p-6 pr-3">
        {/* Title */}
        <div className="shrink-0 flex flex-col gap-2 mb-4">
          <span className="text-[28px] font-black text-white tracking-wide max-w-fit">
            <span className="font-['MiSans']">词条</span>
            <span className="font-['Montserrat']">{data.id}</span>
          </span>
          <h3 className="text-[28px] font-bold text-white tracking-tight font-['MiSans'] leading-snug">
            {data.keyword}
          </h3>
        </div>

        {/* Before / After Stack */}
        <div className="flex-grow flex flex-col justify-center gap-3">
          <MentionBlock phase="before" text={data.before} />
          <div className="shrink-0 flex items-center justify-center h-8">
            <ArrowDown
              className="w-7 h-7 text-white/60 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              strokeWidth={3}
            />
          </div>
          <MentionBlock phase="after" text={data.after} />
        </div>
      </div>

      {/* Right Column: Tall Image Slot (Flex-Grow, White Background) */}
      <div className="flex-grow min-w-0 h-full bg-white pl-2 pr-3 overflow-hidden flex items-stretch justify-start">
        <ImageSlot src={data.image} alt={`${data.keyword}案例截图`} />
      </div>
    </div>
  );
}

export default function Page_SkyworthSpeakWithActions() {
  return (
    <SlideLayout title="用行动说话" subtitle="优化成功的两个词条" hideHeaderLeft={true}>
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex gap-6">
        {CASES.map((item) => (
          <CaseCard key={item.id} data={item} />
        ))}
      </div>
    </SlideLayout>
  );
}

Page_SkyworthSpeakWithActions.hideHeader = true;
