import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const CASES = [
  {
    id: '01',
    keyword: '词条一',
    before: '未提及',
    after: '第一名',
    image: '',
  },
  {
    id: '02',
    keyword: '词条二',
    before: '未提及',
    after: '第一名',
    image: '',
  },
];

function ImageSlot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950/30 border border-dashed border-zinc-800/80 rounded-2xl gap-3 select-none">
        <ImageIcon className="w-10 h-10 text-zinc-600 opacity-50" strokeWidth={1.5} />
        <span className="text-zinc-600 text-[18px] font-medium font-['MiSans']">案例截图</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-1.5"
      onError={() => setFailed(true)}
    />
  );
}

function MentionBlock({ phase, text }) {
  const isBefore = phase === 'before';

  return (
    <div
      className={`flex-1 min-w-0 rounded-xl px-4 py-3 flex items-center gap-4 ${
        isBefore
          ? 'bg-zinc-900/40 border border-zinc-800/70'
          : 'bg-[#004CE5]/8 border border-[#004CE5]/25'
      }`}
    >
      <span className="text-[36px] leading-none font-bold shrink-0 font-['MiSans'] text-white">
        {isBefore ? '优化前：' : '优化后：'}
      </span>
      <p className="text-[36px] leading-none font-bold font-['MiSans'] text-white">
        {text}
      </p>
    </div>
  );
}

function CaseCard({ data }) {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-col bg-zinc-950/35 border border-zinc-800/70 rounded-[1.25rem] overflow-hidden">
      <div className="shrink-0 px-5 pt-4 pb-3 flex items-center gap-3">
        <span className="text-[14px] font-black tracking-[0.15em] text-[#004CE5] bg-[#004CE5]/10 border border-[#004CE5]/20 rounded-md px-2.5 py-1 font-['Montserrat']">
          {data.id}
        </span>
        <h3 className="text-[30px] font-bold text-white tracking-tight font-['MiSans'] truncate">
          {data.keyword}
        </h3>
      </div>

      <div className="shrink-0 px-5 pb-3 flex items-stretch gap-3">
        <MentionBlock phase="before" text={data.before} />
        <div className="shrink-0 flex items-center justify-center w-12">
          <ArrowRight
            className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
            strokeWidth={3}
          />
        </div>
        <MentionBlock phase="after" text={data.after} />
      </div>

      <div className="flex-1 min-h-0 px-5 pb-5">
        <ImageSlot src={data.image} alt={`${data.keyword}案例截图`} />
      </div>
    </div>
  );
}

export default function Page_SkyworthSpeakWithActions() {
  return (
    <SlideLayout title="用行动说话" subtitle="投放文章影响的两个案例" hideHeaderLeft={true}>
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex gap-6">
        {CASES.map((item) => (
          <CaseCard key={item.id} data={item} />
        ))}
      </div>
    </SlideLayout>
  );
}

Page_SkyworthSpeakWithActions.hideHeader = true;
