import React from 'react';
import SlideLayout from '../components/SlideLayout';
import {
  PRIMARY,
  SECONDARY,
  PlatformChip,
  DateChip,
  BeforeAfterStrip,
} from './Page_SkyworthSpeakWithActions';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@700;800;900&display=swap');`;

/**
 * 用行动说话 · 单词条整页版（一页一个词条，两页布局完全对称）。
 * 左半：战果 + 引用证据（重点：AI 引用来源里就有我们投放的文章）；
 * 右半：对话 + 排名 + 引用来源完整截图。
 */
function SingleEntryPage({ data, indexLabel }) {
  const posText = data.citePositions.join('、');
  return (
    <SlideLayout
      title="用行动说话"
      subtitle={`核心词条战果 ${indexLabel} · 6月28日 → 7月6日`}
      hideHeaderLeft
    >
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex gap-6">
        {/* ── 左半：战果 + 引用证据 ── */}
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
          <p className="shrink-0 text-[20px] font-bold text-[#8FBFFF] font-['MiSans'] leading-snug">
            ✦ {data.highlight}
          </p>

          {/* 引用证据块：排名是结果，被引用才是原因 */}
          <div className="flex-1 min-h-0 flex flex-col rounded-2xl border border-[#F97316]/45 bg-[#F97316]/[0.07] overflow-hidden">
            <div className="shrink-0 px-5 h-[48px] flex items-center gap-2.5 bg-[#F97316]/15 border-b border-[#F97316]/30">
              <span className="px-2.5 py-0.5 rounded bg-[#F97316] text-white text-[15px] font-bold font-['MiSans'] shrink-0">
                为什么能上榜
              </span>
              <span className="text-[18px] text-[#FDBA74] font-bold font-['MiSans'] truncate">
                {data.platform}的引用来源里，就有我们投放的文章
              </span>
            </div>
            <div className="flex-1 min-h-0 flex flex-col justify-center gap-3.5 px-5 py-4">
              <p className="text-[26px] font-black text-white font-['MiSans'] leading-snug">
                引用来源第
                <span className="text-[36px] text-[#F97316] font-['Montserrat'] mx-2">{posText}</span>
                位，均为我们投放的文章
              </p>
              {data.articles.map((a, i) => (
                <div key={i} className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 px-2 py-0.5 rounded bg-[#F97316] text-white text-[14px] font-bold font-['MiSans']">
                    我们投放
                  </span>
                  <span className="min-w-0 truncate text-[19px] font-semibold text-zinc-200 font-['MiSans']">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 右半：对话 + 排名 + 引用来源完整截图 ── */}
        <div className="w-[580px] shrink-0 flex flex-col gap-4 rounded-[1.5rem] border-2 border-[#004CE5]/50 bg-gradient-to-br from-[#04123a]/80 to-zinc-950/40 p-6 shadow-[0_0_60px_rgba(0,76,229,0.15)]">
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#F97316] text-white text-[15px] font-black tracking-[0.12em] font-['MiSans'] whitespace-nowrap shrink-0">
              实拍证据
            </span>
            <span className="text-[18px] font-bold text-[#FDBA74] font-['MiSans'] truncate">
              {data.platform}实拍 · 橙框 = 我们的品牌与文章
            </span>
          </div>
          <div className="flex-1 min-h-0 rounded-2xl bg-white overflow-hidden flex items-center justify-center">
            <img
              src={data.fullShot}
              alt={`${data.keyword} 对话与引用来源截图`}
              className="max-w-full max-h-full object-contain"
            />
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
