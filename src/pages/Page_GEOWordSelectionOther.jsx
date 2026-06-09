import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GEOWordSelectionOther() {
  return (
    <SlideLayout
      title="GEO 应该怎么选词条？"
      subtitle="市场上其他做法"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 2-Column Grid stretching to fill safe zone width and height, leaving 20px padding at top and bottom */}
      <div className="w-full h-full grid grid-cols-2 gap-8 relative z-10 py-[20px] select-none items-stretch">
        
        {/* ==================== CARD 1: AI 批量生成 (Blue Gradient Card) ==================== */}
        <div className="w-full h-full bg-zinc-950/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-fade-in">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950">
            <div className="flex items-center gap-4">
              {/* Double Arrow Circle Icon */}
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square"/>
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[22px] font-black text-white leading-tight">AI批量生成</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-8 bg-[#004CE5] relative overflow-hidden flex flex-col justify-center">

            {/* AI Generated mattress terms list - Clean 2-column list of 12 examples showing batch feeling */}
            <div className="relative z-10 grid grid-cols-2 gap-3.5 w-full">
              {[
                "乳胶床垫厚度推荐",
                "独立袋装弹簧优缺点",
                "护脊硬床垫选购要点",
                "椰棕床垫和乳胶哪个好",
                "记忆棉床垫发热解决办法",
                "双人床垫标准尺寸规格",
                "儿童防螨床垫怎么挑",
                "压缩卷包床垫好用吗",
                "环保棕榈床垫价格区间",
                "静音弹簧床垫品牌排行",
                "软硬两用床垫使用寿命",
                "智能电动床垫功能对比"
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 border border-white/10 px-6 py-4.5 rounded-[18px] text-white flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm min-h-[70px] transition-all hover:scale-[1.02]">
                  <span className="text-[19px] xl:text-[21px] font-black text-white leading-tight truncate">
                    <span className="text-white/45 font-black mr-2.5 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-6 border-t border-zinc-900 flex items-center justify-between bg-zinc-950">
            <div className="flex items-center gap-6 text-zinc-500">
              {/* Heart */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              {/* Comment */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-7.6-4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              {/* Share */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
            {/* Bookmark */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </div>
        </div>

        {/* ==================== CARD 2: Copy 百度、社媒热词 (White Background Card) ==================== */}
        <div className="w-full h-full bg-zinc-950/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-fade-in">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950">
            <div className="flex items-center gap-4">
              {/* Double Arrow Circle Icon */}
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square"/>
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[22px] font-black text-white leading-tight">复制百度、社媒热词</span>
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-8 bg-white relative overflow-hidden flex flex-col justify-center">
            {/* Search Autocomplete Mock UI - Floating Pill Search Bar Style */}
            <div className="relative z-10 w-full flex flex-col gap-3">
              
              {/* Search Input Bar (Pill Shape) */}
              <div className="w-full h-[64px] flex items-stretch border-[3px] border-[#004CE5] rounded-full overflow-hidden bg-white shadow-sm">
                <div className="pl-6 pr-2 text-zinc-400 flex items-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <input 
                  type="text" 
                  value="床垫" 
                  readOnly 
                  className="flex-grow text-[22px] font-black text-zinc-800 focus:outline-none bg-transparent py-0"
                />
                <button className="bg-[#004CE5] text-white px-9 text-[20px] font-black tracking-widest hover:bg-[#003cb8] transition-colors shrink-0 flex items-center justify-center h-full rounded-r-full -mr-[1px]">
                  搜索
                </button>
              </div>

              {/* Suggestions Dropdown Card (Floating below) */}
              <div className="border border-zinc-200 rounded-[20px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                {[
                  "床垫品牌排行榜前十名",
                  "床垫怎么选 实用攻略",
                  "乳胶床垫和弹簧床垫哪个好",
                  "椰棕床垫甲醛超标怎么处理",
                  "床垫太软了腰疼怎么补救"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-4 px-6 py-5 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors ${idx === 0 ? 'bg-zinc-50/70' : ''}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2.5" className="shrink-0"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span className="text-[20px] xl:text-[22px] font-black text-zinc-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Card Footer */}
          <div className="p-6 border-t border-zinc-900 flex items-center justify-between bg-zinc-950">
            <div className="flex items-center gap-6 text-zinc-500">
              {/* Heart */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              {/* Comment */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-7.6-4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              {/* Share */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
            {/* Bookmark */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_GEOWordSelectionOther.hideHeader = true;
