import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
 * 讲稿核心（品牌词，优化词里的重中之重）——两个"层级"，不是攻守：
 *   第一层级（重中之重）· 优势词 —— 「好看的电视」
 *        品类：艺术/壁纸/超薄/画框电视。某家电品牌已占绝对优势，
 *        必须保住绝对第一，不给竞品A、竞品B 以及竞品D这类有品牌
 *        影响力的跟风者留机会（他们想用自家系列挤进这条赛道）。
 *   第二层级 · 弱势词 —— 「常规电视」
 *        词：质量好/画质好/音响好。持续加强，不追求第一，
 *        但绝不能落后，努力进 TOP3。
 *
 * 排版重点：用「①优势词 > ②弱势词」的优先级层级——优势词是主角
 *          （金色/更大/更亮），弱势词是配角（蓝色/更小/更暗），
 *          让页面一眼看出谁高谁低，而非攻守对立。
 *
 * 配色：优势词 = 金 (#F5B301 冠军/第一)；弱势词 = 蓝 (#5B8CFF 上升)
 * ============================================================ */

const GOLD = '#F5B301';
const GOLD_T = '#FFD35C';
const BLUE = '#5B8CFF';
const BLUE_T = '#93B4FF';

const ADV_WORDS = ['艺术电视', '壁纸电视', '超薄电视', '画框电视'];
const WEAK_WORDS = ['质量好', '画质好', '音响好'];
const RIVALS = ['竞品A', '竞品B', '竞品D'];

/* ============================================================
 * 版本 A — 优先级分明双栏
 * 左栏「①优势词」放大成主角（占约 3/5，金色高亮、重中之重徽标、
 * 绝对第一巨字、品类词大标签、底部跟风者警示）；右栏「②弱势词」
 * 收窄成配角（蓝色、更暗、TOP3、词更小）。一眼分清层级高低。
 * ============================================================ */
export function Page_SkyworthBrandWordStrategy_A() {
  return (
    <SlideLayout title="品牌词：优势保第一，弱势进 TOP3">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-8"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          品牌词是优化词的<strong className="text-white font-bold">重中之重</strong>，按优先级分两层：
          <strong style={{ color: GOLD_T }} className="font-bold">优势词</strong>保住绝对第一，
          <strong style={{ color: BLUE_T }} className="font-bold">弱势词</strong>努力进 TOP3。
        </p>

        <div className="flex-1 min-h-0 grid grid-cols-[1.5fr_1fr] gap-8">
          {/* ① 优势词 · 主角 */}
          <div
            className="h-full rounded-[30px] p-12 flex flex-col relative overflow-hidden"
            style={{
              border: `1.5px solid ${GOLD}66`,
              background: `linear-gradient(150deg, ${GOLD}20 0%, #100D07 42%, #0B0B0E 100%)`,
            }}
          >
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center gap-5">
                <span className="text-[80px] font-black leading-none font-['MiSans']" style={{ color: GOLD }}>①</span>
                <div className="flex flex-col">
                  <span className="text-[32px] text-white font-bold font-['MiSans'] leading-tight">优势词 · 好看的电视</span>
                  <span className="text-[23px] text-zinc-400 font-['MiSans']">某家电品牌已占绝对优势</span>
                </div>
              </div>
              <span
                className="px-5 py-2 rounded-full text-[24px] font-black font-['MiSans'] leading-none"
                style={{ background: GOLD, color: '#161007' }}
              >
                重中之重
              </span>
            </div>

            <h3 className="text-[76px] font-black text-white font-['MiSans'] leading-none mt-10 shrink-0">
              保住<span style={{ color: GOLD_T }}>绝对第一</span>
            </h3>

            <div className="flex flex-wrap gap-3.5 mt-9">
              {ADV_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-7 py-3 rounded-2xl text-[30px] font-black font-['MiSans'] leading-none"
                  style={{ background: `${GOLD}1F`, color: '#FFFFFF', border: `1px solid ${GOLD}55` }}
                >
                  {w}
                </span>
              ))}
            </div>

            <div
              className="mt-auto rounded-2xl px-7 py-5 flex items-center gap-4"
              style={{ background: '#00000040', border: `1px solid ${GOLD}33` }}
            >
              <div className="flex items-center gap-2.5">
                {RIVALS.map((r) => (
                  <span key={r} className="px-4 py-2 rounded-lg bg-zinc-800/80 text-[24px] text-zinc-300 font-bold font-['MiSans'] leading-none line-through decoration-2 decoration-zinc-600">
                    {r}
                  </span>
                ))}
              </div>
              <span className="text-[23px] text-zinc-400 font-['MiSans'] leading-snug flex-1 min-w-0">
                等跟风者都想挤进「好看的电视」，<strong style={{ color: GOLD_T }} className="font-bold">绝不让位</strong>
              </span>
            </div>
          </div>

          {/* ② 弱势词 · 配角 */}
          <div
            className="h-full rounded-[30px] p-11 flex flex-col"
            style={{ border: `1px solid ${BLUE}2E`, background: '#0C0D11' }}
          >
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-[62px] font-black leading-none font-['MiSans']" style={{ color: BLUE }}>②</span>
              <div className="flex flex-col">
                <span className="text-[28px] text-white font-bold font-['MiSans'] leading-tight">弱势词 · 常规电视</span>
                <span className="text-[21px] text-zinc-500 font-['MiSans']">持续加强，绝不落后</span>
              </div>
            </div>

            <h3 className="text-[56px] font-black text-white font-['MiSans'] leading-none mt-9 shrink-0">
              进 <span style={{ color: BLUE_T }}>TOP3</span>
            </h3>

            <div className="flex flex-wrap gap-3 mt-8">
              {WEAK_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-5 py-2.5 rounded-xl text-[25px] font-bold font-['MiSans'] leading-none"
                  style={{ background: `${BLUE}14`, color: '#E4E4E7', border: `1px solid ${BLUE}33` }}
                >
                  {w}
                </span>
              ))}
            </div>

            <p className="text-[25px] text-zinc-400 leading-[42px] font-['MiSans'] font-medium mt-auto">
              不追求第一，但<strong className="text-white font-bold">绝不能落后</strong>。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 B — 层级分层（上大下小）
 * 顶部整幅「①优势词」主带（金色、重中之重），占据大部分高度并放大
 * 关键信息；底部一条收窄的「②弱势词」次带（蓝色、更暗）。用上下高度差
 * 表达优先级层级，阅读顺序天然「先优势、后弱势」。
 * ============================================================ */
