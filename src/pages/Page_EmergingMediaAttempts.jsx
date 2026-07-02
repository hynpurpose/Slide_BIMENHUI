import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_EmergingMediaAttempts() {
  const chartData = [
    { name: "企业官方网站", base: 45, change: 1.3, type: 'up', label: '+1.3%' },
    { name: "行业权威百科", base: 55, change: 4.5, type: 'up', label: '+4.5%' },
    { name: "专业垂直媒体", base: 50, change: -2.7, type: 'down', label: '-2.7%' },
    { name: "自建独家信源", base: 40, change: 6.3, type: 'up', label: '+6.3%' },
    { name: "短视频平台", base: 45, change: -0.9, type: 'down', label: '-0.9%' },
    { name: "社交问答社区", base: 35, change: 37, type: 'up', label: '+37%' },
    { name: "主流新闻媒体", base: 50, change: -0.7, type: 'down', label: '-0.7%' },
    { name: "内容农场采集网站", base: 65, change: -41, type: 'down', label: '-41%' }
  ];

  const maxHeight = 340; // 柱状图最大高度 (px)

  return (
    <SlideLayout title="新兴媒体尝试">
      {/* ── 背景点状矩阵 ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ── 主排版区 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-start z-10 pl-0"
        style={{ top: '40px', height: '750px' }}
      >
        {/* ==================== 上半部分：金句大总结 ==================== */}
        <div className="w-full flex flex-col items-start mb-8 shrink-0">
          <p className="text-[30px] text-white font-extrabold tracking-wide max-w-[1700px] leading-relaxed">
            关注 AI 模型引用偏好变化趋势：在模型规则变更、红利真正表现出来之前，比竞争对手更早占领新兴媒体。
          </p>
        </div>

        {/* ==================== 下半部分：两个大区块 (左右对照 + 虚线指向) ==================== */}
        <div className="flex-grow w-full flex gap-[80px] items-stretch min-h-0 relative">

          {/* ── 虚线引导连接线 (自左侧社交问答社区柱子至右侧大框) ── */}
          <svg className="absolute inset-0 pointer-events-none z-20" style={{ width: '1840px', height: '660px' }}>
            <path
              d="M 1101 340 L 1660 340"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeDasharray="8 5"
              fill="none"
              className="opacity-90"
            />
          </svg>

          {/* 左侧：柱状图卡片 (宽度扩为1580px，高度660px抵到底部) */}
          <div className="w-[1580px] h-[660px] bg-zinc-950/40 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between border border-zinc-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col w-full h-full justify-between">

              {/* 标题与图例 */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-900/60 shrink-0 mb-6">
                <span className="text-[28px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
                  豆包平台各渠道引用率分布预测
                </span>
                {/* 图例 */}
                <div className="flex items-center gap-6 text-[16px] font-bold text-zinc-400 font-['MiSans']">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#52525B] rounded" />
                    <span>当前版本权重</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white rounded border border-zinc-300" />
                    <span>预测上调比例</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#60A5FA] rounded" />
                    <span>预测下调比例</span>
                  </div>
                </div>
              </div>

              {/* 柱状图主绘图区 */}
              <div className="flex-grow w-full relative flex items-end justify-between px-16 mb-6 border-b border-zinc-800">

                {/* 背景刻度横线 */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-0">
                  {[100, 75, 50, 25, 0].map((val, idx) => (
                    <div key={idx} className="w-full flex items-center justify-between border-b border-zinc-800/40 relative" style={{ height: idx === 4 ? '0' : '25%' }}>
                      <span className="absolute -left-12 -bottom-2 text-[16px] font-bold font-['Montserrat'] text-zinc-500">{val}%</span>
                    </div>
                  ))}
                </div>

                {/* 柱子循环 */}
                {chartData.map((item, idx) => {
                  const isUp = item.type === 'up';
                  const isTarget = item.name === "社交问答社区";

                  // 计算各个段的像素高度 (设定最小视觉高度 28px 以保证小百分比下的箭头能正常渲染)
                  const baseHeight = (item.base / 100) * maxHeight;
                  const lostHeight = (Math.abs(item.change) / 100) * maxHeight;
                  const newBaseHeight = isUp ? baseHeight : (baseHeight - lostHeight);
                  const changeHeight = Math.max(lostHeight, 28);
                  const totalHeight = isUp ? (baseHeight + changeHeight) : (newBaseHeight + changeHeight);

                  return (
                    <div key={idx} className="flex flex-col items-center relative z-10 w-[120px]">

                      {/* 37%上升柱子框出高亮包装 */}
                      <div className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-150 ${isTarget
                          ? "border-2 border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] -mx-3 -my-4 pt-4"
                          : "border-2 border-transparent"
                        }`}>

                        {/* 柱状图组合框 */}
                        <div className="relative w-[48px]" style={{ height: `${totalHeight}px` }}>

                          {/* 1. 基础段 (灰色) */}
                          <div
                            className="absolute w-full bg-[#52525B] rounded-sm transition-all duration-300"
                            style={{
                              bottom: '0px',
                              height: `${isUp ? baseHeight : newBaseHeight}px`
                            }}
                          />

                          {/* 2. 变更段 (上升为白色，下降为蓝色) */}
                          <div
                            className={`absolute w-full rounded-sm transition-all duration-300 ${isUp ? 'bg-white' : 'bg-[#60A5FA]'}`}
                            style={{
                              bottom: `${isUp ? baseHeight : newBaseHeight}px`,
                              height: `${changeHeight}px`
                            }}
                          />

                          {/* 3. 分割线 (黑边效果) */}
                          <div className="absolute w-full h-[3px] bg-zinc-950" style={{ bottom: '0px' }} />
                          <div className="absolute w-full h-[3px] bg-zinc-950" style={{ bottom: `${isUp ? baseHeight : newBaseHeight}px` }} />
                          <div className="absolute w-full h-[3px] bg-zinc-950" style={{ bottom: `${totalHeight}px` }} />

                          {/* 4. 向上/向下的箭头 (SVG 动态线，精准连接各段) */}
                          {isUp ? (
                            <svg className="absolute w-full overflow-visible pointer-events-none" style={{ bottom: `${baseHeight}px`, height: `${changeHeight}px` }}>
                              {/* 竖线 */}
                              <line x1="50%" y1="100%" x2="50%" y2="8" stroke="#71717A" strokeWidth="2" />
                              {/* 箭头帽 */}
                              <path d="M 16 10 L 24 2 L 32 10" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          ) : (
                            <svg className="absolute w-full overflow-visible pointer-events-none" style={{ bottom: `${newBaseHeight}px`, height: `${changeHeight}px` }}>
                              {/* 竖线 */}
                              <line x1="50%" y1="0" x2="50%" y2={changeHeight - 8} stroke="#71717A" strokeWidth="2" />
                              {/* 箭头帽 */}
                              <path d={`M 16 ${changeHeight - 10} L 24 ${changeHeight - 2} L 32 ${changeHeight - 10}`} stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          )}

                          {/* 5. 顶部的百分比数字 (上升在顶，下降在底段上方分割线以下) */}
                          {isUp ? (
                            <span className="absolute w-full text-center left-0 text-[18px] font-black font-['Montserrat'] -top-8 text-white">
                              {item.label}
                            </span>
                          ) : (
                            <span
                              className="absolute w-full text-center left-0 text-[18px] font-black font-['Montserrat'] text-[#60A5FA]"
                              style={{ bottom: `${newBaseHeight - 28}px` }}
                            >
                              {item.label}
                            </span>
                          )}

                        </div>

                        {/* X 轴文字标注 */}
                        <span className="text-[20px] font-bold text-white mt-4 font-['MiSans'] whitespace-nowrap">
                          {item.name}
                        </span>

                      </div>
                    </div>
                  );
                })}

              </div>

            </div>
          </div>

          {/* 右侧：尽快占领大框 (收窄为180px以刚好包住字，高度660px，字号96px，竖直排列) */}
          <div className="w-[180px] h-[660px] bg-zinc-950/40 backdrop-blur-md rounded-[32px] py-8 px-4 flex flex-col justify-center items-center border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <span
              className="text-[96px] font-black text-white font-['MiSans'] tracking-[0.25em] leading-none text-center select-none"
              style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
            >
              抢先占领
            </span>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_EmergingMediaAttempts.hideHeader = true;
