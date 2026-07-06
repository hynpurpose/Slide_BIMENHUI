import React, { useState } from 'react';
import { Image as ImageIcon, Search } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const SEARCH_QUERY = '推荐几款好看的电视';

const BAIDU_KEYWORD_ROWS = [
  { keyword: '电视机哪个品牌好', volume: 273245, competition: '高' },
  { keyword: '现在电视机哪个品牌比较好', volume: 231505, competition: '高' },
  { keyword: '电视机哪个品牌最好', volume: 193584, competition: '高' },
  { keyword: '电视机什么牌子的好', volume: 147174, competition: '高' },
  { keyword: '100寸电视机哪个品牌好', volume: 138719, competition: '高' },
  { keyword: '电视机品牌排行榜', volume: 133664, competition: '高' },
  { keyword: '电视机品牌质量排行榜前十名', volume: 131433, competition: '高' },
  { keyword: '电视机什么牌子的好性价比高', volume: 103145, competition: '高' },
  { keyword: '电视机什么牌子质量第一最好的', volume: 86037, competition: '高' },
  { keyword: '85寸电视机哪个品牌好', volume: 79047, competition: '高' },
  { keyword: '75寸电视机哪个品牌好', volume: 74976, competition: '高' },
  { keyword: '电视机什么牌子的好', volume: 48573, competition: '中' },
  { keyword: '电视机推荐', volume: 44763, competition: '高' },
  { keyword: '电视机哪个牌子质量好', volume: 43159, competition: '高' },
];

