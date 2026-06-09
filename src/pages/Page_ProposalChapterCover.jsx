import React from 'react';

export default function Page_ProposalChapterCover({
    bgImage,
    title,
    subtitle,
    coverTitle,
    coverSubtitle,
    coverLabel,
    brandLabel,
    chapterIndex = 0,
    chapters = [],
}) {
    const leftText = coverSubtitle || subtitle || "Why\nGEO\nMatters?";
    const leftTextLines = leftText.split('\n');

    const rightLabel = coverLabel || `— 为什么要做${title}?`;
    const rightTitle = coverTitle || title || "为什么我们团队\n在2024年\n全力押注 GEO";
    const rightTitleLines = rightTitle.split('\n');

    return (
        <div className="w-full h-full relative overflow-hidden bg-black text-white font-sans">
            
            {/* ── Background Image (Support) ── */}
            {bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}

            {/* ── Top-Left: Brand Label with preceding line ── */}
            <div 
                className="absolute flex items-center gap-4 z-20" 
                style={{ top: '80px', left: '80px' }}
            >
                <div className="w-12 h-[2px] bg-white/40" />
                <span
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '400',
                        fontSize: '20px',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        opacity: 0.85
                    }}
                >
                    {brandLabel || "GEOINDEXFUTURE // 2026"}
                </span>
            </div>

            {/* ── Left Side: Multi-line Subtitle ── */}
            <div 
                className="absolute z-10 flex flex-col justify-center"
                style={{ top: '50%', transform: 'translateY(-50%)', left: '80px' }}
            >
                <h3 
                    className="text-white font-bold tracking-wide text-[56px] leading-[1.2] text-left"
                    style={{ fontFamily: "'Montserrat', 'MiSans', sans-serif" }}
                >
                    {leftTextLines.map((line, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <br />}
                            {line}
                        </React.Fragment>
                    ))}
                </h3>
            </div>

            {/* ── Right Side: Giant Full-Height Blue Block ── */}
            <div 
                className="absolute bg-[#004CE5] rounded-l-[60px] shadow-[0_20px_60px_rgba(0,76,229,0.35)]"
                style={{
                    top: '0',
                    bottom: '0',
                    right: '0',
                    width: '1440px',
                }}
            >
                {/* Thin Vertical White Line running from top to bottom of the card */}
                <div className="absolute top-0 bottom-0 w-px bg-white/20" style={{ right: '120px' }} />

                {/* Arrow Icon in Top Right of the Main Area (left of vertical line) */}
                <div className="absolute" style={{ top: '130px', right: '160px' }}>
                    <svg className="w-28 h-28 text-white opacity-95" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
                    </svg>
                </div>

                {/* Subtitle sitting ABOVE the horizontal line */}
                <span 
                    className="absolute text-white text-[28px] font-medium tracking-widest text-right"
                    style={{ 
                        top: '310px', 
                        right: '150px', 
                        fontFamily: "'Montserrat', 'MiSans', sans-serif" 
                    }}
                >
                    {rightLabel}
                </span>

                {/* Horizontal Divider Line running from left card border all the way to the right screen edge */}
                <div 
                    className="absolute h-[2px] bg-white/20" 
                    style={{ 
                        top: '370px', 
                        left: '0', 
                        right: '0' 
                    }}
                />

                {/* Main Text (Right-Aligned in Bottom Area, left of vertical line) */}
                <div 
                    className="absolute" 
                    style={{ 
                        right: '150px', 
                        bottom: '180px', 
                        maxWidth: '850px' 
                    }}
                >
                    <h2 
                        className="text-white font-black leading-[1.25] tracking-wide text-[76px] text-right"
                        style={{ fontFamily: "'Montserrat', 'MiSans', sans-serif" }}
                    >
                        {rightTitleLines.map((line, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <br />}
                                {line}
                            </React.Fragment>
                        ))}
                    </h2>
                </div>

            </div>

        </div>
    );
}
