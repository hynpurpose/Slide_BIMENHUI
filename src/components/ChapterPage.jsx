import React from 'react';

import { SlideContext } from './SlideContext';

function DefaultPlaceholder({ title }) {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white/60 mb-6">{title}</h2>
        <p className="text-lg text-zinc-600">内容待添加</p>
      </div>
    </div>
  );
}

export default function ChapterPage({ chapterIndex, sectionIndex, pageIndex, component: ContentComponent, title }) {
  return (
    <SlideContext.Provider value={{ chapterIndex, sectionIndex, pageIndex }}>
      <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="w-full h-full relative z-10 flex items-stretch overflow-hidden">
          {ContentComponent ? (
            <ContentComponent />
          ) : (
            <DefaultPlaceholder title={title} />
          )}
        </div>
      </div>
    </SlideContext.Provider>
  );
}
