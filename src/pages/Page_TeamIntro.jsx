import React from 'react';
import SlideLayout from '../components/SlideLayout';

const members = [
  {
    id: "ouyang",
    name: "欧阳",
    role: "项目负责人",
    desc: "负责项目的整体推进，统筹策略制定、数据交付与优化节奏。有多个行业中大品牌的 GEO 项目经验，确保从关键词到内容落地形成完整闭环。"
  },
  {
    id: "jiani",
    name: "佳妮",
    role: "数据洞察专家",
    desc: "负责 GEO ONE 监测数据的清洗、分析与归因，把大模型采样中的排名、引用、情绪等指标，整理成能支撑品牌决策的洞察报告。"
  },
  {
    id: "haiqing",
    name: "海清",
    role: "算法架构师",
    desc: "负责 GEO ONE 数据监测系统与 Alpha 量化竞争模型的研发与维护，把各主流大模型的引用规律拆解为可量化的归因和优化依据。"
  },
  {
    id: "meixiao",
    name: "美晓",
    role: "大模型研究员",
    desc: "持续跟踪豆包、Kimi、GPT 等主流大模型的抓取与排序偏好，输出更新观察，为内容 Agent 的提示词和语料结构提供依据。"
  },
  {
    id: "qixuan",
    name: "绮璇",
    role: "项目统筹",
    desc: "负责项目的日常运营与协作，跟进交付节点、协调多方资源、同步优化进展，保证团队高效运转和及时响应。"
  },
  {
    id: "longsheng",
    name: "龙生",
    role: "品牌策略师",
    desc: "负责品牌与内容策略，产出结构清晰、信息可核验的 GEO 内容，让文章既符合大模型的引用逻辑，也能真正帮用户做决策。"
  }
];

const aiAgents = [
  {
    id: "content",
    title: "内容创作Agent",
    desc: "基于谷歌 NotebookLM 研发，批量产出 GEO 内容初稿、整理产品参数与基础语料，判断与打磨仍由人工把关。"
  },
  {
    id: "monitor",
    title: "数据监测Agent",
    desc: "依托 GEO ONE 系统，7×24 小时监测各大模型对创维及竞品的引用、排名与情绪变化。"
  },
  {
    id: "review",
    title: "评论分析Agent",
    desc: "抓取并分析电商与社媒的真实用户评论，提炼卖点、口碑与用户之声。"
  },
  {
    id: "quant",
    title: "量化分析Agent",
    desc: "运行 Alpha 量化竞争模型，完成竞品对比、权重计算与优化效果归因。"
  }
];

function Portrait({ src, alt, className = "", contain = false }) {
  const wrapperClass = contain
    ? "shrink-0 bg-black overflow-hidden relative flex items-center justify-center"
    : "shrink-0 bg-zinc-900 overflow-hidden relative shadow-md flex items-center justify-center";

  return (
    <div className={`${wrapperClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={
          contain
            ? "w-full h-full object-contain"
            : "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-none"
        }
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling.style.display = 'flex';
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center hidden bg-black">
        <svg className="w-10 h-10 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </div>
  );
}

function BackgroundDots() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

export default function Page_TeamIntro() {
  return (
    <SlideLayout title="核心成员">
      <BackgroundDots />

      <div className="absolute left-0 w-full flex gap-8 z-10 select-none" style={{ top: '0px', height: '795px' }}>
        {/* 左侧：真人核心团队 */}
        <div className="w-[1160px] shrink-0 flex flex-col">
          <div className="flex-1 grid grid-cols-2 grid-rows-3 border border-white/15 rounded-none overflow-hidden bg-zinc-950/10">
            {members.map((member, idx) => {
              const col = idx % 2;
              const row = Math.floor(idx / 2);
              const borderClasses = `
                ${col !== 1 ? 'border-r border-white/15' : ''}
                ${row !== 2 ? 'border-b border-white/15' : ''}
              `.trim();

              return (
                <div
                  key={idx}
                  className={`flex items-center h-full w-full group cursor-default px-6 py-4 gap-5 ${borderClasses}`}
                >
                  <Portrait
                    src={`/team/${member.id}.jpg`}
                    alt={member.name}
                    className="w-[110px] h-[150px]"
                  />
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <div className="flex items-baseline mb-2">
                      <span className="text-[28px] font-black text-white font-['MiSans'] tracking-wide">
                        {member.name}
                      </span>
                      <span className="text-[20px] font-black text-[#004CE5] font-['MiSans'] ml-3 tracking-wide">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-[17px] leading-relaxed font-sans font-medium text-justify">
                      {member.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右侧：AI 数字员工 */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col border border-white/15 rounded-none overflow-hidden bg-black">
            {aiAgents.map((agent, idx) => (
              <div
                key={idx}
                className={`flex-1 flex items-center gap-5 px-6 py-4 group ${idx !== aiAgents.length - 1 ? 'border-b border-white/12' : ''}`}
              >
                <Portrait
                  src={`/team/agent-${agent.id}.jpg`}
                  alt={agent.title}
                  contain
                  className="w-[110px] h-[110px]"
                />
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <span className="text-[26px] font-black text-white font-['MiSans'] mb-2">{agent.title}</span>
                  <p className="text-zinc-400 text-[18px] leading-relaxed font-sans font-medium text-justify">
                    {agent.desc}
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

Page_TeamIntro.hideHeader = true;
