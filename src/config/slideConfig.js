import Page_ProposalNav from '../pages/Page_ProposalNav';
import Page_SWOTAnalysis from '../pages/Page_SWOTAnalysis';
import Page_SWOTStrategy from '../pages/Page_SWOTStrategy';
import Page_ClosedMeetingIntro from '../pages/Page_ClosedMeetingIntro';
import Page_FullImageIntro from '../pages/Page_FullImageIntro';
import Page_SearchEntryTrend from '../pages/Page_SearchEntryTrend';
import Page_SearchEntryWhyAI from '../pages/Page_SearchEntryWhyAI';
import Page_GEOSalesConversionIntro from '../pages/Page_GEOSalesConversionIntro';
import Page_GEOSalesConversion from '../pages/Page_GEOSalesConversion';
import Page_GEOSalesFeedback from '../pages/Page_GEOSalesFeedback';
import Page_GEOCaseStudies from '../pages/Page_GEOCaseStudies';
import Page_GEOQuestionsOverview from '../pages/Page_GEOQuestionsOverview';
import Page_GEOTestDifferenceIntro from '../pages/Page_GEOTestDifferenceIntro';
import Page_GEOTestDifference from '../pages/Page_GEOTestDifference';
import Page_GEOPlatformSelection from '../pages/Page_GEOPlatformSelection';
import Page_GEOWordSelection from '../pages/Page_GEOWordSelection';
import Page_GEOKpiSetting from '../pages/Page_GEOKpiSetting';

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

  // ——— 篇章1: GEO闭门会 ———
  { type: 'chapter', title: 'GEO闭门会', subtitle: 'GEO OPTIMIZATION', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '闭门会海报', component: Page_FullImageIntro, hideHeader: true },
  { type: 'page', title: '开场闭门会', component: Page_ClosedMeetingIntro, hideHeader: true },
  { type: 'page', title: '搜索入口趋势', component: Page_SearchEntryTrend, hideHeader: true },
  { type: 'page', title: 'AI深入人心原因', component: Page_SearchEntryWhyAI, hideHeader: true },
  { type: 'page', title: 'GEO是否带来销售转化', component: Page_GEOSalesConversionIntro, hideHeader: true },
  { type: 'page', title: '销售转化率对比', component: Page_GEOSalesConversion, hideHeader: true },
  { type: 'page', title: '线下销售反馈的真实现象', component: Page_GEOSalesFeedback, hideHeader: true },
  { type: 'page', title: '销售转化案例', component: Page_GEOCaseStudies, hideHeader: true },
  { type: 'page', title: 'GEO该怎么做', component: Page_GEOQuestionsOverview, hideHeader: true },
  { type: 'page', title: '服务商数据造假对比说明', component: Page_GEOTestDifferenceIntro, hideHeader: true },
  { type: 'page', title: '服务商测试结果差异原因', component: Page_GEOTestDifference, hideHeader: true },
  { type: 'page', title: 'GEO选词与选平台建议', component: Page_GEOPlatformSelection, hideHeader: true },
  { type: 'page', title: 'GEO选词建议', component: Page_GEOWordSelection, hideHeader: true },
  { type: 'page', title: 'GEO设定合理KPI建议', component: Page_GEOKpiSetting, hideHeader: true },

];

