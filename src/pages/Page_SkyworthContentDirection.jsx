import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthContentDirection() {
  const directions = [
    {
      num: '1',
      category: '问题解答类',
      desc: '用户在选壁纸电视、艺术电视时，最关心哪些问题',
      accentColor: '#D46096', // Desaturated Pink/Rose
      zIndex: 'z-30', // Bottom cards sit in front
      width: 440,  // Enlarged
      height: 500, // Enlarged
      left: '0px',
      top: '420px',
      textSize: 'text-[32px] font-black text-zinc-100',
      textPadding: 'pr-4'
    },
    {
      num: '2',
      category: '人群匹配类', // Suggested category name for suits which group of people
      desc: '创维这几款产品分别适合什么人',
      accentColor: '#3CA0BA', // Desaturated Cyan/Steel Blue
      zIndex: 'z-20',
      width: 360,
      height: 390,
      left: '310px',
      top: '10px',
      textSize: 'text-[26px] font-extrabold text-zinc-200',
      textPadding: 'pr-4'
    },
    {
      num: '3',
      category: '评测对比类',
      desc: '创维和竞品相比，优势和短板分别是什么',
      accentColor: '#4CA389', // Desaturated Emerald/Sage Green
      zIndex: 'z-20',
      width: 400,
      height: 440,
      left: '620px',
      top: '140px',
      textSize: 'text-[28px] font-bold text-zinc-200',
      textPadding: 'pr-20' // Avoid overlap with Card 4
    },
    {
      num: '4',
      category: '选购指南类',
      desc: '不同预算、不同客厅场景下，应该怎么选',
      accentColor: '#DDA343', // Desaturated Amber/Sand Gold
      zIndex: 'z-30',
      width: 420,
      height: 470,
      left: '950px',
      top: '360px',
      textSize: 'text-[30px] font-bold text-zinc-200',
      textPadding: 'pr-4'
    }
  ];

  return (
    <SlideLayout title="创维内容方向规划">
      {/* ── 主排版区 (高度拉伸至 900px，顶部抵到 top guide line) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between overflow-visible"
        style={{ top: '-145px', height: '900px' }}
      >

        {/* ==================== 左侧页面说明列 (宽度 420px, 垂直居中) ==================== */}
        <div className="w-[420px] h-full flex flex-col justify-center pl-4 pr-6">
          <p className="text-[32px] text-white leading-snug font-['MiSans'] font-black">
            我们会根据前面反推出来的关键词和问题，把内容分成 4 类。
          </p>
          <p className="text-[26px] text-zinc-400 leading-relaxed font-['MiSans'] mt-8 border-l-2 border-zinc-800 pl-6">
            每一类问题，都会对应具体的文章方向。
          </p>
        </div>

        {/* ==================== 右侧超大层叠区块 (宽度 1350px，完全错落且大小不一，拟物感更强) ==================== */}
        <div className="w-[1350px] h-full relative overflow-visible">

          {directions.map((dir, i) => {
            const outerWidth = dir.width + 16;
            const outerHeight = dir.height + 16;

            return (
              <div
                key={i}
                className={`absolute ${dir.zIndex}`}
                style={{
                  left: dir.left,
                  top: dir.top,
                  width: `${outerWidth}px`,
                  height: `${outerHeight}px`
                }}
              >
                {/* Layer 3: 最底层纸片 */}
                <div
                  className="absolute left-[16px] top-[16px] rounded-[28px] bg-[#09090C] border z-0"
                  style={{
                    width: `${dir.width}px`,
                    height: `${dir.height}px`,
                    borderColor: `${dir.accentColor}1A`
                  }}
                />

                {/* Layer 2: 中间层纸片 */}
                <div
                  className="absolute left-[8px] top-[8px] rounded-[28px] bg-[#0E0E12] border z-10"
                  style={{
                    width: `${dir.width}px`,
                    height: `${dir.height}px`,
                    borderColor: `${dir.accentColor}33`
                  }}
                />

                {/* Layer 1: 最上层卡片 */}
                <div
                  className="absolute left-0 top-0 rounded-[28px] bg-black border p-10 flex flex-col justify-between shadow-2xl z-20"
                  style={{
                    width: `${dir.width}px`,
                    height: `${dir.height}px`,
                    borderColor: dir.accentColor
                  }}
                >
                  {/* 卡片头部：方向与序号 (字号加大) */}
                  <div className="pb-4 border-b border-zinc-900/80 flex items-baseline shrink-0">
                    <span className="text-[26px] font-bold text-zinc-400 font-['MiSans']">
                      方向
                    </span>
                    <span className="font-['Montserrat'] text-[48px] text-white font-black ml-3 leading-none">
                      {dir.num}
                    </span>
                  </div>

                  {/* 卡片中部：主要文稿与胶囊标签 (胶囊放在文稿上面，字号 22px) */}
                  <div className="flex-grow flex flex-col justify-center pt-6">
                    {/* 类别胶囊标签 */}
                    <div className="mb-4">
                      <span 
                        className="px-4 py-1.5 rounded-full text-[22px] font-black border font-['MiSans'] inline-block select-none"
                        style={{ 
                          color: dir.accentColor,
                          borderColor: `${dir.accentColor}40`,
                          backgroundColor: `${dir.accentColor}0D`
                        }}
                      >
                        {dir.category}
                      </span>
                    </div>
                    {/* 文稿内容 */}
                    <p className={`leading-relaxed font-sans ${dir.textSize} ${dir.textPadding}`}>
                      {dir.desc}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthContentDirection.hideHeader = true;
