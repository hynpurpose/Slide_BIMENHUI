import React from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_GeoReportDashboard2() {
    return (
        <SlideLayout
            title="总览"
            subtitle="核心指标定义与表现概览"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-2 lg:pt-4 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1600px] mx-auto flex flex-col h-full relative z-10 pt-4">

                    {/* Main Content Area: Side-by-Side aligned Columns */}
                    <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">

                        {/* Left Column: Quantitative Metrics Table */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full justify-between">
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 shrink-0 flex items-center gap-2">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    关键数据指标定义与表现
                                </h3>
                                <div className="overflow-hidden rounded-xl border border-[#004CE5]/20 bg-[#020202]/60 flex-grow flex flex-col justify-center">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                                                <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[24%]">关键数据</th>
                                                <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">定义</th>
                                                <th className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200 w-[38%]">数据说明</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr className="hover:bg-white/[0.02] transition-colors">
                                                <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">提及率</td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                    在测试的词条中，AI回复中包含“萨米特”的概率。
                                                </td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                    <span className="text-blue-400 font-bold">5.8%</span>（在众多家装提问中，AI极少主动推荐萨米特，曝光度严重不足）
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-white/[0.02] transition-colors">
                                                <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">平均提及位次</td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                    当品牌被普及时，在AI生成文本中出现的排位，越靠前权重越高。
                                                </td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                    <span className="text-blue-400 font-bold">NO. 8.1</span>（位次极其靠后，通常排在马可波罗、东鹏、冠珠之后，处于末尾位）
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-white/[0.02] transition-colors">
                                                <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">行业影响力排名</td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                    在AI生态中，各品牌的综合排名。影响力排名越高，说明AI认可度越高。
                                                </td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                    <span className="text-blue-400 font-bold">NO.20</span>（几乎从未作为首选品牌被AI推荐给用户）
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-white/[0.02] transition-colors">
                                                <td className="py-3 px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">Top 引用来源</td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                    AI 生成当前结果时，最底层的数据抓取来源平台。
                                                </td>
                                                <td className="py-3 px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                    前三：太平洋家居 (11.2%)、抖音 (11.2%)、网易 (9.8%)。
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Three Features aligned exactly */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full justify-start min-h-0 gap-3">
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 shrink-0 flex items-center gap-2">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    结合本次数据，萨米特在AI问答里的表现呈现以下特征：
                                </h3>

                                <div className="flex-grow flex flex-col justify-start gap-6 min-h-0 pt-4 lg:pt-6">
                                    {/* Bullet 1 */}
                                    <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-3.5 transition-colors duration-300">
                                        <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">
                                            01
                                        </div>
                                        <div className="min-h-0">
                                            <h4 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white mb-0.5 leading-snug">
                                                整体提及率较低，与品牌地位严重不符
                                            </h4>
                                            <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                萨米特整体提及率仅 <span className="text-blue-400 font-semibold">5.8%</span>。在“质量好”、“口碑好”、“知名品牌品控好”等核心通用词条下提及率均为 <span className="text-blue-400 font-semibold">0.0%</span>，AI 自然状态下几乎不推荐萨米特。
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bullet 2 */}
                                    <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-3.5 transition-colors duration-300">
                                        <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">
                                            02
                                        </div>
                                        <div className="min-h-0">
                                            <h4 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white mb-0.5 leading-snug">
                                                优势场景渗透差，未获 AI 认可
                                            </h4>
                                            <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                主推场景“符合年轻人审美”与“密缝铺贴全套落地”提及率仅为 <span className="text-blue-400 font-semibold">33.3%</span>，且提及位次低至 <span className="text-blue-400 font-semibold">NO.8.7</span> 和 <span className="text-blue-400 font-semibold">NO.4.7</span>，无法形成首推。
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bullet 3 */}
                                    <div className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-3.5 transition-colors duration-300">
                                        <div className="text-[#004CE5] text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">
                                            03
                                        </div>
                                        <div className="min-h-0">
                                            <h4 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white mb-0.5 leading-snug">
                                                与竞品差距悬殊，未关联一线头部
                                            </h4>
                                            <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                东鹏（<span className="text-zinc-200 font-semibold">76.7%</span>）与马可波罗（<span className="text-zinc-200 font-semibold">74.4%</span>）提及率超 70% 且居前五。对比之下，萨米特（<span className="text-blue-400 font-semibold">5.8%</span>，第 <span className="text-blue-400 font-semibold">8.1</span> 位）极易被边缘化。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Full-width Action Callout Card */}
                    <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-5">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            核心行动建议
                        </h3>
                        <div className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <p className="font-bold text-white mb-1 text-[18px] lg:text-[20px]">
                                    急需进行系统化的 GEO 优化与认知重塑
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    当前 AI 对萨米特的认知极度匮乏。必须立即喂养高质量品牌语料，提升“一线品牌”、“年轻化设计”、“优质品控”的权重，在 AI 搜索与问答截流中树立正确的品牌心智。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SlideLayout>
    );
}

export default Page_GeoReportDashboard2;
