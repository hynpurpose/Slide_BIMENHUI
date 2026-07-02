import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ContentAgent() {
  return (
    <SlideLayout title="内容撰写Agent">
      
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        实现了文章的产出全自动化，使我们的内容团队能够专注于<span className="text-white font-bold">真正需要人工优化的工作</span>，确保内容质量<span className="text-white font-bold">远远高于市场平均水平</span>。
      </div>

      {/* ── 整个框架图占满下方排版区，带蓝色框线和标题 “Agent实现逻辑” ── */}
      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-6 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none">
        
        {/* 框架图标头 */}
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider font-['MiSans']">Agent 实现逻辑</span>
        </div>

        {/* ── 流程连接线 SVG Overlay ── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#004CE5" />
            </marker>
          </defs>
          
          {/* 左侧素材输入合流 $\rightarrow$ Step 01 (选题策划) - 采用直角折线 */}
          <path d="M 280 150 L 300 150 L 300 180 L 312 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          <path d="M 280 290 L 300 290 L 300 180 L 312 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          <path d="M 280 430 L 300 430 L 300 180 L 312 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          
          {/* 主轴横向管道 - 直线 */}
          {/* Step 01 $\rightarrow$ Step 02 */}
          <path d="M 560 180 L 592 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          {/* Step 02 $\rightarrow$ Step 03 */}
          <path d="M 840 180 L 872 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          {/* Step 03 $\rightarrow$ Step 04 */}
          <path d="M 1120 180 L 1152 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          {/* Step 04 $\rightarrow$ GEO Content Score (评分系统) */}
          <path d="M 1400 180 L 1432 180" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />

          {/* 纵向配置输入 - 直线 */}
          {/* 文章结构模板 $\rightarrow$ Step 02 */}
          <path d="M 720 380 L 720 248" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          {/* 素材分类映射 $\rightarrow$ Step 03 */}
          <path d="M 1000 380 L 1000 248" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          {/* 风格参考 $\rightarrow$ Step 04 */}
          <path d="M 1280 380 L 1280 248" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />

          {/* 底部 RAG 数据链路 */}
          {/* 问题链 $\rightarrow$ RAG问答 */}
          <path d="M 280 645 L 312 645" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
          {/* RAG问答 $\rightarrow$ Step 03 (直角折线连接，从侧边绕开素材分类卡片) */}
          <path d="M 840 645 L 860 645 L 860 310 L 900 310 L 900 248" stroke="#004CE5" strokeWidth="2" fill="none" markerEnd="url(#arrow-blue)" />
        </svg>

        {/* ── 节点阵列 ── */}
        
        {/* ==================== 1. 素材输入区 (左侧 Column 1) ==================== */}
        {/* Node 1: Deep Research */}
        <div 
          className="absolute w-[240px] h-[100px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3.5 flex flex-col justify-between shadow-lg"
          style={{ left: '40px', top: '100px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="text-[20px] font-bold text-white">产品参数与资料</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">数据类型</span>
            <span className="text-[14px] bg-zinc-800 text-zinc-300 border border-zinc-700/60 px-2.5 py-0.5 rounded font-bold">产品数据</span>
          </div>
        </div>

        {/* Node 2: 社媒讨论 */}
        <div 
          className="absolute w-[240px] h-[100px] bg-[#111115] border border-[#004CE5]/40 rounded-xl p-3.5 flex flex-col justify-between shadow-lg"
          style={{ left: '40px', top: '240px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#004CE5]" />
              <span className="text-[20px] font-bold text-white">社媒真实讨论痛点</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">数据类型</span>
            <span className="text-[14px] bg-[#004CE5]/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded font-bold">社媒语料</span>
          </div>
        </div>

        {/* Node 3: 行业热点 */}
        <div 
          className="absolute w-[240px] h-[100px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3.5 flex flex-col justify-between shadow-lg"
          style={{ left: '40px', top: '380px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="text-[20px] font-bold text-white">相关行业热点事件</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">数据类型</span>
            <span className="text-[14px] bg-zinc-800 text-zinc-300 border border-zinc-700/60 px-2.5 py-0.5 rounded font-bold">热点动态</span>
          </div>
        </div>

        {/* ==================== 2. 主干核心流程区 (横向 Row 1) ==================== */}
        {/* Node 6: 选题策划 (Column 2) - 纵向堆叠标头以防标题挤压换行 */}
        <div 
          className="absolute w-[240px] h-[135px] bg-[#111115] border border-[#004CE5]/40 rounded-xl p-3.5 flex flex-col justify-between shadow-xl"
          style={{ left: '320px', top: '105px' }}
        >
          <div className="flex flex-col justify-start border-b border-zinc-800/50 pb-1.5 gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] bg-[#004CE5]/10 text-blue-400 px-1.5 py-0.5 rounded font-bold border border-blue-500/20">步骤 01</span>
              <div className="flex items-center gap-1 opacity-20">
                <span className="text-[10px]">▶</span>
                <span className="text-[12px] font-bold">•••</span>
              </div>
            </div>
            <span className="text-[20px] font-bold text-white">多维视角选题策划</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">输出项</span>
            <span className="text-[14px] bg-[#004CE5]/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded font-bold">选题列表</span>
          </div>
        </div>

        {/* Node 8: 生成文章大纲 (Column 3) */}
        <div 
          className="absolute w-[240px] h-[135px] bg-[#111115] border border-[#004CE5]/40 rounded-xl p-3.5 flex flex-col justify-between shadow-xl"
          style={{ left: '600px', top: '105px' }}
        >
          <div className="flex flex-col justify-start border-b border-zinc-800/50 pb-1.5 gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] bg-[#004CE5]/10 text-blue-400 px-1.5 py-0.5 rounded font-bold border border-blue-500/20">步骤 02</span>
              <div className="flex items-center gap-1 opacity-20">
                <span className="text-[10px]">▶</span>
                <span className="text-[12px] font-bold">•••</span>
              </div>
            </div>
            <span className="text-[20px] font-bold text-white">生成文章结构大纲</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">输出项</span>
            <span className="text-[14px] bg-[#004CE5]/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded font-bold">大纲结构</span>
          </div>
        </div>

        {/* Node 10: 执行大纲撰写 (Column 4) */}
        <div 
          className="absolute w-[240px] h-[135px] bg-[#111115] border border-[#004CE5] rounded-xl p-3.5 flex flex-col justify-between shadow-[0_0_20px_rgba(0,76,229,0.15)]"
          style={{ left: '880px', top: '105px' }}
        >
          <div className="flex flex-col justify-start border-b border-zinc-800/50 pb-1.5 gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] bg-[#004CE5]/10 text-blue-400 px-1.5 py-0.5 rounded font-bold border border-blue-500/20">步骤 03</span>
              <div className="flex items-center gap-1 opacity-30">
                <span className="text-[10px] text-blue-400">▶</span>
                <span className="text-[12px] font-bold text-blue-400">•••</span>
              </div>
            </div>
            <span className="text-[20px] font-bold text-white">执行大纲与撰写</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">输出项</span>
            <span className="text-[14px] bg-[#004CE5]/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded font-bold">生成初稿</span>
          </div>
        </div>

        {/* Node 11: 风格与优化 (Column 5) */}
        <div 
          className="absolute w-[240px] h-[135px] bg-[#111115] border border-[#004CE5]/40 rounded-xl p-3.5 flex flex-col justify-between shadow-xl"
          style={{ left: '1160px', top: '105px' }}
        >
          <div className="flex flex-col justify-start border-b border-zinc-800/50 pb-1.5 gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] bg-[#004CE5]/10 text-blue-400 px-1.5 py-0.5 rounded font-bold border border-blue-500/20">步骤 04</span>
              <div className="flex items-center gap-1 opacity-20">
                <span className="text-[10px]">▶</span>
                <span className="text-[12px] font-bold">•••</span>
              </div>
            </div>
            <span className="text-[20px] font-bold text-white">文风与关键词植入</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">输出项</span>
            <span className="text-[14px] bg-[#004CE5]/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded font-bold">优化文案</span>
          </div>
        </div>

        {/* Node 13: GEO 评分系统 (Column 6, 占满右侧纵向宽度，呈现超大气势打分面板) */}
        <div 
          className="absolute w-[360px] h-[600px] bg-[#0E0E12] border border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,76,229,0.25)]"
          style={{ left: '1440px', top: '100px' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <span className="text-[18px] text-zinc-400 font-bold tracking-wider">内容评估得分</span>
            <span className="text-[14px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">达标</span>
          </div>

          {/* Big Score Header - 垂直堆叠防止折行 */}
          <div className="py-4 flex flex-col justify-start gap-1">
            <div className="flex items-baseline">
              <span className="text-[86px] font-black text-white tracking-tighter leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>95</span>
              <span className="text-[20px] text-zinc-500 font-bold ml-3">综合得分</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[15px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded font-bold">
                目标区间 85-95
              </span>
            </div>
          </div>

          {/* Score Breakdown List with Horizontal Progress Bars - 往上移动 (justify-start) */}
          <div className="space-y-6 flex-1 flex flex-col justify-start pt-6 border-t border-zinc-800/80 mt-4">
            
            {/* Dimension 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[18px]">
                <span className="font-bold text-zinc-300">信息真实度</span>
                <span className="font-bold text-white font-mono">96 / 100</span>
              </div>
              <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/40">
                <div className="h-full bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ width: '96%' }} />
              </div>
            </div>

            {/* Dimension 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[18px]">
                <span className="font-bold text-zinc-300">大模型可读性</span>
                <span className="font-bold text-white font-mono">94 / 100</span>
              </div>
              <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/40">
                <div className="h-full bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ width: '94%' }} />
              </div>
            </div>

            {/* Dimension 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[18px]">
                <span className="font-bold text-zinc-300">内容契合度</span>
                <span className="font-bold text-white font-mono">92 / 100</span>
              </div>
              <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/40">
                <div className="h-full bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ width: '92%' }} />
              </div>
            </div>

          </div>
          
        </div>

        {/* ==================== 3. 纵向配置与辅助模块 (Row 2) ==================== */}
        {/* Node 7: 结构模板 (Column 3) */}
        <div 
          className="absolute w-[240px] h-[160px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3 flex flex-col justify-between shadow-md"
          style={{ left: '600px', top: '380px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="text-[18px] font-bold text-white">文章结构模板</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center text-[17px] text-zinc-300 font-bold space-y-1">
            <div>• 引流铺量型</div>
            <div>• 单品介绍型</div>
            <div>• 问答科普型</div>
          </div>
        </div>

        {/* Node 9: 素材分类 (Column 4) */}
        <div 
          className="absolute w-[240px] h-[180px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3 flex flex-col justify-between shadow-md"
          style={{ left: '880px', top: '380px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="text-[18px] font-bold text-white">素材分类映射</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center text-[17px] text-zinc-300 space-y-1.5 font-semibold">
            <div><span className="text-[#004CE5] font-bold">信息型</span>：事实依据</div>
            <div><span className="text-zinc-100 font-bold">素材型</span>：叙事与例子</div>
            <div><span className="text-zinc-500 font-bold">风格型</span>：参考语气</div>
          </div>
        </div>

        {/* Node 12: 风格参考 (Column 5) */}
        <div 
          className="absolute w-[240px] h-[160px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3 flex flex-col justify-between shadow-md"
          style={{ left: '1160px', top: '380px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="text-[18px] font-bold text-white">风格调性参考</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <p className="flex-1 flex items-center text-[18px] text-zinc-300 leading-snug font-bold">
            提供预设行文语气、修辞策略及规范参考
          </p>
        </div>

        {/* ==================== 4. 底部 RAG 与问题链 (Row 3) ==================== */}
        {/* Node 4: 串联问题 */}
        <div 
          className="absolute w-[240px] h-[110px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3 flex flex-col justify-between shadow-lg"
          style={{ left: '40px', top: '590px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span className="text-[18px] font-bold text-white">核心串接问题链</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">问题类型</span>
            <span className="text-[14px] bg-zinc-800 text-zinc-300 border border-zinc-700/60 px-2.5 py-0.5 rounded font-bold">串接问题</span>
          </div>
        </div>

        {/* Node 5: RAG 问答转换 */}
        <div 
          className="absolute w-[560px] h-[110px] bg-[#111115] border border-zinc-800/80 rounded-xl p-3 flex flex-col justify-between shadow-lg"
          style={{ left: '340px', top: '590px' }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />
              <span className="text-[18px] font-bold text-white">知识库 RAG 问答转换</span>
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <span className="text-[10px]">▶</span>
              <span className="text-[12px] font-bold">•••</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-zinc-500 font-bold">大模型处理</span>
            <span className="text-[16px] bg-[#004CE5]/10 text-blue-400 border border-blue-500/20 px-3.5 py-0.5 rounded-full font-bold">
              检索知识库自动润色为通俗解答
            </span>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_ContentAgent.hideHeader = true;
