import React from 'react';
import {
  CaseReportVariantA,
  CaseReportVariantB,
  CaseReportVariantC,
} from '../components/CaseStudyReport';

/* ============================================================
 * 服务案例（深度）—— 慕思 GEO 阶段性优化
 * 数据来源：《月报【慕思】》2026年6月 GEO 阶段性报告
 *   · 监测周期：2026年5月 → 6月
 *   · 覆盖 6 个核心 AI 平台，累计追踪引用问答 5,412 篇次
 * ============================================================ */
const MUSI = {
  brand: '慕思',
  brandSub: 'GEO 阶段性优化',
  industry: '睡眠科技行业',
  period: '2026年5月 → 6月',
  meta: [
    { label: '监测周期', value: '2026年5月 → 6月' },
    { label: '覆盖平台', value: '6 大 AI 平台' },
    { label: '追踪样本', value: '5,412 篇次' },
  ],
  products: [
    { name: '慕思智能床', mFrom: '73.6%', mTo: '87.8%', rFrom: '2.9', rTo: '2.7', cFrom: 'NO.1', cTo: 'NO.1', top1: '41.1%', positive: '97.8%' },
    { name: '慕思AI床垫', mFrom: '82.4%', mTo: '88.9%', rFrom: '2.5', rTo: '2.1', cFrom: 'NO.1', cTo: 'NO.1', top1: '61.7%', positive: '94.4%' },
    { name: '慕思床垫', mFrom: '41.7%', mTo: '64.2%', rFrom: '6.04', rTo: '4.9', cFrom: 'NO.4', cTo: 'NO.1', top1: '21.7%', positive: '99.2%', highlight: true },
  ],
  hero: {
    tag: '周期内位次跃升',
    productName: '慕思床垫',
    desc: '竞品排名 · 单周期跨越',
    from: 'NO.4', to: 'NO.1',
    fromLabel: '上月', toLabel: '本月',
    stats: [
      { label: '提及率', value: '64.2%', color: 'blue' },
      { label: '正面声量', value: '99.2%', color: 'green' },
    ],
  },
  summary:
    '本监测周期内，慕思在 6 大核心 AI 平台的三大产品线提及率全线跃升；通过「黄金首推位巩固 + 竞品精准拦截 + 长尾场景防御」的组合策略，智能床与 AI 床垫稳固竞品第一，慕思床垫更实现从行业 NO.4 到竞品排名 NO.1 的强势登顶。',
};

export function Page_CaseStudy_Musi_A() { return <CaseReportVariantA data={MUSI} />; }
export function Page_CaseStudy_Musi_B() { return <CaseReportVariantB data={MUSI} />; }
export function Page_CaseStudy_Musi_C() { return <CaseReportVariantC data={MUSI} />; }

export default Page_CaseStudy_Musi_A;

Page_CaseStudy_Musi_A.hideHeader = true;
Page_CaseStudy_Musi_B.hideHeader = true;
Page_CaseStudy_Musi_C.hideHeader = true;
