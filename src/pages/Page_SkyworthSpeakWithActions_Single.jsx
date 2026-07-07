import React from 'react';
import SlideLayout from '../components/SlideLayout';
import {
  PRIMARY,
  SECONDARY,
  PlatformChip,
  DateChip,
  RankList,
  BeforeAfterStrip,
} from './Page_SkyworthSpeakWithActions';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@700;800;900&display=swap');`;

/**
 * 用行动说话 · 单词条整页版（一页一个词条，两页布局完全对称）。
 * 左半：战果数据（前后对比 + AI 榜单还原）；
 * 右半：引用来源大图（橙标「我们投放」= 引用了我们的文章）。
 */
function SingleEntryPage({ data, indexLabel }) {
  return (
    <SlideLayout
      title="用行动说话"
      subtitle={`核心词条战果 ${indexLabel} · 6月28日 → 7月6日`}
      hideHeaderLeft
    >
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex gap-6">
        {/* ── 左半：战果数据 ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-5 rounded-[1.5rem] border-2 border-[#004CE5]/50 bg-gradient-to-br from-[#04123a]/80 to-zinc-950/40 p-7 shadow-[0_0_60px_rgba(0,76,229,0.15)]">
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#004CE5] text-white text-[16px] font-black tracking-[0.12em] font-['MiSans']">
              {indexLabel}
            </span>
            <PlatformChip>{data.platform}</PlatformChip>
            <DateChip>6月28日 → 7月6日</DateChip>
          </div>
          <h3 className="shrink-0 text-[48px] font-black text-white font-['MiSans'] leading-tight tracking-tight">
            {data.keyword}
          </h3>
          <BeforeAfterStrip data={data} hero />
          <RankList data={data} />
          <p className="shrink-0 text-[21px] font-bold text-[#8FBFFF] font-['MiSans'] leading-snug">
            ✦ {data.highlight}
          </p>
        </div>

        {/* ── 右半：引用来源证据大图 ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 rounded-[1.5rem] border-2 border-[#004CE5]/50 bg-gradient-to-br from-[#04123a]/80 to-zinc-950/40 p-7 shadow-[0_0_60px_rgba(0,76,229,0.15)]">
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#F97316] text-white text-[16px] font-black tracking-[0.12em] font-['MiSans']">
              引用证据
            </span>
            <span className="text-[19px] font-bold text-[#FDBA74] font-['MiSans'] truncate">
              {data.platform}引用来源实拍 · 橙标「我们投放」= 引用了我们的文章
            </span>
          </div>
          <div className="flex-1 min-h-0 rounded-2xl bg-white overflow-hidden flex items-center justify-center">
            <img
              src={data.citeShot}
              alt={`${data.keyword} 引用来源截图`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="shrink-0 flex flex-col gap-1.5">
            {data.articles.map((a, i) => (
              <span key={i} className="text-[17px] text-zinc-400 font-['MiSans'] truncate flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                被引用的投放文章：{a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

export function Page_SkyworthSpeakWithActions_Single1() {
  return <SingleEntryPage data={PRIMARY} indexLabel="词条 01" />;
}
Page_SkyworthSpeakWithActions_Single1.hideHeader = true;

export function Page_SkyworthSpeakWithActions_Single2() {
  return <SingleEntryPage data={SECONDARY} indexLabel="词条 02" />;
}
Page_SkyworthSpeakWithActions_Single2.hideHeader = true;

export default Page_SkyworthSpeakWithActions_Single1;
