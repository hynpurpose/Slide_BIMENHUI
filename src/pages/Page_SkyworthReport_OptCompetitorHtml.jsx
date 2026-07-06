import React from 'react';
import SlideLayout from '../components/SlideLayout';
import report from '../data/geoReport.json';

/**
 * 优化词竞品横向对比 · 数据驱动版。
 * 样式与原手写页 Page_SkyworthReport_OptCompetitor 完全一致，
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

  const renderTable = (title, headers, data) => {
    return (
      <div className="flex flex-col gap-2.5 h-full min-h-0">
        <h3 className="text-[18px] xl:text-[20px] font-bold text-white shrink-0 flex items-center gap-2">
          <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          {title}
        </h3>
        <div className="flex-grow rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden flex flex-col p-4">
          {data.length === 0 ? (
            <div className="flex-grow flex items-center justify-center text-zinc-500 text-sm">暂无数据</div>
          ) : (
            <table className="w-full text-left border-collapse table-fixed flex-grow h-full">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                  <th className="py-2.5 px-3 w-[20%]"></th>
                  <th className="py-2.5 px-2 text-[14px] xl:text-[15px] font-bold text-zinc-400 w-[50%] tracking-wider">{headers[0]}</th>
                  <th className="py-2.5 px-4 text-[14px] xl:text-[15px] font-bold text-zinc-400 w-[30%] text-right pr-4 tracking-wider">{headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => {
                  const isBrand = item.isBrand;
                  const rankNum = item.rank || (idx + 1);

                  let rankElement;
                  if (rankNum === 1) {
                    rankElement = (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-black flex items-center justify-center font-extrabold text-[13px] shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                        1
                      </div>
                    );
                  } else if (rankNum === 2) {
                    rankElement = (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 text-black flex items-center justify-center font-extrabold text-[13px] shadow-[0_0_10px_rgba(156,163,175,0.2)]">
                        2
                      </div>
                    );
                  } else if (rankNum === 3) {
                    rankElement = (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 text-black flex items-center justify-center font-extrabold text-[13px] shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                        3
                      </div>
                    );
                  } else {
                    rankElement = (
                      <div className="text-zinc-500 font-bold text-[15px] text-center w-7">
                        {rankNum}
                      </div>
                    );
                  }

                  return (
                    <tr
                      key={idx}
                      className={`border-b border-white/[0.04] last:border-none hover:bg-white/[0.02] transition-colors ${
                        isBrand ? 'bg-[#004CE5]/10 border-y border-[#004CE5]/20' : ''
                      }`}
                    >
                      <td className="py-2 px-3 align-middle">
                        <div className="flex justify-center">{rankElement}</div>
                      </td>
                      <td className="py-2 px-2 align-middle">
                        <div className="flex items-center gap-2">
                          <span className={`text-[15px] xl:text-[16px] ${isBrand ? 'font-extrabold text-[#60A5FA]' : 'font-medium text-zinc-200'}`}>
                            {item.name}
                          </span>
                          {isBrand && (
                            <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-[#004CE5]/20 text-[#60A5FA] border border-[#004CE5]/30">
                              目标产品
                            </span>
                          )}
                        </div>
                      </td>
                      <td className={`py-2 px-4 text-right pr-4 align-middle text-[18px] xl:text-[20px] font-extrabold font-mono ${
                        isBrand ? 'text-white' : 'text-zinc-300'
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
            <h1 className="text-[32px] font-bold text-white tracking-widest leading-tight">
              优化词 · 竞品横向对比
            </h1>
          </div>

          <div className="flex-1 grid grid-cols-3 gap-6 min-h-0 mb-1">
            {renderTable('提及率排名', ['品牌名称', '提及率'], mentionRateData)}
            {renderTable('Top1 提及率排名', ['品牌名称', 'Top1 提及率'], top1RateData)}
            {renderTable('平均提及位次排名', ['品牌名称', '平均提及位次'], avgRankData)}
          </div>

          <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl px-6 py-4 shrink-0 flex items-center justify-between gap-4 mb-3">
            <p className="text-[14px] xl:text-[15px] text-zinc-300 leading-relaxed">
              {conclusion}
            </p>
          </div>

          {/* 以下三张卡为人工撰写的分析文案（接口无对应数据），换项目后需手动改写 */}
          <div className="h-[30%] min-h-[200px] max-h-[260px] shrink-0 grid grid-cols-12 gap-5 mt-2">
            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[17px] xl:text-[18px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  核心发现
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">（待撰写）</strong>根据本期数据补充核心发现。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[17px] xl:text-[18px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  竞争格局总结
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">（待撰写）</strong>根据本期数据补充竞争格局总结。</p>
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/25 rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                <h3 className="text-[17px] xl:text-[18px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  行动建议
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">（待撰写）</strong>根据本期数据补充行动建议。</p>
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
