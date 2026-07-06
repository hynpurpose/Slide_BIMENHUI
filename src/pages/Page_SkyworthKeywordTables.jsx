import React from 'react';
import SlideLayout from '../components/SlideLayout';
import keywordData from '../data/skyworthKeywords.json';

// 增加每页展示的词条数量，从 22 提升到 26
const ROWS_PER_PAGE = 26;

const OPT_COLUMNS = [
  { key: 'index', label: '序号', width: '4%' },
  { key: '词条', label: '词条', width: '20%' },
  { key: '词类', label: '词类', width: '7%' },
  { key: '原始来源', label: '来源', width: '7%' },
  { key: '标签类', label: '标签类', width: '9%' },
  { key: '名称', label: '名称', width: '10%' },
  { key: '名称解释', label: '名称解释', width: '43%' },
];

const MON_COLUMNS = [
  { key: 'index', label: '序号', width: '4%' },
  { key: '词条', label: '词条', width: '22%' },
  { key: '词类', label: '词类', width: '8%' },
  { key: '标签类', label: '标签类', width: '10%' },
  { key: '名称', label: '名称', width: '12%' },
  { key: '名称解释', label: '名称解释', width: '44%' },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function KeywordTablePage({ title, rows, columns, pageNum, totalPages, startIndex }) {
  return (
    <SlideLayout fullBleed>
      {/* 调整页面为 flexbox 布局，并添加统一的 px-12 pt-6 pb-6 边距，完全避免 H1 和表格重叠 */}
      <div className="w-full h-full flex flex-col text-white font-sans overflow-hidden animate-fade-in px-12 pt-6 pb-6">
        {/* 标题栏改为普通块状元素，自动撑开高度 */}
        <div className="flex items-end justify-between shrink-0 mb-4">
          <h1 className="text-[36px] font-extrabold text-white tracking-wider font-['AlimamaShuHeiTi'] select-none">
            {title}
          </h1>
          <span className="text-[18px] text-zinc-500 font-['MiSans'] pr-1 select-none">
            {pageNum} / {totalPages}
          </span>
        </div>

        {/* 表格容器自动填充剩余高度 */}
        <div className="flex-1 min-h-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="border-b border-white/15 bg-white/[0.03] shrink-0">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="py-2 px-2 text-[14px] font-bold text-zinc-400 font-['MiSans'] align-middle"
                    style={{ width: col.width }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={`${startIndex + i}-${row.词条}`}
                  className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors"
                >
                  {columns.map((col) => {
                    const value = col.key === 'index' ? startIndex + i + 1 : row[col.key];
                    const isKeyword = col.key === '词条';
                    const isExplain = col.key === '名称解释';
                    return (
                      <td
                        key={col.key}
                        className={`py-1 px-2 align-middle font-['MiSans'] leading-tight ${
                          isKeyword
                            ? 'text-[14px] text-white font-semibold'
                            : isExplain
                              ? 'text-[13px] text-zinc-400'
                              : 'text-[13px] text-zinc-300'
                        }`}
                      >
                        <span className={isExplain || isKeyword ? 'line-clamp-1' : ''}>{value}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
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
