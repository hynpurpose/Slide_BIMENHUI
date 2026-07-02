import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthShadowAlgorithm() {
  return (
    <SlideLayout title="影子算法">
      {/* ── 顶部说明结论 (大字号，加粗白色强调) ── */}
      <div className="absolute top-[0px] left-0 w-full select-none">
        <p 
          className="text-zinc-350 font-normal font-['MiSans'] leading-relaxed"
          style={{ fontSize: '24px', lineHeight: '36px' }}
        >
          模型推荐谁、引用谁、相信谁，很大程度上取决于它<strong className="text-white font-bold">前面搜到了什么内容</strong>。
        </p>
      </div>

      {/* ── 核心内容排版区 ── */}
      <div 
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between"
        style={{ top: '90px', height: '705px' }}
      >
        {/* ==================== 左侧：逻辑阐述与突破口 (大字号，大白话) ==================== */}
        <div className="w-[580px] flex flex-col justify-center gap-6 pr-6">
          
          {/* Step 1: 穷举与拆解问题 */}
          <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-full bg-zinc-800 text-white font-mono text-[22px] font-bold flex items-center justify-center">1</span>
              <h4 className="text-[26px] font-bold text-white leading-none">
                穷举与拆解大问题
              </h4>
            </div>
            <p className="text-[24px] text-zinc-400 leading-relaxed font-sans pl-14">
              将用户可能问的宽泛大提问，细化拆解为数十个更具体、更聚焦的<strong className="text-white">核心子问题</strong>。
            </p>
          </div>

          {/* Step 2: 模拟搜索引擎检索 */}
          <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-full bg-blue-900/60 text-blue-300 border border-blue-800 font-mono text-[22px] font-bold flex items-center justify-center">2</span>
              <h4 className="text-[26px] font-bold text-white leading-none">
                模拟搜索引擎查索
              </h4>
            </div>
            <p className="text-[24px] text-zinc-400 leading-relaxed font-sans pl-14">
              模拟 AI 的前置检索逻辑，到百度、Bing等大模型主要的<strong className="text-white">搜索接口中进行全网模拟抓取</strong>。
            </p>
          </div>

          {/* Step 3: 交叉验证锁定高频优化词 */}
          <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-full bg-teal-900/60 text-teal-300 border border-teal-850 font-mono text-[22px] font-bold flex items-center justify-center">3</span>
              <h4 className="text-[26px] font-bold text-white leading-none">
                交叉比对锁定高频优化词
              </h4>
            </div>
            <p className="text-[24px] text-zinc-400 leading-relaxed font-sans pl-14">
              把检索到的网页结果与 AI 实际推荐结果做<strong className="text-white">交叉比对</strong>，反向筛出能决定 AI 推荐结果的高频关键词进行定向优化。
            </p>
          </div>
        </div>

        {/* ==================== 右侧：CSS 3D 影子算法三层模型图 (宽度 1200px) ==================== */}
        <div className="w-[1200px] relative flex items-center justify-center">
          
          {/* 3D Isometric Viewport Container */}
          <div 
            className="relative"
            style={{ 
              width: '650px', 
              height: '520px', 
              perspective: '1500px', 
              transformStyle: 'preserve-3d',
              left: '-140px',
              top: '40px'
            }}
          >
            {/* 3D Rotate Container */}
            <div 
              className="absolute w-full h-full"
              style={{ 
                transform: 'rotateX(55deg) rotateZ(-40deg)', 
                transformStyle: 'preserve-3d' 
              }}
            >
              {/* ── Layer 1: Bottom (影子算法模拟层 - 带有横纵交叉轴文字，大格网格) ── */}
              <div 
                className="absolute inset-0 border-2 border-zinc-500 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
                style={{ 
                  transform: 'translateZ(0px)',
                  transformStyle: 'preserve-3d',
                  background: 'rgba(24, 24, 27, 0.85)',
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)',
                  backgroundSize: '100px 100px'
                }}
              >
                {/* Highlight cell: Facts */}
                <div 
                  className="absolute bg-zinc-800/90 border-2 border-zinc-400 rounded flex flex-col items-center justify-center shadow-lg"
                  style={{ left: '200px', top: '200px', width: '100px', height: '100px' }}
                >
                  <span className="text-zinc-100 text-[18px] font-bold text-center leading-tight">词条交叉<br />组合点</span>
                </div>

                {/* 纵轴 (修饰词/意图) - 沿左侧边缘排列 (大字号 22px) */}
                <div className="absolute -left-24 top-[35px] text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">口碑</div>
                <div className="absolute -left-24 top-[135px] text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">选购</div>
                <div className="absolute -left-24 top-[235px] text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">评测</div>
                <div className="absolute -left-24 top-[335px] text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">推荐</div>
                <div className="absolute -left-24 top-[435px] text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">最好的</div>

                {/* 横轴 (产品/品类词) - 沿底部边缘排列 (大字号 22px) */}
                <div className="absolute left-[35px] -bottom-10 text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">电视</div>
                <div className="absolute left-[135px] -bottom-10 text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">壁纸电视</div>
                <div className="absolute left-[235px] -bottom-10 text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">超薄电视</div>
                <div className="absolute left-[335px] -bottom-10 text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">艺术电视</div>
                <div className="absolute left-[435px] -bottom-10 text-zinc-400 font-bold text-[22px] font-['MiSans'] leading-none">客厅大屏</div>
              </div>

              {/* ── Layer 2: Middle (前置搜索检索层 - 实色控制透明度，大格网格) ── */}
              <div 
                className="absolute inset-0 border-2 border-blue-500 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.18)]"
                style={{ 
                  transform: 'translateZ(130px)',
                  transformStyle: 'preserve-3d',
                  background: 'rgba(30, 58, 138, 0.25)',
                  backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.22) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(59, 130, 246, 0.22) 1.5px, transparent 1.5px)',
                  backgroundSize: '100px 100px'
                }}
              >
                {/* Highlight cell */}
                <div 
                  className="absolute bg-blue-950/90 border-2 border-blue-400 rounded flex items-center justify-center shadow-lg shadow-blue-500/20"
                  style={{ left: '200px', top: '200px', width: '200px', height: '100px' }}
                >
                  <span className="text-blue-300 text-[20px] font-bold tracking-wider text-center leading-normal px-3">AI搜索引用信源</span>
                </div>
              </div>

              {/* ── Layer 3: Top (AI 最终推荐输出层 - 实色控制透明度，大格网格) ── */}
              <div 
                className="absolute inset-0 border-2 border-teal-400 rounded-2xl shadow-[0_25px_60px_rgba(20,184,166,0.22)]"
                style={{ 
                  transform: 'translateZ(260px)',
                  transformStyle: 'preserve-3d',
                  background: 'rgba(13, 148, 136, 0.6)',
                  backgroundImage: 'linear-gradient(to right, rgba(20, 184, 166, 0.3) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1.5px, transparent 1.5px)',
                  backgroundSize: '100px 100px'
                }}
              >
                {/* Highlight cell */}
                <div 
                  className="absolute bg-teal-950/90 border-2 border-teal-300 rounded flex items-center justify-center shadow-xl shadow-teal-500/30"
                  style={{ left: '100px', top: '100px', width: '200px', height: '100px' }}
                >
                  <span className="text-teal-300 text-[20px] font-bold tracking-wider text-center leading-normal px-3">核心推荐结果</span>
                </div>
              </div>

            </div>
          </div>

          {/* ==================== SVG Schematic Connecting Lines (Endpoints aligned exactly to bottom-right corners of internal text boxes) ==================== */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
            {/* Top Layer Connection (Teal - Starts exactly at bottom-right of Top Layer text box: x=285, y=185) */}
            <circle cx="285" cy="185" r="5" fill="#14B8A6" />
            <polyline points="285,185 900,123 995,123" fill="none" stroke="#14B8A6" strokeWidth="2.5" />
            <circle cx="995" cy="123" r="3.5" fill="#14B8A6" />

            {/* Middle Layer Connection (Blue - Starts exactly at bottom-right of Middle Layer text box: x=450, y=330) */}
            <circle cx="450" cy="330" r="5" fill="#3B82F6" />
            <polyline points="450,330 900,283 995,283" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
            <circle cx="995" cy="283" r="3.5" fill="#3B82F6" />

            {/* Bottom Layer Connection (Gray - Starts exactly at bottom-right of Bottom Layer text box: x=370, y=450) */}
            <circle cx="370" cy="450" r="5" fill="#A1A1AA" />
            <polyline points="370,450 900,443 995,443" fill="none" stroke="#A1A1AA" strokeWidth="2.5" />
            <circle cx="995" cy="443" r="3.5" fill="#A1A1AA" />
          </svg>

          {/* ==================== 2D Overlay: Right Side Callouts (Absolutely positioned starting at left-[1000px]) ==================== */}
          <div className="absolute left-[1000px] top-[40px] w-[200px] h-[480px] z-30 select-none pointer-events-none">
            
            {/* Callout 1 (Top Layer - Center y=123) */}
            <div className="absolute top-[105px] left-0">
              <span className="text-[28px] font-black text-teal-400 font-['MiSans'] block leading-none whitespace-nowrap">
                AI 最终推荐层
              </span>
            </div>

            {/* Callout 2 (Middle Layer - Center y=283) */}
            <div className="absolute top-[265px] left-0">
              <span className="text-[28px] font-black text-blue-400 font-['MiSans'] block leading-none whitespace-nowrap">
                前置搜索检索层
              </span>
            </div>

            {/* Callout 3 (Bottom Layer - Center y=443) */}
            <div className="absolute top-[425px] left-0">
              <span className="text-[28px] font-black text-zinc-300 font-['MiSans'] block leading-none whitespace-nowrap">
                影子算法模拟层
              </span>
            </div>

          </div>

        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthShadowAlgorithm.hideHeader = true;
