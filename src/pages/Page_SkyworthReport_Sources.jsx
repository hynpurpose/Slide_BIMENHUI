import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

export function Page_SkyworthReport_SourcesScreenshot() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const src = '/geo-report/skyworth-sources.jpg';

    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
                    <div className="text-center mb-5 shrink-0">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            引用源分析
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center min-h-0 pb-1">
                        {imgLoaded && !imgError ? (
                            <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl transition-all duration-300 hover:border-white/20 group flex items-center justify-center">
                                <img src={src} alt="引用源分析大图" className="max-w-full max-h-full w-auto h-auto rounded-xl object-contain group-hover:scale-[1.002] transition-transform duration-500" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                            </div>
                        ) : (
                            <div className="w-full max-w-[1550px] aspect-[2/1] max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                <img src={src} alt="引用源分析大图" className="hidden" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                                <div className="absolute inset-2 flex flex-col items-center justify-center p-4 text-center bg-white/[0.01] rounded-xl border border-dashed border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-zinc-300 font-bold text-base mb-1">此处为引用源分析大图展示位 (支持任意比例自适应)</p>
                                    <p className="text-zinc-500 text-xs max-w-sm mb-3">上传任意比例的图片，外边框将自动无缝贴合原图尺寸，同时最大化屏幕显示。</p>
                                    <div className="bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#004CE5]">
                                        存放路径: {src}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_SourcesScreenshot.hideHeader = true;

export function Page_SkyworthReport_SourcesAnalysis() {
    const rankings = [
        { name: '今日头条', value: '10.6%', widthClass: 'w-[100%]' },
        { name: '什么值得买', value: '8.4%', widthClass: 'w-[79%]' },
        { name: '太平洋电脑网', value: '6.9%', widthClass: 'w-[65%]' },
        { name: '知乎', value: '5.8%', widthClass: 'w-[55%]' },
        { name: '哔哩哔哩', value: '5.1%', widthClass: 'w-[48%]' },
    ];

    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-6 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">

                    <div className="text-center shrink-0 mb-1">
                        <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
                            引用源分析
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-center min-h-0">
                        <div className="w-full h-[88%] max-h-[720px] min-h-[540px] grid grid-cols-12 gap-6 self-center">

                            {/* Left: Health Assessment */}
                            <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3">
                                    <div className="shrink-0">
                                        <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                            引用源健康度评估
                                        </h3>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center gap-5 min-h-0">
                                        <div className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                            <p>
                                                监测数据显示，在 AI 生成的电视选购问答中，底层数据抓取呈现“<strong className="text-white font-semibold">泛资讯与消费评测并重</strong>”的特征，导购与横评类信源权重极高。
                                            </p>
                                            <p className="mt-2.5">
                                                排名前五的引用平台分别为：
                                                <strong className="text-white font-bold">今日头条（10.6%）</strong>、
                                                <strong className="text-white font-bold">什么值得买（8.4%）</strong>、
                                                <strong className="text-white font-bold">太平洋电脑网（6.9%）</strong>、
                                                <strong className="text-white font-bold">知乎（5.8%）</strong>和
                                                <strong className="text-white font-bold">哔哩哔哩（5.1%）</strong>。
                                            </p>
                                            <p className="mt-2.5 border-t border-white/5 pt-2.5">
                                                某家电品牌在“好看的电视”相关词的信源布局较好，但在通用性能词、五款产品的专属参数词上，头部评测平台的有效内容仍显不足，导致大模型可引用素材偏少。
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
                                                        <div className={`h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full transition-all duration-1000 ${item.widthClass}`} style={{ transformOrigin: 'left' }} />
                                                    </div>
                                                    <div className="w-14 text-right text-[15px] lg:text-[16px] text-white font-bold">{item.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Diagnostics */}
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
                                                <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">竞品深谙“评测榜单”之道</h4>
                                            </div>
                                            <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                                从高频引用文章看（如《2026 高端电视权威横评：竞品A、某家电品牌、竞品B 谁更值得买》），AI 极其偏爱抓取“权威榜单”“参数实测”“选购攻略”类内容，竞品A在这类内容上投放更密集。
                                            </p>
                                        </div>

                                        <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-5 lg:p-6 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight">产品专属词信源仍有缺口</h4>
                                            </div>
                                            <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                                旗舰款B、高端款A 等产品的专属参数与场景内容在头部平台几乎断档。需对准今日头条、什么值得买、太平洋电脑网三大主力平台，批量铺设“分产品实测”与“选购指南”，给 AI 提供抓取素材。
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
Page_SkyworthReport_SourcesAnalysis.hideHeader = true;
