import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* 视频占位框：优先加载 /public/videos/dazhong-zhenping-demo.mp4，
 * 找不到时回退为纯播放键占位框。后续把视频丢进该路径即可。 */
const VIDEO_SRC = '/videos/dazhong-zhenping-demo.mp4';

function VideoFrame({ radius = 24, showPlayHint = true }) {
  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden border border-white/20 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]"
      style={{ borderRadius: radius }}
    >
      <video
        src={VIDEO_SRC}
        className="w-full h-full object-cover"
        controls
        playsInline
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling.classList.remove('hidden');
        }}
      />
      {/* Fallback 占位 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0b0f] hidden">
        {showPlayHint && (
          <div className="w-[96px] h-[96px] rounded-full bg-[#004CE5]/15 border border-[#004CE5]/50 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#5B8CFF] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
 * 版本 A — 居中舞台
 * 一块大尺寸 16:9 视频框居中，四周留呼吸感，角标+底部字幕条营造“正在演示”的现场感。
 * ============================================================ */
export function Page_DazhongZhenpingDemo_A() {
  return (
    <SlideLayout title="大众真评系统 · 实时演示">
      <div className="absolute w-[820px] h-[820px] rounded-full bg-[#004CE5]/[0.08] blur-[190px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <div className="absolute inset-0 flex items-center justify-center z-10 animate-fadeIn">
        <div className="relative" style={{ width: '1360px', height: '765px' }}>
          <VideoFrame radius={28} />

          {/* 左上角：LIVE 角标 */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[18px] font-bold text-white font-['MiSans'] tracking-wider">LIVE DEMO</span>
          </div>

          {/* 底部：渐变字幕条 */}
          <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
            <div className="h-[120px] bg-gradient-to-t from-black/80 to-transparent flex items-end px-9 pb-6">
              <p className="text-[24px] text-white font-['MiSans'] font-medium">
                <span className="text-[#7FA6FF] font-bold">大众真评系统</span>　实时抓取 · 真伪净化 · 结论输出
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 左说明 + 右视频
 * 左侧一句话价值主张 + 3 条能力点，右侧 16:9 视频框，信息与演示并置。
 * ============================================================ */
export function Page_DazhongZhenpingDemo_B() {
  const points = [
    { n: '01', t: '海量数据抓取', d: '打通大模型语料与真实消费者反馈' },
    { n: '02', t: '真伪智能净化', d: '过滤水军与噪声，还原客观口碑' },
    { n: '03', t: '结论一键输出', d: '生成可用于决策的品牌调研结论' },
  ];

  return (
    <SlideLayout title="大众真评系统 · 实时演示">
      <div className="absolute w-[620px] h-[620px] rounded-full bg-[#004CE5]/[0.07] blur-[170px] -left-24 bottom-0 pointer-events-none z-0" />

      <div
        className="absolute w-[1840px] flex items-stretch justify-between gap-14 select-none animate-fadeIn z-10"
        style={{ top: 0, height: '795px' }}
      >
        {/* 左栏：说明 */}
        <div className="w-[600px] shrink-0 flex flex-col justify-center">
          <div className="w-[64px] h-[5px] bg-[#004CE5] rounded-full mb-8" />
          <p className="text-[34px] font-bold text-white font-['MiSans'] leading-[1.35] mb-12">
            用一套系统，把<span className="text-[#5B8CFF]">真实口碑</span>变成<br />可落地的<span className="text-[#5B8CFF]">品牌决策依据</span>。
          </p>

          <div className="flex flex-col gap-7">
            {points.map((p) => (
              <div key={p.n} className="flex items-start gap-5">
                <span className="text-[26px] font-black text-[#004CE5] font-mono shrink-0 leading-tight">{p.n}</span>
                <div>
                  <div className="text-[26px] font-bold text-white font-['MiSans'] leading-tight">{p.t}</div>
                  <div className="text-[19px] text-zinc-400 font-['MiSans'] mt-1">{p.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 inline-flex items-center gap-3 text-[20px] text-zinc-500 font-['MiSans']">
            <svg className="w-6 h-6 text-[#5B8CFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            右侧为系统实时演示
          </div>
        </div>

        {/* 右栏：视频框 */}
        <div className="flex-1 flex items-center">
          <div className="w-full" style={{ height: '675px' }}>
            <VideoFrame radius={24} />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 全宽影院
 * 视频框近乎满幅铺开，中央播放键 + 左下角玻璃信息卡 + 蓝色边角光效，最沉浸。
 * ============================================================ */
export function Page_DazhongZhenpingDemo_C() {
  return (
    <SlideLayout title="大众真评系统 · 实时演示">
      <div className="absolute inset-0 z-10 animate-fadeIn" style={{ padding: '0' }}>
        <div className="relative w-full h-full">
          <VideoFrame radius={32} showPlayHint={false} />

          {/* 蓝色边角光效 */}
          <div className="absolute -top-20 -right-16 w-[520px] h-[520px] rounded-full bg-[#004CE5]/25 blur-[150px] pointer-events-none z-20" />

          {/* 中央播放键（仅装饰，暗示可播放） */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-[128px] h-[128px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
              <svg className="w-14 h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>

          {/* 左下角玻璃信息卡 */}
          <div className="absolute bottom-8 left-8 z-30 max-w-[720px] px-8 py-6 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[16px] font-bold text-white/90 font-['MiSans'] tracking-[0.2em]">LIVE DEMO</span>
            </div>
            <div className="text-[30px] font-black text-white font-['MiSans'] leading-tight">大众真评系统</div>
            <div className="text-[20px] text-zinc-300 font-['MiSans'] mt-1.5">实时抓取 · 真伪净化 · 客观口碑结论输出</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_DazhongZhenpingDemo_A.hideHeader = true;
Page_DazhongZhenpingDemo_B.hideHeader = true;
Page_DazhongZhenpingDemo_C.hideHeader = true;
