import React from 'react';
import { PenTool } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

// 5篇评测类高引用参考文章数据
const mockReviewArticles = [
  { title: '2026年艺术画壁电视排行榜：谁是真正的客厅颜值担当？', source: '太平洋电脑网' },
  { title: '实测创维A7D Pro壁纸电视：超薄贴墙与哈曼卡顿音响深度横评', source: '中关村在线' },
  { title: '客厅极简电视选购指南：背光分区与无缝挂载的避坑要点', source: '知乎家电专栏' },
  { title: '传统电视OUT了？壁纸电视无缝贴墙安装与散热深度对比评测', source: '新浪科技' },
  { title: '高端电视音画质怎么看？壁纸电视画质调校与背光芯片解析', source: '网易家电' }
];

export default function Page_SkyworthContentStrategyDeconstruct() {
  return (
    <SlideLayout title="评测类爆款文章逆向拆解">
      <div className="w-full h-[831px] flex flex-col relative text-white select-none animate-fadeIn">

        {/* ── 主排版区 ── */}
        <div className="flex-1 w-full flex items-stretch min-h-0 gap-6 pb-4">

          {/* ── 左边：高引用参考文章列表 ── */}
          <div className="w-[35%] flex flex-col h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-5 relative z-10">
              <h3 className="text-[20px] font-black text-white tracking-wide">高引用参考文章</h3>
              <span className="text-[12px] text-zinc-500 font-semibold font-['Montserrat']">REVIEWS</span>
            </div>

            {/* 评测类文章列表 */}
            <div className="flex-1 w-full flex flex-col justify-between py-1 min-h-0 gap-3">
              {mockReviewArticles.map((art, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4.5 bg-black/40 border border-zinc-900 rounded-xl p-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-['Montserrat'] text-[14px] font-black text-[#004CE5] bg-[#004CE5]/10 w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 border border-[#004CE5]/20">
                    {idx + 1}
                  </span>
                  <div className="flex-grow min-w-0">
                    <p className="text-[15px] font-black text-zinc-200 leading-snug line-clamp-2">
                      {art.title}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-[12px] text-zinc-500 font-semibold">{art.source}</span>
                      <span className="text-[11px] text-[#0052FF] bg-[#0052FF]/5 border border-[#0052FF]/20 rounded-full px-2 py-[0.5px] font-bold font-['Montserrat']">
                        HIGH CITED
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 中间箭头连接符 ── */}
          <div className="w-[3%] flex items-center justify-center relative z-10 shrink-0">
            <div className="w-full flex text-white/20 items-center justify-center">
              <svg className="w-8 h-8 text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* ── 中间：高引用法则拆解 (完全保留排版与大小，仅移除具体品牌如海信/索尼信息) ── */}
          <div className="flex-grow flex flex-col h-full bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="h-8 w-1 bg-[#004CE5] rounded-full" />
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
                      [主推新品] + 正面PK + [行业标杆] + [反常识悬念]（如：价格差一倍，反而赢了？）
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
                    <div className="text-zinc-300 text-[20px] leading-relaxed flex flex-col gap-1.5 font-['MiSans']">
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">引出：</span><span>抛出主推产品更具性价比或在核心参数上的悬念价格。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">定调：</span><span>明确色域分区、艺术贴合度、屏幕防眩光等对比评测维度。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">交锋：</span><span>核心音画质、厚度外观、艺术质感等多轮实测对决。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">揭秘：</span><span>结尾顺理成章地提炼并揭示出主推产品极致的细节优势。</span></div>
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

          {/* ── 右边箭头连接符 ── */}
          <div className="w-[3%] flex items-center justify-center relative z-10 shrink-0">
            <div className="w-full flex text-[#004CE5] items-center justify-center">
              <svg className="w-8 h-8 text-blue-500/40 drop-shadow-[0_0_10px_rgba(0,76,229,0.3)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* ── 右边：撰写内容 (70%由人工撰写) ── */}
          <div className="w-[20%] flex justify-end items-center relative z-20 shrink-0 pr-[88px]">
            <div className="w-[220px] h-[220px] bg-white/[0.02] rounded-full border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,76,229,0.1)] relative">
              {/* Inner Circle */}
              <div className="w-[180px] h-[180px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 shadow-inner p-4 text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.2)]">
                <PenTool className="text-[#004CE5] mb-2 group-hover:scale-110 transition-transform duration-500 stroke-[1.5px]" size={36} />
                <span className="text-white font-black text-[23px] tracking-widest mb-1.5">撰写内容</span>
                <span className="text-white/60 font-medium text-[13px] tracking-wide leading-tight">70%由人工撰写</span>
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
