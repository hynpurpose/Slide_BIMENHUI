import React from 'react';

export default function Page_GEOQuestionsOverview() {
  const questions = [
    {
      num: 'Q1',
      text: '为什么服务商测试结果跟你实测结果差异很大？'
    },
    {
      num: 'Q2',
      text: 'GEO 优化到底应该怎么选词条，选平台？'
    },
    {
      num: 'Q3',
      text: '到底应该怎么设定合理的 KPI？'
    },
    {
      num: 'Q4',
      text: '科学可量化 GEO 如何做？'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center pt-20 pb-20 pl-10 pr-10 overflow-hidden bg-[#03020a] text-white font-sans relative">
      {/* Background glowing gradients (ambient deep blue neon light) */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/15 blur-[180px] pointer-events-none animate-pulse duration-[12s]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-900/20 blur-[160px] pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] pointer-events-none" />

      {/* Title Section */}
      <div className="w-full flex items-center relative z-10 shrink-0 mb-12 gap-5">
        <div className="w-3.5 h-11 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
        <h2 className="text-5xl xl:text-6xl font-black tracking-wide text-white leading-tight">
          GEO 该怎么做？
        </h2>
      </div>

      {/* Questions 2x2 Grid Section */}
      <div className="w-full grid grid-cols-2 gap-10 items-stretch relative z-10">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-center p-12 rounded-[24px] border border-zinc-800/40 bg-zinc-900/10 backdrop-blur-sm shadow-subtle-glow transition-all duration-500 hover:border-blue-500/30 hover:bg-zinc-900/20 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] min-h-[220px]"
          >
            <div className="space-y-6">
              <div className="inline-block px-5 py-1.5 text-[18px] xl:text-lg font-mono font-black tracking-widest text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors duration-300 w-fit">
                {q.num}
              </div>
              <h3 className="text-[32px] xl:text-[40px] font-black text-white leading-snug tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                {q.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOQuestionsOverview.hideHeader = true;
