import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export function Page_SkyworthReport_SentimentPre() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const src = '/geo-report/skyworth-sentiment-pre.jpg';

    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-2">

                    <div className="text-center shrink-0 mb-0.5">
                        <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
                            监测词 · 正负面分析
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-between items-stretch min-h-0 w-fit max-w-[1580px] mx-auto gap-3.5">

                        {/* Top: image slot */}
                        <div className="flex-1 flex flex-col justify-center items-center min-h-0 relative">
                            {imgLoaded && !imgError ? (
                                <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 group flex items-center justify-center">
                                    <img src={src} alt="正负面分析基本情况大图" className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                                </div>
                            ) : (
                                <div className="w-full aspect-[2.7/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                    <img src={src} alt="正负面分析基本情况大图" className="hidden" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                                    <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                            </svg>
                                        </div>
                                        <p className="text-zinc-300 font-bold text-base mb-1">此处为监测词正负面分析大图展示位</p>
                                        <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                            存放路径: {src}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom: banner */}
                        <div className="h-[23%] min-h-[135px] max-h-[180px] shrink-0 w-full">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3.5 lg:px-6 lg:py-4 flex flex-col h-full justify-center gap-1.5">
                                <h3 className="text-[21px] lg:text-[23px] xl:text-[24.5px] font-bold text-white flex items-center gap-2 shrink-0">
                                    <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    基本情况概述
                                </h3>
                                <div className="text-[18px] lg:text-[19.5px] xl:text-[21px] text-zinc-300 leading-normal font-normal flex flex-col gap-1.5">
                                    <p>
                                        在针对<strong className="text-white font-semibold">创维电视</strong>的品牌监测词强搜提问中，正面回答率为 <strong className="text-emerald-400 font-bold">88.5%</strong>，负面/异常回答占 <strong className="text-rose-400 font-bold">11.5%</strong>，主要集中在“<strong className="text-white font-semibold">系统卡顿、售后体验、参数虚标质疑</strong>”。
                                    </p>
                                    <p className="border-t border-white/5 pt-1.5">
                                        负面声量虽不高，但集中在影响购买决策的关键环节。监测词的意义正在于第一时间发现这些苗头，在其被 AI 反复引用、固化为“默认印象”之前及时干预。
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
Page_SkyworthReport_SentimentPre.hideHeader = true;

export function Page_SkyworthReport_SentimentDetail() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const src = '/geo-report/skyworth-sentiment-detail.jpg';

    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-2">

                    <div className="text-center shrink-0 mb-0.5">
                        <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
                            监测词 · 正负面分析
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-between items-stretch min-h-0 w-fit max-w-[1580px] mx-auto gap-3.5">

                        {/* Top: image slot */}
                        <div className="flex-1 flex flex-col justify-center items-center min-h-0 relative">
                            {imgLoaded && !imgError ? (
                                <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 group flex items-center justify-center">
                                    <img src={src} alt="负面类型解析大图" className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                                </div>
                            ) : (
                                <div className="w-full aspect-[2.7/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                    <img src={src} alt="负面类型解析大图" className="hidden" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                                    <div className="absolute inset-1.5 flex flex-col items-center justify-center p-3 text-center bg-white/[0.01] rounded-lg border border-dashed border-white/10">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                            </svg>
                                        </div>
                                        <p className="text-zinc-300 font-bold text-base mb-1">此处为负面类型解析大图展示位</p>
                                        <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                            存放路径: {src}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom: negative breakdown */}
                        <div className="h-[30%] min-h-[190px] max-h-[240px] shrink-0 w-full">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 lg:p-5 flex flex-col h-full justify-between gap-3 shadow-2xl">
                                <h3 className="text-[20px] lg:text-[21px] xl:text-[22.5px] font-bold text-white flex items-center gap-2 shrink-0 pl-0.5">
                                    <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                    负面回答类型解析 & 应对建议
                                </h3>

                                <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
                                    <div className="col-span-6 flex flex-col min-h-0 h-full">
                                        <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-4 py-2 lg:px-4.5 lg:py-2.5 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03]">
                                            <h4 className="text-[17.5px] lg:text-[18.5px] xl:text-[19.5px] font-bold text-white flex items-center gap-2 shrink-0">
                                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                                主要毒点：系统体验与参数质疑
                                            </h4>
                                            <p className="text-[14.5px] lg:text-[15.5px] xl:text-[16.5px] text-zinc-300 leading-relaxed font-normal">
                                                当强搜“<strong className="text-white font-semibold">创维电视怎么样 / 值不值得买</strong>”时，AI 会引用早期论坛帖，输出“系统偶有卡顿、开机广告、部分参数存疑”等评价，且个别回答把旧款问题错误套用到新品上。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-span-6 flex flex-col min-h-0 h-full">
                                        <div className="bg-rose-500/[0.015] border border-rose-500/15 border-l-4 border-l-rose-500 rounded-r-xl px-4 py-2 lg:px-4.5 lg:py-2.5 flex flex-col h-full justify-start gap-1 transition-all duration-300 hover:bg-white/[0.03] shadow-[0_0_15px_rgba(239,68,68,0.02)]">
                                            <h4 className="text-[17.5px] lg:text-[18.5px] xl:text-[19.5px] font-bold text-white flex items-center gap-2 shrink-0">
                                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                                应对建议：新品口碑“正本清源”
                                            </h4>
                                            <p className="text-[14.5px] lg:text-[15.5px] xl:text-[16.5px] text-zinc-300 leading-relaxed font-normal">
                                                在知乎、什么值得买等高权重平台发布新品实测与系统升级说明，用高事实密度的正规语料覆盖 AI 的“旧印象”，并对参数虚标质疑给出官方数据背书，肃清决策毒点。
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
Page_SkyworthReport_SentimentDetail.hideHeader = true;
