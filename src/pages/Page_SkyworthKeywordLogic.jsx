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
  '有没有适合到店体验的高端壁纸电视？',
  '分体影院壁纸电视推荐',
  '2万左右在线下能体验的壁纸电视推荐',
];

const RIBBONS = [
  { d: 'M 400 398 C 440 398, 460 398, 500 398', tone: 'white' },
  { d: 'M 740 398 C 800 398, 820 148, 870 148', tone: 'blue' },
  { d: 'M 740 398 C 800 398, 820 648, 870 648', tone: 'blue' },
  { d: 'M 1110 148 C 1160 148, 1180 54, 1240 54', tone: 'blue' },
  { d: 'M 1110 148 C 1160 148, 1180 299, 1240 299', tone: 'blue' },
  { d: 'M 1110 648 C 1160 648, 1180 557, 1240 557', tone: 'blue' },
  { d: 'M 1110 648 C 1160 648, 1180 712, 1240 712', tone: 'blue' },
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

function KeywordTerminalCard({ title, sub, keywords, style, columns = 1 }) {
  return (
    <div
      className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl px-6 py-4 flex flex-col shadow-lg z-10 hover:border-zinc-700 transition-colors overflow-hidden"
      style={style}
    >
      <div className="flex items-center gap-3 shrink-0 mb-2">
        <span className="text-[30px] font-bold text-white font-['MiSans'] leading-none">{title}</span>
        {sub && (
          <span className="text-[16px] font-semibold text-blue-400/80 font-['MiSans'] leading-none">{sub}</span>
        )}
      </div>
      <div
        className={`flex-1 min-h-0 ${columns === 2 ? 'grid grid-cols-2 gap-x-5 gap-y-1.5 content-start' : 'flex flex-col gap-1.5'}`}
      >
        {keywords.map((word) => (
          <span key={word} className="text-[20px] text-zinc-300 font-['MiSans'] leading-snug">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

function FlowRibbons() {
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-20 overflow-visible"
      width="1840"
      height="795"
      viewBox="0 0 1840 795"
      aria-hidden
    >
      {RIBBONS.map(({ d, tone }) => {
        const glow = tone === 'white' ? 'rgba(255,255,255,0.22)' : 'rgba(59,130,246,0.38)';
        const core = tone === 'white' ? 'rgba(255,255,255,0.92)' : '#60A5FA';
        return (
          <g key={d}>
            <path d={d} fill="none" stroke={glow} strokeWidth="22" strokeLinecap="round" />
            <path d={d} fill="none" stroke={core} strokeWidth="12" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}

export default function Page_SkyworthKeywordLogic() {
  return (
    <SlideLayout title="词条分类逻辑">
      <div
        className="absolute left-0 top-0 w-[1840px] select-none animate-fadeIn"
        style={{ height: '795px' }}
      >
        <div
          className="absolute bg-[#0D0D10]/80 border border-zinc-800 rounded-2xl shadow-lg z-10 overflow-hidden"
          style={{ left: '0px', top: '0px', width: '400px', height: '795px' }}
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

        <KeywordTerminalCard
          title="品类词"
          sub="优化词"
          keywords={OPT_CATEGORY_WORDS}
          style={{ left: '1240px', top: '0px', width: '550px', height: '108px' }}
        />
        <KeywordTerminalCard
          title="产品专属词"
          sub="优化词"
          keywords={OPT_PRODUCT_WORDS}
          columns={2}
          style={{ left: '1240px', top: '118px', width: '550px', height: '362px' }}
        />
        <KeywordTerminalCard
          title="品类词"
          sub="监测词"
          keywords={['壁纸电视推荐']}
          style={{ left: '1240px', top: '500px', width: '550px', height: '108px' }}
        />
        <KeywordTerminalCard
          title="产品专属词"
          sub="监测词"
          keywords={['创维A10H壁纸电视价格？']}
          style={{ left: '1240px', top: '618px', width: '550px', height: '108px' }}
        />

        <FlowRibbons />
      </div>
    </SlideLayout>
  );
}

Page_SkyworthKeywordLogic.hideHeader = true;
