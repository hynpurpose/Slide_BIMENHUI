import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * Alpha 模型 · 为什么不能只看监测数据（监测数据的盲区）
 * 讲稿：监测数据只能告诉我们"现在 AI 引用了什么"，但不会告诉你哪个的权重占了 80%，
 * 也不会告诉你竞品投了 5 篇文章把你挤下去、你要做什么来抢回排名。
 */
export default function Page_QuantitativeModel_Why() {
  return (
    <SlideLayout title="为什么不能只看监测数据">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        监测数据只能告诉我们<span className="text-white font-bold">"现在 AI 引用了什么"</span>，却回答不了真正该怎么做。
      </div>

      <div className="absolute left-0 top-[70px] w-full h-[720px] flex gap-6 select-none font-['MiSans']">
        {/* 左：监测数据看得到的（表面结果） */}
        <div className="w-[560px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-10 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-400 tracking-wider flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-zinc-500 rounded-full" />监测数据看得到
          </div>
          <div className="mt-7 text-[34px] font-black text-white leading-snug">
            AI 现在<br />引用了哪些内容
          </div>
          <p className="mt-5 text-[23px] text-zinc-500 leading-relaxed">
            提及率、位次、引用来源…… 这些都是<span className="text-zinc-300 font-bold">已经发生的结果</span>。
          </p>
          <div className="mt-auto pt-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-zinc-700 px-6 py-3">
              <span className="text-[21px] text-zinc-400">看到的，是一面</span>
              <span className="text-[21px] text-white font-bold">后视镜</span>
            </div>
          </div>
        </div>

        {/* 右：两个盲区 */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <div className="text-[20px] font-bold text-blue-400 tracking-wider flex items-center gap-2.5 shrink-0">
            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />但它看不到这两件事
          </div>

          <div className="flex-1 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.06] p-9 shadow-[0_0_30px_rgba(0,76,229,0.12)] flex items-center gap-8">
            <span className="font-['Montserrat'] text-[68px] font-black text-[#004CE5] leading-none shrink-0">01</span>
            <div className="min-w-0">
              <div className="text-[32px] font-black text-white">看不到"权重从哪来"</div>
              <p className="mt-3 text-[23px] text-zinc-300 leading-relaxed">
                它列出 AI 引用了哪些内容，却不告诉你——<span className="text-white font-bold">哪一个信源的权重，占了 80%</span>。
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.06] p-9 shadow-[0_0_30px_rgba(0,76,229,0.12)] flex items-center gap-8">
            <span className="font-['Montserrat'] text-[68px] font-black text-[#004CE5] leading-none shrink-0">02</span>
            <div className="min-w-0">
              <div className="text-[32px] font-black text-white">看不到"攻防怎么打"</div>
              <p className="mt-3 text-[23px] text-zinc-300 leading-relaxed">
                竞品投 5 篇文章把你挤下第 1，它只报"你掉了"，却不告诉你——<span className="text-white font-bold">要投什么、投哪里，才能把排名抢回来</span>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Why.hideHeader = true;
