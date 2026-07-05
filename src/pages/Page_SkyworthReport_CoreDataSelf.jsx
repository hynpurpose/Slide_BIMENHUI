import React from 'react';
import SlideLayout from '../components/SlideLayout';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

function Num({ children, className = '' }) {
  return (
    <span className={`font-montserrat ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {children}
    </span>
  );
}

export function Page_SkyworthReport_CoreDataSelf() {
  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col relative text-white font-sans px-20 sm:px-28 py-16 overflow-hidden animate-fade-in bg-black">
        <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
        <div className="w-full max-w-[1600px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 gap-10">

          {/* 页面标题 */}
          <div className="text-center shrink-0 mb-4">
            <h1 className="text-[36px] xl:text-[40px] font-bold text-white tracking-widest leading-tight">
              核心数据总览
            </h1>
          </div>

          {/* ===== 数据表格 ===== */}
          <div className="shrink-0 mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-white/[0.3] text-zinc-400 text-[22px] xl:text-[24px] font-bold">
                  <th className="pb-4 w-[28%] pl-4">优化词分类</th>
                  <th className="pb-4 w-[24%] pl-6">提及率</th>
                  <th className="pb-4 w-[24%] pl-6">TOP1 提及率</th>
                  <th className="pb-4 w-[24%] pl-6">TOP3 提及率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20 hover:bg-white/[0.01] transition-colors duration-200">
                  <td className="py-10 xl:py-12 pl-4 font-bold text-white text-[24px] xl:text-[26px] align-middle">
                    品类优化词
                  </td>
                  <td className="py-10 xl:py-12 align-middle pl-6">
                    <Num className="text-[64px] xl:text-[72px] font-extrabold text-white leading-none tracking-tight">73.6%</Num>
                  </td>
                  <td className="py-10 xl:py-12 align-middle pl-6">
                    <Num className="text-[64px] xl:text-[72px] font-extrabold text-white leading-none tracking-tight">41.2%</Num>
                  </td>
                  <td className="py-10 xl:py-12 align-middle pl-6">
                    <Num className="text-[64px] xl:text-[72px] font-extrabold text-white leading-none tracking-tight">63.5%</Num>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                  <td className="py-10 xl:py-12 pl-4 font-bold text-white text-[24px] xl:text-[26px] align-middle">
                    <div className="flex flex-col">
                      <span>产品专属优化词</span>
                      <span className="text-[14px] xl:text-[16px] text-zinc-500 font-normal mt-1">(五款产品平均表现)</span>
                    </div>
                  </td>
                  <td className="py-10 xl:py-12 align-middle pl-6">
                    <Num className="text-[64px] xl:text-[72px] font-extrabold text-white leading-none tracking-tight">53.3%</Num>
                  </td>
                  <td className="py-10 xl:py-12 align-middle pl-6">
                    <Num className="text-[64px] xl:text-[72px] font-extrabold text-white leading-none tracking-tight">19.5%</Num>
                  </td>
                  <td className="py-10 xl:py-12 align-middle pl-6">
                    <Num className="text-[64px] xl:text-[72px] font-extrabold text-white leading-none tracking-tight">40.0%</Num>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===== 数据总结 ===== */}
          <div className="shrink-0 border-t border-white/10 pt-8 mt-6">
            <div className="flex items-start gap-6">
              <span className="text-[22px] xl:text-[24px] font-bold text-white shrink-0 bg-[#004CE5] px-5 py-2.5 rounded-xl shadow-[0_0_10px_rgba(0,76,229,0.3)]">数据总结</span>
              <p className="text-[22px] xl:text-[24px] text-zinc-200 leading-relaxed text-justify flex-1">
                品牌层面，创维在品类大词的<strong className="text-white font-bold">提及率达 73.6%</strong>，AI 认知优势稳固，但 <strong className="text-white font-bold">TOP1 仅 41.2%</strong>，仍有近六成首推位被竞品分走。产品平均层面，五款重点产品平均提及率为 <strong className="text-[#60A5FA] font-bold">53.3%</strong>，平均 TOP1 仅为 <strong className="text-[#60A5FA] font-bold">19.5%</strong>，表明直接首推率（TOP1）仍有较大优化空间，亟需通过专属场景 and 长尾优化词的语料覆盖来拉升推荐精度。
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthReport_CoreDataSelf.hideHeader = true;

export default Page_SkyworthReport_CoreDataSelf;
