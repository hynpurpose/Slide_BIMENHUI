import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';
import { C, GeoWebFrame, HelpIcon, LogoWithFallback, AnalysisPanelDark, HlD } from '../components/GeoWebUI';

/**
 * 优化词引用源 · HTML 复刻版。
 * 样式移植自 GEO Web 源码：
 *   - Top引用数据区块 features/apps/components/platform-data.tsx + components/chart-section-split.tsx
 *   - 引用文章列表 features/apps/components/article-list.tsx
 *   - 排名徽章 components/rank-badge.tsx（金 #FFD700 / 银 #E0E0E0 / 铜 #F5C28C）
 * 数据来源 /api/citations/stats 与 /api/citations/articles，见 scripts/fetch-geo-report.mjs。
 */

/* platform-data.tsx 甜甜圈色板；「其他」固定 #888888 */
const PIE_COLORS = ['#F444B9', '#F43130', '#8B43F4', '#45D1F4', '#14B462', '#F4870A'];
const OTHER_COLOR = '#888888';

/* 复刻 recharts Pie：innerRadius 78% / outerRadius 90% / cornerRadius 50%（圆头端点）/ paddingAngle 2 / 从正上方顺时针 */
function DonutChart({ data, size = 210 }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42; // (78% + 90%) / 2 的中线半径
  const strokeW = size * 0.06;
  const capDeg = ((strokeW / 2) / r) * (180 / Math.PI); // 圆头端帽占用的角度
  const padDeg = 2;

  const pt = (deg) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.sin(rad), cy - r * Math.cos(rad)];
  };

  let cursor = 0; // 从正上方开始，顺时针累计角度
  const arcs = data.map((d) => {
    const sweep = (d.value / 100) * 360;
    let a0 = cursor + padDeg / 2 + capDeg;
    let a1 = cursor + sweep - padDeg / 2 - capDeg;
    if (a1 <= a0) { const mid = cursor + sweep / 2; a0 = mid - 0.5; a1 = mid + 0.5; }
    cursor += sweep;
    const [x0, y0] = pt(a0);
    const [x1, y1] = pt(a1);
    return { path: `M${x0},${y0} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1},${y1}`, color: d.color };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
      {arcs.map((a, i) => (
        <path key={i} d={a.path} fill="none" stroke={a.color} strokeWidth={strokeW} strokeLinecap="round" />
      ))}
    </svg>
  );
}

/* rank-badge.tsx：前三名金银铜圆形徽章，4名起纯文字 */
function RankBadge({ rank }) {
  const colors = { 1: '#FFD700', 2: '#E0E0E0', 3: '#F5C28C' };
  if (colors[rank]) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold" style={{ backgroundColor: colors[rank], color: '#1f2937' }}>
        {rank}
      </div>
    );
  }
  return <div className="flex h-7 w-7 items-center justify-center text-sm font-medium" style={{ color: C.mutedFg }}>{rank}</div>;
}

