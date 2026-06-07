import React from 'react';

export default function Page_FullImageIntro() {
  const imagePath = "/images/closed-meeting-intro-bg.png";

  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-950">
      <img
        src={imagePath}
        alt="闭门会介绍海报"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_FullImageIntro.hideHeader = true;
