import React from 'react';
import SlideLayout from '../components/SlideLayout';

const C = {
  colorTeal: '#2DD4BF', // Teal for Product words
  colorBlue: '#3B82F6', // Royal Blue for Category words
  colorSky: '#38BDF8', // Sky Blue for Monitoring words
};

export default function Page_SkyworthKeywordStrategy() {
  return (
    <SlideLayout title="核心优化策略">
      
      {/* ── 核心内容区域 (1840px 宽) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn font-['MiSans']"
        style={{ top: '86px', height: '700px' }}
      >
        
        {/* ==================== 左侧：三层关系 “护城河” 逻辑 (Pyramid & Moat Dome) ==================== */}
        <div 
          className="absolute left-0 top-[20px] w-[700px] h-[600px] overflow-visible"
        >
          {/* SVG 金字塔 与 外侧防护罩 */}
          <svg 
            width="700" 
            height="580" 
            className="absolute inset-0 overflow-visible pointer-events-none z-0"
          >
            <defs>
              {/* 蓝天色半透明渐变 - 监测词（外围防护罩） */}
              <linearGradient id="domeGrad" x1="350" y1="60" x2="350" y2="560" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.02" />
              </linearGradient>
              
              {/* 青色渐变 - 产品专属词（内部中层） */}
              <linearGradient id="tealGrad" x1="350" y1="160" x2="350" y2="360" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.5" />
              </linearGradient>
              
              {/* 宝蓝色渐变 - 品类词（内部底层） */}
              <linearGradient id="blueGrad" x1="350" y1="370" x2="350" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.55" />
              </linearGradient>

              {/* 霓虹发光滤镜 */}
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. 外层包围圈/防护罩 : 监测词 */}
            <path 
              d="M 20 560 A 330 500 0 0 1 680 560 Z" 
              fill="url(#domeGrad)" 
              stroke="none"
            />
            <path 
              d="M 20 560 A 330 500 0 0 1 680 560" 
              fill="none" 
              stroke={C.colorSky} 
              strokeWidth="3" 
              strokeDasharray="6 6"
              filter="url(#neonGlow)" 
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />

            {/* 2. 内部金字塔上层（产品专属词）: 三角形 */}
            <path 
              d="M 350 160 L 493 360 L 207 360 Z" 
              fill="url(#tealGrad)" 
              stroke={C.colorTeal} 
              strokeWidth="2.5" 
            />

            {/* 3. 内部金字塔底层（品类词）: 梯形 */}
            <path 
              d="M 207 370 L 493 370 L 630 550 L 70 550 Z" 
              fill="url(#blueGrad)" 
              stroke={C.colorBlue} 
              strokeWidth="2.5" 
            />
          </svg>

          {/* 放置在图形上的纯净大文字标签 */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '100px', width: '700px' }}>
            <span className="text-[40px] font-black text-sky-300 leading-none tracking-wide filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">监测词</span>
          </div>

          <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '275px', width: '700px' }}>
            <span className="text-[38px] font-black text-white leading-none tracking-wide">产品专属词</span>
          </div>

          <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '445px', width: '700px' }}>
            <span className="text-[38px] font-black text-white leading-none tracking-wide">品类词</span>
          </div>
        </div>

        {/* ==================== 中间分割线 ==================== */}
        <div 
          className="absolute"
          style={{ 
            left: '715px', 
            top: '30px', 
            width: '1px', 
            height: '540px', 
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, rgba(255,255,255,0))' 
          }}
        />

        {/* ==================== 右侧：词条细分思维导图 (Mindmap Tree) ==================== */}
        <div 
          className="absolute rounded-3xl p-6 select-text" 
          style={{ 
            left: '730px', 
            top: '20px', 
            width: '1110px', 
            height: '600px'
          }}
        >
          {/* SVG 连线画布 (使用系统统一的高级渐变连线) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <defs>
              <linearGradient id="optGrad" x1="150" y1="270" x2="200" y2="165" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="monGrad" x1="150" y1="270" x2="200" y2="405" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Root (创维词条) -> Level 1 (优化词/监测词) */}
            <path d="M 150 270 C 175 270, 175 165, 200 165" fill="none" stroke="url(#optGrad)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 150 270 C 175 270, 175 405, 200 405" fill="none" stroke="url(#monGrad)" strokeWidth="2.5" strokeLinecap="round" />

            {/* Level 1 -> Level 2 (优化词分支) */}
            <path d="M 310 165 C 335 165, 335 92, 360 92" fill="none" stroke={C.colorTeal} strokeWidth="2" strokeLinecap="round" />
            <path d="M 310 165 C 335 165, 335 242, 360 242" fill="none" stroke={C.colorTeal} strokeWidth="2" strokeLinecap="round" />

            {/* Level 1 -> Level 2 (监测词分支) */}
            <path d="M 310 405 C 335 405, 335 372, 360 372" fill="none" stroke={C.colorSky} strokeWidth="2" strokeLinecap="round" />
            <path d="M 310 405 C 335 405, 335 462, 360 462" fill="none" stroke={C.colorSky} strokeWidth="2" strokeLinecap="round" />

            {/* Level 2 -> Level 3 (品类词-优化分支) */}
            <path d="M 480 92 C 525 92, 525 60, 570 60" fill="none" stroke={C.colorBlue} strokeWidth="2" strokeLinecap="round" />
            <path d="M 480 92 C 525 92, 525 120, 570 120" fill="none" stroke={C.colorBlue} strokeWidth="2" strokeLinecap="round" />

            {/* Level 2 -> Level 3 (产品专属词-优化分支) */}
            <path d="M 520 242 C 545 242, 545 210, 570 210" fill="none" stroke={C.colorTeal} strokeWidth="2" strokeLinecap="round" />
            <path d="M 520 242 C 545 242, 545 270, 570 270" fill="none" stroke={C.colorTeal} strokeWidth="2" strokeLinecap="round" />

            {/* Level 3 -> Level 4 Examples (高相关/低相关/A系列/Q系列) */}
            <path d="M 690 60 L 740 60" fill="none" stroke={C.colorBlue} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 690 120 L 740 120" fill="none" stroke={C.colorBlue} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 690 210 L 740 210" fill="none" stroke={C.colorTeal} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 690 270 L 740 270" fill="none" stroke={C.colorTeal} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 2 -> Level 3 Examples (监测词分支) */}
            <path d="M 480 372 L 530 372" fill="none" stroke={C.colorSky} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 520 462 L 570 462" fill="none" stroke={C.colorSky} strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Root Card: 创维词条 (纯白色边框与文字，增大字号) */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 shadow-lg text-center font-bold"
            style={{ 
              left: '10px', 
              top: '235px', 
              width: '140px', 
              height: '70px',
              border: '2.5px solid #FFFFFF',
              background: 'transparent'
            }}
          >
            <span className="text-[30px] text-white">创维词条</span>
          </div>

          {/* ── Level 1: 优化词 / 监测词 ── */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 shadow-md text-white font-bold border"
            style={{ 
              left: '200px', 
              top: '137px', 
              width: '110px', 
              height: '56px',
              borderColor: 'rgba(255,255,255,0.45)',
              background: 'transparent'
            }}
          >
            <span className="text-[26px]">优化词</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-xl z-10 shadow-md text-white font-bold border"
            style={{ 
              left: '200px', 
              top: '377px', 
              width: '110px', 
              height: '56px',
              borderColor: C.colorSky,
              background: 'transparent'
            }}
          >
            <span className="text-[26px]">监测词</span>
          </div>

          {/* ── Level 2: 中层分类 (加宽产品专属词卡片，防止“词”字单列一行) ── */}
          {/* 优化词 -> 品类词 */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-white shadow-md"
            style={{ 
              left: '360px', 
              top: '68px', 
              width: '120px', 
              height: '48px',
              borderColor: C.colorBlue,
              background: 'transparent'
            }}
          >
            <span className="text-[24px] font-bold">品类词</span>
          </div>

          {/* 优化词 -> 产品专属词 (加宽为160px，解决分行截断) */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-white shadow-md"
            style={{ 
              left: '360px', 
              top: '218px', 
              width: '160px', 
              height: '48px',
              borderColor: C.colorTeal,
              background: 'transparent'
            }}
          >
            <span className="text-[24px] font-bold">产品专属词</span>
          </div>

          {/* 监测词 -> 品类词 */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-zinc-200 shadow-md"
            style={{ 
              left: '360px', 
              top: '348px', 
              width: '120px', 
              height: '48px',
              borderColor: C.colorSky,
              background: 'transparent'
            }}
          >
            <span className="text-[24px] font-bold">品类词</span>
          </div>

          {/* 监测词 -> 产品专属词 (加宽为160px，解决分行截断) */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-zinc-200 shadow-md"
            style={{ 
              left: '360px', 
              top: '438px', 
              width: '160px', 
              height: '48px',
              borderColor: C.colorSky,
              background: 'transparent'
            }}
          >
            <span className="text-[24px] font-bold">产品专属词</span>
          </div>

          {/* ── Level 3: 优化词下的精细分类 ── */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-zinc-300"
            style={{ 
              left: '570px', 
              top: '38px', 
              width: '120px', 
              height: '44px',
              borderColor: C.colorBlue,
              background: 'transparent'
            }}
          >
            <span className="text-[22px] font-semibold">高相关词</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-zinc-300"
            style={{ 
              left: '570px', 
              top: '98px', 
              width: '120px', 
              height: '44px',
              borderColor: C.colorBlue,
              background: 'transparent'
            }}
          >
            <span className="text-[22px] font-semibold">低相关词</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-zinc-300"
            style={{ 
              left: '570px', 
              top: '188px', 
              width: '120px', 
              height: '44px',
              borderColor: C.colorTeal,
              background: 'transparent'
            }}
          >
            <span className="text-[22px] font-semibold">A系列</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-lg z-10 border text-zinc-300"
            style={{ 
              left: '570px', 
              top: '248px', 
              width: '120px', 
              height: '44px',
              borderColor: C.colorTeal,
              background: 'transparent'
            }}
          >
            <span className="text-[22px] font-semibold">Q系列</span>
          </div>

          {/* ── Level 4 / Final: 示例词条 (移除框框，字号再次放大) ── */}
          {/* 优化词 -> 品类词 -> 高相关词 示例 */}
          <div
            className="absolute flex items-center px-2 z-10 text-zinc-200 font-medium"
            style={{ 
              left: '740px', 
              top: '38px', 
              width: '350px', 
              height: '44px'
            }}
          >
            <span className="text-[24px] truncate">壁纸电视品牌推荐</span>
          </div>

          {/* 优化词 -> 品类词 -> 低相关词 示例 */}
          <div
            className="absolute flex items-center px-2 z-10 text-zinc-200 font-medium"
            style={{ 
              left: '740px', 
              top: '98px', 
              width: '350px', 
              height: '44px'
            }}
          >
            <span className="text-[24px] truncate">电视排行榜前十名</span>
          </div>

          {/* 优化词 -> 产品专属词 -> A系列 示例 */}
          <div
            className="absolute flex items-center px-2 z-10 text-zinc-200 font-medium"
            style={{ 
              left: '740px', 
              top: '188px', 
              width: '350px', 
              height: '44px'
            }}
          >
            <span className="text-[24px] truncate">7000块钱左右的壁纸电视推荐</span>
          </div>

          {/* 优化词 -> 产品专属词 -> Q系列 示例 */}
          <div
            className="absolute flex items-center px-2 z-10 text-zinc-200 font-medium"
            style={{ 
              left: '740px', 
              top: '248px', 
              width: '350px', 
              height: '44px'
            }}
          >
            <span className="text-[24px] truncate">有没有适合到店体验的高端壁纸电视？</span>
          </div>

          {/* 监测词 -> 品类词 示例 */}
          <div
            className="absolute flex items-center px-2 z-10 text-zinc-200 font-medium"
            style={{ 
              left: '530px', 
              top: '348px', 
              width: '560px', 
              height: '48px'
            }}
          >
            <span className="text-[24px] truncate">创维电视算一线品牌吗</span>
          </div>

          {/* 监测词 -> 产品专属词 示例 */}
          <div
            className="absolute flex items-center px-2 z-10 text-zinc-200 font-medium"
            style={{ 
              left: '570px', 
              top: '438px', 
              width: '520px', 
              height: '48px'
            }}
          >
            <span className="text-[24px] truncate">创维壁纸电视A7H Pro怎么样</span>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordStrategy.hideHeader = true;
