import React from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_SkyworthKpiAcceptance() {
    return (
        <SlideLayout fullBleed>
        <div className="w-full h-full flex flex-col relative text-white font-sans pt-1.5 overflow-hidden animate-fade-in">
            <div className="w-full flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-0.5 xl:gap-1">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0 mt-0">
                    <h1 className="text-[40px] font-extrabold text-white tracking-widest leading-tight">
                        KPI 及验收标准
                    </h1>
                </div>

                {/* H3 for Brand Current Status */}
                <div className="flex items-center justify-between shrink-0 pl-1 mt-1 xl:mt-1.5">
                    <h3 className="text-[21px] xl:text-[23px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        品牌当前现状
                    </h3>
                </div>

                {/* Top Section: Current Status Panels */}
                <div className="grid grid-cols-12 gap-3 shrink-0 mt-1 xl:mt-1.5">
                    {/* Panel 1: 好看的电视（强项） */}
                    <div className="col-span-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-5 xl:py-3 xl:px-[24px] flex flex-col gap-1.5 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[21px] xl:text-[23px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                「好看的电视」品类现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-8 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[16px] xl:text-[17px] font-medium">提及率</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">82.0%</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[16px] xl:text-[17px] font-medium">平均提及位次</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">NO. 1.6</span>
                            </div>
                        </div>
                        <p className="text-[18px] xl:text-[20px] text-zinc-300 leading-snug text-justify">
                            在「<strong className="text-white font-semibold">艺术电视 / 壁纸电视 / 超薄电视 / 画框电视</strong>」等好看的电视核心词下，创维已建立<strong className="text-white font-semibold">绝对领先</strong>的能见度与推荐位次，但海信、TCL、华为等跟风者正持续加码同类词条，若不主动守位，第一推荐位存在被稀释的风险。
                        </p>
                    </div>

                    {/* Panel 2: 负面及错误信息现状 */}
                    <div className="col-span-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2 px-5 xl:py-3 xl:px-[24px] flex flex-col gap-1.5 shadow-xl hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[21px] xl:text-[23px] font-bold text-zinc-100 flex items-center gap-2">
                                <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                                负面及错误信息现状：
                            </span>
                        </div>
                        <div className="flex items-center gap-8 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-zinc-400 text-[16px] xl:text-[17px] font-medium">负面及异常回答比例</span>
                                <span className="text-[34px] xl:text-[38px] font-extrabold text-[#004CE5] leading-none mt-1">3.2%</span>
                            </div>
                        </div>
                        <p className="text-[18px] xl:text-[20px] text-zinc-300 leading-snug text-justify">
                            负面及异常占比为 <strong className="text-white font-semibold">3.2%</strong>，集中在“<strong className="text-white font-semibold">型号价格混淆</strong>”以及“<strong className="text-white font-semibold">历史价格 / 旧款参数引用</strong>”等问题上；AI 主要抓取到含有过时价格与型号信息的陈旧评测文章，容易对消费者形成认知误导。
                        </p>
                    </div>
                </div>

                {/* Premium Horizontal Divider Line */}
                <div className="w-full h-px bg-white/[0.08] mt-1.5 xl:mt-2 mb-0.5 xl:mb-1" />

                {/* H3 placed outside the table card, position remains the same in flow */}
                <div className="flex items-center justify-between shrink-0 pl-1 mt-0">
                    <h3 className="text-[21px] xl:text-[23px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        KPI与交付标准
                    </h3>
                </div>

                {/* Bottom Section: KPI & Acceptance Table */}
                <div className="w-full mt-1 xl:mt-1.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-[8px] px-[16px] xl:py-[12px] xl:px-[24px] shadow-2xl flex flex-col gap-1.5 xl:gap-2 flex-1 min-h-0">

                    {/* Table wrapper showing the full layout without vertical scrollbar */}
                    <div className="w-full flex-1 flex flex-col justify-center min-h-0">
                        <table className="w-full text-left border-collapse h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-300 text-[20px] xl:text-[22px] font-black">
                                    <th className="pb-2.5 pl-4 w-[11.5%]">词组分类</th>
                                    <th className="pb-2.5 w-[28.5%]">运营目标与三阶段演进策略</th>
                                    <th className="pb-2.5 w-[22%]">阶段性交付标准与 KPI 考核</th>
                                    <th className="pb-2.5 pr-4 w-[38%] pl-6">最终展现权益及交付标准</th>
                                </tr>
                            </thead>
                            <tbody className="text-[20px] leading-snug">

                                {/* Row 1: 品牌词（一守一攻） */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22]">
                                    <td className="py-2 xl:py-2.5 pl-4 font-semibold text-zinc-100 align-top">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[21px] xl:text-[23px] text-white font-extrabold">品牌词</span>
                                            <span className="text-[16px] xl:text-[17px] text-zinc-400 font-bold">（一守一攻）</span>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2 xl:gap-2.5">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-white/10 text-zinc-200 px-2 py-[1.5px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[20px] leading-snug text-justify">
                                                    <span className="text-white font-black">打地基｜3个月</span>
                                                    <span className="text-zinc-400 ml-2.5">好看的电视全面固位，常规电视基础曝光</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-white/10 text-zinc-200 px-2 py-[1.5px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[20px] leading-snug text-justify">
                                                    <span className="text-white font-black">稳提升｜6个月</span>
                                                    <span className="text-zinc-400 ml-2.5">压制跟风者，常规电视挤入核心推荐榜</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-white/10 text-zinc-200 px-2 py-[1.5px] rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[20px] leading-snug text-justify">
                                                    <span className="text-white font-black">占高位｜3个月</span>
                                                    <span className="text-zinc-400 ml-2.5">好看的电视稳居第一，常规电视冲进 TOP3</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-top pr-4">
                                        <div className="flex flex-col gap-2 xl:gap-2.5">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1.5px] rounded shrink-0 mt-0.5">阶段一考核</span>
                                                <div className="text-[20px] leading-snug text-zinc-200">
                                                    好看的电视位次稳定 <strong className="text-white font-black">NO.1</strong>，<br />常规电视提及率提升至 <strong className="text-white font-bold">40%</strong>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1.5px] rounded shrink-0 mt-0.5">阶段二考核</span>
                                                <div className="text-[20px] leading-snug text-zinc-200">
                                                    常规电视提及率提升至 <strong className="text-white font-black">60%</strong>，<br />平均位次进入前 <strong className="text-white font-bold">5</strong>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 px-1.5 py-[1.5px] rounded shrink-0 mt-0.5">阶段三考核</span>
                                                <div className="text-[20px] leading-snug text-zinc-200">
                                                    常规电视进入 <strong className="text-white font-black">TOP3</strong>，<br />好看的电视提及率 <strong className="text-white font-bold">≥ 90%</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-top pr-4 border-l border-white/[0.22] pl-6">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl">
                                            <p className="text-zinc-150 text-[18px] xl:text-[19px] leading-snug text-justify">
                                                在 <strong className="text-white font-bold">DeepSeek、豆包、元宝、通义千问</strong> 四个 AI 平台搜索约定词条时，AI 回答中应出现创维品牌/产品推荐、推荐理由及基于官方信息的产品表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-2 text-zinc-400 text-[16px] xl:text-[17px] leading-snug text-justify">
                                                本次运营 <strong className="text-white font-bold">50 条核心词条</strong>（覆盖 500 种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 16 条即视为有效交付；低于 16 条的，按未达标比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2: 监测词（负面及错误） */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2 xl:py-2.5 pl-4 font-semibold text-zinc-100 align-middle">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[21px] xl:text-[23px] text-white font-extrabold">监测词</span>
                                            <span className="text-[16px] xl:text-[17px] text-zinc-400 font-bold">（负面及错误）</span>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4">
                                        <div className="flex flex-col gap-2 xl:gap-2.5">
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-white/10 text-zinc-200 px-2 py-[1.5px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[20px] leading-snug text-justify">
                                                    <span className="text-white font-black">查问题｜1个月</span>
                                                    <span className="text-zinc-400 ml-2.5">建立负面 / 错误信息监测，定制针对性策略</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-[15px] xl:text-[16px] font-black bg-white/10 text-zinc-200 px-2 py-[1.5px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[20px] leading-snug text-justify">
                                                    <span className="text-white font-black">解问题｜11个月</span>
                                                    <span className="text-zinc-400 ml-2.5">分类处理错误信源，修正型号价格等异常信息</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-300 align-middle pr-4">
                                        <div className="flex flex-col gap-2 font-medium bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 xl:p-3 rounded-xl text-[18px] xl:text-[20px] leading-snug text-justify">
                                            <p className="text-zinc-200">
                                                针对品牌询问，AI 生成内容的<strong className="text-white font-bold">核心事实准确率</strong>达到约定标准，<strong className="text-[#8cb1ff] font-bold">负面信息占比守住 10% 红线以内</strong>，正向/中性情绪导向占比稳定在 <strong className="text-white font-bold">90% 以上</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2 xl:py-2.5 text-zinc-400 align-middle pr-4 leading-snug border-l border-white/[0.22] pl-6 text-zinc-200">
                                        <div className="flex flex-col gap-2 bg-white/[0.015] border border-white/[0.04] p-2.5 xl:p-3 rounded-xl text-[18px] xl:text-[19px] text-justify">
                                            <p>
                                                围绕约定平台、5 款壁纸电视及核心词条，持续监测并纠偏价格错乱、型号混淆、历史价格引用等问题，通过信源定位、官方口径强化和内容覆盖，降低 AI 引用错误信息的概率。
                                            </p>
                                            <p className="border-t border-white/10 pt-2 text-zinc-400 text-[16px] xl:text-[17px]">
                                                因 AI 平台升级、信源变化及回答随机性等不可控因素，项目以<strong className="text-white font-bold">核心错误压制</strong>、<strong className="text-white font-bold">正确信息占比提升</strong>作为交付标准。
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

Page_SkyworthKpiAcceptance.hideHeader = true;

export default Page_SkyworthKpiAcceptance;
