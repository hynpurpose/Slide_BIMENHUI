/**
 * 通用版 GEO 方案（Slide_General）
 * 目标：~50 页以内，仅保留各模块方法论 + 执行逻辑，不含客户定制数据
 */
import Page_SkyworthConsumerPerspective from '../pages/Page_SkyworthConsumerPerspective';
import Page_SkyworthIntro from '../pages/Page_SkyworthIntro';
import { Page_SkyworthBrandResearch_B } from '../pages/Page_SkyworthBrandResearch';
import { Page_DazhongZhenpingDemo_A } from '../pages/Page_DazhongZhenpingDemo';
import { Page_SkyworthKeywordWhySplit_A } from '../pages/Page_SkyworthKeywordWhySplit';
import { Page_SkyworthKeywordOptTwoTypes_C } from '../pages/Page_SkyworthKeywordOptTwoTypes';
import Page_SkyworthKeywordLogic from '../pages/Page_SkyworthKeywordLogic';
import Page_GEOWordSelectionOther from '../pages/Page_GEOWordSelectionOther';
import Page_SkyworthShadowAlgorithm from '../pages/Page_SkyworthShadowAlgorithm';
import Page_SkyworthAiProcess from '../pages/Page_SkyworthAiProcess';
import Page_SkyworthSearchEngineModel from '../pages/Page_SkyworthSearchEngineModel';
import Page_SkyworthCrossCompare from '../pages/Page_SkyworthCrossCompare';
import Page_SkyworthKeywordStrategy from '../pages/Page_SkyworthKeywordStrategy';
import Page_GEOSalesFeedbackCase from '../pages/Page_GEOSalesFeedbackCase';
import Page_SkyworthWorkAcceptance from '../pages/Page_SkyworthWorkAcceptance';
import Page_HumanAiRatioApproach from '../pages/Page_HumanAiRatioApproach';
import Page_ContentQualityValue from '../pages/Page_ContentQualityValue';
import Page_GeoWritingAgentIntro from '../pages/Page_GeoWritingAgentIntro';
import { Page_GeoContentPrinciples_A } from '../pages/Page_GeoContentPrinciples';
import Page_SkyworthContentStrategyDeconstruct from '../pages/Page_SkyworthContentStrategyDeconstruct';
import Page_SkyworthWordOfMouthDeconstruct from '../pages/Page_SkyworthWordOfMouthDeconstruct';
import Page_ArticleCitationRate from '../pages/Page_ArticleCitationRate';
import Page_DeliveryLongTerm from '../pages/Page_DeliveryLongTerm';
import Page_DeliveryHighWeight from '../pages/Page_DeliveryHighWeight';
import Page_PotentialVerticalCommunity from '../pages/Page_PotentialVerticalCommunity';
import Page_EmergingMediaAttempts from '../pages/Page_EmergingMediaAttempts';
import Page_CompanyIntro from '../pages/Page_CompanyIntro';
import Page_ServiceClients from '../pages/Page_ServiceClients';
import Page_CaseStudy_Double_Combined from '../pages/Page_CaseStudy_Double_Combined';
import Page_TeamIntro from '../pages/Page_TeamIntro';
import Page_CoreCapabilities from '../pages/Page_CoreCapabilities';
import Page_GeoMonitorIntro from '../pages/Page_GeoMonitorIntro';
import Page_GeoMonitorModules from '../pages/Page_GeoMonitorModules';
import Page_QuantitativeModel from '../pages/Page_QuantitativeModel';
import Page_QuantitativeModelArchitecture from '../pages/Page_QuantitativeModelArchitecture';
import Page_ContentAgentIntro from '../pages/Page_ContentAgentIntro';
import Page_ContentAgentModules from '../pages/Page_ContentAgentModules';
import Page_UserCommentAnalysis from '../pages/Page_UserCommentAnalysis';
import Page_UserCommentArchitecture from '../pages/Page_UserCommentArchitecture';
import Page_SkyworthThankYou from '../pages/Page_SkyworthThankYou';