export function Page_SkyworthReport_OptSourcesHtml() {
  const { meta, citations } = report;

  const topPlatforms = citations.platform_stats.slice(0, 5);
  const totalShare = topPlatforms.reduce((s, p) => s + (p.share ?? 0), 0);
  const otherShare = Math.max(0, Math.round((100 - totalShare) * 10) / 10);
  const pieData = [
    ...topPlatforms.map((p, i) => ({ name: p.platform_name, value: p.share ?? 0, color: PIE_COLORS[i % PIE_COLORS.length] })),
    ...(otherShare > 0 ? [{ name: '其他', value: otherShare, color: OTHER_COLOR }] : []),
  ];
  const best = topPlatforms[0];

  const articles = citations.articles.slice(0, 3);

  const top5Sum = citations.platform_stats.slice(0, 5).reduce((s, p) => s + (p.share ?? 0), 0);
  const mentionedCount = citations.articles.filter((a) => a.has_target_product).length;
  const analysisPoints = [
    <>整体被引率 <HlD>{citations.citation_rate}%</HlD>，{citations.total_conversations} 轮对话累计触发 <HlD>{citations.total_citations.toLocaleString()}</HlD> 次引用，创维内容已被 AI 大规模采信。</>,
    <>来源高度分散：Top5 平台合计仅 <HlD>{top5Sum.toFixed(1)}%</HlD>，头部「{best?.platform_name}」也只占 <HlD>{best ? Number(best.share).toFixed(1) : '-'}%</HlD>，宜多渠道并行布局。</>,
    <>生态呈<HlD>「垂直科技媒体 + 社交种草」双轮</HlD>；Top10 引用文章 <HlD>{mentionedCount} 篇</HlD>正面提及创维，可作定向补投切口。</>,
  ];

  const card = 'flex h-full flex-col rounded-xl border bg-white shadow-sm';
  const th = 'h-10 px-4 text-start align-middle font-medium whitespace-nowrap';

  return (
    <SlideLayout fullBleed>
      <GeoWebFrame
        slideTitle="优化词 · 引用源分析"
        pageTitle="引用来源"
        meta={meta}
        zoom={0.82}
        analysis={<AnalysisPanelDark title="引用源洞察" subtitle="创维 · 品类优化词" points={analysisPoints} />}
      >
        {/* Top引用数据（chart-section-split.tsx） */}
        <div className="space-y-3">
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-bold tracking-tight" style={{ color: C.fg }}>Top引用数据</h2>
            <HelpIcon />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* 左卡：引用来源分布 */}
            <div className="flex flex-col gap-2">
              <span className="text-sm" style={{ color: C.itemTitle }}>目标词条引用来源分布</span>
              <div className={card} style={{ borderColor: C.border }}>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-sm" style={{ color: C.mutedFg }}>引用率最高的平台</span>
                  <div className="mt-1 flex items-center gap-2">
                    <LogoWithFallback src={best?.logo_url} alt={best?.platform_name} className="size-5 rounded object-contain" />
                    <span className="text-lg font-semibold" style={{ color: C.fg }}>{best?.platform_name}:</span>
                    <span className="text-lg" style={{ color: C.fg }}>{best ? `${Number(best.share).toFixed(1)}%` : '-'}</span>
                  </div>
                  {/* 甜甜圈 + 点阵背景（features/apps/style.css .dot-background） */}
                  <div className="relative flex flex-1 items-center justify-center py-2">
                    <div
                      className="absolute inset-x-0 top-0 h-full"
                      style={{ backgroundImage: 'radial-gradient(#f5f5f5 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />
                    <div className="relative"><DonutChart data={pieData} size={124} /></div>
                  </div>
                  {/* 图例：彩色勾选块 + 平台名 */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                    {pieData.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="flex size-4 items-center justify-center rounded text-white" style={{ backgroundColor: d.color }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-sm" style={{ color: C.mutedFg }}>{d.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 右卡：高频引用平台榜单 */}
            <div className="flex flex-col gap-2">
              <span className="text-sm" style={{ color: C.itemTitle }}>目标词条高频引用平台榜单</span>
              <div className={card} style={{ borderColor: C.border }}>
                <div className="flex flex-1 flex-col p-4">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b" style={{ borderColor: C.border }}>
                        <th className={`${th} w-[60px]`}></th>
                        <th className={th} style={{ color: C.fg }}>平台名称</th>
                        <th className={`${th} text-right`} style={{ color: C.fg }}>引用率</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPlatforms.map((p, i) => (
                        <tr key={i} className="border-b last:border-0" style={{ borderColor: C.border }}>
                          <td className="w-10 px-4 py-2 align-middle"><RankBadge rank={i + 1} /></td>
                          <td className="px-4 py-2 align-middle">
                            <div className="flex items-center gap-2">
                              <LogoWithFallback src={p.logo_url} alt={p.platform_name} className="size-4 rounded object-contain" fallbackSize={16} />
                              <span className="font-medium" style={{ color: C.fg }}>{p.platform_name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-right align-middle" style={{ color: C.fg }}>
                            {p.share === null ? '-' : `${Number(p.share).toFixed(1)}%`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end pt-3">
                    <button
                      type="button"
                      className="rounded-lg border bg-white px-6 py-1 text-sm font-medium shadow-sm"
                      style={{ borderColor: C.border, color: C.fg }}
                    >
                      展开
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 引用文章列表（article-list.tsx） */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold tracking-tight" style={{ color: C.fg }}>引用文章列表</h2>
          <div className="overflow-hidden rounded-md border" style={{ borderColor: C.border }}>
            <table className="w-full caption-bottom text-sm">
              <thead style={{ backgroundColor: 'rgba(241,245,249,0.5)' }}>
                <tr className="border-b" style={{ borderColor: C.border }}>
                  <th className={`${th} w-[60px]`}></th>
                  <th className={th} style={{ color: C.fg }}>文章标题</th>
                  <th className={`${th} w-[170px] text-center`} style={{ color: C.fg }}>目标产品是否提及</th>
                  <th className={`${th} w-[110px] text-center`} style={{ color: C.fg }}>总引用次数</th>
                  <th className={`${th} w-[110px] text-center`} style={{ color: C.fg }}>平均引用次数</th>
                  <th className={`${th} w-[80px] text-center`} style={{ color: C.fg }}>来源</th>
                  <th className={`${th} w-[100px] text-center`} style={{ color: C.fg }}>文章链接</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a, i) => (
                  <tr key={i} className="border-b last:border-0" style={{ borderColor: C.border }}>
                    <td className="px-4 py-2 align-middle"><RankBadge rank={i + 1} /></td>
                    <td className="px-4 py-2 align-middle">
                      <div className="flex flex-col gap-0.5">
                        <span className="block max-w-[550px] truncate text-sm font-medium leading-tight" style={{ color: C.fg }}>
                          {a.title.length > 50 ? `${a.title.slice(0, 50)}...` : a.title}
                        </span>
                        <span className="block max-w-[450px] truncate text-xs" style={{ color: C.mutedFg }}>{a.link_url}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center align-middle">
                      <span
                        className="inline-block px-3 py-0.5 text-sm font-medium"
                        style={a.has_target_product
                          ? { backgroundColor: 'rgba(21,180,98,0.25)', color: '#15B462', borderRadius: 7 }
                          : { backgroundColor: 'rgba(244,49,49,0.25)', color: '#F43131', borderRadius: 7 }}
                      >
                        {a.has_target_product ? '是' : '否'}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center align-middle" style={{ color: C.fg }}>{a.total_citations}</td>
                    <td className="px-4 py-2 text-center align-middle" style={{ color: C.fg }}>
                      {a.avg_citations === null ? '-' : Number(a.avg_citations).toFixed(1)}
                    </td>
                    <td className="px-4 py-2 align-middle">
                      <div className="mx-auto flex size-[22px] items-center justify-center rounded-full" style={{ backgroundColor: C.muted }}>
                        <LogoWithFallback src={a.logo_url} alt={a.platform_name} title={a.platform_name} className="size-[22px] rounded-full object-contain" fallbackSize={14} />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center align-middle">
                      <span
                        className="inline-flex h-8 items-center rounded-md border bg-white px-3 text-sm font-medium shadow-xs"
                        style={{ borderColor: C.border, color: C.fg }}
                      >
                        查看
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </GeoWebFrame>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptSourcesHtml.hideHeader = true;
