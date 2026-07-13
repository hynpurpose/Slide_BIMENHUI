import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Calendar, Zap, CheckCircle2 } from 'lucide-react';

export default function Page_SuningRhythmAndFramework() {
  const principles = [
    {
      pct: '50%',
      title: '精准高权重信源',
      desc: '考核真实影响而非单纯显示引用，剔除低效的虚高渠道（如抖音仅抓取字幕，对最终AI回答的实际决策影响低，做降权处理）。',
      borderColor: 'border-blue-500/30 bg-blue-500/5',
      tagColor: 'bg-blue-600 text-white',
    },
    {
      pct: '30%',
      title: '潜力垂直社区',
      desc: '筛选单次引用真实权重极高的家电、3C、装修社区，一经引用即可主导整个AI回答框架，锁定排他性深度合作。',
      borderColor: 'border-white/[0.08] bg-white/[0.01]',
      tagColor: 'bg-zinc-800 text-zinc-300 border border-white/[0.1]',
    },
    {
      pct: '20%',
      title: '尝试性新媒体',
      desc: '密切追踪AI搜索引擎与大模型底层引用算法升级方向，提前占领可能升权的独立站点，日常测试、大促收割。',
      borderColor: 'border-white/[0.08] bg-white/[0.01]',
      tagColor: 'bg-zinc-800 text-zinc-300 border border-white/[0.1]',
    },
  ];

  return (
    <SlideLayout
      title="一套渠道框架，两种投放节奏"
      subtitle="日常稳态积累与大促时效收割双线并行，基于 5-3-2 原则优化资源配置"
    >
      <div className="absolute w-[1840px] h-full flex gap-8 select-none animate-fadeIn" style={{ top: 0 }}>
        
        {/* ── 左栏：两种投放节奏 (800px) ── */}
        <div className="w-[800px] flex flex-col min-h-0">
          <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            日常与大促双轨机制
          </h2>
          
          <div className="flex-1 flex flex-col gap-6 min-h-0 justify-between">
            {/* 日常场景 */}
            <div className="flex-1 bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px] p-8 flex flex-col justify-center relative group hover:border-white/[0.12] transition-all">
              <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Calendar size={28} />
              </div>
              <span className="text-[20px] font-extrabold text-blue-400 font-['MiSans'] uppercase tracking-widest mb-2">
                日常场景 · 稳态问题
              </span>
              <h3 className="text-[32px] font-black text-white font-['MiSans'] mb-3">
                解决长期沉淀的信任心智
              </h3>
              <p className="text-[24px] text-zinc-300 font-['MiSans'] leading-relaxed">
                用户问“买家电去哪平台靠谱”。AI 依赖<span className="text-white font-bold">长期沉淀的优质内容</span>，日常需持续供给累积，为大促打下账号级信任。
              </p>
            </div>

            {/* 大促场景 */}
            <div className="flex-1 bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px] p-8 flex flex-col justify-center relative group hover:border-white/[0.12] transition-all">
              <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Zap size={28} />
              </div>
              <span className="text-[20px] font-extrabold text-blue-400 font-['MiSans'] uppercase tracking-widest mb-2">
                大促场景 · 时效问题
              </span>
              <h3 className="text-[32px] font-black text-white font-['MiSans'] mb-3">
                抢占极速刷新的联网抓取
              </h3>
              <p className="text-[24px] text-zinc-300 font-['MiSans'] leading-relaxed">
                用户关注“今年618哪个家电优惠大”。AI 联网检索倾向<span className="text-white font-bold">高时效内容</span>，引用在大促前后快速刷新，须临门现抢。
              </p>
            </div>
          </div>
        </div>

        {/* ── 中间分隔线 ── */}
        <div className="w-[1px] h-[720px] bg-white/[0.08] self-center shrink-0" />

        {/* ── 右栏：5-3-2 渠道框架 (1000px) ── */}
        <div className="flex-1 flex flex-col min-h-0">
          <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            苏宁 GEO 专属的 5-3-2 渠道模型
          </h2>

          <div className="flex-1 flex flex-col gap-6 min-h-0">
            {principles.map((item, index) => (
              <div
                key={index}
                className={`flex-1 border rounded-[24px] p-6 flex items-center gap-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all ${item.borderColor}`}
              >
                {/* 占比数字 */}
                <div className={`w-[110px] h-[110px] rounded-[20px] ${item.tagColor} flex flex-col items-center justify-center font-['Montserrat'] shrink-0 shadow-lg`}>
                  <span className="text-[38px] font-black leading-none">{item.pct}</span>
                  <span className="text-[14px] font-bold tracking-widest mt-1">ALLOC</span>
                </div>

                {/* 描述文本 */}
                <div className="flex-grow flex flex-col justify-center min-w-0">
                  <h3 className="text-[28px] font-black text-white font-['MiSans'] mb-2 flex items-center gap-2">
                    <CheckCircle2 size={22} className="text-blue-400" />
                    {item.title}
                  </h3>
                  <p className="text-[22px] text-zinc-300 font-['MiSans'] leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SuningRhythmAndFramework.hideHeader = true;
