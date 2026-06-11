import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_GeoReportCompetitors_Analysis() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <SlideLayout
            title="竞品"
            subtitle="竞品横向对比"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-grow min-h-0 relative z-10 pt-4 gap-3">

                    {/* Top Section: Larger, Self-Adaptive Image Slot occupying all remaining space */}
                    <div className="flex-grow flex flex-col justify-center items-center min-h-0 mb-2 relative">
                        {imgLoaded && !imgError ? (
                            /* Adaptive Border Wrapper: Tightly wraps the image based on its natural dimensions, scaling to maximum allowed space without overflow */
                            <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 group flex items-center justify-center">
                                <img
                                    src="/geo-report/page-57-competitors-compare.jpg"
                                    alt="竞品横向对比大图"
                                    className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                                    onLoad={() => setImgLoaded(true)}
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        ) : (
                            /* Fallback Placeholder matching the exact width of the 3-column grid below */
                            <div className="w-full max-w-[1550px] aspect-[2.4/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                {/* Hidden Image for loading detection */}
                                <img
                                    src="/geo-report/page-57-competitors-compare.jpg"
                                    alt="竞品横向对比大图"
                                    className="hidden"
                                    onLoad={() => setImgLoaded(true)}
                                    onError={() => setImgError(true)}
                                />

                                {/* Fallback Placeholder UI */}
                                <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 022 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                        </svg>
                                    </div>
                                    <p className="text-zinc-300 font-bold text-base mb-1">此处为竞品对比分析大图展示位</p>
                                    <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                        存放路径: /public/geo-report/page-57-competitors-compare.jpg
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom Section: Balanced, Slightly Taller 3-Column Content Grid */}
                    <div className="h-[35%] min-h-[240px] max-h-[320px] shrink-0 grid grid-cols-12 gap-5">

                        {/* Column 1: Core Discoveries */}
                        <div className="col-span-4 flex flex-col min-h-0">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-5 sm:pt-5 sm:pb-4.5 sm:px-6 flex flex-col h-full justify-start gap-2.5">
                                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    核心发现
                                </h3>

                                <div className="flex-grow flex flex-col gap-3.5 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal">
                                    <p>
                                        <strong className="text-white font-bold">绝对声量被吞噬：</strong>东鹏、马可波罗、冠珠提及率均超 70%。它们几乎在所有泛搜索中必定出现，牢牢占据 AI 问答池绝大多数自然流量。
                                    </p>
                                    <p className="border-t border-white/5 pt-3">
                                        <strong className="text-white font-bold">首位推荐权的丧失：</strong>在决定第一印象的“Top 1 提及率”上，简一以 26.7% 居首，马可波罗以 23.3% 紧随其后，而萨米特仅为 2.3%，目前不具备作为“首选答案”喂给用户的能力。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Competitive Landscape Summary */}
                        <div className="col-span-4 flex flex-col min-h-0">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-5 sm:pt-5 sm:pb-4.5 sm:px-6 flex flex-col h-full justify-start gap-2.5">
                                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    竞争格局总结
                                </h3>

                                <div className="flex-grow flex flex-col gap-3.5 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal">
                                    <p>
                                        在 AI 的认知图谱中，马可波罗和东鹏并非仅仅被贴上了“大众、传统”的标签，而是被 AI 认定为<strong className="text-white font-semibold">“绝对正确的基础共识答案”</strong>。
                                    </p>
                                    <p className="border-t border-white/5 pt-3">
                                        幕思（原萨米特，即我们的优化目标）在“质量、口碑、性价比”这些主战场上<strong className="text-red-400 font-semibold">彻底失声</strong>，“年轻、密缝”标签成为了当前唯一的救命稻草。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Action Suggestion */}
                        <div className="col-span-4 flex flex-col min-h-0">
                            <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-5 pb-4 px-5 sm:pt-5 sm:pb-4.5 sm:px-6 flex flex-col h-full justify-start gap-2.5 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    行动建议
                                </h3>

                                <div className="flex-grow flex flex-col gap-3.5 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal">
                                    <p>
                                        萨米特的 GEO 优化不能采取常规的防守策略。当前首要任务不是去与马可波罗抢夺“老牌/质量好”等传统词条（壁垒太高，短期无法穿透）。
                                    </p>
                                    <p className="border-t border-white/5 pt-3">
                                        而是<strong className="text-white font-semibold">必须集中兵力</strong>，将“符合年轻人审美”、“密缝铺贴”等已有 33.3% 基础提及率的词条，通过大量高质量内容投喂快速增加提及率与位次，在 AI 生态中先获取细分流量。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

export default Page_GeoReportCompetitors_Analysis;
