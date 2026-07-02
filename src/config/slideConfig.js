import Page_SkyworthIntro from '../pages/Page_SkyworthIntro';
import Page_SkyworthDecisionAnalysis from '../pages/Page_SkyworthDecisionAnalysis';
import Page_SkyworthPositioningShift from '../pages/Page_SkyworthPositioningShift';
import Page_SkyworthBrandResearch from '../pages/Page_SkyworthBrandResearch';
import Page_SkyworthResearchConclusions from '../pages/Page_SkyworthResearchConclusions';
import Page_WallpaperVsConventional from '../pages/Page_WallpaperVsConventional';
import Page_SkyworthVsCompetitor from '../pages/Page_SkyworthVsCompetitor';
import Page_SkyworthFiveModels from '../pages/Page_SkyworthFiveModels';
import Page_SkyworthKeywordLogic from '../pages/Page_SkyworthKeywordLogic';
import Page_GEOWordSelectionOther from '../pages/Page_GEOWordSelectionOther';
import Page_GEOWordSelectionOther2 from '../pages/Page_GEOWordSelectionOther2';
import Page_SkyworthAiProcess from '../pages/Page_SkyworthAiProcess';
import Page_SkyworthShadowAlgorithm from '../pages/Page_SkyworthShadowAlgorithm';
import Page_CompanyIntro from '../pages/Page_CompanyIntro';
import Page_ServiceClients from '../pages/Page_ServiceClients';
import Page_CaseStudy_Double_Combined from '../pages/Page_CaseStudy_Double_Combined';
import Page_CaseStudy_Double_Combined_2 from '../pages/Page_CaseStudy_Double_Combined_2';
import Page_CaseStudy_Double_Combined_3 from '../pages/Page_CaseStudy_Double_Combined_3';
import Page_TeamEndorsement from '../pages/Page_TeamEndorsement';
import Page_CompanyArchitecture from '../pages/Page_CompanyArchitecture';
import Page_TeamIntro from '../pages/Page_TeamIntro';
import Page_CoreCapabilities from '../pages/Page_CoreCapabilities';
import Page_GeoMonitorIntro from '../pages/Page_GeoMonitorIntro';
import Page_GeoMonitorModules from '../pages/Page_GeoMonitorModules';
import Page_GeoMonitor from '../pages/Page_GeoMonitor';
import Page_QuantitativeModel from '../pages/Page_QuantitativeModel';
import Page_ContentAgentIntro from '../pages/Page_ContentAgentIntro';
import Page_ContentAgent from '../pages/Page_ContentAgent';
import Page_UserCommentAnalysis from '../pages/Page_UserCommentAnalysis';
import Page_OtherContentApproach from '../pages/Page_OtherContentApproach';
import Page_HumanAiRatioApproach from '../pages/Page_HumanAiRatioApproach';
import Page_ContentQualityValue from '../pages/Page_ContentQualityValue';
import Page_SkyworthContentDirection from '../pages/Page_SkyworthContentDirection';
import Page_GeoContentPrinciples from '../pages/Page_GeoContentPrinciples';
import Page_DeliveryShortTerm from '../pages/Page_DeliveryShortTerm';
import Page_DeliveryLongTerm from '../pages/Page_DeliveryLongTerm';

