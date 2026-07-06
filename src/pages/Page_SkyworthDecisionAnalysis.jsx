import React, { useMemo, useRef, useState, useLayoutEffect } from 'react';
import SlideLayout from '../components/SlideLayout';
import analysisData from '../data/skyworthDecisionAnalysis.json';

const COLOR_MAP = {
  white: 'text-white',
  'zinc-200': 'text-zinc-200',
  'zinc-300': 'text-zinc-300',
  'zinc-350': 'text-zinc-300',
  'zinc-400': 'text-zinc-400',
  'zinc-450': 'text-zinc-400',
  'zinc-500': 'text-zinc-500',
  'zinc-550': 'text-zinc-500',
  'zinc-555': 'text-zinc-500',
  'zinc-600': 'text-zinc-600',
  'zinc-650': 'text-zinc-600',
  'zinc-700': 'text-zinc-700',
};

const WEIGHT_MAP = {
  black: 'font-black',
  bold: 'font-bold',
  semibold: 'font-semibold',
  normal: '',
};

// ─────────────────────────────────────────────────────────────
// 词云自动布局：按字号从大到小放置，螺旋搜索空位，矩形碰撞检测，
// 保证任何两个词（尤其是大词）之间留有间隙、绝不重叠。
// ─────────────────────────────────────────────────────────────

const CJK_RE = /[\u2E80-\u303F\u3400-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/;

function measureText(text, fontSize, weight) {
  let w = 0;
  for (const ch of text) {
    w += CJK_RE.test(ch) ? fontSize : fontSize * 0.58;
  }
  if (weight === 'black' || weight === 'bold') w *= 1.04;
  return { w, h: fontSize * 1.24 };
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

// 大词的起始锚点（占容器宽高的比例），刻意分散在四角与中心，
// 避免几个又大又亮的词挤在一起。
const BIG_WORD_ANCHORS = [
  [0.5, 0.46],
  [0.16, 0.3],
  [0.84, 0.34],
  [0.3, 0.76],
  [0.72, 0.74],
  [0.5, 0.14],
  [0.1, 0.66],
  [0.9, 0.68],
];

function layoutWordCloud(words, width, height, options = {}) {
  const { fontScale = 1.45, gap = 10, bigGap = 28 } = options;

  const sorted = [...words].sort((a, b) => b.size - a.size);
  const placedRects = [];
  const result = [];
  const GOLDEN = 0.618033988749895;

  sorted.forEach((word, i) => {
    const fontSize = word.size * fontScale;
    const { w: textW, h: textH } = measureText(word.text, fontSize, word.weight);
    const pad = word.size >= 20 ? bigGap : gap;

    // 起始点：前几个大词用分散锚点，其余用黄金比例序列均匀撒点
    let sx, sy;
    if (i < BIG_WORD_ANCHORS.length && word.size >= 18) {
      sx = BIG_WORD_ANCHORS[i][0] * width;
      sy = BIG_WORD_ANCHORS[i][1] * height;
    } else {
      sx = (((i + 1) * GOLDEN) % 1) * (width - textW) + textW / 2;
      sy = (((i + 1) * GOLDEN * GOLDEN * 7) % 1) * (height - textH) + textH / 2;
    }

    let pos = null;
    // 椭圆螺旋向外搜索空位（容器宽>高，纵向步进压扁）
    for (let t = 0; t < 5000; t++) {
      const r = 2 + t * 0.26;
      const a = i * 2.39996 + t * 0.32;
      const cx = sx + r * Math.cos(a);
      const cy = sy + r * Math.sin(a) * 0.6;
      const x = cx - textW / 2;
      const y = cy - textH / 2;
      if (x < 2 || y < 1 || x + textW > width - 2 || y + textH > height - 1) continue;
      const rect = { x: x - pad / 2, y: y - pad / 2, w: textW + pad, h: textH + pad };
      if (!placedRects.some((p) => rectsOverlap(rect, p))) {
        pos = { x, y };
        placedRects.push(rect);
        break;
      }
    }

    // 兜底：网格扫描找任意空位（理论上极少触发）
    if (!pos) {
      outer: for (let y = 1; y <= height - textH - 1; y += 6) {
        for (let x = 2; x <= width - textW - 2; x += 6) {
          const rect = { x: x - gap / 2, y: y - gap / 2, w: textW + gap, h: textH + gap };
          if (!placedRects.some((p) => rectsOverlap(rect, p))) {
            pos = { x, y };
            placedRects.push(rect);
            break outer;
          }
        }
      }
    }

    if (pos) {
      result.push({
        ...word,
        fontSize,
        textW,
        textH,
        cx: pos.x + textW / 2,
        cy: pos.y + textH / 2,
      });
    }
  });

  return result;
}

function wordSpanClasses(word, extra = '') {
  const shadowClass =
    word.weight === 'black' ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.12)] z-10' : '';
  return `select-none transition-all duration-300 hover:scale-110 cursor-default hover:text-[#004CE5] ${COLOR_MAP[word.color] || 'text-zinc-400'} ${WEIGHT_MAP[word.weight] || ''} ${shadowClass} ${extra}`;
}

