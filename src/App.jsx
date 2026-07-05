import React, { useState, useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import SlideContainer from './components/SlideContainer';
import SlideEditor from './components/SlideEditor';
import CoverSlide from './templates/CoverSlide';
import TOCSlide from './templates/TOCSlide';
import Page_ProposalChapterCover from './pages/Page_ProposalChapterCover';
import ChapterPage from './components/ChapterPage';
import { flatSlides, parsedConfig } from './config/parseConfig';
import initialOrder from './slideOrder.json';

const slideDictionary = {};
flatSlides.forEach((slide) => {
  let component;
  switch (slide.type) {
    case 'cover':
      component = (
        <CoverSlide
          key={slide.id}
          bgImage={slide.backgroundImage}
          brand={slide.brand}
          subtitle={slide.subtitle}
          date={slide.date}
        />
      );
      break;
    case 'toc':
      component = <TOCSlide key={slide.id} bgImage={slide.backgroundImage} title={slide.name} menuText={slide.menuText} brandLabel={slide.brandLabel} serviceGuide={slide.serviceGuide} />;
      break;
    case 'chapter-cover':
      component = (
        <Page_ProposalChapterCover
          key={slide.id}
          bgImage={slide.backgroundImage}
          title={slide.name}
          subtitle={slide.subtitle}
          coverTitle={slide.coverTitle}
          coverSubtitle={slide.coverSubtitle}
          coverLabel={slide.coverLabel}
          brandLabel={slide.brandLabel || parsedConfig.toc?.brandLabel}
          chapterIndex={slide.chapterIndex}
          chapters={parsedConfig.chapters}
        />
      );
      break;
    case 'content':
      component = (
        <ChapterPage
          key={slide.id}
          chapterIndex={slide.chapterIndex}
          sectionIndex={slide.sectionIndex}
          pageIndex={slide.pageIndex}
          component={slide.component}
          title={slide.name}
          hideHeader={slide.hideHeader}
        />
      );
      break;
  }

  let variants = null;
  if (slide.type === 'content' && slide.variants) {
    variants = slide.variants.map((Comp, i) => (
      <ChapterPage
        key={`${slide.id}-v${i}`}
        chapterIndex={slide.chapterIndex}
        sectionIndex={slide.sectionIndex}
        pageIndex={slide.pageIndex}
        component={Comp}
        title={slide.name}
        hideHeader={slide.hideHeader}
      />
    ));
  }

  slideDictionary[slide.id] = { name: slide.name, type: slide.type, component, variants };
});

const defaultOrder = flatSlides.map((s) => s.id);
const SLIDE_POSITION_KEY = 'slide-current-id';
const COLLAPSED_CHAPTERS_KEY = 'slide-collapsed-chapters';

function getInitialCollapsedChapters() {
  try {
    const saved = localStorage.getItem(COLLAPSED_CHAPTERS_KEY);
    if (saved) return new Set(JSON.parse(saved));
  } catch {
    // localStorage unavailable or corrupted data
  }
  return new Set();
}

function getInitialOrder() {
  const validIds = new Set(Object.keys(slideDictionary));
  const initialSet = new Set(initialOrder);

  // 过滤掉已从 config 删除的旧页面
  const filteredInitial = initialOrder.filter((id) => validIds.has(id));

  // 找出 config 中新增但不在已保存顺序里的页面
  const newSlides = defaultOrder.filter((id) => !initialSet.has(id));

  if (newSlides.length === 0) return filteredInitial;

  // 将新页面插入到它们在 defaultOrder 中自然位置的对应位置
  const result = [...filteredInitial];
  for (const newId of newSlides) {
    const defaultIndex = defaultOrder.indexOf(newId);
    let insertAfterIndex = -1;
    for (let i = defaultIndex - 1; i >= 0; i--) {
      const existingIndex = result.indexOf(defaultOrder[i]);
      if (existingIndex !== -1) {
        insertAfterIndex = existingIndex;
        break;
      }
    }
    result.splice(insertAfterIndex + 1, 0, newId);
  }

  return result;
}

function getInitialSlideIndex(order) {
  try {
    const savedId = sessionStorage.getItem(SLIDE_POSITION_KEY);
    if (savedId) {
      const index = order.indexOf(savedId);
      if (index !== -1) return index;
    }
  } catch {
    // sessionStorage unavailable
  }
  return 0;
}

export default function App() {
  const [slideOrder, setSlideOrder] = useState(getInitialOrder);
  const [currentSlide, setCurrentSlide] = useState(() =>
    getInitialSlideIndex(getInitialOrder())
  );
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);
  const [tooltip, setTooltip] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [collapsedChapters, setCollapsedChapters] = useState(
    getInitialCollapsedChapters
  );

  const slideRootRef = useRef(null);
  const savedOrderRef = useRef(slideOrder);
  const isOrderDirty =
    JSON.stringify(slideOrder) !== JSON.stringify(savedOrderRef.current);

  const slideData = slideOrder
    .map((id) => slideDictionary[id])
    .filter(Boolean);

  // Keynote 式导航分组：章节封面为父级，其后的内容页为子级。
  // 折叠时整个章节（封面 + 子页）合并成一个可拖拽块，页码编号保持全局不变。
  const navBlocks = [];
  {
    let i = 0;
    while (i < slideData.length) {
      const id = slideOrder[i];
      const slide = slideData[i];
      if (slide.type === 'chapter-cover') {
        let end = i + 1;
        while (end < slideData.length && slideData[end].type === 'content')
          end++;
        const collapsed = collapsedChapters.has(id);
        navBlocks.push({
          id,
          index: i,
          slide,
          isParent: true,
          collapsed,
          level: 0,
          childCount: end - i - 1,
          blockIds: collapsed ? slideOrder.slice(i, end) : [id],
        });
        if (!collapsed) {
          for (let j = i + 1; j < end; j++) {
            navBlocks.push({
              id: slideOrder[j],
              index: j,
              slide: slideData[j],
              isParent: false,
              collapsed: false,
              level: 1,
              childCount: 0,
              blockIds: [slideOrder[j]],
            });
          }
        }
        i = end;
      } else {
        navBlocks.push({
          id,
          index: i,
          slide,
          isParent: false,
          collapsed: false,
          level: 0,
          childCount: 0,
          blockIds: [id],
        });
        i++;
      }
    }
  }

  const toggleChapterCollapse = (id) => {
    setCollapsedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(COLLAPSED_CHAPTERS_KEY, JSON.stringify([...next]));
      } catch {
        // localStorage unavailable
      }
      return next;
    });
  };

  const currentSlideData = slideData[currentSlide];
  const currentVariants = currentSlideData?.variants || null;
  const hasVariants = !!currentVariants && currentVariants.length > 1;
  const safeVariantIndex = hasVariants
    ? Math.min(variantIndex, currentVariants.length - 1)
    : 0;

  const handleNextSlide = () => {
    if (editMode) return;
    setCurrentSlide((prev) => Math.min(prev + 1, slideData.length - 1));
  };

  const handlePrevSlide = () => {
    if (editMode) return;
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      )
        return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideData.length, editMode]);

  useEffect(() => {
    setVariantIndex(0);
  }, [currentSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const id = slideOrder[currentSlide];
    if (!id) return;
    try {
      sessionStorage.setItem(SLIDE_POSITION_KEY, id);
    } catch {
      // sessionStorage unavailable
    }
  }, [currentSlide, slideOrder]);

  const jumpToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 拖拽以“块”为单位：折叠的章节封面会带着其所有子页一起移动
  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;

    const currentId = slideOrder[currentSlide];
    const blocks = navBlocks.map((b) => b.blockIds);
    const [moved] = blocks.splice(result.source.index, 1);
    blocks.splice(result.destination.index, 0, moved);
    const newOrder = blocks.flat();

    setSlideOrder(newOrder);

    const newIndex = newOrder.indexOf(currentId);
    if (newIndex !== -1) setCurrentSlide(newIndex);
  };

  const saveOrder = async () => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const response = await fetch('/api/save-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: slideOrder }),
      });
      if (!response.ok) throw new Error('Save failed');

      setSaveStatus('success');
      savedOrderRef.current = [...slideOrder];
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (err) {
      console.error(err);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none flex bg-zinc-900">
      {/* Instant custom tooltip for full slide titles */}
      {tooltip && (
        <div
          className="fixed z-[100] pointer-events-none px-4 py-2.5 rounded-lg bg-zinc-800 text-white text-lg font-medium shadow-2xl border border-zinc-700 -translate-y-1/2 max-w-md whitespace-normal break-words"
          style={{ top: tooltip.top, left: tooltip.left }}
        >
          {tooltip.text}
        </div>
      )}

      {/* TOC Sidebar (Keynote-style navigator, side-by-side) */}
      <aside
        className={`h-full bg-zinc-950 border-r border-zinc-800/50 flex-shrink-0 overflow-hidden transition-[width] duration-300 ease-out ${
          isMenuOpen && !isFullscreen ? 'w-64 sm:w-80' : 'w-0'
        }`}
      >
        <div className="w-64 sm:w-80 h-full p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-zinc-100 font-medium tracking-widest text-sm uppercase">
              目录面板
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors p-2 -mr-2"
              title="收起目录"
            >
              ✕
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="toc-list">
              {(provided) => (
                <nav
                  className="flex-grow flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar pb-2"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {navBlocks.map((block, blockIndex) => {
                    const isActive =
                      currentSlide === block.index ||
                      (block.isParent &&
                        block.collapsed &&
                        currentSlide > block.index &&
                        currentSlide <= block.index + block.childCount);

                    return (
                      <Draggable
                        key={block.id}
                        draggableId={block.id}
                        index={blockIndex}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`flex items-center rounded-xl transition-all duration-200 ${
                              block.level > 0 ? 'ml-6' : ''
                            } ${
                              snapshot.isDragging
                                ? 'bg-zinc-800 shadow-xl opacity-90 z-50 scale-[1.02]'
                                : isActive
                                  ? 'bg-zinc-800 text-white font-medium'
                                  : 'text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200 cursor-pointer'
                            }`}
                            onClick={() => jumpToSlide(block.index)}
                            onMouseEnter={(e) => {
                              if (snapshot.isDragging) return;
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              setTooltip({
                                text: block.slide.name,
                                top: rect.top + rect.height / 2,
                                left: rect.right + 12,
                              });
                            }}
                            onMouseLeave={() => setTooltip(null)}
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="p-3 text-zinc-600 hover:text-zinc-300 cursor-grab active:cursor-grabbing flex items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                              </svg>
                            </div>

                            {block.isParent && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleChapterCollapse(block.id);
                                }}
                                className="p-1 -ml-1 mr-1 rounded text-zinc-500 hover:text-white hover:bg-zinc-700/60 transition-colors flex items-center justify-center"
                                title={block.collapsed ? '展开章节' : '折叠章节'}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`transition-transform duration-200 ${
                                    block.collapsed ? '' : 'rotate-90'
                                  }`}
                                >
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </button>
                            )}

                            <div className="py-3 pr-4 flex-grow truncate flex items-center">
                              <span className="text-sm text-white opacity-90 mr-3 font-mono bg-zinc-900 px-2 py-0.5 rounded">
                                {String(block.index + 1).padStart(2, '0')}
                              </span>
                              <span className="truncate">
                                {block.slide.name}
                              </span>
                              {block.isParent && block.collapsed && (
                                <span className="ml-2 flex-shrink-0 text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded-full">
                                  +{block.childCount}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </nav>
              )}
            </Droppable>
          </DragDropContext>

          {/* Save button area */}
          <div className="pt-6 mt-2">
            <div className="flex flex-col gap-3">
              {isOrderDirty && (
                <button
                  onClick={saveOrder}
                  disabled={isSaving}
                  className={`w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    saveStatus === 'success'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                      : saveStatus === 'error'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20'
                  }`}
                >
                  {isSaving ? (
                    <span className="animate-pulse">保存中...</span>
                  ) : saveStatus === 'success' ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      保存成功
                    </>
                  ) : saveStatus === 'error' ? (
                    '保存失败'
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                      </svg>
                      保存目录修改
                    </>
                  )}
                </button>
              )}

              <p className="text-[10px] text-zinc-600 font-mono tracking-wide text-center">
                SLIDE ENGINE v1.0
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main slide area */}
      <div
        onClick={handleNextSlide}
        className="flex-1 relative overflow-hidden cursor-pointer"
      >
        <SlideContainer>
          <div
            key={`${currentSlide}-${safeVariantIndex}`}
            ref={slideRootRef}
            className="w-full h-full"
          >
            {hasVariants
              ? currentVariants[safeVariantIndex]
              : currentSlideData?.component}
          </div>
        </SlideContainer>

        {/* Version switcher (shown only when this page has multiple versions) */}
        {hasVariants && !isFullscreen && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVariantIndex(
                  (safeVariantIndex - 1 + currentVariants.length) %
                    currentVariants.length
                );
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-white transition-colors backdrop-blur-md"
              title="上一个版本"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setVariantIndex(
                  (safeVariantIndex + 1) % currentVariants.length
                );
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-white transition-colors backdrop-blur-md"
              title="下一个版本"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div
              className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/70 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white text-sm font-medium">
                版本 {safeVariantIndex + 1} / {currentVariants.length}
              </span>
              <div className="flex items-center gap-1.5">
                {currentVariants.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setVariantIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === safeVariantIndex
                        ? 'bg-white'
                        : 'bg-zinc-600 hover:bg-zinc-400'
                    }`}
                    title={`版本 ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Toggle navigator button (only when hidden) */}
        {!isMenuOpen && !isFullscreen && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(true);
            }}
            className="absolute top-4 left-4 sm:top-8 sm:left-8 z-50 p-3 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors backdrop-blur-md group"
            title="打开目录"
          >
            <div className="w-5 h-4 flex flex-col justify-between opacity-70 group-hover:opacity-100">
              <span className="w-full h-[2px] bg-current rounded-full" />
              <span className="w-full h-[2px] bg-current rounded-full" />
              <span className="w-full h-[2px] bg-current rounded-full" />
            </div>
          </button>
        )}

        {/* Slide counter */}
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-40 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md text-zinc-400 text-xs font-mono pointer-events-none">
          {currentSlide + 1} / {slideData.length}
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen().catch(() => {});
            } else {
              if (document.exitFullscreen) document.exitFullscreen();
            }
          }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors backdrop-blur-md opacity-20 hover:opacity-100 group pointer-events-auto"
          title="全屏演示"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>

        {/* 编辑模式开关 */}
        {!isFullscreen && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditMode((v) => !v);
            }}
            className={`absolute bottom-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors backdrop-blur-md text-sm font-medium ${
              editMode
                ? 'right-[356px] bg-blue-600 hover:bg-blue-500 text-white'
                : 'right-16 sm:right-20 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
            }`}
            title="双击文字即可编辑位置"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            {editMode ? '退出编辑' : '编辑模式'}
          </button>
        )}
      </div>

      {/* 可视化编辑器（双击文字 → 右侧面板调位置） */}
      <SlideEditor
        enabled={editMode && !isFullscreen}
        slideId={slideOrder[currentSlide]}
        slideKey={`${currentSlide}-${safeVariantIndex}`}
        rootRef={slideRootRef}
      />
    </div>
  );
}
