import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthSpeakWithActions() {
  return (
    <SlideLayout title="用行动说话" hideHeaderLeft={true}>
      <div className="w-full h-full relative select-none animate-fadeIn">
        {/* 下面先空着 */}
      </div>
    </SlideLayout>
  );
}

// Disable slide header
Page_SkyworthSpeakWithActions.hideHeader = true;