export function Page_SkyworthBrandWordStrategy_B() {
  return (
    <SlideLayout title="品牌词：优势保第一，弱势进 TOP3">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-7"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          品牌词是优化词的<strong className="text-white font-bold">重中之重</strong>，按优先级分两层：先保优势词，再补弱势词。
        </p>

        <div className="flex-1 min-h-0 flex flex-col gap-6">
          {/* ① 优势词 · 主带 */}
          <div
            className="rounded-[30px] px-12 py-10 flex items-center gap-12 relative overflow-hidden"
            style={{
              flex: '1.9 1 0%',
              border: `1.5px solid ${GOLD}66`,
              background: `linear-gradient(120deg, ${GOLD}20 0%, #100D07 45%, #0B0B0E 100%)`,
            }}
          >
            {/* 左：身份 + 绝对第一 */}
            <div className="shrink-0 w-[560px]">
              <div className="flex items-center gap-5">
                <span className="text-[70px] font-black leading-none font-['MiSans']" style={{ color: GOLD }}>①</span>
                <div className="flex flex-col">
                  <span className="text-[30px] text-white font-bold font-['MiSans'] leading-tight">优势词 · 好看的电视</span>
                  <span
                    className="mt-1.5 inline-block w-fit px-4 py-1 rounded-full text-[21px] font-black font-['MiSans'] leading-none"
                    style={{ background: GOLD, color: '#161007' }}
                  >
                    重中之重
                  </span>
                </div>
              </div>
              <h3 className="text-[74px] font-black text-white font-['MiSans'] leading-none mt-7">
                保住<span style={{ color: GOLD_T }}>绝对第一</span>
              </h3>
              <p className="text-[24px] text-zinc-400 font-['MiSans'] mt-4 leading-snug">某家电品牌已占绝对优势。</p>
            </div>

            {/* 右：品类词 + 跟风者警示 */}
            <div className="flex-1 min-w-0 self-stretch flex flex-col justify-center gap-6 border-l border-white/10 pl-12">
              <div className="flex flex-wrap gap-3.5">
                {ADV_WORDS.map((w) => (
                  <span
                    key={w}
                    className="px-7 py-3 rounded-2xl text-[31px] font-black font-['MiSans'] leading-none"
                    style={{ background: `${GOLD}1F`, color: '#FFFFFF', border: `1px solid ${GOLD}55` }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  {RIVALS.map((r) => (
                    <span key={r} className="px-4 py-2 rounded-lg bg-zinc-800/80 text-[24px] text-zinc-300 font-bold font-['MiSans'] leading-none line-through decoration-2 decoration-zinc-600">
                      {r}
                    </span>
                  ))}
                </div>
                <span className="text-[23px] text-zinc-400 font-['MiSans']">
                  等跟风者都想挤进「好看的电视」，<strong style={{ color: GOLD_T }} className="font-bold">绝不让位</strong>
                </span>
              </div>
            </div>
          </div>

          {/* ② 弱势词 · 次带 */}
          <div
            className="rounded-[26px] px-11 py-7 flex items-center gap-10"
            style={{ flex: '1 1 0%', border: `1px solid ${BLUE}2E`, background: '#0C0D11' }}
          >
            <div className="shrink-0 w-[560px] flex items-center gap-5">
              <span className="text-[56px] font-black leading-none font-['MiSans']" style={{ color: BLUE }}>②</span>
              <div className="flex flex-col">
                <span className="text-[27px] text-white font-bold font-['MiSans'] leading-tight">弱势词 · 常规电视</span>
                <span className="text-[21px] text-zinc-500 font-['MiSans']">持续加强，绝不落后</span>
              </div>
              <h3 className="text-[46px] font-black text-white font-['MiSans'] leading-none ml-4">
                进 <span style={{ color: BLUE_T }}>TOP3</span>
              </h3>
            </div>
            <div className="flex-1 min-w-0 flex flex-wrap gap-3 border-l border-white/10 pl-10">
              {WEAK_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-5 py-2.5 rounded-xl text-[26px] font-bold font-['MiSans'] leading-none"
                  style={{ background: `${BLUE}14`, color: '#E4E4E7', border: `1px solid ${BLUE}33` }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 C — 聚焦第一层级（优势词这一层）
 * 把「①优势词 = 好看的电视 = 绝对第一」做成整页视觉主角，中央巨字宣示，
 * 品类词环绕，右侧列出想挤进这条赛道的跟风者；底部只留一条极简的
 * 「②弱势词」提示。信息最聚焦、层级最分明。
 * ============================================================ */
export function Page_SkyworthBrandWordStrategy_C() {
  return (
    <SlideLayout title="品牌词：优势保第一，弱势进 TOP3">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-7"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          品牌词第一优先级、也是<strong className="text-white font-bold">重中之重</strong>：把优势词「好看的电视」保成绝对第一。
        </p>

        <div className="flex-1 min-h-0 flex flex-col gap-6">
          {/* ① 优势词 · 主舞台 */}
          <div
            className="rounded-[32px] px-14 py-11 flex items-stretch gap-12 relative overflow-hidden"
            style={{
              flex: '2.4 1 0%',
              border: `1.5px solid ${GOLD}66`,
              background: `radial-gradient(120% 140% at 12% 0%, ${GOLD}24 0%, #100D07 45%, #0A0A0D 100%)`,
            }}
          >
            {/* 左：宣示 */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <span
                  className="px-5 py-2 rounded-full text-[24px] font-black font-['MiSans'] leading-none"
                  style={{ background: GOLD, color: '#161007' }}
                >
                  ① 重中之重
                </span>
                <span className="text-[30px] text-white font-bold font-['MiSans']">优势词 · 好看的电视 · 某家电品牌已占绝对优势</span>
              </div>
              <h3 className="font-black text-white font-['MiSans'] leading-[0.95] mt-8" style={{ fontSize: '112px' }}>
                保住<br /><span style={{ color: GOLD_T }}>绝对第一</span>
              </h3>
              <div className="flex flex-wrap gap-3.5 mt-9">
                {ADV_WORDS.map((w) => (
                  <span
                    key={w}
                    className="px-7 py-3 rounded-2xl text-[30px] font-black font-['MiSans'] leading-none"
                    style={{ background: `${GOLD}1F`, color: '#FFFFFF', border: `1px solid ${GOLD}55` }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* 右：想挤进赛道的跟风者 */}
            <div className="shrink-0 w-[440px] self-stretch flex flex-col justify-center border-l border-white/10 pl-12">
              <span className="text-[26px] font-bold font-['MiSans']" style={{ color: GOLD_T }}>绝不给机会</span>
              <span className="text-[22px] text-zinc-500 font-['MiSans'] mt-1 mb-6">这些品牌都想挤进「好看的电视」</span>
              <div className="flex flex-col gap-3.5">
                {RIVALS.map((r) => (
                  <div
                    key={r}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl bg-zinc-900/70 border border-zinc-800"
                  >
                    <span className="text-[34px] text-zinc-300 font-black font-['MiSans'] leading-none line-through decoration-2 decoration-zinc-600">{r}</span>
                    <span className="text-[24px] text-zinc-600 font-['MiSans']">想挤进</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ② 弱势词 · 极简一条 */}
          <div
            className="rounded-[24px] px-11 py-6 flex items-center gap-8"
            style={{ flex: '1 1 0%', border: `1px solid ${BLUE}2E`, background: '#0C0D11' }}
          >
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-[48px] font-black leading-none font-['MiSans']" style={{ color: BLUE }}>②</span>
              <span className="text-[28px] text-white font-bold font-['MiSans']">弱势词 · 常规电视</span>
              <span className="text-[24px] text-zinc-500 font-['MiSans']">持续加强 · 绝不落后</span>
            </div>
            <div className="flex-1 min-w-0 flex flex-wrap items-center gap-3 justify-center border-x border-white/10 px-8">
              {WEAK_WORDS.map((w) => (
                <span
                  key={w}
                  className="px-5 py-2 rounded-xl text-[25px] font-bold font-['MiSans'] leading-none"
                  style={{ background: `${BLUE}14`, color: '#E4E4E7', border: `1px solid ${BLUE}33` }}
                >
                  {w}
                </span>
              ))}
            </div>
            <h3 className="text-[44px] font-black text-white font-['MiSans'] leading-none shrink-0">
              进 <span style={{ color: BLUE_T }}>TOP3</span>
            </h3>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============================================================
 * 版本 D — 层级对照表
 * 用一张表把两个层级讲清楚：表头「层级 / 对应词 / 品类 / 具体词 / 目标」，
 * 第一行（优势词）金色高亮、更高更亮，第二行（弱势词）蓝色更暗，
 * 行高 + 配色差直接表达层级高低；底部一条跟风者警示。
 * 与前三版共用同一套文案（优势词 / 弱势词 / 好看的电视 / 常规电视 /
 * 保住绝对第一 / 进 TOP3 / 都想挤进「好看的电视」，绝不让位）。
 * ============================================================ */
const TABLE_COLS = '288px 210px 236px 1fr 320px';

export function Page_SkyworthBrandWordStrategy_D() {
  const headers = ['层级', '对应词', '品类', '具体词', '目标'];
  return (
    <SlideLayout title="品牌词：优势保第一，弱势进 TOP3">
      <div
        className="absolute w-[1840px] flex flex-col select-none animate-fadeIn"
        style={{ top: 0, height: '795px', paddingTop: '20px' }}
      >
        <p
          className="text-zinc-300 font-normal font-['MiSans'] shrink-0 mb-7"
          style={{ fontSize: '38px', lineHeight: '1.3' }}
        >
          品牌词是优化词的<strong className="text-white font-bold">重中之重</strong>，按优先级分两个层级：
        </p>

        <div className="flex-1 min-h-0 flex flex-col gap-6">
          {/* 表格 */}
          <div className="flex-1 min-h-0 rounded-[28px] overflow-hidden flex flex-col" style={{ border: '1px solid #ffffff1a' }}>
            {/* 表头 */}
            <div
              className="grid items-center shrink-0"
              style={{ gridTemplateColumns: TABLE_COLS, background: '#15161B' }}
            >
              {headers.map((h) => (
                <span key={h} className="px-9 py-5 text-[26px] text-zinc-400 font-bold font-['MiSans'] leading-none">
                  {h}
                </span>
              ))}
            </div>

            {/* 第一行 · 优势词 */}
            <div
              className="grid items-center flex-[1.12] min-h-0"
              style={{
                gridTemplateColumns: TABLE_COLS,
                borderTop: '1px solid #ffffff14',
                background: `linear-gradient(90deg, ${GOLD}22 0%, ${GOLD}0D 40%, #0C0B08 100%)`,
              }}
            >
              <div className="px-9 flex items-center gap-4">
                <span className="text-[68px] font-black leading-none font-['MiSans']" style={{ color: GOLD }}>①</span>
                <div className="flex flex-col gap-2">
                  <span className="text-[27px] text-white font-bold font-['MiSans'] leading-none">第一层级</span>
                  <span
                    className="w-fit px-3.5 py-1.5 rounded-full text-[20px] font-black font-['MiSans'] leading-none"
                    style={{ background: GOLD, color: '#161007' }}
                  >
                    重中之重
                  </span>
                </div>
              </div>
              <span className="px-9 text-[36px] font-black font-['MiSans'] leading-none" style={{ color: GOLD_T }}>优势词</span>
              <span className="px-9 text-[30px] text-white font-bold font-['MiSans'] leading-none">好看的电视</span>
              <div className="px-9 flex flex-wrap gap-3">
                {ADV_WORDS.map((w) => (
                  <span
                    key={w}
                    className="px-5 py-2.5 rounded-xl text-[26px] font-black font-['MiSans'] leading-none"
                    style={{ background: `${GOLD}1F`, color: '#FFFFFF', border: `1px solid ${GOLD}55` }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <span className="px-9 text-[34px] font-black text-white font-['MiSans'] leading-tight">
                保住<span style={{ color: GOLD_T }}>绝对第一</span>
              </span>
            </div>

            {/* 第二行 · 弱势词 */}
            <div
              className="grid items-center flex-1 min-h-0"
              style={{ gridTemplateColumns: TABLE_COLS, borderTop: '1px solid #ffffff14', background: '#0C0D11' }}
            >
              <div className="px-9 flex items-center gap-4">
                <span className="text-[58px] font-black leading-none font-['MiSans']" style={{ color: BLUE }}>②</span>
                <span className="text-[27px] text-white font-bold font-['MiSans'] leading-none">第二层级</span>
              </div>
              <span className="px-9 text-[32px] font-black font-['MiSans'] leading-none" style={{ color: BLUE_T }}>弱势词</span>
              <span className="px-9 text-[28px] text-white font-bold font-['MiSans'] leading-none">常规电视</span>
              <div className="px-9 flex flex-wrap gap-3">
                {WEAK_WORDS.map((w) => (
                  <span
                    key={w}
                    className="px-5 py-2.5 rounded-xl text-[25px] font-bold font-['MiSans'] leading-none"
                    style={{ background: `${BLUE}14`, color: '#E4E4E7', border: `1px solid ${BLUE}33` }}
                  >
                    {w}
                  </span>
                ))}
              </div>
              <span className="px-9 text-[30px] font-black text-white font-['MiSans'] leading-tight">
                进 <span style={{ color: BLUE_T }}>TOP3</span>
              </span>
            </div>
          </div>

          {/* 跟风者警示 */}
          <div
            className="shrink-0 rounded-2xl px-9 py-5 flex items-center gap-4"
            style={{ background: '#00000040', border: `1px solid ${GOLD}33` }}
          >
            <span className="text-[24px] text-zinc-400 font-['MiSans'] shrink-0">跟风者</span>
            <div className="flex items-center gap-2.5">
              {RIVALS.map((r) => (
                <span key={r} className="px-4 py-2 rounded-lg bg-zinc-800/80 text-[24px] text-zinc-300 font-bold font-['MiSans'] leading-none line-through decoration-2 decoration-zinc-600">
                  {r}
                </span>
              ))}
            </div>
            <span className="text-[23px] text-zinc-400 font-['MiSans'] leading-snug">
              等品牌都想挤进「好看的电视」，第一层级<strong style={{ color: GOLD_T }} className="font-bold">绝不让位</strong>。
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 默认导出保留（指向版本 A），兼容旧的 component 引用 */
export default Page_SkyworthBrandWordStrategy_A;

Page_SkyworthBrandWordStrategy_A.hideHeader = true;
Page_SkyworthBrandWordStrategy_B.hideHeader = true;
Page_SkyworthBrandWordStrategy_C.hideHeader = true;
Page_SkyworthBrandWordStrategy_D.hideHeader = true;
