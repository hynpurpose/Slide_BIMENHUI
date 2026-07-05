import React from 'react';
import SlideLayout from '../components/SlideLayout';

const TITLE = '5款产品的侧重点和优化方向';

const online = [
  {
    model: 'A7H Pro',
    tier: '入门款',
    role: '绝对销量担当',
    focus: (
      <>
        守住专属词<strong className="text-white font-bold">「销量王者」</strong>，卡稳{' '}
        <strong className="text-white font-bold">7000 元</strong> 预算带，
        <strong className="text-white font-bold">谨防竞品截流</strong>
      </>
    ),
    focusPlain: '守住专属词「销量王者」，卡稳 7000 元预算带，谨防竞品截流',
    star: true,
  },
  {
    model: 'A8H',
    tier: '中端款',
    role: '音画升级',
    focus: (
      <>
        <strong className="text-white font-bold">卡位市场空档</strong>，独占对应价位段
      </>
    ),
    focusPlain: '卡位市场空档，独占对应价位段',
  },
  {
    model: 'A10H',
    tier: '旗舰款',
    role: '系列天花板',
    focus: (
      <>
        <strong className="text-white font-bold">对标海外高端</strong>，撑起品牌高度
      </>
    ),
    focusPlain: '对标海外高端，撑起品牌高度',
  },
];

const offline = [
  { model: 'Q7H', tier: '高端均衡款', role: '线下质感体验' },
  { model: 'Q8H', tier: '分体顶配款', role: '大客厅高端影音' },
];

const OFFLINE_DIRECTION = (
  <>
    抓住<strong className="text-white font-bold">「看得见 / 去哪看」</strong>类词，提前把
    <strong className="text-white font-bold">到店路径</strong>推给用户。
  </>
);

const IntroLine = () => (
  <p
    className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-10"
    style={{ fontSize: '38px', lineHeight: '1.3' }}
  >
    线上<strong className="text-white font-bold">打参数与专属词</strong>，线下
    <strong className="text-white font-bold">打体验与引导词</strong>。
  </p>
);

const ContentFrame = ({ children }) => (
  <div
    className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
    style={{ top: 0, height: '795px', paddingTop: '24px' }}
  >
    {children}
  </div>
);

/* ============================================================
   版本 A：上下双行 · 卡片内三段式（定位 / 优化方向）
   ============================================================ */

function A_OnlineCard({ model, tier, role, focus, star }) {
  return (
    <div
      className={`flex-1 rounded-2xl px-7 py-6 flex flex-col ${
        star ? 'border-2 border-[#004CE5] bg-[#004CE5]/10' : 'border border-zinc-800 bg-[#0D0D10]'
      }`}
    >
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-baseline gap-3">
          <span className="text-[36px] font-black text-white font-['MiSans'] leading-none">{model}</span>
          <span className="text-[22px] text-zinc-500 font-['MiSans']">{tier}</span>
        </div>
        {star && (
          <span className="px-3 py-1 rounded-full bg-[#004CE5] text-[19px] text-white font-bold font-['MiSans'] whitespace-nowrap">
            核心销量款
          </span>
        )}
      </div>
      <p className="text-[24px] text-white font-bold font-['MiSans'] mt-4">{role}</p>
      <div className="mt-3 pt-3 border-t border-zinc-800/80">
        <span className="text-[19px] text-zinc-600 font-['MiSans']">优化方向</span>
        <p className="text-[22px] text-zinc-300 font-['MiSans'] font-medium mt-1.5 leading-snug">{focus}</p>
      </div>
    </div>
  );
}

function A_OfflineCard({ model, tier, role }) {
  return (
    <div className="flex-1 rounded-2xl border border-zinc-800 bg-[#0D0D10] px-7 py-6 flex flex-col justify-center">
      <div className="flex items-baseline gap-3">
        <span className="text-[36px] font-black text-white font-['MiSans'] leading-none">{model}</span>
        <span className="text-[22px] text-zinc-500 font-['MiSans']">{tier}</span>
      </div>
      <p className="text-[24px] text-white font-bold font-['MiSans'] mt-3">{role}</p>
    </div>
  );
}

