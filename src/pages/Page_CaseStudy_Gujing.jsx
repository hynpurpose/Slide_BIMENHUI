import React from 'react';
import {
  CaseReportVariantA,
  CaseReportVariantB,
  CaseReportVariantC,
} from '../components/CaseStudyReport';

/* ============================================================
 * 服务案例（深度）—— 古井贡酒 GEO 阶段性优化
 * 数据来源：《月报【古井贡酒】》2026年6月 GEO 阶段性报告
 *   · 监测周期：31 天，覆盖 4 个核心 AI 平台，29 个重点监测词条
 *   · 追踪引用相关问答数据共计 5,610 篇次
 * ============================================================ */
const GUJING = {
  brand: '古井贡酒',
  brandSub: 'GEO 阶段性优化',
  industry: '快消品行业（白酒）',
  period: '2026年5月 → 6月',
  meta: [
    { label: '监测周期', value: '2026年5月 → 6月' },
    { label: '覆盖平台', value: '4 大 AI 平台' },
    { label: '追踪样本', value: '5,610 篇次' },
  ],
  products: [
    { name: '古井贡酒·古16', mFrom: '96.0%', mTo: '96.7%', rFrom: '2.0', rTo: '1.7', cFrom: 'NO.1', cTo: 'NO.1', top1: '78.3%', positive: '100%' },
    { name: '古井贡酒·古20', mFrom: '88.3%', mTo: '98.3%', rFrom: '4.7', rTo: '4.8', cFrom: 'NO.1', cTo: 'NO.1', top1: '36.7%', positive: '99.3%', highlight: true, badge: '提及率 +10pct' },
  ],
  hero: {
    tag: '周期内提及率跃升',
    productName: '古井贡酒·古20',
    desc: '提及率 · 单周期 +10pct',
    from: '88.3%', to: '98.3%',
    fromLabel: '上月', toLabel: '本月',
    stats: [
      { label: 'Top1 提及率', value: '36.7%', color: 'blue' },
      { label: '正面声量', value: '99.3%', color: 'green' },
    ],
  },
  summary:
    '本监测周期内，古井贡酒双主力产品（古16 / 古20）在白酒品类 AI 生态中稳居竞品排名第一。古16 首推率高达 78.3%、平均位次前移至 1.7，持续巩固绝对领先；古20 提及率单周期大幅增长约 10 个百分点冲至 98.3%，借助高端商务场景铺设与价格心智纠偏，实现品牌曝光的强势跃升。',
};

export function Page_CaseStudy_Gujing_A() { return <CaseReportVariantA data={GUJING} />; }
export function Page_CaseStudy_Gujing_B() { return <CaseReportVariantB data={GUJING} />; }
export function Page_CaseStudy_Gujing_C() { return <CaseReportVariantC data={GUJING} />; }

export default Page_CaseStudy_Gujing_A;

Page_CaseStudy_Gujing_A.hideHeader = true;
Page_CaseStudy_Gujing_B.hideHeader = true;
Page_CaseStudy_Gujing_C.hideHeader = true;
