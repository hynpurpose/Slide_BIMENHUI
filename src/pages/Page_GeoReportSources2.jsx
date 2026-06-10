import React from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_GeoReportSources2() {
    const rankings = [
        { name: '太平洋家居', value: '11.2%', widthClass: 'w-[90%]' },
        { name: '抖音', value: '11.2%', widthClass: 'w-[90%]' },
        { name: '网易', value: '9.8%', widthClass: 'w-[78%]' },
        { name: '今日头条', value: '8.3%', widthClass: 'w-[66%]' },
        { name: '界面新闻', value: '5.2%', widthClass: 'w-[42%]' },
    ];

    return (
        <SlideLayout
            title="引用源"
            subtitle="引用源分析"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-8 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-grow min-h-0 relative z-10 pt-4 gap-4">

                    {/* Main Content Layout: Vertically Centered 2-Column Grid with Shrunk Height */}
                    <div className="flex-grow flex flex-col justify-center min-h-0">
                        <div className="w-full h-[85%] max-h-[660px] min-h-[540px] grid grid-cols-12 gap-6 self-center">

                            {/* Left Column: Health Assessment */}
                            <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                                <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3">

                                    {/* Card Title */}
                                    <div className="shrink-0">
                                        <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                            引用源健康度评估
                                        </h3>
                                    </div>

                                    {/* Card Content & Data Visualization */}
                                    <div className="flex-grow flex flex-col justify-center gap-5 min-h-0">
                                        {/* Verbatim Text with Increased Font Size */}
                                        <div className="text-[19px] lg:text-[20px] xl:text-[21px] text-zinc-300 leading-relaxed font-normal">
                                            <p>
                                                监测数据显示，决定萨米特在 AI 问答中表现的最底层数据抓取来源，高度集中在传统的<strong className="text-white font-semibold">泛资讯与家居门户</strong>。
                                            </p>
                                            <p className="mt-2.5">
                                                排名前五的引用平台分别为：
                                                <strong className="text-white font-bold">太平洋家居（11.2%）</strong>、
                                                <strong className="text-white font-bold">抖音（11.2%）</strong>、
                                                <strong className="text-white font-bold">网易（9.8%）</strong>、
                                                <strong className="text-white font-bold">今日头条（8.3%）</strong>和
                                                <strong className="text-white font-bold">界面新闻（5.2%）</strong>。
                                            </p>
                                            <p className="mt-2.5 border-t border-white/5 pt-2.5">
                                                在文章引用率排名榜单中，充斥着如“千龙网·中国首都网”、“界面新闻”等新闻媒体的稿件。
                                            </p>
                                        </div>

                                        {/* Horizontal Visual Rankings Bar Chart with Clear Spacing */}
                                        <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col gap-2.5">
                                            <div className="text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-0.5">
                                                TOP 5 引用平台份额对比
                                            </div>
                                            {rankings.map((item, idx) => (
                                                <div key={idx} className="flex items-center justify-between gap-4">
                                                    <div className="w-28 text-[16px] lg:text-[17px] text-zinc-400 truncate font-medium">
                                                        {item.name}
                                                    </div>
                                                    <div className="flex-1 bg-white/5 h-2 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full transition-all duration-1000 ${item.widthClass}`}
                                                            style={{ transformOrigin: 'left' }}
                                                        />
                                                    </div>
                                                    <div className="w-12 text-right text-[16px] lg:text-[17px] text-white font-bold">
                                                        {item.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Diagnostics & Insights */}
                            <div className="col-span-12 lg:col-span-6 flex flex-col min-h-0 h-full">
                                <div className="bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-between gap-3 shadow-[0_0_25px_rgba(0,76,229,0.06)]">

                                    {/* Card Title */}
                                    <div className="shrink-0">
                                        <h3 className="text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                            诊断与洞察
                                        </h3>
                                    </div>

                                    {/* Bullet Point Cards with Increased Font Size and Balanced Padding */}
                                    <div className="flex-grow flex flex-col justify-center gap-4 min-h-0">

                                        {/* Bullet 1: 深度语料极度匮乏 */}
                                        <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-[#004CE5] p-6 lg:p-7 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                                <h4 className="text-[20px] lg:text-[21px] xl:text-[22px] font-bold text-white leading-tight">
                                                    深度语料匮乏
                                                </h4>
                                            </div>
                                            <p className="text-[18px] lg:text-[19px] text-zinc-300 leading-relaxed font-normal">
                                                虽然有抖音（11.2%）这类泛娱乐流媒体提供支撑，但严重缺乏如知乎、垂类家装问答等高权重专业平台的深度语料背书。AI 在生成长文本分析、硬核技术科普或横向测评时，往往会因为缺乏足够专业的抓取源而直接放弃推荐萨米特。
                                            </p>
                                        </div>

                                        {/* Bullet 2: 抗风险能力差 */}
                                        <div className="bg-white/[0.03] border border-white/5 border-l-4 border-l-amber-500 p-6 lg:p-7 rounded-r-xl transition-all duration-300 hover:bg-white/[0.05]">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                <h4 className="text-[20px] lg:text-[21px] xl:text-[22px] font-bold text-white leading-tight">
                                                    抗风险能力差
                                                </h4>
                                            </div>
                                            <p className="text-[18px] lg:text-[19px] text-zinc-300 leading-relaxed font-normal">
                                                引用源过于依赖某几家公关媒体通稿，一旦特定平台权重下降或出现对立观点，品牌被影响的风险非常大。
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

export default Page_GeoReportSources2;
