import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoWritingAgentIntro() {
  return (
    <SlideLayout title="我们的 GEO 内容写作 Agent">
      {/* ── 主排版容器 (总高度 795px，抵满 content bottom) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex gap-6"
        style={{ top: '0px', height: '795px' }}
      >
        {/* ==================== 左栏：Agent 介绍 + 录屏演示 ==================== */}
        <div className="w-[480px] h-full bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-9 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* 标题区 */}
          <div className="flex flex-col gap-4">
            <span className="text-[18px] font-bold text-blue-400 font-['Montserrat'] tracking-[0.2em]">
              CONTENT WRITING AGENT
            </span>
            <h2 className="text-[46px] font-black text-white font-['MiSans'] leading-[1.15]">
              专为 GEO 内容<br />独立研发的 Agent
            </h2>

            {/* 说明文字 */}
            <p className="text-zinc-300 text-[21px] font-normal leading-[38px] font-['MiSans'] text-justify mt-2">
              内部基于国外爆火的内容整理模型
              <span className="text-white font-bold"> 谷歌 NotebookLM </span>
              为底座，独立研发的一套
              <span className="text-white font-bold underline decoration-[#004CE5] decoration-2 underline-offset-[6px]">
                专门服务于 GEO 内容写作
              </span>
              的 Agent，右侧为其底层架构图。
            </p>
          </div>

          {/* 录屏演示卡片 */}
          <div className="w-full h-[220px] rounded-2xl bg-black/40 border border-zinc-800/70 relative overflow-hidden group shadow-inner">
            {/* 网格底纹 */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* 光晕 */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-600/15 blur-[100px] -top-10 -right-10 pointer-events-none" />

            {/* 播放按钮 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-[76px] h-[76px] rounded-full bg-[#004CE5] flex items-center justify-center shadow-[0_0_30px_rgba(0,76,229,0.5)]">
                <span className="text-white text-[30px] ml-1.5 leading-none">▶</span>
              </div>
              <span className="text-[22px] font-bold text-white font-['MiSans']">Agent 使用录屏演示</span>
            </div>

            {/* 角标 */}
            <div className="absolute top-3.5 left-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[15px] font-bold text-zinc-300 tracking-wider font-['Montserrat']">REC</span>
            </div>
          </div>
        </div>

        {/* ==================== 右栏：底层架构图 ==================== */}
        <div className="flex-grow h-full bg-zinc-950/30 backdrop-blur-md rounded-[32px] p-9 flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* 架构图标题 */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-900/60 shrink-0">
            <span className="text-[28px] font-black text-white font-['MiSans'] border-l-4 border-blue-500 pl-3 leading-none">
              Agent 底层架构图
            </span>
            <span className="text-[18px] font-bold text-zinc-500 font-['Montserrat'] tracking-wider">
              POWERED BY NOTEBOOKLM
            </span>
          </div>

          {/* 架构分层 */}
          <div className="flex-grow flex flex-col justify-between py-6">
            {/* ── 第一层：品牌知识库 (底座) ── */}
            <div className="w-full rounded-2xl bg-[#004CE5]/10 border border-[#004CE5]/50 px-8 py-5 flex items-center justify-between shadow-[0_0_30px_rgba(0,76,229,0.15)]">
              <div className="flex items-center gap-5">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#004CE5] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,76,229,0.5)]">
                  <span className="text-white text-[26px] font-black font-['Montserrat']">01</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[28px] font-black text-white font-['MiSans'] leading-tight">
                    建立品牌知识库
                  </span>
                  <span className="text-[18px] text-zinc-400 font-medium font-['MiSans']">
                    产品资料 · 社媒真实语料 · 行业热点，汇聚为可检索知识底座
                  </span>
                </div>
              </div>
              <span className="text-[16px] font-bold text-blue-300 bg-[#004CE5]/15 border border-[#004CE5]/30 px-4 py-1.5 rounded-full font-['MiSans'] shrink-0">
                知识底座
              </span>
            </div>

            {/* 向下连接：三分叉 */}
            <ArrowRow count={3} />

            {/* ── 第二层：策略配置 (三模块) ── */}
            <div className="grid grid-cols-3 gap-5">
              {[
                { num: '02', title: '设定目标用户', desc: '锁定人群画像与需求场景' },
                { num: '03', title: '设定内容风格', desc: '统一行文语气与表达规范' },
                { num: '04', title: '总结高引用规律', desc: '拆解高被引内容的共性特征' },
              ].map((m) => (
                <div
                  key={m.num}
                  className="rounded-2xl bg-zinc-900/40 border border-zinc-800/70 px-6 py-5 flex flex-col gap-2 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[24px] font-black text-white font-['MiSans'] leading-tight">
                      {m.title}
                    </span>
                    <span className="text-[30px] font-black text-blue-500/80 font-['Montserrat'] leading-none">
                      {m.num}
                    </span>
                  </div>
                  <span className="text-[17px] text-zinc-400 font-medium font-['MiSans'] leading-snug">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* 向下连接：汇聚 */}
            <ArrowRow count={1} />

            {/* ── 第三层：内容生产流水线 ── */}
            <div className="flex items-stretch gap-4">
              {[
                { num: '05', title: '生成文章大纲', tag: '结构框架', highlight: false },
                { num: '06', title: '产出完整内容', tag: '成稿内容', highlight: true },
                { num: '07', title: '人工校验发布', tag: '质量把关', highlight: false },
              ].map((s, i, arr) => (
                <React.Fragment key={s.num}>
                  <div
                    className={`flex-1 rounded-2xl px-6 py-5 flex flex-col justify-between shadow-md border ${
                      s.highlight
                        ? 'bg-[#004CE5]/10 border-[#004CE5]'
                        : 'bg-zinc-900/40 border-zinc-800/70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[24px] font-black text-white font-['MiSans'] leading-tight">
                        {s.title}
                      </span>
                      <span className="text-[30px] font-black text-blue-500/80 font-['Montserrat'] leading-none">
                        {s.num}
                      </span>
                    </div>
                    <span className="text-[16px] font-bold text-blue-300 bg-[#004CE5]/15 border border-[#004CE5]/25 px-3 py-1 rounded-full font-['MiSans'] self-start mt-3">
                      {s.tag}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center shrink-0">
                      <span className="text-[32px] text-[#004CE5] leading-none">→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// 分层之间的向下箭头连接件
function ArrowRow({ count }) {
  return (
    <div className={`flex items-center justify-around px-4 ${count === 1 ? 'justify-center' : ''}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[26px] text-[#004CE5]/70 leading-none">
          ↓
        </span>
      ))}
    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GeoWritingAgentIntro.hideHeader = true;