function CompetitionBadge({ level }) {
  const isHigh = level === '高';
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded text-[13px] font-medium leading-none ${
        isHigh ? 'text-[#E64545] bg-[#FFF1F0]' : 'text-[#FA8C16] bg-[#FFF7E6]'
      }`}
    >
      {level}
    </span>
  );
}

function BaiduMarketingKeywordTable() {
  return (
    <div className="w-full h-full flex flex-col bg-[#f5f6f8] text-[#333] overflow-hidden select-none">
      {/* 顶部导航 */}
      <div className="shrink-0 h-[52px] bg-white border-b border-[#e8e8e8] flex items-center px-5 gap-6">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[#2932E1] font-black text-[18px]">百度</span>
          <span className="text-[#333] font-bold text-[16px]">营销</span>
        </div>
        <div className="flex items-center gap-5 text-[14px] text-[#666]">
          {['概览', '管理', '数据', '诊断', '资产', '工具'].map((tab, i) => (
            <span key={tab} className={i === 2 ? 'text-[#3385FF] font-medium' : ''}>{tab}</span>
          ))}
        </div>
      </div>

      {/* 关键词表格：仅三列 */}
      <div className="flex-1 min-h-0 bg-white overflow-hidden flex flex-col">
        <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#fafafa] border-b border-[#e8e8e8] text-[#666]">
                <th className="text-left font-medium px-5 py-3.5 w-[46%]">关键词</th>
                <th className="text-right font-medium px-4 py-3.5 w-[27%]">
                  <span className="inline-flex items-center gap-1 justify-end">
                    月均搜索量
                    <span className="text-[#999] text-[12px]">↕</span>
                  </span>
                </th>
                <th className="text-left font-medium px-5 py-3.5 w-[27%]">竞争激烈程度</th>
              </tr>
            </thead>
            <tbody>
              {BAIDU_KEYWORD_ROWS.map((row) => (
                <tr key={`${row.keyword}-${row.volume}`} className="border-b border-[#f0f0f0] hover:bg-[#fafafa]">
                  <td className="px-5 py-3 text-[#333] font-['MiSans']">{row.keyword}</td>
                  <td className="px-4 py-3 text-right text-[#333] tabular-nums">{row.volume.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <CompetitionBadge level={row.competition} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分页 */}
        <div className="shrink-0 h-[44px] border-t border-[#e8e8e8] bg-white flex items-center justify-end px-5 gap-3 text-[13px] text-[#666]">
          <span>100 条/页</span>
          <span className="text-[#ccc]">|</span>
          <span>31</span>
          <span className="text-[#3385FF] font-medium">32</span>
          <span>33</span>
          <span className="text-[#ccc]">…</span>
          <span>41</span>
        </div>
      </div>
    </div>
  );
}

function BaiduSearchBox() {
  return (
    <div className="w-[420px] bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-zinc-200/80 flex items-center overflow-hidden shrink-0">
      <div className="flex items-center gap-2 pl-5 pr-3 py-3 flex-1 min-w-0">
        <span className="text-[#2932E1] font-black text-[18px] font-['MiSans'] shrink-0">百度</span>
        <span className="text-zinc-800 text-[20px] font-medium font-['MiSans'] truncate">{SEARCH_QUERY}</span>
      </div>
      <div className="h-full px-6 py-3.5 bg-[#3385FF] text-white text-[18px] font-bold font-['MiSans'] shrink-0 flex items-center">
        百度一下
      </div>
    </div>
  );
}

function XiaohongshuSearchBox() {
  return (
    <div className="w-[340px] bg-white rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.3)] border border-[#FE2C55]/25 flex items-center overflow-hidden shrink-0">
      <div className="flex items-center gap-2 pl-4 pr-2 py-2.5 flex-1 min-w-0">
        <Search className="w-[18px] h-[18px] text-[#FE2C55] shrink-0" strokeWidth={2.5} />
        <span className="text-zinc-700 text-[17px] font-medium font-['MiSans'] truncate">{SEARCH_QUERY}</span>
      </div>
      <div className="w-9 h-9 mr-1.5 rounded-full bg-[#FE2C55] flex items-center justify-center shrink-0">
        <Search className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function Page_GEOWordSelectionOther() {
  const [phoneImgFailed, setPhoneImgFailed] = useState(false);
  const phoneImagePath = "/images/geo-word-selection-other-phone.png";

  return (
    <SlideLayout
      title="市场上其他做法"
      subtitle="关键词是怎么来的，也就是我们怎么判断这些词最接近真实用户在 AI 平台上的提问。"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container：三栏布局，过渡区独占中间缝隙 */}
      <div className="w-full h-full flex items-stretch relative z-10 select-none">

        {/* 左侧：百度营销/小红书聚光月均搜索指数 */}
        <div className="w-[850px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">百度营销/小红书聚光月均搜索指数</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow p-6 bg-zinc-950 flex flex-col justify-between">
            <div className="flex-grow bg-white border border-zinc-200 rounded-xl relative overflow-hidden h-[620px] shadow-inner">
              <BaiduMarketingKeywordTable />
            </div>
          </div>
        </div>

        {/* 中间过渡：横平居中于两框缝隙 */}
        <div className="w-[140px] shrink-0 flex flex-col items-center justify-center gap-3 self-center">
          <span className="text-[20px] font-black text-white font-['MiSans'] text-center leading-tight px-3 py-1.5 rounded-full bg-black/85 border border-zinc-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            AI搜索形式变了
          </span>
          <svg width="72" height="20" viewBox="0 0 72 20" fill="none" aria-hidden="true">
            <path d="M0 10H56" stroke="#2E6BFF" strokeWidth="3" strokeLinecap="round" />
            <path d="M48 4L64 10L48 16" stroke="#2E6BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 右侧：手机端真实搜索截图 */}
        <div className="w-[850px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">AI 平台真实用户提问</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow min-h-0 p-6 pb-4 bg-zinc-950 flex items-center justify-center gap-10">
            {/* 手机左侧：传统搜索框示意 */}
            <div className="flex flex-col items-end justify-center gap-8 flex-1 min-w-0 pr-2">
              <div className="flex flex-col items-end gap-2">
                <span className="text-zinc-500 text-[15px] font-bold font-['MiSans'] tracking-wide">百度搜索</span>
                <BaiduSearchBox />
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-zinc-500 text-[15px] font-bold font-['MiSans'] tracking-wide">小红书搜索</span>
                <XiaohongshuSearchBox />
              </div>
            </div>

            <div className="relative w-[304px] h-[620px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[56px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden shrink-0">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900 border border-zinc-800/80 ml-auto mr-4" />
              </div>

              {/* Screen Content */}
              <div className="absolute inset-0 z-10 w-full h-full bg-zinc-900 flex items-center justify-center p-1">
                {!phoneImgFailed ? (
                  <img
                    src={phoneImagePath}
                    alt="手机端真实搜索截图"
                    className="w-full h-full object-cover rounded-[46px]"
                    onError={() => setPhoneImgFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-center p-6 gap-2">
                    <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                    <span className="text-zinc-550 font-bold text-lg font-['MiSans']">
                      [ 手机端真实搜索截图 ]
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 卡片内结论：与百度搜索框居中对齐 */}
          <div className="shrink-0 px-6 pb-5 pt-1 border-t border-zinc-900/80 bg-zinc-950 flex items-center gap-10">
            <div className="flex-1 min-w-0 pr-2 flex justify-end">
              <div className="w-[420px] text-center">
                <span className="text-white text-[22px] font-sans font-bold font-['MiSans']">
                  搜索逻辑变了，数据也变了
                </span>
              </div>
            </div>
            <div className="w-[304px] shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Footnote */}
        <div className="absolute bottom-[-48px] left-0 w-[850px] text-center text-white text-[22px] font-sans font-bold z-20">
          数据来源：百度广告、小红书聚光搜索指数
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOWordSelectionOther.hideHeader = true;
