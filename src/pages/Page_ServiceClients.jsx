import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ServiceClients() {
  const clientGroups = [
    {
      category: '家居家电',
      logos: [
        { src: '/images/client-home-mus.png', label: '慕思' },
        { src: '/images/client-home-fotile.png', label: '方太厨具' },
        { src: '/images/client-home-daikin.png', label: '大金空调' },
        { src: '/images/client-home-macio.png', label: '玛格全屋定制' }
      ]
    },
    {
      category: '快消/零售',
      logos: [
        { src: '/images/client-fmcg-gujing.png', label: '古井贡酒' },
        { src: '/images/client-fmcg-jingjiu.png', label: '中国劲酒' },
        { src: '/images/client-fmcg-oppo.png', label: 'OPPO' },
        { src: '/images/client-fmcg-royalcanin.png', label: '皇家宠物' }
      ]
    },
    {
      category: '大健康',
      logos: [
        { src: '/images/client-health-diqiao.png', label: '迪巧钙' },
        { src: '/images/client-health-ufh.png', label: '和睦家医疗' },
        { src: '/images/client-health-jinxin.png', label: '锦欣国际' },
        { src: '/images/client-health-crystalpharm.png', label: '晶云药物' }
      ]
    },
    {
      category: '金融行业',
      logos: [
        { src: '/images/client-finance-pingan.png', label: '平安保险' },
        { src: '/images/client-finance-fadada.png', label: '法大大' },
        { src: '/images/client-finance-kingdee.png', label: '金蝶' }
      ]
    },
    {
      category: '互联网',
      logos: [
        { src: '/images/client-tech-cainiao.png', label: '菜鸟' },
        { src: '/images/client-tech-yunji.png', label: '云济科技' },
        { src: '/images/client-tech-meten.png', label: '美联英语' }
      ]
    }
  ];

  const partnerLogos = [
    { src: '/images/partner-logo-1.png', label: '合作方 1' },
    { src: '/images/partner-logo-2.png', label: '合作方 2' }
  ];

  // Helper component to render a logo slot with fallback placeholder styling
  const LogoSlot = ({ src, label, width = '150px', height = '64px', unifyColor = false }) => {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        className="bg-zinc-100 border border-zinc-200/80 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-zinc-300 transition-colors"
        style={{ width, height }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={label}
            className={`max-w-[80%] max-h-[75%] object-contain transition-all duration-300 ${unifyColor ? 'brightness-0 invert opacity-60 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
              }`}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-[14px] text-zinc-650 font-mono font-bold tracking-wide">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <SlideLayout title="服务客户">
      <div className="w-full h-full flex items-center justify-between animate-fadeIn">
        {/* Left Side: Client and Partner Blocks */}
        <div className="flex-1 flex flex-col gap-8 pr-12 justify-center h-full">

          {/* Top Block: Head Clients (5 Groups, 4 slots per group, narrower width) */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-white font-extrabold tracking-wide font-['AlimamaShuHeiTi'] border-b border-zinc-800/85 pb-2"
              style={{ fontSize: '36px', lineHeight: '46px' }}
            >
              头部客户
            </h3>
            <div className="flex items-center gap-6 relative">
              <div className="flex flex-col gap-3">
                {clientGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="flex items-center gap-6">
                    {/* Category Label */}
                    <span
                      className="text-zinc-400 font-medium font-['MiSans']"
                      style={{ fontSize: '24px', width: '120px' }}
                    >
                      {group.category}
                    </span>
                    {/* Four Logos (each scaled down to 140px width, 70px height to fit row nicely) */}
                    <div className="flex items-center gap-3">
                      {group.logos.map((logo, logoIdx) => (
                        <LogoSlot
                          key={logoIdx}
                          src={logo.src}
                          label={logo.label}
                          width="140px"
                          height="70px"
                          unifyColor={false}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Large Sharp Folded Brace (SVG) and Label */}
              <div className="flex items-center gap-4 shrink-0 self-stretch py-1">
                {/* SVG Right Sharp Folded Bracket */}
                <svg width="24" height="450" viewBox="0 0 24 450" fill="none" className="text-blue-500/60 h-full">
                  <path
                    d="M 2 2 L 12 2 L 12 215 L 22 225 L 12 235 L 12 448 L 2 448"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fill="none"
                  />
                </svg>
                  {/* Vertical Label */}
                  <div
                    className="text-white font-extrabold font-['MiSans'] tracking-wide flex flex-col items-center justify-center gap-1.5"
                    style={{ fontSize: '26px', width: '40px' }}
                  >
                    {"仅做过GEO项目的业务".split("").map((char, index) => (
                      <span key={index} className="leading-none">{char}</span>
                    ))}
                  </div>
              </div>
            </div>
          </div>

          {/* Bottom Block: Partners */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-white font-extrabold tracking-wide font-['AlimamaShuHeiTi'] border-b border-zinc-800/85 pb-2"
              style={{ fontSize: '36px', lineHeight: '46px' }}
            >
              合作方
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {partnerLogos.map((logo, i) => (
                <LogoSlot
                  key={i}
                  src={logo.src}
                  label={logo.label}
                  width="180px"
                  height="76px"
                  unifyColor={false}
                />
              ))}
              {/* Text Card */}
              <div
                className="border border-dashed border-zinc-300 rounded-xl flex items-center justify-center bg-zinc-100 px-6"
                style={{ width: '320px', height: '76px' }}
              >
                <span className="text-[20px] text-black font-bold font-['MiSans'] whitespace-nowrap">
                  广告公司、咨询公司等......
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Framed Title & Image Container with Blue Border */}
        <div
          className="absolute flex flex-col border border-blue-500/80 rounded-2xl overflow-hidden bg-zinc-950"
          style={{ top: '-80px', right: '0', width: '795px', height: '875px' }}
        >
          {/* Header with Title (Centered) */}
          <div className="h-[80px] flex items-center justify-center border-b border-blue-500/80 bg-blue-950/30">
            <span
              className="text-white font-bold tracking-wide font-['AlimamaShuHeiTi']"
              style={{ fontSize: '40px' }}
            >
              两个百万客户
            </span>
          </div>

          {/* Image Area */}
          <div className="flex-1 overflow-hidden flex items-center justify-center">
            <img
              src="/images/service_clients.png"
              alt="Service Clients"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Footer with Note */}
          <div className="h-[50px] flex items-center px-6 border-t border-blue-500/80 bg-blue-950/20">
            <span className="text-blue-400 font-bold font-['MiSans'] text-[18px] leading-snug">
              据不完全统计，近半年来预算到百万的真实GEO项目，不超过5个。
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable header navigation bar
Page_ServiceClients.hideHeader = true;
