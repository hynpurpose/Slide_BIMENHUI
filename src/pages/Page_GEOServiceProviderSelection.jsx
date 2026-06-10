import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

function ProviderCard({ number, title, descriptionLines, highlighted, iconPath }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={`rounded-[32px] p-6 pt-8 flex flex-col justify-start relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 h-[500px] text-left ${
      highlighted 
        ? 'bg-gradient-to-br from-[#004CE5] via-[#003cb8] to-[#0B0C10] border border-blue-500/30 hover:border-blue-400/50 shadow-[0_30px_60px_-15px_rgba(0,76,229,0.45)]' 
        : 'bg-[#0D0E12] border border-zinc-800/60 hover:border-zinc-700'
    }`}>
      {/* Number */}
      <div className="mb-5">
        <span className="text-[48px] font-bold font-mono tracking-tight block leading-none text-white">
          {number}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-[26px] xl:text-[28px] font-black text-white tracking-wide mb-5 leading-tight min-h-[72px]">
        {title}
      </h3>

      {/* Description lines */}
      <div className="flex-grow flex flex-col gap-3">
        {descriptionLines.map((line, idx) => (
          <p 
            key={idx} 
            className={`text-[17px] xl:text-[19px] font-bold leading-relaxed ${
              highlighted ? 'text-blue-100/90' : 'text-zinc-400'
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Icon at Bottom Right */}
      <div className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center">
        {!imgFailed ? (
          <img
            src={iconPath}
            alt={`Icon ${number}`}
            className="w-full h-full object-contain"
            onError={() => setImgFailed(true)}
          />
        ) : (
          /* Fallback Sparkle Icon */
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className={highlighted ? 'text-white/60' : 'text-white/20'}>
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="currentColor"/>
          </svg>
        )}
      </div>
    </div>
  );
}

export default function Page_GEOServiceProviderSelection() {
  return (
    <SlideLayout
      title="如何选出靠谱的服务商？"
      subtitle="5个判断技巧"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 5-Column Card Grid stretching to fill safe zone height */}
      <div className="w-full h-full flex items-center justify-center relative z-10 py-[40px] select-none">
        <div className="grid grid-cols-5 gap-6 w-full items-stretch">
          
          <ProviderCard
            number="01"
            title={<>是否做品牌调研<br />&建立品牌数据库</>}
            descriptionLines={[
              "词条选择的本质是精准定位",
              "如果服务商不深入分析品牌画像、核心卖点、短板及真实评价，就无法选对词条。"
            ]}
            highlighted={false}
            iconPath="/icons/provider-icon-1.svg"
          />

          <ProviderCard
            number="02"
            title={<>是否有全链路<br />数据监测系统</>}
            descriptionLines={[
              "实时监测",
              "中立验收",
              "拒绝造假"
            ]}
            highlighted={true}
            iconPath="/icons/provider-icon-2.svg"
          />

          <ProviderCard
            number="03"
            title="看内容策略"
            descriptionLines={[
              "质胜于量",
              "人愿意看，AI才信"
            ]}
            highlighted={false}
            iconPath="/icons/provider-icon-3.svg"
          />

          <ProviderCard
            number="04"
            title="看投放策略"
            descriptionLines={[
              "721原则：",
              "70% 高权重/稳定抓取平台",
              "20% 垂直行业/长尾渠道",
              "10% 测试新平台/新内容"
            ]}
            highlighted={false}
            iconPath="/icons/provider-icon-4.svg"
          />

          <ProviderCard
            number="05"
            title={<>看文章被<br />AI 引用的概率</>}
            descriptionLines={[
              "30% 被引用，已经算是很不错的水平；",
              "80% 被引用，行业顶尖"
            ]}
            highlighted={false}
            iconPath="/icons/provider-icon-5.svg"
          />

        </div>
      </div>
    </SlideLayout>
  );
}

Page_GEOServiceProviderSelection.hideHeader = true;
