import React from 'react';
import SlideLayout from '../components/SlideLayout';
import overview from '../data/geoOverview.json';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

const pct = (v) => (v === null || v === undefined ? '—' : `${v}%`);

export function Page_SkyworthKpiAcceptance() {
  const cat = overview.category_opt;
  const prodAvg = overview.product_opt_avg;
  const catMonitor = overview.category_monitor;
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans overflow-hidden bg-black animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

        {/* ── 页面标题 (符合 SlideLayout 的 H1 样式，往上再移动 16px 至 top: 16px) ── */}
        <div
          className="absolute z-20 flex flex-col justify-start"
          style={{ top: '16px', left: '40px', width: '1840px' }}
        >
          <h1 className="text-[43px] font-extrabold text-white tracking-wider font-['AlimamaShuHeiTi'] select-none">
            KPI 及验收标准
          </h1>
        </div>

        {/* ── 核心排版区 (从 top 94px 抵到 bottom 16px，完全消灭黑色空白) ── */}
        <div className="absolute top-[94px] left-[40px] w-[1840px] bottom-[16px] flex flex-col justify-between z-10 gap-3">

          {/* ── 上部：品牌当前现状 (3个卡片等宽 col-span-4，比例协调，指标紧凑靠拢，无小字解释) ── */}
          <div className="shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
              <h3 className="text-[19px] xl:text-[21px] font-bold text-white">品牌当前现状</h3>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {/* 品类优化词现状 */}
              <div className="col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-2.5 flex flex-col justify-center">
                <span className="text-[17px] xl:text-[19px] font-bold text-zinc-300 mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#004CE5] rounded-full" />
                  品类优化词现状
                </span>
                <div className="flex items-center gap-6 my-1">
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">提及率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(cat.mention_rate)}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">TOP1提及率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(cat.top1_rate)}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">TOP3提及率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(cat.top3_rate)}</span>
                  </div>
                </div>
              </div>

              {/* 产品专属优化词现状 */}
              <div className="col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-2.5 flex flex-col justify-center">
                <span className="text-[17px] xl:text-[19px] font-bold text-zinc-300 mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#004CE5] rounded-full" />
                  产品专属优化词现状 <span className="text-[13px] xl:text-[14px] text-zinc-500 font-normal">(五款产品平均)</span>
                </span>
                <div className="flex items-center gap-6 my-1">
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">提及率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(prodAvg.mention_rate)}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">TOP1提及率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(prodAvg.top1_rate)}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">TOP3提及率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(prodAvg.top3_rate)}</span>
                  </div>
                </div>
              </div>

              {/* 负面信息率 */}
              <div className="col-span-4 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-2.5 flex flex-col justify-center">
                <span className="text-[17px] xl:text-[19px] font-bold text-zinc-300 mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#004CE5] rounded-full" />
                  负面信息率
                </span>
                <div className="flex items-center gap-4 my-1">
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[13px] xl:text-[14px] font-medium">负面信息率</span>
                    <span className="text-[26px] xl:text-[30px] font-black text-white font-['Montserrat'] mt-0.5">{pct(catMonitor.negative)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 下部：KPI与交付标准表格 (参考 Page_GeoKpiAcceptance.jsx 布局架构，原版文字绝不更改) ── */}
          <div className="flex flex-col justify-start min-h-0 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
              <h3 className="text-[19px] xl:text-[21px] font-bold text-white">KPI与交付标准</h3>
            </div>

            <div className="w-full flex-grow flex flex-col justify-center min-h-0 bg-white/[0.02] border border-white/[0.08] rounded-2xl py-[12px] px-[16px] xl:py-[16px] xl:px-[24px] shadow-2xl">
              <table className="w-full text-left border-collapse h-full">
                <thead>
                  <tr className="border-b-2 border-white/[0.22] text-zinc-300 text-[19px] xl:text-[21px] font-black">
                    <th className="pb-2.5 pl-4 w-[11.5%]">词组分类</th>
                    <th className="pb-2.5 w-[28.5%] pl-6">运营目标与三阶段演进策略</th>
                    <th className="pb-2.5 w-[22%] pl-6">阶段性交付标准与 KPI 考核</th>
                    <th className="pb-2.5 pr-4 w-[38%] pl-6">最终展现权益及交付标准</th>
                  </tr>
                </thead>
                <tbody className="text-[18px] xl:text-[20px] leading-relaxed">

                  {/* ── Row 1: 品牌词（一守一攻） ── */}
                  <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22]">
                    <td className="py-3 xl:py-4 pl-4 font-semibold text-zinc-100 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="text-[20px] xl:text-[22px] text-white font-extrabold">优化词</span>
                        <span className="text-[14px] xl:text-[15px] text-zinc-400 font-normal">高相关词 · 低相关词</span>
                      </div>
                    </td>

                    {/* Column 2: 演进策略 */}
                    <td className="py-3 xl:py-4 text-zinc-300 align-top pr-4 pl-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-2.5 min-h-[100px] xl:min-h-[110px]">
                          <span className="w-[72px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-white/10 text-zinc-200 py-[1.5px] rounded text-center">阶段一</span>
                          <div className="text-[18px] xl:text-[20px] leading-relaxed text-justify">
                            <span className="text-white font-black">打地基｜3个月</span>
                            <span className="text-zinc-400 ml-2.5">高相关词全面固位，低相关词启动基础曝光</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 min-h-[100px] xl:min-h-[110px]">
                          <span className="w-[72px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-white/10 text-zinc-200 py-[1.5px] rounded text-center">阶段二</span>
                          <div className="text-[18px] xl:text-[20px] leading-relaxed text-justify">
                            <span className="text-white font-black">稳提升｜6个月</span>
                            <span className="text-zinc-400 ml-2.5">高相关词持续拉升，低相关词挤入核心推荐榜</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 min-h-[100px] xl:min-h-[110px]">
                          <span className="w-[72px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-white/10 text-zinc-200 py-[1.5px] rounded text-center">阶段三</span>
                          <div className="text-[18px] xl:text-[20px] leading-relaxed text-justify">
                            <span className="text-white font-black">占高位｜3个月</span>
                            <span className="text-zinc-400 ml-2.5">高相关词双指标达标，低相关词全面拉升至目标线</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Column 3: KPI 考核 */}
                    <td className="py-3 xl:py-4 text-zinc-300 align-top pr-4 pl-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-2.5 min-h-[100px] xl:min-h-[110px]">
                          <span className="w-[100px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 py-[1.5px] rounded text-center">阶段一考核</span>
                          <div className="text-[15.5px] xl:text-[17px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                            <div>
                              <strong className="text-white font-bold">高相关词</strong>：TOP1 位次稳定 <strong className="text-white font-black">NO.1</strong>，提及率 <strong className="text-white font-black">≥ 70%</strong>
                            </div>
                            <div>
                              <strong className="text-white font-bold">低相关词</strong>：提及率 <strong className="text-white font-black">≥ 40%</strong>，TOP3 提及率 <strong className="text-white font-black">≥ 25%</strong>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 min-h-[100px] xl:min-h-[110px]">
                          <span className="w-[100px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 py-[1.5px] rounded text-center">阶段二考核</span>
                          <div className="text-[15.5px] xl:text-[17px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                            <div>
                              <strong className="text-white font-bold">高相关词</strong>：提及率 <strong className="text-white font-black">≥ 80%</strong>，TOP3 提及率 <strong className="text-white font-black">≥ 70%</strong>
                            </div>
                            <div>
                              <strong className="text-white font-bold">低相关词</strong>：提及率 <strong className="text-white font-black">≥ 60%</strong>，平均位次进入前 <strong className="text-white font-black">5</strong>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 min-h-[100px] xl:min-h-[110px]">
                          <span className="w-[100px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-[#004CE5]/20 text-[#8cb1ff] border border-[#004CE5]/40 py-[1.5px] rounded text-center">阶段三考核</span>
                          <div className="text-[15.5px] xl:text-[17px] leading-relaxed text-zinc-200 flex flex-col gap-2">
                            <div>
                              <strong className="text-white font-bold">高相关词</strong>：提及率 <strong className="text-white font-black">≥ 90%</strong>，TOP3 提及率 <strong className="text-white font-black">≥ 85%</strong>
                            </div>
                            <div>
                              <strong className="text-white font-bold">低相关词</strong>：提及率 <strong className="text-white font-black">≥ 80%</strong>，TOP3 提及率 <strong className="text-white font-black">≥ 80%</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Column 4: 最终交付标准 */}
                    <td className="py-3 xl:py-4 text-zinc-300 align-top pr-4 border-l border-white/[0.22] pl-6">
                      <div className="flex flex-col gap-2.5 bg-[#004CE5]/5 border border-[#004CE5]/15 p-3 xl:p-4 rounded-xl h-full justify-center">
                        <p className="text-zinc-150 text-[17px] xl:text-[18.5px] leading-relaxed text-justify">
                          在 <strong className="text-white font-bold">DeepSeek、豆包、元宝、通义千问</strong> 四个 AI 平台搜索约定词条时，AI 回答中应出现创维品牌/产品推荐、推荐理由及基于官方信息的产品表述。
                        </p>
                        <p className="border-t border-white/10 pt-2 text-zinc-400 text-[14px] xl:text-[15.5px] leading-relaxed text-justify">
                          本次运营 <strong className="text-white font-bold">50 条核心词条</strong>（覆盖 500 种以上延展问法）。因 AI 平台升级及回答随机性等不可控因素，达标不少于 16 条即视为有效交付；低于 16 条的，按未达标比例退款。
                        </p>
                      </div>
                    </td>
                  </tr>

                  {/* ── Row 2: 监测词（负面及错误） ── */}
                  <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                    <td className="py-3 xl:py-4 pl-4 font-semibold text-zinc-100 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="text-[20px] xl:text-[22px] text-white font-extrabold">监测词</span>
                      </div>
                    </td>

                    {/* Column 2: 演进策略 */}
                    <td className="py-3 xl:py-4 text-zinc-300 align-top pr-4 pl-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-2.5 h-[80px] xl:h-[88px]">
                          <span className="w-[72px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-white/10 text-zinc-200 py-[1.5px] rounded text-center">阶段一</span>
                          <div className="text-[18px] xl:text-[20px] leading-relaxed text-justify">
                            <span className="text-white font-black">查问题｜1个月</span>
                            <span className="text-zinc-400 ml-2.5">建立负面 / 错误信息监测，定制针对性策略</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 h-[80px] xl:h-[88px]">
                          <span className="w-[72px] shrink-0 text-[13.5px] xl:text-[14.5px] font-black bg-white/10 text-zinc-200 py-[1.5px] rounded text-center">阶段二</span>
                          <div className="text-[18px] xl:text-[20px] leading-relaxed text-justify">
                            <span className="text-white font-black">解问题｜11个月</span>
                            <span className="text-zinc-400 ml-2.5">分类处理错误信源，修正型号价格等异常信息</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Column 3: KPI 考核 */}
                    <td className="py-3 xl:py-4 text-zinc-300 align-top pr-4 pl-6">
                      <div className="flex flex-col justify-center h-full bg-[#004CE5]/5 border border-[#004CE5]/15 p-3 xl:p-4 rounded-xl min-h-[170px] xl:min-h-[188px]">
                        <p className="text-zinc-200 text-[15.5px] xl:text-[17px] leading-relaxed text-justify">
                          针对品牌询问，AI 生成内容的<strong className="text-white font-bold">核心事实准确率</strong>达到约定标准，<strong className="text-white font-bold">负面信息占比守住 10% 红线以内</strong>，正向/中性情绪导向占比稳定在 <strong className="text-white font-bold">90% 以上</strong>。
                        </p>
                      </div>
                    </td>

                    {/* Column 4: 最终交付标准 */}
                    <td className="py-3 xl:py-4 text-zinc-400 align-top pr-4 leading-relaxed border-l border-white/[0.22] pl-6 text-zinc-200">
                      <div className="flex flex-col gap-2 bg-white/[0.015] border border-white/[0.04] p-3 xl:p-4 rounded-xl h-full justify-center min-h-[170px] xl:min-h-[188px]">
                        <p className="text-zinc-200 text-[17px] xl:text-[18.5px] leading-relaxed text-justify">
                          围绕约定平台、5 款壁纸电视及核心词条，持续监测并纠偏价格错乱、型号混淆、历史价格引用等问题，通过信源定位、官方口径强化和内容覆盖，降低 AI 引用错误信息的概率。
                        </p>
                        <p className="border-t border-white/10 pt-2 text-zinc-400 text-[14px] xl:text-[15.5px] leading-relaxed text-justify">
                          因 AI 平台升级、信源变化及回答随机性等不可控因素，项目以<strong className="text-white font-bold">核心错误压制</strong>、<strong className="text-white font-bold">正确信息占比提升</strong>作为交付标准。
                        </p>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthKpiAcceptance.hideHeader = true;

export default Page_SkyworthKpiAcceptance;
