import React, { useState, useEffect } from 'react';

export default function SlideLayout({
  title,
  subtitle,
  children,
  brandLabel = "GEOINDEXFUTURE // 2026",
  className = "",
  contentClassName = "",
  showGuidesDefault = false
}) {
  const [showGuides, setShowGuides] = useState(showGuidesDefault);

  // Allow toggling guidelines by pressing 'g' or 'G' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'g' || e.key === 'G') {
        setShowGuides(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`w-full h-full relative overflow-hidden bg-black text-white font-sans ${className}`}>
      
      {/* ── 顶部右侧：品牌标识线 ── */}
      <div 
        className="absolute flex items-center gap-[16px] z-20 cursor-pointer select-none" 
        style={{ top: '24px', right: '40px' }}
        onDoubleClick={() => setShowGuides(!showGuides)}
        title="双击或按 'G' 键可以切换排版辅助参考线"
      >
        <div className="bg-white/20" style={{ width: '174px', height: '2px' }} />
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: '400',
            fontSize: '26px',
            lineHeight: '32px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: '#FFFFFF'
          }}
        >
          {brandLabel}
        </span>
      </div>

      {/* ── 顶部左侧：标题区域 (H1 / H2) ── */}
      <div 
        className="absolute z-20 flex flex-col justify-start"
        style={{ top: '100px', left: '40px', width: '1840px' }}
      >
        {title && (
          <h1 
            style={{
              fontFamily: "'AlimamaShuHeiTi', sans-serif",
              fontWeight: '700',
              fontSize: '48px',
              lineHeight: '58px',
              color: '#FFFFFF',
              letterSpacing: '0.02em'
            }}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <h2 
            className="mt-2"
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontWeight: '400',
              fontSize: '32px',
              lineHeight: '42px',
              color: '#A1A1AA', // zinc-400
              letterSpacing: '0.01em'
            }}
          >
            {subtitle}
          </h2>
        )}
      </div>

      {/* ── 核心内容排版安全区 ── */}
      <div 
        className={`absolute z-10 ${contentClassName}`}
        style={{ 
          top: '225px', 
          left: '40px', 
          width: '1840px', 
          height: '775px', // 避让底部字幕区：1080px - 225px (top) - 80px (bottom subtitle height) = 775px
        }}
      >
        {children}
      </div>

      {/* ── 底部字幕避让区占位说明 (仅在显示辅助线时可见) ── */}
      {showGuides && (
        <div 
          className="absolute z-25 flex items-center justify-center border-t border-dashed border-red-500/50 bg-red-950/10 pointer-events-none"
          style={{ 
            bottom: 0, 
            left: 0, 
            width: '1920px', 
            height: '80px' 
          }}
        >
          <span className="text-red-400/60 font-bold tracking-wider text-lg font-['MiSans']">
            [ 避让字幕区域，请勿排版任何文字内容 ]
          </span>
        </div>
      )}

      {/* ── 辅助参考线 (Guidelines Overlay) ── */}
      {showGuides && (
        <div className="absolute inset-0 z-30 pointer-events-none select-none">
          {/* Top Line (Line 1 in Figma) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ top: '80px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Top Guide (80px)</span>
          </div>

          {/* Middle Line (Line 3 in Figma) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ top: '225px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Content Top (225px)</span>
          </div>

          {/* Bottom Line (Line 2 in Figma) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ bottom: '80px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Content Bottom (1000px)</span>
          </div>

          {/* Left Margin Boundary Line */}
          <div className="absolute h-full border-l-2 border-dashed border-blue-500/40" style={{ left: '40px' }}>
            <span className="absolute top-4 left-2 text-[10px] text-blue-400/80 font-mono">Left Margin (40px)</span>
          </div>

          {/* Right Margin Boundary Line */}
          <div className="absolute h-full border-l-2 border-dashed border-blue-500/40" style={{ right: '40px' }}>
            <span className="absolute top-4 -left-28 text-[10px] text-blue-400/80 font-mono">Right Margin (1880px)</span>
          </div>

          {/* Center Vertical Axis (Line 5 in Figma) */}
          <div className="absolute h-full border-l border-dashed border-zinc-700/30" style={{ left: '50%' }}>
            <span className="absolute top-1/2 left-2 text-[10px] text-zinc-500/60 font-mono">X Center (960px)</span>
          </div>

          {/* Center Horizontal Axis */}
          <div className="absolute w-full border-t border-dashed border-zinc-700/30" style={{ top: '50%' }}>
            <span className="absolute left-1/2 -top-4 text-[10px] text-zinc-500/60 font-mono">Y Center (540px)</span>
          </div>
        </div>
      )}

    </div>
  );
}
