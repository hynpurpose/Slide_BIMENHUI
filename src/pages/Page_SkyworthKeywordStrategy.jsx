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
        
        {/* ==================== 统一的 SVG 画布 (外层防护罩 + 内部双层金字塔 + 连接线) ==================== */}
        <svg 
          width="1840" 
          height="580" 
          className="absolute left-0 top-[20px] overflow-visible pointer-events-none z-0"
        >
          {/* 定义渐变与滤镜 */}
          <defs>
            {/* 蓝天色半透明渐变 - 监测词（外围防护罩） */}
            <linearGradient id="domeGrad" x1="230" y1="20" x2="230" y2="570" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.03" />
            </linearGradient>
            
            {/* 青色渐变 - 产品专属词（内部中层） */}
            <linearGradient id="tealGrad" x1="230" y1="200" x2="230" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0D9488" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.5" />
            </linearGradient>
            
            {/* 宝蓝色渐变 - 品类词（内部底层） */}
            <linearGradient id="blueGrad" x1="230" y1="390" x2="230" y2="570" gradientUnits="userSpaceOnUse">
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
          <path 
            d="M 10 570 C 10 120, 450 120, 450 570 Z" 
            fill="url(#domeGrad)" 
            stroke="#38BDF8" 
            strokeWidth="2.5" 
            strokeDasharray="6 6"
            filter="url(#neonGlow)" 
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />

          {/* 2. 内部金字塔中层 : 产品专属词 */}
          <path 
            d="M 146 220 L 314 220 L 374 380 L 86 380 Z" 
            fill="url(#tealGrad)" 
            stroke="#2DD4BF" 
            strokeWidth="2" 
          />

          {/* 3. 内部金字塔底层 : 品类词 */}
          <path 
            d="M 80 390 L 380 390 L 440 560 L 20 560 Z" 
            fill="url(#blueGrad)" 
            stroke="#3B82F6" 
            strokeWidth="2" 
          />

          {/* 4. 支架连接线 (X: 354 - 630) */}
          {/* 纵向支架主线 */}
          <path 
            d="M 530 110 L 530 480" 
            stroke="#475569" 
            strokeWidth="2" 
            strokeLinecap="round"
          />

          {/* 左侧分支：连接金字塔中层右边缘 (X=354) 到纵向主线 (X=530) */}
          <path 
            d="M 354 290 L 530 290" 
            stroke="#475569" 
            strokeWidth="2" 
            strokeLinecap="round"
          />

          {/* 右侧分支 1：主线 (X=530) 到顶层文本节点 */}
          <path 
            d="M 530 110 L 610 110" 
            stroke="#475569" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* 右侧分支 2：主线 (X=530) 到中层文本节点 */}
          <path 
            d="M 530 290 L 610 290" 
            stroke="#475569" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* 右侧分支 3：主线 (X=530) 到底层文本节点 */}
          <path 
            d="M 530 480 L 610 480" 
            stroke="#475569" 
            strokeWidth="2" 
            strokeLinecap="round"
          />

          {/* 三个连接端点的红色指示圆点 (同 JAST 风格) */}
          <circle cx="610" cy="110" r="5.5" fill={C.accentRed} />
          <circle cx="610" cy="290" r="5.5" fill={C.accentRed} />
          <circle cx="610" cy="480" r="5.5" fill={C.accentRed} />
        </svg>

        {/* ==================== 放置在图形上的文字标签 ==================== */}
        {/* 外层防护罩标签 */}
        <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '130px', width: '460px' }}>
          <span className="text-[32px] font-black text-sky-300 leading-none tracking-wide filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">监测词</span>
          <span className="text-[15px] font-bold text-sky-200 mt-1.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">外围 / 护城河</span>
        </div>

        {/* 中层标签 */}
        <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '280px', width: '460px' }}>
          <span className="text-[32px] font-black text-white leading-none tracking-wide">产品专属词</span>
          <span className="text-[16px] font-bold text-teal-200 mt-1">核心 / 中层</span>
        </div>

        {/* 底层标签 */}
        <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: '0px', top: '455px', width: '460px' }}>
          <span className="text-[32px] font-black text-white leading-none tracking-wide">品类词</span>
          <span className="text-[16px] font-bold text-blue-200 mt-1">基石 / 底层</span>
        </div>

        {/* ==================== 右侧：核心目的与分类说明列表 (严格对齐 Y) ==================== */}
        <div className="absolute select-text" style={{ left: '635px', top: '0px', width: '1205px', height: '580px' }}>
          
          {/* 1. 监测词说明 */}
          <div className="absolute flex flex-col justify-center" style={{ top: '35px', height: '150px' }}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-[28px] font-black text-white">监测词</h3>
              <span className="text-[15px] text-zinc-500 font-bold border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900/50">
                监测范围：品类词、产品专属词
              </span>
            </div>
            <p className="text-[18px] text-zinc-300 leading-relaxed mt-1.5 font-normal">
              核心目的：起到“润滑”和保护作用。虽然不直接产生主要优化效果，但它是护城河。如果外围负面信息过高，内部的优化就会被淹没或受到严重影响。
            </p>
            {/* 细分逻辑与示例 */}
            <div className="mt-2.5 flex items-center gap-6 pl-4 border-l-2 border-sky-500/40">
              <div className="text-[16px] text-zinc-400">
                <span className="text-sky-300 font-bold">品类词：</span>
                <span className="text-zinc-300 font-medium">“创维电视算一线品牌吗”</span>
              </div>
              <div className="text-[16px] text-zinc-400">
                <span className="text-sky-300 font-bold">产品专属词：</span>
                <span className="text-zinc-300 font-medium">“创维壁纸电视A7H Pro怎么样”</span>
              </div>
            </div>
          </div>

          {/* 2. 产品专属词说明 */}
          <div className="absolute flex flex-col justify-center" style={{ top: '220px', height: '150px' }}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-[28px] font-black text-white">产品专属词</h3>
              <span className="text-[15px] text-zinc-500 font-bold border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900/50">
                优化子类：A系列、Q系列
              </span>
            </div>
            <p className="text-[18px] text-zinc-300 leading-relaxed mt-1.5 font-normal">
              核心目的：形成对核心消费群体的“包围圈”，直接拉动销量。
            </p>
            {/* 细分逻辑与示例 */}
            <div className="mt-2.5 flex items-center gap-6 pl-4 border-l-2 border-teal-500/40">
              <div className="text-[16px] text-zinc-400">
                <span className="text-teal-300 font-bold">A系列：</span>
                <span className="text-zinc-300 font-medium">“7000块钱左右的壁纸电视推荐”</span>
              </div>
              <div className="text-[16px] text-zinc-400">
                <span className="text-teal-300 font-bold">Q系列：</span>
                <span className="text-zinc-300 font-medium">“有没有适合到店体验的高端壁纸电视？”</span>
              </div>
            </div>
          </div>

          {/* 3. 品类词说明 */}
          <div className="absolute flex flex-col justify-center" style={{ top: '410px', height: '150px' }}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-[28px] font-black text-white">品类词</h3>
              <span className="text-[15px] text-zinc-500 font-bold border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900/50">
                优化子类：高相关词、低相关词
              </span>
            </div>
            <p className="text-[18px] text-zinc-300 leading-relaxed mt-1.5 font-normal">
              核心目的：品牌必须“hold住”的底线，牢牢站稳品类定义。
            </p>
            {/* 细分逻辑与示例 */}
            <div className="mt-2.5 flex items-center gap-6 pl-4 border-l-2 border-blue-500/40">
              <div className="text-[16px] text-zinc-400">
                <span className="text-blue-300 font-bold">高相关词：</span>
                <span className="text-zinc-300 font-medium">“壁纸电视品牌推荐”</span>
              </div>
              <div className="text-[16px] text-zinc-400">
                <span className="text-blue-300 font-bold">低相关词：</span>
                <span className="text-zinc-300 font-medium">“电视排行榜前十名”</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordStrategy.hideHeader = true;
