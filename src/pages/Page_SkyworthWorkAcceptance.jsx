import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@700;800&display=swap');`;

const STAGES = [
  {
    step: '01',
    timeLabel: '第一阶段 (W1)',
    title: '现状大摸底',
    tasks: '全量核心监测词/优化词 AI 数据大摸底，盘点创维品牌推荐份额与被提及现状。',
    roles: '项目经理 / 数据分析师',
    arrowLabel: 'preparation'
  },
  {
    step: '02',
    timeLabel: '第二阶段 (W1)',
    title: '竞品拦截分析',
    tasks: '对比海信、TCL 等核心竞品大模型推荐路径，定位本品流量流失点。',
    roles: 'GEO 算法专家',
    arrowLabel: 'start'
  },
  {
    step: '03',
    timeLabel: '第三阶段 (W2)',
    title: '词条策略规划',
    tasks: '规划品类大词、5 款专属产品词及高转化场景问题词，并做优先级分层。',
    roles: 'GEO 策略总监',
    arrowLabel: 'strategy'
  },
  {
    step: '04',
    timeLabel: '第四阶段 (W3)',
    title: '语料内容构建',
    tasks: '撰写极致薄贴墙、画质及场景评测语料，构建品牌核心采信信息。',
    roles: '内容策划 / 文案师',
    arrowLabel: 'building'
  },
  {
    step: '05',
    timeLabel: '第五阶段 (W3)',
    title: '外部引用链搭建',
    tasks: '部署权威官方信源及外部可信信号，引导大模型搜索引擎抓取。',
    roles: '链路部署工程师',
    arrowLabel: 'execute'
  },
  {
    step: '06',
    timeLabel: '第六阶段 (W4-W6)',
    title: '高权分发植入',
    tasks: '精选知乎、值得买等高权重平台发布评测内容，构建高强度引用源。',
    roles: '媒介经理 / 分发专员',
    arrowLabel: 'seeding'
  },
  {
    step: '07',
    timeLabel: '第七阶段 (W7+)',
    title: '异常纠偏监测',
    tasks: '日/周级监测大模型推荐走势，针对异常负面或错误认知动态纠偏。',
    roles: '监测分析师 / 技术专家',
    arrowLabel: 'monitoring'
  },
  {
    step: '08',
    timeLabel: '第八阶段 (W7+)',
    title: '效果验收与迭代',
    tasks: '输出月度 GEO 执行成果报告，依据最新算法更新持续滚动升级策略。',
    roles: '项目经理 (PM)',
    arrowLabel: 'finish'
  }
];

