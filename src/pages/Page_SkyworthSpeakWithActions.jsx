import React, { useState } from 'react';
import { ArrowDown, Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const CASES = [
  {
    id: '01',
    keyword: '超薄电视品牌排行榜',
    before: '未提及',
    after: '第一名',
    image: '/images/speak_with_actions_case1.png',
  },
  {
    id: '02',
    keyword: '口碑好的电视推荐',
    before: '未提及',
    after: '第一名',
    image: '/images/speak_with_actions_case2.png',
  },
];

function ImageSlot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    const filename = src ? src.split('/').pop() : 'speak_with_actions_case1.png';
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white border border-dashed border-zinc-300 rounded-2xl gap-2 p-4 select-none text-center">
        <ImageIcon className="w-10 h-10 text-zinc-400 opacity-60" strokeWidth={1.5} />
        <span className="text-zinc-500 text-[18px] font-medium font-['MiSans']">案例截图</span>
        <span className="text-zinc-400 text-[12px] font-sans">请放入图片：public/images/{filename}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain rounded-xl"
      onError={() => setFailed(true)}
    />
  );
}

function MentionBlock({ phase, text }) {
  const isBefore = phase === 'before';
  const label = isBefore ? '优化前排名：' : '我们优化后：';

  return (
    <div
      className={`w-full rounded-xl px-4 py-4 flex flex-row flex-nowrap justify-center items-center ${isBefore
        ? 'bg-zinc-900/40 border border-zinc-800/70'
        : 'bg-[#004CE5]/8 border border-[#004CE5]/25'
      }`}
    >
      <span className="text-[30px] leading-none font-bold font-['MiSans'] text-white whitespace-nowrap">
        {label}
      </span>
      <span className="text-[30px] leading-none font-black font-['MiSans'] text-white whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

function CaseCard({ data }) {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-row bg-zinc-950/35 border border-zinc-800/70 rounded-[1.25rem] overflow-hidden">
      {/* Left Column: Content (Fixed Narrow Width) */}
      <div className="w-[360px] shrink-0 flex flex-col justify-between p-6 pr-4">
        {/* Title */}
        <div className="shrink-0 flex flex-col gap-2 mb-4">
          <span className="text-[28px] font-black text-white tracking-wide max-w-fit">
            <span className="font-['MiSans']">词条</span>
            <span className="font-['Montserrat']">{data.id}</span>
          </span>
          <h3 className="text-[26px] font-bold text-white tracking-tight font-['MiSans'] leading-snug">
            {data.keyword}
          </h3>
        </div>

        {/* Before / After Stack */}
        <div className="flex-grow flex flex-col justify-center gap-3">
          <MentionBlock phase="before" text={data.before} />
          <div className="shrink-0 flex items-center justify-center h-8">
            <ArrowDown
              className="w-7 h-7 text-white/60 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              strokeWidth={3}
            />
          </div>
          <MentionBlock phase="after" text={data.after} />
        </div>
      </div>

      {/* Right Column: Tall Image Slot (Flex-Grow, White Background) */}
      <div className="flex-grow flex-1 h-full bg-white p-4 flex items-center justify-center overflow-hidden">
        <ImageSlot src={data.image} alt={`${data.keyword}案例截图`} />
      </div>
    </div>
  );
}

export default function Page_SkyworthSpeakWithActions() {
  return (
    <SlideLayout title="用行动说话" subtitle="优化成功的两个词条" hideHeaderLeft={true}>
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
