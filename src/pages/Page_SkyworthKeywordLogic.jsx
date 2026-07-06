import React, { useEffect, useRef } from 'react';
import SlideLayout from '../components/SlideLayout';

const OPT_CATEGORY_WORDS = ['壁纸电视品牌排行榜', '电视排行榜前十名'];

const OPT_PRODUCT_WORDS = [
  '销量最好的壁纸电视推荐',
  '入门级高品质壁纸电视推荐',
  '7000块钱左右的壁纸电视推荐',
  '音画升级款壁纸电视推荐',
  '一万块钱左右的壁纸电视推荐',
  '有没有适合线上直接买的高性价比壁纸电视？',
  '顶配旗舰款壁纸电视推荐',
  '1.5万块钱左右的壁纸电视推荐',
  '高端体验款壁纸电视推荐？',
  '一万左右在线下能体验的壁纸电视推荐',
  '实用店体验的高端壁纸电视推荐？',
  '分体影院壁纸电视推荐',
  '2万左右在线下能体验的壁纸电视推荐',
];

const CARD_X = 1060;
const CARD_W = 200;

const OPT_CAT_TOP = 20;
const OPT_CAT_H = 78;

// 将优化专属词卡片下移至 280px，使其垂直居中对齐 170-470px 的列表区域 (Y中心 320px)
const OPT_PROD_TOP = 280;
const OPT_PROD_H = 78;

const MON_CAT_TOP = 480;
const MON_CAT_H = 78;

const MON_PROD_TOP = 580;
const MON_PROD_H = 78;

// 调整产品专属词列表的起始高度为 170px，与品类词列表 (高度78px) 之间拉开 72px 间距，消除混淆
const OPT_PROD_LIST_TOP = 170;
const OPT_PROD_LIST_H = 300;

const midY = (top, h) => top + h / 2;

const CURVES = [
  // 左侧面板 (X=320) 到 创维词条 (X=450)
  { pts: [320, 397, 360, 397, 410, 397, 450, 397], tone: 'white', opacity: 0.78 },
  // 创维词条 (X=690) 到 优化词 (X=800)
  { pts: [690, 397, 730, 397, 760, 180, 800, 180], tone: 'blue', opacity: 0.85 },
  // 创维词条 (X=690) 到 监测词 (X=800)
  { pts: [690, 397, 730, 397, 760, 580, 800, 580], tone: 'blue', opacity: 0.85 },
  
  // 优化词 (X=980) 到 品类词卡片 (X=1060, Y=59). 控制点从1080调整为1040以防越界进入卡片内部
  { pts: [980, 180, 1020, 180, 1040, midY(OPT_CAT_TOP, OPT_CAT_H), CARD_X, midY(OPT_CAT_TOP, OPT_CAT_H)], tone: 'blue', opacity: 0.9 },
  // 优化词 (X=980) 到 产品专属词卡片 (X=1060, Y=319)
  { pts: [980, 180, 1020, 180, 1040, midY(OPT_PROD_TOP, OPT_PROD_H), CARD_X, midY(OPT_PROD_TOP, OPT_PROD_H)], tone: 'blue', opacity: 0.9 },
  // 监测词 (X=980) 到 品类词卡片 (X=1060, Y=519)
  { pts: [980, 580, 1020, 580, 1040, midY(MON_CAT_TOP, MON_CAT_H), CARD_X, midY(MON_CAT_TOP, MON_CAT_H)], tone: 'blue', opacity: 0.9 },
  // 监测词 (X=980) 到 产品专属词卡片 (X=1060, Y=619)
  { pts: [980, 580, 1020, 580, 1040, midY(MON_PROD_TOP, MON_PROD_H), CARD_X, midY(MON_PROD_TOP, MON_PROD_H)], tone: 'blue', opacity: 0.9 },

  // 从卡片实际右边缘 (X=1260) 连接到外部具体词条示例列表 (X=1300)
  { pts: [1260, midY(OPT_CAT_TOP, OPT_CAT_H), 1270, midY(OPT_CAT_TOP, OPT_CAT_H), 1290, midY(OPT_CAT_TOP, OPT_CAT_H), 1300, midY(OPT_CAT_TOP, OPT_CAT_H)], tone: 'blue', opacity: 0.7 },
  { pts: [1260, midY(OPT_PROD_TOP, OPT_PROD_H), 1270, midY(OPT_PROD_TOP, OPT_PROD_H), 1290, midY(OPT_PROD_LIST_TOP, OPT_PROD_LIST_H), 1300, midY(OPT_PROD_LIST_TOP, OPT_PROD_LIST_H)], tone: 'blue', opacity: 0.7 },
  { pts: [1260, midY(MON_CAT_TOP, MON_CAT_H), 1270, midY(MON_CAT_TOP, MON_CAT_H), 1290, midY(MON_CAT_TOP, MON_CAT_H), 1300, midY(MON_CAT_TOP, MON_CAT_H)], tone: 'blue', opacity: 0.7 },
  { pts: [1260, midY(MON_PROD_TOP, MON_PROD_H), 1270, midY(MON_PROD_TOP, MON_PROD_H), 1290, midY(MON_PROD_TOP, MON_PROD_H), 1300, midY(MON_PROD_TOP, MON_PROD_H)], tone: 'blue', opacity: 0.7 },
];

