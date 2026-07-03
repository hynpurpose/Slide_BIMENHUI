import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthDecisionAnalysis() {
  const chartData = [
    { label: "价格高，不值", value: 60, highlight: true },
    { label: "开机广告影响体验", value: 15, highlight: false },
    { label: "系统卡顿不够流畅", value: 12, highlight: false },
    { label: "高端品牌认知弱", value: 8, highlight: false },
    { label: "售后安装维护顾虑", value: 5, highlight: false }
  ];

  // SVG dimensions
  const svgWidth = 900;
  const svgHeight = 440;

  // Margins
  const xMarginLeft = 80;
  const plotWidth = 760;
  const yMarginTop = 20;
  const plotHeight = 320;

  // Math helper
  const scale = plotHeight / 80; // Max Y is 80%

  const getRoundedTopBarPath = (x, y, w, h, rx) => {
    const radius = Math.min(rx, h);
    return `M ${x} ${y + radius} 
            Q ${x} ${y} ${x + radius} ${y} 
            L ${x + w - radius} ${y} 
            Q ${x + w} ${y} ${x + w} ${y + radius} 
            L ${x + w} ${y + h} 
            L ${x} ${y + h} Z`;
  };

  return (
    <SlideLayout title="创维壁纸电视用户决策分析">
      <div className="w-full h-full relative animate-fadeIn select-none">
        
        {/* ==================== 左侧：标题与柱状图 ==================== */}
        <div className="absolute left-0 top-0 w-[1000px] h-full flex flex-col justify-start py-2 pr-8 border-r border-zinc-800/80">
          
          {/* H2 Subtitle */}
          <h2
            className="text-white font-normal font-['MiSans'] mb-12"
            style={{ fontSize: '42px', lineHeight: '52px' }}
          >
            用户觉得<span className="text-blue-500 font-bold">“价格高，不值”</span>是流失的首要原因
          </h2>

          {/* Chart area */}
          <div className="w-full flex flex-col items-center mt-14">
            <span className="w-full text-center text-[24px] text-zinc-400 font-['MiSans'] font-bold tracking-wide mb-3 block">
              流失原因分布 (用户不买创维原因占比)
            </span>
            <div className="w-full flex items-center justify-center">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto overflow-visible">
                <defs>
                  {/* Highlight Blue Gradient */}
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#59B2FF" />
                    <stop offset="100%" stopColor="#1A75FF" />
                  </linearGradient>
                </defs>

                {/* Y Axis Grid Lines */}
                {[0, 20, 40, 60, 80].map((val) => {
                  const y = yMarginTop + plotHeight - val * scale;
                  return (
                    <g key={val}>
                      <line
                        x1={xMarginLeft}
                        y1={y}
                        x2={xMarginLeft + plotWidth}
                        y2={y}
                        stroke={val === 0 ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth={val === 0 ? "1.5" : "1"}
                        strokeDasharray={val === 0 ? "0" : "4 4"}
                      />
                      <text
                        x={xMarginLeft - 15}
                        y={y}
                        fill="#71717a"
                        fontSize="18"
                        fontFamily="MiSans, sans-serif"
                        fontWeight="bold"
                        textAnchor="end"
                        dominantBaseline="middle"
                      >
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Bars */}
                {chartData.map((d, i) => {
                  const bandWidth = plotWidth / 5;
                  const barWidth = 60;
                  const barX = xMarginLeft + i * bandWidth + (bandWidth - barWidth) / 2;

                  const barHeight = d.value * scale;
                  const barY = yMarginTop + plotHeight - barHeight;
                  const xCenter = barX + barWidth / 2;

                  return (
                    <g key={i} className="transition-all duration-300 hover:opacity-90">
                      {/* Bar Path */}
                      <path
                        d={getRoundedTopBarPath(barX, barY, barWidth, barHeight, 6)}
                        fill={d.highlight ? "url(#blueGrad)" : "rgba(255, 255, 255, 0.15)"}
                      />

                      {/* Percentage Value on Top of Bar */}
                      <text
                        x={xCenter}
                        y={barY - 12}
                        fill={d.highlight ? "#60A5FA" : "#A1A1AA"}
                        fontSize="20"
                        fontWeight="900"
                        textAnchor="middle"
                        fontFamily="MiSans, sans-serif"
                      >
                        {d.value}%
                      </text>

                      {/* X Axis Labels */}
                      <text
                        x={xCenter}
                        y={yMarginTop + plotHeight + 32}
                        fill={d.highlight ? "#FFFFFF" : "#71717a"}
                        fontSize="18"
                        fontFamily="MiSans, sans-serif"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {d.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ==================== 右侧：词云图区域 (向上抵满 content top) ==================== */}
        <div className="absolute left-[1080px] top-0 w-[760px] h-[795px] bg-[#09090b]/40 border border-zinc-800 rounded-3xl flex flex-col p-8 shadow-inner overflow-hidden">
          {/* 标题 */}
          <div className="border-b border-zinc-900 pb-4 mb-6 select-none">
            <span className="text-[14px] text-zinc-500 font-mono font-bold tracking-wider block">USER WISDOM WORD CLOUD</span>
            <h3 className="text-[28px] font-bold text-white mt-1 font-['MiSans']">消费者反馈词云图</h3>
          </div>

          {/* 词云布局容器 (手艺排版，极高密集度且不重叠) */}
          <div className="relative flex-grow w-full overflow-hidden select-none font-['MiSans']">
            {/* 核心关键词 - 价格高 (Massive Highlight) */}
            <span 
              className="absolute text-white font-black drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none z-10"
              style={{ left: '160px', top: '230px', fontSize: '74px', lineHeight: '84px' }}
            >
              价格高
            </span>

            {/* 核心关键词 - 不值 (Massive Highlight) */}
            <span 
              className="absolute text-zinc-200 font-black drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] select-none z-10"
              style={{ left: '140px', top: '350px', fontSize: '64px', lineHeight: '74px' }}
            >
              不值
            </span>

            {/* 大号次关键词 */}
            <span className="absolute text-zinc-200 font-bold tracking-wide" style={{ left: '80px', top: '170px', fontSize: '38px' }}>
              太贵了
            </span>
            <span className="absolute text-zinc-200 font-bold tracking-wide" style={{ left: '440px', top: '160px', fontSize: '34px' }}>
              性价比低
            </span>
            <span className="absolute text-zinc-300 font-extrabold tracking-wide" style={{ left: '280px', top: '30px', fontSize: '34px' }}>
              智商税？
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '300px', top: '95px', fontSize: '28px' }}>
              不如买普通电视
            </span>
            <span className="absolute text-zinc-350 font-bold" style={{ left: '260px', top: '460px', fontSize: '32px' }}>
              高端品牌认知弱
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '480px', top: '30px', fontSize: '24px' }}>
              非艺术人群无感
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '530px', top: '120px', fontSize: '26px' }}>
              溢价太夸张
            </span>
            <span className="absolute text-zinc-350 font-bold" style={{ left: '300px', top: '180px', fontSize: '22px' }}>
              不如买投影仪
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '40px', top: '220px', fontSize: '24px' }}>
              两倍的价格
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '20px', top: '300px', fontSize: '24px' }}>
              纯属外观党
            </span>
            <span className="absolute text-zinc-200 font-bold" style={{ left: '500px', top: '340px', fontSize: '26px' }}>
              性价比极低
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '180px', top: '500px', fontSize: '24px' }}>
              普通人智商税
            </span>
            <span className="absolute text-zinc-300 font-bold" style={{ left: '250px', top: '540px', fontSize: '22px' }}>
              屏幕反光
            </span>

            {/* 垂直放置的词 */}
            <span className="absolute text-zinc-400 font-semibold origin-center rotate-90" style={{ left: '-15px', top: '250px', fontSize: '24px' }}>
              厚度不对
            </span>
            <span className="absolute text-zinc-400 font-semibold origin-center -rotate-90" style={{ left: '410px', top: '270px', fontSize: '24px' }}>
              安装费贵
            </span>
            <span className="absolute text-zinc-500 origin-center rotate-90" style={{ left: '680px', top: '400px', fontSize: '20px' }}>
              售后差
            </span>
            <span className="absolute text-zinc-500 origin-center -rotate-90" style={{ left: '670px', top: '120px', fontSize: '22px' }}>
              画质一般
            </span>
            <span className="absolute text-zinc-500 origin-center rotate-90" style={{ left: '105px', top: '200px', fontSize: '20px' }}>
              偏贵
            </span>
            <span className="absolute text-zinc-500 origin-center -rotate-90" style={{ left: '650px', top: '320px', fontSize: '22px' }}>
              鸡肋
            </span>
            <span className="absolute text-zinc-500 origin-center rotate-90" style={{ left: '10px', top: '80px', fontSize: '18px' }}>
              太厚
            </span>
            <span className="absolute text-zinc-500 origin-center -rotate-90" style={{ left: '710px', top: '200px', fontSize: '20px' }}>
              无感
            </span>

            {/* 中号次要词 */}
            <span className="absolute text-zinc-400 font-semibold" style={{ left: '30px', top: '100px', fontSize: '26px' }}>
              开机广告
            </span>
            <span className="absolute text-zinc-400 font-semibold" style={{ left: '520px', top: '220px', fontSize: '28px' }}>
              系统卡顿
            </span>
            <span className="absolute text-zinc-350 font-semibold" style={{ left: '420px', top: '380px', fontSize: '28px' }}>
              音响噱头
            </span>
            <span className="absolute text-zinc-400 font-semibold" style={{ left: '460px', top: '430px', fontSize: '22px' }}>
              音响不值这钱
            </span>
            <span className="absolute text-zinc-450 font-semibold" style={{ left: '10px', top: '510px', fontSize: '22px' }}>
              不送挂架
            </span>

            {/* 小号点缀词 - 填补缝隙 */}
            <span className="absolute text-zinc-500" style={{ left: '160px', top: '110px', fontSize: '18px' }}>
              画质普通
            </span>
            <span className="absolute text-zinc-600" style={{ left: '220px', top: '175px', fontSize: '18px' }}>
              系统繁琐
            </span>
            <span className="absolute text-zinc-500" style={{ left: '600px', top: '80px', fontSize: '18px' }}>
              偏色
            </span>
            <span className="absolute text-zinc-650" style={{ left: '20px', top: '370px', fontSize: '18px' }}>
              塑料感
            </span>
            <span className="absolute text-zinc-600" style={{ left: '90px', top: '320px', fontSize: '16px' }}>
              接口少
            </span>
            <span className="absolute text-zinc-600" style={{ left: '620px', top: '310px', fontSize: '18px' }}>
              音量小
            </span>
            <span className="absolute text-zinc-500" style={{ left: '50px', top: '450px', fontSize: '20px' }}>
              做工一般
            </span>
            <span className="absolute text-zinc-600" style={{ left: '150px', top: '485px', fontSize: '22px' }}>
              卡顿
            </span>
            <span className="absolute text-zinc-600" style={{ left: '460px', top: '475px', fontSize: '20px' }}>
              设计鸡肋
            </span>
            <span className="absolute text-zinc-700" style={{ left: '40px', top: '540px', fontSize: '18px' }}>
              广告多
            </span>
            <span className="absolute text-zinc-600" style={{ left: '580px', top: '535px', fontSize: '18px' }}>
              遥控器难用
            </span>
            <span className="absolute text-zinc-500" style={{ left: '490px', top: '530px', fontSize: '20px' }}>
              运行内存小
            </span>
            <span className="absolute text-zinc-600" style={{ left: '600px', top: '170px', fontSize: '20px' }}>
              屏幕偏色
            </span>
            <span className="absolute text-zinc-550" style={{ left: '420px', top: '320px', fontSize: '18px' }}>
              哈曼卡顿虚标
            </span>
            <span className="absolute text-zinc-600" style={{ left: '20px', top: '150px', fontSize: '18px' }}>
              边框有缝隙
            </span>
            <span className="absolute text-zinc-555" style={{ left: '120px', top: '120px', fontSize: '18px' }}>
              系统臃肿
            </span>
            <span className="absolute text-zinc-500" style={{ left: '160px', top: '60px', fontSize: '20px' }}>
              广告多
            </span>
            <span className="absolute text-zinc-600" style={{ left: '240px', top: '140px', fontSize: '20px' }}>
              谁会买这个
            </span>
            <span className="absolute text-zinc-450" style={{ left: '480px', top: '480px', fontSize: '22px' }}>
              音质没区别
            </span>
            <span className="absolute text-zinc-555" style={{ left: '360px', top: '540px', fontSize: '18px' }}>
              退货麻烦
            </span>
            <span className="absolute text-zinc-650" style={{ left: '200px', top: '80px', fontSize: '16px' }}>
              发热厉害
            </span>
            <span className="absolute text-zinc-600" style={{ left: '550px', top: '70px', fontSize: '16px' }}>
              耗电高
            </span>
            <span className="absolute text-zinc-500" style={{ left: '560px', top: '290px', fontSize: '20px' }}>
              强迫症专享
            </span>
            <span className="absolute text-zinc-600" style={{ left: '20px', top: '400px', fontSize: '18px' }}>
              底座不送
            </span>
            <span className="absolute text-zinc-650" style={{ left: '600px', top: '480px', fontSize: '18px' }}>
              系统更新慢
            </span>
            <span className="absolute text-zinc-600" style={{ left: '80px', top: '480px', fontSize: '18px' }}>
              投屏卡顿
            </span>
            <span className="absolute text-zinc-500" style={{ left: '320px', top: '320px', fontSize: '20px' }}>
              塑料背板
            </span>
            <span className="absolute text-zinc-600" style={{ left: '630px', top: '220px', fontSize: '18px' }}>
              太重了
            </span>
            <span className="absolute text-zinc-650" style={{ left: '350px', top: '420px', fontSize: '16px' }}>
              独立低音炮
            </span>
            <span className="absolute text-zinc-600" style={{ left: '140px', top: '420px', fontSize: '18px' }}>
              音响很大
            </span>
            <span className="absolute text-zinc-555" style={{ left: '100px', top: '280px', fontSize: '18px' }}>
              开机巨慢
            </span>
            <span className="absolute text-zinc-650" style={{ left: '520px', top: '390px', fontSize: '16px' }}>
              遥控器廉价
            </span>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthDecisionAnalysis.hideHeader = true;
