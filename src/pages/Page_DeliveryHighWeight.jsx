import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Globe, Award, BookOpen, Cpu, FileCheck, Newspaper } from 'lucide-react';

export default function Page_DeliveryHighWeight() {
  const leftTable = [
    { rank: 1, name: "抖音", rate: "23.1%", badgeBg: "bg-[#FFCA00]", icon: Globe, iconColor: "text-zinc-400" },
    { rank: 2, name: "什么值得买社区频道", rate: "20.0%", badgeBg: "bg-[#D1D5DB]", icon: Globe, iconColor: "text-zinc-400" },
    { rank: 3, name: "今日头条", rate: "14.5%", badgeBg: "bg-[#FDBA74]", icon: Globe, iconColor: "text-zinc-400" },
    { rank: 4, name: "IT之家", rate: "5.4%", isCustomIcon: true },
    { rank: 5, name: "搜狐网", rate: "4.7%", icon: Globe, iconColor: "text-zinc-400" }
  ];

  const rightTable = [
    { rank: 1, name: "品牌官方网站", mech: "核心事实基准 (100% 采信)", badgeBg: "bg-[#FFCA00]", icon: Award, iconColor: "text-amber-400", style: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" },
    { rank: 2, name: "行业权威百科", mech: "定义构建与核心记忆", badgeBg: "bg-[#D1D5DB]", icon: BookOpen, iconColor: "text-blue-400", style: "bg-blue-500/10 text-blue-400 border border-blue-500/30" },
    { rank: 3, name: "深度专业门户", mech: "性能对比及评测支撑", badgeBg: "bg-[#FDBA74]", icon: Cpu, iconColor: "text-blue-400", style: "bg-blue-500/10 text-blue-400 border border-blue-500/30" },
    { rank: 4, name: "权威质检与检测报告", mech: "数据验证与事实核验", icon: FileCheck, iconColor: "text-zinc-400", style: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20" },
    { rank: 5, name: "主流科技媒体", mech: "共识塑造与声量联想", icon: Newspaper, iconColor: "text-zinc-400", style: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/20" }
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

        {/* ==================== 下半部分：两个区块 (左右对照) ==================== */}
        <div className="flex-grow w-full flex gap-6">
          
          {/* 左侧：显示引用 */}
          <div className="w-[908px] h-[480px] bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col w-full">
              {/* 标题 */}
              <div className="flex items-center pb-4 border-b border-zinc-900/60 shrink-0 mb-6">
                <span className="text-[24px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
                  显示引用
                </span>
              </div>

              {/* 表头 */}
              <div className="flex justify-between items-center text-[18px] text-zinc-400 font-bold pb-3 border-b border-white/10 mb-4 px-2">
                <span>平台名称</span>
                <span className="mr-8">引用率</span>
              </div>

              {/* 列表行 */}
              <div className="flex flex-col gap-1">
                {leftTable.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 px-2 hover:bg-white/5 rounded-xl transition-all duration-150">
                    <div className="flex items-center">
                      {/* 排行序号 */}
                      {row.rank <= 3 ? (
                        <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold text-[18px] font-mono ${row.badgeBg} text-black mr-4`}>
                          {row.rank}
                        </div>
                      ) : (
                        <div className="w-[32px] h-[32px] flex items-center justify-center font-bold text-[18px] font-mono text-zinc-500 mr-4">
                          {row.rank}
                        </div>
                      )}

                      {/* 平台图标 */}
                      {row.isCustomIcon ? (
                        <div className="w-6 h-6 bg-[#E02424] rounded flex items-center justify-center text-[11px] font-black text-white font-mono mr-3 shrink-0">
                          IT
                        </div>
                      ) : (
                        row.icon && <row.icon className={`w-6 h-6 ${row.iconColor} mr-3 shrink-0`} />
                      )}

                      {/* 平台名字 */}
                      <span className="text-[20px] font-bold text-white font-['MiSans']">
                        {row.name}
                      </span>
                    </div>

                    {/* 引用率 */}
                    <span className="text-[20px] font-bold font-mono text-zinc-300 mr-8">
                      {row.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 展开按钮 */}
            <div className="flex justify-end w-full shrink-0">
              <button className="border border-white/10 text-zinc-300 text-[16px] px-6 py-2 rounded-full hover:bg-white/5 transition-colors font-bold">
                展开
              </button>
            </div>
          </div>

          {/* 右侧：真实影响 */}
          <div className="w-[908px] h-[480px] bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col w-full">
              {/* 标题 */}
              <div className="flex items-center pb-4 border-b border-zinc-900/60 shrink-0 mb-6">
                <span className="text-[24px] font-black text-white font-['MiSans'] border-l-4 border-emerald-500 pl-3 leading-none">
                  真实影响
                </span>
              </div>

              {/* 表头 */}
              <div className="flex justify-between items-center text-[18px] text-zinc-400 font-bold pb-3 border-b border-white/10 mb-4 px-2">
                <span>真实影响信源</span>
                <span className="mr-8">AI 决策影响机制</span>
              </div>

              {/* 列表行 */}
              <div className="flex flex-col gap-1">
                {rightTable.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 px-2 hover:bg-white/5 rounded-xl transition-all duration-150">
                    <div className="flex items-center">
                      {/* 排行序号 */}
                      {row.rank <= 3 ? (
                        <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold text-[18px] font-mono ${row.badgeBg} text-black mr-4`}>
                          {row.rank}
                        </div>
                      ) : (
                        <div className="w-[32px] h-[32px] flex items-center justify-center font-bold text-[18px] font-mono text-zinc-500 mr-4">
                          {row.rank}
                        </div>
                      )}

                      {/* 信源图标 */}
                      {row.icon && <row.icon className={`w-6 h-6 ${row.iconColor} mr-3 shrink-0`} />}

                      {/* 信源名字 */}
                      <span className="text-[20px] font-bold text-white font-['MiSans']">
                        {row.name}
                      </span>
                    </div>

                    {/* 影响机制说明 */}
                    <span className={`px-4 py-1.5 rounded-full text-[14px] font-bold font-sans ${row.style} mr-8`}>
                      {row.mech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 展开底栏说明 */}
            <div className="flex justify-end w-full shrink-0">
              <span className="text-zinc-500 text-[16px] px-6 py-2 font-bold font-mono">
                全权重覆盖
              </span>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryHighWeight.hideHeader = true;
