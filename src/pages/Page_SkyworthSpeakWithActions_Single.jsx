import React from 'react';
import { ArrowRight } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';
import { PRIMARY, SECONDARY, PlatformChip } from './Page_SkyworthSpeakWithActions';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@700;800;900&display=swap');`;

/* 从 "[金投网] 标题…" 里取来源名 */
const sourceOf = (a) => a.match(/^\[(.+?)\]/)?.[1] || a;

/**
 * 用行动说话 · 两词条合一页（截图为核心）。
 * 每半：大截图 + 窄信息列（未提及 → 第 N 名、引用来源是我们投放的文章）。
 */
function EntryCard({ data }) {
  const sources = [...new Set(data.articles.map(sourceOf))].join('、');
  return (
    <div className="flex-1 min-w-0 flex gap-4 rounded-[1.5rem] border-2 border-[#004CE5]/50 bg-gradient-to-br from-[#04123a]/80 to-zinc-950/40 p-5 shadow-[0_0_60px_rgba(0,76,229,0.15)]">
      {/* 截图主体 */}
      <div className="flex-1 min-w-0 rounded-xl bg-white overflow-hidden flex items-center justify-center">
        <img
          src={data.fullShot}
          alt={`${data.keyword} 对话与引用来源截图`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* 窄信息列 */}
      <div className="w-[280px] shrink-0 flex flex-col justify-center gap-5">
        <PlatformChip>{data.platform} · 7月6日</PlatformChip>
        <h3 className="text-[32px] font-black text-white font-['MiSans'] leading-snug tracking-tight">
          {data.keyword}
        </h3>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5 whitespace-nowrap">
            <span className="text-[24px] font-bold text-zinc-500 line-through decoration-2 font-['MiSans'] leading-none">
              未提及
            </span>
            <ArrowRight className="w-6 h-6 text-[#4ADE80] shrink-0" strokeWidth={3} />
          </div>
          <span className="text-[56px] font-black text-[#4ADE80] font-['MiSans'] leading-none whitespace-nowrap drop-shadow-[0_0_18px_rgba(74,222,128,0.35)]">
            {data.afterLabel}
          </span>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex flex-col gap-2.5">
          <span className="max-w-fit px-2.5 py-0.5 rounded bg-[#F97316] text-white text-[15px] font-bold font-['MiSans']">
            我们投放
          </span>
          <p className="text-[21px] font-bold text-white font-['MiSans'] leading-snug">
            引用来源第
            <span className="text-[27px] text-[#F97316] font-['Montserrat'] mx-1.5">
              {data.citePositions.join('、')}
            </span>
            位是我们投放的文章
          </p>
          <p className="text-[18px] font-medium text-zinc-400 font-['MiSans'] leading-snug">
            来源渠道：{sources}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page_SkyworthSpeakWithActions_Single() {
  return (
    <SlideLayout
      title="用行动说话"
      subtitle="两个核心词条的战果 · 6月28日 → 7月6日"
      hideHeaderLeft
    >
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex gap-6">
        <EntryCard data={PRIMARY} />
        <EntryCard data={SECONDARY} />
      </div>
    </SlideLayout>
  );
}
Page_SkyworthSpeakWithActions_Single.hideHeader = true;