export const slideConfig = [
  // ——— 封面 & 目录 ———
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO索引未来',
    subtitle: '创维电视\nGEO规划方案',
    date: 'July 2026',
  },

  {
    type: 'toc',
    title: '方案目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO SERVICE GUIDE',
  },

  // ══════════════════════════════════════════════════════════
  // ——— 一、消费者视角的AI brand定位 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '消费者视角的\nAI品牌定位', subtitle: 'AI BRAND POSITIONING', backgroundImage: '' },

  { type: 'section', title: '产品信息调研' },
  { type: 'page', title: '没做品牌调研的“坑”', component: Page_SkyworthIntro, hideHeader: true },
  { type: 'page', title: '创维壁纸电视用户决策分析', component: Page_SkyworthDecisionAnalysis, hideHeader: true },
  { type: 'page', title: '策略转变', component: Page_SkyworthPositioningShift, hideHeader: true },

  { type: 'section', title: '我们的方式' },
  { type: 'page', title: '我们怎么调研品牌', component: Page_SkyworthBrandResearch, hideHeader: true },


  { type: 'section', title: '核心结论' },
  { type: 'page', title: '品牌调研报告核心结论', component: Page_SkyworthResearchConclusions, hideHeader: true },
  { type: 'page', title: '壁纸电视 VS 常规电视', component: Page_WallpaperVsConventional, hideHeader: true },
  { type: 'page', title: '创维壁纸电视 VS 竞品壁纸电视', component: Page_SkyworthVsCompetitor, hideHeader: true },
  { type: 'page', title: '创维五款壁纸电视的区别', component: Page_SkyworthFiveModels, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 二、关键词体系策略 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '关键词体系策略', subtitle: 'KEYWORDS SYSTEM STRATEGY', backgroundImage: '' },

  { type: 'section', title: '词条分类逻辑' },
  { type: 'page', title: '我们的词条分类逻辑', component: Page_SkyworthKeywordLogic, hideHeader: true },

  { type: 'section', title: '如何选词条' },
  { type: 'page', title: '市场上其他做法（一）：AI批量生成', component: Page_GEOWordSelectionOther, hideHeader: true },
  { type: 'page', title: '市场上其他做法（二）：复制百度、社媒热词', component: Page_GEOWordSelectionOther2, hideHeader: true },
  { type: 'page', title: 'AI 如何处理用户问题', component: Page_SkyworthAiProcess, hideHeader: true },
  { type: 'page', title: '影子算法', component: Page_SkyworthShadowAlgorithm, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 三、现状诊断报告 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '现状诊断报告', subtitle: 'DIAGNOSTIC REPORT', backgroundImage: '' },

  // ══════════════════════════════════════════════════════════
  // ——— 四、核心优化策略 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '核心优化策略', subtitle: 'CORE OPTIMIZATION STRATEGY', backgroundImage: '' },

  // ══════════════════════════════════════════════════════════
  // ——— 五、内容策略 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '内容策略', subtitle: 'CONTENT STRATEGY', backgroundImage: '' },

  { type: 'section', title: '怎么做内容' },
  { type: 'page', title: '市面上其他做法', component: Page_OtherContentApproach, hideHeader: true },
  { type: 'page', title: '我们的策略', component: Page_HumanAiRatioApproach, hideHeader: true },
  { type: 'page', title: '优质内容的复利效应', component: Page_ContentQualityValue, hideHeader: true },

  { type: 'section', title: '创维的内容怎么做' },
  { type: 'page', title: '创维定制内容方向规划', component: Page_SkyworthContentDirection, hideHeader: true },

  { type: 'section', title: '内容标准' },
  { type: 'page', title: 'GEO内容编写原则', component: Page_GeoContentPrinciples, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 六、投放策略 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '投放策略', subtitle: 'DELIVERY STRATEGY', backgroundImage: '' },
  { type: 'section', title: '短期投放逻辑' },
  { type: 'page', title: '短期投放', component: Page_DeliveryShortTerm, hideHeader: true },
  { type: 'section', title: '长期投放逻辑' },
  { type: 'page', title: '长期投放', component: Page_DeliveryLongTerm, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 七、关于我们 ———
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '关于我们', subtitle: 'ABOUT US', backgroundImage: '' },

  { type: 'section', title: '公司介绍' },
  { type: 'page', title: '「GEO 索引未来」整体介绍', component: Page_CompanyIntro, hideHeader: true },
  { type: 'page', title: '服务客户', component: Page_ServiceClients, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined, hideHeader: true },
  { type: 'page', title: '服务案例（二）', component: Page_CaseStudy_Double_Combined_2, hideHeader: true },
  { type: 'page', title: '服务案例（三）', component: Page_CaseStudy_Double_Combined_3, hideHeader: true },
  { type: 'page', title: '团队背书', component: Page_TeamEndorsement, hideHeader: true },
  { type: 'page', title: '团队组织架构', component: Page_CompanyArchitecture, hideHeader: true },
  { type: 'page', title: '核心成员', component: Page_TeamIntro, hideHeader: true },

  { type: 'section', title: '核心能力' },
  { type: 'page', title: '核心能力', component: Page_CoreCapabilities, hideHeader: true },
  { type: 'page', title: 'GEO ONE 数据监测系统介绍', component: Page_GeoMonitorIntro, hideHeader: true },
  { type: 'page', title: '数据系统核心模块', component: Page_GeoMonitorModules, hideHeader: true },
  { type: 'page', title: 'GEO ONE 数据监测系统', component: Page_GeoMonitor, hideHeader: true },
  { type: 'page', title: 'GEO量化竞争模型（Alpha模型）', component: Page_QuantitativeModel, hideHeader: true },
  { type: 'page', title: '内容撰写Agent介绍', component: Page_ContentAgentIntro, hideHeader: true },
  { type: 'page', title: '内容撰写Agent', component: Page_ContentAgent, hideHeader: true },
  { type: 'page', title: '用户评论分析系统', component: Page_UserCommentAnalysis, hideHeader: true },
];
