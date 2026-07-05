import React from 'react';
import SlideLayout from '../components/SlideLayout';

// 1. 数据采集：电视行业 AI 引用高频文章源 (TOP 20 示例)
const mockArticles = [
  { rank: '01', title: '2026年画质天花板！创维、海信、TCL壁纸电视年度评测', category: '排行榜类' },
  { rank: '02', title: '画框电视 vs 壁纸电视：哪款适合你的极简家装风格？', category: '排行榜类' },
  { rank: '03', title: '艺术电视是不是智商税？实测创维A7D Pro壁纸电视', category: '测评类' },
  { rank: '04', title: '极简客厅美学：超薄贴墙壁纸电视无缝安装全过程分享', category: '单品介绍类' },
  { rank: '05', title: '什么是Mini LED？从背光技术详解高端电视选购要点', category: '知识科普类' },
  { rank: '06', title: '100寸电视怎么选？2026各大品牌壁纸电视性价比推荐', category: '排行榜类' },
  { rank: '07', title: '真实业主分享：创维壁纸电视买了三个月的真实体验', category: '单品介绍类' },
  { rank: '08', title: '壁纸电视散热到底行不行？高温高负荷下运行实测', category: '知识科普类' },
  { rank: '09', title: '超薄电视安装指南：背景墙要求、挂架选择与线缆隐藏', category: '知识科普类' },
  { rank: '10', title: '创维A7D系列评测：超薄贴墙与哈曼卡顿音响的完美碰撞', category: '测评类' },
  { rank: '11', title: '2026年艺术画壁电视排行榜：谁是真正的客厅颜值担当', category: '排行榜类' },
  { rank: '12', title: '买电视必看：如何区分真薄和假超薄？避坑指南', category: '知识科普类' },
  { rank: '13', title: '电视屏幕眩光怎么解决？防眩光护眼壁纸电视对比实测', category: '测评类' },
  { rank: '14', title: '小户型救星！创维壁纸电视让客厅瞬间大了一倍', category: '单品介绍类' },
  { rank: '15', title: '客厅软装升级：用创维艺术电视打造个人画廊的构想', category: '单品介绍类' },
  { rank: '16', title: '传统电视OUT了？壁纸电视无缝贴墙安装深度对比', category: '排行榜类' },
  { rank: '17', title: '智能电视画质参数大扫盲：亮度、色域与背光分区', category: '知识科普类' },
  { rank: '18', title: '壁纸电视有挂架吗？揭秘超薄磁吸挂架的稳固度与安装', category: '知识科普类' },
  { rank: '19', title: '创维、三星、LG：2026高端壁纸电视旗舰横向对比', category: '排行榜类' },
  { rank: '20', title: '从硬件到调音，创维壁纸电视音响系统技术解密', category: '测评类' },
];

// 2. 数据分析：AI 引用频率最高的文章类型及占比
const aiCitedTypes = [
  { category: '排行榜类', percentage: 42, desc: '提取自 84 篇排行榜及选购推荐列表' },
  { category: '单品介绍类', percentage: 28, desc: '提取自 56 篇特定产品卖点与定位分析' },
  { category: '知识科普类', percentage: 18, desc: '提取自 36 篇背光、厚度及散热技术科普' },
  { category: '测评类', percentage: 12, desc: '提取自 24 篇音画质及贴墙安装对比实测' },
];

