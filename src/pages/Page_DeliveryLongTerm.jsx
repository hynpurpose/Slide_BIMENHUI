import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_DeliveryLongTerm() {
  const allocations = [
    {
      num: '50',
      percentage: '50%',
      gradient: 'from-[#004CE5] to-[#1E50DE]', // High Saturation Brand Blue
      shadow: '0 0 15px rgba(0, 76, 229, 0.8)',
      title: '投放高权重网站',
      subtag: '锁定主流抓取平台，拦截权重流量',
      textColor: 'text-[#004CE5]',
      borderHover: 'border-[#004CE5]/30',
      leadIn: '确立基本盘。',
      body: '重点投放至网易、今日头条等 AI 高频引用采信的主流官方网站。'
    },
    {
      num: '30',
      percentage: '30%',
      gradient: 'from-[#2A6FF7] to-[#3B82F6]', // Medium Saturation Bright Blue
      shadow: '0 0 15px rgba(42, 111, 247, 0.7)',
      title: '投放高权重垂直媒体',
      subtag: '深耕行业垂类阵地，融入自然语境',
      textColor: 'text-[#2A6FF7]',
      borderHover: 'border-[#2A6FF7]/30',
      leadIn: '渗透精准受众。',
      body: '投向小众但酒类/科技等专注度极高的垂直媒体。流量虽小但行业信任度高，极易通过 AI 事实核验。'
    },
    {
      num: '20',
      percentage: '20%',
      gradient: 'from-[#60A5FA] to-[#93C5FD]', // Low Saturation (Vibrant Sky Blue)
      shadow: '0 0 12px rgba(96, 165, 250, 0.5)',
      title: '新的媒体尝试',
      subtag: '探索新媒体渠道，自建独家信源',
      textColor: 'text-[#60A5FA]',
      borderHover: 'border-[#60A5FA]/30',
      leadIn: '探索未来增量。',
      body: '布局新涌现的采信载体、小众独立网站或自建独家内容阵地。'
    }
  ];

  return (
    <SlideLayout title="长期投放">
      {/* ── 背景点状矩阵 (致敬 Page_DeliveryStrategy_Combo) ── */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* ── 主排版区 (高度拉伸至 750px，顶端起于 content top 下方 40px) ── */}
      <div 
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-start z-10 pl-0"
        style={{ top: '40px', height: '750px' }}
      >
        
        {/* ==================== 上半部分：金句大总结 (文字更改为白色，字号大) ==================== */}
        <div className="w-full flex flex-col items-start mb-10 shrink-0">
          <p className="text-[30px] text-white font-extrabold tracking-wide max-w-[1700px] leading-relaxed">
            长期来看，除了投主流高权重媒体，还要找一些垂直、小众、但内容真实、行业相关性强的媒体，甚至自建这类内容阵地。
          </p>
        </div>

        {/* ==================== 下半部分：百分比分配矩阵 (数字提升至 156px，内容字号提升至 28px) ==================== */}
        <div className="flex-1 w-full flex items-start pt-6">
          <div className="grid grid-cols-3 gap-16 w-full">
            
            {allocations.map((item, idx) => (
              <div key={idx} className="flex flex-col group relative">
                
                {/* 顶部发光进度条 (长度精确匹配 50%、30%、20% 比例，使用饱和度递减的蓝色渐变) */}
                <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                  <div 
                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                    style={{ 
                      width: item.percentage, 
                      boxShadow: item.shadow 
                    }} 
                  />
                </div>

                {/* 数字标识与百分比符号 (Montserrat 字体，提升至 156px) */}
                <div className="flex items-baseline mb-6">
                  <span className="text-[156px] leading-none font-black tracking-tighter text-white font-['Montserrat'] opacity-95">
                    {item.num}
                  </span>
                  <span className="text-[48px] font-black text-zinc-500 ml-3 mb-6 font-['Montserrat']">%</span>
                </div>

                {/* 标题 & 分割线 */}
                <h3 className={`text-[32px] font-black text-white mb-4 pt-6 border-t border-white/10 ${item.borderHover} transition-colors leading-snug font-['MiSans']`}>
                  {item.title}
                </h3>

                {/* 副说明 */}
                <p className={`text-[24px] font-bold mb-6 tracking-wide ${item.textColor} font-sans`}>
                  {item.subtag}
                </p>

                {/* 正文说明 (字号增大至 28px，精简正文) */}
                <p className="text-[28px] text-zinc-400 leading-relaxed font-normal text-justify">
                  <strong className="text-zinc-200 font-bold tracking-wide">{item.leadIn}</strong>
                  {item.body}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryLongTerm.hideHeader = true;
