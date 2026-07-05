import React from 'react';
import {
  CaseReportVariantA,
  CaseReportVariantB,
  CaseReportVariantC,
} from '../components/CaseStudyReport';

/* ============================================================
 * 服务案例（深度）—— 菜鸟 GEO 阶段性优化
 * 数据来源：《月报【菜鸟】》2026年6月 GEO 阶段性报告
 *   · 监测周期：2026年5月 → 6月，48 个关键词条 / 3 平台连续查询
 *   · 抓取并识别引用文章 35,207 篇，截图覆盖率 100%
 * ============================================================ */
const CAINIAO = {
  brand: '菜鸟',
  brandSub: 'GEO 阶段性优化',
  industry: '物流与供应链',
  period: '2026年5月 → 6月',
  meta: [
    { label: '监测周期', value: '2026年5月 → 6月' },
    { label: '覆盖平台', value: '3 大 AI 平台' },
    { label: '引用文章', value: '35,207 篇' },
  ],
  products: [
    { name: '菜鸟', mFrom: '85.5%', mTo: '84.7%', rFrom: '1.3', rTo: '1.5', cFrom: 'NO.1', cTo: 'NO.1', top1: '68.8%', positive: '100.0%', highlight: true, badge: '品类绝对领先' },
  ],
  hero: {
    tag: '竞品排名 · 持续领跑',
    productName: '菜鸟',
    desc: '断层第一 · 提及率甩开第二名约 26pct',
    to: 'NO.1',
    toLabel: '本月竞品排名',
    stats: [
      { label: 'Top1 提及率', value: '68.8%', color: 'blue' },
      { label: '正面声量', value: '100%', color: 'green' },
    ],
  },
  summary:
    '本监测周期内，菜鸟在物流品类 AI 生态中保持绝对领先，竞品排名持续稳居 NO.1，提及率断层甩开第二名「快递100」约 26 个百分点。受大模型回复机制调整，6月提及率与 Top1 率虽小幅回落，但平均提及位次仍维持在 NO.1.5 的第一梯队；通过高权重长尾科普内容持续做防御与拦截，稳固领跑身位。',
};

export function Page_CaseStudy_Cainiao_A() { return <CaseReportVariantA data={CAINIAO} />; }
export function Page_CaseStudy_Cainiao_B() { return <CaseReportVariantB data={CAINIAO} />; }
export function Page_CaseStudy_Cainiao_C() { return <CaseReportVariantC data={CAINIAO} />; }

export default Page_CaseStudy_Cainiao_A;

Page_CaseStudy_Cainiao_A.hideHeader = true;
Page_CaseStudy_Cainiao_B.hideHeader = true;
Page_CaseStudy_Cainiao_C.hideHeader = true;
