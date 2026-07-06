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

        {/* ==================== 右侧：词条分级表格 ==================== */}
        <div 
          className="absolute select-text font-['MiSans']" 
          style={{ 
            left: '730px', 
            top: '20px', 
            width: '1110px', 
            height: '600px'
          }}
        >
          <table
            className="w-full h-full"
            style={{ borderCollapse: 'separate', borderSpacing: 0, tableLayout: 'fixed' }}
          >
            <colgroup>
              <col style={{ width: '118px' }} />
              <col style={{ width: '132px' }} />
              <col style={{ width: '118px' }} />
              <col />
              <col style={{ width: '168px' }} />
            </colgroup>

            <thead>
              <tr>
                <th
                  colSpan={3}
                  className="text-left text-[22px] font-bold text-zinc-300 tracking-wide"
                  style={{ padding: '0 20px 14px', borderBottom: '2px solid rgba(255,255,255,0.22)' }}
                >
                  词条分级
                </th>
                <th
                  className="text-left text-[22px] font-bold text-zinc-300 tracking-wide"
                  style={{ padding: '0 20px 14px', borderBottom: '2px solid rgba(255,255,255,0.22)' }}
                >
                  示例词条
                </th>
                <th
                  className="text-center text-[22px] font-bold text-zinc-300 tracking-wide"
                  style={{ padding: '0 12px 14px', borderBottom: '2px solid rgba(255,255,255,0.22)' }}
                >
                  优化目标
                </th>
              </tr>
            </thead>

            <tbody>
              {/* ───── 优化词 ───── */}
              {/* 品类词 · 优势词 */}
              <tr>
                <td
                  rowSpan={4}
                  className="text-[28px] font-black text-center align-middle"
                  style={{ color: C.colorTeal, borderBottom: '1px solid rgba(255,255,255,0.10)', borderLeft: `4px solid ${C.colorTeal}`, background: 'rgba(45,212,191,0.05)' }}
                >
                  <span style={{ writingMode: 'vertical-rl', letterSpacing: '0.15em' }}>优化词</span>
                </td>
                <td
                  rowSpan={2}
                  className="text-[23px] font-bold text-center align-middle"
                  style={{ color: C.colorBlue, borderBottom: '1px solid rgba(255,255,255,0.10)' }}
                >
                  品类词
                </td>
                <td className="text-[23px] font-bold text-center align-middle" style={{ color: '#FBBF24', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 4px' }}>
                  优势词
                </td>
                <td className="text-[22px] text-zinc-100 leading-snug align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 20px' }}>
                  壁纸电视品牌排行榜 · 艺术电视品牌推荐 · 超薄电视品牌推荐
                </td>
                <td className="text-center align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 12px' }}>
                  <span className="inline-block text-[20px] font-bold" style={{ color: '#FBBF24', border: '1.5px solid rgba(251,191,36,0.55)', background: 'rgba(251,191,36,0.10)', borderRadius: '999px', padding: '4px 14px' }}>拿到第一</span>
                </td>
              </tr>
              {/* 品类词 · 常规词 */}
              <tr>
                <td className="text-[23px] font-bold text-center align-middle text-zinc-200" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '10px 4px' }}>
                  常规词
                </td>
                <td className="text-[22px] text-zinc-100 leading-snug align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '10px 20px' }}>
                  客厅电视推荐 · 4K高清电视推荐 · 高清画质色彩好的电视推荐
                </td>
                <td className="text-center align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '10px 12px' }}>
                  <span className="inline-block text-[20px] font-semibold text-zinc-200" style={{ border: '1.5px solid rgba(255,255,255,0.28)', borderRadius: '999px', padding: '4px 14px' }}>进入 Top3</span>
                </td>
              </tr>
              {/* 产品专属词 · A系列 */}
              <tr>
                <td
                  rowSpan={2}
                  className="text-[23px] font-bold text-center align-middle"
                  style={{ color: C.colorTeal, borderBottom: '1px solid rgba(255,255,255,0.10)' }}
                >
                  产品<br/>专属词
                </td>
                <td className="text-[23px] font-bold text-center align-middle" style={{ color: C.colorTeal, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 4px' }}>
                  A系列
                </td>
                <td className="text-[22px] text-zinc-100 leading-snug align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 20px' }}>
                  7000元左右的壁纸电视推荐 · A系列壁纸电视值得买吗
                </td>
                <td className="text-center align-middle text-[20px] font-semibold text-zinc-200" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 12px' }}>
                  守住线上优势
                </td>
              </tr>
              {/* 产品专属词 · Q系列 */}
              <tr>
                <td className="text-[23px] font-bold text-center align-middle" style={{ color: C.colorTeal, borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '10px 4px' }}>
                  Q系列
                </td>
                <td className="text-[22px] text-zinc-100 leading-snug align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '10px 20px' }}>
                  附近哪里能看创维Q系列电视 · 高端画框电视去哪体验
                </td>
                <td className="text-center align-middle text-[20px] font-semibold text-zinc-200" style={{ borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '10px 12px' }}>
                  突出线下属性
                </td>
              </tr>

              {/* ───── 监测词 ───── */}
              <tr>
                <td
                  rowSpan={2}
                  className="text-[28px] font-black text-center align-middle"
                  style={{ color: C.colorSky, borderLeft: `4px solid ${C.colorSky}`, background: 'rgba(56,189,248,0.05)', borderBottom: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <span style={{ writingMode: 'vertical-rl', letterSpacing: '0.15em' }}>监测词</span>
                </td>
                <td colSpan={2} className="text-[23px] font-bold text-center align-middle" style={{ color: C.colorSky, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 4px' }}>
                  品类词
                </td>
                <td className="text-[22px] text-zinc-100 leading-snug align-middle" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 20px' }}>
                  创维电视算一线品牌吗 · 创维电视质量怎么样
                </td>
                <td className="text-center align-middle text-[20px] font-semibold text-zinc-300" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 12px' }}>
                  持续监测
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="text-[23px] font-bold text-center align-middle" style={{ color: C.colorSky, padding: '10px 4px' }}>
                  产品专属词
                </td>
                <td className="text-[22px] text-zinc-100 leading-snug align-middle" style={{ padding: '10px 20px' }}>
                  创维壁纸电视A7H Pro怎么样 · 创维Q7E口碑评价
                </td>
                <td className="text-center align-middle text-[20px] font-semibold text-zinc-300" style={{ padding: '10px 12px' }}>
                  持续监测
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordStrategy.hideHeader = true;
