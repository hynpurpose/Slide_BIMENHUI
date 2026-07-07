import React from 'react';
import SlideLayout from '../components/SlideLayout';
import rawRows from '../data/speakWithActionsCompareTop20.json';

/* 排序：投放前「未提及」的行全部排在前面，组内保持原有顺序（stable sort）。
   正好 10 条未提及 → 第一页全是新增提及，第二页全是名次上升 */
const rows = [...rawRows].sort((a, b) => (a.base.m ? 1 : 0) - (b.base.m ? 1 : 0));

/**
 * 用行动说话 · 投放效果对照（HTML 复刻版，每页 10 行）。
 * 样式逐行移植自 GEO_admin 的 p304-315-top20.html
 * （生成脚本 ~/Code/GEO_admin/GEO/scripts/_gen-p304-315-top20-html.js），
 * 仅按 1920 版面放大字号（zoom），并让表格行高均分撑满白色边框。
 */

const ROWS_PER_PAGE = 10;

/* p304-315-top20.html <style> 移植，选择器加 .swa-cmp 前缀；
   为适配 1920 版面整体放大字号（表头/词性/词条/平台/文章列），列宽同步加宽，
   table 增加 height:100% 让 10 行均分高度，避免底部留白 */
const CSS = `
.swa-cmp { font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif; background: #fff; color: #1f2329; font-size: 16px; }
.swa-cmp table { width: 100%; height: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 0; background: #fff; border: 1px solid #e8eaee; border-radius: 10px; overflow: hidden; }
.swa-cmp thead th { background: #fafbfc; text-align: left; padding: 10px 12px; font-size: 18px; color: #646a73; font-weight: 500; border-bottom: 1px solid #e8eaee; white-space: nowrap; }
.swa-cmp thead th .thsub { display: block; font-size: 13px; color: #a0a5ad; font-weight: 400; line-height: 1.4; }
.swa-cmp tbody td { padding: 8px 12px; border-bottom: 1px solid #f0f1f4; vertical-align: middle; overflow: hidden; font-size: 17px; }
.swa-cmp tbody tr:last-child td { border-bottom: none; }
.swa-cmp col.c-idx { width: 52px; } .swa-cmp col.c-type { width: 104px; } .swa-cmp col.c-plat { width: 116px; }
.swa-cmp col.c-rank { width: 132px; } .swa-cmp col.c-chg { width: 158px; }
.swa-cmp th.grp, .swa-cmp td.grp { text-align: center; background: #fbfcfe; }
.swa-cmp thead th.grp { background: #f5f8fc; }
.swa-cmp th.grp-l, .swa-cmp td.grp-l { border-left: 1px solid #eef1f6; }
.swa-cmp th.grp-r, .swa-cmp td.grp-r { border-right: 1px solid #eef1f6; }
.swa-cmp td.grp { padding-left: 6px; padding-right: 6px; }
.swa-cmp .entry { font-weight: 600; line-height: 1.45; font-size: 18px; }
.swa-cmp .ptag { display: inline-block; vertical-align: 1px; margin-left: 6px; padding: 0 7px; font-size: 13px; font-weight: 600; border-radius: 4px; background: #eef2f8; color: #47536b; border: 1px solid #dde4ef; }
.swa-cmp .mtag { display: inline-block; vertical-align: 1px; margin-left: 4px; padding: 0 6px; font-size: 13px; border-radius: 4px; background: #f7f8fa; color: #8a9099; border: 1px solid #eceef2; }
.swa-cmp .tag { display: inline-block; border-radius: 5px; padding: 2px 10px; font-size: 15px; white-space: nowrap; font-weight: 500; }
.swa-cmp .tag.t品类词 { background: #e8f3ff; color: #1958c9; }
.swa-cmp .tag.t产品专属词 { background: #f0f0f3; color: #5c6370; }
.swa-cmp .chg { font-weight: 600; font-size: 20px; white-space: nowrap; }
.swa-cmp .chg.持平 { color: #8a9099; font-weight: 400; }
.swa-cmp .chg.名次下降, .swa-cmp .chg.丢失提及 { color: #d63f3f; }
.swa-cmp .chg.持续未提及 { color: #b26a00; }
.swa-cmp .chg-badge { display: inline-block; padding: 3px 15px; border-radius: 999px; font-size: 19px; font-weight: 700; white-space: nowrap; line-height: 1.4; }
.swa-cmp .chg-badge.b-top { background: #0a7a4a; color: #fff; box-shadow: 0 1px 6px rgba(10,122,74,.35); }
.swa-cmp .chg-badge.b-top3 { background: #15b462; color: #fff; }
.swa-cmp .chg-badge.b-top5 { background: #52b896; color: #fff; }
.swa-cmp .chg-badge.b-new { background: #e2f6ec; color: #0a7a4a; }
.swa-cmp .chg-badge.b-up { background: #e8f3ff; color: #1958c9; }
.swa-cmp .chg-sub { display: block; font-size: 13px; font-weight: 400; color: #8a9099; margin-top: 3px; line-height: 1.2; }
.swa-cmp .rk { display: inline-block; font-weight: 700; font-variant-numeric: tabular-nums; font-size: 20px; color: #1f2329; line-height: 1.3; }
.swa-cmp .rk.top1 .rt { color: #0a7a4a; }
.swa-cmp .rk.miss { font-weight: 400; font-size: 20px; }
.swa-cmp .rk.miss .rt { color: #1f2329; }
.swa-cmp .arts .arts-box { display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
.swa-cmp .arts a { display: block; color: #2b5fd9; text-decoration: none; font-size: 16px; line-height: 25px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.swa-cmp .arts a:hover { text-decoration: underline; }
.swa-cmp .arts .ap { color: #8a9099; margin-right: 4px; }
.swa-cmp .arts .none { color: #c0c4cc; font-size: 16px; }
.swa-cmp .arts .more { color: #8a9099; font-size: 16px; line-height: 25px; }
`;

