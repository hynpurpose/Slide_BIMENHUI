import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthVsCompetitor() {
  const tableData = [
    {
      brand: "创维\nA10H / A8H / A7H 系列",
      sales: "全球出货：约 1500 万台\n国内销售：约 216 亿元",
      target: "注重客厅美学与整体硬装格调，同时对音画参数有高要求的中高产家庭",
      prosCons: "优势：多价位段矩阵覆盖，壁纸厚度与四声道独立声学系统契合，兼顾美学与影音表现\n劣势：屏幕消光拟真工艺较三星画框相比，在强光环境反射下仍有优化空间",
      isHighlight: true
    },
    {
      brand: "海信\nCanvas TV 艺术系列",
      sales: "全球出货：约 2990 万台\n国内销售：约 246 亿元",
      target: "信赖传统大厂质量，看重稳妥售后服务，追求高分区常规MiniLED画质的主流群体",
      prosCons: "优势：背光分区与峰值亮度常规参数极强，品牌实力深厚且售后网络覆盖完备\n劣势：壁纸细分类目缺乏深度投入与技术积淀，独立贴画生态相对单一匮乏",
      isHighlight: false
    },
    {
      brand: "TCL\nArt 7M / A300 系列",
      sales: "全球出货：约 3040 万台\n国内销售：约 268 亿元",
      target: "看重艺术边框格调与极致性价比，追求年轻化潮流感设计的年轻一代消费者",
      prosCons: "优势：外形主打时尚年轻化画轴风格，常规MiniLED画质强，在大尺寸段性价比高\n劣势：无独立声学腔体设计，壁纸电视生态刚刚起步，厚度与散热妥协较多",
      isHighlight: false
    },
    {
      brand: "长虹\nD8S 壁纸系列",
      sales: "全球出货：约 900 万台\n国内销售：约 147 亿元",
      target: "追求基础壁画上墙效果，预算相对有限、注重低价格门槛的实用性价比用户",
      prosCons: "优势：极具价格杀伤力，让壁画级电视的零售门槛降到最低，性价比极其强悍\n劣势：屏幕面板参数偏低端，整体做工精细度、金属质感与贴墙贴合度有待优化",
      isHighlight: false
    },
    {
      brand: "三星\nThe Frame 画框系列",
      sales: "全球出货：约 3800 万台\n国内销售：约 4.5 亿元",
      target: "高预算且对美学极度洁癖，追求拟真消光画框效果，不敏感核心画质参数者",
      prosCons: "优势: 哑光消光屏（Matte Display）技术业界领先，防眩光极强，拟真度完美\n劣势: 电视核心音画画质较为平庸，且依赖厚重外置集线盒（One Connect）",
      isHighlight: false
    },
    {
      brand: "LG\nOLED evo G 系列",
      sales: "全球出货：约 2400 万台\n国内销售：约 1.8 亿元",
      target: "顶级预算，既要求顶尖OLED黑场画质，又要求超薄无缝贴合的双重影音发烧友",
      prosCons: "优势: 顶级OLED面板黑场画质巅峰，黑场响应极快，画廊超薄无缝贴合度极佳\n劣势: OLED面板成本高昂导致价格极其昂贵。",
      isHighlight: false
    }
  ];

  return (
    <SlideLayout title="创维壁纸电视 VS 竞品壁纸电视">
      <div className="w-full h-full relative select-none animate-fadeIn">

        {/* ==================== 左栏：用户认知定位 ( w-[590px] ) ==================== */}
        <div className="absolute left-0 top-0 w-[590px] bottom-0 flex flex-col justify-start py-2 pr-6 border-r border-white/[0.16]">
          <h2 className="text-[34px] font-bold text-white font-['MiSans'] border-b border-zinc-900 pb-3 mb-4 select-none">
            用户认知定位
          </h2>

          <div className="flex flex-col flex-1 justify-between gap-2.5">
            {/* 创维单独一个框 */}
            <div className="bg-zinc-900/60 border-2 border-blue-400 rounded-2xl overflow-hidden flex items-stretch h-[110px] shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.45)]">
              {/* Left Logo (Full Height, White Background) */}
              <div className="w-[110px] bg-white flex items-center justify-center p-2.5 shrink-0 border-r border-blue-400">
                <img
                  src="/brand-logos/skyworth.png"
                  alt="创维"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.parentNode.style.display = 'none'; }}
                />
              </div>
              {/* Right Content */}
              <div className="flex-grow p-4 flex flex-col justify-center gap-1">
                <span className="text-[24px] font-extrabold text-white leading-tight">创维</span>
                <span className="text-[18px] xl:text-[20px] text-zinc-300 leading-tight">平衡家居美学与音画，产品线最齐全</span>
              </div>
            </div>

            {/* 两个框之间放一个 VS */}
            <div className="text-white font-black text-[22px] font-mono tracking-widest text-center select-none py-0.5 drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]">
              VS
            </div>

            {/* 其他竞品单独一个框 - 填充并抵到最底部 */}
            <div className="bg-zinc-900/40 border-2 border-white/[0.12] rounded-2xl p-4 flex flex-col justify-between flex-grow shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              {/* 海信 */}
              <div className="flex items-stretch gap-4 h-[72px] xl:h-[76px]">
                <div className="w-[72px] h-[72px] xl:w-[76px] xl:h-[76px] bg-white flex items-center justify-center p-1.5 shrink-0 rounded-lg">
                  <img
                    src="/brand-logos/hisense.png"
                    alt="海信"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.parentNode.style.display = 'none'; }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="text-[20px] xl:text-[22px] font-extrabold text-zinc-200 leading-tight">海信</span>
                  <span className="text-[17px] xl:text-[19px] text-zinc-400 leading-tight font-medium">有独家技术，品牌背书高</span>
                </div>
              </div>
              <div className="border-t border-dashed border-zinc-800" />

              {/* TCL */}
              <div className="flex items-stretch gap-4 h-[72px] xl:h-[76px]">
                <div className="w-[72px] h-[72px] xl:w-[76px] xl:h-[76px] bg-white flex items-center justify-center p-1.5 shrink-0 rounded-lg">
                  <img
                    src="/brand-logos/tcl.png"
                    alt="TCL"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.parentNode.style.display = 'none'; }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="text-[20px] xl:text-[22px] font-extrabold text-zinc-200 leading-tight">TCL</span>
                  <span className="text-[17px] xl:text-[19px] text-zinc-400 leading-tight font-medium">年轻化与高性价比</span>
                </div>
              </div>
              <div className="border-t border-dashed border-zinc-800" />

              {/* 长虹 */}
              <div className="flex items-stretch gap-4 h-[72px] xl:h-[76px]">
                <div className="w-[72px] h-[72px] xl:w-[76px] xl:h-[76px] bg-white flex items-center justify-center p-1.5 shrink-0 rounded-lg">
                  <img
                    src="/brand-logos/changhong.png"
                    alt="长虹"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.parentNode.style.display = 'none'; }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="text-[20px] xl:text-[22px] font-extrabold text-zinc-200 leading-tight">长虹</span>
                  <span className="text-[17px] xl:text-[19px] text-zinc-400 leading-tight font-medium">极致的性价比</span>
                </div>
              </div>
              <div className="border-t border-dashed border-zinc-800" />

              {/* 三星 */}
              <div className="flex items-stretch gap-4 h-[72px] xl:h-[76px]">
                <div className="w-[72px] h-[72px] xl:w-[76px] xl:h-[76px] bg-white flex items-center justify-center p-1.5 shrink-0 rounded-lg">
                  <img
                    src="/brand-logos/samsung.png"
                    alt="三星"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.parentNode.style.display = 'none'; }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="text-[20px] xl:text-[22px] font-extrabold text-zinc-200 leading-tight">三星</span>
                  <span className="text-[17px] xl:text-[19px] text-zinc-400 leading-tight font-medium font-['MiSans']">壁画效果最佳</span>
                </div>
              </div>
              <div className="border-t border-dashed border-zinc-800" />

              {/* LG */}
              <div className="flex items-stretch gap-4 h-[72px] xl:h-[76px]">
                <div className="w-[72px] h-[72px] xl:w-[76px] xl:h-[76px] bg-white flex items-center justify-center p-1.5 shrink-0 rounded-lg">
                  <img
                    src="/brand-logos/lg.png"
                    alt="LG"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.parentNode.style.display = 'none'; }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="text-[20px] xl:text-[22px] font-extrabold text-zinc-200 leading-tight">LG</span>
                  <span className="text-[17px] xl:text-[19px] text-zinc-400 leading-tight font-medium">顶级画质</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 右栏：具体数据 ( w-[1200px] ) ==================== */}
        <div className="absolute left-[640px] top-0 w-[1200px] bottom-0 flex flex-col py-2 min-h-0">
          <h2 className="text-[34px] font-bold text-white font-['MiSans'] border-b border-zinc-900 pb-3 mb-3 select-none shrink-0">
            具体数据
          </h2>
          <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#09090b]/40 w-full flex-1 min-h-0 flex flex-col shadow-inner">
            {/* 表头 */}
            <div className="grid grid-cols-[190px_250px_320px_1fr] shrink-0 border-b border-[#004CE5]/30 bg-[#004CE5]/15 text-white text-[16px] font-bold font-['MiSans']">
              <div className="px-3 py-[21px] border-r border-[#004CE5]/20">品牌 / 推荐系列</div>
              <div className="px-3 py-[21px] border-r border-[#004CE5]/20">
                出货与销售数据
                <span className="text-[11px] font-normal text-zinc-400 ml-1">(2025年电视数据)</span>
              </div>
              <div className="px-3 py-[21px] border-r border-[#004CE5]/20">目标人群</div>
              <div className="px-3 py-[21px]">产品优劣势对照总结</div>
            </div>

            {/* 表体：6 行均分剩余高度 */}
            <div className="flex-1 min-h-0 grid grid-rows-6">
              {tableData.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[190px_250px_320px_1fr] min-h-0 border-b border-zinc-900/80 last:border-b-0 text-[14px] leading-snug font-sans ${row.isHighlight ? 'bg-zinc-900/50 font-medium' : ''
                    }`}
                >
                  <div
                    className={`px-3 py-1.5 border-r border-zinc-900/80 font-bold font-['MiSans'] whitespace-pre-line ${row.isHighlight ? 'text-[#60A5FA]' : 'text-zinc-200'
                      }`}
                  >
                    {row.brand}
                  </div>

                  <div className="px-3 py-1.5 border-r border-zinc-900/80 text-zinc-300 whitespace-pre-line">
                    {row.sales}
                  </div>

                  <div className="px-3 py-1.5 border-r border-zinc-900/80 text-zinc-300 font-['MiSans']">
                    {row.target}
                  </div>

                  <div className="px-3 py-1.5 text-zinc-300 font-['MiSans'] min-h-0 overflow-hidden">
                    {row.prosCons.split('\n').map((line, lIdx) => {
                      const isPro = line.startsWith('优势：') || line.startsWith('优势:');
                      return (
                        <div key={lIdx} className={lIdx > 0 ? 'mt-0.5 flex items-start' : 'flex items-start'}>
                          <span
                            className={`inline-flex items-center justify-center text-[10px] font-extrabold px-1 py-0.5 rounded mr-1.5 shrink-0 select-none ${isPro
                                ? 'bg-blue-950/50 text-[#60A5FA] border border-blue-900/50'
                                : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800'
                              }`}
                          >
                            {isPro ? '优势' : '劣势'}
                          </span>
                          <span className={isPro ? 'text-zinc-200' : 'text-zinc-400'}>{line.substring(3)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthVsCompetitor.hideHeader = true;
