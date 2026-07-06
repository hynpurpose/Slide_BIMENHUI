import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_TeamEndorsement() {
  const orgLogos = [
    { src: '/Back/endorsement-tp-1.png', label: '艾瑞咨询' },
    { src: '/Back/endorsement-tp-2.png', label: '尼尔森' },
    { src: '/Back/endorsement-tp-3.png', label: '易观分析' },
    { src: '/Back/endorsement-tp-4.png', label: '数说故事' },
    { src: '/Back/endorsement-tp-5.png', label: 'QuestMobile' },
    { src: '/Back/endorsement-tp-6.png', label: 'Kantar 凯度' },
    { src: '/Back/endorsement-inst-1.png', label: '中国广告协会' },
    { src: '/Back/endorsement-inst-2.png', label: '中国信通院' },
    { src: '/Back/endorsement-inst-3.png', label: 'CAA 中国高校联合' },
    { src: '/Back/endorsement-inst-4.png', label: '人工智能产业联盟' },
  ];

  // Helper component to render a logo slot with fallback placeholder styling
  const LogoSlot = ({ src, label, width = '300px', height = '110px' }) => {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        className="bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-zinc-300 transition-colors shadow-sm"
        style={{ width, height }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={label}
            className="max-w-[80%] max-h-[75%] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <span className="text-[18px] text-zinc-800 font-medium font-['MiSans'] tracking-wide">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <SlideLayout title="团队背书">
      {/* ── 标题下方的说明性文字 ── */}
      <div className="absolute top-[5px] left-0 w-full text-[36px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        给钱就能曝光的合作，<span className="text-white font-bold">我们不合作</span>。我们只跟<span className="text-white font-bold">真正独立、专业</span>的第三方专业机构合作。
      </div>

      <div
        className="absolute left-0 w-full flex items-center justify-between gap-8 animate-fadeIn"
        style={{ top: '80px', height: '620px' }}
      >
        {/* Left Column: 第三方专业机构 */}
        <div
          className="flex-1 flex flex-col border border-blue-500/80 rounded-2xl overflow-hidden bg-zinc-950/40 backdrop-blur-md"
          style={{ height: '620px' }}
        >
          {/* Header */}
          <div className="h-[80px] flex items-center px-8 border-b border-blue-500/80 bg-blue-950/30">
            <span
              className="text-white font-bold tracking-wide font-['AlimamaShuHeiTi']"
              style={{ fontSize: '36px' }}
            >
              第三方专业机构
            </span>
          </div>
          {/* Grid of Logos */}
          <div className="flex-1 flex items-center justify-center px-8 py-8">
            <div className="grid grid-cols-3 gap-6">
              {orgLogos.map((logo, idx) => (
                <LogoSlot key={idx} src={logo.src} label={logo.label} width="100%" height="110px" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 其他水榜 (What We Don't Do) */}
        <div
          className="w-[380px] shrink-0 flex flex-col border border-red-900/60 rounded-2xl overflow-hidden bg-red-950/5 backdrop-blur-md relative"
          style={{ height: '620px' }}
        >
          {/* Header */}
          <div className="h-[80px] flex items-center px-6 border-b border-red-900/60 bg-red-950/20">
            <span
              className="text-red-400 font-bold tracking-wide font-['AlimamaShuHeiTi']"
              style={{ fontSize: '32px' }}
            >
              其他水榜
            </span>
          </div>

          {/* Stance Content */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 relative overflow-hidden">
            {/* Massive background red 'X' */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none">
              <span className="font-sans font-bold text-[450px] leading-none text-red-500">✕</span>
            </div>

            {/* Center Big Box with Diagonal Cross and Stamp */}
            <div className="z-10 flex flex-col items-center justify-center relative py-12 px-6 bg-red-950/10 border border-red-900/30 rounded-xl w-full">
              {/* Crossed out item */}
              <span className="text-zinc-400 line-through decoration-red-500 decoration-2 text-[22px] font-medium font-['MiSans'] mb-6 text-center">
                给钱就能曝光的合作
              </span>

              {/* Stamp of rejection */}
              <div className="border-2 border-red-500 text-red-500 font-bold font-['AlimamaShuHeiTi'] text-[32px] px-6 py-2 rounded-lg rotate-[-8deg] uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                我们不合作
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
