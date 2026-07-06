import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Globe, TrendingUp, ArrowRight } from 'lucide-react';

const BEFORE = [
  { rank: 1, name: '汽车之家', rate: '26.8%' },
  { rank: 2, name: '懂车帝', rate: '21.4%' },
  { rank: 3, name: '太平洋汽车', rate: '14.2%' },
  { rank: 4, name: '易车', rate: '10.5%' },
  { rank: 5, name: '百家号', rate: '5.8%' },
];

const AFTER = [
  { rank: 1, name: '汽车之家', rate: '22.1%', prevRank: 1 },
  { rank: 2, name: '百家号', rate: '18.6%', prevRank: 5, rising: true },
  { rank: 3, name: '懂车帝', rate: '17.9%', prevRank: 2 },
  { rank: 4, name: '搜狐汽车', rate: '12.3%', prevRank: null, rising: true, isNew: true },
  { rank: 5, name: '易车', rate: '8.4%', prevRank: 4 },
];

function RankPanel({ title, subtitle, rows, showTrend = false }) {
  return (
    <div className="flex-1 min-w-0 h-full bg-white border border-zinc-200 rounded-[28px] p-8 flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
      <div className="mb-6 shrink-0">
        <h3 className="text-[32px] font-black text-zinc-900 font-['MiSans'] leading-tight">
          {title}
        </h3>
        <p className="text-[22px] text-zinc-500 font-bold font-['MiSans'] mt-2">
          {subtitle}
        </p>
      </div>

      <div className="flex-grow flex flex-col bg-zinc-50/50 rounded-2xl border border-zinc-200/60 p-5 min-h-0">
        <div className="flex justify-between items-center text-[18px] xl:text-[20px] text-zinc-400 font-bold pb-2.5 border-b border-zinc-200 mb-3 px-2 font-['MiSans']">
          <span>平台名称</span>
          <span className="pr-2">引用率</span>
        </div>

        <div className="flex-grow flex flex-col justify-between py-1 gap-3">
          {rows.map((row) => {
            const highlighted = showTrend && row.rising;
            return (
              <div
                key={`${row.name}-${row.rank}`}
                className={`flex justify-between items-center h-[82px] px-5 rounded-xl border transition-colors duration-300 ${
                  highlighted
                    ? 'border-[#004CE5]/50 bg-[#004CE5]/8 shadow-[0_0_18px_rgba(0,76,229,0.12)]'
                    : 'border-transparent hover:bg-zinc-100/60'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-['Montserrat'] text-[20px] xl:text-[22px] font-black text-zinc-400 w-6 shrink-0">
                    {row.rank}
                  </span>
                  <Globe
                    className={`w-[26px] h-[26px] shrink-0 ${
                      highlighted ? 'text-[#004CE5]' : 'text-zinc-400'
                    }`}
                  />
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-[23px] xl:text-[25px] font-bold font-['MiSans'] truncate ${
                        highlighted ? 'text-zinc-900 font-black' : 'text-zinc-700'
                      }`}
                    >
                      {row.name}
                    </span>
                    {showTrend && row.rising && (
                      <span className="text-[16px] font-bold text-[#004CE5] font-['MiSans'] flex items-center gap-1.5 mt-0.5">
                        <TrendingUp size={15} strokeWidth={3} />
                        {row.isNew ? '新进入 TOP5' : `#${row.prevRank} → #${row.rank}`}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`text-[23px] xl:text-[25px] font-black font-['Montserrat'] shrink-0 ${
                    highlighted ? 'text-[#004CE5]' : 'text-zinc-500'
                  }`}
                >
                  {row.rate}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Page_EmergingMediaAttempts() {
  return (
    <SlideLayout title="20%尝试一些新媒体">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn">

        {/* H1 下方副标题 */}
        <h2
          className="text-white font-normal font-['MiSans'] shrink-0"
          style={{ fontSize: '48px', lineHeight: '58px' }}
        >
          预测排名变化，早日占领。
        </h2>

        {/* 双栏排名对比 */}
        <div className="flex-grow flex items-stretch min-h-0 gap-6 mt-6">

          <RankPanel
            title="DeepSeek · 汽车行业"
            subtitle="3.15 前引用率 TOP5"
            rows={BEFORE}
          />

          <div className="w-[88px] shrink-0 flex flex-col items-center justify-center gap-4 self-center">
            <ArrowRight
              className="w-14 h-14 text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.9)]"
              strokeWidth={2.5}
            />
            <span className="text-[22px] font-black text-white font-['MiSans'] tracking-[0.2em] [writing-mode:vertical-rl] drop-shadow-[0_0_20px_rgba(255,255,255,0.75)]">
              模型更新
            </span>
          </div>

          <RankPanel
            title="DeepSeek · 汽车行业"
            subtitle="3.15 后引用率 TOP5"
            rows={AFTER}
            showTrend
          />
        </div>

      </div>
    </SlideLayout>
  );
}

Page_EmergingMediaAttempts.hideHeader = true;
