import React from 'react';
import { Calendar, Package, ListFilter, ChevronDown, Crosshair } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const BMW_MINI = {
  industry: '汽车行业',
  brand: '宝马mini',
  brandId: 'bmwmini',
  product: 'Mini Cooper',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png', '/ai-logos/ai-4.png'],
  summary: [
    '项目重点优化 MINI 在「都市高品质代步」等核心 AI 问答场景的内容关联。',
    '显著提升了品牌在大模型中的推荐位次与提及表现。',
    '稳固了 MINI 经典、个性的品牌心智与年轻都市出行形象。',
  ],
};

const MUSI = {
  industry: '睡眠科技行业',
  brand: '慕思',
  brandId: 'musi',
  product: '慕思智能床',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-4.png', '/ai-logos/ai-5.png'],
  summary:
    '慕思原本是健康睡眠领域的技术型头部品牌，项目的核心是通过 GEO 优化，让 AI 关键回答中正确且深刻地传达慕思在智能调节与健康睡眠上的技术优势，确保品牌在全场景下保持应有的专业形象与推荐位置。',
};

const BMW_MINI_OVERVIEW = [
  { label: '提及率', value: '79.5%' },
  { label: '平均提及位次', value: 'NO. 2.4' },
  { label: '负面信息率', value: '1.8%' },
];

const MUSI_OVERVIEW = [
  { label: '提及率', value: '86.2%' },
  { label: '平均提及位次', value: 'NO. 2.3' },
  { label: '负面信息率', value: '4.0%' },
];

function SectionTitle({ children, size = 22 }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      <span className="font-black tracking-wider text-zinc-200 font-['MiSans']" style={{ fontSize: `${size}px` }}>
        {children}
      </span>
    </div>
  );
}

function FilterPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-[#E5E6EB] rounded-[10px] pl-3.5 pr-1.5 py-1.5 leading-none">
      <Icon size={16} className="text-[#4E5563] shrink-0" strokeWidth={2.2} />
      <span className="text-[15px] font-semibold text-[#1F2329]">{label}</span>
      <span className="flex items-center gap-1.5 bg-[#F2F3F5] rounded-[7px] px-2.5 py-1.5">
        <span className="text-[14px] font-semibold text-[#1F2329]">{value}</span>
        <ChevronDown size={14} className="text-[#8A9099]" strokeWidth={2.4} />
      </span>
    </div>
  );
}

function OverviewPanel({ product, metrics }) {
  return (
    <div className="flex-1 bg-[#F7F8FA] rounded-[1rem] px-6 py-5 flex flex-col min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <span className="text-[21px] font-black text-[#141619] leading-none shrink-0">总览</span>
      <div className="flex items-center gap-2.5 mt-4 shrink-0">
        <FilterPill icon={Calendar} label="日期" value="最近30天" />
        <FilterPill icon={Package} label="平台" value="全部" />
        <FilterPill icon={ListFilter} label="词条" value="全部" />
        <div className="flex items-center gap-2 bg-[#F0F4FF] rounded-[10px] px-3.5 py-2.5 leading-none">
          <Crosshair size={16} className="text-[#004CE5] shrink-0" strokeWidth={2.2} />
          <span className="text-[15px] font-bold text-[#004CE5]">目标产品</span>
          <span className="w-px h-[14px] bg-[#C9D4EE]" />
          <span className="text-[15px] font-bold text-[#1F2329]">{product}</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-5 mt-5 min-h-[128px] items-stretch">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="h-full bg-white border border-[#E9EAEE] rounded-[14px] px-6 py-5 flex flex-col justify-between min-h-[128px] min-w-0 shadow-[0_2px_8px_rgba(31,35,41,0.04)]"
          >
            <span className="text-[18px] font-bold text-[#1F2329] leading-none flex items-center gap-1.5 whitespace-nowrap shrink-0">
              {m.label}
              <span className="w-[16px] h-[16px] rounded-full border-[1.5px] border-[#B4B9C2] text-[#B4B9C2] text-[10px] font-bold flex items-center justify-center leading-none">?</span>
            </span>
            <span className="text-[46px] font-black text-[#141619] leading-none tracking-tight shrink-0">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoubleColumn({ data, overview }) {
  return (
    <div className="flex-1 bg-[#101010] border border-white/10 rounded-[1.5rem] flex flex-col overflow-hidden relative shadow-[-10px_0_30px_rgba(0,0,0,0.2)] p-8 sm:p-10 group hover:border-white/20 transition-all duration-500">
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#004CE5]/5 blur-[80px] -right-24 -top-24 pointer-events-none" />

      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6 shrink-0">
        <div className="flex flex-col gap-2">
          <span className="inline-block text-[20px] font-bold tracking-widest text-[#004CE5] bg-[#004CE5]/10 px-4 py-2 rounded-full border border-[#004CE5]/20 max-w-fit font-sans leading-none -mt-4 mb-4">
            {data.industry}
          </span>
          <div className="w-[240px] h-[90px] flex items-center justify-start mt-1">
            <img
              src={`/cases/brand-logos/logo-${data.brandId}.png`}
              alt={`${data.brand} Logo`}
              className="max-w-full max-h-full object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start ml-6 mr-auto pl-8 border-l border-white/5 pt-6">
          <span className="text-[15px] text-zinc-500 font-semibold tracking-widest uppercase font-sans">优化平台</span>
          <div className="flex items-center gap-3 mt-1.5">
            {data.platforms.map((logo, idx) => (
              <img key={idx} src={logo} alt="platform" className="w-auto h-11 object-contain brightness-95" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 mb-6 min-h-0">
        <SectionTitle size={24}>优化数据指标</SectionTitle>
        <OverviewPanel product={data.product} metrics={overview} />
      </div>

      <div className="shrink-0 flex flex-col justify-end min-h-[192px]">
        <div className="mb-4">
          <SectionTitle size={24}>项目背景与总结</SectionTitle>
        </div>
        <div className="flex-1 flex flex-col justify-start">
        {Array.isArray(data.summary) ? (
          <div className="flex flex-col gap-2">
            {data.summary.map((line, i) => (
              <p key={i} className="text-zinc-300 leading-relaxed text-[22px] font-medium text-justify">
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-zinc-300 leading-relaxed text-[22px] font-medium h-auto text-justify">
            {data.summary}
          </p>
        )}
        </div>
      </div>
    </div>
  );
}

export default function Page_CaseStudy_Double_Combined_2() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumn data={BMW_MINI} overview={BMW_MINI_OVERVIEW} />
          <DoubleColumn data={MUSI} overview={MUSI_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined_2.hideHeader = true;