export const slideConfig = [
  // ── 开场 ──
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-new.png',
    brand: 'GEO索引未来',
    subtitle: 'GEO 服务方案\n方法论与执行体系',
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
  // 一、AI 品牌定位方法论
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: 'AI 品牌定位', subtitle: 'AI BRAND POSITIONING', backgroundImage: '' },

  { type: 'section', title: '为什么先做定位' },
  { type: 'page', title: '消费者视角下的 AI 品牌定位', component: Page_SkyworthConsumerPerspective, hideHeader: true },
  { type: 'page', title: '没做品牌调研的「坑」', component: Page_SkyworthIntro, hideHeader: true },

  { type: 'section', title: '我们怎么调研' },
  { type: 'page', title: '品牌调研方法', component: Page_SkyworthBrandResearch_B, hideHeader: true },
  { type: 'page', title: '用户真评系统演示', component: Page_DazhongZhenpingDemo_A, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // 二、关键词体系方法论
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '关键词体系', subtitle: 'KEYWORD SYSTEM', backgroundImage: '' },

  { type: 'section', title: '词怎么分类' },
  { type: 'page', title: '监测词与优化词', component: Page_SkyworthKeywordWhySplit_A, hideHeader: true },
  { type: 'page', title: '优化词的两类', component: Page_SkyworthKeywordOptTwoTypes_C, hideHeader: true },
  { type: 'page', title: '词条分类逻辑', component: Page_SkyworthKeywordLogic, hideHeader: true },

  { type: 'section', title: '词怎么选出来' },
  { type: 'page', title: '市场上其他做法', component: Page_GEOWordSelectionOther, hideHeader: true },
  { type: 'page', title: '影子算法', component: Page_SkyworthShadowAlgorithm, hideHeader: true },
  { type: 'page', title: 'AI 如何处理用户问题', component: Page_SkyworthAiProcess, hideHeader: true },
  { type: 'page', title: '模拟搜索引擎', component: Page_SkyworthSearchEngineModel, hideHeader: true },
  { type: 'page', title: '交叉对比锁定高频优化词', component: Page_SkyworthCrossCompare, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // 三、现状诊断方法论
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '现状诊断', subtitle: 'DIAGNOSTIC APPROACH', backgroundImage: '' },

  { type: 'section', title: '诊断体系' },
  { type: 'page', title: 'GEO ONE 数据监测系统', component: Page_GeoMonitorIntro, hideHeader: true },
  { type: 'page', title: '诊断看哪些维度', component: Page_GeoMonitorModules, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // 四、优化策略与交付
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '优化策略与交付', subtitle: 'OPTIMIZATION & DELIVERY', backgroundImage: '' },

  { type: 'section', title: '策略框架' },
  { type: 'page', title: '核心优化策略', component: Page_SkyworthKeywordStrategy, hideHeader: true },
  { type: 'page', title: 'AI 错误回答对成交的破坏', component: Page_GEOSalesFeedbackCase, hideHeader: true },

  { type: 'section', title: '执行节奏' },
  { type: 'page', title: '项目阶段与人员安排', component: Page_SkyworthWorkAcceptance, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // 五、内容策略方法论
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '内容策略', subtitle: 'CONTENT STRATEGY', backgroundImage: '' },

  { type: 'section', title: '生产机制' },
  { type: 'page', title: 'AI 与人工如何配合', component: Page_HumanAiRatioApproach, hideHeader: true },
  { type: 'page', title: '人工撰写的内容价值', component: Page_ContentQualityValue, hideHeader: true },
  { type: 'page', title: '内容撰写 Agent', component: Page_GeoWritingAgentIntro, hideHeader: true },

  { type: 'section', title: '内容标准与类型' },
  { type: 'page', title: 'GEO 内容编写原则', component: Page_GeoContentPrinciples_A, hideHeader: true },
  { type: 'page', title: '评测类内容拆解方法', component: Page_SkyworthContentStrategyDeconstruct, hideHeader: true },
  { type: 'page', title: '口碑类内容拆解方法', component: Page_SkyworthWordOfMouthDeconstruct, hideHeader: true },
  { type: 'page', title: '高质量内容的引用率', component: Page_ArticleCitationRate, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // 六、投放策略
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '投放策略', subtitle: 'DISTRIBUTION STRATEGY', backgroundImage: '' },

  { type: 'section', title: '投放原则' },
  { type: 'page', title: '长期投放', component: Page_DeliveryLongTerm, hideHeader: true },
  { type: 'page', title: '精准高权重账号', component: Page_DeliveryHighWeight, hideHeader: true },
  { type: 'page', title: '有潜力的垂直社区', component: Page_PotentialVerticalCommunity, hideHeader: true },
  { type: 'page', title: '新兴媒体尝试', component: Page_EmergingMediaAttempts, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // 七、关于我们
  // ══════════════════════════════════════════════════════════
  { type: 'chapter', title: '关于我们', subtitle: 'ABOUT US', backgroundImage: '' },

  { type: 'section', title: '公司与案例' },
  { type: 'page', title: 'GEO 索引未来', component: Page_CompanyIntro, hideHeader: true },
  { type: 'page', title: '服务客户', component: Page_ServiceClients, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined, hideHeader: true },
  { type: 'page', title: '核心团队', component: Page_TeamIntro, hideHeader: true },

  { type: 'section', title: '核心能力' },
  { type: 'page', title: '四大核心能力', component: Page_CoreCapabilities, hideHeader: true },
  { type: 'page', title: 'Alpha 量化竞争模型', component: Page_QuantitativeModel, hideHeader: true },
  { type: 'page', title: 'Alpha 模型运作逻辑', component: Page_QuantitativeModelArchitecture, hideHeader: true },
  { type: 'page', title: '内容 Agent 能力', component: Page_ContentAgentIntro, hideHeader: true },
  { type: 'page', title: '内容 Agent 功能模块', component: Page_ContentAgentModules, hideHeader: true },
  { type: 'page', title: '用户评论分析系统', component: Page_UserCommentAnalysis, hideHeader: true },
  { type: 'page', title: '评论分析系统架构', component: Page_UserCommentArchitecture, hideHeader: true },

  { type: 'page', title: 'Thank You', component: Page_SkyworthThankYou, hideHeader: true },
];
