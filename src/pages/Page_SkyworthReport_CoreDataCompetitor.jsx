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

function SectionTitle({ children }) {
  return (
    <h3 className="text-[24px] xl:text-[26px] font-bold text-zinc-300 tracking-wider flex items-center gap-3">
      <span className="w-1.5 h-5.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      {children}
    </h3>
  );
}

export function Page_SkyworthReport_CoreDataCompetitor() {
  // === 品类层面竞品对比数据 (5行) ===
  const mentionRateData = [
    { name: '创维', value: '73.6%', self: true },
    { name: 'TCL', value: '61.5%' },
    { name: '海信', value: '58.2%' },
    { name: '三星', value: '47.9%' },
    { name: '小米', value: '44.3%' },
  ];

  const top1RateData = [
    { name: '创维', value: '41.2%', self: true },
    { name: 'TCL', value: '25.8%' },
    { name: '海信', value: '22.3%' },
    { name: '三星', value: '18.6%' },
    { name: '小米', value: '14.2%' },
  ];

  const avgRankData = [
    { name: '海信', value: 'NO. 2.6' },
    { name: '创维', value: 'NO. 2.8', self: true },
    { name: 'TCL', value: 'NO. 3.5' },
    { name: '三星', value: 'NO. 4.8' },
    { name: '小米', value: 'NO. 5.2' },
  ];

  // === 产品层面竞品对比数据 (扩展为5行) ===
  const productA7H = [
    { name: '海信 E5N', value: '74.5%' },
    { name: '创维 A7H Pro', value: '71.0%', self: true },
    { name: 'TCL T7K', value: '69.8%' },
    { name: '三星 Q60D', value: '58.2%' },
    { name: '小米 S Pro', value: '55.4%' },
  ];

  const productA8H = [
    { name: 'TCL T7K Pro', value: '72.1%' },
    { name: '海信 E7N', value: '70.4%' },
    { name: '创维 A8H', value: '66.3%', self: true },
    { name: '三星 Q70D', value: '52.6%' },
    { name: '小米 TV S', value: '49.8%' },
  ];

  const productA10H = [
    { name: '创维 A10H', value: '78.4%', self: true },
    { name: '海信 E8N', value: '75.2%' },
    { name: '三星 The Frame', value: '61.0%' },
    { name: 'TCL Q10K Pro', value: '58.5%' },
    { name: '小米 S Pro 85', value: '51.2%' },
  ];

  const productQ7H = [
    { name: '海信 U7N', value: '68.9%' },
    { name: 'TCL Q10K', value: '64.2%' },
    { name: '创维 Q7H', value: '52.1%', self: true },
    { name: '三星 Q80C', value: '48.7%' },
    { name: '索尼 X90L', value: '45.3%' },
  ];

  const productQ8H = [
    { name: '索尼 A95L', value: '66.5%' },
    { name: '三星 QN900', value: '63.8%' },
    { name: '创维 Q8H', value: '58.7%', self: true },
    { name: '海信 U8KL', value: '54.2%' },
    { name: 'TCL X11H', value: '52.5%' },
  ];

  const renderCompetitorTable = (title, headers, data) => {
    return (
      <div className="flex flex-col gap-2 h-full min-h-0">
        <h4 className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 pb-2 border-b border-white/10">
          {title}
        </h4>
        <div className="flex-grow flex flex-col min-h-0">
          <table className="w-full text-left border-collapse table-fixed flex-grow">
            <tbody>
              {data.map((item, idx) => {
                const isSelf = item.self;
                const rank = idx + 1;

                let rankElement;
                if (rank === 1) {
                  rankElement = (
                    <div
                      className="rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-black flex items-center justify-center font-extrabold text-[12px] shadow-[0_0_5px_rgba(245,158,11,0.3)] shrink-0"
                      style={{ width: '26px', height: '26px', minWidth: '26px', minHeight: '26px' }}
                    >
                      1
                    </div>
                  );
                } else if (rank === 2) {
                  rankElement = (
                    <div
                      className="rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 text-black flex items-center justify-center font-extrabold text-[12px] shadow-[0_0_5px_rgba(156,163,175,0.2)] shrink-0"
                      style={{ width: '26px', height: '26px', minWidth: '26px', minHeight: '26px' }}
                    >
                      2
                    </div>
                  );
                } else if (rank === 3) {
                  rankElement = (
                    <div
                      className="rounded-full bg-gradient-to-br from-orange-300 to-orange-500 text-black flex items-center justify-center font-extrabold text-[12px] shadow-[0_0_5px_rgba(249,115,22,0.2)] shrink-0"
                      style={{ width: '26px', height: '26px', minWidth: '26px', minHeight: '26px' }}
                    >
                      3
                    </div>
                  );
                } else {
                  rankElement = (
                    <div
                      className="text-zinc-500 font-bold text-[14px] text-center shrink-0 flex items-center justify-center"
                      style={{ width: '26px', height: '26px', minWidth: '26px', minHeight: '26px' }}
                    >
                      {rank}
                    </div>
                  );
                }

                return (
                  <tr
                    key={idx}
                    className={`border-b border-white/[0.04] last:border-none hover:bg-white/[0.02] transition-colors ${
                      isSelf ? 'bg-[#004CE5]/15 font-bold' : ''
                    }`}
                  >
                    <td className="py-1 px-1 w-[40px] align-middle">
                      <div className="flex justify-center">{rankElement}</div>
                    </td>
                    <td className="py-1 px-2 align-middle">
                      <div className="flex items-center gap-2">
                        <span className={`text-[19px] xl:text-[21px] ${isSelf ? 'font-bold text-[#60A5FA]' : 'font-medium text-zinc-300'}`}>
                          {item.name}
                        </span>
                        {isSelf && (
                          <span className="px-1.5 py-0.2 text-[9px] font-bold rounded bg-[#004CE5]/30 text-[#60A5FA] border border-[#004CE5]/40 shrink-0">
                            本品
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`py-1 px-2 text-right pr-2 align-middle text-[20px] xl:text-[22px] font-bold font-mono ${
                      isSelf ? 'text-white' : 'text-zinc-400'
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

  const renderProductTable = (title, data) => {
    return (
      <div className="flex flex-col gap-2 h-full min-h-0">
        <div className="text-[17px] xl:text-[19px] font-bold text-center border-b border-white/10 pb-2 text-zinc-200 shrink-0">
          {title}
        </div>
        <div className="flex-grow flex flex-col min-h-0">
          <table className="w-full text-left border-collapse table-fixed flex-grow">
            <tbody>
              {data.map((item, idx) => {
                const isSelf = item.self;
                const rank = idx + 1;

                let rankElement;
                if (rank === 1) {
                  rankElement = <span className="text-amber-400 font-extrabold text-[15px] xl:text-[17px]">1</span>;
                } else if (rank === 2) {
                  rankElement = <span className="text-zinc-300 font-bold text-[15px] xl:text-[17px]">2</span>;
                } else if (rank === 3) {
                  rankElement = <span className="text-orange-400 font-bold text-[15px] xl:text-[17px]">3</span>;
                } else {
                  rankElement = <span className="text-zinc-500 text-[15px] xl:text-[17px]">{rank}</span>;
                }

                return (
                  <tr
                    key={idx}
                    className={`border-b border-white/[0.04] last:border-none hover:bg-white/[0.01] transition-colors ${
                      isSelf ? 'bg-[#004CE5]/15 font-bold' : ''
                    }`}
                  >
                    <td className="py-1 px-1 text-center w-[15%] align-middle">{rankElement}</td>
                    <td className="py-1 px-0.5 w-[55%] text-[16px] xl:text-[18px] align-middle truncate">
                      <span className={isSelf ? 'font-bold text-[#60A5FA]' : 'text-zinc-300'}>{item.name}</span>
                    </td>
                    <td className={`py-1 px-1 text-right pr-1 w-[30%] text-[17px] xl:text-[19px] font-bold font-mono align-middle ${
                      isSelf ? 'text-white' : 'text-zinc-400'
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
      <div className="w-full h-full flex flex-col relative text-white font-sans px-8 sm:px-10 py-12 overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        
        {/* 页面标题 */}
        <div className="text-center shrink-0 mb-2">
          <h1 className="text-[36px] xl:text-[40px] font-bold text-white tracking-widest leading-tight">
            竞品对比
          </h1>
        </div>

        <div className="w-full max-w-[1840px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 justify-center gap-10">

          {/* ===== 品类优化词竞品对比 (并列三个表) ===== */}
          <div className="shrink-0 flex flex-col gap-3">
            <SectionTitle>品类优化词竞品对比</SectionTitle>
            <div className="grid grid-cols-3 gap-16 h-[260px]">
              {renderCompetitorTable('提及率排名', ['品牌', '提及率'], mentionRateData)}
              {renderCompetitorTable('TOP1 提及率排名', ['品牌', 'TOP1 提及率'], top1RateData)}
              {renderCompetitorTable('平均提及位次排名', ['品牌', '平均位次'], avgRankData)}
            </div>
          </div>

          {/* ===== 产品专属优化词竞品对比 (并列五个表) ===== */}
          <div className="shrink-0 flex flex-col gap-3">
            <SectionTitle>产品专属优化词竞品对比 <span className="text-[16px] xl:text-[18px] text-zinc-500 font-normal ml-2">（提及率排名对比）</span></SectionTitle>
            <div className="grid grid-cols-5 gap-12 h-[220px]">
              {renderProductTable('创维 A7H Pro', productA7H)}
              {renderProductTable('创维 A8H', productA8H)}
              {renderProductTable('创维 A10H', productA10H)}
              {renderProductTable('创维 Q7H', productQ7H)}
              {renderProductTable('创维 Q8H', productQ8H)}
            </div>
          </div>

          {/* ===== 极简数据总结 ===== */}
          <div className="shrink-0 border-t border-white/10 pt-8 mt-2">
            <div className="flex items-start gap-5">
              <span className="text-[20px] xl:text-[22px] font-bold text-white shrink-0 bg-[#004CE5] px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(0,76,229,0.3)]">数据总结</span>
              <p className="text-[19px] xl:text-[21px] text-zinc-200 leading-relaxed text-justify flex-1">
                品类层面，创维在提及率（<strong className="text-white font-bold">73.6%</strong>）与 TOP1 率（<strong className="text-white font-bold">41.2%</strong>）上居行业第一，优势稳固，但平均提及位次微弱落后于海信。产品层面，旗舰 <strong className="text-white font-bold">A10H</strong> 表现抢眼（提及率 78.4% 排名第一）；但走量款与线下款（<strong className="text-white font-bold">A8H / A7H Pro / Q8H / Q7H</strong>）提及率仍被海信、TCL 或索尼超越，面临明显的局部拦截压力。
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_CoreDataCompetitor.hideHeader = true;
