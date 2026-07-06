import React from 'react';
import SlideLayout from '../components/SlideLayout';
import keywordData from '../data/skyworthKeywords.json';

const ROWS_PER_PAGE = 26;

const OPT_COLUMNS = [
  { key: 'index', label: '序号', width: '4.5%' },
  { key: '词条', label: '词条', width: '22%' },
  { key: '词类', label: '词类', width: '8.5%' },
  { key: '原始来源', label: '来源', width: '6.5%' },
  { key: '标签类', label: '标签类', width: '8%' },
  { key: '名称', label: '名称', width: '13.5%' },
  { key: '名称解释', label: '名称解释', width: '37%' },
];

const MON_COLUMNS = [
  { key: 'index', label: '序号', width: '4.5%' },
  { key: '词条', label: '词条', width: '23%' },
  { key: '词类', label: '词类', width: '9%' },
  { key: '标签类', label: '标签类', width: '9%' },
  { key: '名称', label: '名称', width: '14.5%' },
  { key: '名称解释', label: '名称解释', width: '40%' },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function Cell({ colKey, value }) {
  if (colKey === 'index') {
    return (
      <span className="text-[13px] text-zinc-600 font-mono tabular-nums">
        {String(value).padStart(3, '0')}
      </span>
    );
  }
  if (colKey === '词条') {
    return (
      <span className="block text-[15px] text-white font-semibold font-['MiSans'] truncate">
        {value}
      </span>
    );
  }
  if (colKey === '词类' || colKey === '标签类') {
    return (
      <span className="inline-flex items-center max-w-full h-[22px] px-2.5 rounded-full border border-white/10 bg-white/[0.05] text-[12px] leading-none text-zinc-300 font-['MiSans'] whitespace-nowrap overflow-hidden">
        {value}
      </span>
    );
  }
  if (colKey === '名称解释') {
    return (
      <span className="block text-[13px] text-zinc-500 font-['MiSans'] truncate">
        {value}
      </span>
    );
  }
  return (
    <span className="block text-[13px] text-zinc-300 font-['MiSans'] truncate">
      {value}
    </span>
  );
}

function KeywordTablePage({ title, rows, columns, pageNum, totalPages, startIndex, totalRows }) {
  const gridTemplateColumns = columns.map((c) => c.width).join(' ');

  return (
    <SlideLayout fullBleed>
      <div className="w-full h-full flex flex-col text-white font-sans overflow-hidden animate-fade-in px-12 pt-6 pb-6">
        {/* 标题栏 */}
        <div className="flex items-end justify-between shrink-0 mb-5">
          <div className="flex items-center gap-5">
            <div className="w-[6px] h-[32px] rounded-full bg-[#004CE5]" />
            <h1 className="text-[36px] leading-none font-extrabold text-white tracking-wider font-['AlimamaShuHeiTi'] select-none">
              {title}
            </h1>
            <span className="text-[15px] leading-none text-zinc-500 font-['MiSans'] select-none pt-2">
              共 {totalRows} 条 · 本页 {startIndex + 1}–{startIndex + rows.length}
            </span>
          </div>
          <span className="inline-flex items-center h-[32px] px-4 rounded-full border border-white/10 bg-white/[0.03] text-[15px] text-zinc-400 font-['MiSans'] tabular-nums select-none">
            {pageNum} / {totalPages}
          </span>
        </div>

        {/* 表格容器 */}
        <div className="flex-1 min-h-0 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col">
          {/* 表头 */}
          <div
            className="grid shrink-0 h-[44px] items-center bg-white/[0.05] border-b border-white/10"
            style={{ gridTemplateColumns }}
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className="px-3 text-[13px] font-bold text-zinc-400 tracking-[0.1em] font-['MiSans'] select-none"
              >
                {col.label}
              </div>
            ))}
          </div>

          {/* 数据行：每行等高，整页刚好填满，不裁切 */}
          <div className="flex-1 min-h-0 flex flex-col">
            {rows.map((row, i) => (
              <div
                key={`${startIndex + i}-${row.词条}`}
                className={`grid items-center min-h-0 ${i % 2 === 1 ? 'bg-white/[0.025]' : ''}`}
                style={{ gridTemplateColumns, height: `${100 / ROWS_PER_PAGE}%` }}
              >
                {columns.map((col) => (
                  <div key={col.key} className="px-3 min-w-0">
                    <Cell
                      colKey={col.key}
                      value={col.key === 'index' ? startIndex + i + 1 : row[col.key]}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function createPages(sheetKey, sheetLabel, columns, rows) {
  const chunks = chunkArray(rows, ROWS_PER_PAGE);
  return chunks.map((chunk, pageIndex) => {
    function Page() {
      return (
        <KeywordTablePage
          title={`${sheetLabel}词条清单`}
          rows={chunk}
          columns={columns}
          pageNum={pageIndex + 1}
          totalPages={chunks.length}
          startIndex={pageIndex * ROWS_PER_PAGE}
          totalRows={rows.length}
        />
      );
    }
    Page.hideHeader = true;
    Page.displayName = `Page_SkyworthKeyword_${sheetKey}_${pageIndex + 1}`;
    return Page;
  });
}

export const OPT_KEYWORD_PAGES = createPages(
  'opt',
  '优化词',
  OPT_COLUMNS,
  keywordData.optimization,
);

export const MON_KEYWORD_PAGES = createPages(
  'mon',
  '监测词',
  MON_COLUMNS,
  keywordData.monitor,
);