export function Page_SkyworthProductStrategy_A() {
  return (
    <SlideLayout title={TITLE}>
      <ContentFrame>
        <IntroLine />
        <div className="flex-1 min-h-0 flex flex-col gap-8">
          <div className="flex-[3] rounded-[28px] border border-zinc-800 bg-zinc-950/30 p-9 flex flex-col">
            <div className="flex items-center justify-between shrink-0 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[34px] font-black text-white font-['MiSans']">A 系列</span>
                <span className="text-[24px] text-zinc-500 font-['MiSans']">线上配置线 · 3 款</span>
              </div>
              <span className="px-5 py-2 rounded-full bg-[#004CE5]/15 border border-[#004CE5]/40 text-[24px] text-white font-bold font-['MiSans']">
                主攻 产品专属词 + 参数
              </span>
            </div>
            <div className="flex-1 flex gap-5">
              {online.map((m) => <A_OnlineCard key={m.model} {...m} />)}
            </div>
          </div>

          <div className="flex-[2] rounded-[28px] border border-zinc-800 bg-zinc-950/30 p-9 flex flex-col">
            <div className="flex items-center justify-between shrink-0 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[34px] font-black text-white font-['MiSans']">Q 系列</span>
                <span className="text-[24px] text-zinc-500 font-['MiSans']">线下体验线 · 2 款</span>
              </div>
              <span className="px-5 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-[24px] text-white font-bold font-['MiSans']">
                不争线上词，主攻 线下体验 / 去哪看
              </span>
            </div>
            <div className="flex-1 flex gap-5">
              {offline.map((m) => <A_OfflineCard key={m.model} {...m} />)}
              <div className="flex-1 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/20 px-7 py-6 flex flex-col justify-center">
                <span className="text-[19px] text-zinc-600 font-['MiSans']">共同优化方向</span>
                <p className="text-[23px] text-zinc-300 font-['MiSans'] font-medium mt-2 leading-snug">
                  {OFFLINE_DIRECTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentFrame>
    </SlideLayout>
  );
}

/* ============================================================
   版本 B：左侧系列导轨 + 右侧卡片矩阵（强对齐轴）
   ============================================================ */

function B_Rail({ label, sub, tag, accent }) {
  return (
    <div
      className={`w-[300px] shrink-0 rounded-[24px] px-8 py-7 flex flex-col justify-between ${
        accent ? 'border border-[#004CE5]/40 bg-[#004CE5]/10' : 'border border-zinc-800 bg-[#0D0D10]'
      }`}
    >
      <div>
        <div className="text-[44px] font-black text-white font-['MiSans'] leading-none">{label}</div>
        <div className="text-[23px] text-zinc-500 font-['MiSans'] mt-3">{sub}</div>
      </div>
      <div
        className={`self-start px-4 py-2 rounded-full text-[21px] font-bold font-['MiSans'] ${
          accent ? 'bg-[#004CE5] text-white' : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
        }`}
      >
        {tag}
      </div>
    </div>
  );
}

function B_Card({ model, tier, role, focus, star, dashed }) {
  return (
    <div
      className={`flex-1 rounded-2xl px-7 py-6 flex flex-col justify-center ${
        star
          ? 'border-2 border-[#004CE5] bg-[#004CE5]/10'
          : dashed
          ? 'border border-dashed border-zinc-700 bg-zinc-900/20'
          : 'border border-zinc-800 bg-[#0D0D10]'
      }`}
    >
      <div className="flex items-baseline gap-3">
        <span className="text-[34px] font-black text-white font-['MiSans'] leading-none">{model}</span>
        <span className="text-[21px] text-zinc-500 font-['MiSans']">{tier}</span>
      </div>
      <p className="text-[23px] text-white font-bold font-['MiSans'] mt-3">{role}</p>
      {focus && (
        <p className="text-[21px] text-zinc-400 font-['MiSans'] font-medium mt-2 leading-snug">{focus}</p>
      )}
    </div>
  );
}

export function Page_SkyworthProductStrategy_B() {
  return (
    <SlideLayout title={TITLE}>
      <ContentFrame>
        <IntroLine />
        <div className="flex-1 min-h-0 flex flex-col gap-7">
          <div className="flex-[3] flex gap-6">
            <B_Rail label="A 系列" sub="线上配置线 · 3 款" tag="专属词 + 参数" accent />
            <div className="flex-1 flex gap-5">
              {online.map((m) => (
                <B_Card key={m.model} {...m} role={m.role} focus={m.focus} />
              ))}
            </div>
          </div>

          <div className="flex-[2] flex gap-6">
            <B_Rail label="Q 系列" sub="线下体验线 · 2 款" tag="线下体验 / 去哪看" />
            <div className="flex-1 flex gap-5">
              {offline.map((m) => (
                <B_Card key={m.model} {...m} />
              ))}
              <B_Card model="引导" tier="到店路径" role="不争线上词" focus={OFFLINE_DIRECTION} dashed />
            </div>
          </div>
        </div>
      </ContentFrame>
    </SlideLayout>
  );
}

/* ============================================================
   版本 C：线上 / 线下 左右分栏 · 每款横条对齐
   ============================================================ */

function C_Row({ model, tier, role, focus, star, dashed }) {
  return (
    <div
      className={`flex-1 rounded-2xl px-7 flex items-center gap-6 ${
        star
          ? 'border-2 border-[#004CE5] bg-[#004CE5]/10'
          : dashed
          ? 'border border-dashed border-zinc-700 bg-zinc-900/20'
          : 'border border-zinc-800 bg-[#0D0D10]'
      }`}
    >
      <div className="w-[300px] shrink-0">
        <div className="flex items-baseline gap-3">
          <span className="text-[34px] font-black text-white font-['MiSans'] leading-none">{model}</span>
          <span className="text-[20px] text-zinc-500 font-['MiSans']">{tier}</span>
        </div>
        <p className="text-[23px] text-white font-bold font-['MiSans'] mt-2">{role}</p>
      </div>
      <div className="w-px self-stretch my-5 bg-zinc-800" />
      <p className="flex-1 text-[22px] text-zinc-300 font-['MiSans'] font-medium leading-snug">{focus}</p>
    </div>
  );
}

export function Page_SkyworthProductStrategy_C() {
  return (
    <SlideLayout title={TITLE}>
      <ContentFrame>
        <IntroLine />
        <div className="flex-1 min-h-0 flex gap-8">
          {/* 线上 A系列 */}
          <div className="flex-[3] rounded-[28px] border border-zinc-800 bg-zinc-950/30 p-9 flex flex-col">
            <div className="flex items-center justify-between shrink-0 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[34px] font-black text-white font-['MiSans']">A 系列</span>
                <span className="text-[23px] text-zinc-500 font-['MiSans']">线上配置线 · 3 款</span>
              </div>
              <span className="px-5 py-2 rounded-full bg-[#004CE5]/15 border border-[#004CE5]/40 text-[22px] text-white font-bold font-['MiSans']">
                专属词 + 参数
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              {online.map((m) => (
                <C_Row key={m.model} {...m} />
              ))}
            </div>
          </div>

          {/* 线下 Q系列 */}
          <div className="flex-[2] rounded-[28px] border border-zinc-800 bg-zinc-950/30 p-9 flex flex-col">
            <div className="flex items-center justify-between shrink-0 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[34px] font-black text-white font-['MiSans']">Q 系列</span>
                <span className="text-[23px] text-zinc-500 font-['MiSans']">线下体验线 · 2 款</span>
              </div>
              <span className="px-5 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-[22px] text-white font-bold font-['MiSans']">
                线下体验 / 去哪看
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              {offline.map((m) => (
                <C_Row key={m.model} {...m} focus={<span className="text-zinc-500">突出线下属性，不争线上词</span>} />
              ))}
              <C_Row model="引导" tier="到店路径" role="共同方向" focus={OFFLINE_DIRECTION} dashed />
            </div>
          </div>
        </div>
      </ContentFrame>
    </SlideLayout>
  );
}

/* 默认导出保留（指向版本 A），兼容旧的 component 引用 */
export default Page_SkyworthProductStrategy_A;

Page_SkyworthProductStrategy_A.hideHeader = true;
Page_SkyworthProductStrategy_B.hideHeader = true;
Page_SkyworthProductStrategy_C.hideHeader = true;
