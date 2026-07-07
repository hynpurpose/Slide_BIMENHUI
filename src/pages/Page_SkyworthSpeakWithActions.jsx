import React from 'react';

/* ── 「用行动说话」两个核心词条的数据 ──
   来源：创维GEO投放效果TOP20（7月7日导出）+ GEO ONE 监测截图。
   页面组件见 Page_SkyworthSpeakWithActions_Single.jsx（截图为核心的合并版）。 */

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
