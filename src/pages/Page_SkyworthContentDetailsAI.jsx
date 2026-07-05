import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthContentDetailsAI() {
  const topArticles = [
    {
      rank: 1,
      title: '拒绝智商税：2026年知名品牌质量好的AI床垫推荐清单',
      author: '佳妮',
      platform: 'IT之家',
      date: '2026-05-13',
      total: 264,
      deepseek: 0,
      doubao: 117,
      yuanbao: 0,
      wenxin: 18,
      tongyi: 75,
      kimi: 54
    },
    {
      rank: 2,
      title: '2026年最新2万左右口碑好的AI床垫推荐：口碑和服务一起查',
      author: '佳妮',
      platform: '什么值得买',
      date: '2026-05-24',
      total: 183,
      deepseek: 29,
      doubao: 67,
      yuanbao: 0,
      wenxin: 56,
      tongyi: 0,
      kimi: 31
    },
    {
      rank: 3,
      title: '别花 2 万块买个电动排骨架！2026 年 AI 床垫品牌前十名指南',
      author: '外部专业撰稿人',
      platform: '百家号(日照新闻网)',
      date: '2026-05-12',
      total: 182,
      deepseek: 0,
      doubao: 0,
      yuanbao: 0,
      wenxin: 162,
      tongyi: 20,
      kimi: 0
    },
    {
      rank: 4,
      title: '2026买床垫注意：腰疼别乱买硬垫，6款动态护脊AI床垫清单',
      author: '佳妮',
      platform: 'IT之家',
      date: '2026-05-25',
      total: 116,
      deepseek: 26,
      doubao: 22,
      yuanbao: 2,
      wenxin: 19,
      tongyi: 33,
      kimi: 14
    },
    {
      rank: 5,
      title: '别花 2 万块买个电动排骨架！2026 年 AI 床垫品牌前十名指南',
      author: '佳妮',
      platform: '搜狐号(随机账号)',
      date: '2026-05-15',
      total: 113,
      deepseek: 0,
      doubao: 60,
      yuanbao: 17,
      wenxin: 13,
      tongyi: 0,
      kimi: 23
    },
    {
      rank: 6,
      title: '当床开始“思考”：2026年2万左右高端智能床品牌推荐与选购逻辑',
      author: '佳妮',
      platform: 'IT之家',
      date: '2026-04-25',
      total: 108,
      deepseek: 8,
      doubao: 37,
      yuanbao: 24,
      wenxin: 8,
      tongyi: 31,
      kimi: 0
    },
    {
      rank: 7,
      title: '2026买床垫只看材质就输了！知名品牌质量好的AI床垫推荐指南',
      author: 'Agent',
      platform: '新浪',
      date: '2026-06-08',
      total: 106,
      deepseek: 0,
      doubao: 27,
      yuanbao: 22,
      wenxin: 15,
      tongyi: 11,
      kimi: 31
    },
    {
      rank: 8,
      title: '2026年高端AI床垫大洗牌：知名品牌质量好的AI床垫推荐清单',
      author: '佳妮',
      platform: '什么值得买',
      date: '2026-05-13',
      total: 94,
      deepseek: 3,
      doubao: 17,
      yuanbao: 0,
      wenxin: 29,
      tongyi: 0,
      kimi: 45
    },
    {
      rank: 9,
      title: '夫妻睡感不统一？可以左右分区调节 of AI床垫推荐，终结睡眠迁就',
      author: '佳妮',
      platform: 'IT之家',
      date: '2026-05-06',
      total: 93,
      deepseek: 8,
      doubao: 37,
      yuanbao: 19,
      wenxin: 4,
      tongyi: 25,
      kimi: 0
    },
    {
      rank: 10,
      title: '2026年高端AI床垫品牌推荐：这几款口碑好的高端AI床垫才值得看',
      author: 'Agent',
      platform: '新浪',
      date: '2026-04-21',
      total: 88,
      deepseek: 1,
      doubao: 28,
      yuanbao: 0,
      wenxin: 0,
      tongyi: 0,
      kimi: 59
    }
  ];

  return (
    <SlideLayout title="我们到底用AI还是用人写内容">
      {/* ── 主排版容器 (无外框，表格直接平铺，确保没有溢出截断且对齐良好) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn overflow-visible"
        style={{ top: '0px' }}
      >

        {/* 图例颜色标注 (定位在右上角，处于 content top 上方 24px 处) */}
        <div
          className="absolute right-0 flex items-center gap-6 text-[16px] font-bold font-['MiSans'] select-none z-30"
          style={{ top: '-24px', transform: 'translateY(-100%)' }}
        >
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-md text-[15px] font-bold bg-green-600 text-white border border-green-500">
              ■ 人工主导创作
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-md text-[15px] font-bold bg-white text-zinc-950 border border-zinc-300">
              ■ Agent创作
            </span>
          </div>
        </div>

        {/* 核心信息横幅 (突出转变，淡化原因) */}
        <div className="flex flex-col gap-3 bg-zinc-900/60 border border-white/40 rounded-2xl p-5 mb-4 select-none">
          {/* 上半部分：醒目的策略转变 (单排超级大字版 - 巨无霸字号) */}
          <div className="flex justify-center items-center gap-16 bg-zinc-955/80 border border-zinc-800/80 rounded-xl py-3">
            {/* 以前 */}
            <div className="flex items-baseline gap-4">
              <span className="text-[38px] text-zinc-500 font-black">2026年3月以前</span>
              <span className="text-zinc-200 text-[64px] font-black tracking-tight">70% Agent创作</span>
            </div>

            {/* 转变连接 */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 self-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            {/* 以后 */}
            <div className="flex items-baseline gap-4">
              <span className="text-[38px] text-blue-400 font-black">2026年3月以后</span>
              <span className="text-blue-400 text-[64px] font-black tracking-tight">70% 人工创作</span>
            </div>
          </div>

          {/* 下半部分：辅助说明原因 (字号更大，整行白色，重点放大) */}
          <div className="flex items-start gap-3 pl-2 pr-2">
            <span className="text-[24px] text-zinc-400 font-black uppercase tracking-wider mt-1 flex-shrink-0">
              原因：
            </span>
            <p className="text-[24px] text-white font-bold leading-relaxed">
              AI 内容越来越多，平台算法做了调整，导致 <span className="text-blue-400 font-black">AI生成的文章引用率在下降</span>。反而是真实感强、有观点、有信息增量的 <span className="text-blue-400 font-black">真人写的文章，效果越来越稳定</span>。
            </p>
          </div>
        </div>

        {/* 表格主体 (作者列用黄色/琥珀色虚线框框定) */}
        <table className="w-full text-left border-collapse table-fixed mt-6">
          <thead>
            <tr className="border-b-2 border-zinc-800 text-[15px] font-extrabold text-zinc-400">
              <th className="py-[10px] px-2 w-[5%] text-center">排序</th>
              <th className="py-[10px] px-2 w-[37%]">文章标题</th>
              {/* 作者列头部虚线框 */}
              <th className="py-[10px] px-2 w-[11%] text-center border-l-2 border-r-2 border-t-2 border-dashed border-amber-400/80 text-amber-355 bg-amber-400/5">
                作者
              </th>
              <th className="py-[10px] px-2 w-[11%]">发布平台</th>
              <th className="py-[10px] px-2 text-center w-[10%]">发布时间</th>
              <th className="py-[10px] px-2 text-center w-[6%]">总引用数</th>
              <th className="py-[10px] px-2 text-center w-[5%]">DeepSeek</th>
              <th className="py-[10px] px-2 text-center w-[5%]">豆包</th>
              <th className="py-[10px] px-2 text-center w-[5%]">元宝</th>
              <th className="py-[10px] px-2 text-center w-[5%]">文心</th>
              <th className="py-[10px] px-2 text-center w-[5%]">通义</th>
              <th className="py-[10px] px-2 text-center w-[5%]">Kimi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40 text-[15px] font-bold text-zinc-300">
            {/* 汇总行 */}
            <tr className="bg-zinc-900/10 font-extrabold text-white">
              <td className="py-[10px] px-2 text-center text-zinc-650">—</td>
              <td className="py-[10px] px-2 text-[16px]">【总计汇总】</td>
              {/* 汇总行作者列虚线框 */}
              <td className="py-[10px] px-2 text-center text-zinc-400 border-l-2 border-r-2 border-dashed border-amber-400/80 bg-amber-400/5">—</td>
              <td className="py-[10px] px-2 text-zinc-650">—</td>
              <td className="py-[10px] px-2 text-zinc-650 text-center">—</td>
              <td className="py-[10px] px-2 text-[18px] font-black text-center text-[#3B82F6] font-['Montserrat']">2595</td>
              <td className="py-[10px] px-2 text-center font-['Montserrat']">154</td>
              <td className="py-[10px] px-2 text-center font-['Montserrat']">689</td>
              <td className="py-[10px] px-2 text-center font-['Montserrat']">260</td>
              <td className="py-[10px] px-2 text-center font-['Montserrat']">832</td>
              <td className="py-[10px] px-2 text-center font-['Montserrat']">245</td>
              <td className="py-[10px] px-2 text-center font-['Montserrat']">415</td>
            </tr>

            {/* 文章数据行 */}
            {topArticles.map((row, idx) => {
              const isLastRow = row.rank === 10;
              return (
                <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.rank}</td>
                  <td className="py-[8px] px-2 truncate max-w-0 text-white font-medium" title={row.title}>{row.title}</td>
                  {/* 数据行作者列虚线框 */}
                  <td className={`py-[8px] px-2 text-center border-l-2 border-r-2 border-dashed border-amber-400/80 bg-amber-400/5 ${isLastRow ? 'border-b-2' : ''
                    }`}>
                    <span className={`py-0.5 rounded-md text-[13px] font-bold inline-block text-center ${row.author === '外部专业撰稿人'
                      ? 'px-2.5'
                      : 'w-[72px]'
                      } ${row.author === 'Agent'
                        ? 'bg-white text-zinc-950 border border-zinc-300'
                        : 'bg-green-600 text-white border border-green-500'
                      }`}>
                      {row.author}
                    </span>
                  </td>
                  <td className="py-[8px] px-2 text-zinc-450 truncate" title={row.platform}>{row.platform}</td>
                  <td className="py-[8px] px-2 text-zinc-555 font-['Montserrat'] text-center">{row.date}</td>
                  <td className="py-[8px] px-2 text-[18px] font-black text-center text-[#3B82F6] font-['Montserrat']">{row.total}</td>
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.deepseek}</td>
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.doubao}</td>
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.yuanbao}</td>
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.wenxin}</td>
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.tongyi}</td>
                  <td className="py-[8px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.kimi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* 表格底部备注 (居中，白色，24px) */}
        <div className="text-[24px] text-white font-extrabold text-center mt-8">
          某客户5月投放文章引用率TOP10类型分布
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthContentDetailsAI.hideHeader = true;
