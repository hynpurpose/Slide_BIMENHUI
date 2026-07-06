import React from 'react';
import SlideLayout from '../components/SlideLayout';
import overview from '../data/geoOverview.json';

const SCOPE = overview.scope;
const PRODUCT_TAGS = ['A7H Pro', 'A8H', 'A10H', 'Q7H', 'Q8H'];
const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

const fmtDate = (s) => (s ? s.replace(/-/g, '.') : '—');
const fmtNum = (n) => (n === null || n === undefined ? '—' : n.toLocaleString('en-US'));

const METRICS = [
    { title: '执行天数', value: String(SCOPE.days), unit: '天', note: '连续监测周期' },
    { title: '监测词条', value: String(SCOPE.total_entries), unit: '个', note: '四类词条合计' },
    { title: '覆盖平台', value: String(SCOPE.platforms.length), unit: '个', note: '主流 AI 平台' },
    { title: '总查询', value: fmtNum(SCOPE.total_queries), unit: '次', note: '全平台累计' },
    { title: '引用文章', value: fmtNum(SCOPE.total_articles), unit: '篇', note: '识别并抓取' },
    { title: '识别竞品', value: String(SCOPE.competitor_count), unit: '家', note: '同期出现品牌' },
];

const CONFIG_ITEMS = [
    { label: '品牌名称', value: '创维电视', large: true },
    { label: '目标产品', value: '五款壁纸电视', tags: PRODUCT_TAGS },
    {
        label: '监测词条',
        value: (
            <span>
                共计 <MontserratNum className="font-extrabold text-[#004CE5]">{SCOPE.total_entries}</MontserratNum> 项核心词条
            </span>
        ),
        note: '/ 每日全频提问一次',
        detail: (
            <span>
                已拆分为四类：品类优化词 <MontserratNum className="font-semibold">{SCOPE.entry_breakdown.category_opt}</MontserratNum> · 产品优化词 <MontserratNum className="font-semibold">{SCOPE.entry_breakdown.product_opt}</MontserratNum> · 品类监测词 <MontserratNum className="font-semibold">{SCOPE.entry_breakdown.category_monitor}</MontserratNum> · 产品监测词 <MontserratNum className="font-semibold">{SCOPE.entry_breakdown.product_monitor}</MontserratNum>
            </span>
        ),
    },
    {
        label: '覆盖平台',
        value: (
            <span>
                <MontserratNum className="font-extrabold text-[#004CE5]">{SCOPE.platforms.length}</MontserratNum> 个主流 AI 平台
            </span>
        ),
        tags: SCOPE.platforms,
    },
];

function MontserratNum({ children, className = '' }) {
    return (
        <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {children}
        </span>
    );
}

function FontStyle() {
    return <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />;
}

function SectionTitle({ children, size = 'default', className = '' }) {
    const sizeClass = size === 'compact'
        ? 'text-[22px] xl:text-[24px]'
        : size === 'small'
            ? 'text-[20px] xl:text-[22px]'
            : 'text-[28px] xl:text-[30px]';

    return (
        <div className={`flex items-center gap-2.5 shrink-0 pb-3 border-b border-white/[0.08] mb-4 ${className}`}>
            <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
            <h3 className={`${sizeClass} font-bold text-white`}>{children}</h3>
        </div>
    );
}

