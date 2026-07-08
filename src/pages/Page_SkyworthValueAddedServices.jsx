import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

export function Page_SkyworthValueAddedServices() {
  return (
    <SlideLayout title="增值服务">
      <div className="w-full h-full flex flex-col justify-start pt-4 relative text-white font-sans overflow-hidden animate-fade-in">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />

        {/* ── 整个框架容器 (不设背景与粗大卡片框，保持大字号和呼吸感) ── */}
        <div className="w-full flex flex-col flex-grow min-h-0 justify-between">
          
          <table className="w-full text-left border-collapse flex-grow">
            <thead>
              <tr className="border-b-2 border-white/20 text-zinc-300 text-[22px] xl:text-[24px] font-bold">
                <th className="pb-4 pl-4 w-[16%]">服务项目</th>
                <th className="pb-4 w-[42%] pl-6">服务内容</th>
                <th className="pb-4 w-[22%] pl-6">预期成效</th>
                <th className="pb-4 pr-4 w-[20%] pl-6">协同事项</th>
              </tr>
            </thead>
            <tbody className="text-[20px] xl:text-[22px] leading-relaxed">
              
              {/* Row 1: 信息纠偏 */}
              <tr className="border-b border-white/10 hover:bg-white/[0.01] transition-colors duration-200">
                <td className="py-4 pl-4 font-bold text-white align-middle">
                  信息纠偏
                </td>
                <td className="py-4 text-zinc-300 align-middle pr-6 pl-6">
                  <div className="flex flex-col gap-2">
                    <p>
                      <strong className="text-white font-bold">1. 舆情监测:</strong> 实时监测各大模型中关于某家电品牌电视的错漏或负面言论。
                    </p>
                    <p>
                      <strong className="text-white font-bold">2. 快速净化:</strong> 部署高权重澄清与正面说明语料，快速纠正 AI 异常记忆。
                    </p>
                  </div>
                </td>
                <td className="py-4 align-middle pr-6 pl-6">
                  <div className="bg-[#004CE5]/10 border border-[#004CE5]/20 px-4 py-3 rounded-2xl">
                    <p className="text-zinc-100 font-medium">
                      守住 AI 端的品牌形象，<strong className="text-white font-bold">防范客源流失</strong>。
                    </p>
                  </div>
                </td>
                <td className="py-4 text-zinc-400 align-middle pr-4 pl-6">
                  配合提供官方最新的产品规格与价格管控证明材料。
                </td>
              </tr>

              {/* Row 2: 知识库搭建 */}
              <tr className="border-b border-white/10 hover:bg-white/[0.01] transition-colors duration-200">
                <td className="py-4 pl-4 font-bold text-white align-middle">
                  知识库搭建
                </td>
                <td className="py-4 text-zinc-300 align-middle pr-6 pl-6">
                  <div className="flex flex-col gap-2">
                    <p>
                      <strong className="text-white font-bold">1. 资产整合:</strong> 梳理壁纸电视研发背景、专利技术与核心 Q&A 资产。
                    </p>
                    <p>
                      <strong className="text-white font-bold">2. 结构改造:</strong> 转化为大模型偏好、易于被收录的标准化结构化语料。
                    </p>
                  </div>
                </td>
                <td className="py-4 align-middle pr-6 pl-6">
                  <div className="bg-[#004CE5]/10 border border-[#004CE5]/20 px-4 py-3 rounded-2xl">
                    <p className="text-zinc-100 font-medium">
                      消除大模型信息真空，<strong className="text-white font-bold">提高 AI 首推概率</strong>。
                    </p>
                  </div>
                </td>
                <td className="py-4 text-zinc-400 align-middle pr-4 pl-6">
                  提供官方技术手册、产品卖点文档及日常客服答疑库。
                </td>
              </tr>

              {/* Row 3: 官网改造 */}
              <tr className="border-b border-white/10 hover:bg-white/[0.01] transition-colors duration-200">
                <td className="py-4 pl-4 font-bold text-white align-middle">
                  官网改造
                </td>
                <td className="py-4 text-zinc-300 align-middle pr-6 pl-6">
                  <div className="flex flex-col gap-2">
                    <p>
                      <strong className="text-white font-bold">1. 语义优化:</strong> 对官方站点页面内容及代码，添加利于 AI 识别的标签。
                    </p>
                    <p>
                      <strong className="text-white font-bold">2. 信号增强:</strong> 埋设高权重答疑及权威可信事实节点，方便 AI 抓取。
                    </p>
                  </div>
                </td>
                <td className="py-4 align-middle pr-6 pl-6">
                  <div className="bg-[#004CE5]/10 border border-[#004CE5]/20 px-4 py-3 rounded-2xl">
                    <p className="text-zinc-100 font-medium">
                      强化官方信源影响力，<strong className="text-white font-bold">显著提升官网源被引用率</strong>。
                    </p>
                  </div>
                </td>
                <td className="py-4 text-zinc-400 align-middle pr-4 pl-6">
                  对接官方技术团队，协助进行站点元数据与语义标签修改。
                </td>
              </tr>

              {/* Row 4: 竞品监测 */}
              <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                <td className="py-4 pl-4 font-bold text-white align-middle">
                  竞品监测
                </td>
                <td className="py-4 text-zinc-300 align-middle pr-6 pl-6">
                  <div className="flex flex-col gap-2">
                    <p>
                      <strong className="text-white font-bold">1. 份额追踪:</strong> 持续监测竞品A、竞品B 等核心竞品在 AI 大盘的份额变化。
                    </p>
                    <p>
                      <strong className="text-white font-bold">2. 动态防守:</strong> 针对竞品最新的拦截动作，及时调整本品的对线策略。
                    </p>
                  </div>
                </td>
                <td className="py-4 align-middle pr-6 pl-6">
                  <div className="bg-[#004CE5]/10 border border-[#004CE5]/20 px-4 py-3 rounded-2xl">
                    <p className="text-zinc-100 font-medium">
                      掌握竞品在 AI 端策略走向，<strong className="text-white font-bold">守护某家电品牌的推荐位次</strong>。
                    </p>
                  </div>
                </td>
                <td className="py-4 text-zinc-400 align-middle pr-4 pl-6">
                  明确重点防守竞品名单，并协同锁定防守话术口径。
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthValueAddedServices.hideHeader = true;

export default Page_SkyworthValueAddedServices;
