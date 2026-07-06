import React from 'react';
import SlideLayout from '../components/SlideLayout';
import overview from '../data/geoOverview.json';

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
    <h3 className="text-[28px] xl:text-[30px] font-bold text-white shrink-0 flex items-center gap-2.5">
      <span className="w-2 h-6 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      {children}
    </h3>
  );
}

function formatPct(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

// 注意：以下关键词文案基于当前 geoOverview.json 数据撰写，重新采集数据后需人工同步更新
const CATEGORY_SENTIMENT = {
  positive_keywords: '性价比高、设计美学、护眼功能',
  negative_keywords: '品控问题、提及劣势、售后服务',
};

function SentimentDistributionCard({ positive, negative, positiveKeywords, negativeKeywords }) {
  return (
    <div className="bg-white rounded-2xl border border-[#f0f0f0] px-8 py-6 shadow-sm">
      <div className="pb-5 border-b border-[#f0f0f0]">
        <p className="text-[20px] xl:text-[22px] font-bold text-[#00a854] mb-2">
          <Num>{formatPct(positive)}</Num>% 正面
        </p>
        <p className="text-[18px] xl:text-[20px] font-bold text-[#1a1a1a] leading-snug">
          {positiveKeywords}
        </p>
      </div>

      <div className="py-5 border-b border-[#f0f0f0]">
        <p className="text-[20px] xl:text-[22px] font-bold text-[#f5222d] mb-2">
          <Num>{formatPct(negative)}</Num>% 负面
        </p>
        <p className="text-[18px] xl:text-[20px] font-bold text-[#1a1a1a] leading-snug">
          {negativeKeywords}
        </p>
      </div>

      <div className="pt-5">
        <div className="h-5 flex gap-[2px]">
          <div
            className="h-full bg-[#52c41a] rounded-l-full"
            style={{ width: `${positive}%` }}
          />
          <div
            className="h-full bg-[#ff4d4f] rounded-r-full"
            style={{ width: `${negative}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[14px] text-[#999999]">
          <Num>{formatPct(positive)}</Num>%
          <Num>{formatPct(negative)}</Num>%
        </div>
      </div>
    </div>
  );
}

function ProductPlaceholder() {
  return (
    <div className="flex-1 min-h-0 rounded-xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
        <svg className="w-7 h-7 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-zinc-400 text-[18px] xl:text-[20px] font-medium">产品正负面分布展示位</p>
    </div>
  );
}

export function Page_SkyworthReport_MonitorWordOverview() {
  const cat = overview.category_monitor;

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-6">

          <div className="text-center shrink-0">
            <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
              监测词总览
            </h1>
          </div>

          {/* 第一部分：品类监测词正负面信息比例 */}
          <div className="shrink-0 flex flex-col gap-3">
            <SectionTitle>品类监测词</SectionTitle>
            <p className="text-[18px] xl:text-[20px] text-zinc-300 font-medium pl-[18px]">
              品类监测词正负面回答分布
            </p>
            <SentimentDistributionCard
              positive={cat.positive}
              negative={cat.negative}
              positiveKeywords={CATEGORY_SENTIMENT.positive_keywords}
              negativeKeywords={CATEGORY_SENTIMENT.negative_keywords}
            />
          </div>

          {/* 第二部分：产品专属监测词（占位） */}
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <SectionTitle>产品专属监测词</SectionTitle>
            <div className="flex-1 min-h-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl px-8 py-5 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <ProductPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_MonitorWordOverview.hideHeader = true;
