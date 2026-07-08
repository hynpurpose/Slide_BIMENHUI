import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

function ScreenshotSlot({ src, alt, hint }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex-1 flex flex-col justify-center items-center min-h-0 pb-1">
            {imgLoaded && !imgError ? (
                <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl transition-all duration-300 hover:border-white/20 group flex items-center justify-center">
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-full w-auto h-auto rounded-xl object-contain group-hover:scale-[1.002] transition-transform duration-500"
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                    />
                </div>
            ) : (
                <div className="w-full max-w-[1550px] aspect-[2/1] max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                    <img src={src} alt={alt} className="hidden" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
                    <div className="absolute inset-2 flex flex-col items-center justify-center p-4 text-center bg-white/[0.01] rounded-xl border border-dashed border-white/10">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-zinc-300 font-bold text-base mb-1">{hint}</p>
                        <p className="text-zinc-500 text-xs max-w-sm mb-3">上传任意比例的图片，外边框将自动无缝贴合原图尺寸，同时最大化屏幕显示。</p>
                        <div className="bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#004CE5]">
                            存放路径: {src}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export function Page_SkyworthReport_OverviewScreenshot() {
    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
                    <div className="text-center mb-5 shrink-0">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            核心指标定义与表现概览
                        </h1>
                    </div>
                    <ScreenshotSlot
                        src="/geo-report/skyworth-dashboard.jpg"
                        alt="某家电品牌核心指标看板大图"
                        hint="此处为数据系统核心指标看板截图 (支持任意比例自适应)"
                    />
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_OverviewScreenshot.hideHeader = true;

export function Page_SkyworthReport_OverviewAnalysis() {
    const kpis = [
        { label: '品牌大词提及率', value: '73.6%', note: '主流问答中被提及' },
        { label: 'Top1 提及率', value: '41.2%', note: '首推位占据比例' },
        { label: 'Top3 提及率', value: '63.5%', note: '进入前三推荐' },
        { label: '平均提及位次', value: 'NO. 2.8', note: '推荐列表中位置' },
    ];

    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-4">
                    <div className="text-center mb-1 shrink-0">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            核心数据总览
                        </h1>
                    </div>

                    {/* Top KPI Row */}
                    <div className="grid grid-cols-4 gap-5 shrink-0">
                        {kpis.map((k, i) => (
                            <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl px-6 py-4 flex flex-col gap-1 shadow-[0_0_25px_rgba(0,76,229,0.06)]">
                                <span className="text-[15px] lg:text-[16px] text-zinc-400 font-bold">{k.label}</span>
                                <span className="text-[40px] lg:text-[46px] font-black text-[#4d8bff] leading-none">{k.value}</span>
                                <span className="text-[13px] text-zinc-500 mt-1">{k.note}</span>
                            </div>
                        ))}
                    </div>

                    {/* Main Content: Two Columns */}
                    <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">

                        {/* Left: 好看的电视 vs 常规电视 */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 flex flex-col h-full justify-start gap-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2.5">
                                    <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    品牌优化词：两个战场表现分化
                                </h3>

                                <div className="flex-1 flex flex-col gap-4 justify-center min-h-0">
                                    {/* 好看的电视 */}
                                    <div className="bg-gradient-to-br from-[#004CE5]/15 to-white/[0.01] border border-[#004CE5]/25 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[19px] lg:text-[21px] font-black text-white">好看的电视（强项）</span>
                                            <span className="text-[13px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/40 px-3 py-0.5 rounded font-bold">绝对领先</span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col"><span className="text-zinc-400 text-[13px]">提及率</span><span className="text-[28px] font-black text-[#4d8bff] leading-none">89.4%</span></div>
                                            <div className="w-px h-8 bg-white/10" />
                                            <div className="flex flex-col"><span className="text-zinc-400 text-[13px]">Top1</span><span className="text-[28px] font-black text-[#4d8bff] leading-none">62.1%</span></div>
                                            <div className="w-px h-8 bg-white/10" />
                                            <div className="flex flex-col"><span className="text-zinc-400 text-[13px]">平均位次</span><span className="text-[28px] font-black text-[#4d8bff] leading-none">NO.1.6</span></div>
                                        </div>
                                        <p className="text-[14px] lg:text-[15px] text-zinc-300 leading-relaxed mt-2.5">
                                            艺术电视 / 壁纸电视 / 超薄电视 / 画框电视等词已牢牢占据 AI 首推位。
                                        </p>
                                    </div>

                                    {/* 常规电视 */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] border-l-4 border-l-red-500/50 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[19px] lg:text-[21px] font-black text-white">常规电视（短板）</span>
                                            <span className="text-[13px] bg-red-950/40 text-red-400 border border-red-950/60 px-3 py-0.5 rounded font-bold">未达标</span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col"><span className="text-zinc-400 text-[13px]">提及率</span><span className="text-[28px] font-black text-rose-300 leading-none">45.2%</span></div>
                                            <div className="w-px h-8 bg-white/10" />
                                            <div className="flex flex-col"><span className="text-zinc-400 text-[13px]">Top1</span><span className="text-[28px] font-black text-rose-300 leading-none">12.4%</span></div>
                                            <div className="w-px h-8 bg-white/10" />
                                            <div className="flex flex-col"><span className="text-zinc-400 text-[13px]">平均位次</span><span className="text-[28px] font-black text-rose-300 leading-none">NO.6.3</span></div>
                                        </div>
                                        <p className="text-[14px] lg:text-[15px] text-zinc-300 leading-relaxed mt-2.5">
                                            质量好 / 画质好 / 音响好等通用词被竞品A、竞品B 挤压，落在推荐列表中后段。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: 三大特征 */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 flex flex-col h-full justify-start gap-3">
                                <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                    <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    结合本次数据，某家电品牌在 AI 问答里呈现三大特征
                                </h3>

                                <div className="flex-1 flex flex-col justify-center gap-3.5 min-h-0">
                                    {[
                                        { n: '01', t: '“好看的电视”心智已被 AI 采信', d: '在壁纸电视相关的品类大词中，某家电品牌几乎是 AI 的默认首选，品牌与品类深度绑定。' },
                                        { n: '02', t: '通用电视词竞争激烈、声量偏弱', d: '一旦脱离“好看”标签进入通用性能词，AI 更倾向推荐竞品A、竞品B，某家电品牌存在感明显下降。' },
                                        { n: '03', t: '五款产品冷热不均，长尾词覆盖不足', d: '旗舰 旗舰款C 表现突出，但走量款与线下款在专属参数词、场景词上的语料覆盖仍有缺口。' },
                                    ].map((b) => (
                                        <div key={b.n} className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-3 transition-colors duration-300">
                                            <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">{b.n}</div>
                                            <div className="min-h-0">
                                                <h4 className="text-[17px] lg:text-[19px] font-bold text-white mb-0.5 leading-snug">{b.t}</h4>
                                                <p className="text-[15px] lg:text-[16px] text-zinc-300 leading-relaxed text-justify">{b.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Callout */}
                    <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl px-6 py-4 shrink-0 flex items-center gap-4">
                        <span className="text-[18px] lg:text-[20px] font-black text-white shrink-0">核心结论</span>
                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                            某家电品牌在“好看的电视”赛道已建立 AI 认知优势，<strong className="text-white font-bold">守住第一是底线</strong>；真正的增长空间在于把通用电视词与五款产品的专属词声量补齐，<strong className="text-white font-bold">从“单点领先”走向“全面覆盖”</strong>。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_OverviewAnalysis.hideHeader = true;
