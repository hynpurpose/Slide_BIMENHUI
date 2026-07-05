import React from 'react';
import SlideLayout from '../components/SlideLayout';

const MODULES = [
  { title: '数据总览', img: '/user-comment/overview.png' },
  { title: '商品横向对比', img: '/user-comment/compare.png' },
  { title: '好评 / 差评分布', img: '/user-comment/sentiment.png' },
  { title: '用户之声 VOC', img: '/user-comment/voices.png' },
  { title: '卖点维度', img: '/user-comment/dimensions.png' },
  { title: '关键词云', img: '/user-comment/wordcloud.png' },
  { title: '时间趋势', img: '/user-comment/trend.png' },
  { title: '刷评识别', img: '/user-comment/fake.png' },
];

const IMG_TOP = 145; // slide 217px = Content Top 225 - 8
const IMG_HEIGHT = 760;

function ModuleSlide({ m }) {
  return (
    <SlideLayout title="" fullBleed>
      <div className="w-full h-full relative select-none">

        {/* 左：标题文案 */}
        <div
          className="absolute left-0 w-[460px] pl-4 flex items-center z-10"
          style={{ top: `${IMG_TOP}px`, height: `${IMG_HEIGHT}px` }}
        >
          <p className="text-[60px] font-black text-white font-['MiSans'] tracking-wide leading-[1.2] whitespace-pre-line">
            {m.title}
          </p>
        </div>

        {/* 右：系统截图 — 细微圆角描边，贴右裁切 */}
        <div
          className="absolute left-[480px] right-[-40px] rounded-l-[20px] overflow-hidden border border-white/10 border-r-0 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          style={{ top: `${IMG_TOP}px`, height: `${IMG_HEIGHT}px` }}
        >
          <img
            src={m.img}
            alt={m.title}
            className="w-full h-full object-cover object-left-top"
          />
        </div>

      </div>
    </SlideLayout>
  );
}

export const Page_UserComment_Overview = () => <ModuleSlide m={MODULES[0]} />;
export const Page_UserComment_Compare = () => <ModuleSlide m={MODULES[1]} />;
export const Page_UserComment_Sentiment = () => <ModuleSlide m={MODULES[2]} />;
export const Page_UserComment_Voices = () => <ModuleSlide m={MODULES[3]} />;
export const Page_UserComment_Dimensions = () => <ModuleSlide m={MODULES[4]} />;
export const Page_UserComment_WordCloud = () => <ModuleSlide m={MODULES[5]} />;
export const Page_UserComment_Trend = () => <ModuleSlide m={MODULES[6]} />;
export const Page_UserComment_Fake = () => <ModuleSlide m={MODULES[7]} />;

Page_UserComment_Overview.hideHeader = true;
Page_UserComment_Compare.hideHeader = true;
Page_UserComment_Sentiment.hideHeader = true;
Page_UserComment_Voices.hideHeader = true;
Page_UserComment_Dimensions.hideHeader = true;
Page_UserComment_WordCloud.hideHeader = true;
Page_UserComment_Trend.hideHeader = true;
Page_UserComment_Fake.hideHeader = true;
