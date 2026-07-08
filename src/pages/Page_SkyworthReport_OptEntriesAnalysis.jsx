import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词词条 · 分析页（纯黑底文字分析，数据来自 geoReport.json）。
 */
export function Page_SkyworthReport_OptEntriesAnalysis() {
  const { entries } = report;
  const total = entries.total;
  const fullCount = entries.list.filter((e) => e.mention_rate === 100).length;
  const zeroCount = entries.list.filter((e) => e.mention_rate === 0).length;
  const partialCount = entries.list.filter((e) => e.mention_rate > 0 && e.mention_rate < 100).length;
  const fullPct = Math.round((fullCount / total) * 100);

  const tag = 'shrink-0 rounded border border-white/10 bg-white/[0.04] px-3 py-0.5 text-[16px] font-medium text-zinc-400';
  const cardTitle = 'text-[22px] font-bold text-white leading-snug';
  const body = 'text-[19px] leading-[1.65] text-zinc-300 text-justify';
  const label = 'font-bold text-white';

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10">
          <div className="text-center mb-6 shrink-0">
            <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
              优化词 · 词条表现诊断
            </h1>
          </div>

          <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">
            {/* 左：核心发现 */}
            <div className="col-span-6 flex flex-col min-h-0">
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl">
                <h3 className="flex shrink-0 items-center gap-2.5 text-[28px] font-bold text-white">
                  <span className="h-6 w-1.5 rounded-full bg-[#004CE5]" />
                  监测词条核心发现
                </h3>
                <div className="flex flex-1 flex-col justify-center gap-5">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className={cardTitle}>{fullCount} 个词条提及率满分</h4>
                      <span className={tag}>占比 {fullPct}%</span>
                    </div>
                    <p className={body}>
                      {total} 个优化词中 {fullCount} 个提及率达 100%，集中在「壁纸 / 艺术 / 超薄电视」等细分场景，且平均位次多在 NO.1–2，某家电品牌已被 AI 稳定首推。
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className={cardTitle}>{partialCount} 个词条部分覆盖</h4>
                      <span className={tag}>提及率 25–75%</span>
                    </div>
                    <p className={body}>
                      如「100 英寸电视推荐」「电视品牌排行榜」等大流量泛词，某家电品牌仅在部分 AI 平台被提及，存在平台间表现不一致的情况，需针对性补投。
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className={cardTitle}>{zeroCount} 个词条零提及</h4>
                      <span className={tag}>提及率 0%</span>
                    </div>
                    <p className={body}>
                      多为泛尺寸 / 泛品类词（4K、OLED、55/65 寸、「质量好的电视」等），尚未进入 AI 推荐列表，是当前最大的内容盲区。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右：长短板诊断 */}
            <div className="col-span-6 flex flex-col min-h-0">
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-xl">
                <h3 className="flex shrink-0 items-center gap-2.5 text-[28px] font-bold text-white">
                  <span className="h-6 w-1.5 rounded-full bg-[#004CE5]" />
                  长短板诊断与词条策略
                </h3>
                <div className="flex flex-1 flex-col justify-center gap-5">
                  <div className="rounded-xl border border-white/[0.06] border-l-[3px] border-l-[#004CE5] bg-white/[0.02] p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[24px] font-bold text-white leading-snug">长板：壁纸 / 艺术电视场景</span>
                      <span className={tag}>绝对优势</span>
                    </div>
                    <div className={`${body} flex flex-col gap-3`}>
                      <p>
                        <span className={label}>表现：</span>
                        「壁纸电视品牌推荐」「不反光类纸质感的壁纸电视推荐」等 {fullCount} 个词条全部满分，平均位次 NO.1–2，四大平台全覆盖。
                      </p>
                      <p className="border-t border-white/[0.06] pt-3">
                        <span className={label}>策略：</span>
                        持续维护该场景下的高质量首推内容，巩固 AI 对某家电品牌壁纸电视的品类认知，形成竞争壁垒。
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] border-l-[3px] border-l-[#004CE5] bg-white/[0.02] p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[24px] font-bold text-white leading-snug">短板：泛品类 / 泛尺寸词</span>
                      <span className={tag}>重点攻坚</span>
                    </div>
                    <div className={`${body} flex flex-col gap-3`}>
                      <p>
                        <span className={label}>表现：</span>
                        {zeroCount} 个词条提及率为 0，{partialCount} 个部分覆盖；「电视品牌推荐」「75 英寸电视推荐」等大流量词尚未稳定进入 AI 首推。
                      </p>
                      <p className="border-t border-white/[0.06] pt-3">
                        <span className={label}>攻坚路径：</span>
                        针对零提及词条批量铺设榜单 / 评测类内容，优先覆盖 75/85/100 英寸、Mini LED、价格段等高频搜索场景，扩大整体提及覆盖面。
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

Page_SkyworthReport_OptEntriesAnalysis.hideHeader = true;
