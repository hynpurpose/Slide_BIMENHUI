import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Shield, Sparkles, HelpCircle } from 'lucide-react';

export default function Page_SuningNodeSchedule() {
  const tableData = [
    {
      node: '315',
      water: '2月初',
      feature: '售后、正品、维权、可信度',
      theme: '正品保障、送装服务、门店背书',
      focus: '权威信源为主，强化“安心可靠”平台心智',
      isSpecial: true,
    },
    {
      node: '618',
      water: '4月下旬',
      feature: '全网比价、家电优惠、国补叠加',
      theme: '年中攻略、以旧换新+国补组合玩法',
      focus: '全渠道资源满配，主流比价正面交锋',
    },
    {
      node: '818',
      water: '7月初',
      feature: '自发提问少，偏向“8月买家电”',
      theme: '自有IP教育：818 = 家电专业大促',
      focus: '依托日常常青内容提前植入818与苏宁关联',
      isSpecial: true,
    },
    {
      node: '双11',
      water: '9月下旬',
      feature: '提问全年峰值，全网比价极剧烈',
      theme: '预售避坑、品类榜单、全平台大比价',
      focus: '爆发期超高频更新，防竞对覆盖，时效顶配',
      isSpecial: true,
    },
    {
      node: '双12',
      water: '11月下旬',
      feature: '大促返场、清仓、年货前置',
      theme: '年终盘点与高性价比清仓捡漏',
      focus: '盘点类长尾部署，兼作次年度AI基础语料',
    },
  ];

  return (
    <SlideLayout
      title="苏宁五大节点的差异化安排"
      subtitle="针对不同营销节点的用户提问特征进行内容主题与投放偏好布局"
    >
      <div className="absolute w-[1840px] h-full flex gap-8 select-none animate-fadeIn" style={{ top: 0 }}>
        
        {/* ── 左侧：五大节点差异化矩阵表 (1220px) ── */}
        <div className="w-[1220px] flex flex-col min-h-0">
          <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            GEO 五大营销节点部署矩阵
          </h2>

          <div className="flex-1 bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px] overflow-hidden flex flex-col min-h-0 shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
            {/* 表头 */}
            <div className="flex bg-white/5 border-b border-white/[0.08] text-[22px] font-black text-white font-['MiSans'] py-5 px-6">
              <span className="w-[120px] shrink-0">节点</span>
              <span className="w-[140px] shrink-0 text-center">蓄水期</span>
              <span className="w-[280px] shrink-0">提问特征</span>
              <span className="w-[320px] shrink-0">内容主题定位</span>
              <span className="flex-1">GEO 投放侧重</span>
            </div>

            {/* 表格数据 */}
            <div className="flex-grow flex flex-col justify-between py-1 min-h-0">
              {tableData.map((row, index) => {
                const isLast = index === tableData.length - 1;
                return (
                  <div
                    key={index}
                    className={`flex items-center text-[22px] text-zinc-300 font-['MiSans'] py-5 px-6 ${
                      !isLast ? 'border-b border-white/[0.04]' : ''
                    } ${row.isSpecial ? 'bg-blue-500/[0.02]' : 'hover:bg-white/[0.01]'}`}
                  >
                    {/* 节点名称 */}
                    <span className="w-[120px] shrink-0 text-[24px] font-black text-white flex items-center gap-2">
                      {row.node}
                      {row.isSpecial && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block shrink-0" />
                      )}
                    </span>
                    {/* 蓄水启动 */}
                    <span className="w-[140px] shrink-0 text-center font-bold text-zinc-400 font-['Montserrat']">
                      {row.water}
                    </span>
                    {/* 提问特征 */}
                    <span className="w-[280px] shrink-0 pr-4 leading-normal">
                      {row.feature}
                    </span>
                    {/* 主题定位 */}
                    <span className="w-[320px] shrink-0 pr-4 font-semibold text-white/95 leading-normal">
                      {row.theme}
                    </span>
                    {/* 投放侧重 */}
                    <span className="flex-1 text-zinc-400 leading-normal">
                      {row.focus}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 中间分隔线 ── */}
        <div className="w-[1px] h-[720px] bg-white/[0.08] self-center shrink-0" />

        {/* ── 右侧：三大特殊节点深度解读 (580px) ── */}
        <div className="flex-1 flex flex-col min-h-0 justify-between">
          <h2 className="text-[32px] font-black text-white font-['MiSans'] mb-6 shrink-0 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            三大关键节点深度解读
          </h2>

          <div className="flex-1 flex flex-col gap-6 min-h-0 justify-between">
            {/* 315 */}
            <div className="flex-1 bg-[#0B0D19]/45 border border-blue-500/20 rounded-[20px] p-6 flex items-start gap-4 hover:border-blue-500/35 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                <Shield size={24} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[24px] font-black text-white font-['MiSans'] mb-1.5">
                  315 信任节点：服务主场
                </h4>
                <p className="text-[20px] text-zinc-300 font-['MiSans'] leading-normal">
                  用户聚焦售后与正品。多数竞对不投入此节点，苏宁可利用完善的服务网络进行低成本心智卡位。
                </p>
              </div>
            </div>

            {/* 818 */}
            <div className="flex-1 bg-[#0B0D19]/45 border border-blue-500/20 rounded-[20px] p-6 flex items-start gap-4 hover:border-blue-500/35 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                <Sparkles size={24} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[24px] font-black text-white font-['MiSans'] mb-1.5">
                  818 认知教育：自有IP转化
                </h4>
                <p className="text-[20px] text-zinc-300 font-['MiSans'] leading-normal">
                  用户极少自发搜818。需日常植入“8月买家电就看818”逻辑，使AI回答泛提问时主动带出苏宁。
                </p>
              </div>
            </div>

            {/* 双11 */}
            <div className="flex-1 bg-[#0B0D19]/45 border border-blue-500/20 rounded-[20px] p-6 flex items-start gap-4 hover:border-blue-500/35 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                <HelpCircle size={24} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[24px] font-black text-white font-['MiSans'] mb-1.5">
                  双11 实时竞速：高频更新
                </h4>
                <p className="text-[20px] text-zinc-300 font-['MiSans'] leading-normal">
                  提问与竞争顶峰，AI引用结构逐日刷新。爆发期必须高频更新内容以防被覆盖，锁定联网抓取。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_SuningNodeSchedule.hideHeader = true;
