import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * GEO 量化竞争模型 · 为什么不能只看监测数据
 * 论证核心：把股票"量化交易"的方法论逐条映射进 GEO —— 强调"逐行对应"而非"左右两栏 + 箭头"。
 * 入口楔子：监测数据只说 AI 现在引用了什么，算不出哪个源占了 80% 权重。
 * 收口：策略容量有限 → 排他原则（同一细分类目只服务一家）。
 * 4 个结构不同的版式，左右键切换挑选。
 */

/* ——— 共享内容：五条"股票量化 ↔ GEO"逐行映射 ——— */
const MAP_ROWS = [
  {
    principle: '表面数据不是判断依据',
    stock: 'K 线、成交量只是现象，要找出真正驱动收益的因子',
    geo: '监测只说 AI 现在引用了什么，模型要算出哪个信源占了 80% 权重',
  },
  {
    principle: '收益 = 信号 − 成本',
    stock: '同样的资金，追求更高的夏普比率',
    geo: '同样的预算，追求更高的排名位次',
  },
  {
    principle: '永远有对手盘',
    stock: '拥挤交易会让 Alpha 衰减',
    geo: '竞对投 5 篇把你挤下去，模型要算出反制动作',
  },
  {
    principle: '活下来比冲高重要',
    stock: '控制回撤，不爆仓',
    geo: '第 1 不是短期冲上去，而是有成本壁垒的位置',
  },
  {
    principle: '策略容量有限',
    stock: '同一策略资金越大，收益必然被摊薄',
    geo: '同一细分类目只服务一家',
    emph: '排他原则',
    highlight: true,
  },
];

const WEDGE = (
  <>
    监测数据只告诉你 AI <span className="text-white font-bold">现在引用了什么</span>，却算不出——
    <span className="text-white font-bold">哪个信源占了 80% 权重</span>、竞对几篇内容就能把你挤下第一。
  </>
);

const Subtitle = ({ children }) => (
  <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed select-none">
    {children}
  </div>
);

const GeoText = ({ row }) => (
  <span className={row.highlight ? 'text-white font-bold' : 'text-zinc-100'}>
    {row.geo}
    {row.emph && <span className="font-extrabold"> —— {row.emph}</span>}
  </span>
);

/* ============================================================
 * 版 1：三层 · 逐行对照表（推荐 · 最适合口头讲解）
 * 楔子高亮块 → 5 行 ×「共同原理 / 股票 / GEO」强制对齐，无箭头 → 末行收口到排他
 * ==========================================================*/
