import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_OtherContentApproach() {
  return (
    <SlideLayout title="市面上其他做法">
      {/* ── 主排版容器 (总高度 795px，抵满 content bottom) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn"
        style={{ top: '0px', height: '795px' }}
      >
        {/* ==================== 上半部分：Agent 批量文章写稿流程 (高度 320px) ==================== */}
        <div className="absolute left-0 top-0 w-full h-[320px] bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* 流程标题 */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-900/60 shrink-0">
            <span className="text-[24px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
              Agent 批量生成文章流程
            </span>
          </div>

          {/* 流程图卡片 (6 步横向排开) */}
          <div className="flex-grow flex items-center justify-between relative mt-4">
            {/* 背景连接横线 */}
            <div className="absolute left-[80px] right-[80px] top-[45px] h-[2px] bg-zinc-800/30 z-0 pointer-events-none" />

            {[
              { num: "01", title: "建立品牌知识库", desc: "汇聚品牌与产品基础数据" },
              { num: "02", title: "设定目标用户", desc: "明确核心受众关注偏好" },
              { num: "03", title: "总结高引用规律", desc: "分析高引用内容的结构特征" },
              { num: "04", title: "生成文章大纲", desc: "AI 自动化构思大纲结构" },
              { num: "05", title: "生成完整内容", desc: "大模型批量撰写全文" },
              { num: "06", title: "人工核验发布", desc: "常识性校验与分发" }
            ].map((step, i) => (
              <div
                key={i}
                className="w-[240px] h-[170px] bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-between relative z-10 shadow-md hover:bg-zinc-800/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[36px] font-black font-['Montserrat'] text-blue-550 leading-none">{step.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[22px] font-bold text-white font-['MiSans'] leading-tight">{step.title}</span>
                  <span className="text-[16px] text-zinc-400 font-sans leading-normal mt-1">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== 下半部分：趋势与对比图表 (高度 445px, 抵满 bottom) ==================== */}
        <div className="absolute left-0 top-[350px] w-full h-[445px] flex gap-6">

          {/* 左侧：收录率趋势图 (占比更多：宽度调整为 1100px) */}
          <div className="w-[1100px] h-full bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            {/* 标题 */}
            <div className="flex flex-col gap-1 shrink-0 pb-4 border-b border-zinc-900/60">
              <span className="text-[24px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
                纯AI创作文章收录率趋势
              </span>
            </div>

            {/* 柱状图 SVG (高度调高至 300px，立柱变宽变大) */}
            <div className="flex-grow flex items-center justify-center relative mt-6">
              <svg width="1036" height="300" viewBox="0 0 1036 300" className="w-full h-full">
                {/* 基准线 */}
                <line x1="50" y1="240" x2="986" y2="240" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                {[
                  { month: "2025.12", val: 92 },
                  { month: "2026.01", val: 87 },
                  { month: "2026.02", val: 81 },
                  { month: "2026.03", val: 51 },
                  { month: "2026.04", val: 46 },
                  { month: "2026.05", val: 39 }
                ].map((item, idx) => {
                  // 横向步长增大至 160px，拉大柱状图占比
                  const x = 110 + idx * 160;
                  const barHeight = item.val * 2.0; // 高度比例放大，100% = 200px
                  const y = 240 - barHeight;

                  return (
                    <g key={idx}>
                      {/* 细垂直引导线 */}
                      <line
                        x1={x}
                        y1="240"
                        x2={x}
                        y2="30"
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="1"
                      />

                      {/* 白色实心柱子 (立柱宽度增加到 24px) */}
                      <rect
                        x={x - 12}
                        y={y}
                        width="24"
                        height={barHeight}
                        fill="#FFFFFF"
                      />

                      {/* 上方数值 (字号调大) */}
                      <text
                        x={x}
                        y="20"
                        fill="#FFFFFF"
                        className="text-[18px] font-bold font-['Montserrat']"
                        textAnchor="middle"
                      >
                        {item.val}%
                      </text>

                      {/* 下方月份 (字号调大) */}
                      <text
                        x={x}
                        y="270"
                        fill="rgba(255, 255, 255, 0.5)"
                        className="text-[20px] font-bold font-sans"
                        textAnchor="middle"
                      >
                        {item.month}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* 右侧：引用率占比对比 (宽度相应调整为 716px) */}
          <div className="w-[716px] h-full bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            {/* 标题 */}
            <div className="flex flex-col gap-1 shrink-0 pb-4 border-b border-zinc-900/60">
              <span className="text-[24px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
                纯AI创作文章引用率对比
              </span>
            </div>

            {/* 两个环形图 */}
            <div className="flex-grow flex items-center justify-around mt-6">

              {/* 2025年12月 */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                  <svg width="220" height="220" viewBox="0 0 220 220">
                    {/* 背景细圆环 */}
                    <circle cx="110" cy="110" r="96" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                    {/* 前景进度环 */}
                    <circle
                      cx="110"
                      cy="110"
                      r="96"
                      fill="none"
                      stroke="#004CE5"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="603.2"
                      strokeDashoffset={603.2 * (1 - 0.42)}
                      transform="rotate(-90 110 110)"
                    />
                  </svg>
                  {/* 环内百分比 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[64px] font-black font-['Montserrat'] text-white leading-none select-none">
                      42<span className="text-[28px] font-bold align-super text-zinc-400">%</span>
                    </span>
                  </div>
                </div>
                <span className="text-[22px] font-black text-zinc-300 font-['MiSans']">2025年12月</span>
              </div>

              {/* 2026年5月 */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                  <svg width="220" height="220" viewBox="0 0 220 220">
                    {/* 背景细圆环 */}
                    <circle cx="110" cy="110" r="96" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                    {/* 前景进度环 */}
                    <circle
                      cx="110"
                      cy="110"
                      r="96"
                      fill="none"
                      stroke="#004CE5"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="603.2"
                      strokeDashoffset={603.2 * (1 - 0.08)}
                      transform="rotate(-90 110 110)"
                    />
                  </svg>
                  {/* 环内百分比 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[64px] font-black font-['Montserrat'] text-white leading-none select-none">
                      8<span className="text-[28px] font-bold align-super text-zinc-400">%</span>
                    </span>
                  </div>
                </div>
                <span className="text-[22px] font-black text-zinc-300 font-['MiSans']">2026年5月</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_OtherContentApproach.hideHeader = true;
