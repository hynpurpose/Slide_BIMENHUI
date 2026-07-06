import React from 'react';
import SlideLayout from '../components/SlideLayout';

const Chevron = () => (
  <div className="flex items-center shrink-0">
    <svg className="w-7 h-7 text-[#004CE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const pipeline = [
  { t: 'Excel 解析', d: '汇总表 + 4 款商品明细 Sheet' },
  { t: '情感映射', d: '好评 / 差评 / 疑似刷评 / 无效' },
  { t: '字段提取', d: '日期转换 · 评论图片 URL · 维度聚合' },
  { t: '静态 JSON', d: 'dataset.json 打包进前端，离线可用' },
];

const engine = [
  { t: '情感四分类', d: '1996 条强制按四类切割统计', stat: '982 / 78 / 411 / 525' },
  { t: 'AI 刷评实锤', d: '判定依据与评论原文同框展示', stat: '411 条疑似刷评' },
  { t: '卖点四维拆解', d: '功能 · 质量 · 颜值 · 服务', stat: '1267 条含图评论' },
];

const navGroups = [
  {
    title: '宏观大盘',
    items: ['数据总览', '商品横向对比'],
    shots: ['/user-comment/overview.png', '/user-comment/compare.png'],
  },
  {
    title: '深度口碑',
    items: ['情感分布', '用户之声 VOC', '卖点维度', '关键词云', '时间趋势'],
    shots: ['/user-comment/sentiment.png', '/user-comment/voices.png', '/user-comment/dimensions.png'],
  },
  {
    title: '真实性甄别',
    items: ['刷评识别', '全量评论墙', '单商品下钻'],
    shots: ['/user-comment/fake.png', '/user-comment/wall.png'],
    highlight: true,
  },
];

export default function Page_UserCommentArchitecture() {
  return (
    <SlideLayout title="用户真评引擎架构">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        抓取<span className="text-white font-bold">淘宝 / 京东</span>电商评论，经 AI 去伪与结构化分析，输出
        <span className="text-white font-bold"> 10 屏口碑看板</span> —— 为 GEO 内容选题与产品判断提供真实用户依据。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-7 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none font-['MiSans'] flex items-stretch gap-5">
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider">真评洞察系统 2.0</span>
        </div>

        {/* 左：数据采集 + 数据管线 */}
        <div className="w-[360px] shrink-0 flex flex-col gap-4">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="text-[20px] font-bold text-zinc-400 mb-3 flex items-center gap-2.5">
              <span className="w-1.5 h-5 bg-zinc-500 rounded-full" />
              ① 数据采集
            </div>
            <div className="flex-1 bg-[#111115] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="text-[26px] font-bold text-white leading-tight">淘宝 / 京东</div>
                <div className="text-[16px] text-zinc-400 mt-2">创维 4 款壁纸电视商品页评论</div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['A7H Pro', 'A8H', 'A10H', 'Q8H'].map((p) => (
                  <div key={p} className="bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 text-[15px] font-bold text-zinc-200 text-center">
                    {p}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[15px] text-zinc-500">原始数据</span>
                <span className="text-[22px] font-black text-white font-['Montserrat']">~2,000 条</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            <div className="text-[20px] font-bold text-zinc-400 mb-3 flex items-center gap-2.5">
              <span className="w-1.5 h-5 bg-zinc-500 rounded-full" />
              ② 构建时数据管线
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2">
              {pipeline.map((p, i) => (
                <div key={p.t} className="flex-1 bg-[#111115] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#004CE5]/20 border border-[#004CE5]/40 text-[13px] font-black text-[#7FA6FF] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[18px] font-bold text-white leading-tight">{p.t}</div>
                    <div className="text-[14px] text-zinc-500 truncate">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Chevron />

        {/* 中：分析引擎核心 */}
        <div className="w-[400px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-blue-400 mb-3 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />
            ③ 分析引擎核心
          </div>
          <div className="flex-1 rounded-2xl bg-gradient-to-b from-[#003bb3] to-[#001430] border border-[#60A5FA]/40 shadow-[0_0_40px_rgba(0,76,229,0.3)] p-6 flex flex-col justify-between">
            <div className="text-center shrink-0">
              <div className="text-[14px] font-bold text-blue-200/70 tracking-[0.25em]">PURE FRONTEND SPA</div>
              <div className="text-[26px] font-black text-white mt-1">React · Vite · 零后端</div>
              <div className="text-[15px] text-blue-100/70 mt-1">全局商品切换 · 10 路由同步过滤</div>
            </div>

            <div className="flex flex-col gap-3 flex-1 justify-center my-3">
              {engine.map((c, i) => (
                <React.Fragment key={c.t}>
                  <div className="bg-white/[0.08] border border-white/20 rounded-xl px-4 py-3 backdrop-blur">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[22px] font-bold text-white leading-tight">{c.t}</div>
                        <div className="text-[14px] text-blue-100/70 mt-0.5">{c.d}</div>
                      </div>
                      <span className="shrink-0 text-[13px] font-bold text-[#7FA6FF] bg-[#004CE5]/25 border border-[#004CE5]/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {c.stat}
                      </span>
                    </div>
                  </div>
                  {i < engine.length - 1 && (
                    <div className="flex justify-center">
                      <svg className="w-5 h-5 text-blue-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="shrink-0 bg-black/25 border border-white/10 rounded-xl px-4 py-3 text-center">
              <div className="text-[14px] text-blue-100/60">部署方式</div>
              <div className="text-[17px] font-bold text-white mt-0.5">npm run build → dist/ 静态托管 · 可离线</div>
            </div>
          </div>
        </div>

        <Chevron />

        {/* 右：10 屏看板 + 真实 UI 截图 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-300 mb-3 flex items-center gap-2.5">
            <span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />
            ④ 10 屏分析看板（真实系统界面）
          </div>

          <div className="flex-1 flex flex-col gap-3 min-h-0">
            {navGroups.map((g) => (
              <div
                key={g.title}
                className={`flex-1 min-h-0 rounded-2xl border p-3 flex gap-3 ${
                  g.highlight
                    ? 'bg-[#004CE5]/10 border-[#004CE5]/40 shadow-[0_0_20px_rgba(0,76,229,0.15)]'
                    : 'bg-white/[0.03] border-white/10'
                }`}
              >
                <div className="w-[148px] shrink-0 flex flex-col justify-center">
                  <div className={`text-[17px] font-bold mb-2 ${g.highlight ? 'text-[#7FA6FF]' : 'text-white'}`}>
                    {g.title}
                    {g.highlight && (
                      <span className="ml-2 text-[12px] font-bold text-[#7FA6FF] bg-[#004CE5]/25 px-2 py-0.5 rounded-full align-middle">
                        核心差异
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="text-[12px] font-bold text-zinc-300 bg-black/30 border border-white/10 px-2 py-0.5 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex gap-2 min-w-0 items-stretch">
                  {g.shots.map((src) => (
                    <div
                      key={src}
                      className="flex-1 min-w-0 rounded-lg overflow-hidden border border-white/15 bg-black shadow-lg"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture.hideHeader = true;
