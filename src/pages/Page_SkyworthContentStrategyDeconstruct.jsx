import React from 'react';
import { Database } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthContentStrategyDeconstruct() {
  return (
    <SlideLayout title="评测类爆款文章逆向拆解">
      <div className="w-full h-[831px] flex flex-col relative text-white select-none animate-fadeIn">

        {/* ── Main Content Area ── */}
        <div className="flex-1 w-full flex items-stretch min-h-0 gap-6 pb-4">

          {/* ── Left Side Image ── */}
          <div className="w-[35%] flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-4 relative z-10 px-2">
              <h3 className="text-lg font-bold text-blue-100 tracking-wide">高引用参考文章</h3>
            </div>

            <div className="flex-1 w-full rounded-xl overflow-hidden relative border border-zinc-200 bg-white">
              {/* Mac Browser Header simulation for the image window */}
              <div className="w-full h-7 bg-[#E5E7EB] border-b border-zinc-300 flex items-center px-3 shrink-0 relative z-20">
                <div className="flex items-center gap-1.5 ">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 top-7 flex items-center justify-center p-2">
                <img
                  src="/charts/geo-article-analysis-skyworth.png"
                  alt="Skyworth Article Example"
                  className="w-full h-full object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Placeholder if image fails to load */}
                <div className="hidden flex-col items-center justify-center w-full h-full z-10 text-zinc-400 pb-8">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm tracking-widest uppercase">创维文章截图占位图片</span>
                  <span className="text-xs mt-2 text-zinc-500">请在 public/charts/ 中放入图片 geo-article-analysis-skyworth.png</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Middle Arrow Divider ── */}
          <div className="w-[3%] flex items-center justify-center relative z-10 shrink-0">
            <div className="w-full flex text-white/20 items-center justify-center">
              <svg className="w-8 h-8 text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* ── Article Outline Structure (The 5 Rules) ── */}
          <div className="flex-grow flex flex-col h-full bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="h-8 w-1 bg-white/50 rounded-full" />
              <h2 className="text-4xl font-bold text-[#004CE5] tracking-wide">
                【评测类】高引用率内容创作的法则拆解
              </h2>
            </div>

            <div className="flex-grow flex flex-col justify-center relative">
              {/* Vertical Outline Guide Line */}
              <div className="absolute left-[3px] top-6 bottom-12 w-0.5 bg-white/10 z-0 rounded-full"></div>

              <div className="space-y-6 relative z-10 pl-8">

                {/* Point 1 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">01</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      爆款反常识标题公式
                    </h3>
                    <div className="text-zinc-300 text-[20px] leading-relaxed font-mono">
                      [国产品牌] + 正面刚 + [国际标杆] + [反常识悬念]（更贵更好？）
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">02</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      “拉踩型”评测结构
                    </h3>
                    <div className="text-zinc-300 text-[20px] leading-relaxed flex flex-col gap-1.5">
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">引出：</span><span>抛出海信比索尼更具性价比或参数优势的价格悬念。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">定调：</span><span>明确对比度、艺术贴合度、画质调校等评测标准。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">交锋：</span><span>画质、厚度、艺术质感多轮对决。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">揭秘：</span><span>结尾点出海信的产品细节。</span></div>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">03</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      碎片化图文排版
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      采用“Round 1/2/3”回合制小标题，单段结论极简，图文紧密交替，降低AI提取难度。
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">04</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      专家与硬核数据背书
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      引入家电评测博主或设计师把关，搭配色域仪等专业测试数据，提高大模型采信率。
                    </p>
                  </div>
                </div>

                {/* Point 5 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">05</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      选购指南类体裁布局
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      采用“参数对比+家居实测”的硬核科技评测文风，极易被搜索或AI作为“电视推荐”参考抓取。
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Middle Arrow Divider to Agent DB ── */}
          <div className="w-[3%] flex items-center justify-center relative z-10 shrink-0">
            <div className="w-full flex text-[#004CE5] items-center justify-center">
              <svg className="w-8 h-8 text-blue-500/40 drop-shadow-[0_0_10px_rgba(0,76,229,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* ── Right Side: Agent DB Target ── */}
          <div className="w-[20%] flex justify-end items-center relative z-20 shrink-0 pr-[88px]">
            <div className="w-[220px] h-[220px] bg-white/[0.02] rounded-full border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,76,229,0.1)] relative">
              {/* Inner Circle */}
              <div className="w-[180px] h-[180px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 shadow-inner p-4 text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.2)]">
                <Database className="text-[#004CE5] mb-2 group-hover:scale-110 transition-transform duration-500 stroke-[1.5px]" size={36} />
                <span className="text-white font-bold text-2xl tracking-widest mb-1">内容生成</span>
                <span className="text-white/60 font-medium text-sm tracking-wide leading-tight">Agent 专属数据库</span>
              </div>
              {/* Decorative Rings */}
              <div className="absolute inset-[-10px] rounded-full border border-[#004CE5]/20 opacity-50 animate-[spin_12s_linear_infinite] border-t-[#004CE5]/60 pointer-events-none"></div>
              <div className="absolute inset-[10px] rounded-full border border-indigo-400/10 opacity-30 animate-[spin_18s_linear_infinite_reverse] border-b-[#004CE5]/40 pointer-events-none"></div>
            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

Page_SkyworthContentStrategyDeconstruct.hideHeader = true;