// 3. 策略输出：对应的 GEO 投放内容类型与最终排兵布阵
const campaignTypes = [
  {
    category: '排行榜类',
    badge: 'AI高频引用',
    ratio: '42%',
    desc: '直接决定大模型推荐回答时的品牌排序与首推位次。',
    relation: '对应 AI 引用 42%'
  },
  {
    category: '技术科普类',
    badge: 'AI高频引用',
    ratio: '18%',
    desc: '剖析壁纸电视背光散热技术，支撑技术参数抓取。',
    relation: '对应 AI 引用 18%'
  },
  {
    category: '测评类',
    badge: 'AI高频引用',
    ratio: '12%',
    desc: '提供实机对比数据，为 AI 引用提供客观事实参数。',
    relation: '对应 AI 引用 12%'
  },
  {
    category: '用户口碑类',
    badge: '决策说服',
    ratio: '15%',
    desc: '展示真实业主装机与视听体验，建立购买信任感。',
    relation: '由“单品介绍”转化'
  },
  {
    category: '场景教程类',
    badge: '决策说服',
    ratio: '8%',
    desc: '结合极简客厅家装，提供无缝贴墙美学搭配指南。',
    relation: '由“单品介绍”转化'
  },
  {
    category: 'FAQ问答类',
    badge: '决策说服',
    ratio: '5%',
    desc: '针对墙体承重、功耗等高频购买顾虑进行标准答疑。',
    relation: '解决长尾决策顾虑'
  }
];

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