function ConfigPanel({ compact = false, tight = false, brandEntryRow = false }) {
    const labelClass = tight ? 'text-[14px] xl:text-[15px]' : compact ? 'text-[17px] xl:text-[19px]' : 'text-[20px] xl:text-[22px]';
    const valueLarge = tight ? 'text-[24px] xl:text-[26px]' : compact ? 'text-[32px] xl:text-[36px]' : 'text-[38px] xl:text-[42px]';
    const valueNormal = tight ? 'text-[18px] xl:text-[20px]' : compact ? 'text-[24px] xl:text-[26px]' : 'text-[28px] xl:text-[32px]';
    const tagClass = tight ? 'text-[12px] xl:text-[13px]' : compact ? 'text-[15px] xl:text-[17px]' : 'text-[18px] xl:text-[20px]';
    const detailClass = tight ? 'text-[13px] xl:text-[14px]' : compact ? 'text-[15px] xl:text-[17px]' : 'text-[18px] xl:text-[20px]';
    const noteClass = tight ? 'text-[13px] xl:text-[14px]' : compact ? 'text-[16px] xl:text-[18px]' : 'text-[20px] xl:text-[22px]';
    const gapClass = tight ? 'gap-1.5' : compact ? 'gap-2.5' : 'gap-4';
    const itemPy = tight ? 'py-1' : compact ? 'py-1.5' : 'py-2';
    const panelPad = tight ? 'py-3 px-4 xl:py-3.5 xl:px-5' : 'py-4 px-5 xl:py-5 xl:px-7';

    const brandItem = CONFIG_ITEMS[0];
    const productItem = CONFIG_ITEMS[1];
    const entryItem = CONFIG_ITEMS[2];
    const platformItem = CONFIG_ITEMS[3];

    const renderItem = (item, i, total, options = {}) => (
        <div
            key={item.label}
            className={`${itemPy} ${options.className || ''} ${i < total - 1 ? 'border-b border-white/[0.06]' : ''}`}
        >
            <span className={`text-zinc-400 ${labelClass} font-medium`}>{item.label}</span>
            <div className="flex items-baseline gap-2 flex-wrap mt-1">
                <span className={`font-extrabold text-white ${item.large ? valueLarge : valueNormal}`}>
                    {item.value}
                </span>
                {item.note && (
                    <span className={`text-zinc-500 ${noteClass} font-medium`}>{item.note}</span>
                )}
            </div>
            {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {item.tags.map((t) => (
                        <span key={t} className={`px-2 py-0.5 ${tagClass} font-bold text-zinc-300 bg-white/[0.06] border border-white/10 rounded-lg font-montserrat`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {t}
                        </span>
                    ))}
                </div>
            )}
            {item.detail && (
                <div className={`${detailClass} text-zinc-400 leading-snug mt-1.5`}>{item.detail}</div>
            )}
        </div>
    );

    const renderSplitCell = (item) => (
        <>
            <span className={`text-zinc-400 ${labelClass} font-medium`}>{item.label}</span>
            <div className="flex items-baseline gap-2 flex-wrap mt-1">
                <span className={`font-extrabold text-white ${item.large ? valueLarge : valueNormal}`}>
                    {item.value}
                </span>
                {item.note && (
                    <span className={`text-zinc-500 ${noteClass} font-medium`}>{item.note}</span>
                )}
            </div>
            {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {item.tags.map((t) => (
                        <span key={t} className={`px-2 py-0.5 ${tagClass} font-bold text-zinc-300 bg-white/[0.06] border border-white/10 rounded-lg font-montserrat`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {t}
                        </span>
                    ))}
                </div>
            )}
            {item.detail && (
                <div className={`${detailClass} text-zinc-400 leading-snug mt-1.5`}>{item.detail}</div>
            )}
        </>
    );

    return (
        <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl ${panelPad} flex flex-col shadow-xl h-full min-h-0 overflow-hidden`}>
            <SectionTitle size={tight || compact ? 'compact' : 'default'} className={tight ? 'mb-2 pb-2' : ''}>数据监测基准配置</SectionTitle>
            <div className={`flex flex-col ${gapClass} flex-1 min-h-0`}>
                {brandEntryRow ? (
                    <>
                        <div className={`${itemPy} border-b border-white/[0.06] grid grid-cols-2 gap-5 xl:gap-6 items-start`}>
                            <div>
                                <span className={`text-zinc-400 ${labelClass} font-medium`}>{brandItem.label}</span>
                                <div className="mt-1">
                                    <span className={`font-extrabold text-white ${valueLarge}`}>{brandItem.value}</span>
                                </div>
                            </div>
                            <div>
                                <span className={`text-zinc-400 ${labelClass} font-medium`}>{entryItem.label}</span>
                                <div className="flex items-baseline gap-2 flex-wrap mt-1">
                                    <span className={`font-extrabold text-white ${valueNormal}`}>{entryItem.value}</span>
                                    <span className={`text-zinc-500 ${noteClass} font-medium`}>（每日全频提问一次）</span>
                                </div>
                                {entryItem.detail && (
                                    <div className={`${detailClass} text-zinc-400 leading-snug mt-1.5`}>{entryItem.detail}</div>
                                )}
                            </div>
                        </div>
                        <div className={`${itemPy} grid grid-cols-2 gap-5 xl:gap-6 items-start`}>
                            <div>{renderSplitCell(productItem)}</div>
                            <div>{renderSplitCell(platformItem)}</div>
                        </div>
                    </>
                ) : (
                    CONFIG_ITEMS.map((item, i) => renderItem(item, i, CONFIG_ITEMS.length))
                )}
            </div>
        </div>
    );
}

function SummaryPanel({ compact = false, brief = false, tight = false }) {
    const subLabelClass = tight ? 'text-[14px] xl:text-[15px]' : compact ? 'text-[17px] xl:text-[19px]' : 'text-[20px] xl:text-[22px]';
    const bodyClass = tight ? 'text-[14px] xl:text-[15px]' : compact ? 'text-[18px] xl:text-[20px]' : 'text-[22px] xl:text-[24px]';
    const highlightClass = compact ? 'text-[22px] xl:text-[24px]' : 'text-[26px] xl:text-[30px]';
    const pctClass = compact ? 'text-[24px] xl:text-[28px]' : 'text-[30px] xl:text-[34px]';
    const gapClass = tight ? 'gap-2.5' : compact ? 'gap-4' : 'gap-6';
    const panelPad = tight ? 'py-3 px-4 xl:py-3.5 xl:px-5' : 'py-4 px-5 xl:py-5 xl:px-7';

    return (
        <div className={`bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl ${panelPad} flex flex-col shadow-[0_0_25px_rgba(0,76,229,0.06)] h-full min-h-0 overflow-hidden`}>
            <SectionTitle size={tight || compact ? 'compact' : 'default'} className={tight ? 'mb-2 pb-2' : ''}>数据监测执行摘要</SectionTitle>
            <div className={`flex flex-col ${gapClass} flex-1 min-h-0`}>
                <div className={`${brief ? 'py-2' : 'py-3 pb-4'} ${!brief ? 'border-b border-white/[0.06]' : ''}`}>
                    <span className={`${subLabelClass} text-zinc-400 font-bold flex items-center gap-2 mb-2`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                        周期范围
                    </span>
                    <p className={`${bodyClass} text-zinc-300 leading-relaxed text-justify`}>
                        {brief ? (
                            <>
                                <strong className="text-white font-semibold"><MontserratNum>{fmtDate(SCOPE.start_date)} – {fmtDate(SCOPE.end_date)}</MontserratNum></strong> 期间，围绕创维电视品牌与产品词条完成 <strong className="text-white font-semibold"><MontserratNum>{SCOPE.days}</MontserratNum> 天</strong>全量采集，覆盖 <MontserratNum className="font-semibold text-white">{SCOPE.platforms.length}</MontserratNum> 个 AI 平台。
                            </>
                        ) : (
                            <>
                                在 <strong className="text-white font-semibold"><MontserratNum>{fmtDate(SCOPE.start_date)} – {fmtDate(SCOPE.end_date)}</MontserratNum></strong>，围绕
                                <strong className="text-white font-semibold"> 创维电视-品牌与产品词条</strong> 数据监测工作按计划持续推进。各批词条已完成
                                <strong className="text-white font-semibold"> <MontserratNum>{SCOPE.days}</MontserratNum> 天</strong>全量采集，覆盖 <MontserratNum className="font-semibold text-white">{SCOPE.platforms.length}</MontserratNum> 个主流 AI 平台（{SCOPE.platforms.join('、')}）。
                            </>
                        )}
                    </p>
                </div>

                <div className={`${brief ? 'py-2' : 'py-3 pt-1'}`}>
                    <span className={`${subLabelClass} text-zinc-400 font-bold flex items-center gap-2 mb-2`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" />
                        指标详情
                    </span>
                    <p className={`${bodyClass} text-zinc-300 leading-relaxed text-justify`}>
                        {brief ? (
                            <>
                                监测 <strong className="text-white font-semibold"><MontserratNum>{SCOPE.total_entries}</MontserratNum></strong> 个词条，合计查询
                                <strong className="text-[#004CE5] font-extrabold"><MontserratNum> {fmtNum(SCOPE.total_queries)} </MontserratNum></strong>次，
                                引用文章 <strong className="text-[#004CE5] font-extrabold"><MontserratNum>{fmtNum(SCOPE.total_articles)}</MontserratNum></strong> 篇，
                                识别竞品 <strong className="text-[#004CE5] font-extrabold"><MontserratNum>{SCOPE.competitor_count}</MontserratNum></strong> 家，
                                截图覆盖率 <strong className="text-[#004CE5] font-extrabold"><MontserratNum>100%</MontserratNum></strong>，整体运行稳定。
                            </>
                        ) : (
                            <>
                                本周期共监测 <strong className="text-white font-semibold"><MontserratNum>{SCOPE.total_entries}</MontserratNum></strong> 个关键词条，在 <strong className="text-white font-semibold"><MontserratNum>{SCOPE.platforms.length}</MontserratNum></strong> 个平台完成 <strong className="text-white font-semibold"><MontserratNum>{SCOPE.days}</MontserratNum></strong> 天连续查询，合计执行查询
                                <strong className={`text-[#004CE5] font-extrabold ${highlightClass}`}><MontserratNum> {fmtNum(SCOPE.total_queries)} </MontserratNum></strong>次，
                                抓取并识别引用文章 <strong className={`text-[#004CE5] font-extrabold ${highlightClass}`}><MontserratNum>{fmtNum(SCOPE.total_articles)}</MontserratNum></strong> 篇，
                                同期识别竞品品牌 <strong className={`text-[#004CE5] font-extrabold ${highlightClass}`}><MontserratNum>{SCOPE.competitor_count}</MontserratNum></strong> 家，
                                截图覆盖率达 <strong className={`text-[#004CE5] font-extrabold ${pctClass}`}><MontserratNum>100%</MontserratNum></strong>。各项数据指标均在预期执行范围内，整体运行稳定。
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

function EntryBreakdownPanel() {
    const items = [
        { label: '品类优化词', value: SCOPE.entry_breakdown.category_opt },
        { label: '产品优化词', value: SCOPE.entry_breakdown.product_opt },
        { label: '品类监测词', value: SCOPE.entry_breakdown.category_monitor },
        { label: '产品监测词', value: SCOPE.entry_breakdown.product_monitor },
    ];

    return (
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-4 px-5 xl:py-5 xl:px-7 flex flex-col shadow-xl h-full">
            <SectionTitle size="compact">词条四类拆分</SectionTitle>
            <div className="grid grid-cols-2 gap-3 flex-1">
                {items.map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 flex flex-col justify-center">
                        <span className="text-[16px] xl:text-[18px] text-zinc-400 font-medium">{item.label}</span>
                        <div className="flex items-baseline gap-1 mt-1">
                            <span className="text-[36px] xl:text-[40px] font-bold text-white font-montserrat leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                {item.value}
                            </span>
                            <span className="text-[16px] text-zinc-500 font-medium">项</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-[15px] xl:text-[17px] text-zinc-500 mt-3">
                合计 <MontserratNum className="font-semibold text-zinc-300">{SCOPE.total_entries}</MontserratNum> 项核心词条 · 每日全频提问一次
            </p>
        </div>
    );
}

function InfoStrip() {
    return (
        <div className="shrink-0 rounded-2xl border border-[#004CE5]/25 bg-gradient-to-r from-[#004CE5]/10 via-white/[0.03] to-transparent px-5 py-3 xl:px-6 xl:py-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2">
                <span className="text-[15px] xl:text-[17px] text-zinc-500 font-medium">品牌</span>
                <span className="text-[22px] xl:text-[24px] font-extrabold text-white">创维电视</span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[15px] xl:text-[17px] text-zinc-500 font-medium">产品</span>
                {PRODUCT_TAGS.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[14px] xl:text-[16px] font-bold text-zinc-300 bg-white/[0.06] border border-white/10 rounded-md font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t}
                    </span>
                ))}
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
                <span className="text-[15px] xl:text-[17px] text-zinc-500 font-medium">周期</span>
                <span className="text-[18px] xl:text-[20px] font-semibold text-white font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {fmtDate(SCOPE.start_date)} – {fmtDate(SCOPE.end_date)}
                </span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[15px] xl:text-[17px] text-zinc-500 font-medium">平台</span>
                {SCOPE.platforms.map((p) => (
                    <span key={p} className="text-[16px] xl:text-[18px] font-semibold text-zinc-300">{p}</span>
                ))}
            </div>
        </div>
    );
}

function MetricCard({ title, value, unit, note, size = 'large', decor = true }) {
    const sizeMap = {
        large: { title: 'text-[26px] xl:text-[28px]', value: 'text-[84px] xl:text-[96px]', unit: 'text-[30px] xl:text-[34px]', note: 'text-[22px] xl:text-[24px]', pad: 'px-6 py-6 xl:px-8 xl:py-8' },
        medium: { title: 'text-[20px] xl:text-[22px]', value: 'text-[56px] xl:text-[64px]', unit: 'text-[22px] xl:text-[26px]', note: 'text-[16px] xl:text-[18px]', pad: 'px-4 py-4 xl:px-5 xl:py-5' },
        compact: { title: 'text-[18px] xl:text-[20px]', value: 'text-[48px] xl:text-[52px]', unit: 'text-[18px] xl:text-[20px]', note: 'text-[14px] xl:text-[16px]', pad: 'px-4 py-3 xl:px-5 xl:py-4' },
        grid: { title: 'text-[14px] xl:text-[15px]', value: 'text-[30px] xl:text-[34px]', unit: 'text-[13px] xl:text-[14px]', note: 'text-[11px] xl:text-[12px]', pad: 'px-3 py-2.5 xl:px-3.5 xl:py-3' },
        inline: { title: 'text-[15px] xl:text-[17px]', value: 'text-[40px] xl:text-[44px]', unit: 'text-[16px] xl:text-[18px]', note: 'text-[12px] xl:text-[14px]', pad: 'px-3 py-3 xl:px-4 xl:py-4' },
    };
    const s = sizeMap[size];

    const useTopAlign = size === 'grid';

    return (
        <div className={`relative rounded-2xl border border-white/[0.12] bg-white/[0.045] shadow-[0_8px_24px_rgba(0,0,0,0.3)] h-full min-h-0 flex flex-col ${useTopAlign ? 'justify-start gap-1.5' : 'overflow-hidden justify-between'} ${s.pad}`}>
            {decor && (
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
            )}
            <div className={`relative z-10 flex flex-col w-full h-full ${useTopAlign ? 'justify-start gap-1.5' : 'justify-between'}`}>
                <span className={`${s.title} text-zinc-400 font-semibold tracking-wide shrink-0`}>{title}</span>
                <div className={useTopAlign ? 'shrink-0' : (size === 'inline' ? 'mt-2' : 'mt-3')}>
                    <div className="flex items-baseline gap-1">
                        <span className={`${s.value} font-bold text-white leading-none tracking-tight tabular-nums font-montserrat`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {value}
                        </span>
                        <span className={`${s.unit} text-zinc-500 font-bold ${useTopAlign ? '' : 'ml-1'}`}>{unit}</span>
                    </div>
                    {note && (
                        <span className={`inline-block ${useTopAlign ? 'mt-1' : 'mt-2'} ${s.note} text-zinc-500 font-medium ${useTopAlign ? 'leading-tight' : ''}`}>{note}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

function MetricsGrid({ size = 'compact', cols = 3, decor = false, className = '' }) {
    return (
        <div
            className={`grid gap-4 xl:gap-5 ${className}`}
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
            {METRICS.map((m) => (
                <MetricCard key={m.title} size={size} decor={decor} {...m} />
            ))}
        </div>
    );
}

/* ── 方案 A：上下分层（版本 1）── */
export function Page_SkyworthReport_BasicInfo_A() {
    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full grid min-h-0 animate-fade-in" style={{ gridTemplateRows: 'minmax(0, 1.05fr) minmax(0, 0.95fr)', gap: '16px' }}>
                <FontStyle />

                {/* 模块 1 & 2：基准配置 + 执行摘要 */}
                <div className="grid grid-cols-2 gap-4 min-h-0">
                    <ConfigPanel compact tight />
                    <SummaryPanel compact brief tight />
                </div>

                {/* 模块 3：六项核心指标 */}
                <div className="min-h-0 flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl px-4 py-3 xl:px-5 xl:py-4 shadow-xl overflow-hidden">
                    <SectionTitle size="compact" className="mb-2 pb-2 shrink-0">监测范围 · 六项核心指标</SectionTitle>
                    <div
                        className="grid flex-1 min-h-0 gap-3"
                        style={{
                            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
                        }}
                    >
                        {METRICS.map((m) => (
                            <MetricCard key={m.title} size="grid" decor={false} {...m} />
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_BasicInfo_A.hideHeader = true;

/* ── 方案 B：左右分栏 ── */
export function Page_SkyworthReport_BasicInfo_B() {
    return (
        <SlideLayout title="报告说明">
            <div className="w-full h-full flex animate-fade-in min-h-0 gap-5 xl:gap-6">
                <FontStyle />
                <div className="w-[52%] flex flex-col gap-4 min-h-0">
                    <ConfigPanel compact brandEntryRow />
                    <SummaryPanel compact brief />
                </div>
                <div className="w-[48%] flex flex-col min-h-0">
                    <div className="flex items-center gap-2.5 shrink-0 mb-3">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        <h3 className="text-[22px] xl:text-[24px] font-bold text-white">六项核心指标</h3>
                    </div>
                    <MetricsGrid size="medium" cols={2} decor className="flex-1 min-h-0" />
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_BasicInfo_B.hideHeader = true;

/* ── 方案 C：仪表盘风格 ── */
export function Page_SkyworthReport_BasicInfo_C() {
    return (
        <SlideLayout title="报告说明">
            <div className="w-full h-full flex flex-col animate-fade-in min-h-0 gap-4 xl:gap-5">
                <FontStyle />
                <InfoStrip />
                <div className="shrink-0" style={{ height: '38%' }}>
                    <MetricsGrid size="inline" cols={6} decor={false} className="h-full" />
                </div>
                <div className="grid grid-cols-2 gap-5 xl:gap-6 flex-1 min-h-0">
                    <EntryBreakdownPanel />
                    <SummaryPanel compact brief />
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_BasicInfo_C.hideHeader = true;

/* ── 保留原版（对比用） ── */
export function Page_SkyworthReport_BasicInfo1() {
    return (
        <SlideLayout title="报告说明">
            <div className="w-full h-full flex flex-col animate-fade-in">
                <FontStyle />
                <div className="grid grid-cols-2 gap-6 xl:gap-8 shrink-0 mb-6">
                    <ConfigPanel />
                    <SummaryPanel />
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_BasicInfo1.hideHeader = true;

export function Page_SkyworthReport_BasicInfo2() {
    return (
        <SlideLayout title="监测范围">
            <div className="w-full h-full flex flex-col justify-center animate-fade-in">
                <FontStyle />
                <div className="grid grid-cols-3 gap-6 xl:gap-8 h-[560px] xl:h-[600px] shrink-0 py-2" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                    {METRICS.map((m) => (
                        <MetricCard key={m.title} size="large" decor {...m} />
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
Page_SkyworthReport_BasicInfo2.hideHeader = true;

export default Page_SkyworthReport_BasicInfo_C;
