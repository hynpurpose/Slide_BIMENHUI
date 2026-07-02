import React from 'react';

export default function CoverSlide({ bgImage, brand, subtitle, date }) {
    const subtitleLines = subtitle ? subtitle.split('\n') : [];

    return (
        <div className="w-full h-full flex flex-col relative overflow-hidden bg-black">
            {/* Background image */}
            {bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}

            {/* Text overlay - positioned to match background image */}
            {/* Top-left: brand logo */}
            <div className="absolute z-10" style={{ top: '39px', left: '40px' }}>
                <img 
                    src="/logo.png" 
                    alt="Brand Logo" 
                    style={{ height: '28px', width: 'auto', display: 'block' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>

            {/* Center-left: GEO + 年度规划方案 */}
            <div className="absolute z-10" style={{ top: '430px', left: '65px' }}>
                {subtitleLines.map((line, i) => (
                    <h1
                        key={i}
                        className="text-white font-bold"
                        style={{
                            fontFamily: "'AlimamaShuHeiTi', sans-serif",
                            fontSize: '130px',
                            lineHeight: '1.2',
                            letterSpacing: '0em',
                            color: 'white',
                        }}
                    >
                        {line}
                    </h1>
                ))}
            </div>

            {/* Bottom-right: date */}
            {date && (
                <div className="absolute z-10" style={{ bottom: '29px', right: '69px' }}>
                    <span
                        className="text-white font-bold"
                        style={{ fontSize: '25px', letterSpacing: '0em' }}
                    >
                        {date}
                    </span>
                </div>
            )}
        </div>
    );
}
