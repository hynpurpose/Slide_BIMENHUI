import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthKeywordLogic() {
  return (
    <SlideLayout title="词条分类逻辑">
      {/* ── 顶部说明文字 ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <p
          className="text-zinc-400 font-normal font-['MiSans'] leading-relaxed"
          style={{ fontSize: '38px', lineHeight: '54px' }}
        >
          将原有的<strong className="text-white font-bold">无体系词条分类（左侧）</strong>，梳理规划为科学合理的<strong className="text-white font-bold">监测词与优化词体系（右侧）</strong>，精准对应评估与优化逻辑。
        </p>
      </div>

      {/* ── 逻辑图画布区域 (拉伸抵到最底部 bottom) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn"
        style={{ top: '135px', height: '660px' }}
      >
        {/* ==================== SVG 背景连线 (粗线条发光彩带) ==================== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            {/* 蓝色渐变 (右侧连线) */}
            <linearGradient id="blueRibbon" x1="500" y1="312.5" x2="1790" y2="312.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
            </linearGradient>
            {/* 白色渐变 (左侧连线) */}
            <linearGradient id="whiteRibbon" x1="50" y1="312.5" x2="500" y2="312.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
            </linearGradient>
            {/* 发光滤镜 */}
            <filter id="glow" filterUnits="userSpaceOnUse" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Column 1 (Left) -> Column 2 (Center) - 白色粗线条 */}
          <path d="M 370 57.5 C 440 57.5, 440 312.5, 500 312.5" fill="none" stroke="url(#whiteRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-70" />
          <path d="M 370 237.5 C 440 237.5, 440 312.5, 500 312.5" fill="none" stroke="url(#whiteRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-70" />
          <path d="M 370 417.5 C 440 417.5, 440 312.5, 500 312.5" fill="none" stroke="url(#whiteRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-70" />
          <path d="M 370 602.5 C 440 602.5, 440 312.5, 500 312.5" fill="none" stroke="url(#whiteRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-70" />

          {/* Column 2 (Center) -> Column 3 - 蓝色粗线条 */}
          <path d="M 740 312.5 C 810 312.5, 810 147.5, 870 147.5" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-80" />
          <path d="M 740 312.5 C 810 312.5, 810 512.5, 870 512.5" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-80" />

          {/* Column 3 -> Column 4 - 蓝色粗线条 */}
          <path d="M 1110 147.5 C 1180 147.5, 1180 57.5, 1240 57.5" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
          <path d="M 1110 147.5 C 1180 147.5, 1180 237.5, 1240 237.5" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
          <path d="M 1110 512.5 C 1180 512.5, 1180 417.5, 1240 417.5" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
          <path d="M 1110 512.5 C 1180 512.5, 1180 602.5, 1240 602.5" fill="none" stroke="url(#blueRibbon)" strokeWidth="12" strokeLinecap="round" filter="url(#glow)" className="opacity-85" />
        </svg>

        {/* ==================== Column 1 (Leftmost): 客户原有的无体系词条 ==================== */}
        {/* 品牌词 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '50px', top: '0px', width: '320px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">品牌词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">创维壁纸电视怎么样？</span>
        </div>

        {/* 竞品词 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '50px', top: '180px', width: '320px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">竞品词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">创维和TCL哪个好？</span>
        </div>

        {/* 舆情词 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '50px', top: '360px', width: '320px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">舆情词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">创维壁纸电视值吗？</span>
        </div>

        {/* 品类词 - 抵到最底部 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '50px', top: '545px', width: '320px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">品类词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">壁纸电视推荐</span>
        </div>

        {/* ==================== Column 2 (Center): 汇聚节点 ==================== */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center items-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10 border-blue-900/50 hover:border-blue-700 transition-colors"
          style={{ left: '500px', top: '235px', width: '240px', height: '155px' }}
        >
          <h3 className="text-[42px] font-black text-white font-['MiSans'] tracking-wider text-center leading-none">
            创维词条
          </h3>
        </div>

        {/* ==================== Column 3: 中间第一分支 ==================== */}
        {/* 监测词 */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '870px', top: '85px', width: '240px', height: '125px' }}
        >
          <h4 className="text-[36px] font-extrabold text-white font-['MiSans'] text-center leading-none">
            监测词
          </h4>
        </div>

        {/* 优化词 */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '870px', top: '450px', width: '240px', height: '125px' }}
        >
          <h4 className="text-[36px] font-extrabold text-white font-['MiSans'] text-center leading-none">
            优化词
          </h4>
        </div>

        {/* ==================== Column 4 (Rightmost): 梳理后的精细分类 (均包含典型例子) ==================== */}
        {/* 创维品牌词 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '1240px', top: '0px', width: '550px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">创维品牌词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">创维壁纸电视怎么样？</span>
        </div>

        {/* 五款产品词 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '1240px', top: '180px', width: '550px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">五款产品词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">创维A10H壁纸电视价格？</span>
        </div>

        {/* 壁纸电视大类词 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '1240px', top: '360px', width: '550px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">壁纸电视大类词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">壁纸电视哪个牌子好？</span>
        </div>

        {/* 产品专属词 - 抵到最底部 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
          style={{ left: '1240px', top: '545px', width: '550px', height: '115px' }}
        >
          <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">产品专属词</span>
          <span className="text-[22px] text-zinc-400 font-sans mt-1.5 leading-normal">超薄无缝贴墙电视</span>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordLogic.hideHeader = true;
