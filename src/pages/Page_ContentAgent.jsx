import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ContentAgent() {
  return (
    <SlideLayout title="内容撰写Agent 运行架构">

      {/* 内嵌画布样式类，与 Content Agent New 项目的 style.css 1:1 对齐并在 PPT 维度等比例放大 */}
      <style>{`
        .ca-canvas-wrapper .flow-node {
          width: 315px;
          height: 155px;
          border-radius: 8px;
          padding: 14px 18px;
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .ca-canvas-wrapper .pending-node {
          border: 1px solid rgba(255, 255, 255, 0.25);
          background-color: rgba(255, 255, 255, 0.02);
        }
        .ca-canvas-wrapper .node-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .ca-canvas-wrapper .step-index {
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 12px;
          font-weight: 700;
          border-radius: 5px;
          padding: 2px 6px;
          flex-shrink: 0;
          color: #a8adb3;
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .ca-canvas-wrapper .node-title {
          font-size: 21px;
          font-weight: 700;
          color: #f2f4f5;
        }
        .ca-canvas-wrapper .human-tag {
          margin-left: auto;
          font-size: 12px;
          font-weight: 700;
          color: #a8adb3;
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 1px 7px;
          border-radius: 9px;
        }
        .ca-canvas-wrapper .node-body {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .ca-canvas-wrapper .detail-row {
          font-size: 16px;
          color: #a8adb3;
          line-height: 1.5;
        }
        .ca-canvas-wrapper .info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 4px;
        }
        .ca-canvas-wrapper .info-label {
          font-size: 14px;
          color: #6b7076;
        }
        .ca-canvas-wrapper .badge-gray {
          font-size: 13px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 10px;
          background-color: rgba(56, 111, 219, 0.16);
          color: #79b8ff;
          border: 1px solid rgba(88, 141, 235, 0.35);
        }
      `}</style>

      {/* ── 主画布面板 ── */}
      <div className="absolute left-0 top-[20px] w-full h-[740px] border border-white/[0.08] rounded-3xl bg-[#0b0c0e] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none ca-canvas-wrapper">

        {/* 画布背景网格 & SVG 连接线 */}
        <div className="w-full h-full relative rounded-2xl border border-white/[0.04] bg-[#0c0d10] overflow-hidden"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="rgba(255, 255, 255, 0.15)" />
              </marker>
            </defs>

            {/* 连接线使用实机灰白色细线 */}
            {/* Step 01 -> Step 02 */}
            <path d="M 355 318 C 375 318, 370 118, 390 118" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            {/* Step 01 -> Step 03 */}
            <path d="M 355 318 C 375 318, 370 518, 390 518" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            {/* Step 02 -> Step 04 */}
            <path d="M 705 118 C 725 118, 720 318, 740 318" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            {/* Step 03 -> Step 04 */}
            <path d="M 705 518 C 725 518, 720 318, 740 318" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            {/* Step 04 -> Step 05 */}
            <path d="M 1055 318 L 1090 318" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            {/* Step 05 -> Step 06 */}
            <path d="M 1405 318 L 1440 318" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

            {/* AEO 反馈闭环 */}
            <path d="M 1598 395 C 1520 460, 1320 460, 1248 395" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="4,4" fill="none" markerEnd="url(#arrow)" />
          </svg>

          {/* ==================== 智能体画布节点 ==================== */}

          {/* 01 载入品牌知识库 (Pending) */}
          <div className="flow-node pending-node" style={{ left: '40px', top: '240px' }}>
            <div className="node-header">
              <span className="step-index">01</span>
              <span className="node-title">载入品牌知识库</span>
            </div>
            <div className="node-body">
              <div className="detail-row">
                <span>引用品牌知识库 · 128 条</span>
              </div>
              <div className="info-row">
                <span className="info-label">输出</span>
                <span className="badge badge-gray">品牌知识库</span>
              </div>
            </div>
          </div>

          {/* 02 设定目标与内容风格 (Pending) */}
          <div className="flow-node pending-node" style={{ left: '390px', top: '40px' }}>
            <div className="node-header">
              <span className="step-index">02</span>
              <span className="node-title">设定目标用户与内容风格</span>
            </div>
            <div className="node-body">
              <div className="detail-row">
                <span>引用左侧用户画像 · 6 组</span>
              </div>
              <div className="info-row">
                <span className="info-label">输出</span>
                <span className="badge badge-gray">用户画像 · 风格规范</span>
              </div>
            </div>
          </div>

          {/* 03 总结高引用规律 (Pending) */}
          <div className="flow-node pending-node" style={{ left: '390px', top: '440px' }}>
            <div className="node-header">
              <span className="step-index">03</span>
              <span className="node-title">总结高引用内容规律</span>
            </div>
            <div className="node-body">
              <div className="detail-row">
                <span>检索 AI 引擎高引用页面</span>
              </div>
              <div className="info-row">
                <span className="info-label">输出</span>
                <span className="badge badge-gray">引用规律报告</span>
              </div>
            </div>
          </div>

          {/* 04 生成文章大纲 (Pending) */}
          <div className="flow-node pending-node" style={{ left: '740px', top: '240px' }}>
            <div className="node-header">
              <span className="step-index">04</span>
              <span className="node-title">生成文章大纲</span>
            </div>
            <div className="node-body">
              <div className="detail-row">
                <span>基于知识库与引用规律排布章节</span>
              </div>
              <div className="info-row">
                <span className="info-label">输出</span>
                <span className="badge badge-gray">内容大纲</span>
              </div>
            </div>
          </div>

          {/* 05 产出完整内容 (Pending) */}
          <div className="flow-node pending-node" style={{ left: '1090px', top: '240px' }}>
            <div className="node-header">
              <span className="step-index">05</span>
              <span className="node-title">产出完整内容</span>
            </div>
            <div className="node-body">
              <div className="detail-row">
                <span>按大纲撰写全文并植入品牌卖点</span>
              </div>
              <div className="info-row">
                <span className="info-label">输出</span>
                <span className="badge badge-gray">文章草稿</span>
              </div>
            </div>
          </div>

          {/* 06 人工校验 (Pending - Human Node) */}
          <div className="flow-node pending-node" style={{ left: '1440px', top: '240px' }}>
            <div className="node-header">
              <span className="step-index">06</span>
              <span className="node-title">人工校验</span>
              <span className="human-tag">人工</span>
            </div>
            <div className="node-body">
              <div className="detail-row">
                <span>预审后人工终审定稿</span>
              </div>
              <div className="info-row">
                <span className="info-label">输出</span>
                <span className="badge badge-gray">终审定稿</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

Page_ContentAgent.hideHeader = true;
