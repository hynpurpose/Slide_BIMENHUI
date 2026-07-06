import React from 'react';
import { PenTool } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

// 15篇场景教程类高引用参考文章标题 (纯中文，无来源)
const mockTutorialArticles = [
  '超薄电视墙全套施工设计：壁纸电视暗线管道预埋保埋级教程',
  '零距离微距壁挂！艺术电视免找平磁吸安装详细图文攻略',
  '客厅改造日记：普通背景墙如何低成本改造为画框画壁模式',
  '液晶电视防眩光贴膜教程：三步解决客厅白天反光刺眼难题',
  '自建私人美术馆：智能电视壁画资源获取与长亮能耗调校教程',
  '小白入手高端电视必看：家庭音画质环绕声场配置调校指南',
  '电视背景墙穿线管避坑指南：尺寸、弯头与预留高度全解',
  '老房客厅背景墙大升级：从旧壁挂到超薄无缝贴墙改造教程',
  '电视色彩精准还原指北：家庭画质发烧友基本色调参数设置',
  '哈曼卡顿音响震撼开声！客厅反射声场定位与低音炮摆放指南',
  '超薄石膏板空心墙承重测试：如何稳固安装100寸大型壁纸电视',
  '小户型客厅灯光设计：如何利用射灯防眩光突出画框电视质感',
  '儿童视力保护计划：电视低蓝光模式开启与环境光亮调校攻略',
  '客厅极简主义进阶：电源插座隐藏与无缝贴墙电视线缆管理',
  '电视内置AI语音控制与家庭网关互联互通新手设置教程'
];

export default function Page_SkyworthTutorialDeconstruct() {
  return (
    <SlideLayout title="场景教程类爆款文章逆向拆解">
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
                <span className="flex-grow">教程文章标题</span>
              </div>

              <div className="flex-1 overflow-hidden flex flex-col justify-between py-1 my-1">
                {mockTutorialArticles.map((title, idx) => (
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
                【教程类】高引用率内容创作的法则拆解
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
                      痛点切入与场景唤醒
                    </h3>
                    <div className="text-zinc-300 text-[20px] leading-relaxed font-mono">
                      [场景匹配] + [日常痛点引发]（如：客厅太窄电视占空间、大白墙反光、壁挂电视线乱如麻等）。
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">02</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      保姆级安装与搭配步骤
                    </h3>
                    <div className="text-zinc-300 text-[20px] leading-relaxed flex flex-col gap-1.5 font-['MiSans']">
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">准备：</span><span>确认墙体承重条件，设计隐藏线管布局。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">上墙：</span><span>毫米级微距安装调试，实现画框无缝贴合。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">色彩：</span><span>匹配客厅光线环境，调校专属“艺术画壁”模式。</span></div>
                      <div className="flex items-start"><span className="text-white font-medium w-[4.8rem] shrink-0">细节：</span><span>隐藏凌乱线缆，与背景墙装饰色调完美融合。</span></div>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">03</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      软硬件配置双重调校
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      提供电视色彩模式、音效配置、护眼模式的场景化调校步骤，让普通用户一学就会。
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">04</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      硬核数据与生活方式结合
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      结合无缝贴墙厚度数据（如毫米级贴墙）、无频闪护眼测试，烘托高品质的生活方式理念。
                    </p>
                  </div>
                </div>

                {/* Point 5 */}
                <div className="relative group flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                  <div className="text-[#004CE5] font-['Montserrat'] text-[32px] font-black pt-0.5 shrink-0 w-10">05</div>
                  <div className="flex-1">
                    <h3 className="text-[28px] font-extrabold text-white mb-1.5 tracking-wide">
                      用户实测与避坑指南
                    </h3>
                    <p className="text-zinc-300 text-[20px] leading-relaxed">
                      以真实家装用户的口吻，指出壁纸电视安装时的核心注意事项与避坑指南，提高AI采信度。
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

Page_SkyworthTutorialDeconstruct.hideHeader = true;