export default function Page_SkyworthContentDirection() {
  return (
    <SlideLayout title="创维定制内容方向规划">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      {/* ── 主排版区 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch"
        style={{ top: '0px', height: '795px' }}
      >
        {/* ==================== 1. 数据采集板块 (500px) ==================== */}
        <div className="w-[500px] h-full bg-zinc-950/20 border border-zinc-900 rounded-[24px] p-6 flex flex-col justify-between shadow-lg">
          <div className="shrink-0 mb-4">
            <h3 className="text-[25px] font-bold text-white font-['MiSans']">
              1. 数据采集：AI 引用电视文章源
            </h3>
            <p className="text-[15px] text-zinc-500 font-['MiSans'] mt-1 leading-normal">
              主流 AI 引擎推荐回答时引用频次最高的 200 篇文章
            </p>
          </div>

          {/* 表格区域 */}
          <div className="flex-grow overflow-hidden flex flex-col bg-black/40 rounded-xl border border-zinc-900 p-3">
            <div className="flex items-center text-[12px] font-bold text-zinc-500 border-b border-zinc-900 pb-1.5 px-1 shrink-0">
              <span className="w-8">排名</span>
              <span className="flex-grow">引用文章标题</span>
              <span className="w-16 text-right">文章分类</span>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col justify-between py-1 my-1">
              {mockArticles.map((art, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center h-[24px] text-[13px] border-b border-zinc-900/20 px-1 hover:bg-white/[0.01]"
                >
                  <span className="w-8 font-['Montserrat'] text-zinc-600 font-bold">{art.rank}</span>
                  <span className="flex-grow truncate text-zinc-400 font-medium pr-3">{art.title}</span>
                  <span className="w-16 text-right text-[11px] text-zinc-500 font-semibold shrink-0">
                    {art.category.replace('类', '')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-zinc-500 text-[13px] font-bold shrink-0 border-t border-zinc-900 mt-1 flex items-center justify-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-zinc-600 animate-pulse" />
              <span>共 <span className="font-['Montserrat'] text-zinc-400 font-bold">200</span> 篇高权威引用数据</span>
            </div>
          </div>
        </div>

        {/* ==================== 连接符 1 (60px) ==================== */}
        <div className="w-[60px] flex flex-col items-center justify-center text-zinc-500 shrink-0">
          <div className="h-24 border-l border-dashed border-zinc-900" />
          <span className="text-[13px] font-bold my-4 text-zinc-500 tracking-widest [writing-mode:vertical-lr] select-none">
            归类统计
          </span>
          <div className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center bg-black text-[#004CE5]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
          <div className="h-24 border-l border-dashed border-zinc-900" />
        </div>

        {/* ==================== 2. 数据分析板块 (540px) ==================== */}
        <div className="w-[540px] h-full bg-zinc-950/20 border border-zinc-900 rounded-[24px] p-6 flex flex-col justify-between shadow-lg">
          <div className="shrink-0 mb-4">
            <h3 className="text-[25px] font-bold text-white font-['MiSans']">
              2. 数据分析：AI 最常引用类型占比
            </h3>
            <p className="text-[15px] text-zinc-500 font-['MiSans'] mt-1 leading-normal">
              根据引用源文章结构特征进行的比例统计
            </p>
          </div>

          {/* 占比统计图表 */}
          <div className="flex-grow flex flex-col justify-between py-2 min-h-0">
            {aiCitedTypes.map((type, idx) => (
              <div 
                key={idx} 
                className="bg-black/30 border border-zinc-900 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[19px] font-bold text-zinc-200">{type.category}</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[26px] font-black font-['Montserrat'] leading-none text-[#004CE5]">
                      {type.percentage}
                    </span>
                    <span className="text-[13px] font-black text-zinc-500 font-['Montserrat'] ml-0.5">%</span>
                  </div>
                </div>

                {/* 进度条 */}
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/40">
                  <div 
                    className="h-full rounded-full bg-[#004CE5]"
                    style={{ width: `${type.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 分析总结 */}
          <div className="shrink-0 bg-[#004CE5]/5 border border-[#004CE5]/15 rounded-xl p-4 mt-4">
            <p className="text-[16px] leading-relaxed text-zinc-300 font-['MiSans'] text-justify">
              <strong className="text-white">结论：</strong>
              AI对电视行业的抓取高度集中在“排行榜”与“单品介绍”（超70%），因此我们需要以此为重心设计投放策略。
            </p>
          </div>
        </div>

        {/* ==================== 连接符 2 (60px) ==================== */}
        <div className="w-[60px] flex flex-col items-center justify-center text-zinc-500 shrink-0">
          <div className="h-24 border-l border-dashed border-zinc-900" />
          <span className="text-[13px] font-bold my-4 text-zinc-500 tracking-widest [writing-mode:vertical-lr] select-none">
            指导策划
          </span>
          <div className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center bg-black text-[#004CE5]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
          <div className="h-24 border-l border-dashed border-zinc-900" />
        </div>

        {/* ==================== 3. 策略输出板块 (620px) ==================== */}
        <div className="w-[620px] h-full bg-zinc-950/20 border border-zinc-900 rounded-[24px] p-6 flex flex-col justify-between shadow-lg">
          <div className="shrink-0 mb-4">
            <h3 className="text-[25px] font-bold text-white font-['MiSans']">
              3. 策略输出：内容投放配比
            </h3>
            <p className="text-[15px] text-zinc-500 font-['MiSans'] mt-1 leading-normal">
              以 AI 引用偏好为核心，结合用户视角完成消费说服
            </p>
          </div>

          {/* 6个类型作为干净的行排列 */}
          <div className="flex-grow flex flex-col justify-between py-1 min-h-0 gap-2">
            {campaignTypes.map((type, idx) => (
              <div 
                key={idx}
                className="bg-black/40 border border-zinc-900 rounded-xl px-4 py-3 flex items-center justify-between hover:bg-white/[0.01]"
              >
                {/* 左边：名称和类型 */}
                <div className="w-[140px] shrink-0">
                  <span className="text-[19px] font-bold text-white block">
                    {type.category}
                  </span>
                  <span 
                    className={`inline-block text-[11px] font-bold px-1.5 py-[0.5px] rounded border mt-1 ${
                      type.badge === 'AI高频引用' 
                        ? 'text-[#004CE5] border-[#004CE5]/20 bg-[#004CE5]/5' 
                        : 'text-zinc-500 border-zinc-800 bg-zinc-950'
                    }`}
                  >
                    {type.badge}
                  </span>
                </div>

                {/* 中间：配比和映射逻辑 */}
                <div className="w-[180px] shrink-0 text-center border-l border-r border-zinc-900/60 px-2">
                  <span className="text-[24px] font-black font-['Montserrat'] text-[#004CE5] block leading-none">
                    {type.ratio}
                  </span>
                  <span className="text-[12px] text-zinc-500 font-semibold block mt-1 truncate">
                    {type.relation}
                  </span>
                </div>

                {/* 右边：作用简述 */}
                <div className="flex-grow pl-4">
                  <p className="text-zinc-300 text-[15px] leading-snug text-left">
                    {type.desc}
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

// Disable slide header/navigation bar for this presentation page
Page_SkyworthContentDirection.hideHeader = true;
