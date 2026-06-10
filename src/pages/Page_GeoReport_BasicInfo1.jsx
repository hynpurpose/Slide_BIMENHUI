import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoReport_BasicInfo1() {
    return (
        <SlideLayout
            title="报告说明"
            subtitle="构建具备高置信度与溯源性客观数据基准"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans pt-4">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

                {/* Main Dashboard Layout */}
                <div className="flex-grow w-full max-w-[1550px] mx-auto px-6 lg:px-8 xl:px-10 pb-8 lg:pb-12 xl:pb-16 relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-0 items-stretch">

                    {/* Left Column - Configurations (45%) */}
                    <div className="flex-[0.95] flex flex-col gap-4 min-h-0">
                        <div className="flex items-center gap-2 px-1 shrink-0">
                            <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full"></span>
                            <h2 className="text-base lg:text-lg xl:text-xl font-black text-zinc-200 tracking-wider">数据监测基准配置</h2>
                        </div>

                        {/* Integrated Configuration Control Center */}
                        <div className="flex-grow bg-[#09090b] border-2 border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative flex flex-col justify-between gap-5">
                            {/* Technical accent corner brackets (static) */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#004CE5]/80"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#004CE5]/80"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#004CE5]/80"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#004CE5]/80"></div>

                            {/* Item 1: Brand */}
                            <div className="flex items-start gap-4 relative z-10 py-2 border-b border-white/5">
                                <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-0.5">品牌名称</span>
                                <div className="flex-1">
                                    <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-wide">萨米特</span>
                                </div>
                            </div>

                            {/* Item 2: Product */}
                            <div className="flex items-start gap-4 relative z-10 py-2 border-b border-white/5">
                                <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-0.5">目标产品</span>
                                <div className="flex-1">
                                    <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-wide">萨米特瓷砖</span>
                                </div>
                            </div>

                            {/* Item 3: Term Configuration */}
                            <div className="flex flex-col relative z-10 py-2 border-b border-white/5">
                                <div className="flex items-start gap-4">
                                    <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-0.5">监测词条</span>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl lg:text-2xl xl:text-3xl font-black text-white">共计 20 项核心词条</span>
                                            <span className="text-zinc-400 text-sm lg:text-base font-bold">/ 每日全频提问一次</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-28 mt-2.5">
                                    <div className="text-zinc-300 text-sm lg:text-base leading-relaxed bg-white/[0.03] border border-white/5 rounded-xl p-4">
                                        已针对本产品自动生成监测项采集逻辑，实时覆盖全链路核心表现。
                                    </div>
                                </div>
                            </div>

                            {/* Item 4: Platforms */}
                            <div className="flex items-start gap-4 relative z-10 py-2">
                                <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-1.5">覆盖平台</span>
                                <div className="flex-1">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-xl lg:text-2xl xl:text-3xl font-black text-white">3 个主流 AI 平台</span>
                                        <div className="flex flex-wrap gap-2.5 mt-1">
                                            <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">DeepSeek</span>
                                            <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">豆包</span>
                                            <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">通义千问</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column - Summary (55%) */}
                    <div className="flex-[1.05] flex flex-col gap-4 min-h-0">
                        <div className="flex items-center gap-2 px-1 shrink-0">
                            <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full"></span>
                            <h2 className="text-base lg:text-lg xl:text-xl font-black text-zinc-200 tracking-wider">数据监测执行摘要</h2>
                        </div>

                        <div className="flex-grow bg-[#09090b] border-2 border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative flex flex-col justify-start gap-5">
                            {/* Technical accent corner brackets (static) */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#004CE5]/80"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#004CE5]/80"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#004CE5]/80"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#004CE5]/80"></div>

                            {/* Console Log-style Summary Paragraph */}
                            <div className="bg-white/[0.01] border border-white/5 rounded-xl p-6 relative flex flex-col justify-start gap-6 flex-grow">
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#004CE5]"></div>
                                
                                {/* Date Summary */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                                        <span className="text-sm lg:text-base text-zinc-400 font-black tracking-widest">周期范围</span>
                                    </div>
                                    <p className="text-base lg:text-lg xl:text-xl text-zinc-200 leading-relaxed tracking-wide">
                                        从 <span className="text-white font-black underline decoration-[#004CE5] decoration-2 underline-offset-4">5月19日～5月19日</span>，围绕 <strong className="text-white font-black px-2 py-0.5 bg-[#004CE5]/20 rounded border border-[#004CE5]/40">萨米特</strong> 品牌负面评价数据监测工作按计划持续推进。<br />
                                        累计执行周期 <span className="text-white font-black">1 天</span>，覆盖 3 个主流 AI 平台（DeepSeek、豆包、通义千问）。
                                    </p>
                                </div>

                                {/* Detailed stats in sentences */}
                                <div className="pt-6 border-t border-white/5 flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                                        <span className="text-sm lg:text-base text-zinc-400 font-black tracking-widest">指标详情</span>
                                    </div>
                                    <p className="text-base lg:text-lg xl:text-xl text-zinc-300 leading-relaxed text-justify tracking-wide">
                                        本周共监测 <span className="text-white font-black">20</span> 个关键词词条，在 <span className="text-white font-black">3</span> 个平台完成 <span className="text-white font-black">1</span> 天连续查询，合计执行查询 <strong className="text-[#004CE5] font-black font-mono text-lg lg:text-xl xl:text-2xl">60</strong> 次，
                                        抓取并识别引用文章 <strong className="text-[#004CE5] font-black font-mono text-lg lg:text-xl xl:text-2xl">659</strong> 篇，同期识别竞品品牌 <strong className="text-[#004CE5] font-black font-mono text-lg lg:text-xl xl:text-2xl">17</strong> 家，
                                        截图覆盖率达 <strong className="text-[#004CE5] font-black font-mono text-xl lg:text-2xl xl:text-3xl">100%</strong>。各项数据指标均在预期执行范围内，整体运行稳定。
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
