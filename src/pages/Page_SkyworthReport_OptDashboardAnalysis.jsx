import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词总览 · 分析页（纯黑底文字分析，数据来自 geoReport.json）。
 * 版式参照 Slide_Guanzhu Page_GeoReportDashboard2。
 */
export function Page_SkyworthReport_OptDashboardAnalysis() {
  const { meta, stats, influence, citations, compare } = report;
  const targetName = meta.target_brand_name || meta.target_product;
  const mentionRate = stats.brand_mention_rate;
  const avgPosition = stats.avg_position;
  const targetRank = influence.list.find((b) => b.is_target)?.rank ?? null;
  const rivals = influence.list.filter((b) => !b.is_target).slice(0, 2);
  const targetTop1 = compare.top1_ranking.find((b) => b.is_target);
  const runnerTop1 = compare.top1_ranking.find((b) => !b.is_target);
  const top1Ratio = targetTop1 && runnerTop1 ? (targetTop1.top1_mention_rate / runnerTop1.top1_mention_rate).toFixed(1) : null;
  const pRates = stats.platform_stats.map((p) => p.brand_mention_rate);
  const minRate = Math.min(...pRates);
  const maxRate = Math.max(...pRates);
  const byPos = [...stats.platform_stats].sort((a, b) => a.avg_position - b.avg_position);
  const bestPos = byPos[0];
  const worstPos = byPos[byPos.length - 1];
  const topCiteNames = citations.platform_stats.slice(0, 3).map((p) => `${p.platform_name}（${Number(p.share).toFixed(1)}%）`).join('、');

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-2 lg:pt-4 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-0">
          <div className="text-center mb-4 shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 核心指标分析
            </h1>
          </div>

          <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">
            {/* 左：指标定义与表现 */}
            <div className="col-span-6 flex flex-col min-h-0">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full justify-between">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 shrink-0 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  关键数据指标定义与表现
                </h3>
                <div className="overflow-hidden rounded-xl border border-[#004CE5]/20 bg-[#020202]/60 flex-grow flex flex-col justify-center">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                        <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[24%]">关键数据</th>
                        <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">定义</th>
                        <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">数据说明</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">提及率</td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                          在监测词条中，AI 回复包含「{targetName}」的概率。
                        </td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                          <span className="text-blue-400 font-bold">{mentionRate}%</span>，行业排名第 {targetRank}，落后{rivals[0]?.brand_name}（{rivals[0]?.mention_rate}%）、{rivals[1]?.brand_name}（{rivals[1]?.mention_rate}%）约 6–9 个百分点
                        </td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">平均提及位次</td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                          品牌在 AI 生成推荐列表中的平均排位。
                        </td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                          <span className="text-blue-400 font-bold">NO. {avgPosition}</span>，{bestPos?.platform_name}最优（{bestPos?.avg_position}），{worstPos?.platform_name}偏弱（{worstPos?.avg_position}）为提位重点
                        </td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top1 提及率</td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                          AI 首推列表中，{targetName} 位列第一的概率。
                        </td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                          <span className="text-blue-400 font-bold">{targetTop1?.top1_mention_rate}%</span>，行业第一，是{runnerTop1?.brand_name}（{runnerTop1?.top1_mention_rate}%）的 {top1Ratio} 倍
                        </td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top 引用来源</td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                          AI 生成当前结果时的最底层数据源。
                        </td>
                        <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                          {topCiteNames}。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 右：三大特征 */}
            <div className="col-span-6 flex flex-col min-h-0">
              <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full justify-start min-h-0 gap-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 shrink-0 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  结合本次数据，{targetName}在 AI 问答里的表现呈现以下三大特征：
                </h3>
                <div className="flex-grow flex flex-col justify-start gap-4 min-h-0 pt-2 lg:pt-3">
                  <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors duration-300">
                    <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">01</div>
                    <div className="min-h-0">
                      <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white mb-0.5 leading-snug">
                        首推心智领先，Top1 提及率断层第一。
                      </h4>
                      <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                        Top1 提及率 {targetTop1?.top1_mention_rate}%，是第二名{runnerTop1?.brand_name}（{runnerTop1?.top1_mention_rate}%）的 {top1Ratio} 倍——在壁纸 / 艺术电视等品类词下，AI 最倾向首推创维。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors duration-300">
                    <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">02</div>
                    <div className="min-h-0">
                      <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white mb-0.5 leading-snug">
                        四大平台表现均衡，品类词优化已成基本盘。
                      </h4>
                      <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                        DeepSeek、豆包、元宝、通义千问提及率同处 {minRate}%–{maxRate}%，无明显短板；细分场景词覆盖稳定，优化效果可复用。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3 transition-colors duration-300">
                    <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">03</div>
                    <div className="min-h-0">
                      <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white mb-0.5 leading-snug">
                        整体声量仍有缺口，泛品类词待补强。
                      </h4>
                      <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                        综合提及率 {mentionRate}% 落后海信、TCL 约 6–9 个百分点；部分泛尺寸 / 泛品类词条尚未进入 AI 推荐，是下一步提声量的主要方向。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部行动建议 */}
          <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-5">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">核心行动建议</h3>
            <div className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
              <p className="font-bold text-white mb-1 text-[18px] lg:text-[20px]">
                巩固首推优势，补齐提及广度。
              </p>
              <p className="text-zinc-400 leading-relaxed text-justify">
                持续维护壁纸 / 艺术电视场景的高质量首推内容，守住 Top1 提及率领先优势；同时对未覆盖的泛品类词补充测评、榜单类内容，把整体提及率从 {mentionRate}% 向头部（68%）拉近，并重点提升{worstPos?.platform_name}平台的平均位次。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptDashboardAnalysis.hideHeader = true;
