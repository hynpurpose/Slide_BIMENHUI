import React from 'react';
import SlideLayout from '../components/SlideLayout';

// 页面基础配置数据
const COMMON_PRACTICES = [
  {
    num: '01',
    title: '自建或免费账号',
    tag: '不花钱'
  },
  {
    num: '02',
    title: '有名气高权重信源',
    tag: '价格高，但不准确'
  }
];

const ALLOCATIONS = [
  {
    num: '50',
    title: '投在精准的而非有名气的高价值信源',
    color: '#0052FF'
  },
  {
    num: '30',
    title: '投在有潜力的垂直社区',
    color: '#2A6FF7'
  },
  {
    num: '20',
    title: '投在尝试性的新媒体上',
    color: '#60A5FA'
  }
];

/* ============================================================
 * 版本 A — 左右卡片对称式 (科技毛玻璃双栏并列)
 * 左：两个横向红边玻璃卡片；右：三个横向蓝边玻璃卡片，均为从上到下。
 * ============================================================ */
export function Page_DeliveryLongTerm_A() {
  return (
    <SlideLayout title="初阶做法 VS 我们5-3-2原则">
      {/* 背景点状矩阵 */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch z-10 pl-0"
        style={{ top: '30px', height: '740px' }}
      >
        {/* 左边：市场常见做法 */}
        <div className="w-[750px] flex flex-col justify-center h-full pr-4">
          <div className="mb-10">
            <h2 className="text-[42px] font-black text-white font-['MiSans'] leading-none">
              市场常见做法
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {COMMON_PRACTICES.map((practice, idx) => (
              <div 
                key={idx} 
                className="bg-red-950/10 border border-red-900/20 rounded-[24px] px-8 py-8 flex items-center gap-8 hover:border-red-500/30 transition-all duration-300"
              >
                <span className="font-['Montserrat'] text-[56px] font-black text-red-500/90 leading-none shrink-0 w-[70px]">
                  {practice.num}
                </span>
                <div className="w-px h-16 bg-red-900/20 shrink-0" />
                <div className="flex-grow flex flex-col gap-2 justify-center">
                  <h3 className="text-[30px] font-black text-white font-['MiSans'] leading-tight">
                    {practice.title}
                  </h3>
                  <span className="text-[22px] font-bold text-red-400 font-['MiSans'] leading-none">
                    {practice.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 中间分割线 */}
        <div className="w-[80px] flex items-center justify-center shrink-0">
          <div className="h-4/5 border-r border-dashed border-zinc-800" />
        </div>

        {/* 右边：我们的 5-3-2 原则 */}
        <div className="w-[1010px] flex flex-col justify-center h-full pl-4">
          <div className="mb-10">
            <h2 className="text-[42px] font-black text-[#0052FF] font-['MiSans'] leading-none">
              我们的 5-3-2 原则
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {ALLOCATIONS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-8 bg-[#0052FF]/5 border rounded-[24px] px-8 py-7 hover:bg-white/[0.01] transition-all duration-300"
                style={{
                  borderColor: `${item.color}33`,
                  boxShadow: `0 4px 20px ${item.color}02`
                }}
              >
                <div className="flex items-baseline shrink-0 w-[150px]">
                  <span className="text-[64px] font-black font-['Montserrat'] text-white leading-none">
                    {item.num}
                  </span>
                  <span className="text-[26px] font-black text-zinc-500 ml-1 leading-none font-['Montserrat']">%</span>
                </div>
                <div className="w-px h-16 shrink-0" style={{ backgroundColor: `${item.color}30` }} />
                <h3 className="text-[26px] font-extrabold text-white font-['MiSans'] leading-snug flex-grow">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 大看板融合式 (双卡控制板，大底框信息面板)
 * 左右各拥有一个大圆角容器作为仪表盘，使信息聚合，极其具备秩序感。
 * ============================================================ */
export function Page_DeliveryLongTerm_B() {
  return (
    <SlideLayout title="初阶做法 VS 我们5-3-2原则">
      {/* 背景点状矩阵 */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch z-10 pl-0"
        style={{ top: '30px', height: '740px' }}
      >
        {/* 左看板：市场常见做法 */}
        <div className="w-[750px] flex flex-col justify-center h-full pr-4">
          <div className="bg-[#EA4335]/[0.02] border border-[#EA4335]/15 rounded-[32px] p-10 flex flex-col h-[620px] justify-between shadow-[0_12px_40px_rgba(234,67,53,0.02)]">
            <div className="shrink-0 flex items-center gap-3">
              <div className="w-2.5 h-6 bg-red-500 rounded-full" />
              <h2 className="text-[38px] font-black text-white font-['MiSans'] leading-none">
                市场常见做法
              </h2>
            </div>

            <div className="flex-grow flex flex-col justify-center gap-8">
              {COMMON_PRACTICES.map((practice, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-6 py-6 ${idx === 0 ? 'border-b border-white/5' : ''}`}
                >
                  <span className="font-['Montserrat'] text-[46px] font-black text-red-500 leading-none shrink-0 pt-0.5">
                    {practice.num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[28px] font-black text-white font-['MiSans'] leading-none">
                      {practice.title}
                    </h4>
                    <span className="text-[21px] font-bold text-red-400 font-['MiSans'] leading-none">
                      {practice.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 中间分割线 */}
        <div className="w-[80px] flex items-center justify-center shrink-0">
          <div className="h-4/5 border-r border-dashed border-zinc-800" />
        </div>

        {/* 右看板：我们的 5-3-2 原则 */}
        <div className="w-[1010px] flex flex-col justify-center h-full pl-4">
          <div className="bg-[#0052FF]/[0.02] border border-[#0052FF]/15 rounded-[32px] p-10 flex flex-col h-[620px] justify-between shadow-[0_12px_40px_rgba(0,82,255,0.02)]">
            <div className="shrink-0 flex items-center gap-3">
              <div className="w-2.5 h-6 bg-[#0052FF] rounded-full" />
              <h2 className="text-[38px] font-black text-white font-['MiSans'] leading-none">
                我们的 5-3-2 原则
              </h2>
            </div>

            <div className="flex-grow flex flex-col justify-center gap-4">
              {ALLOCATIONS.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-8 py-5 ${idx !== 2 ? 'border-b border-white/5' : ''}`}
                >
                  <div className="flex items-baseline w-[130px] shrink-0">
                    <span className="font-['Montserrat'] text-[56px] font-black leading-none" style={{ color: item.color }}>
                      {item.num}
                    </span>
                    <span className="font-['Montserrat'] text-[24px] font-black leading-none ml-0.5" style={{ color: `${item.color}80` }}>%</span>
                  </div>
                  <h4 className="text-[25px] font-extrabold text-white font-['MiSans'] leading-snug flex-grow">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 极简扁平无线条风格 (扁平底色块圆圈)
 * 左：大红色左侧栏标立柱式无底色卡片；右：三个平铺淡灰色玻璃卡片，配实色百分比圆章。
 * ============================================================ */
export function Page_DeliveryLongTerm_C() {
  return (
    <SlideLayout title="初阶做法 VS 我们5-3-2原则">
      {/* 背景点状矩阵 */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch z-10 pl-0"
        style={{ top: '30px', height: '740px' }}
      >
        {/* 左边：市场常见做法 */}
        <div className="w-[750px] flex flex-col justify-center h-full pr-4">
          <div className="mb-10 pl-6">
            <h2 className="text-[42px] font-black text-white font-['MiSans'] leading-none">
              市场常见做法
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {COMMON_PRACTICES.map((practice, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-6 border-l-4 border-red-500 pl-6 py-2"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-[32px] font-black text-white font-['MiSans'] leading-none">
                    {practice.title}
                  </h3>
                  <span className="text-[22px] font-bold text-red-500/90 font-['MiSans'] leading-none">
                    {practice.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 中间分割线 */}
        <div className="w-[80px] flex items-center justify-center shrink-0">
          <div className="h-4/5 border-r border-dashed border-zinc-800" />
        </div>

        {/* 右边：我们的 5-3-2 原则 */}
        <div className="w-[1010px] flex flex-col justify-center h-full pl-4">
          <div className="mb-10 pl-2">
            <h2 className="text-[42px] font-black text-[#0052FF] font-['MiSans'] leading-none">
              我们的 5-3-2 原则
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {ALLOCATIONS.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-6 bg-white/[0.01] border border-white/5 rounded-[24px] p-6 hover:border-blue-500/20 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div 
                  className="w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center shrink-0 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="font-['Montserrat'] text-[34px] font-black text-white leading-none">
                    {item.num}%
                  </span>
                </div>
                <h3 className="text-[26px] font-black text-white font-['MiSans'] leading-snug flex-grow">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// 默认导出：指向版本 B
export default Page_DeliveryLongTerm_B;

Page_DeliveryLongTerm_A.hideHeader = true;
Page_DeliveryLongTerm_B.hideHeader = true;
Page_DeliveryLongTerm_C.hideHeader = true;
