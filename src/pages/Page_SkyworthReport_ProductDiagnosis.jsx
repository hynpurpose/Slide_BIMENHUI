import React from 'react';
import SlideLayout from '../components/SlideLayout';

// ─── 五款产品诊断数据（占位示意，可按真实报告替换）───
const PRODUCTS = [
    {
        model: '旗舰款A', tier: '线上基础 · 走量王者', line: '线上',
        status: 'warn',
        self: { mention: '71.0%', top1: '38.2%', rank: 'NO. 2.9' },
        competitors: [
            { name: '竞品A E5N', mention: '74.5%', top1: '42.0%' },
            { name: '竞品B T7K', mention: '69.8%', top1: '35.6%' },
            { name: '某家电品牌 旗舰款A', mention: '71.0%', top1: '38.2%', isBrand: true },
        ],
        reasons: [
            { title: '专属参数词覆盖不足', desc: '走量款的核心卖点（如刷新率、峰值亮度）缺乏结构化语料，AI 难以在“性价比参数”问法中优先引用某家电品牌。' },
            { title: '评测内容被竞品淹没', desc: '竞品A E5N 在今日头条、什么值得买铺设了大量横评软文，旗舰款A 的第三方实测背书数量明显偏少。' },
        ],
    },
    {
        model: '旗舰款B', tier: '音画升级 · 卡位款', line: '线上',
        status: 'fail',
        self: { mention: '66.3%', top1: '33.1%', rank: 'NO. 3.4' },
        competitors: [
            { name: '竞品B T7K Pro', mention: '72.1%', top1: '41.5%' },
            { name: '竞品A E7N', mention: '70.4%', top1: '39.0%' },
            { name: '某家电品牌 旗舰款B', mention: '66.3%', top1: '33.1%', isBrand: true },
        ],
        reasons: [
            { title: '价位段认知尚未建立', desc: '旗舰款B 意在卡位市场空档，但 AI 尚未把它与“音画升级/独占价位”强关联，问法命中率偏低。' },
            { title: '音画技术词语料稀薄', desc: '在“音质好的电视”“影院级音效”等词下，竞品的技术科普内容更密集，旗舰款B 差异化优势没被 AI 学到。' },
        ],
    },
    {
        model: '旗舰款C', tier: '系列旗舰 · 天花板', line: '线上',
        status: 'pass',
        self: { mention: '78.4%', top1: '45.6%', rank: 'NO. 2.3' },
        competitors: [
            { name: '某家电品牌 旗舰款C', mention: '78.4%', top1: '45.6%', isBrand: true },
            { name: '竞品A E8N', mention: '75.2%', top1: '43.1%' },
            { name: '进口品牌A The Frame', mention: '61.0%', top1: '30.2%' },
        ],
        reasons: [
            { title: '旗舰词已达标，对标海外仍有差距', desc: '国内旗舰壁纸电视词表现优秀，但在与进口品牌A、进口品牌B 等海外高端对比问法中，某家电品牌的国际背书语料偏少。' },
            { title: '高端画质词可再拉升', desc: '“高端壁纸电视推荐”等词已进 Top3，若补齐画质芯片、色域等硬核语料，有望稳定锁定首推位。' },
        ],
    },
    {
        model: '高端款A', tier: '线下高端 · 均衡款', line: '线下',
        status: 'fail',
        self: { mention: '52.1%', top1: '22.4%', rank: 'NO. 5.1' },
        competitors: [
            { name: '竞品A U7N', mention: '68.9%', top1: '36.8%' },
            { name: '竞品B Q10K', mention: '64.2%', top1: '31.5%' },
            { name: '某家电品牌 高端款A', mention: '52.1%', top1: '22.4%', isBrand: true },
        ],
        reasons: [
            { title: '线下款线上信源天然偏少', desc: '高端款A 以线下体验渠道为主，网络评测与用户口碑内容基数小，AI 可抓取的语料明显不足。' },
            { title: '缺乏“去哪看/体验”类场景词', desc: '线下款的关键是承接“看得见/去哪买”类问法，但目前相关引导内容几乎空白，导流路径断裂。' },
        ],
    },
    {
        model: '高端款B', tier: '分体顶配 · 大客厅影音', line: '线下',
        status: 'warn',
        self: { mention: '58.7%', top1: '28.3%', rank: 'NO. 4.4' },
        competitors: [
            { name: '进口品牌C 旗舰款X', mention: '66.5%', top1: '35.0%' },
            { name: '进口品牌A 旗舰款Y', mention: '63.8%', top1: '32.1%' },
            { name: '某家电品牌 高端款B', mention: '58.7%', top1: '28.3%', isBrand: true },
        ],
        reasons: [
            { title: '高端影音场景词语料稀缺', desc: '“大客厅高端影音”“分体电视”等高价值场景词下，进口品牌C、进口品牌A的高端内容占据心智，高端款B 曝光有限。' },
            { title: '分体形态认知门槛高', desc: '分体设计是差异化亮点，但 AI 尚未充分理解其价值，需要针对性科普内容降低认知门槛。' },
        ],
    },
];

