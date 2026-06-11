import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ClosedMeetingConversionDetail() {
  return (
    <SlideLayout
      title={
        <>
          GEO到底能不能帮客户带来<span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">销售转化</span>？
        </>
      }
      subtitle="国内互联网生态 VS 海外互联网生态"
    >
      {/* Ambient background glowing lights */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-red-950/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full h-full flex items-center justify-center gap-12 xl:gap-20 relative z-10 py-1">
        
        {/* Left Side: Domestic Isolated Apps (Tic-tac-toe Grid Separated - Scaled Up) */}
        <div className="flex flex-col justify-between items-center h-[670px] w-[510px] select-none">
          {/* Top slot for diagram (Centered) */}
          <div className="flex-grow flex items-center justify-center">
            <div className="w-[510px] h-[510px]">
              <svg width="510" height="510" viewBox="0 0 510 510" className="overflow-visible">
                {/* Tic-Tac-Toe Dashed Grid Lines */}
                <line x1="170" y1="0" x2="170" y2="510" stroke="#FE0000" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="340" y1="0" x2="340" y2="510" stroke="#FE0000" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="170" x2="510" y2="170" stroke="#FE0000" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="340" x2="510" y2="340" stroke="#FE0000" strokeWidth="1" strokeDasharray="5,5" />

                {/* Circles & Labels */}
                {/* Row 1 */}
                <g transform="translate(19, 19)">
                  <circle cx="66" cy="66" r="62" fill="#ffffff" />
                  <text x="66" y="74" textAnchor="middle" fontWeight="950" fontSize="26" fill="#18181b" fontFamily="sans-serif">私域</text>
                </g>
                <g transform="translate(189, 19)">
                  <circle cx="66" cy="66" r="62" fill="#ffffff" />
                  <text x="66" y="74" textAnchor="middle" fontWeight="950" fontSize="26" fill="#18181b" fontFamily="sans-serif">小红书</text>
                </g>
                <g transform="translate(359, 19)">
                  <circle cx="66" cy="66" r="62" fill="#ffffff" />
                  <text x="66" y="74" textAnchor="middle" fontWeight="950" fontSize="26" fill="#18181b" fontFamily="sans-serif">抖音</text>
                </g>

                {/* Row 2 */}
                <g transform="translate(19, 189)">
                  <circle cx="66" cy="66" r="62" fill="#ffffff" />
                  <text x="66" y="74" textAnchor="middle" fontWeight="950" fontSize="26" fill="#18181b" fontFamily="sans-serif">微信</text>
                </g>
                <g transform="translate(189, 189)">
                  <circle cx="66" cy="66" r="62" fill="#ffffff" />
                  <text x="66" textAnchor="middle" fontWeight="950" fontSize="23" fill="#18181b" fontFamily="sans-serif">
                    <tspan x="66" y="56">淘宝</tspan>
                    <tspan x="66" y="82">京东</tspan>
                  </text>
                </g>
                <g transform="translate(359, 189)">
                  <circle cx="66" cy="66" r="62" fill="#ffffff" />
                  <text x="66" textAnchor="middle" fontWeight="950" fontSize="23" fill="#18181b" fontFamily="sans-serif">
                    <tspan x="66" y="56">线下</tspan>
                    <tspan x="66" y="82">门店</tspan>
                  </text>
                </g>

                {/* Row 3 */}
                <g transform="translate(19, 359)">
                  <circle cx="66" cy="66" r="62" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
                  <text x="66" y="76" textAnchor="middle" fontWeight="900" fontSize="36" fill="#ffffff" fontFamily="sans-serif">...</text>
                </g>
                <g transform="translate(189, 359)">
                  <circle cx="66" cy="66" r="62" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
                  <text x="66" y="76" textAnchor="middle" fontWeight="900" fontSize="36" fill="#ffffff" fontFamily="sans-serif">...</text>
                </g>
                <g transform="translate(359, 359)">
                  <circle cx="66" cy="66" r="62" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
                  <text x="66" y="76" textAnchor="middle" fontWeight="900" fontSize="36" fill="#ffffff" fontFamily="sans-serif">...</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Label below grid */}
          <div className="text-center h-[90px] flex flex-col items-center justify-start pt-3 gap-1.5">
            <span className="text-[36px] xl:text-[42px] font-black text-[#FE0000] font-['MiSans'] tracking-wide leading-none">
              各App彼此隔绝
            </span>
            <span className="text-[28px] xl:text-[32px] font-bold text-[#FE0000]/80 font-['MiSans'] tracking-wide leading-none">
              （信息孤岛）
            </span>
          </div>
        </div>

        {/* Middle: Arrow indicator */}
        <div className="flex items-center justify-center h-[670px] select-none">
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-zinc-600">
            <path d="M 10 20 L 50 20 M 40 12 L 50 20 L 40 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Right Side: Google Ecosystem (Orbiting solar-system style - Scaled Up) */}
        <div className="flex flex-col justify-between items-center h-[670px] w-[600px] select-none">
          {/* Top slot for diagram (Centered) */}
          <div className="flex-grow flex items-center justify-center">
            <div className="w-[600px] h-[600px]">
              <svg width="600" height="600" viewBox="0 0 600 600" className="overflow-visible">
                {/* Outer Enclosing Circle: Blue Border */}
                <circle cx="300" cy="300" r="285" fill="rgba(0, 76, 229, 0.04)" stroke="#004CE5" strokeWidth="1" />

                {/* Concentric Orbit Track Lines */}
                <circle cx="300" cy="300" r="195" fill="none" stroke="rgba(0, 76, 229, 0.12)" strokeWidth="1.5" strokeDasharray="4,4" />
                <circle cx="300" cy="300" r="130" fill="none" stroke="rgba(0, 76, 229, 0.06)" strokeWidth="1.5" />
                <circle cx="300" cy="300" r="250" fill="none" stroke="rgba(0, 76, 229, 0.06)" strokeWidth="1.5" />

                {/* Radial Connecting Lines (drawn underneath the circles) */}
                <line x1="300" y1="300" x2="300" y2="105" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="438" y2="162" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="495" y2="300" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="438" y2="438" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="300" y2="495" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="162" y2="438" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="105" y2="300" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />
                <line x1="300" y1="300" x2="162" y2="162" stroke="rgba(0, 76, 229, 0.22)" strokeWidth="2.5" />

                {/* Center Node: Google Analytics */}
                <circle cx="300" cy="300" r="78" fill="#004CE5" stroke="#60a5fa" strokeWidth="2.5" />
                <text x="300" y="309" textAnchor="middle" fontWeight="950" fontSize="26" fill="#ffffff" fontFamily="sans-serif">谷歌分析</text>

                {/* Orbiting Nodes */}
                {/* Node 0: YouTube (Top) */}
                <g transform="translate(300, 105)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" y="8" textAnchor="middle" fontWeight="950" fontSize="21" fill="#18181b" fontFamily="sans-serif">YouTube</text>
                </g>

                {/* Node 1: Facebook Ads (Top Right) */}
                <g transform="translate(438, 162)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" textAnchor="middle" fontWeight="950" fontSize="18" fill="#18181b" fontFamily="sans-serif">
                    <tspan x="0" y="-8">facebook</tspan>
                    <tspan x="0" y="16">广告</tspan>
                  </text>
                </g>

                {/* Node 2: Google Ads (Right) */}
                <g transform="translate(495, 300)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" textAnchor="middle" fontWeight="950" fontSize="19" fill="#18181b" fontFamily="sans-serif">
                    <tspan x="0" y="-8">Google</tspan>
                    <tspan x="0" y="16">Ads</tspan>
                  </text>
                </g>

                {/* Node 3: Google Search (Bottom Right) */}
                <g transform="translate(438, 438)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" y="8" textAnchor="middle" fontWeight="950" fontSize="21" fill="#18181b" fontFamily="sans-serif">谷歌搜索</text>
                </g>

                {/* Node 4: Independent Site (Bottom) */}
                <g transform="translate(300, 495)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" y="8" textAnchor="middle" fontWeight="950" fontSize="21" fill="#18181b" fontFamily="sans-serif">独立站</text>
                </g>

                {/* Node 5: Amazon (Bottom Left) */}
                <g transform="translate(162, 438)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" y="8" textAnchor="middle" fontWeight="950" fontSize="21" fill="#18181b" fontFamily="sans-serif">Amazon</text>
                </g>

                {/* Node 6: Reddit (Left) */}
                <g transform="translate(105, 300)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" y="8" textAnchor="middle" fontWeight="950" fontSize="21" fill="#18181b" fontFamily="sans-serif">Reddit</text>
                </g>

                {/* Node 7: Email (Top Left) */}
                <g transform="translate(162, 162)">
                  <circle cx="0" cy="0" r="58" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="0" y="8" textAnchor="middle" fontWeight="950" fontSize="21" fill="#18181b" fontFamily="sans-serif">邮件</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Label below enclosing circle */}
          <div className="text-center h-[90px] flex flex-col items-center justify-start pt-3">
            <span className="text-[36px] xl:text-[42px] font-black text-[#004CE5] font-['MiSans'] tracking-wide leading-none">
              谷歌全链路打通
            </span>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_ClosedMeetingConversionDetail.hideHeader = true;
