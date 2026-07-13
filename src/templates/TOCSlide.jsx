import React from 'react';
import { parsedConfig } from '../config/parseConfig';

export default function TOCSlide({ bgImage, title, menuText, brandLabel, serviceGuide, group }) {
  const all = parsedConfig.chapters;
  const filteredChapters = group ? all.filter((c) => c.group === group) : all.filter((c) => c.group === 'company');
  const chapters = filteredChapters.length ? filteredChapters : all;
  const debug = false;
  const dbg = debug ? 'bg-red-500/40' : '';

  const isLargeList = chapters.length > 5;
  const numFontSize = isLargeList ? '54px' : '70px';
  const textFontSize = isLargeList ? '52px' : '68px';
  const itemGap = isLargeList ? '32px' : '43px';
  const rowGap = isLargeList ? '10px' : '0px';

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-black">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Top-right brand logo */}
      <div className="absolute z-10" style={{ top: '39px', right: '40px' }}>
        <img 
          src="/logo.png" 
          alt="Brand Logo" 
          style={{ height: '28px', width: 'auto', display: 'block' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Left: title */}
      <div className={`absolute z-10 ${dbg}`} style={{ top: '233px', left: '130px' }}>
        <h1
          className="text-white font-black"
          style={{ fontSize: '78px', letterSpacing: '0.05em', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
        >
          {title}
        </h1>
      </div>

      {/* Left: chapter list */}
      <div className={`absolute z-10 flex flex-col ${dbg}`} style={{ bottom: '100px', left: '132px', gap: rowGap }}>
        {chapters.map((chapter, i) => (
          <div key={i} className="flex items-baseline" style={{ lineHeight: '1.3' }}>
            <span
              className="text-[#004CE5] shrink-0"
              style={{ 
                fontSize: numFontSize, 
                fontFamily: "'MiSans', sans-serif", 
                fontWeight: 200,
                display: 'inline-block',
                width: isLargeList ? '100px' : '130px'
              }}
            >
              {String(chapter.navNumber ?? (i + 1)).padStart(2, '0')}.
            </span>
            <span
              className="text-white"
              style={{ fontSize: textFontSize, letterSpacing: '0px', fontFamily: "'MiSans', sans-serif", fontWeight: 200 }}
            >
              {chapter.title.replace(/\n/g, '')}
            </span>
          </div>
        ))}
      </div>

      {/* Right: MENU */}
      <div className={`absolute z-10 flex flex-col items-end ${dbg}`} style={{ right: '114px', top: '76%', transform: 'translateY(-50%)' }}>
        <span
          className="text-white font-black leading-none select-none"
          style={{ fontSize: '261px', letterSpacing: '0', fontFamily: "'Roboto', sans-serif" }}
        >
          {menuText}
        </span>
        <span
          className="text-white font-light"
          style={{ fontSize: '32px', letterSpacing: '0', marginTop: '42px', marginRight: '10px' }}
        >
          {serviceGuide}
        </span>
      </div>
    </div>
  );
}
