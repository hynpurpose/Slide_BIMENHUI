import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Shield, Layers } from 'lucide-react';

export default function Page_SuningDailyStrategy() {
  const domains = [
    {
      num: '01',
      title: '平台选择类',
      query: '“买大家电去哪个平台靠谱？”',
      action: '50%精准高权重信源承接',
    },
    {
      num: '02',
      title: '服务保障类',
      query: '“大家电送装一体哪家做得好？”',
      action: '30%潜力垂直社区深度回答',
    },
    {
      num: '03',
      title: '政策活动类',
      query: '“国补在哪个平台能叠加使用？”',
      action: '30%潜力垂直社区教程铺设',
    },
    {
      num: '04',
      title: '本地场景类',
      query: '“附近哪里可以体验家电真机？”',
      action: '结合全国线下门店网络探店铺设',
    },
  ];

  return (
    <SlideLayout
      title="日常投放策略：占领“稳态问题”答案位"
      subtitle="围绕四大核心问题域与服务差异化事实，通过常青内容进行账号与站点的权重累积"
    >
      <div className="absolute w-[1840px] h-full flex gap-8 select-none animate-fadeIn" style={{ top: 0 }}>
        
        {/* ── 左栏：四大核心问题域 (1100px) ── */}
        <div className="w-[1100px] flex flex-col min-h-0">
          <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            日常监测的四大核心问题域
          </h2>
          
          <div className="flex-1 flex flex-col gap-6 justify-between min-h-0">
            {domains.map((d, index) => (
              <div 
                key={index} 
                className="flex-1 bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px] px-8 flex items-center gap-6 hover:border-white/[0.12] transition-all"
              >
                {/* 编号 */}
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-['Montserrat'] text-[32px] font-black text-blue-400 shrink-0">
                  {d.num}
                </div>
                
                {/* 内容 */}
                <div className="flex-grow flex items-center justify-between min-w-0">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[28px] font-black text-white font-['MiSans']">{d.title}</span>
                    <span className="text-[24px] text-zinc-400 font-['MiSans'] truncate">{d.query}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[24px] font-bold text-blue-400 font-['MiSans'] bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full">
                      {d.action}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 分隔线 ── */}
        <div className="w-[1px] h-[720px] bg-white/[0.08] self-center shrink-0" />

        {/* ── 右栏：苏宁服务优势与测试原则 (680px) ── */}
        <div className="flex-grow flex flex-col gap-6 min-h-0">
          {/* 苏宁服务差异化 */}
          <div className="flex-1 bg-[#0B0D19]/45 border border-blue-500/20 rounded-[24px] p-8 flex flex-col justify-center relative">
            <div className="absolute top-6 right-6 text-blue-400/10">
              <Shield size={72} strokeWidth={1} />
            </div>
            <h3 className="text-[30px] font-black text-white font-['MiSans'] mb-4 flex items-center gap-3">
              <span className="w-2.5 h-6 bg-blue-500 rounded-sm" />
              AI偏好事实性差异信息
            </h3>
            <p className="text-[24px] text-zinc-300 font-['MiSans'] leading-relaxed">
              苏宁易购具备三大事实化差异点：<span className="text-white font-bold">大家电送装一体</span>、<span className="text-white font-bold">强大的全国门店网络</span>、<span className="text-white font-bold">以旧换新完整链路</span>。日常投放紧扣这三点铺设常青内容，一次铺设，长期生效。
            </p>
          </div>

          {/* 日常做试验原则 */}
          <div className="flex-1 bg-[#0B0D19]/45 border border-blue-500/20 rounded-[24px] p-8 flex flex-col justify-center relative">
            <div className="absolute top-6 right-6 text-blue-400/10">
              <Layers size={72} strokeWidth={1} />
            </div>
            <h3 className="text-[30px] font-black text-white font-['MiSans'] mb-4 flex items-center gap-3">
              <span className="w-2.5 h-6 bg-blue-500 rounded-sm" />
              日常做试验，大促做收获
            </h3>
            <p className="text-[24px] text-zinc-300 font-['MiSans'] leading-relaxed">
              将所有不确定性的新媒体试验放置于日常执行。在日常把已被验证的渠道固化，等大促到来时进行大范围释放。同时日常累积的账号权重是大促的基础。
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SuningDailyStrategy.hideHeader = true;
