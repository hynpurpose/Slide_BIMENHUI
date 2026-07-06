import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

// ── 四个展示项目的数据（可直接修改） ──
const PROJECTS = [
  {
    brand: '方太',
    industry: '大家电行业',
    total: 102,
    cited: 32,
    citations: 1546,
    breakdown: [
      { model: '豆包', count: 1268 },
      { model: 'DeepSeek', count: 174 },
      { model: '通义', count: 104 },
    ],
  },
  {
    brand: 'OPPO手机',
    industry: '3C数码',
    total: 96,
    cited: 41,
    citations: 2130,
    breakdown: [
      { model: '豆包', count: 1642 },
      { model: 'DeepSeek', count: 312 },
      { model: '通义', count: 176 },
    ],
  },
  {
    brand: '慕思',
    industry: '睡眠科技行业',
    total: 85,
    cited: 29,
    citations: 1287,
    breakdown: [
      { model: '豆包', count: 986 },
      { model: 'DeepSeek', count: 201 },
      { model: '通义', count: 100 },
    ],
  },
  {
    brand: '古井贡酒',
    industry: '快消品行业',
    total: 78,
    cited: 24,
    citations: 964,
    breakdown: [
      { model: '豆包', count: 720 },
      { model: 'DeepSeek', count: 158 },
      { model: '通义', count: 86 },
    ],
  },
];

const BREAKDOWN_DOTS = ['bg-blue-500', 'bg-emerald-500', 'bg-purple-500'];

function ProjectRow({ project }) {
  const rate = ((project.cited / project.total) * 100).toFixed(1);
  return (
    <div className="flex-1 min-h-0 flex items-stretch bg-slate-50 border border-zinc-200/80 rounded-[1.5rem] px-7 shadow-sm overflow-hidden">

      {/* ── 左侧：项目名 ── */}
      <div className="w-[260px] shrink-0 flex flex-col justify-center gap-2.5 pr-6">
        <span className="inline-block max-w-fit text-[14px] font-bold tracking-wider text-[#004CE5] bg-[#004CE5]/8 border border-[#004CE5]/20 rounded-full px-3.5 py-1 leading-none">
          {project.industry}
        </span>
        <span className="text-[32px] font-black text-zinc-900 font-['MiSans'] leading-none flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.4)] shrink-0" />
          {project.brand}
        </span>
      </div>

      {/* ── 格子 1：全网总投放 ── */}
      <div className="flex-1 flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-[#004CE5]" />
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">TOTAL CAMPAIGN</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">{project.total}</span>
          <span className="text-lg font-black text-zinc-500">篇 全网总投放</span>
        </div>
        <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
          覆盖渠道：今日头条、搜狐、新浪、网易、百家号、腾讯快报等。
        </p>
      </div>

      {/* ── 格子 2：被引用率 ── */}
      <div className="flex-1 flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6 ml-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-emerald-500" />
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">CITATION RATE</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-5xl font-black text-emerald-600 font-['Montserrat',sans-serif]">{project.cited}</span>
          <span className="text-lg font-black text-zinc-400 font-['Montserrat']">/ {project.total} 篇</span>
          <span className="text-base font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-lg ml-2 font-['Montserrat']">
            {rate}% 被引率
          </span>
        </div>
        <p className="text-[0.98rem] font-bold text-zinc-400 leading-relaxed mt-1">
          投放稿件已顺利通过豆包及 DeepSeek 等大模型的检索。
        </p>
      </div>

      {/* ── 格子 3：累计引用频次 ── */}
      <div className="flex-1 flex flex-col gap-2 justify-center border-l border-zinc-200/80 pl-6 ml-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-4 rounded-full bg-zinc-800" />
          <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-widest font-['Montserrat']">EFFECTIVE CITATIONS</span>
        </div>
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-5xl font-black text-zinc-900 font-['Montserrat',sans-serif]">{project.citations}</span>
          <span className="text-lg font-black text-zinc-500">次 累计引用频次</span>
        </div>
        <div className="flex items-center gap-4 mt-1.5">
          {project.breakdown.map((b, i) => (
            <span key={i} className="text-base font-bold text-zinc-500 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${BREAKDOWN_DOTS[i]}`} />
              {b.model}：<strong className="text-zinc-800 font-['Montserrat']">{b.count}</strong>
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
