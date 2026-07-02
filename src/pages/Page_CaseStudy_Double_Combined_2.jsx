import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_CaseStudy_Double_Combined_2() {
  const leftCase = {
    industry: "睡眠科技行业",
    brand: "慕思",
    brandId: "musi", // Brand ID for logo path: /cases/brand-logos/logo-musi.png
    product: "慕思智能床、慕思AI床垫",
    platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-4.png', '/ai-logos/ai-5.png'],
    summary: "慕思原本是健康睡眠领域的技术型头部品牌，项目的核心是通过 GEO 优化，让 AI 关键回答中正确且深刻地传达慕思在智能调节与健康睡眠上的技术优势，确保品牌在全场景下保持应有的专业形象与推荐位置。",
    metrics: [
      {
        title: "提及率",
        content: <>由 73.5% <span className="text-[#004CE5] font-bold mx-1">提升至 86.2%</span></>
      },
      {
        title: "平均提及位次",
        content: <>平均位次<span className="text-[#004CE5] font-bold mx-1">提升至 NO.2.3</span></>
      },
      {
        title: "负面信息率",
        content: <>负面率<span className="text-[#004CE5] font-bold mx-1">降至 4.0%</span></>
      }
    ]
  };

  const rightCase = {
    industry: "快消品行业",
    brand: "古井贡酒",
    brandId: "gujing", // Brand ID for logo path: /cases/brand-logos/logo-gujing.png
    product: "古井贡酒 年份原浆",
    platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png'],
    summary: "针对白酒品牌在 AI 检索中偏向于历史典故而忽视高端消费场景推荐的问题，项目重点优化了古井贡酒在商务宴请、节日送礼等高频消费问答中的关联，显著提升了年份原浆系列的推荐深度与提及频次。",
    metrics: [
      {
        title: "提及率",
        content: <>由 55.4% <span className="text-[#004CE5] font-bold mx-1">提升至 81.2%</span></>
      },
      {
        title: "平均提及位次",
        content: <>平均位次<span className="text-[#004CE5] font-bold mx-1">提升至 NO.2.8</span></>
      },
      {
        title: "负面信息率",
        content: <>负面率<span className="text-[#004CE5] font-bold mx-1">降至 1.2%</span></>
      }
    ]
  };

  const renderColumn = (data) => (
    <div className="flex-1 bg-[#101010] border border-white/10 rounded-[1.5rem] flex flex-col overflow-hidden relative shadow-[-10px_0_30px_rgba(0,0,0,0.2)] p-8 sm:p-10 group hover:border-white/20 transition-all duration-500">
      {/* Subtle background glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#004CE5]/5 blur-[80px] -right-24 -top-24 pointer-events-none" />

      {/* Top Info Area (三个栏目横向排开：品牌信息、优化平台、品牌Logo) */}
      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6 shrink-0">
        {/* Left: Brand Name & Capsule */}
        <div className="flex flex-col gap-2">
          <span className="inline-block text-[20px] font-bold tracking-widest text-[#004CE5] bg-[#004CE5]/10 px-4 py-2 rounded-full border border-[#004CE5]/20 max-w-fit font-sans leading-none -mt-4 mb-4">
            {data.industry}
          </span>
          <h3 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3 mt-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
            {data.brand}
          </h3>
          <p className="text-zinc-400 font-medium text-lg">主推产品：{data.product}</p>
        </div>

        {/* Middle: Optimization Platforms */}
        <div className="flex flex-col gap-2 items-start ml-6 mr-auto pl-8 border-l border-white/5">
          <span className="text-[13px] text-zinc-500 font-semibold tracking-widest uppercase font-sans">优化平台</span>
          <div className="flex items-center gap-2 mt-1">
            {data.platforms.map((logo, idx) => (
              <img key={idx} src={logo} alt="platform" className="w-auto h-7 object-contain brightness-95" />
            ))}
          </div>
        </div>

        {/* Right: Brand Logo Slot */}
        <div className="w-[240px] h-[90px] flex items-center justify-end shrink-0 self-center">
          <img 
            src={`/cases/brand-logos/logo-${data.brandId}.png`} 
            alt={`${data.brand} Logo`} 
            className="max-w-full max-h-full object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Three Metrics Cards (Middle Section) */}
      <div className="flex flex-col gap-4 mb-6 shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]"></span>
          <span className="text-[24px] font-black tracking-wider text-zinc-300 font-['MiSans']">优化数据指标</span>
        </div>
        <div className="flex gap-4">
          {data.metrics.map((metric, idx) => (
            <div key={idx} className="flex-1 bg-black border border-white/10 rounded-[1.25rem] flex flex-col overflow-hidden relative shadow-md group hover:border-white/20 transition-all duration-300">
              {/* Title at top right corner */}
              <div className="absolute top-3 right-3 z-20">
                <span className="text-[16px] font-bold tracking-widest text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/5 select-none font-sans">
                  {metric.title}
                </span>
              </div>

              {/* Image Centered exactly in the middle of the top area */}
              <div className="flex-none flex items-center justify-center relative w-full pt-10 px-4 bg-black">
                <img
                  src={`/cases/shared-tables/table-${idx + 1}.png`}
                  alt={`Table ${idx + 1}`}
                  className="w-full aspect-[4/3] object-cover rounded-lg border border-white/5"
                />
              </div>

              {/* Text Description at Bottom */}
              <div className="px-4 py-4 w-full flex-grow flex flex-col justify-start border-t border-white/5 mt-2 bg-black">
                <h3 className="text-sm font-medium text-zinc-300 leading-[1.6] tracking-wide text-left flex-grow overflow-visible [&_span]:text-[20px] [&_span]:font-black [&_span]:text-[#004CE5] [&_span]:mx-0.5">
                  {metric.content}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Background & Summary (Bottom Section) */}
      <div className="mt-auto flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]"></span>
          <span className="text-[24px] font-black tracking-wider text-zinc-300 font-['MiSans']">项目背景与总结</span>
        </div>
        <p className="text-zinc-300 leading-relaxed text-[22px] font-medium h-auto text-justify">
          {data.summary}
        </p>
      </div>
    </div>
  );

  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        {/* Two Columns Container (底部抵到 content bottom) */}
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          {renderColumn(leftCase)}
          {renderColumn(rightCase)}
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable standard slide header since SlideLayout handles customized title placement
Page_CaseStudy_Double_Combined_2.hideHeader = true;
