import Page_ProposalNav from '../pages/Page_ProposalNav';
import Page_SWOTAnalysis from '../pages/Page_SWOTAnalysis';
import Page_SWOTStrategy from '../pages/Page_SWOTStrategy';
import Page_ClosedMeetingIntro from '../pages/Page_ClosedMeetingIntro';
import Page_SearchEntryTrend from '../pages/Page_SearchEntryTrend';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: '方太冰箱',
    subtitle: 'GEO\n年度规划方案',
    date: 'March 2026',
  },

  {
    type: 'toc',
    title: '方案目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO SERVICE GUIDE',
  },

  // ——— 篇章1: 品牌信息调研 ———
  { type: 'chapter', title: '品牌信息调研', subtitle: 'BRAND DISCOVERY', backgroundImage: '/' },
  { type: 'section', title: '目标行业信息' },
  { type: 'page', title: '冰箱是什么？', components: [Page_ProposalNav, Page_SWOTAnalysis] },
  { type: 'page', title: '冰箱卖给谁？', component: Page_SWOTAnalysis },


  // ——— 篇章2: GEO体检报告 ———
  { type: 'chapter', title: 'GEO体检报告', subtitle: 'GEO HEALTH CHECK', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },

  // ——— 篇章3: GEO优化 ———
  { type: 'chapter', title: 'GEO优化', subtitle: 'GEO OPTIMIZATION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '页面1', component: Page_SWOTStrategy },
  { type: 'page', title: '开场闭门会', component: Page_ClosedMeetingIntro, hideHeader: true },
  { type: 'page', title: '搜索入口趋势', component: Page_SearchEntryTrend, hideHeader: true },

];