function WordCloud({ words }) {
  const containerRef = useRef(null);
  const [bounds, setBounds] = useState(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () =>
      setBounds({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const laidOut = useMemo(() => {
    if (!bounds || bounds.w < 50 || bounds.h < 50) return [];
    return layoutWordCloud(words, bounds.w, bounds.h);
  }, [words, bounds]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden font-['MiSans']">
      {laidOut.map((word) => (
        <span
          key={word.text}
          className={wordSpanClasses(word, 'absolute origin-center')}
          style={{
            left: `${word.cx - word.textW / 2}px`,
            top: `${word.cy - word.textH / 2}px`,
            fontSize: `${word.fontSize}px`,
            lineHeight: `${word.fontSize * 1.24}px`,
            whiteSpace: 'nowrap',
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
}

export default function Page_SkyworthDecisionAnalysis() {
  const { headline, wordCloud } = analysisData;

  const chartData = useMemo(
    () => [...analysisData.chartData].sort((a, b) => b.value - a.value),
    []
  );

  const maxValue = Math.max(...chartData.map((d) => d.value), 1);
  const svgWidth = 920;
  const svgHeight = 440;
  const xMarginLeft = 72;
  const plotWidth = 820;
  const yMarginTop = 16;
  const plotHeight = 360;
  const yMax = Math.ceil(maxValue / 10) * 10 + 10;
  const scale = plotHeight / yMax;
  const yTicks = Array.from({ length: 5 }, (_, i) => Math.round((yMax / 4) * i));

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
      <div className="w-full h-full flex animate-fadeIn select-none">
        {/* 左侧：柱状图 + 词云 */}
        <div className="w-[980px] h-full flex flex-col pr-8 border-r border-white/[0.16] min-h-0">
          <h2
            className="text-white font-normal font-['MiSans'] shrink-0 mb-4"
            style={{ fontSize: '38px', lineHeight: '48px' }}
          >
            用户觉得<span className="text-blue-500 font-bold">"{headline.primaryReason}"</span>
            是流失的首要原因
            <span className="text-zinc-500 text-[28px] ml-2">（{headline.primaryPercent % 1 === 0 ? headline.primaryPercent : headline.primaryPercent.toFixed(1)}%）</span>
          </h2>

          {/* 柱状图 */}
          <div className="shrink-0 mb-4">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#59B2FF" />
                  <stop offset="100%" stopColor="#1A75FF" />
                </linearGradient>
              </defs>

              {yTicks.map((val) => {
                const y = yMarginTop + plotHeight - val * scale;
                return (
                  <g key={val}>
                    <line
                      x1={xMarginLeft}
                      y1={y}
                      x2={xMarginLeft + plotWidth}
                      y2={y}
                      stroke={val === 0 ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)'}
                      strokeWidth={val === 0 ? '1.5' : '1'}
                      strokeDasharray={val === 0 ? '0' : '4 4'}
                    />
                    <text
                      x={xMarginLeft - 12}
                      y={y}
                      fill="#71717a"
                      fontSize="16"
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

              {chartData.map((d, i) => {
                const bandWidth = plotWidth / chartData.length;
                const barWidth = 56;
                const barX = xMarginLeft + i * bandWidth + (bandWidth - barWidth) / 2;
                const barHeight = d.value * scale;
                const barY = yMarginTop + plotHeight - barHeight;
                const xCenter = barX + barWidth / 2;
                const isHighlight = d.highlight || d.label === headline.primaryReason;

                return (
                  <g key={d.label} className="transition-all duration-300 hover:opacity-90">
                    <path
                      d={getRoundedTopBarPath(barX, barY, barWidth, barHeight, 6)}
                      fill={isHighlight ? 'url(#blueGrad)' : 'rgba(255, 255, 255, 0.15)'}
                    />
                    <text
                      x={xCenter}
                      y={barY - 10}
                      fill={isHighlight ? '#60A5FA' : '#A1A1AA'}
                      fontSize="18"
                      fontWeight="900"
                      textAnchor="middle"
                      fontFamily="MiSans, sans-serif"
                    >
                      {d.value % 1 === 0 ? d.value : d.value.toFixed(1)}%
                    </text>
                    <text
                      x={xCenter}
                      y={yMarginTop + plotHeight + 28}
                      fill={isHighlight ? '#FFFFFF' : '#71717a'}
                      fontSize="16"
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

          {/* 词云 */}
          <div className="flex-1 min-h-0 bg-[#09090b]/40 border border-zinc-800 rounded-2xl p-4 shadow-inner overflow-hidden">
            <WordCloud words={wordCloud} />
          </div>
        </div>

        {/* 右侧：策略转变对比 */}
        <div className="flex-1 h-full min-w-0 pl-10 flex flex-col justify-between animate-fadeIn select-none">
          <div className="mb-4 shrink-0">
            <h3 className="text-[36px] xl:text-[40px] font-black text-white mt-1 font-['MiSans']">
              策略转变
            </h3>
          </div>

          <div className="flex-1 flex flex-col justify-between my-2 gap-4">
            {/* 1. 上方卡片：试图证明“不贵” */}
            <div className="relative flex-1 flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] py-4 px-6 xl:py-5 xl:px-7 shadow-lg">
              {/* 银色指示条 */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-white/[0.24]" />
              <h4 className="text-[36px] xl:text-[40px] font-bold text-[#60A5FA] mb-2">之前：试图证明“不贵”</h4>
              <div className="flex flex-col gap-1.5">
                <p className="text-[20px] xl:text-[23px] text-zinc-400 leading-relaxed font-medium font-['MiSans']">
                  “ 提到壁纸艺术电视，很多人的第一反应都是‘太贵了’。
                </p>
                <p className="text-[20px] xl:text-[23px] text-zinc-400 leading-relaxed font-medium font-['MiSans']">
                  但如果跟 LG 等两三万的进口电视对比，万元级的创维其实极具<span className="text-white font-black">性价比</span>。
                </p>
                <p className="text-[20px] xl:text-[23px] text-zinc-400 leading-relaxed font-medium font-['MiSans']">
                  极致贴墙外观和声学系统，不管是外观还是体验，这笔投入完全是<span className="text-white font-black">物有所值</span>的。 ”
                </p>
              </div>
            </div>

            {/* 中间转换指示 */}
            <div className="flex items-center justify-center py-1.5 shrink-0">
              <div className="flex flex-col items-center gap-1">
                {/* 竖向渐变线 */}
                <div className="w-[2px] h-[30px] bg-gradient-to-b from-white/20 via-[#60A5FA]/60 to-[#60A5FA]" />
                {/* 明显的箭头三角 */}
                <svg className="w-[14px] h-[10px] text-[#60A5FA] fill-current" viewBox="0 0 14 10">
                  <path d="M0 0 L7 8 L14 0 Z" />
                </svg>
              </div>
            </div>

            {/* 2. 下方卡片：直接承认“小贵” */}
            <div className="relative flex-1 flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] py-4 px-6 xl:py-5 xl:px-7 shadow-lg">
              {/* 银色指示条 */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-white/[0.24]" />
              <h4 className="text-[36px] xl:text-[40px] font-bold text-[#60A5FA] mb-2">现在：直接承认“小贵”</h4>
              <div className="flex flex-col gap-1.5">
                <p className="text-[20px] xl:text-[23px] text-zinc-400 leading-relaxed font-medium font-['MiSans']">
                  “ 老实说，创维这款电视<span className="text-white font-black">不算便宜</span>，甚至比普通电视<span className="text-white font-black">贵出一截</span>。
                </p>
                <p className="text-[20px] xl:text-[23px] text-zinc-400 leading-relaxed font-medium font-['MiSans']">
                  因为它的溢价完全花在了极致贴墙的外观工艺，以及独立声学系统的用料上。
                </p>
                <p className="text-[20px] xl:text-[23px] text-zinc-400 leading-relaxed font-medium font-['MiSans']">
                  如果追求纯性价比，那我们建议你直接绕道；但如果对客厅美学有挑剔要求，那它完全值。 ”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthDecisionAnalysis.hideHeader = true;
