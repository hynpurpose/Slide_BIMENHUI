import React from 'react';
import SlideLayout from '../components/SlideLayout';

const C = {
  accentRed: '#E50012', // Skyworth Red
  lineStrong: 'rgba(255,255,255,0.1)',
  bgDark: '#0D0D10',
};

function PageSubtitle() {
  return (
    <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
      三层关系护城河：从<span className="text-white font-bold">品类基石</span>到<span className="text-white font-bold">专属包围圈</span>，再到<span className="text-white font-bold">监测护城河</span>，全方位构建品牌 AI 推荐心智。
    </div>
  );
}

export default function Page_SkyworthKeywordStrategy() {
  return (
    <SlideLayout title="核心词条分类与护城河策略">
      <PageSubtitle />

      {/* ── 整个图表画布 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex items-stretch gap-8 font-['MiSans']"
        style={{ top: '76px', height: '710px' }}
      >
        
        {/* ==================== 左侧：词条分类体系 (Mindmap Tree) ==================== */}
        <div 
          className="relative rounded-3xl p-8 flex-1 min-w-0"
          style={{ 
            background: 'rgba(8,8,11,0.45)', 
            border: `1px solid ${C.lineStrong}`,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}
        >
          {/* 标题 */}
          <div className="absolute top-6 left-8 flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full" style={{ background: C.accentRed }} />
            <span className="text-[24px] font-bold text-white">词条精细化分类体系</span>
          </div>

          {/* SVG 连线画布 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            {/* 发光滤镜 */}
            <defs>
              <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Root -> Level 1 */}
            <path d="M 180 320 C 215 320, 215 200, 250 200" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />
            <path d="M 180 320 C 215 320, 215 440, 250 440" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />

            {/* Level 1 -> Level 2 (优化词分支) */}
            <path d="M 390 200 C 415 200, 415 127, 440 127" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />
            <path d="M 390 200 C 415 200, 415 267, 440 267" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />

            {/* Level 1 -> Level 2 (监测词分支) */}
            <path d="M 390 440 C 415 440, 415 387, 440 387" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />
            <path d="M 390 440 C 415 440, 415 487, 440 487" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />

            {/* Level 2 -> Level 3 (品类词-优化分支) */}
            <path d="M 590 127 C 615 127, 615 92, 640 92" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />
            <path d="M 590 127 C 615 127, 615 152, 640 152" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />

            {/* Level 2 -> Level 3 (产品专属词-优化分支) */}
            <path d="M 590 267 C 615 267, 615 232, 640 232" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />
            <path d="M 590 267 C 615 267, 615 292, 640 292" fill="none" stroke={C.accentRed} strokeWidth="2" strokeLinecap="round" filter="url(#redGlow)" className="opacity-80" />
          </svg>

          {/* Root Card: 创维词条 */}
          <div
            className="absolute flex items-center justify-center rounded-2xl z-10 shadow-lg text-center"
            style={{ 
              left: '30px', 
              top: '280px', 
              width: '150px', 
              height: '80px',
              background: C.accentRed,
              boxShadow: `0 0 20px ${C.accentRed}50`
            }}
          >
            <span className="text-[28px] font-black text-white tracking-wide">创维词条</span>
          </div>

          {/* ── Level 1: 优化词 / 监测词 ── */}
          {/* 优化词 */}
          <div
            className="absolute flex flex-col justify-center items-center rounded-2xl z-10 bg-white shadow-lg text-black"
            style={{ left: '250px', top: '165px', width: '140px', height: '70px' }}
          >
            <span className="text-[24px] font-extrabold">优化词</span>
            <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-600 mt-1 uppercase scale-90">
              双向提升
            </span>
          </div>

          {/* 监测词 */}
          <div
            className="absolute flex flex-col justify-center items-center rounded-2xl z-10 bg-white shadow-lg text-black"
            style={{ left: '250px', top: '405px', width: '140px', height: '70px' }}
          >
            <span className="text-[24px] font-extrabold">监测词</span>
            <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 mt-1 uppercase scale-90">
              安全屏障
            </span>
          </div>

          {/* ── Level 2: 中层分类 ── */}
          {/* 优化词 -> 品类词 */}
          <div
            className="absolute flex flex-col justify-center px-4 rounded-xl z-10 bg-zinc-900 border border-zinc-800 text-white shadow-md hover:border-zinc-700 transition-colors"
            style={{ left: '440px', top: '100px', width: '150px', height: '54px' }}
          >
            <span className="text-[20px] font-bold text-center">品类词</span>
          </div>

          {/* 优化词 -> 产品专属词 */}
          <div
            className="absolute flex flex-col justify-center px-4 rounded-xl z-10 bg-zinc-900 border border-zinc-800 text-white shadow-md hover:border-zinc-700 transition-colors"
            style={{ left: '440px', top: '240px', width: '150px', height: '54px' }}
          >
            <span className="text-[20px] font-bold text-center">产品专属词</span>
          </div>

          {/* 监测词 -> 品类词 */}
          <div
            className="absolute flex flex-col justify-center px-4 rounded-xl z-10 bg-zinc-900 border border-zinc-800 text-white shadow-md hover:border-zinc-700 transition-colors"
            style={{ left: '440px', top: '330px', width: '150px', height: '54px' }}
          >
            <span className="text-[20px] font-bold text-zinc-400 text-center">品类词</span>
          </div>

          {/* 监测词 -> 产品专属词 */}
          <div
            className="absolute flex flex-col justify-center px-4 rounded-xl z-10 bg-zinc-900 border border-zinc-800 text-white shadow-md hover:border-zinc-700 transition-colors"
            style={{ left: '440px', top: '430px', width: '150px', height: '54px' }}
          >
            <span className="text-[20px] font-bold text-zinc-400 text-center">产品专属词</span>
          </div>

          {/* ── Level 3: 最细分类 ── */}
          {/* 品类词 -> 高相关词 */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-600 transition-colors"
            style={{ left: '640px', top: '70px', width: '140px', height: '44px' }}
          >
            <span className="text-[17px] font-medium">高相关词</span>
          </div>

          {/* 品类词 -> 低相关词 */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-600 transition-colors"
            style={{ left: '640px', top: '130px', width: '140px', height: '44px' }}
          >
            <span className="text-[17px] font-medium">低相关词</span>
          </div>

          {/* 产品专属词 -> A系列 */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-600 transition-colors"
            style={{ left: '640px', top: '210px', width: '140px', height: '44px' }}
          >
            <span className="text-[17px] font-medium">A系列</span>
          </div>

          {/* 产品专属词 -> Q系列 */}
          <div
            className="absolute flex items-center justify-center rounded-xl z-10 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-600 transition-colors"
            style={{ left: '640px', top: '270px', width: '140px', height: '44px' }}
          >
            <span className="text-[17px] font-medium">Q系列</span>
          </div>

          {/* 底部备注 */}
          <div className="absolute bottom-6 left-8 text-[15px] text-zinc-500">
            * 优化词针对转化提升，监测词主要用于品牌健康度护航
          </div>
        </div>

        {/* ==================== 右侧：词条关系与护城河逻辑 (Moat Pyramid) ==================== */}
        <div 
          className="relative rounded-3xl p-8 flex-1 min-w-0 flex items-stretch gap-4"
          style={{ 
            background: 'rgba(8,8,11,0.45)', 
            border: `1px solid ${C.lineStrong}`,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}
        >
          {/* 标题 */}
          <div className="absolute top-6 left-8 flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full bg-sky-400" />
            <span className="text-[24px] font-bold text-white">三层关系 “护城河” 逻辑模型</span>
          </div>

          {/* 左侧：金字塔图形 */}
          <div className="w-[300px] shrink-0 relative flex flex-col justify-center items-center pt-10">
            
            {/* SVG 金字塔与辅助虚线 */}
            <svg width="300" height="500" className="z-0 overflow-visible pointer-events-none">
              <defs>
                {/* 蓝天色渐变 - 监测词 */}
                <linearGradient id="cyanGrad" x1="150" y1="60" x2="150" y2="170" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
                </linearGradient>
                {/* 青色渐变 - 产品专属词 */}
                <linearGradient id="tealGrad" x1="150" y1="180" x2="150" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0D9488" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.45" />
                </linearGradient>
                {/* 宝蓝色渐变 - 品类词 */}
                <linearGradient id="blueGrad" x1="150" y1="310" x2="150" y2="430" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
                </linearGradient>

                {/* 护城河发光 */}
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 顶层 / 护城河 : 监测词 (外围) */}
              <path 
                d="M 150 50 L 195 160 L 105 160 Z" 
                fill="url(#cyanGrad)" 
                stroke="#38BDF8" 
                strokeWidth="1.5" 
                filter="url(#cyanGlow)" 
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />

              {/* 中层 : 产品专属词 (核心) */}
              <path 
                d="M 101 170 L 199 170 L 244 290 L 56 290 Z" 
                fill="url(#tealGrad)" 
                stroke="#2DD4BF" 
                strokeWidth="1.5" 
              />

              {/* 底层 : 品类词 (基石) */}
              <path 
                d="M 52 300 L 248 300 L 298 420 L 2 420 Z" 
                fill="url(#blueGrad)" 
                stroke="#3B82F6" 
                strokeWidth="2" 
              />

              {/* 图形内文字标签 */}
              <text x="150" y="132" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="1">监测词</text>
              <text x="150" y="242" fill="#FFFFFF" fontSize="17" fontWeight="bold" textAnchor="middle" letterSpacing="1">产品专属词</text>
              <text x="150" y="372" fill="#FFFFFF" fontSize="19" fontWeight="bold" textAnchor="middle" letterSpacing="1">品类词</text>

              {/* 连接线及端点 */}
              {/* 顶层线 -> 监测词 */}
              <path d="M 175 110 L 320 110" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="320" cy="110" r="3.5" fill="#38BDF8" />

              {/* 中层线 -> 产品专属词 */}
              <path d="M 220 230 L 320 230" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="320" cy="230" r="3.5" fill="#2DD4BF" />

              {/* 底层线 -> 品类词 */}
              <path d="M 270 360 L 320 360" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="320" cy="360" r="3.5" fill="#3B82F6" />
            </svg>
          </div>

          {/* 右侧：说明卡片列表 */}
          <div className="flex-1 flex flex-col justify-center gap-5 pt-10 select-text">
            
            {/* Card 1: 监测词 (护城河) */}
            <div 
              className="rounded-2xl px-6 py-4 flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ 
                background: 'rgba(2,132,199,0.06)', 
                border: '1px solid rgba(56,189,248,0.25)',
                boxShadow: '0 4px 20px rgba(2,132,199,0.05)'
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-[20px] font-black text-sky-400">外围/护城河 · 监测词</span>
              </div>
              <p className="text-[16px] text-zinc-300 leading-relaxed font-normal">
                <strong className="text-white font-semibold">核心目的：</strong>起到<strong className="text-sky-300 font-semibold">“润滑”和保护作用</strong>。虽然不直接产生主要优化效果，但它是核心优化词的外部屏障。如果外围负面信息过高，内部的优化成果将被淹没。
              </p>
            </div>

            {/* Card 2: 产品专属词 (包围圈) */}
            <div 
              className="rounded-2xl px-6 py-4 flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ 
                background: 'rgba(13,148,136,0.06)', 
                border: '1px solid rgba(45,212,191,0.25)',
                boxShadow: '0 4px 20px rgba(13,148,136,0.05)'
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="text-[20px] font-black text-teal-400">核心/中层 · 产品专属词</span>
              </div>
              <p className="text-[16px] text-zinc-300 leading-relaxed font-normal">
                <strong className="text-white font-semibold">核心目的：</strong>形成对核心消费群体的<strong className="text-teal-300 font-semibold">“包围圈”</strong>，以核心产品特征/卖点深度说服目标用户，直接拉动销量。
              </p>
            </div>

            {/* Card 3: 品类词 (基石底线) */}
            <div 
              className="rounded-2xl px-6 py-4 flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ 
                background: 'rgba(30,64,175,0.08)', 
                border: '1px solid rgba(59,130,246,0.25)',
                boxShadow: '0 4px 20px rgba(30,64,175,0.05)'
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[20px] font-black text-blue-400">基石/底层 · 品类词</span>
              </div>
              <p className="text-[16px] text-zinc-300 leading-relaxed font-normal">
                <strong className="text-white font-semibold">核心目的：</strong>品牌必须<strong className="text-blue-300 font-semibold">“hold住”的底线</strong>，牢牢站稳品类定义，在品类搜索中确保品牌的可见性与根基。
              </p>
            </div>

          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordStrategy.hideHeader = true;
