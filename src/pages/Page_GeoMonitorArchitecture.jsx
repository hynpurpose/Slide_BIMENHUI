import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoMonitorArchitecture() {
  const sources = ['豆包', 'DeepSeek', '腾讯元宝', 'Kimi', '文心一言', '百度 AI', '主流搜索引擎'];
  const core = [
    { t: '数据采集', d: '全量抓取品牌相关问答' },
    { t: '清洗结构化', d: '去重去噪、意图归类' },
    { t: '指标量化', d: '提及率 / 位次 / 来源计算' },
  ];
  const dashboard = [
    { label: '提及率监测', sub: '品牌被 AI 提及的整体覆盖' },
    { label: '竞品对比', sub: '与主流品牌的排位差距' },
    { label: '引用来源', sub: 'AI 引用了哪些平台内容' },
    { label: '情感正负面', sub: '品牌口碑正负面追踪' },
    { label: '词条追踪', sub: '监测词与优化词表现' },
  ];

  const Chevron = () => (
    <div className="flex items-center shrink-0">
      <svg className="w-8 h-8 text-[#004CE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
    </div>
  );

  return (
    <SlideLayout title="GEO ONE 系统架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        多平台数据汇入 <span className="text-white font-bold">GEO ONE 引擎</span>，输出多维实时监测看板 —— 我们开展 GEO 业务的<span className="text-white font-bold">眼睛</span>。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-8 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none font-['MiSans'] flex items-stretch gap-6">
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider">中枢式架构</span>
        </div>

        {/* 左：数据输入源 */}
        <div className="w-[400px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-400 mb-4 flex items-center gap-2.5"><span className="w-1.5 h-5 bg-zinc-500 rounded-full" />数据输入源</div>
          <div className="flex-1 flex flex-col justify-between gap-3">
            {sources.map((s) => (
              <div key={s} className="flex-1 bg-[#111115] border border-white/10 rounded-xl px-5 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 shrink-0" />
                <span className="text-[22px] font-bold text-zinc-100">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <Chevron />

        {/* 中：引擎核心 */}
        <div className="flex-1 flex flex-col">
          <div className="text-[20px] font-bold text-blue-400 mb-4 flex items-center gap-2.5"><span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />GEO ONE 引擎核心</div>
          <div className="flex-1 rounded-2xl bg-gradient-to-b from-[#003bb3] to-[#001430] border border-[#60A5FA]/40 shadow-[0_0_40px_rgba(0,76,229,0.3)] p-7 flex flex-col justify-between">
            <div className="text-center">
              <div className="text-[15px] font-bold text-blue-200/70 tracking-[0.3em]">SELF-DEVELOPED</div>
              <div className="text-[30px] font-black text-white mt-1">耗时一年自研引擎</div>
            </div>
            <div className="flex flex-col gap-4">
              {core.map((c, i) => (
                <React.Fragment key={c.t}>
                  <div className="bg-white/[0.08] border border-white/20 rounded-xl px-5 py-4 text-center backdrop-blur">
                    <div className="text-[24px] font-bold text-white">{c.t}</div>
                    <div className="text-[16px] text-blue-100/70 mt-1">{c.d}</div>
                  </div>
                  {i < core.length - 1 && (
                    <div className="flex justify-center">
                      <svg className="w-6 h-6 text-blue-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <Chevron />

        {/* 右：监测看板 */}
        <div className="w-[440px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-300 mb-4 flex items-center gap-2.5"><span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />实时监测看板</div>
          <div className="flex-1 flex flex-col justify-between gap-3">
            {dashboard.map((d) => (
              <div key={d.label} className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-5 flex flex-col justify-center">
                <span className="text-[22px] font-bold text-white leading-tight">{d.label}</span>
                <span className="text-[15px] text-zinc-500 mt-1">{d.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_GeoMonitorArchitecture.hideHeader = true;
