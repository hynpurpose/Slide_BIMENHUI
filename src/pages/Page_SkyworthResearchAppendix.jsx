import React from 'react';
import SlideLayout from '../components/SlideLayout';

/*
 * 调研过程速览（附录）· 4 页 · 高密度版
 * 版式统一原则：大字号、内容撑满整张卡片（justify-between）、避免居中留白。
 * 页一：集团概况与品牌资质 / 页二：市场战绩与全球化布局 / 页三：核心技术优势 / 页四：壁纸电视品类 GEO 难点。
 */

/* ============================================================
 * 页一：某家电品牌概况与品牌资质
 * ==========================================================*/
export function Page_SkyworthResearchGroup() {
  const stats = [
    { label: '品牌成立', value: '1988', sub: '深耕 37 年' },
    { label: '2025 财年营收', value: '703.24', sub: '亿元' },
    { label: '中国企业 500 强', value: 'No.380', sub: '2025' },
    { label: '《财富》中国 500 强', value: 'No.271', sub: '连续 16 年' },
    { label: '全球电视销售额', value: 'TOP5', sub: '第一梯队' },
    { label: '中国市场地位', value: 'TOP3', sub: '第一阵营' },
  ];

  const manufacturing = [
    '工信部首批智能制造试点示范单位；5G 全连接工厂首批 10 家试点示范单位。',
    '「5G+8K 柔性智能工厂」入选国家工信部 5G+工业互联网重点行业典型案例。',
    '工信部智能制造「彩电智能制造标准制定及试验验证项目」。',
    '全国质量管理小组一等成果。',
  ];
  const design = [
    '首批国家级工业设计中心。',
    '国际顶级工业设计奖大满贯：红点至尊 / 红点 / IF / IDEA / Gmark / 红星 / 当代好设计 / 金点等。',
    '中国外观设计金奖、银奖。',
  ];

  return (
    <SlideLayout title="某家电品牌概况与品牌资质">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans'] gap-5">

        {/* 顶部：6 指标条 */}
        <div className="grid grid-cols-6 gap-4 shrink-0">
          {stats.map((s, i) => (
            <div key={i} className="relative bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 flex flex-col justify-center overflow-hidden">
              <span className="absolute top-0 left-0 h-1.5 w-full bg-[#004CE5]/80" />
              <span className="text-zinc-400 text-[15px] font-bold tracking-wide mb-1.5 truncate">{s.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-[34px] font-black leading-none font-['Montserrat']">{s.value}</span>
                <span className="text-zinc-500 text-[15px] font-medium whitespace-nowrap">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 主体：左右双栏 */}
        <div className="flex-1 grid grid-cols-[600px_1fr] gap-6 min-h-0">

          {/* 左栏 */}
          <div className="flex flex-col gap-6 min-h-0">
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex-1 flex flex-col justify-between min-h-0">
              <span className="absolute top-0 left-0 h-full w-1.5 rounded-l-2xl bg-[#004CE5]" />
              <div>
                <h3 className="text-white text-[28px] font-bold mb-4 flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]" />集团概况</h3>
                <p className="text-zinc-200 text-[23px] leading-[40px] text-justify">
                  某家电品牌有限公司成立于 1988 年，深耕智能显示领域 <strong className="text-white">37 年</strong>，是推动中国显示技术从「中国制造」走向「中国智造」的头部企业，业务覆盖智能电视、显示面板、机顶盒等全产业链。
                </p>
              </div>
              <div className="pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-white/5 rounded-xl px-5 py-3.5">
                  <div className="text-white text-[20px] font-black">某家电品牌</div>
                  <div className="text-[#60A5FA] text-[17px] font-bold mt-1">港股上市主体</div>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl px-5 py-3.5">
                  <div className="text-white text-[20px] font-black">关联业务主体</div>
                  <div className="text-[#60A5FA] text-[17px] font-bold mt-1">A 股上市主体</div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-[#3a2a00]/70 to-transparent border border-amber-400/40 rounded-2xl px-7 py-6 shrink-0">
              <span className="text-amber-400 text-[15px] font-extrabold tracking-[0.25em]">品 牌 影 响</span>
              <p className="text-white text-[26px] font-bold leading-snug mt-2">
                多次承担国家级重大活动<br /><span className="text-amber-400">官方指定显示设备供应商</span>
              </p>
            </div>
          </div>

          {/* 右栏：资质荣誉 */}
          <div className="flex flex-col gap-6 min-h-0">
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex-1 flex flex-col min-h-0">
              <span className="absolute top-0 left-0 h-full w-1.5 rounded-l-2xl bg-[#60A5FA]" />
              <h3 className="text-white text-[28px] font-bold mb-5 flex items-center gap-3 shrink-0"><span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]" />智能制造实力</h3>
              <div className="flex flex-col justify-between flex-1">
                {manufacturing.map((it, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="mt-3 shrink-0 w-2 h-2 rounded-full bg-[#60A5FA]" />
                    <p className="text-zinc-200 text-[21px] leading-[32px] text-justify">{it}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex-1 flex flex-col min-h-0">
              <span className="absolute top-0 left-0 h-full w-1.5 rounded-l-2xl bg-zinc-500" />
              <h3 className="text-white text-[28px] font-bold mb-5 flex items-center gap-3 shrink-0"><span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />工业设计荣誉</h3>
              <div className="flex flex-col justify-between flex-1">
                {design.map((it, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="mt-3 shrink-0 w-2 h-2 rounded-full bg-zinc-500" />
                    <p className="text-zinc-200 text-[21px] leading-[32px] text-justify">{it}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthResearchGroup.hideHeader = true;

/* ============================================================
 * 页二：市场战绩与全球化布局
 * ==========================================================*/
export function Page_SkyworthResearchMarket() {
  const records = [
    { rank: 'TOP5', title: '全球电视品牌销售额前五', desc: '2025 Q1 跻身全球前五；稳居中国 TOP3 阵营。', hot: true },
    { rank: 'No.1', title: '百吋液晶电视中国销量第一', desc: '2024 & 2025 奥维云网；3 万元档高端大板包揽第一、第二。' },
    { rank: 'No.1', title: '艺术电视中国销量第一', desc: '2024 至今；壁纸电视持续研发十年，70w+ 用户品质之选。' },
    { rank: 'No.1', title: 'Mini LED 电视品类增速行业第一', desc: '2024 年，某家电品牌为该赛道增速领跑者。' },
    { rank: '1500万', title: '全球年出货体量（约）', desc: '国内电视年销售额约 216 亿元，稳居行业头部阵营。' },
  ];

  const global = [
    { region: '北美', title: '飞利浦品牌独家授权', desc: '2025 年获得飞利浦品牌北美市场独家授权。' },
    { region: '东南亚', title: '三大核心市场电商前列', desc: '印尼、菲律宾、越南均位居当地电商前列。' },
    { region: '欧洲', title: '松下深度战略合作', desc: '2026 年负责松下电视欧洲市场的生产、销售、营销及渠道拓展。' },
  ];

  return (
    <SlideLayout title="某家电品牌市场战绩与全球化布局">
      <div className="w-full h-full grid grid-cols-[1fr_640px] gap-7 select-none animate-fadeIn font-['MiSans']">

        {/* 左栏：战绩榜单 */}
        <div className="flex flex-col min-h-0">
          <h2 className="text-white text-[28px] font-bold border-b border-zinc-800 pb-3 mb-4 shrink-0">行业地位与销量战绩</h2>
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            {records.map((r, i) => (
              <div
                key={i}
                className={`flex-1 rounded-2xl px-6 flex items-center gap-6 min-h-0 border ${
                  r.hot ? 'bg-gradient-to-r from-[#003bb3]/60 to-transparent border-[#60A5FA]/40' : 'bg-white/[0.03] border-white/10'
                }`}
              >
                <div className="shrink-0 w-[130px] flex items-center justify-center">
                  <span className="text-[#60A5FA] text-[40px] font-black font-['Montserrat'] leading-none drop-shadow-[0_0_14px_rgba(96,165,250,0.5)] whitespace-nowrap">{r.rank}</span>
                </div>
                <div className="w-px h-[62%] bg-white/15 shrink-0" />
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-white text-[25px] font-bold leading-tight mb-1.5">{r.title}</h3>
                  <p className="text-zinc-400 text-[18px] leading-snug text-justify">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右栏：全球化布局 */}
        <div className="flex flex-col min-h-0">
          <h2 className="text-white text-[28px] font-bold border-b border-zinc-800 pb-3 mb-4 shrink-0">全球化布局</h2>
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            <div className="relative bg-gradient-to-br from-[#003bb3] to-[#001a4d] border border-[#60A5FA]/40 rounded-2xl px-7 py-6 shrink-0 overflow-hidden">
              <div className="absolute -bottom-8 -right-4 text-[130px] font-['AlimamaShuHeiTi'] text-white/10 leading-none pointer-events-none">98.8</div>
              <div className="text-blue-200/80 text-[16px] font-bold tracking-wide mb-2 relative z-10">海外市场 · 2025 财年营收</div>
              <div className="flex items-baseline gap-4 relative z-10">
                <span className="text-white text-[54px] font-black font-['Montserrat'] leading-none">98.8<span className="text-[26px] font-bold ml-1.5">亿元</span></span>
                <span className="text-[#7DF5A5] text-[24px] font-black">↑ 21.8%</span>
              </div>
            </div>
            {global.map((g, i) => (
              <div key={i} className="relative flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-6 flex items-center gap-5 min-h-0">
                <span className="shrink-0 text-[#60A5FA] text-[22px] font-extrabold w-[96px] text-center border-r border-white/10 pr-4 whitespace-nowrap">{g.region}</span>
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-white text-[23px] font-bold leading-tight mb-1.5">{g.title}</h3>
                  <p className="text-zinc-400 text-[17px] leading-snug text-justify">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
Page_SkyworthResearchMarket.hideHeader = true;

/* ============================================================
 * 页三：某家电品牌核心技术优势
 * ==========================================================*/
export function Page_SkyworthResearchTech() {
  const techs = [
    { no: '01', title: '变色龙\n显示技术平台', spec: '自研 AI 画质芯片', desc: '某家电品牌自主研发的 AI 画质芯片技术体系，逐帧优化色彩、对比与清晰度，是画质的核心大脑。' },
    { no: '02', title: 'Mini LED\n显示技术', spec: '增速行业第一', desc: '率先将 Mini LED 应用于壁纸电视，是该赛道的开创者与领跑者，2024 年品类增速行业第一。' },
    { no: '03', title: '超薄\n散热专利', spec: '418 项专利', desc: '拥有 418 项超薄散热专利，攻克超薄电视散热的业界难题，为极致贴墙的壁纸形态提供硬件底座。' },
    { no: '04', title: 'SQD\n超级量子点', spec: '110% DCI-P3', desc: '第四代量子点材料，覆盖 110% DCI-P3 广色域，带来更纯净饱满的色彩表现。' },
  ];

  const specs = [
    { label: '背光分区', value: '1344 – 11520' },
    { label: '峰值亮度', value: '3800 – 10000 尼特' },
    { label: '屏幕刷新率', value: '300 – 480 Hz' },
    { label: '色域覆盖', value: '110% DCI-P3' },
  ];

  return (
    <SlideLayout title="某家电品牌核心技术优势">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans'] gap-5">

        {/* 四列技术 */}
        <div className="flex-1 grid grid-cols-4 gap-5 min-h-0">
          {techs.map((t, i) => (
            <div
              key={i}
              className="relative rounded-[1.5rem] p-6 flex flex-col overflow-hidden border bg-white/[0.03] border-white/10"
            >
              <div className="text-[88px] font-['Montserrat'] font-black leading-none mb-4 text-white/25">{t.no}</div>
              <h3 className="text-white text-[29px] font-bold leading-tight mb-4 whitespace-pre-line">{t.title}</h3>
              <span className="self-start text-[16px] font-extrabold px-3.5 py-1.5 rounded-lg mb-5 bg-white/[0.06] text-zinc-200 border border-white/15">
                {t.spec}
              </span>
              <p className="text-[20px] leading-[31px] text-justify flex-1 text-zinc-300">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* 底部：产品力参数条 */}
        <div className="shrink-0 grid grid-cols-4 gap-5">
          {specs.map((s, i) => (
            <div key={i} className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between">
              <span className="text-zinc-400 text-[16px] font-bold tracking-wide">{s.label}</span>
              <span className="text-white text-[24px] font-black font-['Montserrat'] whitespace-nowrap">{s.value}</span>
            </div>
          ))}
        </div>

        {/* 品牌愿景 banner */}
        <div className="shrink-0 relative bg-[#004CE5]/10 border border-[#004CE5]/30 rounded-2xl px-8 py-5 flex items-center gap-7 overflow-hidden">
          <div className="shrink-0 border-r border-white/15 pr-7">
            <div className="text-zinc-400 text-[15px] font-bold tracking-widest mb-1.5">品牌愿景</div>
            <div className="text-white text-[30px] font-black font-['AlimamaShuHeiTi'] leading-tight whitespace-nowrap">技术某家电品牌 · 敢创敢为</div>
          </div>
          <p className="text-zinc-200 text-[19px] leading-[30px] text-justify flex-1">
            持续推动中国显示技术从「中国制造」走向「中国智造」。2026 下半年，某家电品牌电视将通过 <strong className="text-[#60A5FA]">GEO 优化</strong>深化 AI 时代的品牌心智布局，确保品牌在国内主流 AI 平台中的可见性与正向认知，构建面向新一代消费者的品牌认知护城河。
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}
Page_SkyworthResearchTech.hideHeader = true;

/* ============================================================
 * 页四：壁纸电视品类的 GEO 难点解析
 * ==========================================================*/
export function Page_SkyworthResearchIndustry() {
  const points = [
    {
      no: '01', title: '高客单 · 重参数，决策周期长',
      lines: [
        ['搜索表现', '亮度 / 背光分区 / 刷新率 / 价格反复交叉比对，词条高度参数化、碎片化。'],
        ['GEO 挑战', '长尾词极多，需覆盖大量参数对比与「值不值」类问答内容。'],
      ],
    },
    {
      no: '02', title: '家居美学 · 真机体验驱动决策',
      lines: [
        ['决策表现', '更信「真机好看」与家装场景口碑，纯堆参数打动力弱。'],
        ['GEO 挑战', '需要大量场景化、实拍向内容，支撑 AI 对美学的正向描述。'],
      ],
    },
    {
      no: '03', title: '「三分买、七分装」，落地易翻车',
      lines: [
        ['落地表现', '贴墙 / 墙体承重 / 排线隐藏等问题多，安装吐槽集中。'],
        ['GEO 挑战', '负面安装内容易被 AI 抓取放大，需前置科普与教程对冲。'],
      ],
    },
    {
      no: '04', title: '线上乱价 · 国补价差大',
      lines: [
        ['价格表现', '多分销渠道价格矛盾、国补前后价差悬殊。'],
        ['GEO 挑战', '易被 AI 拼出「高价低配」矛盾印象，需统一价格心智口径。'],
      ],
    },
  ];

  return (
    <SlideLayout title="壁纸电视品类的 GEO 难点解析">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <p className="text-zinc-300 text-[24px] leading-relaxed mb-5 shrink-0">
          从壁纸 / 艺术电视品类特性，以及我们服务过的同类客户经验中，总结出某家电品牌在 GEO 中可能遇到的<strong className="text-white">核心困境：</strong>
        </p>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 min-h-0">
          {points.map((p, i) => (
            <div key={i} className="relative bg-[#0a0a0a] border border-white/25 rounded-[1.5rem] p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-1 right-6 text-[120px] font-['AlimamaShuHeiTi'] text-white/[0.07] pointer-events-none leading-none">{p.no}</div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-1.5 bg-[#004CE5]" />
                <h3 className="text-white text-[30px] font-bold leading-snug tracking-wide">{p.title}</h3>
              </div>
              <div className="flex flex-col gap-4 relative z-10 max-w-[760px]">
                {p.lines.map((l, li) => (
                  <div key={li} className="flex items-start gap-3.5">
                    <span className={`shrink-0 mt-1 text-[15px] font-extrabold px-3 py-1.5 rounded ${li === 0 ? 'bg-white/[0.08] text-zinc-200 border border-white/15' : 'bg-[#004CE5]/20 text-[#93C5FD] border border-[#004CE5]/50'}`}>{l[0]}</span>
                    <p className="text-zinc-300 text-[20px] leading-[30px] text-justify flex-1">{l[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
Page_SkyworthResearchIndustry.hideHeader = true;
