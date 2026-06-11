import React from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_GeoReportEntries_Analysis() {
    return (
        <SlideLayout
            title="词条"
            subtitle="词条表现诊断与策略规划"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-4">

                    {/* Main Content Area: Side-by-Side balanced Columns */}
                    <div className="flex-grow grid grid-cols-12 gap-6 min-h-0">

                        {/* Left Column: Core Discoveries (4 Items Grid) */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                                <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                    <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    监测词条核心发现
                                </h3>

                                <div className="flex-grow grid grid-cols-1 gap-4 min-h-0">
                                    {/* Finding 1 */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                        <div className="flex items-center justify-between shrink-0">
                                            <h4 className="text-[19px] lg:text-[21px] font-bold text-white flex items-center gap-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                                核心通用词几乎“全军覆没”
                                            </h4>
                                            <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3.5 py-0.5 rounded font-bold shrink-0">提及率 0.0%</span>
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal">
                                            在消费者最常搜索、流量最大的泛需求词条中，萨米特的提及率全部为 <strong className="text-sky-400 font-bold">0.0%</strong>。这说明品牌在 AI 的底层推荐逻辑中，严重缺乏基础的“实力”与“好评”语料背书。
                                        </p>
                                    </div>

                                    {/* Finding 2 */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                        <div className="flex items-center justify-between shrink-0">
                                            <h4 className="text-[19px] lg:text-[21px] font-bold text-white flex items-center gap-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                                特定“工艺/审美”词条有微弱表现
                                            </h4>
                                            <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3.5 py-0.5 rounded font-bold shrink-0">提及率 33.3%</span>
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal">
                                            萨米特的“年轻化”和“密缝工艺”标签在部分 AI 模型中留下了一定痕迹，但远未形成坚固的护城河。
                                        </p>
                                    </div>

                                    {/* Finding 3 */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                        <div className="flex items-center justify-between shrink-0">
                                            <h4 className="text-[19px] lg:text-[21px] font-bold text-white flex items-center gap-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]" />
                                                表现相对最好的“高位词”
                                            </h4>
                                            <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3.5 py-0.5 rounded font-bold shrink-0">最高均位 NO. 4.7</span>
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal">
                                            在“能实现地面无缝效果的瓷砖推荐”和“密缝铺贴全套落地的瓷砖品牌推荐”这两个问题中，平均排位最高，达到 <strong className="text-sky-400 font-bold">NO. 4.7</strong>。这是萨米特目前距离第一梯队（前三名）最近的细分赛道。
                                        </p>
                                    </div>

                                    {/* Finding 4 */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] rounded-xl p-5 flex flex-col justify-start gap-2.5">
                                        <div className="flex items-center justify-between shrink-0">
                                            <h4 className="text-[19px] lg:text-[21px] font-bold text-white flex items-center gap-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]" />
                                                表现垫底的“陪跑词”
                                            </h4>
                                            <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-blue-300 text-[14px] lg:text-[15px] px-3.5 py-0.5 rounded font-bold shrink-0">均位跌至 NO. 10.3</span>
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal">
                                            在“瓷砖品牌推荐”这一核心大词下，虽然被 AI 提及（<strong className="text-sky-400 font-bold">33.3%</strong>），但均位跌至 <strong className="text-sky-400 font-bold">NO. 10.3</strong>。这意味着在宽泛推荐中，萨米特仅仅被当作长尾品牌罗列在回答的最末端，用户转化概率极低。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Keyword Strategy (Long & Short Boards) */}
                        <div className="col-span-6 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[10px_0_30px_rgba(0,76,229,0.05)] flex flex-col h-full justify-start gap-4">
                                <h3 className="text-2xl lg:text-[25px] font-bold text-white shrink-0 flex items-center gap-2.5 mb-1">
                                    <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    长短板诊断与词条优化策略
                                </h3>

                                <div className="flex-grow grid grid-cols-1 gap-4 min-h-0">
                                    {/* Long Board Strategy */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-[#004CE5] rounded-xl p-6 flex flex-col justify-start gap-3.5">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-white">长板词（工艺与设计）</span>
                                                <span className="text-[14px] lg:text-[15px] bg-[#004CE5]/20 text-blue-300 border border-[#004CE5]/30 px-3.5 py-0.5 rounded font-bold shrink-0">攻坚突破口</span>
                                            </div>
                                            <div className="flex items-center gap-2 py-1">
                                                <span className="text-[14px] lg:text-[15px] text-zinc-400 font-bold shrink-0">覆盖词条：</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {["密缝铺贴全套落地", "能实现地面无缝效果", "符合年轻人审美", "符合现代家装审美"].map((tag, idx) => (
                                                        <span key={idx} className="text-[14px] lg:text-[15px] bg-[#004CE5]/10 border border-[#004CE5]/20 px-2.5 py-0.5 rounded text-blue-200 font-semibold">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal border-t border-white/5 pt-3.5 mt-1">
                                            <strong className="text-white font-bold">诊断与建议：</strong>萨米特在这类词条下已有 33.3% 的提及基础，且排位相对靠前（4.7位至8.7位）。在后续的提案策略中，应将其作为突破口，优先实施关键词集群优化。建议集中资源在此类词条下进行专业内容投喂，用最短的时间将其推举进前三，打造成品牌的绝对优势词。
                                        </p>
                                    </div>

                                    {/* Short Board Strategy */}
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] border-l-4 border-l-red-500/50 rounded-xl p-6 flex flex-col justify-start gap-3.5">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-white">短板词（核心通用词）</span>
                                                <span className="text-[14px] lg:text-[15px] bg-red-950/40 text-red-400 border border-red-950/60 px-3.5 py-0.5 rounded font-bold shrink-0">认知盲区消除</span>
                                            </div>
                                            <div className="flex items-center gap-2 py-1">
                                                <span className="text-[14px] lg:text-[15px] text-zinc-400 font-bold shrink-0">覆盖词条：</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {["性价比高的瓷砖推荐", "质量好的瓷砖推荐", "客厅通铺瓷砖推荐", "厨房卫生间专用瓷砖推荐", "大理石瓷砖推荐"].map((tag, idx) => (
                                                        <span key={idx} className="text-[14px] lg:text-[15px] bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 rounded text-red-200 font-semibold">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-200 leading-relaxed font-normal border-t border-white/5 pt-3.5 mt-1">
                                            <strong className="text-white font-bold">诊断与建议：</strong>15 个高频刚需词条提及率均为 0.0%。这些长尾与泛需求词汇占据了极大的搜索量，但萨米特目前在这些领域的 AI 关联度为零。急需通过行业媒体、专业测评以及高权重内容平台建立关联矩阵，将“萨米特”与这些核心消费决策属性进行强制绑定，消除 AI 认知盲区。
                                        </p>
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

export default Page_GeoReportEntries_Analysis;
