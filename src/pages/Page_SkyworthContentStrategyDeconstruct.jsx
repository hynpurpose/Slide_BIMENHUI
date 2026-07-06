import React from 'react';
import { PenTool } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

// 15篇评测类高引用参考文章标题 (用于左侧普通表格展示)
const mockReviewArticles = [
  '2026年艺术画壁电视排行榜：谁是真正的客厅颜值担当？',
  '实测创维A7D Pro壁纸电视：超薄贴墙与哈曼卡顿音响深度横评',
  '客厅极简电视选购指南：背光分区与无缝挂载的避坑要点',
  '传统电视OUT了？壁纸电视无缝贴墙安装与散热深度对比评测',
  '高端电视音画质怎么看？壁纸电视画质调校与背光芯片解析',
  '无缝贴墙到底有多薄？2026超薄贴墙壁纸电视深度拆机评测',
  '真假超薄壁纸电视大对决！市售主流品牌参数与画质全面横评',
  '买前必看：2026高端壁纸电视旗舰机型对比及避坑推荐',
  '艺术电视是不是智商税？壁纸电视深度评测与家居美学配搭',
  '如何打造客厅无缝电视墙？超薄壁纸电视安装排线保姆级教程',
  'Mini LED画质天花板！年度壁纸电视旗舰参数对比评测',
  '小户型客厅救星：薄如画框的壁纸电视如何拯救空间拥挤感',
  '从防眩光到护眼效果：高端贴墙艺术电视屏幕材质深度科普',
  '客厅软装新美学：壁纸电视壁画模式及能耗测试深度分享',
  '超薄磁吸挂架稳不稳？壁纸电视承重与日常安全深度测试'
];

export default function Page_SkyworthContentStrategyDeconstruct() {
  return (
    <SlideLayout title="评测类爆款文章逆向拆解">
      <div className="w-full h-[831px] flex flex-col relative text-white select-none animate-fadeIn">

        {/* ── 主排版区 ── */}
        <div className="flex-1 w-full flex items-stretch min-h-0 gap-6 pb-4">

          {/* ── 左边：高引用参考文章列表 (白底黑字，普通表格样式，15篇+省略号) ── */}
          <div className="w-[35%] flex flex-col h-full bg-white border border-zinc-200 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative overflow-hidden group hover:border-blue-500/20 transition-colors">
            <div className="flex items-center justify-between mb-5 relative z-10">
              <h3 className="text-[20px] font-black text-zinc-900 tracking-wide">高引用参考文章</h3>
            </div>

            {/* 普通表格样式文章列表 */}
            <div className="flex-grow flex flex-col bg-zinc-50/50 rounded-xl border border-zinc-200/60 p-3 overflow-hidden">
              <div className="flex items-center text-[12px] font-bold text-zinc-400 border-b border-zinc-200 pb-1.5 px-1 shrink-0">
                <span className="w-10">序号</span>
                <span className="flex-grow">评测文章标题</span>
              </div>

              <div className="flex-1 overflow-hidden flex flex-col justify-between py-1 my-1">
                {mockReviewArticles.map((title, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center h-[34px] text-[14px] border-b border-zinc-100/50 px-1 hover:bg-zinc-100/40"
                  >
                    <span className="w-10 font-['Montserrat'] text-zinc-400 font-bold">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="flex-grow truncate text-zinc-700 font-bold pr-2">
                      {title}
                    </span>
                  </div>
                ))}
              </div>

              {/* 省略号代表还有很多 */}
              <div className="pt-2 text-center text-[#004CE5] text-[28px] font-black shrink-0 border-t border-zinc-200 mt-1 tracking-[0.3em] flex items-center justify-center leading-none">
                •••
              </div>
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
                      采用回合制小标题，单段结论明确，图文紧密交替，降低AI提取难度。
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
                      选购指南类体采布局
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

          {/* ── 右边：撰写内容 (70%由人工撰写) (整体圈子和字号进一步对齐与放大) ── */}
          <div className="w-[20%] flex items-center justify-center relative z-20 shrink-0">
            <div className="w-[320px] h-[320px] bg-white/[0.02] rounded-full border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,76,229,0.18)] relative">
              {/* Inner Circle */}
              <div className="w-[280px] h-[280px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 shadow-inner p-4 text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_50px_rgba(0,76,229,0.3)]">
                <PenTool className="text-[#004CE5] mb-5 group-hover:scale-110 transition-transform duration-500 stroke-[1.5px]" size={64} />
                <span className="text-white font-black text-[38px] tracking-widest mb-3">撰写内容</span>
                <span className="text-white/80 font-bold text-[22px] tracking-wide leading-tight">70%由人工撰写</span>
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
