import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词竞品横向对比 · 数据驱动版。
 * 三张排名表分别读取 geoReport.json 的：
 *   - compare.mention_rate_ranking（/api/competitors/compare）
 *   - compare.top1_ranking（/api/competitors/top-mention-rate，top_type=top1）
 *   - compare.position_ranking（/api/competitors/compare）
 * 核心结论为根据排名自动生成的事实性描述。
 */

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

export function Page_SkyworthReport_OptCompetitorHtml() {
  const { compare, meta } = report;
  const targetName = meta.target_brand_name || meta.target_product;

  const mentionRateData = compare.mention_rate_ranking.slice(0, 5).map((b, i) => ({
    name: b.brand_name,
    value: b.mention_rate === null ? '-' : `${Number(b.mention_rate).toFixed(1)}%`,
    isBrand: b.is_target,
    rank: i + 1,
  }));

  const top1RateData = (compare.top1_ranking || []).slice(0, 5).map((b, i) => ({
    name: b.brand_name,
    value: b.top1_mention_rate === null ? '-' : `${Number(b.top1_mention_rate).toFixed(1)}%`,
    isBrand: b.is_target,
    rank: b.rank ?? i + 1,
  }));

  const avgRankData = compare.position_ranking.slice(0, 5).map((b, i) => ({
    name: b.brand_name,
    value: b.avg_position === null ? '-' : `NO. ${Number(b.avg_position).toFixed(1)}`,
    isBrand: b.is_target,
    rank: i + 1,
  }));

  /* 事实性核心结论：目标产品在各榜单的名次与数值 */
  const rateIdx = compare.mention_rate_ranking.findIndex((b) => b.is_target);
  const posIdx = compare.position_ranking.findIndex((b) => b.is_target);
  const rateLeader = compare.mention_rate_ranking[0];
  const posLeader = compare.position_ranking[0];
  const targetRate = rateIdx >= 0 ? compare.mention_rate_ranking[rateIdx] : null;
  const targetPos = posIdx >= 0 ? compare.position_ranking[posIdx] : null;

  const conclusion = (
    <>
      <strong className="text-[#60A5FA] font-black">核心结论：</strong>
      {targetRate && (
        <>
          {targetName}提及率 <strong className="text-white font-black">{Number(targetRate.mention_rate).toFixed(1)}%</strong>，
          位列行业第 <strong className="text-white font-black">{rateIdx + 1}</strong>
          {rateIdx > 0 && rateLeader && (
            <>（第一名 {rateLeader.brand_name} {Number(rateLeader.mention_rate).toFixed(1)}%）</>
          )}
          ；
        </>
      )}
      {targetPos && (
        <>
          平均提及位次 <strong className="text-white font-black">NO. {Number(targetPos.avg_position).toFixed(1)}</strong>，
          位列第 <strong className="text-white font-black">{posIdx + 1}</strong>
          {posIdx > 0 && posLeader && (
            <>（第一名 {posLeader.brand_name} NO. {Number(posLeader.avg_position).toFixed(1)}）</>
          )}
          。
        </>
      )}
    </>
  );

  /* 白底排名卡：样式参照 GEO Web 竞品对比页（rank-badge.tsx 金银铜徽章 + shadcn 表格） */
  const renderTable = (title, headers, data) => {
    return (
      <div className="flex flex-col gap-2.5 h-full min-h-0">
        <h3 className="text-[22px] xl:text-[24px] font-bold text-white shrink-0 flex items-center gap-2">
          <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          {title}
        </h3>
        <div className="flex-grow rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden flex flex-col p-4">
          {data.length === 0 ? (
            <div className="flex-grow flex items-center justify-center text-slate-400 text-sm">暂无数据</div>
          ) : (
            <table className="w-full text-left border-collapse table-fixed flex-grow h-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2.5 px-3 w-[20%]"></th>
                  <th className="py-2.5 px-2 text-[16px] xl:text-[17px] font-semibold text-slate-500 w-[50%] tracking-wider">{headers[0]}</th>
                  <th className="py-2.5 px-4 text-[16px] xl:text-[17px] font-semibold text-slate-500 w-[30%] text-right pr-4 tracking-wider">{headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => {
                  const isBrand = item.isBrand;
                  const rankNum = item.rank || (idx + 1);

                  /* rank-badge.tsx：金 #FFD700 / 银 #E0E0E0 / 铜 #F5C28C，4名起纯数字 */
                  const badgeColors = { 1: '#FFD700', 2: '#E0E0E0', 3: '#F5C28C' };
                  const rankElement = badgeColors[rankNum] ? (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-[15px]"
                      style={{ backgroundColor: badgeColors[rankNum], color: '#1f2937' }}
                    >
                      {rankNum}
                    </div>
                  ) : (
                    <div className="w-8 h-8 flex items-center justify-center font-medium text-[16px] text-slate-400">
                      {rankNum}
                    </div>
                  );

                  return (
                    <tr
                      key={idx}
                      className={`border-b border-slate-100 last:border-none transition-colors ${
                        isBrand ? 'bg-blue-50/80' : ''
                      }`}
                    >
                      <td className="py-2 px-3 align-middle">
                        <div className="flex justify-center">{rankElement}</div>
                      </td>
                      <td className="py-2 px-2 align-middle">
                        <div className="flex items-center gap-2">
                          <span className={`text-[19px] xl:text-[21px] ${isBrand ? 'font-bold text-[#2563EB]' : 'font-medium text-slate-700'}`}>
                            {item.name}
                          </span>
                          {isBrand && (
                            <span className="px-1.5 py-0.5 text-[11px] font-bold rounded bg-blue-100 text-[#2563EB]">
                              目标产品
                            </span>
                          )}
                        </div>
                      </td>
                      <td className={`py-2 px-4 text-right pr-4 align-middle text-[22px] xl:text-[24px] font-extrabold font-mono ${
                        isBrand ? 'text-slate-900' : 'text-slate-600'
                      }`}>
                        {item.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  };

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-5">
          <div className="text-center shrink-0">
            <h1 className="text-[36px] font-bold text-white tracking-widest leading-tight">
              优化词 · 竞品横向对比
            </h1>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6 min-h-0 mb-1">
            {renderTable('提及率排名', ['品牌名称', '提及率'], mentionRateData)}
            {renderTable('Top1 提及率排名', ['品牌名称', 'Top1 提及率'], top1RateData)}
            {renderTable('平均提及位次排名', ['品牌名称', '平均提及位次'], avgRankData)}
          </div>

          <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl px-6 py-4 shrink-0 flex items-center justify-between gap-4 mb-3">
            <p className="text-[18px] xl:text-[20px] text-zinc-300 leading-relaxed">
              {conclusion}
            </p>
          </div>

          {/* 以下三张卡为分析文案，每次重新采集数据后需根据最新数值改写（当前基于 品类优化词① 2026-07-03 数据） */}
          <div className="h-[32%] min-h-[220px] max-h-[300px] shrink-0 grid grid-cols-12 gap-5 mt-2">
            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  核心发现
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">首推优势突出：</strong>创维 Top1 提及率 24.7% 断层领先（第二名海信仅 10.8%），AI 在品类词下最倾向首推创维。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">声量存在缺口：</strong>整体提及率 59.4% 落后海信（68.0%）与 TCL（65.6%），"被提到"的频次还不够。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  竞争格局总结
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">三强格局胶着：</strong>海信、TCL、创维提及率同处 59%~68% 第一梯队，行业影响力得分（69.2 / 67.4 / 62.8）咬得很紧。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">外资品牌掉队：</strong>索尼（35.2%）、三星（34.4%）声量断档，竞争主要在国产三强之间展开。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/25 rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                <h3 className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  行动建议
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">补齐提及广度：</strong>对未提及创维的品类词补充测评、榜单类内容，把整体提及率从 59.4% 向海信的 68.0% 拉近。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">巩固首推心智：</strong>持续维护高质量首推内容，守住 Top1 提及率 2 倍于第二名的领先优势。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptCompetitorHtml.hideHeader = true;
