import React from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_SkyworthValueAddedServices() {
    return (
        <SlideLayout fullBleed>
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-2.5 animate-fade-in">
            <div className="w-full flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-1.5 xl:gap-2">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0 mt-0.5">
                    <h1 className="text-[40px] font-extrabold text-white tracking-widest leading-tight">
                        增值服务
                    </h1>
                </div>

                {/* Main Content Box - Glassmorphic styled matching Page_SkyworthWorkAcceptance */}
                <div className="w-full mt-1 xl:mt-1.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-[8px] px-[16px] xl:py-[12px] xl:px-[24px] shadow-2xl flex flex-col gap-1.5 xl:gap-2 flex-1 min-h-0">

                    {/* Table Container */}
                    <div className="w-full flex-1 flex flex-col justify-center min-h-0">
                        <table className="w-full text-left border-collapse h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-200 text-[21px] xl:text-[23px] font-black">
                                    <th className="pb-2.5 pl-3.5 w-[15%]">服务项目</th>
                                    <th className="pb-2.5 w-[42%] pl-5">服务内容</th>
                                    <th className="pb-2.5 w-[23%] pl-5">预期成效</th>
                                    <th className="pb-2.5 pr-3.5 w-[20%] pl-6">协同事项</th>
                                </tr>
                            </thead>
                            <tbody className="text-[20px] xl:text-[22px] leading-snug">

                                {/* Row 1: 信息纠偏 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2 xl:py-2.5 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[22px] xl:text-[24px] text-white font-black">信息纠偏</span>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、大模型舆情监测：</strong>日常监测各大 AI 大模型中有关创维电视的言论，排查是否存在型号价格、参数规格或异常吐槽等误导性内容。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、负面快速净化：</strong>定位问题引用源，立即生成高权重澄清和权威说明语料进行补充发布，稀释负面声音并纠正 AI 记忆。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-2.5 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-snug">
                                                降低负面言论被抓取概率，保障 AI 生成的品牌及价格信息 <strong className="text-white font-bold">准确与可信</strong>，防止流量流失。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6 border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-2.5 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                配合提供官方最新的产品规格说明、控价依据，协助判断异常信息的处理优先级。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2: 知识库搭建 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2 xl:py-2.5 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[22px] xl:text-[24px] text-white font-black">知识库搭建</span>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、数字资产整理：</strong>整合创维壁纸电视的研发背景、专利技术（如壁纸屏、超薄一体化、画质芯片）、5 款产品指标及官方 Q&A 问答对。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、标准化结构改造：</strong>将零散的事实转化为大模型偏好、利于爬虫收录的标准化结构语料，建立品牌专属知识屋。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-2.5 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-snug">
                                                确立品牌在大模型底层的“首推事实共识”，消除 AI 的认知真空，<strong className="text-white font-bold">大幅提高 AI 首选推荐概率</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6 border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-2.5 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                提供品牌历史档案、研发专利证明、产品宣发口径及高频售后答疑库。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3: 官网改造 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2 xl:py-2.5 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[22px] xl:text-[24px] text-white font-black">官网改造</span>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、官方信息点优化：</strong>对官网及官方微信公众号等内容进行排版与代码优化，添加利于 AI 识别的语义标签。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、抓取信号增强：</strong>在官方站点内埋设高权重答疑和可信事实节点，方便 AI 智能体检索和抓取官方权威信息。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-2.5 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-snug">
                                                强化官方渠道对于大模型的影响力，<strong className="text-white font-bold">显著提升官方源被 AI 引用为出处（Citation）</strong>的概率。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6 border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-2.5 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                配合开放官网后台或对接技术团队，协助完成页面信息及标签修改。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 4: 竞品监测 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2 xl:py-2.5 pl-3.5 font-semibold text-zinc-100 align-middle">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[22px] xl:text-[24px] text-white font-black">竞品监测</span>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、竞品推荐率监控：</strong>持续追踪主要竞品（如海信、TCL、华为等）在各大模型推荐大盘中的位次变化和声量分布。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、攻防话术调整：</strong>当竞品提及率出现异常上涨时，立即输出防御及拦截建议，动态调整创维壁纸电视的画质、超薄等优势科普投放方向。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4 border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-2.5 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-snug">
                                                掌握竞品在 AI 端的策略走向，<strong className="text-white font-bold">守护品牌声量份额</strong>，快速反击竞争对手的拦截尝试。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-2.5 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                明确重点防守及对线竞品名单，并协同锁定防守反击时的话术与对比口径。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        </SlideLayout>
    );
}

Page_SkyworthValueAddedServices.hideHeader = true;

export default Page_SkyworthValueAddedServices;
