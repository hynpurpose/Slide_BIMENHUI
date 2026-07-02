import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Globe } from 'lucide-react';

export default function Page_DeliveryHighWeight() {
  const leftTable = [
    { rank: 1, name: "抖音", rate: "23.1%", badgeBg: "bg-[#FFC502]", icon: Globe, iconColor: "text-[#5C7C99]" },
    { rank: 2, name: "什么值得买社区频道", rate: "20.0%", badgeBg: "bg-[#D8DCE3]", icon: Globe, iconColor: "text-[#5C7C99]" },
    { rank: 3, name: "今日头条", rate: "14.5%", badgeBg: "bg-[#F1B584]", icon: Globe, iconColor: "text-[#5C7C99]" },
    { rank: 4, name: "IT之家", rate: "5.4%", isCustomIcon: true },
    { rank: 5, name: "搜狐网", rate: "4.7%", icon: Globe, iconColor: "text-[#5C7C99]" }
  ];

  return (
    <SlideLayout title="精准高权重账号">
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
        {/* ==================== 上半部分：强调句金句 ==================== */}
        <div className="w-full flex flex-col items-start mb-10 shrink-0">
          <p className="text-[30px] text-white font-extrabold tracking-wide max-w-[1700px] leading-relaxed">
            不是看数据系统里哪个平台引用率高，而是看哪类平台真正影响了 AI 的答案
          </p>
        </div>

        {/* ==================== 下半部分：两个大区块 (左右对照 + 虚线指向) ==================== */}
        <div className="flex-grow w-full flex gap-[80px] relative">

          {/* ── 虚线引导连接线 (自左侧抖音行至右侧真相卡片) ── */}
          <svg className="absolute inset-0 pointer-events-none z-20" style={{ width: '1840px', height: '625px' }}>
            <path
              d="M 808 198 L 920 198"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeDasharray="8 5"
              fill="none"
              className="opacity-90"
            />
          </svg>

          {/* 左侧：显示引用 (深色卡片，删去展开按钮) */}
          <div className="w-[840px] h-[625px] bg-zinc-950/40 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-start border border-zinc-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            {/* 标题 */}
            <div className="flex items-center pb-4 border-b border-zinc-900/60 shrink-0 mb-6">
              <span className="text-[28px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
                显示引用
              </span>
            </div>

            {/* 表头 */}
            <div className="flex justify-between items-center text-[20px] text-zinc-400 font-extrabold pb-3 border-b border-white/10 mb-4 px-4">
              <span>平台名称</span>
              <span className="mr-8">引用率</span>
            </div>

            {/* 列表行 */}
            <div className="flex flex-col gap-2">
              {leftTable.map((row, idx) => {
                const isDouyin = row.name === "抖音";
                return (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-3.5 px-4 rounded-xl transition-all duration-150 ${isDouyin
                        ? "border-2 border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                        : "border-2 border-transparent hover:bg-white/5"
                      }`}
                  >
                    <div className="flex items-center">
                      {/* 排行序号 */}
                      {row.rank <= 3 ? (
                        <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[20px] font-mono ${row.badgeBg} text-black mr-5`}>
                          {row.rank}
                        </div>
                      ) : (
                        <div className="w-[40px] h-[40px] flex items-center justify-center font-bold text-[20px] font-mono text-zinc-500 mr-5">
                          {row.rank}
                        </div>
                      )}

                      {/* 平台图标 */}
                      {row.isCustomIcon ? (
                        <div className="w-8 h-8 bg-[#E02424] rounded-lg flex items-center justify-center text-[12px] font-black text-white font-mono mr-4 shrink-0">
                          IT
                        </div>
                      ) : (
                        row.icon && <row.icon className={`w-8 h-8 ${row.iconColor} mr-4 shrink-0`} />
                      )}

                      {/* 平台名字 */}
                      <span className="text-[24px] font-bold text-white font-['MiSans']">
                        {row.name}
                      </span>
                    </div>

                    {/* 引用率 */}
                    <span className="text-[24px] font-extrabold font-['Montserrat'] text-zinc-300 mr-8">
                      {row.rate}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 右侧：抖音真相 (蓝色/深色微光卡片，去除了丑icon、竖条以及前缀真相标签) */}
          <div className="w-[920px] h-[625px] bg-zinc-950/40 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-start border border-blue-500/20 shadow-[0_25px_60px_rgba(59,130,246,0.1)]">
            {/* 标题 */}
            <div className="flex items-center pb-4 border-b border-zinc-900/60 shrink-0 mb-8">
              <span className="text-[28px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
                抖音高引用率真实原因
              </span>
            </div>

            {/* 核心要点 */}
            <div className="flex flex-col gap-10">
              {/* 要点一 */}
              <div className="flex flex-col pl-2">
                <span className="text-[48px] font-bold text-white font-['MiSans'] mb-3">仅抓取标题/字幕，不会解析全视频</span>
                <span className="text-[28px] text-zinc-400 leading-relaxed font-normal">
                  不耗费大量 Token 解析完整视频正文。AI 引擎提取效率优先，导致引用的内容深度极浅。
                </span>
              </div>

              {/* 要点二 */}
              <div className="flex flex-col pl-2">
                <span className="text-[48px] font-bold text-white font-['MiSans'] mb-3">字节内部的政治任务</span>
                <span className="text-[28px] text-zinc-400 leading-relaxed font-normal">
                  字节给豆包团队下的政治任务，需要在数据展现上偏向自家平台抖音，非真实权重。
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryHighWeight.hideHeader = true;
