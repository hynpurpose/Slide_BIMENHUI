import React from 'react';
import SlideLayout from '../components/SlideLayout';

const C = {
  lineStrong: 'rgba(255,255,255,0.1)',
};

const EMP = 'font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8';

function PageSubtitle() {
  return (
    <div className="absolute top-[5px] left-0 w-full text-[22px] text-white font-medium font-['MiSans'] leading-relaxed">
      海量评论经 <span className={EMP}>AI 逐条分析</span>，提纯为<span className={EMP}>结构化口碑数据</span>。
    </div>
  );
}

const SHOTS = [
  { src: '/user-comment/overview.png', label: '数据总览' },
  { src: '/user-comment/compare.png', label: '商品横向对比' },
  { src: '/user-comment/sentiment.png', label: '好评 / 差评分布' },
  { src: '/user-comment/voices.png', label: '用户之声 VOC' },
  { src: '/user-comment/dimensions.png', label: '卖点维度' },
  { src: '/user-comment/fake.png', label: '刷评识别' },
];

export default function Page_UserCommentArchitecture() {
  return (
    <SlideLayout title="用户评论分析系统架构">
      <PageSubtitle />

      <div className="absolute left-0 top-[76px] w-full h-[720px] flex items-center justify-center font-['MiSans'] select-none">
        <div className="grid grid-cols-3 gap-6">
          {SHOTS.map((m) => (
            <div
              key={m.src}
              className="relative rounded-xl overflow-hidden bg-black"
              style={{ width: 576, height: 360, border: `1px solid ${C.lineStrong}` }}
            >
              <img src={m.src} alt={m.label} className="w-full h-full object-cover" draggable={false} />
              <div className="absolute bottom-0 inset-x-0 flex items-center gap-2 px-4 pt-6 pb-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture.hideHeader = true;
