import React from 'react';
import SlideLayout from '../components/SlideLayout';
import rowsData from '../data/speakWithActionsDeliveryRows.json';

const ROWS_PER_PAGE = 10;

const COLUMNS = [
  { key: 'id', label: '序号', width: '5%' },
  { key: 'type', label: '类型', width: '9%' },
  { key: 'entry', label: '词条', width: '30%' },
  { key: 'platform', label: '平台', width: '11%' },
  { key: 'before', label: '投放前', width: '13%' },
  { key: 'change', label: '变化', width: '14%' },
  { key: 'after', label: '投放后', width: '18%' },
];

const gridTemplateColumns = COLUMNS.map((c) => c.width).join(' ');

function changeClass(change) {
  if (change === '新增提及' || change.startsWith('上升')) return 'text-[#4ADE80] font-bold';
  if (change.startsWith('下降') || change === '丢失提及') return 'text-[#F87171] font-bold';
  if (change === '持平') return 'text-zinc-400';
  return 'text-[#FBBF24] font-semibold';
}

function rankClass(text) {
  if (text === '未提及') return 'text-zinc-500';
  if (text === '第 1 名') return 'text-[#4ADE80] font-black';
  return 'text-white font-bold';
}

function Cell({ colKey, value }) {
  if (colKey === 'entry') {
    return (
      <span className="block text-[22px] leading-snug font-bold text-white font-['MiSans'] truncate" title={value}>
        {value}
      </span>
    );
  }
  if (colKey === 'change') {
    return <span className={`text-[20px] font-['MiSans'] whitespace-nowrap ${changeClass(value)}`}>{value}</span>;
  }
  if (colKey === 'before' || colKey === 'after') {
    return <span className={`text-[20px] font-['MiSans'] whitespace-nowrap ${rankClass(value)}`}>{value}</span>;
  }
  if (colKey === 'type') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[16px] font-semibold font-['MiSans'] bg-[#004CE5]/15 text-[#8FBFFF] border border-[#004CE5]/25 whitespace-nowrap">
        {value}
      </span>
    );
  }
  return <span className="text-[20px] text-zinc-300 font-['MiSans'] whitespace-nowrap">{value}</span>;
}

function DeliveryTablePage({ rows, pageNum, totalPages, startIndex, totalRows }) {
  return (
    <SlideLayout title="用行动说话" subtitle={`投放效果对照 · 6/28 基准 vs 7/6（${pageNum}/${totalPages}）`} hideHeaderLeft>
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#004CE5]/5 blur-[140px] -right-40 -bottom-40 pointer-events-none" />

      <div className="w-full h-full relative z-10 select-none animate-fadeIn flex flex-col px-2 pt-1 pb-2">
        <div className="flex items-end justify-between shrink-0 mb-4 px-2">
          <span className="text-[18px] text-zinc-500 font-['MiSans']">
            共 {totalRows} 条 · 本页 {startIndex + 1}–{startIndex + rows.length}
          </span>
          <span className="inline-flex items-center h-[34px] px-4 rounded-full border border-white/10 bg-white/[0.03] text-[17px] text-zinc-400 font-['MiSans'] tabular-nums">
            {pageNum} / {totalPages}
          </span>
        </div>

        <div className="flex-1 min-h-0 rounded-2xl border border-zinc-800/70 bg-zinc-950/35 overflow-hidden flex flex-col">
          <div
            className="grid shrink-0 h-[48px] items-center bg-white/[0.05] border-b border-white/10"
            style={{ gridTemplateColumns }}
          >
            {COLUMNS.map((col) => (
              <div
                key={col.key}
                className="px-3 text-[16px] font-bold text-zinc-400 tracking-[0.08em] font-['MiSans'] select-none"
              >
                {col.label}
              </div>
            ))}
          </div>

          <div className="flex-1 min-h-0 flex flex-col">
            {rows.map((row, i) => (
              <div
                key={`${startIndex + i}-${row.entry}-${row.platform}`}
                className={`grid items-center min-h-0 border-b border-white/[0.04] last:border-b-0 ${i % 2 === 1 ? 'bg-white/[0.025]' : ''}`}
                style={{ gridTemplateColumns, height: `${100 / ROWS_PER_PAGE}%` }}
              >
                {COLUMNS.map((col) => (
                  <div key={col.key} className="px-3 min-w-0">
                    <Cell colKey={col.key} value={row[col.key]} />
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

function createPage(pageIndex, chunk) {
  function Page() {
    return (
      <DeliveryTablePage
        rows={chunk}
        pageNum={pageIndex + 1}
        totalPages={Math.ceil(rowsData.length / ROWS_PER_PAGE)}
        startIndex={pageIndex * ROWS_PER_PAGE}
        totalRows={rowsData.length}
      />
    );
  }
  Page.hideHeader = true;
  return Page;
}

const chunks = Array.from({ length: Math.ceil(rowsData.length / ROWS_PER_PAGE) }, (_, i) =>
  rowsData.slice(i * ROWS_PER_PAGE, (i + 1) * ROWS_PER_PAGE),
);

export const Page_SkyworthSpeakWithActions_3 = createPage(0, chunks[0]);
export const Page_SkyworthSpeakWithActions_4 = createPage(1, chunks[1]);

export default Page_SkyworthSpeakWithActions_3;
