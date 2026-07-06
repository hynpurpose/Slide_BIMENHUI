import React from 'react';
import SlideLayout from '../components/SlideLayout';

const CHAOTIC_WORDS = [
  { type: '品牌词', text: '创维壁纸电视怎么样？', x: 16, y: 24, rot: -2 },
  { type: '竞品词', text: '创维和TCL哪个好？', x: 210, y: 12, rot: 3 },
  { type: '舆情词', text: '创维壁纸电视值吗？', x: 36, y: 108, rot: 1 },
  { type: '产品词', text: 'A10H 多少钱？', x: 228, y: 88, rot: -4 },
  { type: '品牌词', text: '创维电视口碑', x: 96, y: 188, rot: -3 },
  { type: '竞品词', text: '海信和创维对比', x: 12, y: 268, rot: 2 },
  { type: '舆情词', text: '创维售后怎么样', x: 220, y: 208, rot: 5 },
  { type: '产品词', text: '壁纸电视推荐', x: 118, y: 328, rot: -1 },
  { type: '品牌词', text: '创维值得买吗', x: 248, y: 308, rot: 4 },
  { type: '竞品词', text: '三星壁纸电视', x: 52, y: 408, rot: -5 },
  { type: '舆情词', text: '创维质量问题', x: 228, y: 388, rot: 2 },
  { type: '产品词', text: '超薄贴墙电视', x: 148, y: 468, rot: -2 },
  { type: '品牌词', text: '创维怎么样', x: 24, y: 548, rot: 3 },
  { type: '竞品词', text: 'TCL壁纸电视', x: 176, y: 528, rot: -3 },
  { type: '产品词', text: '无缝贴墙效果', x: 96, y: 628, rot: 1 },
  { type: '舆情词', text: '创维安装服务', x: 248, y: 608, rot: -4 },
];

function ChaoticWordChip({ type, text, x, y, rot }) {
  return (
    <div
      className="absolute flex flex-col gap-1 max-w-[220px]"
      style={{ left: x, top: y, transform: `rotate(${rot}deg)` }}
    >
      <span className="text-[20px] font-bold text-zinc-500 font-['MiSans'] leading-none">{type}</span>
      <span className="text-[24px] text-zinc-200 font-['MiSans'] leading-snug">{text}</span>
    </div>
  );
}

function TerminalCard({ title, example, sub, style }) {
  return (
    <div
      className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
      style={style}
    >
      <div className="flex items-center gap-3">
        <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">{title}</span>
        {sub && (
          <span className="text-[16px] font-semibold text-blue-400/80 font-['MiSans'] leading-none">{sub}</span>
        )}
      </div>
      <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">{example}</span>
    </div>
  );
}

export default function Page_SkyworthKeywordLogic() {
  return (
    <SlideLayout title="词条分类逻辑">
      <div
        className="absolute left-0 top-0 w-[1840px] h-full select-none animate-fadeIn"
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <linearGradient id="blueRibbon" x1="500" y1="397" x2="1790" y2="397" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="whiteRibbon" x1="0" y1="397" x2="500" y2="397" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow" filterUnits="userSpaceOnUse" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path d="M 400 397 C 450 397, 450 397, 500 397" fill="none" stroke="url(#whiteRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-70" />
          <path d="M 740 397 C 810 397, 810 147, 870 147" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-80" />
          <path d="M 740 397 C 810 397, 810 647, 870 647" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-80" />
          <path d="M 1110 147 C 1180 147, 1180 57, 1240 57" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
          <path d="M 1110 147 C 1180 147, 1180 237, 1240 237" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
          <path d="M 1110 647 C 1180 647, 1180 557, 1240 557" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
          <path d="M 1110 647 C 1180 647, 1180 737, 1240 737" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
        </svg>

        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl shadow-lg z-10 overflow-hidden"
          style={{ left: '0px', top: '0px', width: '400px', height: '100%' }}
        >
          <div className="px-6 py-4 border-b border-zinc-800/80">
            <span className="text-[30px] font-bold text-zinc-500 font-['MiSans']">无体系词条</span>
          </div>
          <div className="relative w-full h-[calc(100%-68px)]">
            {CHAOTIC_WORDS.map((w, i) => (
              <ChaoticWordChip key={i} {...w} />
            ))}
          </div>
        </div>

        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center items-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10 border-blue-900/50 hover:border-blue-700 transition-colors"
          style={{ left: '500px', top: '320px', width: '240px', height: '155px' }}
        >
          <h3 className="text-[42px] font-black text-white font-['MiSans'] tracking-wider text-center leading-none">
            创维词条
          </h3>
        </div>

        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '870px', top: '85px', width: '240px', height: '125px' }}
        >
          <h4 className="text-[36px] font-extrabold text-white font-['MiSans'] text-center leading-none">优化词</h4>
        </div>

        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '870px', top: '585px', width: '240px', height: '125px' }}
        >
          <h4 className="text-[36px] font-extrabold text-white font-['MiSans'] text-center leading-none">监测词</h4>
        </div>

        <TerminalCard
          title="品类词"
          sub="优化词"
          example="壁纸电视哪个牌子好？"
          style={{ left: '1240px', top: '0px', width: '550px', height: '115px' }}
        />
        <TerminalCard
          title="产品专属词"
          sub="优化词"
          example="超薄无缝贴墙电视"
          style={{ left: '1240px', top: '180px', width: '550px', height: '115px' }}
        />
        <TerminalCard
          title="品类词"
          sub="监测词"
          example="壁纸电视推荐"
          style={{ left: '1240px', top: '500px', width: '550px', height: '115px' }}
        />
        <TerminalCard
          title="产品专属词"
          sub="监测词"
          example="创维A10H壁纸电视价格？"
          style={{ left: '1240px', top: '680px', width: '550px', height: '115px' }}
        />
      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordLogic.hideHeader = true;
