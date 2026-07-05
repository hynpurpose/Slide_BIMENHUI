import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthContentDirection() {
  // 5 类内容方向 + 数据统计权重占比（示例值，可后续替换为真实统计）
  const directions = [
    {
      num: '1',
      category: '排行榜类',
      desc: '2026年艺术电视、壁纸电视推荐榜单与性价比排名',
      accentColor: '#D46096', // Pink/Rose
      weight: 35
    },
    {
      num: '2',
      category: '测评类',
      desc: '多款旗舰壁纸电视画质、音质与贴墙效果深度实测',
      accentColor: '#3CA0BA', // Cyan/Steel Blue
      weight: 22
    },
    {
      num: '3',
      category: '用户口碑类',
      desc: '真实业主分享创维壁纸电视的日常使用体验与真实口碑',
      accentColor: '#4CA389', // Emerald/Sage Green
      weight: 18
    },
    {
      num: '4',
      category: '场景教程类',
      desc: '大平层、极简客厅中艺术电视的安装布局与搭配指南',
      accentColor: '#DDA343', // Amber/Sand Gold
      weight: 15
    },
    {
      num: '5',
      category: 'FAQ类',
      desc: '关于厚度、散热、墙体安装等高频疑问的专业解答',
      accentColor: '#8B7BB8', // Purple
      weight: 10
    }
  ];

  const topCategory = directions[0]; // 排行榜类：权重最高
  const totalArticles = '3,000+';

  return (
    <SlideLayout title="创维内容方向规划">
      {/* ── 主排版区：左中右三栏，整齐排布，落在 795px 安全区内 ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex justify-between items-stretch"
        style={{ top: '0px', height: '795px' }}
      >

        {/* ==================== 左栏：内容结构 · 权重占比统计 (480px) ==================== */}
        <div className="w-[480px] h-full bg-zinc-950/40 border border-zinc-900 rounded-[28px] p-8 flex flex-col shadow-md">
          {/* 标题 */}
          <div className="shrink-0">
            <p className="text-[16px] font-black tracking-[0.2em] text-zinc-500 font-['Montserrat'] uppercase">
              Content Structure
            </p>
            <h3 className="text-[30px] font-black text-white font-['MiSans'] leading-tight mt-1">
              内容结构 · 权重占比
            </h3>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-[44px] font-black text-white font-['Montserrat'] leading-none">
                {totalArticles}
              </span>
              <span className="text-[18px] font-medium text-zinc-400 font-['MiSans']">
                篇文章
              </span>
            </div>
            <p className="text-[15px] text-zinc-500 font-['MiSans'] leading-relaxed mt-2">
              按内容需求反推分配，每类占比即我们安排内容的比例
            </p>
          </div>

          {/* 竖向 100% 堆叠占比条 */}
          <div className="flex-grow flex gap-4 mt-6 min-h-0">
            {/* 堆叠色条 */}
            <div className="w-[64px] shrink-0 h-full flex flex-col rounded-2xl overflow-hidden border border-zinc-800">
              {directions.map((dir, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-center"
                  style={{
                    flexGrow: dir.weight,
                    backgroundColor: dir.accentColor,
                    borderBottom: i < directions.length - 1 ? '2px solid #000' : 'none'
                  }}
                >
                  <span className="text-[15px] font-black text-black/80 font-['Montserrat']">
                    {dir.weight}%
                  </span>
                </div>
              ))}
            </div>

            {/* 图例（与色条各段一一对应） */}
            <div className="flex-grow h-full flex flex-col">
              {directions.map((dir, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{ flexGrow: dir.weight }}
                >
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: dir.accentColor }}
                  />
                  <span className="text-[19px] font-bold text-zinc-200 font-['MiSans'] leading-none">
                    {dir.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== 中栏：5 类内容方向整齐清单 (880px) ==================== */}
        <div className="w-[880px] h-full flex flex-col justify-between">
          {directions.map((dir, i) => (
            <div
              key={i}
              className="w-full flex items-center gap-6 bg-black border rounded-[24px] px-7 shadow-lg"
              style={{
                height: '146px',
                borderColor: `${dir.accentColor}59`
              }}
            >
              {/* 左侧色块序号 */}
              <div
                className="shrink-0 w-[68px] h-[68px] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${dir.accentColor}1A`, border: `1px solid ${dir.accentColor}` }}
              >
                <span
                  className="font-['Montserrat'] text-[38px] font-black leading-none"
                  style={{ color: dir.accentColor }}
                >
                  {dir.num}
                </span>
              </div>

              {/* 类别 + 描述 */}
              <div className="flex-grow flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-[27px] font-black text-white font-['MiSans'] leading-tight">
                    {dir.category}
                  </span>
                  <span
                    className="text-[15px] font-bold font-['MiSans'] rounded-full px-2.5 py-[1px] whitespace-nowrap"
                    style={{
                      color: dir.accentColor,
                      borderColor: `${dir.accentColor}40`,
                      backgroundColor: `${dir.accentColor}0D`,
                      border: `1px solid ${dir.accentColor}40`
                    }}
                  >
                    占比 {dir.weight}%
                  </span>
                </div>
                <p className="text-[18px] font-medium text-zinc-400 font-['MiSans'] leading-snug mt-1.5">
                  {dir.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== 右栏：排行榜权重 (380px) ==================== */}
        <div
          className="w-[380px] h-full rounded-[28px] p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          style={{
            border: `1px solid ${topCategory.accentColor}`,
            background: `linear-gradient(160deg, ${topCategory.accentColor}1F 0%, #09090C 55%)`
          }}
        >
          {/* 背景光斑 */}
          <div
            className="absolute w-[260px] h-[260px] rounded-full blur-[110px] -right-10 -top-10 pointer-events-none"
            style={{ backgroundColor: `${topCategory.accentColor}33` }}
          />

          {/* 头部标题 */}
          <div className="shrink-0 relative z-10">
            <p className="text-[16px] font-black tracking-[0.2em] font-['Montserrat'] uppercase" style={{ color: topCategory.accentColor }}>
              Top Weight
            </p>
            <h3 className="text-[34px] font-black text-white font-['MiSans'] leading-tight mt-1">
              排行榜权重
            </h3>
          </div>

          {/* 中部大号数字 */}
          <div className="relative z-10 flex flex-col items-start">
            <span
              className="text-[15px] font-bold font-['MiSans'] rounded-full px-3 py-[3px] mb-3"
              style={{
                color: topCategory.accentColor,
                border: `1px solid ${topCategory.accentColor}66`,
                backgroundColor: `${topCategory.accentColor}14`
              }}
            >
              权重最高 · No.1
            </span>
            <div className="flex items-end gap-2">
              <span
                className="font-['Montserrat'] font-black leading-none"
                style={{ fontSize: '108px', color: topCategory.accentColor }}
              >
                35
              </span>
              <span className="text-[40px] font-black text-white font-['Montserrat'] leading-none pb-3">
                %
              </span>
            </div>
            <span className="text-[26px] font-black text-white font-['MiSans'] mt-2">
              {topCategory.category}
            </span>
          </div>

          {/* 底部说明 */}
          <div className="relative z-10 shrink-0 border-t border-white/10 pt-5">
            <p className="text-[19px] font-medium text-zinc-300 font-['MiSans'] leading-relaxed">
              榜单类内容占比最重，是 <span className="text-white font-bold">AI 引用</span> 与 <span className="text-white font-bold">用户决策</span> 的核心入口。
            </p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthContentDirection.hideHeader = true;
