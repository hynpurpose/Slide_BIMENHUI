import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthConsumerPerspective() {
  return (
    <SlideLayout title="消费者视角下的AI品牌定位">
      <div className="absolute w-[680px] h-[680px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 -top-40 pointer-events-none z-0" />
      <div className="absolute w-[560px] h-[560px] rounded-full bg-blue-900/[0.05] blur-[150px] -left-24 bottom-10 pointer-events-none z-0" />

      {/* 右下角倾斜印章：提醒这一步极容易被忽略 */}
      <div
        className="absolute z-20 select-none pointer-events-none"
        style={{ right: '30px', bottom: '24px', transform: 'rotate(-12deg)' }}
        aria-hidden
      >
        <svg viewBox="0 0 220 220" width="240" height="240" fill="none">
          <circle cx="110" cy="110" r="102" stroke="#F59E0B" strokeWidth="3.5" strokeOpacity="0.6" />
          <circle cx="110" cy="110" r="86" stroke="#F59E0B" strokeWidth="1.6" strokeOpacity="0.4" strokeDasharray="7 6" />
          <text x="110" y="96" textAnchor="middle" fill="#FBBF24" fontSize="36" fontWeight="900" fontFamily="MiSans, sans-serif">极容易</text>
          <text x="110" y="142" textAnchor="middle" fill="#FBBF24" fontSize="36" fontWeight="900" fontFamily="MiSans, sans-serif">忽略</text>
        </svg>
      </div>

      {/* 主排版容器：撑满内容区，上中下三段均匀分布 */}
      <div
        className="absolute w-[1840px] flex flex-col justify-between select-none animate-fadeIn z-10"
        style={{ top: 0, height: '790px', paddingTop: '20px', paddingBottom: '10px' }}
      >
        {/* 上：主张句 */}
        <div className="shrink-0">
          <div className="w-[64px] h-[4px] bg-[#004CE5]/70 rounded-full mb-10" />
          <p className="font-['MiSans']" style={{ fontSize: '58px', lineHeight: '1.2' }}>
            <strong className="text-white font-bold">AI 是中立的，甚至更偏向用户</strong>
            <span className="text-zinc-500">，所以——</span>
          </p>
        </div>

        {/* 中：公式（水平撑开，居中留白均匀） */}
        <div className="flex items-center gap-10 pr-[120px]">
          <div className="px-14 py-11 rounded-[32px] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
            <span className="text-[62px] font-black text-white font-['MiSans'] leading-none">消费者视角</span>
          </div>
          <span className="text-[64px] font-black text-zinc-500 leading-none">＋</span>
          <div className="px-14 py-11 rounded-[32px] bg-gradient-to-br from-[#004CE5] to-[#0B2E80] border border-blue-400/40 shadow-[0_24px_60px_-15px_rgba(0,76,229,0.55)]">
            <span className="text-[62px] font-black text-white font-['MiSans'] leading-none">AI 理解方式</span>
          </div>
          <span className="text-[56px] font-black text-zinc-600 leading-none mx-2">＝</span>
          <span className="text-[44px] text-zinc-200 font-['MiSans'] font-bold leading-tight">
            品牌在 AI 里<br />最适合传播的定位
          </span>
        </div>

        {/* 下：两块定义 */}
        <div className="w-full border-t border-zinc-800 pt-10 flex gap-16 shrink-0" style={{ maxWidth: '1420px' }}>
          <div className="flex-1">
            <span className="text-[30px] font-black text-white font-['MiSans']">消费者视角</span>
            <p className="text-[26px] text-zinc-500 font-['MiSans'] leading-relaxed mt-3">
              不站在品牌角度，用真实用户的语言重新梳理品牌信息
            </p>
          </div>
          <div className="w-[1px] bg-zinc-800 shrink-0" />
          <div className="flex-1">
            <span className="text-[30px] font-black text-white font-['MiSans']">AI 理解方式</span>
            <p className="text-[26px] text-zinc-500 font-['MiSans'] leading-relaxed mt-3">
              适配大模型的采信与推荐逻辑，让定位更容易被抓取
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthConsumerPerspective.hideHeader = true;
