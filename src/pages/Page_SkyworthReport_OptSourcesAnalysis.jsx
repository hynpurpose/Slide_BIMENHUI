import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词引用源 · 分析页（纯黑底文字分析，数据来自 geoReport.json）。
 * 版式参照 Slide_Guanzhu Page_GeoReportSources2。
 */
export function Page_SkyworthReport_OptSourcesAnalysis() {
  const { meta, citations } = report;
  const targetName = meta.target_brand_name || meta.target_product;
  const top5 = citations.platform_stats.slice(0, 5);
  const top5Sum = top5.reduce((s, p) => s + (p.share ?? 0), 0);
  const mentionedCount = citations.articles.filter((a) => a.has_target_product).length;
  const topArticle = citations.articles[0];

  const rankings = top5.map((p) => ({
    name: p.platform_name,
    value: `${Number(p.share).toFixed(1)}%`,
    widthClass: `w-[${Math.round(p.share ?? 0)}%]`,
  }));

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-8 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">
          <div className="text-center shrink-0 mb-2">
            <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
              优化词 · 引用源分析
            </h1>
          </div>

          <div className="flex-1 flex flex-col justify-center min-h-0">
            <div className="w-full h-[85%] max-h-[660px] min-h-[540px] grid grid-cols-12 gap-6 self-center">
              {/* 左：引用源健康度 */}
              <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3">
                  <div className="shrink-0">
                    <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                      引用源健康度评估
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-5 min-h-0">
                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                      <p>
                        监测数据显示，在 AI 生成的品类优化词问答中，整体被引率达 <strong className="text-white font-bold">{citations.citation_rate}%</strong>，{citations.total_conversations} 轮对话累计触发 <strong className="text-white font-bold">{citations.total_citations.toLocaleString()}</strong> 次内容引用，{targetName}相关内容已被 AI 大规模抓取采信。
                      </p>
                      <p className="mt-2.5">
                        引用来源呈现<strong className="text-white font-semibold">「垂直科技媒体 + 社交种草」双轮驱动</strong>特征：排名前五的平台分别为
                        {top5.map((p, i) => (
                          <React.Fragment key={p.platform_name}>
                            {i > 0 && '、'}
                            <strong className="text-white font-bold">{p.platform_name}（{Number(p.share).toFixed(1)}%）</strong>
                          </React.Fragment>
                        ))}。
                      </p>
                      <p className="mt-2.5 border-t border-white/5 pt-2.5">
                        Top5 平台合计仅占 <strong className="text-white font-bold">{top5Sum.toFixed(1)}%</strong>，来源高度分散，需多渠道并行布局而非押注单一媒体。
                      </p>
                    </div>
                    <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5">
                      <div className="text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-0.5">
                        TOP 5 引用平台份额对比
                      </div>
                      {rankings.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-4">
                          <div className="w-28 text-[15px] lg:text-[16px] text-zinc-400 truncate font-medium">{item.name}</div>
                          <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full transition-all duration-1000"
                              style={{ width: item.value }}
                            />
                          </div>
                          <div className="w-12 text-right text-[15px] lg:text-[16px] text-white font-bold">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 右：诊断与洞察 */}
              <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                <div className="bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3 shadow-[0_0_25px_rgba(0,76,229,0.06)]">
                  <div className="shrink-0">
                    <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                      诊断与洞察
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-4 min-h-0">
                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#004CE5] p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                          高权重内容覆盖良好
                        </h4>
                      </div>
                      <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                        Top10 引用文章中 <strong className="text-white font-semibold">{mentionedCount} 篇</strong>正面提及{targetName}；引用量最高的「{topArticle?.title.slice(0, 28)}…」累计被引 {topArticle?.total_citations} 次，AI 已建立对创维壁纸电视的正面认知。
                      </p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-emerald-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                          垂直科技媒体 + 社交种草并重
                        </h4>
                      </div>
                      <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                        中关村在线、IT之家、雷科技等垂直媒体与抖音、什么值得买等社交种草平台共同构成引用生态；内容策略应「评测榜单 + 种草短视频」双线并行，覆盖 AI 主要抓取渠道。
                      </p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">
                          个别财经稿缺位，可作补投切口
                        </h4>
                      </div>
                      <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                        部分财经 / 行业观察类文章（如「2026年壁纸电视市场观察」）被 AI 高频引用但未提及{targetName}；可定向补投此类高权重媒体，进一步扩大正面覆盖。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptSourcesAnalysis.hideHeader = true;
