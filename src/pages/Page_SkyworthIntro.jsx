import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthIntro() {
  return (
    <SlideLayout title="没做品牌调研的“坑”">
      <div className="w-full h-full relative select-none animate-fadeIn">
        {/* H2 Subtitle (Content Top aligned) */}
        <h2
          className="absolute top-0 left-0 text-white font-normal font-['MiSans']"
          style={{ fontSize: '48px', lineHeight: '58px' }}
        >
          不做品牌调研和产品定位，提及率做到60%很难再上升！
        </h2>

        {/* Left Column: Image inside a mock Apple Browser Window (White theme - fitted exactly to image bounds) */}
        <div
          className="absolute border border-zinc-700 bg-white flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          style={{ left: '0px', top: '74px', bottom: '0px', width: '1210px', height: '721px' }}
        >
          {/* macOS window control bar (Light theme) */}
          <div className="w-full h-10 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 shrink-0 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            {/* Address bar */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-6 bg-white rounded border border-zinc-200 flex items-center justify-center">
              <span className="text-[11px] text-zinc-400 font-mono select-none">geoindexfuture.com</span>
            </div>
          </div>
          {/* Browser content area containing the full chart (White background) */}
          <div className="flex-grow w-full bg-white flex items-center justify-center overflow-hidden relative">
            <img
              src="/images/stagnant_marketing_chart.png"
              alt="提及率瓶颈趋势"
              className="w-full h-full object-contain"
            />
            {/* Amber Focus Box */}
            <div 
              className="absolute border-[3px] border-amber-500 rounded-lg z-30 pointer-events-none shadow-[0_0_15px_rgba(245,158,11,0.4)]"
              style={{
                left: '56px',
                top: '222px',
                width: '552px',
                height: '445px'
              }}
            />
          </div>
        </div>

        {/* Middle vertical divider (Moved left to 1240px) */}
        <div
          className="absolute border-r border-zinc-800/80"
          style={{ left: '1240px', top: '160px', bottom: '20px' }}
        />

        {/* Right Column: Text block (Wider and larger font sizes) */}
        <div
          className="absolute flex flex-col justify-center gap-8"
          style={{ left: '1270px', width: '570px', top: '160px', bottom: '20px' }}
        >
          <div className="flex items-baseline justify-between border-b border-zinc-800 pb-3">
            <h3
              className="text-white font-extrabold tracking-wide"
              style={{ fontSize: '44px', lineHeight: '54px', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
            >
              亲自踩过的坑
            </h3>
          </div>

          <p
            className="text-zinc-300 font-normal leading-relaxed font-['MiSans']"
            style={{ fontSize: '32px', lineHeight: '52px' }}
          >
            提及率做到 <span className="text-white font-bold">60% 左右</span> 之后，就怎么都上不去了。后面继续加内容、加资源，数据不但没有明显提升，甚至一段时间后还下滑了。
          </p>
        </div>

        {/* SVG Connector Line from Amber Box to Right H3 */}
        <svg className="absolute inset-0 z-20 pointer-events-none" style={{ width: '1840px', height: '795px' }}>
          {/* Amber Connector Line */}
          <path
            d="M 608 519 C 800 519, 1000 365, 1255 365"
            stroke="#F59E0B"
            strokeWidth="3"
            fill="none"
            strokeDasharray="6 4"
            className="opacity-90"
          />
          {/* Small Dot at start (on the amber box border) */}
          <circle cx="608" cy="519" r="5" fill="#F59E0B" />
          {/* Small Dot at end (pointing directly to H3) */}
          <circle cx="1255" cy="365" r="5" fill="#F59E0B" />
        </svg>

        {/* 曲线各月份提及率数值标注 (叠加在静态图表之上，坐标按图内数据点换算) */}
        {[
          { x: 168, y: 660, v: '22%' },
          { x: 244, y: 588, v: '63%' },
          { x: 313, y: 585, v: '66%' },
          { x: 383, y: 605, v: '54%' },
          { x: 453, y: 609, v: '51%' },
          { x: 522, y: 632, v: '39%' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute z-40 pointer-events-none"
            style={{ left: `${p.x}px`, top: `${p.y}px` }}
          >
            {/* 数据点圆点 */}
            <div
              className="absolute w-[11px] h-[11px] rounded-full bg-[#4285F4] border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
              style={{ left: '-5.5px', top: '-5.5px' }}
            />
            {/* 数值标签 */}
            <div
              className="absolute -translate-x-1/2 whitespace-nowrap px-2 py-[2px] rounded-md bg-white border border-[#4285F4]/50 shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
              style={{ top: '-24px' }}
            >
              <span className="text-[14px] font-bold text-[#1a73e8] font-['Montserrat']">{p.v}</span>
            </div>
          </div>
        ))}

      </div>
    </SlideLayout>
  );
}
