import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthContentDirection() {
  const directions = [
    {
      num: '1',
      category: '排行榜类',
      desc: '2026年艺术电视、壁纸电视推荐榜单与性价比排名',
      accentColor: '#D46096', // Desaturated Pink/Rose
      zIndex: 'z-30', // Front-left
      width: 340,
      height: 350,
      left: '0px',
      top: '380px',
      textSize: 'text-[28px] font-black text-zinc-100',
      textPadding: 'pr-2'
    },
    {
      num: '2',
      category: '测评类',
      desc: '多款旗舰壁纸电视画质、音质与贴墙效果深度实测',
      accentColor: '#3CA0BA', // Desaturated Cyan/Steel Blue
      zIndex: 'z-10', // Back-left
      width: 300,
      height: 310,
      left: '224px',
      top: '20px',
      textSize: 'text-[24px] font-bold text-zinc-200',
      textPadding: 'pr-2'
    },
    {
      num: '3',
      category: '用户口碑类', // Or "用户口碑类（单品介绍）"
      desc: '真实业主分享创维壁纸电视的日常使用体验与真实口碑',
      accentColor: '#4CA389', // Desaturated Emerald/Sage Green
      zIndex: 'z-20', // Center-mid
      width: 340,
      height: 350,
      left: '470px',
      top: '220px',
      textSize: 'text-[28px] font-black text-zinc-100',
      textPadding: 'pr-2'
    },
    {
      num: '4',
      category: '场景教程类',
      desc: '大平层、极简客厅中艺术电视的安装布局与搭配指南',
      accentColor: '#DDA343', // Desaturated Amber/Sand Gold
      zIndex: 'z-15', // Back-right
      width: 300,
      height: 320,
      left: '750px',
      top: '10px',
      textSize: 'text-[24px] font-bold text-zinc-200',
      textPadding: 'pr-2'
    },
    {
      num: '5',
      category: 'FAQ类',
      desc: '关于厚度、散热、墙体安装等高频疑问的专业解答',
      accentColor: '#8B7BB8', // Desaturated Purple
      zIndex: 'z-30', // Front-right
      width: 340,
      height: 360,
      left: '980px',
      top: '340px',
      textSize: 'text-[28px] font-black text-zinc-100',
      textPadding: 'pr-2'
    }
  ];

  return (
    <SlideLayout title="创维内容方向规划">
      {/* ── 主排版区 (整体下移 60px: top 从 -145px 改为 -85px) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between overflow-visible"
        style={{ top: '-85px', height: '900px' }}
      >

        {/* ==================== 左侧页面说明列 (宽度 420px, 垂直居中) ==================== */}
        <div className="w-[420px] h-full flex flex-col justify-center pl-4 pr-6">
          <p className="text-[32px] text-white leading-snug font-['MiSans'] font-black">
            我们会根据前面反推出来的关键词 and 问题，把内容分成 5 类。
          </p>
          <p className="text-[26px] text-zinc-400 leading-relaxed font-['MiSans'] mt-8 border-l-2 border-zinc-800 pl-6">
            每一类问题，都会对应具体的文章方向。
          </p>
        </div>

        {/* ==================== 右侧超大层叠区块 (卡片整体再下移 60px: top 从 60px 改为 120px) ==================== */}
        <div className="w-[1350px] h-full relative overflow-visible" style={{ top: '120px' }}>

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
                  className="absolute left-0 top-0 rounded-[28px] bg-black border p-8 flex flex-col justify-between shadow-2xl z-20"
                  style={{
                    width: `${dir.width}px`,
                    height: `${dir.height}px`,
                    borderColor: dir.accentColor
                  }}
                >
                  {/* 卡片头部：方向与序号 (字号 24px) */}
                  <div className="pb-3 border-b border-zinc-900/80 flex items-baseline shrink-0">
                    <span className="text-[22px] font-bold text-zinc-400 font-['MiSans']">
                      方向
                    </span>
                    <span className="font-['Montserrat'] text-[40px] text-white font-black ml-3 leading-none">
                      {dir.num}
                    </span>
                  </div>

                  {/* 卡片中部：主要文稿与胶囊标签 (胶囊放在文稿上面，字号 20px) */}
                  <div className="flex-grow flex flex-col justify-center pt-4">
                    {/* 类别胶囊标签 */}
                    <div className="mb-3">
                      <span 
                        className="px-3.5 py-1 rounded-full text-[19px] font-black border font-['MiSans'] inline-block select-none"
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
