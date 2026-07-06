import React from 'react';
import SlideLayout from '../components/SlideLayout';

const C = {
  accentRed: '#E50012', // Skyworth Red
  lineColor: '#38BDF8', // Sky sky blue line
  bgDark: '#0D0D10',
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
          className="absolute left-0 top-[20px] w-[540px] h-[600px] overflow-visible"
        >
          {/* SVG 金字塔 与 外侧防护罩 */}
          <svg 
            width="540" 
            height="580" 
            className="absolute inset-0 overflow-visible pointer-events-none z-0"
          >
            <defs>
              {/* 蓝天色半透明渐变 - 监测词（外围防护罩） */}
              <linearGradient id="domeGrad" x1="260" y1="90" x2="260" y2="560" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.02" />
              </linearGradient>
              
              {/* 青色渐变 - 产品专属词（内部中层） */}
              <linearGradient id="tealGrad" x1="260" y1="220" x2="260" y2="385" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.5" />
              </linearGradient>
              
              {/* 宝蓝色渐变 - 品类词（内部底层） */}
              <linearGradient id="blueGrad" x1="260" y1="395" x2="260" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.55" />
              </linearGradient>

              {/* 霓虹发光滤镜 */}
              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. 外层包围圈/防护罩 : 监测词 (包围在品类词与产品专属词外面) */}
            {/* 半透明填充区 */}
            <path 
              d="M 25 560 C 25 100, 495 100, 495 560 Z" 
              fill="url(#domeGrad)" 
              stroke="none"
            />
            {/* 外围虚线框线，完全把内部包含进去 */}
            <path 
              d="M 20 560 C 20 90, 500 90, 500 560" 
              fill="none" 
              stroke="#38BDF8" 
              strokeWidth="2.5" 
              strokeDasharray="6 6"
              filter="url(#neonGlow)" 
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />

            {/* 2. 内部金字塔上层（产品专属词）: 三角形，非梯形 */}
            <path 
              d="M 260 220 L 380 385 L 140 385 Z" 
              fill="url(#tealGrad)" 
              stroke="#2DD4BF" 
              strokeWidth="2" 
            />

            {/* 3. 内部金字塔底层（品类词）: 梯形 */}
            <path 
              d="M 134 395 L 386 395 L 460 550 L 60 550 Z" 
              fill="url(#blueGrad)" 
              stroke="#3B82F6" 
              strokeWidth="2" 
            />
          </svg>

          {/* ==================== 放置在图形上的文字标签 ==================== */}
          {/* 外层防护罩标签 (监测词) */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '120px', width: '520px' }}>
            <span className="text-[30px] font-black text-sky-300 leading-none tracking-wide filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">监测词</span>
            <span className="text-[14px] font-bold text-sky-200 mt-1 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">外围 / 护城河</span>
          </div>

          {/* 中层标签 (产品专属词) */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '305px', width: '520px' }}>
            <span className="text-[30px] font-black text-white leading-none tracking-wide">产品专属词</span>
            <span className="text-[15px] font-bold text-teal-200 mt-1">核心 / 中层</span>
          </div>

          {/* 底层标签 (品类词) */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '455px', width: '520px' }}>
            <span className="text-[30px] font-black text-white leading-none tracking-wide">品类词</span>
            <span className="text-[15px] font-bold text-blue-200 mt-1">基石 / 底层</span>
          </div>
        </div>

        {/* ==================== 右侧：词条细分思维导图 (Mindmap Tree) ==================== */}
        <div 
          className="absolute rounded-3xl p-6 select-text" 
          style={{ 
            left: '560px', 
            top: '20px', 
            width: '1280px', 
            height: '600px',
            background: 'rgba(8,8,11,0.45)', 
            border: `1px solid ${C.lineStrong}`,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}
        >
          {/* SVG 连线画布 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* Root (创维词条) -> Level 1 (优化词/监测词) */}
            <path d="M 130 270 C 160 270, 160 165, 190 165" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 130 270 C 160 270, 160 435, 190 435" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 1 -> Level 2 (优化词分支) */}
            <path d="M 290 165 C 315 165, 315 92, 340 92" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 290 165 C 315 165, 315 242, 340 242" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 1 -> Level 2 (监测词分支) */}
            <path d="M 290 435 C 315 435, 315 372, 340 372" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 290 435 C 315 435, 315 462, 340 462" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 2 -> Level 3 (品类词-优化分支) */}
            <path d="M 440 92 C 465 92, 465 60, 490 60" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 440 92 C 465 92, 465 120, 490 120" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 2 -> Level 3 (产品专属词-优化分支) */}
            <path d="M 440 242 C 465 242, 465 210, 490 210" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 440 242 C 465 242, 465 270, 490 270" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 3 -> Level 4 Examples (高相关/低相关/A系列/Q系列) */}
            <path d="M 600 60 L 650 60" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 600 120 L 650 120" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 600 210 L 650 210" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 600 270 L 650 270" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />

            {/* Level 2 -> Level 3 Examples (监测词分支) */}
            <path d="M 440 372 L 490 372" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 440 462 L 490 462" fill="none" stroke={C.accentRed} strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Root Card: 创维词条 */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 shadow-lg text-center font-bold"
            style={{ 
              left: '10px', 
              top: '240px', 
              width: '120px', 
              height: '60px',
              background: C.accentRed,
              boxShadow: `0 0 16px ${C.accentRed}40`
            }}
          >
            <span className="text-[20px] text-white">创维词条</span>
          </div>

          {/* ── Level 1: 优化词 / 监测词 ── */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 bg-white shadow-lg text-black font-bold"
            style={{ left: '190px', top: '140px', width: '100px', height: '50px' }}
          >
            <span className="text-[18px]">优化词</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-xl z-10 bg-white shadow-lg text-black font-bold"
            style={{ left: '190px', top: '410px', width: '100px', height: '50px' }}
          >
            <span className="text-[18px]">监测词</span>
          </div>

          {/* ── Level 2: 中层分类 ── */}
          {/* 优化词 -> 品类词 */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-900 border border-zinc-800 text-white shadow-md"
            style={{ left: '340px', top: '70px', width: '100px', height: '44px' }}
          >
            <span className="text-[16px] font-bold">品类词</span>
          </div>

          {/* 优化词 -> 产品专属词 */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-900 border border-zinc-800 text-white shadow-md"
            style={{ left: '340px', top: '220px', width: '100px', height: '44px' }}
          >
            <span className="text-[16px] font-bold">产品专属词</span>
          </div>

          {/* 监测词 -> 品类词 */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-md"
            style={{ left: '340px', top: '350px', width: '100px', height: '44px' }}
          >
            <span className="text-[16px] font-bold">品类词</span>
          </div>

          {/* 监测词 -> 产品专属词 */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-md"
            style={{ left: '340px', top: '440px', width: '100px', height: '44px' }}
          >
            <span className="text-[16px] font-bold">产品专属词</span>
          </div>

          {/* ── Level 3: 优化词下的精细分类 ── */}
          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-950 border border-zinc-800 text-zinc-400"
            style={{ left: '490px', top: '40px', width: '110px', height: '40px' }}
          >
            <span className="text-[15px] font-medium">高相关词</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-950 border border-zinc-800 text-zinc-400"
            style={{ left: '490px', top: '100px', width: '110px', height: '40px' }}
          >
            <span className="text-[15px] font-medium">低相关词</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-950 border border-zinc-800 text-zinc-400"
            style={{ left: '490px', top: '190px', width: '110px', height: '40px' }}
          >
            <span className="text-[15px] font-medium">A系列</span>
          </div>

          <div
            className="absolute flex items-center justify-center rounded-lg z-10 bg-zinc-950 border border-zinc-800 text-zinc-400"
            style={{ left: '490px', top: '250px', width: '110px', height: '40px' }}
          >
            <span className="text-[15px] font-medium">Q系列</span>
          </div>

          {/* ── Level 4 / Final: 示例词条卡片 ── */}
          {/* 优化词 -> 品类词 -> 高相关词 示例 */}
          <div
            className="absolute flex items-center px-4 rounded-lg z-10 bg-[#16161C] border border-zinc-800 text-zinc-300"
            style={{ left: '650px', top: '40px', width: '590px', height: '40px' }}
          >
            <span className="text-[15px] truncate font-medium">壁纸电视品牌推荐</span>
          </div>

          {/* 优化词 -> 品类词 -> 低相关词 示例 */}
          <div
            className="absolute flex items-center px-4 rounded-lg z-10 bg-[#16161C] border border-zinc-800 text-zinc-300"
            style={{ left: '650px', top: '100px', width: '590px', height: '40px' }}
          >
            <span className="text-[15px] truncate font-medium">电视排行榜前十名</span>
          </div>

          {/* 优化词 -> 产品专属词 -> A系列 示例 */}
          <div
            className="absolute flex items-center px-4 rounded-lg z-10 bg-[#16161C] border border-zinc-800 text-zinc-300"
            style={{ left: '650px', top: '190px', width: '590px', height: '40px' }}
          >
            <span className="text-[15px] truncate font-medium">7000块钱左右的壁纸电视推荐</span>
          </div>

          {/* 优化词 -> 产品专属词 -> Q系列 示例 */}
          <div
            className="absolute flex items-center px-4 rounded-lg z-10 bg-[#16161C] border border-zinc-800 text-zinc-300"
            style={{ left: '650px', top: '250px', width: '590px', height: '40px' }}
          >
            <span className="text-[15px] truncate font-medium">有没有适合到店体验的高端壁纸电视？</span>
          </div>

          {/* 监测词 -> 品类词 示例 */}
          <div
            className="absolute flex items-center px-4 rounded-lg z-10 bg-[#16161C] border border-zinc-800 text-zinc-300"
            style={{ left: '490px', top: '352px', width: '750px', height: '40px' }}
          >
            <span className="text-[15px] truncate font-medium">创维电视算一线品牌吗</span>
          </div>

          {/* 监测词 -> 产品专属词 示例 */}
          <div
            className="absolute flex items-center px-4 rounded-lg z-10 bg-[#16161C] border border-zinc-800 text-zinc-300"
            style={{ left: '490px', top: '442px', width: '750px', height: '40px' }}
          >
            <span className="text-[15px] truncate font-medium">创维壁纸电视A7H Pro怎么样</span>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordStrategy.hideHeader = true;
