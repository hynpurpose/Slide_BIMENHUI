import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

const WORK_STEPS = [
  {
    stage: '第一阶段：诊断评估',
    time: '第一周 (第1-7天)',
    tasks: [
      { label: '数据摸底', desc: '全量核心词/监测词数据大摸底，盘点本品被提及现状。' },
      { label: '竞品诊断', desc: '对比主要竞品推荐路径，定位本品流量流失与拦截点。' },
      { label: '报告输出', desc: '输出首期《品牌大模型 GEO 现状诊断报告》。' }
    ],
    roles: ['项目经理', '算法专家', '数据分析师']
  },
  {
    stage: '第二阶段：策略内容',
    time: '第二至三周 (第8-21天)',
    tasks: [
      { label: '策略制定', desc: '规划品牌词「一守一攻」策略及核心产品词差异化定位。' },
      { label: '语料构建', desc: '撰写场景评测与卖点语料，构建品牌核心信息。' },
      { label: '信号部署', desc: '部署官方权威信源与外部多来源可信引用推荐信号。' }
    ],
    roles: ['策略总监', '内容策划', '文案创意师']
  },
  {
    stage: '第三阶段：分发植入',
    time: '第四至六周 (第22-42天)',
    tasks: [
      { label: '平台分发', desc: '精选知乎、值得买等垂直高权重平台进行评测内容发布。' },
      { label: '信号植入', desc: '部署外部权威媒体引用链条，引导大模型搜索爬取。' },
      { label: '信源对齐', desc: '优化官网及官方资料库，提升被大模型引用为出处的概率。' }
    ],
    roles: ['媒介经理', '分发专员', '链路工程师']
  },
  {
    stage: '第四阶段：监测迭代',
    time: '第七周及以后',
    tasks: [
      { label: '例行监测', desc: '日常监测核心推荐位次及负面变动，确保指标平稳。' },
      { label: '动态纠偏', desc: '针对回答异动或错误认知，第一时间补充正确语料纠偏。' },
      { label: '月报总结', desc: '输出月度 GEO 效果报告，并随算法变化滚动升级策略。' }
    ],
    roles: ['监测分析师', '技术专家', '项目经理']
  }
];

export function Page_SkyworthWorkAcceptance() {
  return (
    <SlideLayout title="工作安排与时间节点">
      <div className="w-full h-full flex flex-col justify-start pt-4 relative text-white font-sans overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

        {/* ── 清晰且大气的表格 ── */}
        <div className="w-full flex flex-col flex-grow min-h-0 justify-between">
          
          <table className="w-full text-left border-collapse flex-grow">
            <thead>
              <tr className="border-b-2 border-white/20 text-zinc-300 text-[22px] xl:text-[24px] font-bold">
                <th className="pb-4 pl-4 w-[20%]">项目阶段</th>
                <th className="pb-4 w-[18%] pl-6">时间节点</th>
                <th className="pb-4 w-[44%] pl-6">核心工作安排</th>
                <th className="pb-4 pr-4 w-[18%] pl-6">责任人员</th>
              </tr>
            </thead>
            <tbody className="text-[20px] xl:text-[22px] leading-relaxed">
              
              {WORK_STEPS.map((item, idx) => (
                <tr 
                  key={idx} 
                  className={`border-b border-white/10 last:border-none hover:bg-white/[0.01] transition-colors duration-200`}
                >
                  {/* 项目阶段 */}
                  <td className="py-5 pl-4 font-bold text-white align-middle">
                    {item.stage}
                  </td>
                  
                  {/* 时间节点 */}
                  <td className="py-5 text-[#8F9FFF] font-bold align-middle pl-6">
                    {item.time}
                  </td>
                  
                  {/* 核心工作安排 */}
                  <td className="py-5 text-zinc-300 align-middle pr-6 pl-6">
                    <div className="flex flex-col gap-2">
                      {item.tasks.map((task, tIdx) => (
                        <p key={tIdx}>
                          <strong className="text-white font-bold">{tIdx + 1}. {task.label}:</strong> {task.desc}
                        </p>
                      ))}
                    </div>
                  </td>
                  
                  {/* 责任人员 */}
                  <td className="py-5 align-middle pr-4 pl-6">
                    <div className="flex flex-wrap gap-2.5">
                      {item.roles.map((r, rIdx) => (
                        <span 
                          key={rIdx} 
                          className="bg-[#004CE5]/10 border border-[#004CE5]/20 text-[#60A5FA] px-2.5 py-1 rounded-lg text-[15px] xl:text-[17px] font-semibold"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthWorkAcceptance.hideHeader = true;

export default Page_SkyworthWorkAcceptance;
