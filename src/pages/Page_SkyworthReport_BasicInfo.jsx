import React from 'react';
import SlideLayout from '../components/SlideLayout';

function MontserratNum({ children, className = "" }) {
    return (
        <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {children}
        </span>
    );
}

const CONFIG_ITEMS = [
    { label: '品牌名称', value: '创维电视', large: true },
    { label: '目标产品', value: '五款壁纸电视', tags: ['A7H Pro', 'A8H', 'A10H', 'Q7H', 'Q8H'] },
    {
        label: '监测词条',
        value: (
            <span>
                共计 <MontserratNum className="font-extrabold text-[#004CE5]">120</MontserratNum> 项核心词条
            </span>
        ),
        note: '/ 每日全频提问一次',
        detail: (
            <span>
                已拆分为四类：品牌优化词 <MontserratNum className="font-semibold">20</MontserratNum> · 产品优化词 <MontserratNum className="font-semibold">60</MontserratNum> · 品牌监测词 <MontserratNum className="font-semibold">15</MontserratNum> · 产品监测词 <MontserratNum className="font-semibold">25</MontserratNum>
            </span>
        ),
    },
    {
        label: '覆盖平台',
        value: (
            <span>
                <MontserratNum className="font-extrabold text-[#004CE5]">4</MontserratNum> 个主流 AI 平台
            </span>
        ),
        tags: ['DeepSeek', '豆包', '元宝', '通义千问']
    },
];

function SectionTitle({ children }) {
    return (
        <div className="flex items-center gap-2.5 shrink-0 pb-3 border-b border-white/[0.08] mb-4">
            <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
            <h3 className="text-[28px] xl:text-[30px] font-bold text-white">{children}</h3>
        </div>
    );
}

