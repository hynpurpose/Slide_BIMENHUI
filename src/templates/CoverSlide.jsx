import React from 'react';

export default function CoverSlide({ bgImage, brand, subtitle, date, layout }) {
    const subtitleLines = subtitle ? subtitle.split('\n') : [];
    const isFullscreen = layout === 'fullscreen';

    return (
        <div 
            className="w-full h-full flex flex-col relative overflow-hidden" 
            style={{ backgroundColor: isFullscreen ? '#000000' : '#04020D' }}
        >
            
            {/* Top-left: brand logo */}
            <div className="absolute z-10" style={{ top: '40px', left: '80px' }}>
                <img 
                    src="/logo.png" 
                    alt="Brand Logo" 
                    style={{ height: '32px', width: 'auto', display: 'block' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>

            {/* Left: Title text (centered vertically) */}
            <div className="absolute z-10 flex flex-col justify-center" style={{ top: '0', bottom: '0', left: '80px', width: '850px' }}>
                {subtitleLines.map((line, i) => (
                    <h1
                        key={i}
                        className="text-white font-bold tracking-tight text-left"
                        style={{
                            fontFamily: "'AlimamaShuHeiTi', sans-serif",
                            fontSize: '120px',
                            lineHeight: '1.25',
                            letterSpacing: '0.02em',
                            color: 'white',
                        }}
                    >
                        {line}
                    </h1>
                ))}
            </div>

            {/* Background image / Illustration */}
            {bgImage && (
                isFullscreen ? (
                    // Fullscreen background layout for proposal cover (crescent moon style)
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                ) : (
                    // Card layout for global cover (particle sphere style)
                    <div 
                        className="absolute z-0 rounded-[32px] overflow-hidden"
                        style={{ 
                            top: '50%', 
                            right: '80px', 
                            width: '840px', 
                            height: '840px', 
                            transform: 'translateY(-50%)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <img 
                            src={bgImage} 
                            alt="Cover Illustration" 
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                )
            )}

            {/* Bottom-right: date */}
            {date && (
                <div className="absolute z-10" style={{ bottom: '40px', right: '80px' }}>
                    <span
                        className="text-white/60 font-bold"
                        style={{ fontSize: '24px', letterSpacing: '0.05em', fontFamily: "'MiSans', sans-serif" }}
                    >
                        {date}
                    </span>
                </div>
            )}
        </div>
    );
}
