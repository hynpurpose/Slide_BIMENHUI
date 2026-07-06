import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import { Globe, MessageSquare, AlertTriangle, Users, FileText, CheckCircle2 } from 'lucide-react';

export default function Page_DeliveryHighWeight() {
  const leftTable = [
    { rank: 1, name: "抖音", rate: "23.1%", color: "#FF0050", badgeBg: "bg-[#FFC502]" },
    { rank: 2, name: "什么值得买社区", rate: "20.0%", color: "#E02424", badgeBg: "bg-[#D8DCE3]" },
    { rank: 3, name: "今日头条", rate: "14.5%", color: "#F04141", badgeBg: "bg-[#F1B584]" },
    { rank: 4, name: "IT之家", rate: "5.4%", color: "#3B82F6", isCustomIcon: true },
    { rank: 5, name: "搜狐网", rate: "4.7%", color: "#FF9900" }
  ];

  // 支持可选真实截图，若加载失败自动回退到模拟 UI
  const [imageError, setImageError] = useState(false);

  return (
    <SlideLayout title="50%投在精准高权重信源——什么是不准的？">
      {/* ── 背景设计 ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ── 主排版区 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-between z-10 pl-0"
        style={{ top: '25px', height: '750px' }}
      >
        {/* ==================== 三栏主体布局 (高度 580px) ==================== */}
        <div className="w-full flex gap-6 items-stretch h-[580px] relative">

          {/* ── SVG 引导虚线：从抖音链接指向右侧高粉丝账号 ── */}
          <svg className="absolute inset-0 pointer-events-none z-30" style={{ width: '1840px', height: '580px' }}>
            <defs>
              <marker id="arrow-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0052FF" />
              </marker>
            </defs>
            <path 
              d="M 1120 220 C 1160 205, 1200 190, 1240 185" 
              fill="none" 
              stroke="#0052FF" 
              strokeWidth="2.5" 
              strokeDasharray="6 4" 
              markerEnd="url(#arrow-head)"
            />
          </svg>

          {/* ==================== 1. 左栏：豆包引用来源 (440px，白底黑字) ==================== */}
          <div className="w-[440px] h-full bg-white border border-zinc-200 rounded-[24px] p-6 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative overflow-hidden group hover:border-blue-500/20 transition-colors">
            <div className="mb-6 shrink-0">
              <h3 className="text-[24px] font-black text-zinc-900 font-['MiSans'] tracking-wide">
                豆包引用来源
              </h3>
            </div>

            {/* 表格容器 */}
            <div className="flex-grow flex flex-col bg-zinc-50/50 rounded-2xl border border-zinc-200/60 p-4">
              <div className="flex justify-between items-center text-[13px] text-zinc-400 font-bold pb-2.5 border-b border-zinc-200 mb-3 px-2">
                <span>平台名称</span>
                <span className="pr-2">引用率</span>
              </div>

              <div className="flex-1 flex flex-col justify-between py-1">
                {leftTable.map((row, idx) => {
                  const isDouyin = row.name === "抖音";
                  return (
                    <div
                      key={idx}
                      className={`flex justify-between items-center h-[60px] px-4 rounded-xl border transition-all duration-300 ${
                        isDouyin
                          ? "border-[#FF0050]/40 bg-[#FF0050]/5 shadow-[0_0_20px_rgba(255,0,80,0.06)]"
                          : "border-transparent hover:bg-zinc-100/60"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* 排名 */}
                        <span className="font-['Montserrat'] text-[15px] font-black text-zinc-400 w-5">
                          {row.rank}
                        </span>
                        {/* 图标 */}
                        {row.isCustomIcon ? (
                          <span className="w-[26px] h-[26px] bg-[#E02424] rounded-md flex items-center justify-center text-[9px] font-black text-white shrink-0 font-mono">
                            IT
                          </span>
                        ) : (
                          <Globe className={`w-[22px] h-[22px] shrink-0 ${isDouyin ? 'text-[#FF0050]' : 'text-zinc-400'}`} />
                        )}
                        {/* 名字 */}
                        <span className={`text-[17px] font-bold font-['MiSans'] truncate ${isDouyin ? "text-zinc-900" : "text-zinc-700"}`}>
                          {row.name}
                        </span>
                      </div>
                      {/* 百分比 */}
                      <span className={`text-[17px] font-black font-['Montserrat'] ${isDouyin ? "text-[#FF0050] font-black" : "text-zinc-500 font-bold"}`}>
                        {row.rate}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==================== 2. 中栏：对话与信源列表验证 (760px) ==================== */}
          <div className="w-[760px] h-full bg-[#0B0D19]/45 border border-white/[0.06] backdrop-blur-md rounded-[24px] p-6 flex flex-col shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <div className="mb-5 shrink-0">
              <h3 className="text-[24px] font-black text-white font-['MiSans'] tracking-wide">
                引用机制验证
              </h3>
            </div>

            {/* 对话与信源面板 */}
            <div className="flex-1 flex gap-6 min-h-0">
              {!imageError && false ? (
                <div className="flex-1 rounded-xl overflow-hidden border border-white/[0.06] bg-black relative">
                  <img
                    src="/charts/doubao_chat_screenshot.png"
                    alt="豆包对话截图"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <>
                  {/* 对话截图模拟 (左侧 350px) */}
                  <div className="w-[350px] h-full rounded-2xl border border-white/[0.04] bg-black/30 p-5 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center gap-2 pb-3 border-b border-white/[0.05] mb-4 shrink-0">
                      <MessageSquare size={16} className="text-[#0052FF]" />
                      <span className="text-[13px] font-bold text-zinc-500 font-['MiSans']">豆包 AI 对话模拟</span>
                    </div>

                    <div className="flex-grow overflow-hidden flex flex-col gap-4 justify-start text-[14px]">
                      {/* 用户提问 */}
                      <div className="flex flex-col items-end">
                        <div className="bg-[#0052FF] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[90%] leading-relaxed font-semibold shadow-md">
                          创维壁纸电视和海信哪些贴墙电视值得选？
                        </div>
                      </div>

                      {/* AI 回答 */}
                      <div className="flex flex-col items-start">
                        <div className="bg-white/[0.04] border border-white/[0.06] text-zinc-200 rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%] leading-relaxed font-medium">
                          推荐关注创维壁纸电视系列，根据真实用户反馈<sup>[1]</sup>，其无缝吸附贴墙画框效果与画质技术...
                        </div>
                      </div>
                    </div>

                    <div className="pt-2.5 text-center text-[12px] text-zinc-600 font-black shrink-0 border-t border-white/[0.05] mt-2">
                      HIGH FIDELITY DIALOGUE
                    </div>
                  </div>

                  {/* 右侧：信源列表 (350px) */}
                  <div className="w-[350px] h-full rounded-2xl border border-white/[0.04] bg-black/30 p-5 flex flex-col">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.05] mb-4 shrink-0">
                      <span className="text-[13px] font-bold text-zinc-500 font-['MiSans']">信源列表</span>
                      <span className="text-[11px] text-zinc-600 font-bold font-['Montserrat']">SOURCES</span>
                    </div>

                    <div className="flex-grow flex flex-col justify-between py-1 min-h-0 gap-3">
                      {/* 抖音链接 (假引用) */}
                      <div className="bg-black/40 border border-[#0052FF]/30 rounded-xl p-4 flex flex-col justify-between h-[85px] relative overflow-hidden group hover:border-[#0052FF]/50 transition-colors duration-300">
                        <span className="text-[12px] text-zinc-500 font-bold font-['Montserrat']">1. 抖音视频链接</span>
                        <p className="text-[14px] font-black text-white truncate mt-1">v.douyin.com/ZGdEs3s/...</p>
                        
                        {/* 红色发光戳章：假引用 */}
                        <div className="absolute right-3 top-2.5 rotate-[-12deg] border border-red-500 bg-red-500/10 text-red-400 text-[11px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(239,68,68,0.2)] pointer-events-none">
                          假引用
                        </div>
                      </div>

                      {/* 其他链接 2 (真引用) */}
                      <div className="bg-black/10 border border-white/[0.05] rounded-xl p-4 flex flex-col justify-between h-[85px] relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300">
                        <span className="text-[12px] text-zinc-600 font-bold font-['Montserrat']">2. 其他文章链接</span>
                        <p className="text-[14px] font-bold text-zinc-400 truncate mt-1">smzdm.com/post/892718...</p>
                        
                        {/* 绿色发光戳章：真引用 */}
                        <div className="absolute right-3 top-2.5 rotate-[8deg] border border-emerald-500 bg-emerald-500/10 text-emerald-400 text-[11px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)] pointer-events-none">
                          真引用
                        </div>
                      </div>

                      {/* 其他链接 3 (真引用) */}
                      <div className="bg-black/10 border border-white/[0.05] rounded-xl p-4 flex flex-col justify-between h-[85px] relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300">
                        <span className="text-[12px] text-zinc-600 font-bold font-['Montserrat']">3. 其他文章链接</span>
                        <p className="text-[14px] font-bold text-zinc-400 truncate mt-1">toutiao.com/article/7321...</p>
                        
                        {/* 绿色发光戳章：真引用 */}
                        <div className="absolute right-3 top-2.5 rotate-[8deg] border border-emerald-500 bg-emerald-500/10 text-emerald-400 text-[11px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)] pointer-events-none">
                          真引用
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ==================== 3. 右栏：详情拆解 (568px) ==================== */}
          <div className="w-[568px] h-full flex flex-col gap-6 justify-between">
            
            {/* 右上：高粉丝账号 (不投放) */}
            <div className="h-[205px] bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px] p-6 flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 relative group shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
              {/* 不投放标志 */}
              <div className="absolute top-5 right-5 border border-red-500 bg-red-500/10 rounded-full px-3 py-0.5 flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[12px] text-red-400 font-black">不投放</span>
              </div>

              <div>
                <h3 className="text-[20px] font-black text-white font-['MiSans'] flex items-center gap-2 mb-2 tracking-wide">
                  <Users size={18} className="text-red-500" />
                  引用的高粉丝账号
                </h3>
                <p className="text-[16px] font-black text-zinc-300 leading-relaxed pr-[90px] font-['MiSans']">
                  引用的抖音链接指向了外部数码头部大V，由于此类账号实际上并未产出深度评测，我们坚决不对其进行投放。
                </p>
              </div>

              <div className="text-[12px] font-mono text-zinc-500 font-bold pt-2.5 border-t border-white/[0.05]">
                粉丝量级：100万+ 行业头部账号
              </div>
            </div>

            {/* 右下：引用抖音内容拆解 */}
            <div className="flex-1 bg-[#0B0D19]/45 border border-[#0052FF]/30 rounded-[24px] p-6 flex flex-col justify-between hover:border-[#0052FF]/50 transition-all duration-300 shadow-[0_15px_35px_rgba(0,82,255,0.04)]">
              <div>
                <h3 className="text-[20px] font-black text-white font-['MiSans'] flex items-center gap-2 mb-4 tracking-wide">
                  <FileText size={18} className="text-[#0052FF]" />
                  引用的抖音内容拆解
                </h3>
                
                <div className="space-y-3.5 mt-2">
                  <div className="bg-black/30 border border-white/[0.04] rounded-2xl p-4 flex items-stretch gap-3">
                    <div className="w-1 rounded-full bg-[#0052FF] shrink-0" />
                    <div>
                      <span className="text-[13px] font-bold text-zinc-500 block mb-1">AI 实际抓取的字段</span>
                      <p className="text-[15px] font-bold text-zinc-200 leading-relaxed font-['MiSans']">
                        仅读取了视频的标题、描述文本和机器生成的自动字幕文件。
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 border border-white/[0.04] rounded-2xl p-4 flex items-stretch gap-3">
                    <div className="w-1 rounded-full bg-red-500 shrink-0" />
                    <div>
                      <span className="text-[13px] font-bold text-zinc-500 block mb-1">未解析的字段</span>
                      <p className="text-[15px] font-bold text-zinc-200 leading-relaxed font-['MiSans']">
                        AI 并没有读取和深度解析任何视频画面，视频本身并无影响。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 核心结论 */}
              <div className="mt-4 bg-[#0052FF]/10 border border-[#0052FF]/20 rounded-xl py-3 px-4 flex items-center justify-center gap-2 shrink-0">
                <span className="text-[16px] font-black text-white font-['MiSans']">
                  结论：视频画面及深层内容对回答结果无影响
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ==================== 原因总结横向 Banner (优化为轻量化、中性深色背景) ==================== */}
        <div className="w-full h-[58px] bg-white/5 border border-white/[0.06] rounded-[16px] px-6 flex items-center justify-between shrink-0 hover:border-white/[0.12] transition-all duration-300">
          <div className="flex items-center gap-3">
            <AlertTriangle size={16} className="text-zinc-400" />
            <span className="text-[18px] xl:text-[20px] font-bold text-zinc-300 font-['MiSans'] leading-none">
              原因：AI 不读取视频，只是字节内部的政治任务（倾斜自家抖音链接）
            </span>
          </div>
          <span className="text-[11px] text-zinc-600 font-bold font-['Montserrat'] tracking-widest leading-none">
            GEO INSIGHTS
          </span>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryHighWeight.hideHeader = true;
