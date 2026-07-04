import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthBrandWordStrategy() {
  return (
    <SlideLayout title="品牌词：一守一攻">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '24px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-10"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          品牌词分两个战场：<strong className="text-white font-bold">强项守第一，弱项冲 TOP3</strong>。
        </p>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-10">
          {/* 守 · 好看的电视 */}
          <div className="h-full rounded-[28px] border border-blue-500/30 bg-gradient-to-br from-[#004CE5]/18 via-[#0D0D10] to-[#0B0C10] p-12 flex flex-col">
            <div className="flex items-center gap-5 shrink-0">
              <span className="text-[64px] font-black text-white font-['MiSans'] leading-none">守</span>
              <span className="text-[30px] text-zinc-400 font-['MiSans']">好看的电视</span>
            </div>

            <h3 className="text-[52px] font-black text-white font-['MiSans'] leading-tight mt-8 shrink-0">
              守住绝对第一
            </h3>

            <div className="flex flex-wrap gap-3 mt-8">
              {['艺术电视', '壁纸电视', '超薄电视', '画框电视'].map((w) => (
                <span key={w} className="px-6 py-2.5 rounded-xl bg-white/12 text-[26px] text-white font-bold font-['MiSans']">{w}</span>
              ))}
            </div>

            <p className="text-[26px] text-zinc-400 leading-[44px] font-['MiSans'] font-medium mt-auto">
              已是<strong className="text-white font-bold">绝对领先</strong>，必须守住，不给海信、TCL 以及华为这类跟风者留机会。
            </p>
          </div>

          {/* 攻 · 常规电视 */}
          <div className="h-full rounded-[28px] border border-zinc-800 bg-[#0D0D10]/60 p-12 flex flex-col">
            <div className="flex items-center gap-5 shrink-0">
              <span className="text-[64px] font-black text-white font-['MiSans'] leading-none">攻</span>
              <span className="text-[30px] text-zinc-400 font-['MiSans']">常规电视</span>
            </div>

            <h3 className="text-[52px] font-black text-white font-['MiSans'] leading-tight mt-8 shrink-0">
              冲进 TOP 3
            </h3>

            <div className="flex flex-wrap gap-3 mt-8">
              {['质量好', '画质好', '音响好'].map((w) => (
                <span key={w} className="px-6 py-2.5 rounded-xl bg-zinc-800 text-[26px] text-white font-bold font-['MiSans']">{w}</span>
              ))}
            </div>

            <p className="text-[26px] text-zinc-400 leading-[44px] font-['MiSans'] font-medium mt-auto">
              不追求第一，但<strong className="text-white font-bold">绝不能落后</strong>，持续加强，努力进入前三。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthBrandWordStrategy.hideHeader = true;
