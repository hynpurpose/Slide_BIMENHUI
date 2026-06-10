import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_GeoReportSentiment_Pre() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <SlideLayout
            title="正负面"
            subtitle="正负面分析"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-4 gap-2">
                    
                    {/* Main Content Sub-container: Dynamically fits to the image's width and stretches the bottom card to match it exactly */}
                    <div className="flex-grow flex flex-col justify-between items-stretch min-h-0 w-fit max-w-[1580px] mx-auto gap-3.5">
                        
                        {/* Top Section: Larger, Self-Adaptive Image Slot */}
                        <div className="flex-grow flex flex-col justify-center items-center min-h-0 relative">
                            {imgLoaded && !imgError ? (
                                /* Adaptive Border Wrapper: Tightly wraps the image based on its natural dimensions */
                                <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-2.5 shadow-2xl hover:border-white/20 transition-all duration-300 group flex items-center justify-center">
                                    <img 
                                        src="/geo-report/page-63-sentiment-pre.jpg" 
                                        alt="正负面分析基本情况大图" 
                                        className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                                        onLoad={() => setImgLoaded(true)}
                                        onError={() => setImgError(true)}
                                    />
                                </div>
                            ) : (
                                /* Fallback Placeholder matching the layout height with wider aspect ratio */
                                <div className="w-full aspect-[2.7/1] max-h-full bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                    {/* Hidden Image for loading detection */}
                                    <img 
                                        src="/geo-report/page-63-sentiment-pre.jpg" 
                                        alt="正负面分析基本情况大图" 
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
                                        <p className="text-zinc-300 font-bold text-base mb-1">此处为正负面分析大图展示位</p>
                                        <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
                                            存放路径: /public/geo-report/page-63-sentiment-pre.jpg
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom Section: Single Full-width Banner Card (More compact vertically, matching image width exactly) */}
                        <div className="h-[23%] min-h-[135px] max-h-[180px] shrink-0 w-full">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3.5 lg:px-6 lg:py-4 flex flex-col h-full justify-center gap-1.5">
                                <h3 className="text-[21px] lg:text-[23px] xl:text-[24.5px] font-bold text-white flex items-center gap-2 shrink-0">
                                    <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    基本情况概述
                                </h3>
                                <div className="text-[18px] lg:text-[19.5px] xl:text-[21px] text-zinc-300 leading-normal font-normal flex flex-col gap-1.5">
                                    <p>
                                        目标产品的正面回答率达 <strong className="text-emerald-400 font-bold">88.3%</strong>，主要的正面评价高度集中在“<strong className="text-white font-semibold">性价比高、品牌实力强、品质可靠</strong>”等通用褒义词汇上。
                                    </p>
                                    <p className="border-t border-white/5 pt-1.5">
                                        负面声音占比为 <strong className="text-rose-400 font-bold">11.7%</strong>，集中在“<strong className="text-white font-semibold">执行存在差异</strong>”、“<strong className="text-white font-semibold">品牌归属错误</strong>”以及“<strong className="text-white font-semibold">质量投诉等问题上</strong>”。
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

export default Page_GeoReportSentiment_Pre;
