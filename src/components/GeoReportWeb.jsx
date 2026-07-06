import React from 'react';

/**
 * GEO Web 系统界面复刻用的公共组件（浅色主题）。
 * 第 35-38 页不再放截图，而是用这些组件 + src/data/geoReport.json 直接渲染。
 */

/* 深色页面里包住白色系统界面的外框（与原截图卡片同款式） */
export function WebPanel({ children }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center min-h-0 pb-1">
      <div className="w-full h-full max-w-[1700px] bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col min-h-0">
        <div className="flex-1 bg-white rounded-xl overflow-hidden flex flex-col min-h-0 text-[#1f2937] font-sans text-left">
          {children}
        </div>
      </div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <div className="flex items-center gap-1.5 border border-[#e5e7eb] rounded-lg px-3 h-9 text-[14px] text-[#374151] bg-white whitespace-nowrap">
      {children}
    </div>
  );
}

const Caret = () => (
  <svg className="w-3.5 h-3.5 text-[#9ca3af]" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" clipRule="evenodd" />
  </svg>
);

/* 页面顶部：模块标题 + 筛选条（日期/平台/词条/目标产品），复刻 web 端顶栏 */
export function WebHeader({ title, meta, right = null }) {
  const fmtDate = (s) => {
    if (!s) return '';
    const [y, m, d] = s.split('-');
    return `${y}/${Number(m)}/${Number(d)}`;
  };
  return (
    <div className="shrink-0 px-6 pt-4 pb-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 min-w-0">
        <h2 className="text-[20px] font-bold text-[#111827] shrink-0">{title}</h2>
        <div className="flex items-center gap-2 min-w-0">
          <Pill>
            <svg className="w-4 h-4 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span className="text-[#6b7280]">日期</span>
            <span className="mx-1 text-[#e5e7eb]">|</span>
            <span className="font-medium">{fmtDate(meta.start_date)} - {fmtDate(meta.end_date)}</span>
            <Caret />
          </Pill>
          <Pill>
            <span className="text-[#6b7280]">平台</span>
            <span className="mx-1 text-[#e5e7eb]">|</span>
            <span className="font-medium">全部</span>
            <Caret />
          </Pill>
          <Pill>
            <span className="text-[#6b7280]">词条</span>
            <span className="mx-1 text-[#e5e7eb]">|</span>
            <span className="font-medium">全部</span>
            <Caret />
          </Pill>
          <Pill>
            <svg className="w-4 h-4 text-[#3b82f6]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
            </svg>
            <span className="text-[#3b82f6] font-medium">目标产品</span>
            <span className="mx-1 text-[#e5e7eb]">|</span>
            <span className="font-semibold">{meta.target_product}</span>
          </Pill>
        </div>
      </div>
      {right}
    </div>
  );
}

export const fmtPct = (v) => (v === null || v === undefined ? '--' : `${Number(v).toFixed(1)}%`);
export const fmtPos = (v) => (v === null || v === undefined || Number(v) === 0 ? 'NO. --' : `NO. ${Number(v).toFixed(1)}`);
export const fmtDay = (s) => {
  if (!s) return '-';
  const d = new Date(s);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

/* 排名徽章：1 金 / 2 银 / 3 铜 / 其余灰字 */
export function RankBadge({ rank }) {
  const styles = {
    1: 'bg-gradient-to-br from-amber-300 to-amber-500 text-white',
    2: 'bg-gradient-to-br from-zinc-300 to-zinc-400 text-white',
    3: 'bg-gradient-to-br from-orange-300 to-orange-400 text-white',
  };
  if (styles[rank]) {
    return (
      <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center text-[13px] font-bold ${styles[rank]}`}>
        {rank}
      </span>
    );
  }
  return <span className="inline-flex w-6 h-6 items-center justify-center text-[14px] text-[#6b7280] font-semibold">{rank}</span>;
}

/* 简单 SVG 折线图（单条线，浅色坐标网格） */
export function LineChart({ points, width = 760, height = 300, unit = '%', color = '#3b82f6', yMaxPad = 1.15 }) {
  const values = points.map((p) => p.value).filter((v) => v !== null && v !== undefined);
  const maxV = values.length ? Math.max(...values) * yMaxPad : 100;
  const minV = 0;
  const padL = 48;
  const padR = 16;
  const padT = 12;
  const padB = 30;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;
  const n = points.length;
  const x = (i) => padL + (n <= 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v) => padT + plotH - ((v - minV) / (maxV - minV || 1)) * plotH;
  const ticks = Array.from({ length: 5 }, (_, i) => minV + ((maxV - minV) / 5) * (i + 1));
  const path = points
    .map((p, i) => (p.value === null || p.value === undefined ? null : `${x(i)},${y(p.value)}`))
    .filter(Boolean)
    .join(' ');
  const maxLabels = 8;
  const step = Math.max(1, Math.ceil(n / maxLabels));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={padL} x2={width - padR} y1={y(t)} y2={y(t)} stroke="#f3f4f6" strokeWidth="1" />
          <text x={padL - 8} y={y(t) + 4} textAnchor="end" fontSize="12" fill="#9ca3af">
            {Number(t.toFixed(1))}{unit}
          </text>
        </g>
      ))}
      <line x1={padL} x2={width - padR} y1={y(minV)} y2={y(minV)} stroke="#e5e7eb" strokeWidth="1" />
      {points.map((p, i) =>
        i % step === 0 ? (
          <text key={i} x={x(i)} y={height - 8} textAnchor="middle" fontSize="12" fill="#9ca3af">
            {p.label}
          </text>
        ) : null
      )}
      {path && <polyline points={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />}
      {points.map((p, i) =>
        p.value === null || p.value === undefined ? null : (
          <circle key={i} cx={x(i)} cy={y(p.value)} r="3.5" fill="#fff" stroke={color} strokeWidth="2" />
        )
      )}
    </svg>
  );
}
