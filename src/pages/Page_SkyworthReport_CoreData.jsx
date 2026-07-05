import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

function Num({ children, className = '' }) {
  return (
    <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-[24px] xl:text-[26px] font-bold text-white shrink-0 flex items-center gap-2.5">
      <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      {children}
    </h3>
  );
}

/* ======================================================================
 * 子页 1：我们的数据表现（品牌优化词 + 五款产品细分类）
 * ==================================================================== */

const BRAND_WORD = { rate: '73.6%', top1: '41.2%', top3: '63.5%' };

const PRODUCT_ROWS = [
  { name: '创维 A7H Pro', rate: '54.3%', top1: '18.9%', top3: '40.2%' },
  { name: '创维 A8H', rate: '61.2%', top1: '24.7%', top3: '47.8%' },
  { name: '创维 A10H', rate: '68.5%', top1: '32.4%', top3: '55.1%' },
  { name: '创维 Q7H', rate: '38.9%', top1: '9.4%', top3: '26.3%' },
  { name: '创维 Q8H', rate: '43.6%', top1: '12.1%', top3: '30.5%' },
];

export function Page_SkyworthReport_CoreDataSelf() {
  const brandMetrics = [
    { label: '提及率', value: BRAND_WORD.rate },
    { label: 'TOP1提及率', value: BRAND_WORD.top1 },
    { label: 'TOP3提及率', value: BRAND_WORD.top3 },
  ];

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">

          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              核心数据总览
            </h1>
          </div>

          {/* 品牌优化词：三大核心指标 */}
          <div className="shrink-0 flex flex-col gap-3">
            <SectionTitle>品类优化词</SectionTitle>
            <div className="grid grid-cols-3 gap-5">
              {brandMetrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-gradient-to-br from-[#004CE5]/15 to-white/[0.01] border border-[#004CE5]/25 rounded-2xl px-7 py-6 flex flex-col gap-2 shadow-[0_0_25px_rgba(0,76,229,0.06)]"
                >
                  <span className="text-[17px] xl:text-[18px] text-zinc-400 font-bold">{m.label}</span>
                  <Num className="text-[52px] xl:text-[58px] font-extrabold text-white leading-none">{m.value}</Num>
                </div>
              ))}
            </div>
          </div>

          {/* 五款产品细分类 */}
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <SectionTitle>产品专属优化词</SectionTitle>
            <div className="flex-1 min-h-0 rounded-2xl border border-white/[0.08] bg-[#09090b]/40 overflow-hidden shadow-inner flex flex-col">
              {/* 表头 */}
              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] shrink-0 bg-[#004CE5]/15 border-b border-[#004CE5]/30 text-white text-[18px] xl:text-[20px] font-bold">
                <div className="px-6 py-3">产品</div>
                <div className="px-4 py-3 text-center border-l border-[#004CE5]/20">提及率</div>
                <div className="px-4 py-3 text-center border-l border-[#004CE5]/20">TOP1提及率</div>
                <div className="px-4 py-3 text-center border-l border-[#004CE5]/20">TOP3提及率</div>
              </div>
              {/* 表体：5 行均分 */}
              <div className="flex-1 min-h-0 grid grid-rows-5">
                {PRODUCT_ROWS.map((r) => (
                  <div
                    key={r.name}
                    className="grid grid-cols-[2.2fr_1fr_1fr_1fr] items-center border-b border-zinc-900/80 last:border-b-0"
                  >
                    <div className="px-6 py-1.5 flex items-center gap-3">
                      <span className="text-[22px] xl:text-[24px] font-bold text-white">
                        {r.name}
                      </span>
                    </div>
                    <Num className="px-4 py-1.5 text-center text-[30px] xl:text-[34px] font-bold text-white">
                      {r.rate}
                    </Num>
                    <Num className="px-4 py-1.5 text-center text-[30px] xl:text-[34px] font-bold text-white">
                      {r.top1}
                    </Num>
                    <Num className="px-4 py-1.5 text-center text-[30px] xl:text-[34px] font-bold text-white">
                      {r.top3}
                    </Num>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 分析总结 */}
          <div className="shrink-0 border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] rounded-2xl px-6 py-4 flex items-start gap-4">
            <span className="text-[18px] xl:text-[20px] font-black text-white shrink-0 mt-0.5">数据总结</span>
            <p className="text-[16px] xl:text-[18px] text-zinc-300 leading-[1.85] text-justify">
              品牌层面，创维在壁纸/好看电视品类大词的<strong className="text-white font-bold">提及率已达 73.6%、TOP3 提及率 63.5%</strong>，AI 认知优势稳固；但 <strong className="text-white font-bold">TOP1 仅 41.2%</strong>，仍有近六成首推位被竞品分走。产品层面呈现<strong className="text-white font-bold">明显梯队分化</strong>：旗舰 A10H 三项指标全面领先，走量款 A8H 居中，而 Q7H / Q8H 在细分类提及率与 TOP1 率上偏弱，长尾词与专属参数词的语料覆盖是主要缺口。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthReport_CoreDataSelf.hideHeader = true;

/* ======================================================================
 * 子页 2：竞品对比（创维 VS 主流品牌，谁高谁低、差多少）
 * ==================================================================== */

const COMPETITOR_ROWS = [
  { name: 'TCL', tag: '', rate: 61.5, top1: 25.8, top3: 52.4 },
  { name: '海信', tag: '', rate: 58.2, top1: 22.3, top3: 49.1 },
  { name: '三星', tag: '', rate: 47.9, top1: 18.6, top3: 38.2 },
  { name: '小米', tag: '', rate: 44.3, top1: 14.2, top3: 33.7 },
];

export function Page_SkyworthReport_CoreDataCompetitor() {
  const mentionRateData = [
    { name: '创维', value: '73.6%', self: true },
    { name: 'TCL', value: '61.5%' },
    { name: '海信', value: '58.2%' },
    { name: '三星', value: '47.9%' },
    { name: '小米', value: '44.3%' },
  ];

  const top1RateData = [
    { name: '创维', value: '41.2%', self: true },
    { name: 'TCL', value: '25.8%' },
    { name: '海信', value: '22.3%' },
    { name: '三星', value: '18.6%' },
    { name: '小米', value: '14.2%' },
  ];

  const avgRankData = [
    { name: '海信', value: 'NO. 2.6' },
    { name: '创维', value: 'NO. 2.8', self: true },
    { name: 'TCL', value: 'NO. 3.5' },
    { name: '三星', value: 'NO. 4.8' },
    { name: '小米', value: 'NO. 5.2' },
  ];

  const renderCompetitorTable = (title, headers, data) => {
    return (
      <div className="flex flex-col gap-2.5 h-full min-h-0">
        <h3 className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 flex items-center gap-2">
          <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          {title}
        </h3>
        <div className="flex-grow rounded-2xl border border-white/[0.08] bg-[#09090b]/40 overflow-hidden shadow-inner flex flex-col p-4">
          <table className="w-full text-left border-collapse table-fixed flex-grow h-full">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                <th className="py-2.5 px-3 w-[20%]"></th>
                <th className="py-2.5 px-2 text-[15px] font-bold text-zinc-400 w-[50%]">{headers[0]}</th>
                <th className="py-2.5 px-4 text-[15px] font-bold text-zinc-400 w-[30%] text-right pr-4">{headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => {
                const isSelf = item.self;
                const rank = idx + 1;

                let rankElement;
                if (rank === 1) {
                  rankElement = (
                    <div className="w-8 h-8 rounded-full bg-[#FFD100] text-zinc-900 flex items-center justify-center font-black text-[15px] shadow-sm">
                      1
                    </div>
                  );
                } else if (rank === 2) {
                  rankElement = (
                    <div className="w-8 h-8 rounded-full bg-zinc-300 text-zinc-800 flex items-center justify-center font-black text-[15px]">
                      2
                    </div>
                  );
                } else if (rank === 3) {
                  rankElement = (
                    <div className="w-8 h-8 rounded-full bg-[#FFC085] text-zinc-900 flex items-center justify-center font-black text-[15px] shadow-sm">
                      3
                    </div>
                  );
                } else {
                  rankElement = (
                    <div className="text-zinc-500 font-bold text-[17px] text-center w-8">
                      {rank}
                    </div>
                  );
                }

                return (
                  <tr
                    key={idx}
                    className={`border-b border-white/[0.03] last:border-none hover:bg-white/[0.02] transition-colors ${
                      isSelf ? 'bg-[#004CE5]/[0.08]' : ''
                    }`}
                  >
                    <td className="py-2 px-3 align-middle">
                      <div className="flex justify-center">{rankElement}</div>
                    </td>
                    <td className="py-2 px-2 align-middle">
                      <div className="flex items-center gap-2">
                        <span className={`text-[16px] xl:text-[18px] ${isSelf ? 'font-extrabold text-[#60A5FA]' : 'font-medium text-zinc-200'}`}>
                          {item.name}
                        </span>
                        {isSelf && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#004CE5]/20 text-[#60A5FA] border border-[#004CE5]/30">
                            本品
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`py-2 px-4 text-right pr-4 align-middle text-[24px] xl:text-[28px] font-extrabold font-['Montserrat',sans-serif] ${
                      isSelf ? 'text-white' : 'text-zinc-200'
                    }`}>
                      {item.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">

          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              竞品对比
            </h1>
          </div>

          {/* 三张并排的排名表 */}
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-6">
            {renderCompetitorTable('提及率排名', ['品牌', '提及率'], mentionRateData)}
            {renderCompetitorTable('TOP1提及率排名', ['品牌', 'TOP1提及率'], top1RateData)}
            {renderCompetitorTable('平均提及位次排名', ['品牌', '平均位次'], avgRankData)}
          </div>

          {/* 底部分析与策略区 */}
          <div className="grid grid-cols-2 gap-6 h-[250px] shrink-0 mt-2">
            {/* 左侧：现状分析 */}
            <div className="flex flex-col gap-2 h-full min-h-0">
              <h2 className="text-[20px] xl:text-[22px] font-bold text-white flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
                对比现状分析：
              </h2>
              <div className="flex-grow rounded-2xl bg-[#004CE5]/5 border border-[#004CE5]/20 p-5 flex flex-col justify-evenly min-h-0 text-[15px] xl:text-[17px] leading-[1.8] text-zinc-300">
                <p>
                  1. 创维在壁纸电视赛道三项核心指标<strong className="text-white font-bold">全面领先</strong>，提及率高出主要对手 TCL 12.1pt，首推率高出 15.4pt，行业第一优势稳固。
                </p>
                <div className="h-px bg-white/[0.04] my-1" />
                <p>
                  2. TCL 与海信分别位列第二、第三位次，提及排位紧咬本品，构成主要拦截威胁；三星、小米在此类细分领域的推荐声量仍显平庸。
                </p>
              </div>
            </div>

            {/* 右侧：应对策略 */}
            <div className="flex flex-col gap-2 h-full min-h-0">
              <h2 className="text-[20px] xl:text-[22px] font-bold text-white flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
                重点应对策略：
              </h2>
              <div className="flex-grow rounded-2xl bg-white/[0.015] border border-white/[0.08] p-5 flex flex-col justify-evenly min-h-0 text-[15px] xl:text-[17px] leading-[1.8] text-zinc-300">
                {[
                  {
                    num: '01',
                    title: '首推优势巩固',
                    desc: '强化本品在核心场景的语料厚度，巩固大模型与搜索引擎首推占位。',
                  },
                  {
                    num: '02',
                    title: '强竞品拦截',
                    desc: '在对比语料中注入与TCL、海信等对手的差异化优势，引导定性推荐。',
                  },
                  {
                    num: '03',
                    title: '弱势长尾场景防御',
                    desc: '加大在长尾艺术及专属细分场景的内容渗透，拉开排位优势。',
                  },
                ].map((strat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#60A5FA] font-bold text-[16px] xl:text-[18px] shrink-0 mt-0.5">{strat.num}</span>
                    <p className="flex-grow min-h-0 text-zinc-200">
                      <span className="text-white font-bold">{strat.title}：</span>
                      {strat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_CoreDataCompetitor.hideHeader = true;

export function Page_SkyworthReport_MonitorWordOverview() {
  const summaryData = [
    {
      type: '正面',
      ratio: '88.5%',
      trend: '优势稳固',
      desc: '核心内容：生态壁纸美观度、超薄贴墙设计、优秀音画体验',
      isPositive: true,
      colorClass: 'border-l-4 border-blue-500/80',
    },
    {
      type: '负面',
      ratio: '11.5%',
      trend: '偶有波动',
      desc: '主要阻碍：开机广告、系统偶发卡顿、部分配置虚标质疑',
      isPositive: false,
      colorClass: 'border-l-4 border-rose-500/60',
    }
  ];

  const brandSentimentData = [
    { name: '创维 (本品)', positive: 88.5, negative: 11.5, self: true },
    { name: 'TCL', positive: 82.4, negative: 17.6 },
    { name: '海信', positive: 80.8, negative: 19.2 },
    { name: '三星', positive: 74.2, negative: 25.8 },
    { name: '小米', positive: 68.5, negative: 31.5 },
  ];

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">

          <div className="text-center shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              监测词总览
            </h1>
          </div>

          {/* 第一部分：正负面比例（紧凑表格，非拉伸） */}
          <div className="shrink-0 flex flex-col gap-2.5">
            <h3 className="text-[20px] xl:text-[22px] font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
              监测词比例与核心反馈
            </h3>
            <div className="rounded-2xl border border-white/[0.08] bg-[#09090b]/40 overflow-hidden shadow-inner flex flex-col">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/[0.08] text-zinc-400 text-[15px] font-bold">
                    <th className="py-2.5 px-6 w-[12%]">类型</th>
                    <th className="py-2.5 px-6 w-[15%]">占比</th>
                    <th className="py-2.5 px-6 w-[15%]">趋势</th>
                    <th className="py-2.5 px-6">核心内容描述</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryData.map((row, idx) => (
                    <tr key={idx} className={`border-b border-white/[0.03] last:border-none hover:bg-white/[0.02] transition-colors ${row.colorClass}`}>
                      <td className="py-2.5 px-6 align-middle">
                        <span className="font-bold text-[16px] xl:text-[18px] flex items-center gap-2 text-zinc-200">
                          {row.isPositive ? (
                            <span className="flex items-center justify-center w-5 h-5 rounded border border-[#60A5FA] text-[#60A5FA] bg-[#60A5FA]/10 shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                          ) : (
                            <span className="flex items-center justify-center w-5 h-5 rounded border border-rose-400 text-rose-400 bg-rose-400/10 shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </span>
                          )}
                          {row.type}
                        </span>
                      </td>
                      <td className="py-2.5 px-6 align-middle">
                        <Num className={`text-[24px] xl:text-[28px] font-black ${row.isPositive ? 'text-[#60A5FA]' : 'text-rose-400'}`}>{row.ratio}</Num>
                      </td>
                      <td className="py-2.5 px-6 align-middle">
                        <span className="text-[15px] xl:text-[16px] font-bold text-zinc-300">{row.trend}</span>
                      </td>
                      <td className="py-2.5 px-6 align-middle">
                        <p className="text-[15px] xl:text-[16px] text-zinc-400 leading-relaxed">{row.desc}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 第二部分：产品对比（5 列柱状对比轴） */}
          <div className="flex-1 min-h-0 flex flex-col gap-2.5">
            <h3 className="text-[20px] xl:text-[22px] font-bold text-white flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
              主流品牌正向推荐率对比轴
            </h3>
            
            <div className="flex-1 min-h-0 grid grid-cols-5 gap-5 items-stretch">
              {brandSentimentData.map((item, idx) => {
                const isSelf = item.self;
                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl border p-4 flex flex-col items-center justify-between transition-all duration-300 ${
                      isSelf 
                        ? 'bg-[#004CE5]/10 border-[#004CE5]/40 shadow-[0_0_20px_rgba(0,76,229,0.12)]' 
                        : 'bg-white/[0.02] border-white/[0.08]'
                    }`}
                  >
                    {/* 品牌名称 */}
                    <span className={`text-[17px] font-bold tracking-wide shrink-0 ${isSelf ? 'text-[#60A5FA]' : 'text-zinc-300'}`}>
                      {item.name}
                    </span>
                    
                    {/* 垂直堆叠图表柱 */}
                    <div className="relative w-11 flex-1 my-3 bg-white/[0.04] rounded-full overflow-hidden flex flex-col justify-end border border-white/[0.08] shadow-inner">
                      {/* 负向占比（顶部部分，淡红灰色） */}
                      <div 
                        className="w-full bg-rose-500/10 border-b border-rose-500/20" 
                        style={{ height: `${item.negative}%` }}
                      />
                      {/* 正向占比（底部部分，亮蓝/天蓝渐变） */}
                      <div 
                        className={`w-full transition-all duration-500 ${
                          isSelf 
                            ? 'bg-gradient-to-t from-[#004CE5] to-[#60A5FA]' 
                            : 'bg-gradient-to-t from-[#004CE5]/40 to-[#60A5FA]/40'
                        }`} 
                        style={{ height: `${item.positive}%` }}
                      />
                    </div>

                    {/* 正面率数据 */}
                    <div className="flex flex-col items-center gap-0.5 shrink-0">
                      <span className={`text-[20px] xl:text-[22px] font-black font-['Montserrat'] ${isSelf ? 'text-[#60A5FA]' : 'text-white'}`}>
                        {item.positive}%
                      </span>
                      <span className="text-[13px] text-zinc-500 font-bold">正面率</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 底部分析建议（满幅） */}
          <div className="shrink-0 border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] rounded-2xl px-6 py-3.5 flex items-start gap-4">
            <span className="text-[18px] xl:text-[20px] font-black text-white shrink-0 mt-0.5">诊断总结</span>
            <p className="text-[16px] xl:text-[18px] text-zinc-300 leading-[1.8] text-justify flex-grow">
              大盘监测问答中，创维凭借壁纸电视品类词的持续占位，正面推荐提及率达到 <strong className="text-white">88.5%</strong>，显著高于竞品。但系统广告与卡顿等长尾负面声量（占 <strong className="text-white">11.5%</strong>）仍是拦截决策的核心毒点。后续应当密集铺设“系统升级无广告、极速运行”等实测口碑，消解历史旧贴影响。
            </p>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_MonitorWordOverview.hideHeader = true;

function ScreenshotSlot({ src, alt, hint }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-center items-center min-h-0 pb-1">
      {imgLoaded && !imgError ? (
        <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl transition-all duration-300 hover:border-white/20 group flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full w-auto h-auto rounded-xl object-contain group-hover:scale-[1.002] transition-transform duration-500"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="w-full max-w-[1550px] aspect-[2/1] max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
          <img src={src} alt={alt} className="hidden" onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
          <div className="absolute inset-2 flex flex-col items-center justify-center p-4 text-center bg-white/[0.01] rounded-xl border border-dashed border-white/10">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-zinc-300 font-bold text-base mb-1">{hint}</p>
            <p className="text-zinc-500 text-xs max-w-sm mb-3">上传任意比例的图片，外边框将自动无缝贴合原图尺寸，同时最大化屏幕显示。</p>
            <div className="bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#004CE5]">
              存放路径: {src}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export function Page_SkyworthReport_OptDashboard() {
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
          <div className="text-center mb-5 shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 核心指标表现概览
            </h1>
          </div>
          <ScreenshotSlot
            src="/geo-report/page-54-dashboard-left.jpg"
            alt="优化词核心指标看板大图"
            hint="此处为优化词核心指标表现大图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthReport_OptDashboard.hideHeader = true;

export function Page_SkyworthReport_OptEntries() {
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
          <div className="text-center mb-5 shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 词条表现分析
            </h1>
          </div>
          <ScreenshotSlot
            src="/geo-report/page-55-entries.jpg"
            alt="优化词词条表现大图"
            hint="此处为优化词词条表现大图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthReport_OptEntries.hideHeader = true;

export function Page_SkyworthReport_OptCompetitor() {
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

  const renderTable = (title, headers, data) => {
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
                  rankElement = <div className="w-8 h-8 rounded-full bg-[#FFD100] text-zinc-955 flex items-center justify-center font-black text-sm shadow-md">1</div>;
                } else if (rankNum === 2) {
                  rankElement = <div className="w-8 h-8 rounded-full bg-zinc-700 text-zinc-200 flex items-center justify-center font-bold text-sm">2</div>;
                } else if (rankNum === 3) {
                  rankElement = <div className="w-8 h-8 rounded-full bg-[#FFC085] text-zinc-955 flex items-center justify-center font-bold text-sm shadow-md">3</div>;
                } else {
                  rankElement = <div className="text-zinc-400 font-bold text-sm text-center w-8">{rankNum}</div>;
                }

                return (
                  <tr
                    key={idx}
                    className={`border-b border-white/5 last:border-none hover:bg-white/[0.02] transition-colors ${
                      isBrand ? 'bg-[#004CE5]/10 border-y border-[#004CE5]/20' : ''
                    }`}
                  >
                    <td className="py-2 px-2 align-middle">
                      <div className="flex justify-center">{rankElement}</div>
                    </td>
                    <td className="py-2 px-2 align-middle">
                      <div className="flex items-center flex-wrap gap-1.5">
                        <span className={`text-[15px] lg:text-[16px] ${isBrand ? 'font-black text-blue-400' : 'font-semibold text-zinc-200'}`}>
                          {item.name}
                        </span>
                        {isBrand && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            目标产品
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`py-2 px-2 text-right pr-4 align-middle text-lg lg:text-xl font-bold font-mono ${
                      isBrand ? 'text-blue-400' : 'text-zinc-300'
                    }`}>
                      {item.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-3">
          <div className="text-center shrink-0 mb-1">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 竞品横向对比
            </h1>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6 min-h-0 mb-1">
            {renderTable('提及率排名', ['品牌名称', '提及率'], mentionRateData)}
            {renderTable('Top1 提及率排名', ['品牌名称', 'Top1 提及率'], top1RateData)}
            {renderTable('平均提及位次排名', ['品牌名称', '平均提及位次'], avgRankData)}
          </div>

          <div className="border border-[#004CE5]/30 border-l-4 border-l-blue-500 bg-[#004CE5]/10 rounded-xl px-6 py-3.5 shrink-0 flex items-center justify-between gap-4 mb-3">
            <p className="text-[17px] lg:text-[18.5px] xl:text-[20.5px] text-zinc-100 leading-relaxed">
              <strong className="text-blue-400 font-black">核心结论：</strong>创维在 <strong className="text-white font-black">提及率（73.6%）</strong> 与 <strong className="text-white font-black">Top1 提及率（41.2%）</strong> 上高居行业第一，但在 <strong className="text-white font-black">平均提及位次</strong> 上以 NO.2.8 微弱落后于海信（NO.2.6）——创维“被提及得多”，但海信“被排得更靠前”。
            </p>
          </div>

          <div className="h-[30%] min-h-[200px] max-h-[260px] shrink-0 grid grid-cols-12 gap-5 mt-2">
            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-6 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  核心发现
                </h3>
                <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">品类优势明显：</strong>“好看的电视”词群拉高了创维整体提及率，声量领先海信、TCL。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">位次略逊一筹：</strong>海信在通用性能词的首推位更稳，把平均位次拉到了行业第一。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-5 pb-4 px-6 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  竞争格局总结
                </h3>
                <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">主流双雄对峙：</strong>创维与海信牢牢把控第一、第二梯队声量，TCL在第三顺位跟随，其余品牌较弱。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">内容拦截紧咬：</strong>海信与TCL正持续铺设同类测评内容，试图蚕食创维的首推份额。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-5 pb-4 px-6 flex flex-col h-full justify-start gap-2.5 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                <h3 className="text-[20px] lg:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  行动建议
                </h3>
                <div className="flex-grow flex flex-col gap-3 text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">强攻位次差距：</strong>在通用性能词密集投放对标横评与科普，把平均位次抢回行业第一。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">心智壁垒稳固：</strong>在壁纸和好看电视大词下继续巩固优势，防范海信等跟风者截流。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthReport_OptCompetitor.hideHeader = true;

export function Page_SkyworthReport_OptSources() {
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0">
          <div className="text-center mb-5 shrink-0">
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 引用源分析
            </h1>
          </div>
          <ScreenshotSlot
            src="/geo-report/page-61-sources.jpg"
            alt="优化词引用源分析大图"
            hint="此处为优化词引用源分析大图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthReport_OptSources.hideHeader = true;
