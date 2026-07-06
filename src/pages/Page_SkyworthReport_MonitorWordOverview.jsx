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
    <div className="bg-white rounded-2xl border border-[#f0f0f0] px-8 py-5 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="shrink-0 w-[140px] text-right flex flex-col justify-center">
          <Num className="text-[44px] xl:text-[50px] font-extrabold text-[#00a854] leading-none tracking-tight">
            {formatPct(positive)}%
          </Num>
          <p className="text-[15px] xl:text-[16px] text-[#00a854]/75 font-semibold mt-1">正面</p>
        </div>

        <div className="flex-1 min-w-0">
          <div className="h-6 flex gap-[2px] rounded-full overflow-hidden bg-[#f5f5f5]">
            <div
              className="h-full bg-[#52c41a] rounded-l-full"
              style={{ width: `${positive}%` }}
            />
            <div
              className="h-full bg-[#ff4d4f] rounded-r-full"
              style={{ width: `${negative}%` }}
            />
          </div>
        </div>

        <div className="shrink-0 w-[140px] text-left flex flex-col justify-center">
          <Num className="text-[44px] xl:text-[50px] font-extrabold text-[#f5222d] leading-none tracking-tight">
            {formatPct(negative)}%
          </Num>
          <p className="text-[15px] xl:text-[16px] text-[#f5222d]/75 font-semibold mt-1">负面</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 mt-4 pt-4 border-t border-[#f0f0f0]">
        <p className="text-[18px] xl:text-[20px] font-bold text-[#1a1a1a] leading-snug">
          {positiveKeywords}
        </p>
        <p className="text-[18px] xl:text-[20px] font-bold text-[#1a1a1a] leading-snug text-right">
          {negativeKeywords}
        </p>
      </div>
    </div>
  );
}

function ProductPlaceholder({ src }) {
  return (
    <div className="flex-1 min-h-0 rounded-xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
        <svg className="w-7 h-7 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-zinc-400 text-[18px] xl:text-[20px] font-medium">产品正负面分布展示位</p>
      <div className="bg-black/40 border border-white/10 px-3 py-1 rounded text-xs font-mono text-[#004CE5]">
        存放路径: {src}
      </div>
    </div>
  );
}

export function Page_SkyworthReport_MonitorWordOverview() {
  const cat = overview.category_monitor;
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);
  const src = '/geo-report/skyworth-monitor-product.jpg';

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-4">

          <div className="text-center shrink-0">
            <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
              监测词总览
            </h1>
          </div>

          {/* 第一部分：品类监测词正负面信息比例 */}
          <div className="shrink-0 flex flex-col gap-2">
            <SectionTitle>正负面回答</SectionTitle>
            <SentimentDistributionCard
              positive={cat.positive}
              negative={cat.negative}
              positiveKeywords={CATEGORY_SENTIMENT.positive_keywords}
              negativeKeywords={CATEGORY_SENTIMENT.negative_keywords}
            />
          </div>

          {/* 第二部分：产品专属监测词（占位或图片） */}
          <div className="flex-1 min-h-0 flex flex-col gap-3">
            <SectionTitle>产品专属监测词</SectionTitle>
            <div 
              className={`flex-1 min-h-0 rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.2)] overflow-hidden ${
                imgLoaded && !imgError ? 'p-0' : 'px-8 py-5'
              }`}
            >
              {imgLoaded && !imgError ? (
                <img 
                  src={src} 
                  alt="产品正负面分布" 
                  className="w-full h-full object-contain" 
                />
              ) : (
                <>
                  <img 
                    src={src} 
                    alt="产品正负面分布" 
                    className="hidden" 
                    onLoad={() => setImgLoaded(true)} 
                    onError={() => setImgError(true)} 
                  />
                  <ProductPlaceholder src={src} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_MonitorWordOverview.hideHeader = true;
