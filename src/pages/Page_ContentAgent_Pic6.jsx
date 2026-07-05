import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ContentAgent_Pic6() {
  return (
    <SlideLayout fullBleed>
      <img
        src="/images/content_agent_pic_6.png"
        alt="Content Agent Detail 6"
        className="absolute top-[-72px] left-[-8px] w-[1920px] h-[1080px] object-cover pointer-events-none z-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </SlideLayout>
  );
}

Page_ContentAgent_Pic6.hideHeader = true;
