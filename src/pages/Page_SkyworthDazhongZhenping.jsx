import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthDazhongZhenping() {
  return (
    <SlideLayout title="「大众真评」用户评论分析系统">
      <div
        className="absolute left-0 w-[1840px] flex select-none animate-fadeIn"
        style={{ top: '0px', height: '855px' }}
      >
        {/* 左侧文案 */}
        <div className="w-[540px] shrink-0 flex flex-col justify-center pr-10">
          <p
            className="text-zinc-300 font-normal font-['MiSans']"
            style={{ fontSize: '32px', lineHeight: '52px' }}
          >
            从京东、淘宝、小红书、B 站等平台，分析大量用户评论和内容反馈，提炼出消费者真正关心的
            <strong className="text-white font-bold">购买理由</strong>、
            <strong className="text-white font-bold">核心顾虑</strong>和
            <strong className="text-white font-bold">真实吐槽</strong>。
          </p>
        </div>

        {/* 右侧截图：铺满剩余区域，右缘对齐 margin，顶对齐展示 */}
        <div className="flex-1 h-full min-w-0 overflow-hidden border-t border-white/30 border-r-0 border-b-0 border-l-0 rounded-tl-[28px] shadow-2xl">
          <img
            src="/images/dazhong-zhenping-overview.png"
            alt="大众真评用户评论分析系统"
            className="w-full h-full object-cover object-left-top"
            onError={(e) => {
              e.currentTarget.src = '/images/comment-analysis-system.png';
            }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthDazhongZhenping.hideHeader = true;