export function Page_SkyworthReport_BasicInfo1() {
    return (
        <SlideLayout title="报告说明">
            <div className="w-full h-full flex flex-col animate-fade-in">
                {/* 引入 Google Fonts 镜像，双重保障字体渲染 */}
                <style dangerouslySetInnerHTML={{ __html: `
                    @import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
                `}} />

                <div className="grid grid-cols-2 gap-6 xl:gap-8 shrink-0 mb-6">

                    {/* Left */}
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-5 px-6 xl:py-6 xl:px-8 flex flex-col shadow-xl">
                        <SectionTitle>数据监测基准配置</SectionTitle>
                        <div className="flex flex-col gap-4">
                            {CONFIG_ITEMS.map((item, i) => (
                                <div
                                    key={item.label}
                                    className={`py-2 ${i < CONFIG_ITEMS.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                                >
                                    <span className="text-zinc-400 text-[20px] xl:text-[22px] font-medium">{item.label}</span>
                                    <div className="flex items-baseline gap-2 flex-wrap mt-1.5">
                                        <span className={`font-extrabold text-white ${item.large ? 'text-[38px] xl:text-[42px]' : 'text-[28px] xl:text-[32px]'}`}>
                                            {item.value}
                                        </span>
                                        {item.note && (
                                            <span className="text-zinc-500 text-[20px] xl:text-[22px] font-medium">{item.note}</span>
                                        )}
                                    </div>
                                    {item.tags && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {item.tags.map((t) => (
                                                <span key={t} className="px-2.5 py-0.5 text-[18px] xl:text-[20px] font-bold text-zinc-300 bg-white/[0.06] border border-white/10 rounded-lg font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {item.detail && (
                                        <div className="text-[18px] xl:text-[20px] text-zinc-400 leading-snug mt-2">{item.detail}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl py-5 px-6 xl:py-6 xl:px-8 flex flex-col shadow-[0_0_25px_rgba(0,76,229,0.06)]">
                        <SectionTitle>数据监测执行摘要</SectionTitle>

                        <div className="flex flex-col gap-6">
                            <div className="py-3 pb-4 border-b border-white/[0.06]">
                                <span className="text-[20px] xl:text-[22px] text-zinc-400 font-bold flex items-center gap-2 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                    周期范围
                                </span>
                                <p className="text-[22px] xl:text-[24px] text-zinc-300 leading-relaxed text-justify">
                                    在 <strong className="text-white font-semibold"><MontserratNum>2026.06.01 – 2026.06.30</MontserratNum></strong>，围绕
                                    <strong className="text-white font-semibold"> 创维电视-品牌与产品词条</strong> 数据监测工作按计划持续推进。累计执行周期
                                    <strong className="text-white font-semibold"> <MontserratNum>30</MontserratNum> 天</strong>，覆盖 <MontserratNum className="font-semibold text-white">4</MontserratNum> 个主流 AI 平台（DeepSeek、豆包、元宝、通义千问）。
                                </p>
                            </div>

                            <div className="py-3 pt-1">
                                <span className="text-[20px] xl:text-[22px] text-zinc-400 font-bold flex items-center gap-2 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                                    指标详情
                                </span>
                                <p className="text-[22px] xl:text-[24px] text-zinc-300 leading-relaxed text-justify">
                                    本周期共监测 <strong className="text-white font-semibold"><MontserratNum>120</MontserratNum></strong> 个关键词条，在 <strong className="text-white font-semibold"><MontserratNum>4</MontserratNum></strong> 个平台完成 <strong className="text-white font-semibold"><MontserratNum>30</MontserratNum></strong> 天连续查询，合计执行查询
                                    <strong className="text-[#004CE5] font-extrabold text-[26px] xl:text-[30px]"><MontserratNum> 14,400 </MontserratNum></strong>次，
                                    抓取并识别引用文章 <strong className="text-[#004CE5] font-extrabold text-[26px] xl:text-[30px]"><MontserratNum>3,268</MontserratNum></strong> 篇，
                                    同期识别竞品品牌 <strong className="text-[#004CE5] font-extrabold text-[26px] xl:text-[30px]"><MontserratNum>46</MontserratNum></strong> 家，
                                    截图覆盖率达 <strong className="text-[#004CE5] font-extrabold text-[30px] xl:text-[34px]"><MontserratNum>100%</MontserratNum></strong>。各项数据指标均在预期执行范围内，整体运行稳定。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 监测说明贴齐 content bottom */}
                <div className="mt-auto shrink-0 border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] rounded-xl px-5 py-3">
                    <p className="text-[22px] xl:text-[24px] text-zinc-300 leading-snug text-justify">
                        <strong className="text-white font-bold">监测说明：</strong>
                        词条选完之后按优化词（品牌 / 产品）与监测词（品牌 / 产品）四类拆分，分别进入数据系统监测，结合分析产出本次现状诊断报告。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

function MetricCard({ title, value, unit, note, sparkId }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.045] shadow-[0_12px_40px_rgba(0,0,0,0.35)] h-full flex flex-col justify-between px-6 py-6 xl:px-8 xl:py-8">
            {/* 右侧装饰：渐变 + 点阵 */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-[58%] bg-gradient-to-l from-[#004CE5]/18 via-[#004CE5]/6 to-transparent" />
                <div
                    className="absolute right-3 top-3 bottom-3 w-[52%] opacity-[0.22]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full w-full">
                <span className="text-[26px] xl:text-[28px] text-zinc-400 font-semibold tracking-wide">{title}</span>
                <div className="mt-4">
                    <div className="flex items-baseline gap-1">
                        <span className="text-[84px] xl:text-[96px] font-bold text-white leading-none tracking-tight tabular-nums font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {value}
                        </span>
                        <span className="text-[30px] xl:text-[34px] text-zinc-500 font-bold ml-1.5">{unit}</span>
                    </div>
                    {note && (
                        <span className="inline-block mt-3.5 text-[22px] xl:text-[24px] text-zinc-500 font-medium">{note}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Page_SkyworthReport_BasicInfo2() {
    const metrics = [
        { title: '执行天数', value: '30', unit: '天', note: '连续监测周期' },
        { title: '监测词条', value: '120', unit: '个', note: '四类词条合计' },
        { title: '覆盖平台', value: '4', unit: '个', note: '主流 AI 平台' },
        { title: '总查询', value: '14,400', unit: '次', note: '全平台累计' },
        { title: '引用文章', value: '3,268', unit: '篇', note: '识别并抓取' },
        { title: '识别竞品', value: '46', unit: '家', note: '同期出现品牌' },
    ];

    return (
        <SlideLayout title="监测范围">
            <div className="w-full h-full flex flex-col justify-center animate-fade-in">
                {/* 引入 Google Fonts 镜像，双重保障字体渲染 */}
                <style dangerouslySetInnerHTML={{ __html: `
                    @import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
                `}} />

                <div className="grid grid-cols-3 gap-6 xl:gap-8 h-[560px] xl:h-[600px] shrink-0 py-2">
                    {metrics.map((m, i) => (
                        <MetricCard key={m.title} sparkId={i} {...m} />
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