export function Page_QuantitativeModel_Why_V1() {
  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      {/* Top Main Statement */}
      <div className="absolute top-[0px] left-0 w-full text-[36px] text-white font-extrabold leading-normal max-w-[1600px] font-['MiSans']">
        同样的钱，别人做完只能把品牌推到<span className="text-white font-black text-[42px] border-b-4 border-blue-500 pb-1 mx-1">第 3</span>，我们能把品牌推到<span className="text-white font-black text-[44px] border-b-4 border-blue-500 pb-1 mx-1">第 1</span>。
      </div>

      <div className="absolute left-0 top-[120px] w-full h-[670px] grid grid-cols-[580px_1fr] gap-8 select-none font-['MiSans']">
        {/* 左侧两根柱状图 (参考示意图的垂直柱体结构) */}
        <div className="w-[580px] shrink-0 flex items-center gap-2 h-full">
          {/* 股票量化交易柱子 - 橙色调 */}
          <div className="flex-1 flex flex-col h-full shadow-[0_0_30px_rgba(249,115,22,0.05)]">
            <div className="bg-orange-600 border border-orange-500/40 rounded-t-2xl py-4 px-2 text-center shrink-0">
              <div className="text-[22px] font-black text-white">股票量化交易</div>
            </div>
            <div className="flex-1 rounded-b-2xl border-x border-b border-orange-500/30 bg-orange-950/15 flex flex-col justify-around py-4 px-4 text-center font-bold text-zinc-300">
              <div className="text-[20px]">识别因子</div>
              <div className="text-orange-500/50 text-[16px]">↓</div>
              <div className="text-[20px]">追求夏普率</div>
              <div className="text-orange-500/50 text-[16px]">↓</div>
              <div className="text-[20px]">拥挤度防范</div>
              <div className="text-orange-500/50 text-[16px]">↓</div>
              <div className="text-[20px]">回撤控制</div>
              <div className="text-orange-500/50 text-[16px]">↓</div>
              <div className="text-[20px]">策略容量</div>
            </div>
          </div>

          {/* 指向右侧的“启发”箭头 */}
          <div className="shrink-0 flex flex-col items-center justify-center z-10 w-[100px] -mx-1">
            <span className="text-[18px] font-black text-blue-400 mb-1.5 bg-blue-950/80 px-3 py-0.5 rounded border border-blue-800/40">启发</span>
            <svg className="w-20 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* GEO量化竞争模型柱子 - 蓝色调 */}
          <div className="flex-1 flex flex-col h-full shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <div className="bg-blue-600 border border-blue-500/40 rounded-t-2xl py-4 px-2 text-center shrink-0">
              <div className="text-[22px] font-black text-white">GEO量化竞争模型</div>
            </div>
            <div className="flex-1 rounded-b-2xl border-x border-b border-blue-500/30 bg-blue-950/15 flex flex-col justify-around py-4 px-4 text-center font-bold text-zinc-300">
              <div className="text-[20px] text-blue-100">信源权重</div>
              <div className="text-blue-500/50 text-[16px]">↓</div>
              <div className="text-[20px] text-blue-100">排名位次</div>
              <div className="text-blue-500/50 text-[16px]">↓</div>
              <div className="text-[20px] text-blue-100">竞对反制</div>
              <div className="text-blue-500/50 text-[16px]">↓</div>
              <div className="text-[20px] text-blue-100">成本壁垒</div>
              <div className="text-blue-500/50 text-[16px]">↓</div>
              <div className="text-[20px] text-blue-100 font-extrabold">排他保护</div>
            </div>
          </div>
        </div>

        {/* 右侧：共同原理映射表 */}
        <div className="flex flex-col justify-start h-full">
          <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#09090b]/40 w-full flex-1 min-h-0 flex flex-col shadow-inner">
            {/* 表头 (只在这里列一次列名) */}
            <div className="grid grid-cols-[300px_350px_1fr] shrink-0 border-b border-[#004CE5]/30 bg-[#004CE5]/15 text-white text-[24px] font-extrabold font-['MiSans']">
              <div className="px-6 py-[18px] border-r border-[#004CE5]/20 flex items-center">
                共同原理
              </div>
              <div className="px-6 py-[18px] border-r border-[#004CE5]/20 flex items-center">
                股票 · 量化交易
              </div>
              <div className="px-6 py-[18px] flex items-center">
                GEO · 量化竞争模型
              </div>
            </div>

            {/* 表体：5 行均分剩余高度 */}
            <div className="flex-1 min-h-0 grid grid-rows-5 font-['MiSans']">
              {MAP_ROWS.map((r, i) => (
                <div 
                  key={i} 
                  className="grid grid-cols-[300px_350px_1fr] min-h-0 border-b border-zinc-900/80 last:border-b-0 text-[22px] leading-snug"
                >
                  {/* 共同原理 */}
                  <div className="px-6 py-3 border-r border-zinc-900/80 font-black text-white flex items-center">
                    {r.principle}
                  </div>
                  {/* 股票量化 */}
                  <div className="px-6 py-3 border-r border-zinc-900/80 text-zinc-300 flex items-center font-medium">
                    {r.stock}
                  </div>
                  {/* GEO模型 */}
                  <div className="px-6 py-3 text-white flex items-center">
                    <GeoText row={r} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 2：双闭环工作流 · 上下平行、逐节点竖直对齐
 * 证明"搬的不是概念，是整条流程"
 * ==========================================================*/
const STOCK_FLOW = ['市场数据', '因子拆解', '策略回测', '仓位分配', '下单执行', '持仓监控'];
const GEO_FLOW = ['全网语料', '权重因子', '效果验证', '预算分配', '内容投放', '位次监控'];

export function Page_QuantitativeModel_Why_V2() {
  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      {/* Top Main Statement */}
      <div className="absolute top-[0px] left-0 w-full text-[36px] text-white font-extrabold leading-normal max-w-[1600px] font-['MiSans']">
        同样的钱，别人做完只能把品牌推到<span className="text-white font-black text-[42px] border-b-4 border-blue-500 pb-1 mx-1">第 3</span>，我们能把品牌推到<span className="text-white font-black text-[44px] border-b-4 border-blue-500 pb-1 mx-1">第 1</span>。
      </div>

      <div className="absolute left-0 top-[120px] w-full bottom-0 flex flex-col justify-center select-none font-['MiSans']">
        {/* 股票行 */}
        <div className="shrink-0">
          <div className="text-[18px] font-bold text-zinc-500 tracking-wider mb-3 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-zinc-500 rounded-full" />股票 · 量化交易闭环
          </div>
          <div className="grid grid-cols-6 gap-4">
            {STOCK_FLOW.map((n, i) => (
              <div key={n} className="rounded-2xl bg-white/[0.03] border border-white/10 h-[128px] flex flex-col items-center justify-center px-3 text-center relative">
                <span className="font-['Montserrat'] text-[18px] font-black text-zinc-600 absolute top-3 left-4">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[25px] font-black text-zinc-200">{n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 竖直对应连接 */}
        <div className="grid grid-cols-6 gap-4 py-3 shrink-0">
          {GEO_FLOW.map((_, i) => (
            <div key={i} className="flex justify-center">
              <svg width="16" height="40" viewBox="0 0 16 40" fill="none">
                <path d="M8 2 V30" stroke="#004CE5" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" />
                <path d="M3 25 L8 34 L13 25" stroke="#004CE5" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* GEO 行 */}
        <div className="shrink-0">
          <div className="grid grid-cols-6 gap-4">
            {GEO_FLOW.map((n, i) => (
              <div key={n} className="rounded-2xl bg-[#004CE5]/[0.08] border border-[#004CE5]/40 h-[128px] flex flex-col items-center justify-center px-3 text-center relative shadow-[0_0_24px_rgba(0,76,229,0.12)]">
                <span className="font-['Montserrat'] text-[18px] font-black text-[#004CE5] absolute top-3 left-4">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[25px] font-black text-white">{n}</span>
              </div>
            ))}
          </div>
          <div className="text-[18px] font-bold text-[#60A5FA] tracking-wider mt-3 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />GEO · 量化竞争闭环
          </div>
        </div>

        {/* 底部一句收口 */}
        <div className="shrink-0 mt-6 rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 text-center">
          <span className="text-[22px] text-zinc-300">
            监测数据只对应最后一步「<span className="text-white font-bold">位次监控</span>」——前面五步的算账能力，才是我们和别人的差距。
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 3：GEO 主线 + 股票旁注（主角是我们的模型，量化交易退为佐证）
 * ==========================================================*/
export function Page_QuantitativeModel_Why_V3() {
  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      {/* Top Main Statement */}
      <div className="absolute top-[0px] left-0 w-full text-[36px] text-white font-extrabold leading-normal max-w-[1600px] font-['MiSans']">
        同样的钱，别人做完只能把品牌推到<span className="text-white font-black text-[42px] border-b-4 border-blue-500 pb-1 mx-1">第 3</span>，我们能把品牌推到<span className="text-white font-black text-[44px] border-b-4 border-blue-500 pb-1 mx-1">第 1</span>。
      </div>

      {/* Column Headers (表头单拎出来，没有底线) */}
      <div className="absolute left-0 top-[100px] w-full flex gap-4 select-none font-['MiSans'] pb-2">
        <div className="flex-1 text-[26px] font-black text-white flex items-center gap-2">
          <span className="w-2.5 h-6 bg-blue-600 rounded-full" />
          GEO量化交易系统
        </div>
        <div className="shrink-0 w-[120px]" /> {/* Spacer for middle arrow */}
        <div className="w-[450px] text-[26px] font-black text-zinc-100 pl-6 border-l border-zinc-800 flex items-center">
          股票量化交易
        </div>
      </div>

      <div className="absolute left-0 top-[165px] w-full bottom-0 flex gap-4 select-none font-['MiSans'] pb-4">
        {/* 左：GEO 主线 (不单独标蓝) */}
        <div className="flex-1 min-w-0 flex flex-col gap-3.5">
          {MAP_ROWS.map((r, i) => (
            <div
              key={r.principle}
              className="flex-1 min-h-0 rounded-2xl border border-white/10 bg-white/[0.03] px-8 flex items-center gap-6"
            >
              <span className="font-['Montserrat'] text-[44px] font-black text-[#004CE5]/70 leading-none shrink-0 w-[64px]">{String(i + 1).padStart(2, '0')}</span>
              <div className="min-w-0">
                <div className="text-[22px] font-bold text-[#60A5FA] tracking-wider">{r.principle}</div>
                <div className="mt-1 text-[24px] leading-[1.25]"><GeoText row={r} /></div>
              </div>
            </div>
          ))}
        </div>

        {/* 中间：灵感来源箭头 (右 -> 左，更细) */}
        <div className="shrink-0 flex flex-col items-center justify-center w-[120px] self-center">
          <span className="text-[22px] font-black text-blue-400 mb-3 bg-blue-950/80 px-4 py-1 rounded border border-blue-800/40 whitespace-nowrap">灵感来源</span>
          <svg className="w-16 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>

        {/* 右：股票量化交易 (5个独立卡片，完美对齐) */}
        <div className="w-[450px] shrink-0 flex flex-col gap-3.5">
          {MAP_ROWS.map((r, i) => (
            <div 
              key={i} 
              className="flex-1 min-h-0 rounded-2xl border border-white/10 bg-white/[0.03] px-8 flex items-center"
            >
              <span className="text-[22px] text-zinc-100 font-medium leading-snug">{r.stock}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版 4：楔子 Hero + 三大主题分组（最精炼，punchy）
 * ==========================================================*/
const THEMES = [
  {
    tag: '看得更深',
    geo: '算出哪个信源占了 80% 权重，而不只是"AI 引用了什么"',
    stock: '像量化找驱动收益的因子',
  },
  {
    tag: '抢得更高',
    geo: '同样预算追更高位次；竞对挤压时，算出该投什么反制',
    stock: '像量化追夏普比率、防拥挤交易',
  },
  {
    tag: '守得更稳',
    geo: '第 1 有成本壁垒；同一细分类目只服务一家',
    emph: '排他原则',
    stock: '像量化控回撤、认策略容量上限',
    highlight: true,
  },
];

export function Page_QuantitativeModel_Why_V4() {
  return (
    <SlideLayout title="GEO量化竞争模型的目标">
      {/* Top Main Statement */}
      <div className="absolute top-[0px] left-0 w-full text-[36px] text-white font-extrabold leading-normal max-w-[1600px] font-['MiSans']">
        同样的钱，别人做完只能把品牌推到<span className="text-white font-black text-[42px] border-b-4 border-blue-500 pb-1 mx-1">第 3</span>，我们能把品牌推到<span className="text-white font-black text-[44px] border-b-4 border-blue-500 pb-1 mx-1">第 1</span>。
      </div>

      <div className="absolute left-0 top-[120px] w-full bottom-0 flex flex-col select-none font-['MiSans']">
        {/* 楔子 Hero */}
        <div className="shrink-0 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.06] px-10 py-7 mb-6">
          <p className="text-[34px] font-black text-white leading-[1.3]">
            监测数据只告诉你 AI「现在引用了什么」，
            <span className="text-[#60A5FA]">却算不出</span>哪个信源占了 80% 权重、竞对几篇就能把你挤下去。
          </p>
        </div>

        {/* 三大主题 */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-6">
          {THEMES.map((t, i) => (
            <div
              key={t.tag}
              className={`rounded-3xl border p-8 flex flex-col ${
                t.highlight ? 'border-[#004CE5]/55 bg-[#004CE5]/[0.12] shadow-[0_0_30px_rgba(0,76,229,0.18)]' : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-['Montserrat'] text-[40px] font-black text-[#004CE5]/70 leading-none">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[28px] font-black text-white">{t.tag}</span>
              </div>
              <p className="mt-6 flex-1 text-[24px] text-zinc-100 leading-[1.4]">
                {t.geo}
                {t.emph && <span className="text-[#60A5FA] font-black"> —— {t.emph}</span>}
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 text-[18px] text-zinc-500 leading-snug shrink-0">
                {t.stock}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Why_V1.hideHeader = true;
Page_QuantitativeModel_Why_V2.hideHeader = true;
Page_QuantitativeModel_Why_V3.hideHeader = true;
Page_QuantitativeModel_Why_V4.hideHeader = true;

export default Page_QuantitativeModel_Why_V3;
