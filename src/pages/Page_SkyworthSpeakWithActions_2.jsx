import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const IMAGE_SRC = '/images/speak_with_actions_detail_2.png';
const IMAGE_SRC_2 = '/images/speak_with_actions_detail_3.png';

function ImageSlot({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white border border-dashed border-zinc-300 rounded-3xl gap-3 select-none">
        <ImageIcon className="w-16 h-16 text-zinc-400 opacity-60" strokeWidth={1.5} />
        <span className="text-zinc-600 text-[22px] font-medium font-['MiSans']">投放效果数据截图</span>
        <span className="text-zinc-400 text-[16px] font-sans">（请放入图片路径：public/images/speak_with_actions_detail.png）</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white border border-zinc-200 rounded-3xl p-4 flex justify-center items-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain rounded-2xl"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function DetailPage({ src }) {
  return (
    <SlideLayout title="用行动说话" hideHeaderLeft={true}>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#004CE5]/5 blur-[150px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex flex-col justify-stretch">
        <div className="flex-1 min-h-0">
          <ImageSlot src={src} alt="用行动说话投放效果截图" />
        </div>
      </div>
    </SlideLayout>
  );
}

export default function Page_SkyworthSpeakWithActions_2() {
  return <DetailPage src={IMAGE_SRC} />;
}

Page_SkyworthSpeakWithActions_2.hideHeader = true;

export function Page_SkyworthSpeakWithActions_2b() {
  return <DetailPage src={IMAGE_SRC_2} />;
}

Page_SkyworthSpeakWithActions_2b.hideHeader = true;
