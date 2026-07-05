import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

function Num({ children, className = '' }) {
  return (
    <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {children}
    </span>
  );
}

export function Page_SkyworthReport_OptCompetitor() {
  const mentionRateData = [
    { name: '创维', value: '73.6%', isBrand: true, rank: 1 },
    { name: '海信', value: '68.2%' },
    { name: 'TCL', value: '61.4%' },
    { name: '华为智慧屏', value: '52.7%' },
    { name: '小米', value: '48.1%' },
  ];

  const top1RateData = [
    { name: '创维', value: '41.2%', isBrand: true, rank: 1 },
    { name: '海信', value: '38.5%' },
    { name: 'TCL', value: '29.7%' },
    { name: '华为智慧屏', value: '21.3%' },
    { name: '小米', value: '18.6%' },
  ];

  const avgRankData = [
    { name: '海信', value: 'NO. 2.6', rank: 1 },
    { name: '创维', value: 'NO. 2.8', isBrand: true, rank: 2 },
    { name: 'TCL', value: 'NO. 3.5' },
    { name: '华为智慧屏', value: 'NO. 4.8' },
    { name: '小米', value: 'NO. 5.2' },
  ];

  const renderTable = (title, headers, data) => {
    return (
      <div className="flex flex-col gap-2.5 h-full min-h-0">
        <h3 className="text-[18px] xl:text-[20px] font-bold text-white shrink-0 flex items-center gap-2">
          <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
          {title}
        </h3>
        <div className="flex-grow rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] overflow-hidden flex flex-col p-4">
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
              <strong className="text-[#60A5FA] font-black">核心结论：</strong>创维在 <strong className="text-white font-black">提及率（73.6%）</strong> 与 <strong className="text-white font-black">Top1 提及率（41.2%）</strong> 上高居行业第一，但在 <strong className="text-white font-black">平均提及位次</strong> 上以 NO.2.8 微弱落后于海信（NO.2.6）——创维“被提及得多”，但海信“被排得更靠前”。
            </p>
          </div>

          <div className="h-[30%] min-h-[200px] max-h-[260px] shrink-0 grid grid-cols-12 gap-5 mt-2">
            <div className="col-span-4 flex flex-col min-h-0">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 flex flex-col h-full justify-start gap-2.5">
                <h3 className="text-[17px] xl:text-[18px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                  核心发现
                </h3>
                <div className="flex-grow flex flex-col gap-2.5 text-[13px] xl:text-[14px] text-zinc-300 leading-relaxed font-normal text-justify">
                  <p><strong className="text-white font-bold">品类优势明显：</strong>“好看的电视”词群拉高了创维整体提及率，声量领先海信、TCL。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">位次略逊一筹：</strong>海信在通用性能词的首推位更稳，把平均位次拉到了行业第一。</p>
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
                  <p><strong className="text-white font-bold">主流双雄对峙：</strong>创维与海信牢牢把控第一、第二梯队声量，TCL在第三顺位跟随，其余品牌较弱。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">内容拦截紧咬：</strong>海信与TCL正持续铺设同类测评内容，试图蚕食创维的首推份额。</p>
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
                  <p><strong className="text-white font-bold">强攻位次差距：</strong>在通用性能词密集投放对标横评与科普，把平均位次抢回行业第一。</p>
                  <p className="border-t border-white/5 pt-2.5"><strong className="text-white font-bold">心智壁垒稳固：</strong>在壁纸和好看电视大词下继续巩固优势，防范海信等跟风者截流。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_OptCompetitor.hideHeader = true;
