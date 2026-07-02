import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthKeywordLogic() {
  // SVG ribbon coordinates
  // Left Master: center is around (330, 235)
  // Middle Upper (监测词): input center is around (450, 120)
  // Middle Lower (优化词): input center is around (450, 380)
  // Right Upper (监测目标): input center is around (900, 120)
  // Right Lower Upper (大品类): input center is around (900, 342)
  // Right Lower Lower (产品专属): input center is around (900, 507)

  return (
    <SlideLayout title="词条分类逻辑">
      {/* ── 顶部说明文字 (字号提升至 36px，大字号高阶展示，加粗白色强调) ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <p
          className="text-zinc-400 font-normal font-['MiSans'] leading-relaxed"
          style={{ fontSize: '36px', lineHeight: '52px' }}
        >
          数据不会混淆，每类词的目标也更清楚。我们既能从<strong className="text-white font-bold">整体上评估创维在壁纸电视大品类的竞争力</strong>，也能<strong className="text-white font-bold">细到每一款产品与购买场景</strong>，精准判断 AI 推荐是否准确。
        </p>
      </div>

      {/* ── 逻辑图画布区域 (下移至 top: 155px，防止与超大字号字幕重叠) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn"
        style={{ top: '155px', height: '620px' }}
      >
        {/* ==================== SVG 背景连线 (蓝色发光彩带) ==================== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <linearGradient id="blueRibbon" x1="330" y1="120" x2="900" y2="507" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#004CE5" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.85" />
            </linearGradient>
            <filter id="glow" filterUnits="userSpaceOnUse" x="0" y="0" width="1920" height="700">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines (Bezier Curves) */}
          {/* Left Master -> Middle Upper (监测词) */}
          <path
            d="M 330 235 C 390 235, 390 120, 450 120"
            fill="none"
            stroke="url(#blueRibbon)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-75"
          />
          {/* Left Master -> Middle Lower (优化词) */}
          <path
            d="M 330 235 C 390 235, 390 380, 450 380"
            fill="none"
            stroke="url(#blueRibbon)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-75"
          />
          {/* Middle Upper -> Right Upper */}
          <path
            d="M 770 120 L 900 120"
            fill="none"
            stroke="url(#blueRibbon)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-75"
          />
          {/* Middle Lower -> Right Lower Upper */}
          <path
            d="M 770 380 C 830 380, 840 342, 900 342"
            fill="none"
            stroke="url(#blueRibbon)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-75"
          />
          {/* Middle Lower -> Right Lower Lower */}
          <path
            d="M 770 380 C 830 380, 840 507, 900 507"
            fill="none"
            stroke="url(#blueRibbon)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-75"
          />
        </svg>

        {/* ==================== 节点 1：左侧根节点 (Root Node) ==================== */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center items-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10"
          style={{ left: '50px', top: '135px', width: '280px', height: '200px' }}
        >
          <h3 className="text-[36px] font-black text-white font-['MiSans'] tracking-wider">
            创维词条
          </h3>
        </div>

        {/* ==================== 节点 2：中间第一分支 (监测词) ==================== */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10"
          style={{ left: '450px', top: '20px', width: '320px', height: '200px' }}
        >
          <h4 className="text-[32px] font-bold text-white font-['MiSans']">
            监测词
          </h4>
          <p className="text-[22px] text-zinc-400 leading-relaxed font-sans mt-3">
            核心看：AI 基础认知是否准确。不与优化词混合统计。
          </p>
        </div>

        {/* ==================== 节点 3：中间第二分支 (优化词) ==================== */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10"
          style={{ left: '450px', top: '280px', width: '320px', height: '200px' }}
        >
          <h4 className="text-[32px] font-bold text-white font-['MiSans']">
            优化词
          </h4>
          <p className="text-[22px] text-zinc-400 leading-relaxed font-sans mt-3">
            核心看：提及率、推荐位次、入选率的动态提升。
          </p>
        </div>

        {/* ==================== 节点 4：右侧监测词目标说明 ==================== */}
        <div
          className="absolute bg-[#0D0D10]/60 border border-zinc-850 rounded-3xl p-6 flex flex-col justify-between shadow-2xl z-10"
          style={{ left: '900px', top: '20px', width: '850px', height: '200px' }}
        >
          <div className="flex justify-between items-center border-b border-zinc-900 pb-3 mb-2">
            <span className="text-[22px] font-bold text-zinc-200 font-['MiSans']">创维品牌词 + 5款产品词</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[22px] text-zinc-300 font-sans leading-relaxed">
              主要考核 <span className="text-white font-bold">“信息、参数、价格、负面绑定、用户评价”</span> 是否准确客观。
            </p>
            <p className="text-[22px] text-zinc-400 font-sans mt-2 leading-relaxed">
              因为用户直接搜索创维或机型时 AI 必然会提及，故不考核提及率，重点在于清理错误信息。
            </p>
          </div>
        </div>

        {/* ==================== 节点 5：右侧优化词两大细分分类 ==================== */}
        <div
          className="absolute bg-[#0D0D10]/60 border border-zinc-850 rounded-3xl p-6 flex flex-col justify-start gap-4 shadow-2xl z-10"
          style={{ left: '900px', top: '260px', width: '850px', height: '330px' }}
        >
          {/* Sub-box 1: 大品类词 */}
          <div className="flex-1 flex flex-col justify-start border-b border-zinc-900/80 pb-3">
            <h5 className="text-[22px] font-bold text-white font-['MiSans'] mb-1.5">A. 壁纸电视大类词</h5>
            <p className="text-[22px] text-zinc-400 font-sans leading-relaxed">
              考核目标为进推荐池（任意一款上榜即算有效）。
            </p>
            <p className="text-[22px] text-white font-bold font-['MiSans'] mt-1">
              核心看：<span className="underline decoration-zinc-600 decoration-2 underline-offset-4">创维有没有被推荐进这个品类</span>
            </p>
          </div>

          {/* Sub-box 2: 产品专属词 */}
          <div className="flex-1 flex flex-col justify-start pt-1">
            <h5 className="text-[22px] font-bold text-white font-['MiSans'] mb-1.5">B. 产品专属词</h5>
            <p className="text-[22px] text-zinc-400 font-sans leading-relaxed">
              考核目标为精准对齐（搜专属场景必须推荐对应的特定型号，不可替代）。
            </p>
            <p className="text-[22px] text-white font-bold font-['MiSans'] mt-1">
              核心看：<span className="underline decoration-zinc-600 decoration-2 underline-offset-4">每一款产品有没有被 AI 正确理解和推荐</span>
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordLogic.hideHeader = true;