const STANDARD = { mention: '70%', top1: '40%', rank: '≤ NO.3.0' };

const STATUS_MAP = {
    pass: { label: '已达标', dot: 'bg-emerald-500', text: 'text-emerald-400', bg: 'bg-emerald-950/30', border: 'border-emerald-500/40' },
    warn: { label: '接近标准', dot: 'bg-amber-500', text: 'text-amber-400', bg: 'bg-amber-950/30', border: 'border-amber-500/40' },
    fail: { label: '未达标', dot: 'bg-rose-500', text: 'text-rose-400', bg: 'bg-rose-950/30', border: 'border-rose-500/40' },
};

// ─── 五款产品表现总览 ───
export function Page_SkyworthReport_ProductOverview() {
    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-4">
                    <div className="text-center shrink-0 mb-1">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            五款产品表现总览
                        </h1>
                    </div>

                    {/* Standard line banner */}
                    <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] rounded-xl px-6 py-3 shrink-0 flex items-center gap-5 flex-wrap">
                        <span className="text-[17px] lg:text-[19px] font-black text-white shrink-0">达标基准线</span>
                        <span className="text-[15px] lg:text-[16px] text-zinc-300">产品优化词提及率 <strong className="text-white">≥ {STANDARD.mention}</strong></span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-[15px] lg:text-[16px] text-zinc-300">Top1 <strong className="text-white">≥ {STANDARD.top1}</strong></span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-[15px] lg:text-[16px] text-zinc-300">平均位次 <strong className="text-white">{STANDARD.rank}</strong></span>
                    </div>

                    {/* Products table */}
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden flex flex-col min-h-0">
                        <table className="w-full text-left border-collapse table-fixed h-full">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.04] text-[16px] lg:text-[18px] font-bold text-zinc-300">
                                    <th className="py-3 px-6 w-[26%]">产品型号</th>
                                    <th className="py-3 px-4 w-[13%] text-center">提及率</th>
                                    <th className="py-3 px-4 w-[13%] text-center">Top1 提及率</th>
                                    <th className="py-3 px-4 w-[15%] text-center">平均提及位次</th>
                                    <th className="py-3 px-4 w-[15%] text-center">达标状态</th>
                                    <th className="py-3 px-6 w-[18%]">主要对标竞品</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PRODUCTS.map((p, i) => {
                                    const s = STATUS_MAP[p.status];
                                    const topComp = p.competitors.find((c) => !c.isBrand);
                                    return (
                                        <tr key={i} className="border-b border-white/5 last:border-none hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 px-6 align-middle">
                                                <div className="flex flex-col">
                                                    <span className="text-[19px] lg:text-[22px] font-black text-white">{p.model}</span>
                                                    <span className="text-[13px] lg:text-[14px] text-zinc-500 font-medium">{p.tier}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center align-middle text-[20px] lg:text-[24px] font-black font-mono text-[#4d8bff]">{p.self.mention}</td>
                                            <td className="py-3 px-4 text-center align-middle text-[20px] lg:text-[24px] font-black font-mono text-zinc-200">{p.self.top1}</td>
                                            <td className="py-3 px-4 text-center align-middle text-[20px] lg:text-[24px] font-black font-mono text-zinc-200">{p.self.rank}</td>
                                            <td className="py-3 px-4 text-center align-middle">
                                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${s.bg} ${s.border} ${s.text} text-[14px] lg:text-[15px] font-bold`}>
                                                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                                                    {s.label}
                                                </span>
                                            </td>
                                            <td className="py-3 px-6 align-middle text-[15px] lg:text-[16px] text-zinc-400">{topComp?.name}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary */}
                    <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] rounded-xl px-6 py-3.5 shrink-0">
                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                            <strong className="text-blue-400 font-black">总览结论：</strong>旗舰 <strong className="text-white">旗舰款C</strong> 已率先达标，走量款 <strong className="text-white">旗舰款A</strong> 与顶配 <strong className="text-white">高端款B</strong> 接近标准；卡位款 <strong className="text-white">旗舰款B</strong> 与线下款 <strong className="text-white">高端款A</strong> 明显落后于对标竞品，是本轮优化需要重点补齐的两块短板。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_ProductOverview.hideHeader = true;

// ─── 单款产品诊断模板 ───
function ProductDetail({ product }) {
    const s = STATUS_MAP[product.status];
    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-4">

                    {/* Header */}
                    <div className="text-center shrink-0 mb-1 flex items-center justify-center gap-4">
                        <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
                            分产品核心诊断 · {product.model}
                        </h1>
                        <span className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border ${s.bg} ${s.border} ${s.text} text-[15px] font-bold`}>
                            <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                            {s.label}
                        </span>
                    </div>

                    <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">

                        {/* Left: 自身情况 */}
                        <div className="col-span-5 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 flex flex-col h-full justify-start gap-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2.5">
                                    <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    自身情况（{product.tier}）
                                </h3>

                                <div className="grid grid-cols-3 gap-3 shrink-0">
                                    {[
                                        { l: '提及率', v: product.self.mention, std: STANDARD.mention },
                                        { l: 'Top1', v: product.self.top1, std: STANDARD.top1 },
                                        { l: '平均位次', v: product.self.rank, std: STANDARD.rank },
                                    ].map((k, i) => (
                                        <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-3 py-3 flex flex-col">
                                            <span className="text-[13px] text-zinc-400 font-bold">{k.l}</span>
                                            <span className={`text-[28px] lg:text-[32px] font-black leading-none mt-1 ${s.text}`}>{k.v}</span>
                                            <span className="text-[12px] text-zinc-600 mt-1">标准 {k.std}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex-1 flex flex-col justify-center gap-3 min-h-0">
                                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                                        <span className="text-[15px] lg:text-[16px] text-zinc-400 font-bold">对标达标线</span>
                                        <p className="text-[15px] lg:text-[17px] text-zinc-200 leading-relaxed mt-1.5">
                                            提及率 <strong className="text-white">≥ {STANDARD.mention}</strong>、Top1 <strong className="text-white">≥ {STANDARD.top1}</strong>、位次 <strong className="text-white">{STANDARD.rank}</strong>。
                                            该产品当前
                                            <strong className={`${s.text} font-bold`}> {s.label}</strong>。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: 竞品情况 */}
                        <div className="col-span-7 flex flex-col min-h-0">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 flex flex-col h-full justify-start gap-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2.5">
                                    <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                    竞品情况（同价位段对比）
                                </h3>

                                <div className="rounded-xl border border-white/10 bg-[#020202]/60 overflow-hidden shrink-0">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/10 bg-white/[0.04] text-[15px] lg:text-[16px] font-semibold text-zinc-400">
                                                <th className="py-2.5 px-4 w-[46%]">产品</th>
                                                <th className="py-2.5 px-4 w-[27%] text-center">提及率</th>
                                                <th className="py-2.5 px-4 w-[27%] text-center">Top1 提及率</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.competitors.map((c, i) => (
                                                <tr key={i} className={`border-b border-white/5 last:border-none ${c.isBrand ? 'bg-[#004CE5]/10' : ''}`}>
                                                    <td className="py-2.5 px-4 align-middle">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className={`text-[16px] lg:text-[18px] ${c.isBrand ? 'font-black text-blue-400' : 'font-semibold text-zinc-200'}`}>{c.name}</span>
                                                            {c.isBrand && <span className="px-1.5 py-0.5 text-[11px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">本产品</span>}
                                                        </div>
                                                    </td>
                                                    <td className={`py-2.5 px-4 text-center align-middle text-[18px] lg:text-[20px] font-bold font-mono ${c.isBrand ? 'text-blue-400' : 'text-zinc-300'}`}>{c.mention}</td>
                                                    <td className={`py-2.5 px-4 text-center align-middle text-[18px] lg:text-[20px] font-bold font-mono ${c.isBrand ? 'text-blue-400' : 'text-zinc-300'}`}>{c.top1}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* 为什么达不到标准 / 比不过竞品 */}
                                <div className="flex-1 flex flex-col gap-3 min-h-0">
                                    <h4 className="text-[17px] lg:text-[19px] font-bold text-white flex items-center gap-2 shrink-0">
                                        <span className="w-1.5 h-4 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                        为什么达不到标准 / 比不过竞品
                                    </h4>
                                    <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
                                        {product.reasons.map((r, i) => (
                                            <div key={i} className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500/50 rounded-r-xl p-4 flex flex-col gap-1.5">
                                                <span className="text-[16px] lg:text-[18px] font-bold text-white leading-snug">{r.title}</span>
                                                <p className="text-[14px] lg:text-[15.5px] text-zinc-300 leading-relaxed text-justify">{r.desc}</p>
                                            </div>
                                        ))}
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

export function Page_SkyworthReport_ProductA7HPro() { return <ProductDetail product={PRODUCTS[0]} />; }
Page_SkyworthReport_ProductA7HPro.hideHeader = true;

export function Page_SkyworthReport_ProductA8H() { return <ProductDetail product={PRODUCTS[1]} />; }
Page_SkyworthReport_ProductA8H.hideHeader = true;

export function Page_SkyworthReport_ProductA10H() { return <ProductDetail product={PRODUCTS[2]} />; }
Page_SkyworthReport_ProductA10H.hideHeader = true;

export function Page_SkyworthReport_ProductQ7H() { return <ProductDetail product={PRODUCTS[3]} />; }
Page_SkyworthReport_ProductQ7H.hideHeader = true;

export function Page_SkyworthReport_ProductQ8H() { return <ProductDetail product={PRODUCTS[4]} />; }
Page_SkyworthReport_ProductQ8H.hideHeader = true;