function drawRibbonCurve(ctx, [x0, y0, cx1, cy1, cx2, cy2, x1, y1], tone, opacity) {
  const glow = tone === 'white' ? 'rgba(255,255,255,0.35)' : 'rgba(59,130,246,0.45)';
  const core = tone === 'white' ? 'rgba(255,255,255,0.88)' : '#60A5FA';

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x1, y1);
  ctx.strokeStyle = glow;
  ctx.lineWidth = 22;
  ctx.globalAlpha = opacity * 0.55;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x1, y1);
  ctx.strokeStyle = core;
  ctx.lineWidth = 12;
  ctx.globalAlpha = opacity;
  ctx.stroke();

  ctx.globalAlpha = 1;
}

function FlowRibbons() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    CURVES.forEach((curve) => drawRibbonCurve(ctx, curve.pts, curve.tone, curve.opacity));
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1840}
      height={795}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden
    />
  );
}

// TerminalCard: 将“品类词”和“产品专属词”装在框框内
function TerminalCard({ title, top, height }) {
  return (
    <div
      className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl flex items-center justify-center shadow-lg z-10 hover:border-zinc-700 transition-colors"
      style={{ left: `${CARD_X}px`, top: `${top}px`, width: `${CARD_W}px`, height: `${height}px` }}
    >
      <span className="text-[24px] font-bold text-white font-['MiSans'] leading-none">
        {title}
      </span>
    </div>
  );
}

// KeywordsList: 具体的词条示例列表放在外面 (无框框，添加彩色 bullet 小点进一步做分类区隔)
function KeywordsList({ keywords = [], top, height, bulletColor = '#3B82F6' }) {
  return (
    <div
      className="absolute flex items-center z-10"
      style={{ left: '1300px', top: `${top}px`, width: '510px', height: `${height}px` }}
    >
      {keywords.length > 0 ? (
        <ul className="flex-1 flex flex-col gap-1.5 list-none m-0 p-0 justify-center">
          {keywords.map((word) => (
            <li key={word} className="text-[20px] text-zinc-300 font-['MiSans'] leading-[24px] flex items-baseline gap-2">
              <span className="text-[14px] shrink-0" style={{ color: bulletColor }}>•</span>
              <span className="truncate">{word}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex-1 flex items-center">
          <span className="text-[20px] text-zinc-600 font-['MiSans']">—</span>
        </div>
      )}
    </div>
  );
}

export default function Page_SkyworthKeywordLogic() {
  return (
    <SlideLayout title="词条分类逻辑">
      <div className="absolute left-0 top-0 w-[1840px] select-none" style={{ height: '795px' }}>
        <FlowRibbons />

        {/* 左侧“无体系词条”面板 - 仅展示分类标签，不列举具体词条例子 */}
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl shadow-lg z-10 overflow-hidden"
          style={{ left: '0px', top: '0px', width: '320px', height: '795px' }}
        >
          <div className="px-6 py-4 border-b border-zinc-800/80">
            <span className="text-[30px] font-bold text-zinc-500 font-['MiSans']">无体系词条</span>
          </div>
          <div className="flex flex-col gap-8 p-6 justify-center h-[calc(100%-68px)]">
            {['品牌词', '原形词', '产品词', '竞品词'].map((word) => (
              <div 
                key={word} 
                className="border border-zinc-800 rounded-2xl py-6 px-4 flex items-center justify-center bg-zinc-900/20 shadow-md hover:border-zinc-700 transition-colors"
              >
                <span className="text-[34px] font-bold text-zinc-300 font-['MiSans']">{word}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 创维词条 */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-3xl flex flex-col justify-center items-center shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10 border-blue-900/50"
          style={{ left: '450px', top: '347px', width: '240px', height: '100px' }}
        >
          <h3 className="text-[38px] font-black text-white font-['MiSans'] tracking-wider text-center leading-none">
            创维词条
          </h3>
        </div>

        {/* 优化词 */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] z-10"
          style={{ left: '800px', top: '130px', width: '180px', height: '100px' }}
        >
          <h4 className="text-[36px] font-extrabold text-white font-['MiSans'] text-center leading-none">优化词</h4>
        </div>

        {/* 监测词 */}
        <div
          className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] z-10"
          style={{ left: '800px', top: '530px', width: '180px', height: '100px' }}
        >
          <h4 className="text-[36px] font-extrabold text-white font-['MiSans'] text-center leading-none">监测词</h4>
        </div>

        {/* 优化词分支：品类词和产品专属词放在框里 (height=78)，具体词条放在外面 (KeywordsList) */}
        {/* 用蓝色小点标识品类词示例，用青色小点标识产品专属词示例，并在高度上留出 72px 显著空隙 */}
        <TerminalCard title="品类词" top={OPT_CAT_TOP} height={OPT_CAT_H} />
        <KeywordsList keywords={OPT_CATEGORY_WORDS} top={OPT_CAT_TOP} height={OPT_CAT_H} bulletColor="#3B82F6" />

        <TerminalCard title="产品专属词" top={OPT_PROD_TOP} height={OPT_PROD_H} />
        <KeywordsList keywords={OPT_PRODUCT_WORDS} top={OPT_PROD_LIST_TOP} height={OPT_PROD_LIST_H} bulletColor="#2DD4BF" />
        
        {/* 监测词分支：品类词和产品专属词放在框里 (height=78)，具体词条放在外面 (KeywordsList) */}
        <TerminalCard title="品类词" top={MON_CAT_TOP} height={MON_CAT_H} />
        <KeywordsList keywords={['创维电视算一线品牌吗']} top={MON_CAT_TOP} height={MON_CAT_H} bulletColor="#38BDF8" />

        <TerminalCard title="产品专属词" top={MON_PROD_TOP} height={MON_PROD_H} />
        <KeywordsList keywords={['创维壁纸电视A7H Pro怎么样']} top={MON_PROD_TOP} height={MON_PROD_H} bulletColor="#38BDF8" />
      </div>
    </SlideLayout>
  );
}