/* rkHtml：未提及 / 第 N 名（第 1 名标绿）/ 提及 */
function RankCell({ day }) {
  if (!day.m) return <span className="rk miss"><span className="rt">未提及</span></span>;
  const label = day.r ? `第 ${day.r} 名` : '提及';
  return <span className={`rk${day.r === 1 ? ' top1' : ''}`}><span className="rt">{label}</span></span>;
}

/* chgHtml：按到达名次分级（榜首 > 前三 > 前五 > 其他），小字注明来源 */
function ChangeCell({ x }) {
  const improved = x.change === '新增提及' || x.change === '名次上升';
  if (improved) {
    const sub = x.change === '新增提及' ? '此前未提及' : `上升 ${x.moveN} 名`;
    const baseR = x.base.m ? x.base.r : null;
    if (x.cur.r === 1)
      return <><span className="chg-badge b-top">提升至榜首</span><span className="chg-sub">{sub}</span></>;
    if (x.cur.r && x.cur.r <= 3 && (baseR == null || baseR > 3))
      return <><span className="chg-badge b-top3">冲进前三</span><span className="chg-sub">{sub}</span></>;
    if (x.cur.r && x.cur.r <= 5 && (baseR == null || baseR > 5))
      return <><span className="chg-badge b-top5">冲进前五</span><span className="chg-sub">{sub}</span></>;
    if (x.change === '新增提及') return <span className="chg-badge b-new">新增提及</span>;
    return <span className="chg-badge b-up">上升 {x.moveN} 名</span>;
  }
  if (x.change === '名次下降') return <span className="chg 名次下降">下降 {x.moveN} 名</span>;
  return <span className={`chg ${x.change}`}>{x.change}</span>;
}

function ArtLink({ a }) {
  return (
    <a href={a.u} target="_blank" rel="noreferrer" title={a.t}>
      {a.p && <span className="ap">[{a.p}]</span>}
      {a.t}
    </a>
  );
}

function ArtsCell({ arts }) {
  let inner;
  if (!arts.length) inner = <span className="none">—</span>;
  else if (arts.length <= 2) inner = arts.map((a, i) => <ArtLink key={i} a={a} />);
  else inner = <><ArtLink a={arts[0]} /><span className="more">…等 {arts.length} 篇</span></>;
  return <div className="arts-box">{inner}</div>;
}

function ComparePage({ pageIndex }) {
  const startIndex = pageIndex * ROWS_PER_PAGE;
  const pageRows = rows.slice(startIndex, startIndex + ROWS_PER_PAGE);
  // 字号已直接放大，zoom 保持 1；再大第 10 行会被挤出白框
  const zoom = 1;

  return (
    <SlideLayout title="用行动说话" hideHeaderLeft={true}>
      <style>{CSS}</style>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#004CE5]/5 blur-[150px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn">
        {/* 白色圆角边框（与原截图版一致） */}
        <div className="w-full h-full bg-white border border-zinc-200 rounded-3xl p-4 overflow-hidden">
          <div className="swa-cmp" style={{ zoom, height: '100%' }}>
            <table>
              <colgroup>
                <col className="c-idx" /><col className="c-type" /><col style={{ width: '21%' }} /><col className="c-plat" />
                <col className="c-rank" /><col className="c-chg" /><col className="c-rank" /><col />
              </colgroup>
              <thead>
                <tr>
                  <th>#</th><th>词性</th><th>词条</th><th>平台</th>
                  <th className="grp grp-l">投放前排名<span className="thsub">6月28日</span></th>
                  <th className="grp">变化</th>
                  <th className="grp grp-r">投放后排名<span className="thsub">7月6日</span></th>
                  <th>我们被引用的投放文章</th>
                </tr>
              </thead>
              <tbody>
                {pageRows.map((x, i) => (
                  <tr key={`${x.entry}-${x.platform}`}>
                    <td>{startIndex + i + 1}</td>
                    <td><span className={`tag t${x.type}`}>{x.type}</span></td>
                    <td className="entry">
                      {x.entry}
                      {x.product && <span className="ptag">{x.product}</span>}
                      {x.monitor && <span className="mtag">监测</span>}
                    </td>
                    <td>{x.platform}</td>
                    <td className="grp grp-l"><RankCell day={x.base} /></td>
                    <td className="grp"><ChangeCell x={x} /></td>
                    <td className="grp grp-r"><RankCell day={x.cur} /></td>
                    <td className="arts"><ArtsCell arts={x.arts} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

export default function Page_SkyworthSpeakWithActions_2() {
  return <ComparePage pageIndex={0} />;
}

Page_SkyworthSpeakWithActions_2.hideHeader = true;

export function Page_SkyworthSpeakWithActions_2b() {
  return <ComparePage pageIndex={1} />;
}

Page_SkyworthSpeakWithActions_2b.hideHeader = true;
