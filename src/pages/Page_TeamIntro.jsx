import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_TeamIntro() {
  const members = [
    {
      id: "ouyang",
      name: "欧阳",
      role: "项目负责人",
      desc: "曾主导多个世界500强企业在大模型时代下的搜索引擎与生成式人工智能（GAI）检索优化方案。全面把控创维项目的数据交付与技术路线，精通从关键词拦截到生成式召回算法干预的全链路操盘。"
    },
    {
      id: "jiani",
      name: "佳妮",
      role: "数据洞察专家",
      desc: "负责GEO监测系统内大模型采样数据的清洗、聚类分析与效果归因。能够将复杂的大模型语义检索权重、相关度得分等量化指标，转化为对品牌决策极具参考价值的直观洞察报告。"
    },
    {
      id: "haiqing",
      name: "海清",
      role: "算法架构师",
      desc: "主导研发了GEO专属大模型监测系统与量化对冲回归模型。深度解析各主流大模型（如豆包、Kimi、GPT）的向量化索引机制，为优化动作提供科学的量化归因与权重分配算法。"
    },
    {
      id: "meixiao",
      name: "美晓",
      role: "大模型研究员",
      desc: "专门跟踪与拆解各大主流大模型（LLM）的底层抓取偏好与语义重排（Rerank）机制。定期产出大模型检索更新报告，为内容Agent的提示词工程与语料重构提供不可或缺的学术与技术支撑。"
    },
    {
      id: "qixuan",
      name: "绮璇",
      role: "项目统筹",
      desc: "专注于跨团队的高效协作与全周期敏捷管理。负责创维项目日常运营、交付节点的进度追踪、多业务线资源调配以及优化建议的实时同步，确保交付成果的高质量与即时响应。"
    },
    {
      id: "longsheng",
      name: "龙生",
      role: "品牌策略师",
      desc: "负责高质量、高机器可读性（Machine-Readability）的内容语料生产与优化。确保文章结构完全契合大模型的检索引用机制，在实现AI友好排版的同时，兼顾用户的真实决策导向。"
    }
  ];

  return (
    <SlideLayout title="核心成员">
      {/* ── 说明文字移至 content top line 上方，靠右侧对齐，避免与左侧大标题冲突 (加大至 32px) ── */}
      <div className="absolute top-[-56px] right-0 text-[32px] text-zinc-400 font-medium font-['MiSans'] select-none">
        6位核心成员 + <span className="text-white font-bold">20+名数字员工（AI Agent）</span>，实现全天候的自动化内容生产与智能监测。
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ── 核心成员主排版区：起于 top: 0px，高度 795px，完全占满主要排版区，无圆角直角网格 ── */}
      <div
        className="absolute left-0 w-full grid grid-cols-3 grid-rows-2 border border-white/15 rounded-none overflow-hidden bg-zinc-950/10 z-10 select-none"
        style={{ top: '0px', height: '795px' }}
      >
        {members.map((member, idx) => {
          const col = idx % 3; // 0, 1, 2
          const row = Math.floor(idx / 3); // 0, 1

          // Uniform inner divider lines (白色细线)
          const borderClasses = `
            ${col !== 2 ? 'border-r border-white/15' : ''}
            ${row !== 1 ? 'border-b border-white/15' : ''}
          `.trim();

          return (
            <div
              key={idx}
              className={`flex items-stretch h-full w-full group cursor-default transition-all ${borderClasses}`}
            >
              {/* Left Column: Portrait Image (上下顶格，w-[240px]) */}
              <div className="w-[240px] h-full shrink-0 bg-zinc-900 border-r border-white/15 overflow-hidden relative shadow-md">
                <img
                  src={`/team/${member.id}.jpg`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-none"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center hidden bg-zinc-900">
                  <svg className="w-10 h-10 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Right Column: Text Content (加内边距，垂直居中) */}
              <div className="flex-1 flex flex-col justify-center px-8 py-6 min-w-0">
                {/* Name & Role (字号进一步放大) */}
                <div className="flex items-baseline mb-3">
                  <span className="text-[36px] font-black text-white font-['MiSans'] tracking-wide">
                    {member.name}
                  </span>
                  <span className="text-[26px] font-black text-[#004CE5] font-['MiSans'] ml-3.5 tracking-wide uppercase">
                    {member.role}
                  </span>
                </div>

                {/* Description Body (字号缩减至 22px) */}
                <p className="text-zinc-400 text-[22px] leading-relaxed font-sans font-medium text-justify">
                  {member.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}

// Disable header logic since SlideLayout renders the customized title
Page_TeamIntro.hideHeader = true;
