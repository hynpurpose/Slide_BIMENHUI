import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词词条 · 分析页（纯黑底文字分析，数据来自 geoReport.json）。
 * 版式参照 Slide_Guanzhu Page_GeoReportEntries_Analysis。
 */
export function Page_SkyworthReport_OptEntriesAnalysis() {
  const { entries } = report;
  const total = entries.total;
  const fullCount = entries.list.filter((e) => e.mention_rate === 100).length;
  const zeroCount = entries.list.filter((e) => e.mention_rate === 0).length;
  const partialCount = entries.list.filter((e) => e.mention_rate > 0 && e.mention_rate < 100).length;
  const fullPct = Math.round((fullCount / total) * 100);

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
          <div className="text-center mb-5 shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 词条表现诊断
            </h1>
          </div>

          <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">
            {/* 左：核心发现 */}
            <div className="col-span-6 flex flex-col min-h-0">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                  <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  监测词条核心发现
                </h3>
                <div className="flex-1 grid grid-cols-1 gap-4 min-h-0 justify-center">
                  <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                    <div className="flex items-center justify-between shrink-0">
                      <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                        {fullCount} 个词条提及率满分
                      </h4>
                      <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">占比 {fullPct}%</span>
                    </div>
                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                      {total} 个优化词中 {fullCount} 个提及率达 100%，集中在「壁纸 / 艺术 / 超薄电视」等细分场景，且平均位次多在 NO.1–2，创维已被 AI 稳定首推。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                    <div className="flex items-center justify-between shrink-0">
                      <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                        {partialCount} 个词条部分覆盖
                      </h4>
                      <span className="bg-amber-950/40 border border-amber-900/50 text-amber-300 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 25–75%</span>
                    </div>
                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                      如「100 英寸电视推荐」「电视品牌排行榜」等大流量泛词，创维仅在部分 AI 平台被提及，存在平台间表现不一致的情况，需针对性补投。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 flex flex-col justify-start gap-2">
                    <div className="flex items-center justify-between shrink-0">
                      <h4 className="text-[17px] lg:text-[18px] xl:text-[20px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                        {zeroCount} 个词条零提及
                      </h4>
                      <span className="bg-red-950/40 border border-red-950/60 text-red-400 text-[14px] lg:text-[15px] px-3 py-0.5 rounded font-bold shrink-0">提及率 0%</span>
                    </div>
                    <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal text-justify">
                      多为泛尺寸 / 泛品类词（4K、OLED、55/65 寸、「质量好的电视」等），尚未进入 AI 推荐列表，是当前最大的内容盲区。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右：长短板诊断 */}
            <div className="col-span-6 flex flex-col min-h-0">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                  <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  长短板诊断与词条策略
                </h3>
                <div className="flex-grow grid grid-cols-1 gap-4 min-h-0 justify-center">
                  <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-emerald-500/60 rounded-xl p-5 flex flex-col justify-start gap-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">长板：壁纸 / 艺术电视场景</span>
                      <span className="text-[13px] lg:text-[14px] bg-emerald-950/40 text-emerald-400 border border-emerald-950/60 px-3 py-0.5 rounded font-bold shrink-0">绝对优势</span>
                    </div>
                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                      <div className="text-justify border-b border-white/5 pb-2">
                        <strong className="text-emerald-300 font-bold">表现：</strong>「壁纸电视品牌推荐」「不反光类纸质感的壁纸电视推荐」等 {fullCount} 个词条全部满分，平均位次 NO.1–2，四大平台全覆盖。
                      </div>
                      <div className="text-justify pt-1">
                        <strong className="text-blue-300 font-bold">策略：</strong>持续维护该场景下的高质量首推内容，巩固 AI 对创维壁纸电视的品类认知，形成竞争壁垒。
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-[#004CE5] rounded-xl p-5 flex flex-col justify-start gap-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white">短板：泛品类 / 泛尺寸词</span>
                      <span className="text-[13px] lg:text-[14px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/30 px-3 py-0.5 rounded font-bold shrink-0">重点攻坚</span>
                    </div>
                    <div className="text-[15px] lg:text-[16px] xl:text-[18px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                      <div className="text-justify border-b border-white/5 pb-2">
                        <strong className="text-amber-400 font-bold">表现：</strong>{zeroCount} 个词条提及率为 0，{partialCount} 个部分覆盖；「电视品牌推荐」「75 英寸电视推荐」等大流量词尚未稳定进入 AI 首推。
                      </div>
                      <div className="text-justify pt-1">
                        <strong className="text-emerald-400 font-bold">攻坚路径：</strong>针对零提及词条批量铺设榜单 / 评测类内容，优先覆盖 75/85/100 英寸、Mini LED、价格段等高频搜索场景，扩大整体提及覆盖面。
                      </div>
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

Page_SkyworthReport_OptEntriesAnalysis.hideHeader = true;
