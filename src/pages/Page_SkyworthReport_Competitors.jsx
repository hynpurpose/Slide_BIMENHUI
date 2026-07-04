import React from 'react';
import SlideLayout from '../components/SlideLayout';

const mentionRateData = [
    { name: '创维', value: '73.6%', isBrand: true, rank: 1 },
    { name: '海信', value: '68.2%' },
    { name: 'TCL', value: '61.4%' },
    { name: '华为智慧屏', value: '52.7%' },
    { name: '小米', value: '48.1%' },
];

const top1RateData = [
    { name: '创维', value: '41.2%', isBrand: true, rank: 1 },
    { name: '海信', value: '38.5%' },
    { name: 'TCL', value: '29.7%' },
    { name: '华为智慧屏', value: '21.3%' },
    { name: '小米', value: '18.6%' },
];

const avgRankData = [
    { name: '海信', value: 'NO. 2.6', rank: 1 },
    { name: '创维', value: 'NO. 2.8', isBrand: true, rank: 2 },
    { name: 'TCL', value: 'NO. 3.5' },
    { name: '华为智慧屏', value: 'NO. 4.8' },
    { name: '小米', value: 'NO. 5.2' },
];

function renderTable(title, headers, data) {
    return (
        <div className="flex flex-col gap-2 h-full min-h-0">
            <h3 className="text-lg lg:text-xl font-extrabold text-white tracking-wide pl-1.5 flex items-center gap-2 shrink-0">
                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                {title}
            </h3>
            <div className="flex-grow rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden flex flex-col p-3">
                <table className="w-full text-left border-collapse table-fixed flex-grow h-full">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/[0.04]">
                            <th className="py-2.5 px-2 w-[18%]"></th>
                            <th className="py-2.5 px-2 text-sm lg:text-base font-semibold text-zinc-400 w-[52%]">{headers[0]}</th>
                            <th className="py-2.5 px-2 text-sm lg:text-base font-semibold text-zinc-400 w-[30%] text-right pr-4">{headers[1]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => {
                            const isBrand = item.isBrand;
                            const rankNum = item.rank || (idx + 1);
                            let rankElement;
                            if (rankNum === 1) {
                                rankElement = <div className="w-8 h-8 rounded-full bg-[#FFD100] text-zinc-950 flex items-center justify-center font-black text-sm shadow-md">1</div>;
                            } else if (rankNum === 2) {
                                rankElement = <div className="w-8 h-8 rounded-full bg-zinc-700 text-zinc-200 flex items-center justify-center font-bold text-sm">2</div>;
                            } else if (rankNum === 3) {
                                rankElement = <div className="w-8 h-8 rounded-full bg-[#FFC085] text-zinc-900 flex items-center justify-center font-bold text-sm shadow-md">3</div>;
                            } else {
                                rankElement = <div className="text-zinc-400 font-bold text-sm text-center w-8">{rankNum}</div>;
                            }
                            return (
                                <tr key={idx} className={`border-b border-white/5 last:border-none hover:bg-white/[0.02] transition-colors ${isBrand ? 'bg-[#004CE5]/10 border-y border-[#004CE5]/20' : ''}`}>
                                    <td className="py-2 px-2 align-middle"><div className="flex justify-center">{rankElement}</div></td>
                                    <td className="py-2 px-2 align-middle">
                                        <div className="flex items-center flex-wrap gap-1.5">
                                            <span className={`text-[15px] lg:text-[16px] ${isBrand ? 'font-black text-blue-400' : 'font-semibold text-zinc-200'}`}>{item.name}</span>
                                            {isBrand && <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">本品牌</span>}
                                        </div>
                                    </td>
                                    <td className={`py-2 px-2 text-right pr-4 align-middle text-lg lg:text-xl font-bold font-mono ${isBrand ? 'text-blue-400' : 'text-zinc-300'}`}>{item.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function Page_SkyworthReport_CompetitorsAnalysis() {
    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-3">

                    <div className="text-center shrink-0 mb-1">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            竞品横向对比
                        </h1>
                    </div>

                    <div className="flex-1 grid grid-cols-3 gap-6 min-h-0 mb-1">
                        {renderTable('提及率排名', ['品牌名称', '提及率'], mentionRateData)}
                        {renderTable('Top1 提及率排名', ['品牌名称', 'Top1 提及率'], top1RateData)}
                        {renderTable('平均提及位次排名', ['品牌名称', '平均提及位次'], avgRankData)}
                    </div>

                    <div className="border border-[#004CE5]/30 border-l-4 border-l-blue-500 bg-[#004CE5]/10 rounded-xl px-6 py-3.5 shrink-0 flex items-center gap-4 mb-2">
                        <p className="text-[17px] lg:text-[18.5px] xl:text-[20.5px] text-zinc-100 leading-relaxed">
                            <strong className="text-blue-400 font-black">核心结论：</strong>创维在 <strong className="text-white font-black">提及率（73.6%）</strong> 与 <strong className="text-white font-black">Top1 提及率（41.2%）</strong> 上高居行业第一，但在 <strong className="text-white font-black">平均提及位次</strong> 上以 NO.2.8 微弱落后于海信（NO.2.6）——创维“被提及得多”，但海信“被排得更靠前”。
                        </p>
                    </div>

                    <div className="h-[30%] min-h-[200px] max-h-[260px] shrink-0 grid grid-cols-12 gap-5 mt-1">
                        {/* Column 1 */}
                        <div className="col-span-4 flex flex-col min-h-0">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-6 flex flex-col h-full justify-start gap-2.5">
                                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    核心发现
                                </h3>
                                <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                    <p><strong className="text-white font-bold">品类优势明显：</strong>“好看的电视”词群拉高了创维整体提及率，声量领先海信、TCL。</p>
                                    <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">位次略逊一筹：</strong>海信在通用性能词的首推位更稳，把平均位次拉到了行业第一。</p>
                                </div>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="col-span-4 flex flex-col min-h-0">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-6 flex flex-col h-full justify-start gap-2.5">
                                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    竞争格局总结
                                </h3>
                                <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                    <p><strong className="text-white font-bold">海信最强对手：</strong>海信在参数词、性能词上语料密集，是创维通用赛道的头号劲敌。</p>
                                    <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">华为来势凶猛：</strong>华为智慧屏靠生态与话题度快速上位，需重点监测其增速。</p>
                                </div>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="col-span-4 flex flex-col min-h-0">
                            <div className="bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-5 pb-4 px-6 flex flex-col h-full justify-start gap-2.5 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    行动建议
                                </h3>
                                <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                    <p><strong className="text-white font-bold">守住品类护城河：</strong>持续加固“好看的电视”词群，不给跟风者可乘之机。</p>
                                    <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">强攻位次差距：</strong>在通用性能词密集投放对标横评，把平均位次抢回行业第一。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_CompetitorsAnalysis.hideHeader = true;

export function Page_SkyworthReport_CompetitorsDetail() {
    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-4">

                    <div className="text-center shrink-0 mb-1">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            主要竞品（海信）分析
                        </h1>
                    </div>

                    <div className="flex-1 grid grid-cols-12 gap-6 min-h-0 mb-2">

                        {/* Left */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col h-full justify-start gap-4">
                                <h3 className="text-[22px] lg:text-[24px] font-bold text-white shrink-0 flex items-center gap-2 mb-1">
                                    <span className="w-1.5 h-4.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                    海信在 AI 里的现状
                                </h3>

                                <div className="flex-grow flex flex-col justify-between gap-3 min-h-0">
                                    {[
                                        { n: '01', t: '通用性能词首推位垄断', d: '在“画质好的电视”“护眼电视”等通用性能词下，海信 ULED 语料铺设密集，长期占据 AI 首推位，平均位次做到行业第一（NO.2.6）。' },
                                        { n: '02', t: '高频引用源大面积占位', d: '在今日头条、什么值得买、太平洋电脑网等 AI 高频引用平台，海信铺设了大量参数横评与技术科普，为大模型提供了丰富抓取素材。' },
                                        { n: '03', t: '参数话术强绑定', d: 'AI 生成电视推荐时，推荐理由高度契合海信的“背光分区、峰值亮度”话术，底层语料已被成功“喂养”。' },
                                    ].map((b) => (
                                        <div key={b.n} className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex gap-4 transition-colors duration-300">
                                            <div className="text-blue-400 text-2xl lg:text-3xl font-mono font-bold select-none pt-0.5 shrink-0">{b.n}</div>
                                            <div className="min-h-0">
                                                <h4 className="text-[19px] lg:text-[21px] font-bold text-white mb-1 leading-snug">{b.t}</h4>
                                                <p className="text-[16px] lg:text-[18px] text-zinc-300 leading-relaxed text-justify">{b.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: image slot */}
                        <div className="col-span-6 flex flex-col items-center justify-center min-h-0 h-full">
                            <div className="relative max-h-full max-w-full w-full h-full bg-[#004CE5]/[0.01] border border-[#004CE5]/20 rounded-2xl p-3 flex flex-col justify-between shadow-[0_0_20px_rgba(0,76,229,0.03)] hover:border-[#004CE5]/35 transition-all duration-300 group">
                                <div className="flex-1 flex items-center justify-center min-h-0">
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-white/[0.01] rounded-xl border border-dashed border-white/10 p-4 text-center">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                                            <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-zinc-300 font-bold text-base mb-1">此处为竞品 AI 对话对比截图展示位</p>
                                        <div className="bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#004CE5]">
                                            存放路径: /geo-report/skyworth-haixin-analysis.jpg
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-[#004CE5]/10 mt-2.5 pt-2 px-1 shrink-0">
                                    <p className="text-[14px] lg:text-[15.5px] xl:text-[17px] text-zinc-300 leading-normal text-center">
                                        海信与创维 AI 对话对比场景：通用性能词下 AI <strong className="text-blue-400 font-bold">首推海信</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-red-500/25 border-l-4 border-l-red-500 bg-red-950/20 rounded-xl px-6 py-3.5 shrink-0 flex items-center gap-4">
                        <p className="text-[16px] lg:text-[17.5px] xl:text-[19.5px] text-red-200 leading-relaxed">
                            <strong className="text-red-400 font-black">核心建议：</strong>海信已在通用性能词构建体系化 GEO 优势。创维须在守住“好看的电视”品类心智的同时，立刻在通用性能词密集投放对标横评与参数科普，抢回被海信垄断的首推位次！
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_CompetitorsDetail.hideHeader = true;
