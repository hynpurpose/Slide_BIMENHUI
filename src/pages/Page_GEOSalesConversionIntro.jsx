import React from 'react';

export default function Page_GEOSalesConversionIntro() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#03020a] text-white font-sans relative px-24 py-16">
      {/* Background glowing gradients (ambient deep blue neon light) */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/15 blur-[180px] pointer-events-none animate-pulse duration-[10s]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-900/20 blur-[160px] pointer-events-none" />
      <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full grid grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Big elegant questioning text */}
        <div className="col-span-8 xl:col-span-8">
          <h1 className="text-[95px] xl:text-[115px] font-black leading-[1.2] tracking-tight text-white font-sans">
            GEO 到底能不能
            <br />
            带来 <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">销售转化</span>？
          </h1>
        </div>

        {/* Right Column: The giant glowing question mark "?" inspired by the reference image */}
        <div className="col-span-4 xl:col-span-4 relative flex justify-center items-center h-full">
          <div className="w-[380px] h-[480px] xl:w-[450px] xl:h-[550px] relative select-none">
            <svg viewBox="0 0 400 550" className="w-full h-full select-none pointer-events-none overflow-visible">
              <defs>
                {/* Radial gradient for the background glow behind the ? */}
                <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.65" />
                  <stop offset="60%" stopColor="#1e3a8a" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#03020a" stopOpacity="0" />
                </radialGradient>
                
                {/* Shadow filter for 3D depth mimicking the reference image */}
                <filter id="shadowFilter" x="-30%" y="-30%" width="170%" height="170%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
                  {/* Shadow cast towards bottom-left direction */}
                  <feOffset dx="-25" dy="35" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.95" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                {/* Neon outline glow */}
                <filter id="neonOutline" x="-35%" y="-35%" width="170%" height="170%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="15" result="blur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.9" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Neon back glow */}
              <circle cx="200" cy="250" r="200" fill="url(#neonGlow)" />

              {/* Layer 1: Bright Blue Neon Glow Behind */}
              <text
                x="215"
                y="415"
                fontFamily="Anton, Montserrat, sans-serif"
                fontSize="450"
                fontWeight="900"
                textAnchor="middle"
                fill="#93c5fd"
                opacity="0.95"
                filter="url(#neonOutline)"
              >
                ?
              </text>

              {/* Layer 2: Dark Foreground "Cutout" Body with Drop Shadow */}
              <text
                x="200"
                y="400"
                fontFamily="Anton, Montserrat, sans-serif"
                fontSize="450"
                fontWeight="900"
                textAnchor="middle"
                fill="#070a1a"
                filter="url(#shadowFilter)"
              >
                ?
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOSalesConversionIntro.hideHeader = true;
