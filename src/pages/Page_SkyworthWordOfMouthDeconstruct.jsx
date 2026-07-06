import React from 'react';
import { PenTool } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

// 15篇用户口碑类高引用参考文章标题 (纯中文，无来源)
const mockMouthArticles = [
  '真实业主分享：创维壁纸电视买了三个月的真实体验与槽点',
  '避坑指南：买电视千万别只看参数！说说我家的真实翻车现场',
  '客厅电视背景墙避坑：用壁画电视遮盖凌乱插线孔的改造心得',
  '从种草到拔草：传统电视换超薄无缝贴墙壁纸电视的心理落差',
  '自费购买真实评测：创维壁纸电视的音响效果到底值不值这个价',
  '全网都在推的艺术贴墙电视，买回家之后到底后不后悔？',
  '液晶电视防眩光哑光屏好不好？真实业主白天客厅光线实拍',
  '老机主吐槽：智能电视操作系统无广告与画质细节的真实反馈',
  '电视安装全过程：别被商家的免费安装骗了，聊聊我的踩坑记录',
  '极简家装毕业照：壁纸电视怎么融入我家的法式奶油风设计',
  'Mini LED电视对比测评：为什么我最终放弃了海外大牌选创维',
  '老婆非要买大白墙贴画电视，入住半年后我来客观说几句',
  '客厅音响升级避坑：电视自带哈曼卡顿和买外置回音壁对比',
  '真机实测：超薄壁纸电视散热到底行不行？真实发热点测量',
  '电视机背景墙安装排坑：怎么做到像装饰画一样无缝贴墙'
];

export default function Page_SkyworthWordOfMouthDeconstruct() {
  return (
    <SlideLayout title="用户口碑类爆款文章逆向拆解">
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
                <span className="flex-grow">口碑文章标题</span>
              </div>

              <div className="flex-1 overflow-hidden flex flex-col justify-between py-1 my-1">
                {mockMouthArticles.map((title, idx) => (
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

          {/* ── 中间：高引用法则拆解 (完全保留排版与大小，无品牌具体信息) ── */}
          <div className="flex-grow flex flex-col h-full bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <div className="h-8 w-1 bg-[#004CE5] rounded-full" />
              <h2 className="text-4xl font-bold text-[#004CE5] tracking-wide">
                【口碑类】高引用率内容创作的法则拆解
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
                      真实购买心路与硬核开箱
                    </h3>
                    <div className="text-zinc-300 text-[20px] leading-relaxed font-mono">
                      [心路历程] + [开箱实录]（如：5月种草海外版，8月对比回音壁，最终因国行搭载 MiniLED 旗舰面板而决定入手开箱）。
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">02</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      多场景深度实测反馈
                    </h3>
                    <div className="text-zinc-300 text-[20px] leading-relaxed flex flex-col gap-1.5 font-['MiSans']">
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">影音：</span><span>独立画质芯片加持，分区控黑优秀，暗部雪山细节清晰无光晕。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">游戏：</span><span>支持VRR背光同步，eARC杜比全景声音频时延仅80毫秒。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">氛围：</span><span>Ambilight环景光随音视频律动，沉浸感好，护眼效果佳。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">系统：</span><span>原生无广告系统，DRM L1级认证，支持直装Kodi、Plex软件。</span></div>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">03</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      长期使用后的硬核实测数据
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      在日常观影测试中实测峰值亮度达到 1593 尼特，SDR 亮度 1498 尼特，原生对比度 5406:1。
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">04</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      优缺点中立陈述增强信誉
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      不回避客观缺点（如全屏亮度较保守、小角度侧视有光晕、遥控器没有背光），提高AI搜索采信度。
                    </p>
                  </div>
                </div>

                {/* Point 5 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">05</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      互动问答与真实团购转化
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      整合“哑光屏反光”等评论区高频提问进行真实答疑，并在文末提供渠道专属优惠，促进消费决策。
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

          {/* ── 右边：撰写内容 (70%由人工撰写) (整体圈子和字号同等比例放大) ── */}
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

Page_SkyworthWordOfMouthDeconstruct.hideHeader = true;
