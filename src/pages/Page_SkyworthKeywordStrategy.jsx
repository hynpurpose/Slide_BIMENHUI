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

        {/* ==================== 右侧：核心优化策略表格 (Strategy Table) ==================== */}
        {(() => {
          const rows = [
            {
              group: '品类词',
              accent: C.colorBlue,
              focus: '好看的电视',
              priority: true,
              keywords: ['艺术电视', '壁纸电视', '超薄电视', '画框电视'],
              goal: '守住绝对优势，稳拿第一',
              note: '防海信 / TCL / 华为跟进',
            },
            {
              group: '品类词',
              accent: C.colorBlue,
              focus: '常规电视',
              keywords: ['画质好', '音响好'],
              goal: '持续加强，力争 Top3',
            },
            {
              group: '产品专属词',
              accent: C.colorTeal,
              focus: 'A 系列 · 线上 3 款',
              keywords: ['线上核心搜索词'],
              goal: '打透线上，守住线上优势',
            },
            {
              group: '产品专属词',
              accent: C.colorTeal,
              focus: 'Q 系列 · 线下 2 款',
              keywords: ['线下体验', '看实物', '到店路径'],
              goal: '突出线下属性，引导到店',
            },
          ];

          const COL = { cat: 330, key: 470, goal: 310 };

          return (
            <div
              className="absolute select-text font-['MiSans']"
              style={{ left: '748px', top: '30px', width: '1076px', height: '580px' }}
            >
              {/* ── 表头 ── */}
              <div
                className="flex items-center rounded-t-2xl"
                style={{
                  height: '58px',
                  background: 'rgba(255,255,255,0.05)',
                  borderBottom: '2px solid rgba(255,255,255,0.14)',
                }}
              >
                <div style={{ width: COL.cat, paddingLeft: '28px' }} className="text-[22px] font-bold text-zinc-400 tracking-widest">词类 / 方向</div>
                <div style={{ width: COL.key, paddingLeft: '20px' }} className="text-[22px] font-bold text-zinc-400 tracking-widest">重点关键词</div>
                <div style={{ width: COL.goal, paddingLeft: '20px' }} className="text-[22px] font-bold text-zinc-400 tracking-widest">优化目标</div>
              </div>

              {/* ── 数据行 ── */}
              {rows.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center relative"
                  style={{
                    height: '124px',
                    background: r.priority ? `${r.accent}12` : 'transparent',
                    borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* 左侧色条 */}
                  <div
                    className="absolute left-0 top-0 h-full"
                    style={{ width: r.priority ? '5px' : '3px', background: r.accent, borderRadius: '3px' }}
                  />

                  {/* 词类 / 方向 */}
                  <div style={{ width: COL.cat, paddingLeft: '28px', paddingRight: '16px' }}>
                    <div className="flex items-center gap-[10px]">
                      <span className="text-[24px] font-bold" style={{ color: r.accent }}>{r.group}</span>
                      {r.priority && (
                        <span
                          className="text-[16px] font-bold px-[10px] py-[2px] rounded-full leading-none"
                          style={{ background: r.accent, color: '#0A0A0A' }}
                        >
                          重中之重
                        </span>
                      )}
                    </div>
                    <div className="text-[28px] font-bold text-white leading-tight mt-[6px]">{r.focus}</div>
                    {r.note && <div className="text-[16px] text-zinc-500 mt-[4px]">{r.note}</div>}
                  </div>

                  {/* 重点关键词 */}
                  <div style={{ width: COL.key, paddingLeft: '20px', paddingRight: '16px' }} className="flex flex-wrap gap-[10px]">
                    {r.keywords.map((k, ki) => (
                      <span
                        key={ki}
                        className="text-[22px] leading-none rounded-lg"
                        style={{
                          padding: '9px 14px',
                          color: '#E4E4E7',
                          background: `${r.accent}1A`,
                          border: `1px solid ${r.accent}55`,
                        }}
                      >
                        {k}
                      </span>
                    ))}
                  </div>

                  {/* 优化目标 */}
                  <div style={{ width: COL.goal, paddingLeft: '20px', paddingRight: '20px' }} className="text-[23px] font-semibold text-white leading-snug">
                    {r.goal}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordStrategy.hideHeader = true;