export function Page_SkyworthWorkAcceptance() {
  // 按照流程顺序渲染在 grid 中的元素
  // 第一行从左到右：Step 1, 2, 3, 4
  // 第二行从右到左：Step 8, 7, 6, 5 (以 Col 1-4 的排布依次为: 8, 7, 6, 5)
  const orderedStages = [
    STAGES[0], // Col 1, Row 1 (Step 01)
    STAGES[1], // Col 2, Row 1 (Step 02)
    STAGES[2], // Col 3, Row 1 (Step 03)
    STAGES[3], // Col 4, Row 1 (Step 04)
    STAGES[7], // Col 1, Row 2 (Step 08)
    STAGES[6], // Col 2, Row 2 (Step 07)
    STAGES[5], // Col 3, Row 2 (Step 06)
    STAGES[4]  // Col 4, Row 2 (Step 05)
  ];

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-16 sm:px-20 py-16 overflow-hidden animate-fade-in bg-[#08080a]">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

        {/* 页面标题 (符合参考图的左上角排版) */}
        <div className="shrink-0 mb-16 self-start">
          <h1 
            className="font-extrabold text-white tracking-wider uppercase leading-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '42px' }}
          >
            STAGES OF WORK
          </h1>
          <p className="text-[17px] text-zinc-400 font-medium tracking-wide mt-2">
            工作内容、时间节点与责任人员安排流程图
          </p>
        </div>

        {/* 流程图 Grid 区域 */}
        <div className="flex-grow flex items-center min-h-0 relative z-10 w-full max-w-[1740px] mx-auto mb-6">
          <div className="grid grid-cols-4 gap-x-16 gap-y-20 w-full relative">
            
            {orderedStages.map((s, idx) => {
              const isRow1 = idx < 4; // 0, 1, 2, 3
              const isRow2 = idx >= 4; // 4, 5, 6, 7
              const stepNum = parseInt(s.step);

              return (
                <div key={s.step} className="flex flex-col min-h-[170px] relative">
                  
                  {/* === 顶部点和箭头路线 === */}
                  <div className="relative flex items-center h-6 mb-4">
                    
                    {/* 圆形节点 (Periwinkle Blue 色调) */}
                    <div className="w-4 h-4 rounded-full bg-[#8F9FFF] shadow-[0_0_10px_#8F9FFF] shrink-0" />
                    
                    {/* 第一行从左往右的连接箭头 (Step 1, 2, 3) */}
                    {isRow1 && stepNum < 4 && (
                      <div className="absolute left-5 right-[-64px] h-[1px] bg-zinc-700/80 pointer-events-none" style={{ top: '8px' }}>
                        {/* 箭头标签 */}
                        <span className="absolute top-[-16px] left-1/2 -translate-x-1/2 text-[11px] text-zinc-500 font-mono tracking-wider">
                          {s.arrowLabel}
                        </span>
                        {/* 箭头方向 */}
                        <div className="absolute right-0 top-[-3.5px] w-2 h-2 border-t border-r border-zinc-500 transform rotate-45" />
                      </div>
                    )}

                    {/* 第四步转折弯道 (Step 4 -> Step 5) */}
                    {stepNum === 4 && (
                      <div className="absolute top-[8px] right-[-32px] w-[56px] h-[230px] border-t border-r border-b border-zinc-700/80 rounded-r-3xl pointer-events-none z-0">
                        {/* 弯道中间的连接文本 */}
                        <span className="absolute right-[-14px] top-1/2 -translate-y-1/2 text-[11px] text-zinc-500 font-mono tracking-wider rotate-90">
                          connect
                        </span>
                        {/* 弯道末端指向第五步的左向箭头 */}
                        <div className="absolute bottom-[-4.5px] left-0 w-2.5 h-2.5 border-b border-l border-zinc-500 transform rotate-45" />
                      </div>
                    )}

                    {/* 第二行从右往左的连接箭头 (Step 5, 6, 7 向左流) */}
                    {isRow2 && stepNum > 5 && (
                      <div className="absolute left-5 right-[-64px] h-[1px] bg-zinc-700/80 pointer-events-none" style={{ top: '8px' }}>
                        {/* 箭头标签 */}
                        <span className="absolute top-[-16px] left-1/2 -translate-x-1/2 text-[11px] text-zinc-500 font-mono tracking-wider">
                          {s.arrowLabel}
                        </span>
                        {/* 向左箭头方向 */}
                        <div className="absolute left-0 top-[-3.5px] w-2 h-2 border-b border-l border-zinc-500 transform rotate-45" />
                      </div>
                    )}

                    {/* 第八步最后的 Finish 标签 */}
                    {stepNum === 8 && (
                      <span className="absolute top-[-16px] left-5 text-[11px] text-zinc-500 font-mono tracking-wider">
                        {s.arrowLabel}
                      </span>
                    )}

                  </div>

                  {/* === 文字内容排版 === */}
                  <div className="flex flex-col pr-4">
                    
                    {/* 时间周期与标题 */}
                    <div className="flex flex-col mb-2">
                      <span className="text-[13px] font-mono tracking-wider text-[#8F9FFF] font-bold">
                        {s.timeLabel}
                      </span>
                      <h4 className="text-[20px] xl:text-[22px] font-bold text-white tracking-wide mt-0.5">
                        {s.title}
                      </h4>
                    </div>

                    {/* 具体任务 */}
                    <p className="text-[15px] xl:text-[16px] text-zinc-400 leading-relaxed text-justify">
                      {s.tasks}
                    </p>

                    {/* 责任人员安排 */}
                    <span className="text-[13px] xl:text-[14px] text-[#8F9FFF]/70 font-semibold font-mono tracking-wider mt-3">
                      [人员: {s.roles}]
                    </span>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthWorkAcceptance.hideHeader = true;

export default Page_SkyworthWorkAcceptance;
