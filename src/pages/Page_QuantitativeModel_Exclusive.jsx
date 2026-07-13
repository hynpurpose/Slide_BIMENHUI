import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * Alpha 模型 · 排他服务原则
 * 讲稿：对长期客户有一个排他原则——同一细分类目只服务一家。
 * 不是有钱不想挣，而是 AI 答案里的第一名只有一个；既然要帮客户争这个位置，
 * 就不可能同时帮它的直接竞品也去争同一个位置。
 */
export default function Page_QuantitativeModel_Exclusive() {
  return (
    <SlideLayout title="排他原则：同一细分类目，只服务一家">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        不是有钱不想挣，而是——<span className="text-white font-bold">AI 答案里的第一名，只有一个</span>。
      </div>

      <div className="absolute left-0 top-[70px] w-full h-[720px] flex gap-6 select-none font-['MiSans']">
        {/* 左：只有一个第一名 */}
        <div className="w-[740px] shrink-0 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.06] p-10 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,76,229,0.12)]">
          <div className="font-['Montserrat'] text-[210px] font-black text-white leading-none">
            1<span className="text-[#60A5FA] text-[110px] align-top">st</span>
          </div>
          <div className="mt-4 text-[32px] font-black text-white">AI 答案里的第一名</div>
          <div className="mt-4 inline-block rounded-full border border-[#60A5FA]/40 px-6 py-2 text-[23px] text-blue-200 font-bold">
            一个细分类目 · 只有一个位置
          </div>
        </div>

        {/* 右：推理 + 结论 */}
        <div className="flex-1 flex flex-col min-w-0 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-9 shrink-0">
            <div className="text-[20px] font-bold text-blue-400 flex items-center gap-2.5">
              <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />道理很简单
            </div>
            <p className="mt-4 text-[30px] text-white font-bold leading-[48px]">
              既然我们要帮一个客户去<span className="text-[#60A5FA]">争第一</span>，就不可能同时帮它的<span className="text-[#60A5FA]">直接竞品</span>，去争同一个第一。
            </p>
          </div>

          <div className="flex-1 rounded-3xl border border-[#60A5FA]/50 bg-gradient-to-br from-[#003bb3]/35 to-[#001430]/35 p-9 flex flex-col justify-center shadow-[0_0_40px_rgba(0,76,229,0.2)]">
            <div className="text-[24px] text-blue-200 font-bold">所以，对长期客户我们承诺</div>
            <div className="mt-4 text-[52px] font-black text-white leading-tight">
              同一细分类目<br />
              <span className="text-[#60A5FA]">只服务一家</span>
            </div>
            <p className="mt-5 text-[22px] text-zinc-300 leading-relaxed">
              把第一的位置，完整地留给我们服务的那一家。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Exclusive.hideHeader = true;
