import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_UserCommentArchitecture() {
  const funnel = [
    { w: '100%', title: '跨平台评论采集', desc: '电商 / 社媒 / 论坛 / 问答，海量真实用户评论', tag: '原始评论' },
    { w: '82%', title: '清洗与去伪', desc: '去水军、去广告、去重，剔除噪声与异常数据', tag: '有效评论' },
    { w: '64%', title: '智能解析', desc: '情感分析 + 主题聚类 + 痛点关注点提取', tag: '语义标签' },
    { w: '46%', title: '结构化洞察', desc: '精炼为可直接决策使用的结构化洞察', tag: '洞察沉淀' },
  ];
  const bg = ['from-[#1a2740] to-[#0e1728]', 'from-[#1c3a6b] to-[#0e1c38]', 'from-[#0d4bb0] to-[#0a2a63]', 'from-[#004CE5] to-[#0033a0]'];

  const outputs = [
    { label: '用户关注点', sub: '最在意的功能与体验维度排序' },
    { label: '真实痛点', sub: '高频抱怨与负面反馈聚合' },
    { label: '认知误区', sub: '用户对产品的误解与盲区' },
    { label: '内容方向', sub: '反哺 GEO 选题与优化词方向' },
  ];

  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        海量碎片化<span className="text-white font-bold">用户评论</span>，层层收敛提纯为<span className="text-white font-bold">结构化洞察</span>，为内容与产品判断提供依据。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-8 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none font-['MiSans'] flex items-stretch gap-8">
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider">收敛漏斗</span>
        </div>

        {/* 左：漏斗 */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="text-[20px] font-bold text-zinc-300 mb-4 flex items-center gap-2.5 shrink-0"><span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />数据提纯漏斗</div>
          <div className="flex-1 flex flex-col justify-between items-center">
            {funnel.map((f, i) => (
              <React.Fragment key={f.title}>
                <div
                  className={`bg-gradient-to-b ${bg[i]} border border-white/15 rounded-2xl px-8 flex items-center justify-between shadow-lg`}
                  style={{ width: f.w, height: '112px' }}
                >
                  <div className="min-w-0">
                    <div className="text-[26px] font-bold text-white leading-tight">{f.title}</div>
                    <div className="text-[16px] text-zinc-300/80 mt-1 truncate">{f.desc}</div>
                  </div>
                  <span className="shrink-0 ml-4 text-[15px] font-bold text-white bg-white/15 border border-white/20 px-3 py-1 rounded-full whitespace-nowrap">{f.tag}</span>
                </div>
                {i < funnel.length - 1 && (
                  <svg className="w-7 h-7 text-[#004CE5] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 右：四类洞察输出 */}
        <div className="w-[620px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-300 mb-4 flex items-center gap-2.5 shrink-0"><span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />四类核心洞察输出</div>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5">
            {outputs.map((o, i) => (
              <div key={o.label} className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col justify-center overflow-hidden">
                <div className="absolute top-2 right-5 text-[80px] font-['Montserrat'] font-black text-white/[0.06] leading-none pointer-events-none">0{i + 1}</div>
                <span className="text-[28px] font-bold text-white leading-tight relative z-10">{o.label}</span>
                <span className="text-[18px] text-zinc-400 mt-2.5 leading-snug relative z-10">{o.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture.hideHeader = true;
