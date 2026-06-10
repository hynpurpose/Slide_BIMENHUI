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
import Page_GEOKpiSettingBrand from '../pages/Page_GEOKpiSettingBrand';
import Page_GEOKpiVerify from '../pages/Page_GEOKpiVerify';
import Page_GEOWordSelectionOther from '../pages/Page_GEOWordSelectionOther';
import Page_GEOWordSelectionRule from '../pages/Page_GEOWordSelectionRule';
import Page_GEOServiceProviderSelection from '../pages/Page_GEOServiceProviderSelection';

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
  {
    type: 'chapter',
    title: 'GEO闭门会',
    subtitle: 'GEO OPTIMIZATION',
    coverTitle: '为什么我们团队\n在2024年\n全力押注 GEO',
    coverSubtitle: 'Why\nGEO\nMatters?',
    coverLabel: '——为什么要做GEO?',
    backgroundImage: ''
  },
  { type: 'section', title: '一级标题1' },
  { type: 'page', title: '闭门会海报', component: Page_FullImageIntro, hideHeader: true },
  { type: 'page', title: '开场闭门会', component: Page_ClosedMeetingIntro, hideHeader: true },
  { type: 'page', title: '搜索入口趋势', component: Page_SearchEntryTrend, hideHeader: true },
  { type: 'page', title: '销售转化率对比', component: Page_GEOSalesConversion, hideHeader: true },
  { type: 'page', title: '线下销售反馈的真实现象', component: Page_GEOSalesFeedback, hideHeader: true },
  // { type: 'page', title: '销售转化案例', component: Page_GEOCaseStudies, hideHeader: true },
  { type: 'page', title: '服务商测试结果差异原因', component: Page_GEOTestDifference, hideHeader: true },
  { type: 'page', title: '服务商数据造假对比说明', component: Page_GEOTestDifferenceIntro, hideHeader: true },
  { type: 'page', title: 'GEO选词与选平台建议', component: Page_GEOPlatformSelection, hideHeader: true },
  { type: 'page', title: 'GEO选词其他做法', component: Page_GEOWordSelectionOther, hideHeader: true },
  { type: 'page', title: 'GEO选词核心法则', component: Page_GEOWordSelectionRule, hideHeader: true },
  { type: 'page', title: '品牌方怎么定 KPI？', component: Page_GEOKpiSetting, hideHeader: true },
  { type: 'page', title: '二线品牌怎么定KPI？', component: Page_GEOKpiSettingBrand, hideHeader: true },
  { type: 'page', title: '如何验收效果？', component: Page_GEOKpiVerify, hideHeader: true },
  { type: 'page', title: '如何选出靠谱的服务商？', component: Page_GEOServiceProviderSelection, hideHeader: true },
];
