import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

// ── 四个展示项目的数据（可直接修改） ──
const PROJECTS = [
  {
    brand: '方太',
    industry: '大家电行业',
    total: 163,
    cited: 83,
    citations: 2491,
    breakdown: [
      { model: '豆包', count: 769 },
      { model: 'Kimi', count: 770 },
      { model: '文心', count: 642 },
      { model: '元宝', count: 23 },
      { model: 'DeepSeek', count: 287 },
    ],
  },
  {
    brand: 'OPPO手机',
    industry: '3C数码',
    total: 140,
    cited: 90,
    citations: 2125,
    breakdown: [
      { model: '豆包', count: 345 },
      { model: 'Kimi', count: 354 },
      { model: '文心', count: 750 },
      { model: '元宝', count: 248 },
      { model: 'DeepSeek', count: 157 },
      { model: '通义', count: 271 },
    ],
  },
  {
    brand: '慕思',
    industry: '睡眠科技行业',
    total: 140,
    cited: 46,
    citations: 1498,
    breakdown: [
      { model: '豆包', count: 1265 },
      { model: 'DeepSeek', count: 101 },
      { model: '通义', count: 132 },
    ],
  },
  {
    brand: '古井贡酒',
    industry: '快消品行业',
    total: 152,
    cited: 71,
    citations: 1836,
    breakdown: [
      { model: '豆包', count: 512 },
      { model: 'Kimi', count: 486 },
      { model: '文心', count: 390 },
      { model: '元宝', count: 96 },
      { model: 'DeepSeek', count: 214 },
      { model: '通义', count: 138 },
    ],
  },
];

// 各模型分项圆点配色（对照截图）
const MODEL_DOT_COLORS = {
  豆包: 'bg-blue-500',
  Kimi: 'bg-emerald-500',
  文心: 'bg-purple-500',
  元宝: 'bg-amber-500',
  DeepSeek: 'bg-teal-600',
  通义: 'bg-teal-400',
};

function ProjectRow({ project }) {
  const rate = ((project.cited / project.total) * 100).toFixed(1);
  return (
    <div className="flex-1 min-h-0 flex items-stretch bg-[#FBFCFE] border border-zinc-200/80 rounded-[1.5rem] px-7 shadow-sm overflow-hidden">

      {/* ── 左侧：项目名 ── */}
      <div className="w-[250px] shrink-0 flex flex-col justify-center gap-2.5 pr-6">
        <span className="inline-block max-w-fit text-[14px] font-bold tracking-wider text-[#004CE5] bg-[#004CE5]/8 border border-[#004CE5]/20 rounded-full px-3.5 py-1 leading-none">
          {project.industry}
        </span>
        <span className="text-[40px] font-black text-zinc-900 font-['MiSans'] leading-none flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.4)] shrink-0" />
          {project.brand}
        </span>
      </div>

      {/* ── 格子 1：全网总投放量 ── */}
      <div className="flex-1 flex flex-col gap-1.5 justify-center border-l border-zinc-200/80 pl-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-[#004CE5]" />
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">TOTAL CAMPAIGN</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif] tracking-tight">{project.total.toLocaleString()}</span>
          <span className="text-[22px] font-black text-zinc-900">篇</span>
        </div>
        <span className="text-[17px] font-bold text-zinc-800 leading-none">全网总投放量</span>
        <p className="text-[15px] font-bold text-zinc-400 leading-snug mt-1">
          覆盖渠道：今日头条、搜狐、新浪、网易、百家号、什么值得买等。
        </p>
      </div>

      {/* ── 格子 2：被引率 ── */}
      <div className="flex-1 flex flex-col gap-1.5 justify-center border-l border-zinc-200/80 pl-6 ml-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-emerald-500" />
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-5xl font-black text-emerald-600 font-['Montserrat',sans-serif] tracking-tight">{rate}%</span>
          <span className="text-[24px] font-black text-emerald-600">被引率</span>
        </div>
        <span className="text-[16px] font-bold text-emerald-600 leading-none font-['Montserrat']">
          （ {project.cited} / {project.total} 篇投放已被引用 ）
        </span>
        <p className="text-[15px] font-bold text-zinc-400 leading-snug mt-1">
          投放到网易、什么值得买、新浪等渠道已顺利通过大模型的检索。
        </p>
      </div>

      {/* ── 格子 3：累计引用频次 ── */}
      <div className="flex-1 flex flex-col gap-1.5 justify-center border-l border-zinc-200/80 pl-6 ml-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-zinc-800" />
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif] tracking-tight">{project.citations.toLocaleString()}</span>
          <span className="text-[22px] font-black text-zinc-900">次</span>
        </div>
        <span className="text-[17px] font-bold text-zinc-800 leading-none">累计引用频次</span>
        <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1 max-w-fit">
          {project.breakdown.map((b, i) => (
            <span key={i} className="text-[15px] font-bold text-zinc-500 flex items-center gap-1.5 whitespace-nowrap">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${MODEL_DOT_COLORS[b.model] || 'bg-zinc-400'}`} />
              {b.model}：<strong className="text-zinc-800 font-['Montserrat']">{b.count.toLocaleString()}</strong>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function Page_ArticleCitationRate() {
  return (
    <SlideLayout title="文章引用率">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="w-full h-full flex flex-col gap-5 animate-fadeIn relative z-10 select-none">

        {/* 右上角 Callout */}
        <div className="absolute top-[-56px] right-0 z-30 flex items-center gap-2.5 text-white text-[26px] xl:text-[28px] font-medium">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shrink-0" />
          <span className="tracking-wide">
            以过往项目实测数据，验证内容的<span className="text-[32px] xl:text-[34px] font-black text-white">真实 AI 引用效果</span>。
          </span>
        </div>

        {PROJECTS.map((p, idx) => (
          <ProjectRow key={idx} project={p} />
        ))}
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ArticleCitationRate.hideHeader = true;
