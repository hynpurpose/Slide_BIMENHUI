import Page_ProposalNav from '../pages/Page_ProposalNav';
import Page_SWOTAnalysis from '../pages/Page_SWOTAnalysis';
import Page_SWOTStrategy from '../pages/Page_SWOTStrategy';
import Page_ClosedMeetingIntro from '../pages/Page_ClosedMeetingIntro';
import Page_ClosedMeetingWhyGEO from '../pages/Page_ClosedMeetingWhyGEO';
import Page_ClosedMeetingOutline from '../pages/Page_ClosedMeetingOutline';
import Page_FullImageIntro from '../pages/Page_FullImageIntro';
import Page_SearchEntryTrend from '../pages/Page_SearchEntryTrend';
import Page_ClosedMeetingTrendValidation from '../pages/Page_ClosedMeetingTrendValidation';
import Page_ClosedMeetingDecisionImpact from '../pages/Page_ClosedMeetingDecisionImpact';
import Page_ClosedMeetingConversionIntro from '../pages/Page_ClosedMeetingConversionIntro';
import Page_SearchEntryWhyAI from '../pages/Page_SearchEntryWhyAI';
import Page_GEOSalesConversionIntro from '../pages/Page_GEOSalesConversionIntro';
import Page_GEOSalesConversionTrend from '../pages/Page_GEOSalesConversionTrend';
import Page_GEOSalesConversion from '../pages/Page_GEOSalesConversion';
import Page_GEOSalesFeedback from '../pages/Page_GEOSalesFeedback';
import Page_GEOSalesFeedbackCase from '../pages/Page_GEOSalesFeedbackCase';
import Page_GEOCaseStudies from '../pages/Page_GEOCaseStudies';
import Page_GEOQuestionsOverview from '../pages/Page_GEOQuestionsOverview';
import Page_GEOTestDifferenceIntro from '../pages/Page_GEOTestDifferenceIntro';
import Page_GEOTestDifferenceTransition from '../pages/Page_GEOTestDifferenceTransition';
import Page_GEOResponseTransition from '../pages/Page_GEOResponseTransition';
import Page_GEOTestDifference from '../pages/Page_GEOTestDifference';
import Page_GEOPlatformSelection from '../pages/Page_GEOPlatformSelection';
import Page_GEOWordSelection from '../pages/Page_GEOWordSelection';
import Page_GEOKpiSetting from '../pages/Page_GEOKpiSetting';
import Page_GEOKpiReportTransition from '../pages/Page_GEOKpiReportTransition';
import Page_GEOKpiSettingTransition from '../pages/Page_GEOKpiSettingTransition';
import Page_GEOKpiSettingBrand from '../pages/Page_GEOKpiSettingBrand';
import Page_GEOKpiVerifyBeforeTransition from '../pages/Page_GEOKpiVerifyBeforeTransition';
import Page_GEOKpiVerify from '../pages/Page_GEOKpiVerify';
import Page_GEOKpiVerifyDetail from '../pages/Page_GEOKpiVerifyDetail';
import Page_GEOKpiVerifyTransition from '../pages/Page_GEOKpiVerifyTransition';
import Page_GEOWordSelectionOther from '../pages/Page_GEOWordSelectionOther';
import Page_GEOWordSelectionRule from '../pages/Page_GEOWordSelectionRule';
import Page_GEOWordSelectionRuleCase from '../pages/Page_GEOWordSelectionRuleCase';
import Page_GEOWordSelectionRuleDataCase from '../pages/Page_GEOWordSelectionRuleDataCase';
import Page_GEOServiceProviderSelection from '../pages/Page_GEOServiceProviderSelection';
import Page_GEOServiceProviderSelectionTransition from '../pages/Page_GEOServiceProviderSelectionTransition';

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
  { type: 'page', title: '闭门会分享大纲', component: Page_ClosedMeetingOutline, hideHeader: true },
  { type: 'page', title: '为什么做GEO过渡页', component: Page_ClosedMeetingWhyGEO, hideHeader: true },
  { type: 'page', title: '搜索入口趋势', component: Page_SearchEntryTrend, hideHeader: true },
  { type: 'page', title: '趋势验证过渡页', component: Page_ClosedMeetingTrendValidation, hideHeader: true },
  { type: 'page', title: '决策影响过渡页', component: Page_ClosedMeetingDecisionImpact, hideHeader: true },

  { type: 'page', title: '能否带来转化过渡页', component: Page_ClosedMeetingConversionIntro, hideHeader: true },
  { type: 'page', title: '各渠道获客趋势', component: Page_GEOSalesConversionTrend, hideHeader: true },
  { type: 'page', title: '销售转化率对比', component: Page_GEOSalesConversion, hideHeader: true },
  { type: 'page', title: '线下销售反馈的真实现象', component: Page_GEOSalesFeedback, hideHeader: true },
  { type: 'page', title: '线下销售反馈实测案例', component: Page_GEOSalesFeedbackCase, hideHeader: true },

  { type: 'page', title: '测试差异过渡页', component: Page_GEOTestDifferenceTransition, hideHeader: true },
  { type: 'page', title: '服务商测试结果差异原因', component: Page_GEOTestDifference, hideHeader: true },
  { type: 'page', title: '服务商数据造假对比说明', component: Page_GEOTestDifferenceIntro, hideHeader: true },
  { type: 'page', title: '品牌应对方式过渡页', component: Page_GEOResponseTransition, hideHeader: true },

  { type: 'page', title: 'GEO选词与选平台建议', component: Page_GEOPlatformSelection, hideHeader: true },
  { type: 'page', title: 'GEO选词其他做法', component: Page_GEOWordSelectionOther, hideHeader: true },
  { type: 'page', title: 'GEO选词核心法则', component: Page_GEOWordSelectionRule, hideHeader: true },
  { type: 'page', title: 'GEO选词核心法则案例', component: Page_GEOWordSelectionRuleCase, hideHeader: true },
  { type: 'page', title: 'GEO选词核心法则案例二', component: Page_GEOWordSelectionRuleDataCase, hideHeader: true },

  { type: 'page', title: '先做 GEO 体检报告过渡页', component: Page_GEOKpiReportTransition, hideHeader: true },
  { type: 'page', title: '品牌方怎么定 KPI 过渡页', component: Page_GEOKpiSettingTransition, hideHeader: true },
  { type: 'page', title: '品牌方怎么定 KPI？', component: Page_GEOKpiSetting, hideHeader: true },
  { type: 'page', title: '二线品牌怎么定KPI？', component: Page_GEOKpiSettingBrand, hideHeader: true },

  { type: 'page', title: '如何验收效果过渡页', component: Page_GEOKpiVerifyBeforeTransition, hideHeader: true },
  { type: 'page', title: '如何验收效果？', component: Page_GEOKpiVerify, hideHeader: true },
  { type: 'page', title: '人工抽查验收', component: Page_GEOKpiVerifyDetail, hideHeader: true },
  { type: 'page', title: '效果验证过渡页', component: Page_GEOKpiVerifyTransition, hideHeader: true },

  { type: 'page', title: '如何选出靠谱的服务商？', component: Page_GEOServiceProviderSelection, hideHeader: true },
  { type: 'page', title: '如何选出靠谱的服务商过渡页', component: Page_GEOServiceProviderSelectionTransition, hideHeader: true },
];
