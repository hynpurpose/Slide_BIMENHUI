import React from 'react';

const FONT_IMPORT = `@import url('https://fonts.geekzu.org/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');`;

export default function Page_SkyworthThankYou() {
  const subtitle = "Thank You";
  const bgImage = "/proposal-cover/proposal-cover-new.png";
  const date = "July 2026";

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-black select-none">
      <style dangerouslySetInnerHTML={{ __html: FONT_IMPORT }} />
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

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

      {/* Center-left: Thank You */}
      <div className="absolute z-10" style={{ top: '430px', left: '65px' }}>
        <h1
          className="text-white font-black"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '130px',
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            color: 'white',
          }}
        >
          {subtitle}
        </h1>
      </div>

      {/* Bottom-right: date */}
      {date && (
        <div className="absolute z-10" style={{ bottom: '29px', right: '69px' }}>
          <span
            className="text-white font-bold"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '25px', 
              letterSpacing: '0.05em' 
            }}
          >
            {date}
          </span>
        </div>
      )}
    </div>
  );
}

Page_SkyworthThankYou.hideHeader = true;
