import React, { useState, useEffect, useRef, useCallback } from 'react';

const STORAGE_KEY = 'slide-visual-edits';
const SLIDE_WIDTH = 1920;

/* ------------------------------------------------------------------ */
/* 持久化：localStorage 里按 slideId -> path -> override 存储             */
/* ------------------------------------------------------------------ */
function loadAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

/* ------------------------------------------------------------------ */
/* DOM 路径：把选中元素编码成相对 slide 根节点的 child index 链           */
/* ------------------------------------------------------------------ */
function getPath(root, el) {
  const path = [];
  let node = el;
  while (node && node !== root) {
    const parent = node.parentElement;
    if (!parent) return null;
    const index = Array.prototype.indexOf.call(parent.children, node);
    path.unshift(index);
    node = parent;
  }
  return node === root ? path.join('.') : null;
}
function resolvePath(root, path) {
  if (!root) return null;
  if (path === '') return root;
  let node = root;
  for (const seg of path.split('.')) {
    if (!node) return null;
    node = node.children[Number(seg)];
  }
  return node || null;
}

/* ------------------------------------------------------------------ */
/* 颜色工具                                                             */
/* ------------------------------------------------------------------ */
function rgbToHex(rgb) {
  const m = rgb && rgb.match(/\d+/g);
  if (!m || m.length < 3) return '#ffffff';
  return (
    '#' +
    m
      .slice(0, 3)
      .map((n) => Number(n).toString(16).padStart(2, '0'))
      .join('')
  );
}

/* 记录元素被修改前的原始 style 和内容，用于「重置」还原到源码状态 */
const originals = new WeakMap();
function ensureOriginal(el) {
  if (!originals.has(el)) {
    originals.set(el, {
      style: el.getAttribute('style'),
      html: el.innerHTML,
    });
  }
}

/* 把一个 override 应用到元素上（只写内联样式/文本，不动源码） */
function applyOverride(el, o) {
  if (!el || !o) return;
  ensureOriginal(el);
  const dx = Number(o.dx) || 0;
  const dy = Number(o.dy) || 0;
  el.style.translate = dx || dy ? `${dx}px ${dy}px` : '';
  el.style.rotate = o.rotate ? `${o.rotate}deg` : '';
  if (o.fontSize) el.style.fontSize = `${o.fontSize}px`;
  if (o.color) el.style.color = o.color;
  if (o.letterSpacing !== undefined && o.letterSpacing !== '')
    el.style.letterSpacing = `${o.letterSpacing}px`;
  // 只有文案真的被改过才写入（避免把嵌套的 span 格式意外压平）
  if (typeof o.text === 'string' && el.textContent !== o.text) {
    el.textContent = o.text;
  }
}

/* 把元素还原到源码状态并清掉记录 */
function restoreOriginal(el) {
  if (!el) return;
  if (originals.has(el)) {
    const orig = originals.get(el);
    if (orig.style === null) el.removeAttribute('style');
    else el.setAttribute('style', orig.style);
    el.innerHTML = orig.html;
    originals.delete(el);
  } else {
    el.style.translate = '';
    el.style.rotate = '';
  }
}

/* 简短描述一个元素（给面板标题用） */
function describe(el) {
  if (!el) return '';
  const tag = el.tagName.toLowerCase();
  const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
  return text ? `${tag} · ${text.slice(0, 24)}${text.length > 24 ? '…' : ''}` : tag;
}

export default function SlideEditor({ enabled, slideId, slideKey, rootRef }) {
  const [selected, setSelected] = useState(null); // DOM 元素
  const [ov, setOv] = useState(null); // 当前选中元素的 override 数据
  const [box, setBox] = useState(null); // 高亮框在屏幕上的位置
  const [prefill, setPrefill] = useState({ fontSize: '', color: '#ffffff' });
  const [inlineEditing, setInlineEditing] = useState(false); // 直接在画面中改字
  const dragRef = useRef(null);
  const patchRef = useRef(null);

  /* 读取 / 写入当前 slide 的全部 override */
  const getSlideEdits = useCallback(() => loadAll()[slideId] || {}, [slideId]);
  const setElementEdit = useCallback(
    (path, override) => {
      const all = loadAll();
      if (!all[slideId]) all[slideId] = {};
      if (override) all[slideId][path] = override;
      else {
        delete all[slideId][path];
        if (Object.keys(all[slideId]).length === 0) delete all[slideId];
      }
      saveAll(all);
    },
    [slideId]
  );

  /* 每次切换页面 / 变体后，把已保存的调整重新应用到新渲染出的 DOM 上 */
  useEffect(() => {
    setSelected(null);
    setOv(null);
    setBox(null);
    const raf = requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;
      const edits = getSlideEdits();
      Object.entries(edits).forEach(([path, override]) => {
        const el = resolvePath(root, path);
        if (el) applyOverride(el, override);
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [slideKey, slideId, rootRef, getSlideEdits]);

  /* 计算当前缩放比例（slide 用 zoom 缩放） */
  const getScale = useCallback(() => {
    const root = rootRef.current;
    if (!root) return 1;
    const rect = root.getBoundingClientRect();
    return rect.width / SLIDE_WIDTH || 1;
  }, [rootRef]);

  /* 更新高亮框位置 */
  const updateBox = useCallback((el) => {
    if (!el) return setBox(null);
    const r = el.getBoundingClientRect();
    setBox({ left: r.left, top: r.top, width: r.width, height: r.height });
  }, []);

  /* 双击选中元素 */
  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    if (!root) return;

    const onDblClick = (e) => {
      const el = e.target;
      if (!(el instanceof HTMLElement) || !root.contains(el)) return;
      e.preventDefault();
      e.stopPropagation();

      const path = getPath(root, el);
      if (path === null) return;

      const edits = getSlideEdits();
      const existing = edits[path] || {};
      const cs = getComputedStyle(el);
      setPrefill({
        fontSize: Math.round(parseFloat(cs.fontSize)) || '',
        color: rgbToHex(cs.color),
      });
      setInlineEditing(false);
      setSelected(el);
      setOv({
        path,
        dx: existing.dx || 0,
        dy: existing.dy || 0,
        rotate: existing.rotate || 0,
        fontSize: existing.fontSize || '',
        color: existing.color || '',
        letterSpacing: existing.letterSpacing ?? '',
        // 文案：已有改动就用改过的；否则取当前文字。_baseText 用来判断是否真的改过
        text: existing.text !== undefined ? existing.text : el.textContent,
        _baseText: existing.text !== undefined ? null : el.textContent,
      });
      updateBox(el);
    };

    root.addEventListener('dblclick', onDblClick, true);
    return () => root.removeEventListener('dblclick', onDblClick, true);
  }, [enabled, slideKey, rootRef, getSlideEdits, updateBox]);

  /* 选中元素后，同步高亮框（窗口尺寸变化 / 滚动） */
  useEffect(() => {
    if (!selected) return;
    const sync = () => updateBox(selected);
    window.addEventListener('resize', sync);
    window.addEventListener('scroll', sync, true);
    return () => {
      window.removeEventListener('resize', sync);
      window.removeEventListener('scroll', sync, true);
    };
  }, [selected, updateBox]);

  /* 退出编辑模式：清掉高亮，但保留已应用的样式 */
  useEffect(() => {
    if (!enabled) {
      setSelected(null);
      setOv(null);
      setBox(null);
      setInlineEditing(false);
    }
  }, [enabled]);

  /* 应用并持久化一个字段的变化 */
  const patch = useCallback(
    (changes) => {
      if (!selected || !ov) return;
      const next = { ...ov, ...changes };
      setOv(next);

      // 文案是否真的被改过（没改过就不写 textContent，避免压平内部格式）
      const textActive =
        next._baseText === null ||
        (typeof next.text === 'string' && next.text !== next._baseText);

      applyOverride(selected, {
        ...next,
        text: textActive ? next.text : undefined,
      });
      updateBox(selected);

      // 只有真正有调整时才写入存储
      const meaningful =
        next.dx || next.dy || next.rotate || next.fontSize || next.color ||
        (next.letterSpacing !== '' && next.letterSpacing !== undefined) ||
        textActive;
      setElementEdit(
        ov.path,
        meaningful
          ? {
              dx: Number(next.dx) || 0,
              dy: Number(next.dy) || 0,
              rotate: Number(next.rotate) || 0,
              fontSize: next.fontSize || '',
              color: next.color || '',
              letterSpacing: next.letterSpacing,
              ...(textActive ? { text: next.text } : {}),
            }
          : null
      );
    },
    [selected, ov, setElementEdit, updateBox]
  );
  patchRef.current = patch;

  /* 拖拽高亮框来移动元素 */
  const onBoxPointerDown = (e) => {
    if (!selected || !ov) return;
    e.preventDefault();
    e.stopPropagation();
    const scale = getScale();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseDx: Number(ov.dx) || 0,
      baseDy: Number(ov.dy) || 0,
      scale,
    };

    const onMove = (ev) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = Math.round(d.baseDx + (ev.clientX - d.startX) / d.scale);
      const dy = Math.round(d.baseDy + (ev.clientY - d.startY) / d.scale);
      patch({ dx, dy });
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  /* 键盘微调（选中元素时，方向键移动，Shift 步长 10） */
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      // 正在画面里直接改字：Esc 退出改字，其余按键交给输入光标
      if (inlineEditing) {
        if (e.key === 'Escape') {
          setInlineEditing(false);
          e.preventDefault();
          e.stopPropagation();
        }
        return;
      }
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      )
        return;
      const step = e.shiftKey ? 10 : 1;
      let handled = true;
      if (e.key === 'ArrowLeft') patch({ dx: (Number(ov.dx) || 0) - step });
      else if (e.key === 'ArrowRight') patch({ dx: (Number(ov.dx) || 0) + step });
      else if (e.key === 'ArrowUp') patch({ dy: (Number(ov.dy) || 0) - step });
      else if (e.key === 'ArrowDown') patch({ dy: (Number(ov.dy) || 0) + step });
      else if (e.key === 'Escape') {
        setSelected(null);
        setOv(null);
        setBox(null);
      } else handled = false;
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [selected, ov, patch, inlineEditing]);

  /* 画面内直接编辑文字：给选中元素开 contentEditable，输入实时保存 */
  useEffect(() => {
    if (!inlineEditing || !selected) return;
    ensureOriginal(selected);
    try {
      selected.contentEditable = 'plaintext-only';
    } catch {
      selected.contentEditable = 'true';
    }
    // 上层容器有 select-none，需要临时放开才能出现光标
    const prevUserSelect = selected.style.userSelect;
    selected.style.userSelect = 'text';
    selected.style.cursor = 'text';
    selected.focus();
    // 光标移到文字末尾
    const range = document.createRange();
    range.selectNodeContents(selected);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    const onInput = () => patchRef.current({ text: selected.textContent });
    selected.addEventListener('input', onInput);
    return () => {
      selected.removeEventListener('input', onInput);
      selected.removeAttribute('contenteditable');
      selected.style.userSelect = prevUserSelect;
      selected.style.cursor = '';
    };
  }, [inlineEditing, selected]);

  const resetElement = () => {
    if (!selected || !ov) return;
    setInlineEditing(false);
    restoreOriginal(selected);
    setElementEdit(ov.path, null);
    setSelected(null);
    setOv(null);
    setBox(null);
  };

  const clearSlide = () => {
    const root = rootRef.current;
    const edits = getSlideEdits();
    if (root) {
      Object.keys(edits).forEach((path) => {
        const el = resolvePath(root, path);
        if (el) restoreOriginal(el);
      });
    }
    const all = loadAll();
    delete all[slideId];
    saveAll(all);
    setInlineEditing(false);
    setSelected(null);
    setOv(null);
    setBox(null);
  };

  const copyCss = () => {
    if (!ov) return;
    const lines = [];
    if (ov.dx || ov.dy) lines.push(`translate: ${Number(ov.dx) || 0}px ${Number(ov.dy) || 0}px;`);
    if (ov.rotate) lines.push(`rotate: ${ov.rotate}deg;`);
    if (ov.fontSize) lines.push(`font-size: ${ov.fontSize}px;`);
    if (ov.color) lines.push(`color: ${ov.color};`);
    if (ov.letterSpacing !== '' && ov.letterSpacing !== undefined)
      lines.push(`letter-spacing: ${ov.letterSpacing}px;`);
    navigator.clipboard?.writeText(lines.join('\n'));
  };

  if (!enabled) return null;

  const editCount = Object.keys(getSlideEdits()).length;

  return (
    <>
      {/* 高亮 / 拖拽框 */}
      {box && (
        <div
          className="fixed z-[90] cursor-move"
          style={{
            left: box.left,
            top: box.top,
            width: box.width,
            height: box.height,
            outline: inlineEditing ? '2px solid #22c55e' : '2px solid #3b82f6',
            outlineOffset: '2px',
            boxShadow: '0 0 0 9999px rgba(0,0,0,0)',
            // 改字时放行鼠标事件，让光标能点进文字里
            pointerEvents: inlineEditing ? 'none' : 'auto',
          }}
          onPointerDown={onBoxPointerDown}
          onDoubleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setInlineEditing(true);
          }}
          title="拖拽移动 · 再次双击改文字"
        >
          <span
            className={`absolute -top-6 left-0 px-2 py-0.5 rounded text-white text-[11px] font-mono whitespace-nowrap pointer-events-none ${
              inlineEditing ? 'bg-green-600' : 'bg-blue-600'
            }`}
          >
            {inlineEditing ? '正在改文字 · Esc 或点空白处结束' : '拖拽移动 · 再次双击改文字'}
          </span>
        </div>
      )}

      {/* 右侧编辑面板 */}
      <div className="fixed top-0 right-0 h-full w-[340px] z-[95] bg-zinc-950/95 backdrop-blur-md border-l border-zinc-800 text-zinc-200 flex flex-col shadow-2xl">
        <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">元素编辑面板</h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              双击幻灯片中的文字进行编辑
            </p>
          </div>
        </div>

        {!ov ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 text-zinc-500 gap-3">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <p className="text-sm">还没有选中元素</p>
            <p className="text-[12px] leading-relaxed">
              在左侧幻灯片里 <span className="text-blue-400 font-medium">双击</span> 任意文字，
              就可以在这里改文案、调位置。
              选中后 <span className="text-blue-400 font-medium">再双击一次</span> 可直接在画面里打字。
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-4 flex flex-col gap-5">
            {/* 选中信息 */}
            <div className="text-[12px] text-zinc-400 bg-zinc-900 rounded-lg px-3 py-2 break-all">
              {describe(selected)}
            </div>

            {/* 文案内容 */}
            <Section label="文案内容">
              <textarea
                value={ov.text ?? ''}
                onChange={(e) => patch({ text: e.target.value })}
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white leading-relaxed resize-y focus:border-blue-500 focus:outline-none"
                placeholder="在这里直接改文字…"
              />
              <button
                onClick={() => setInlineEditing((v) => !v)}
                className={`w-full mt-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  inlineEditing
                    ? 'bg-green-600 hover:bg-green-500 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                }`}
              >
                {inlineEditing ? '完成画面内编辑' : '直接在画面里改字'}
              </button>
              {selected && selected.children.length > 0 && (
                <p className="text-[11px] text-amber-500/80 leading-relaxed mt-2">
                  注意：这段文字内部有特殊格式（如加粗、变色的片段），改动文案后这些格式会被合并成统一样式。
                </p>
              )}
            </Section>

            {/* 位置 */}
            <Section label="位置（偏移量 px）">
              <div className="grid grid-cols-2 gap-3">
                <NumField label="水平 X" value={ov.dx} onChange={(v) => patch({ dx: v })} />
                <NumField label="垂直 Y" value={ov.dy} onChange={(v) => patch({ dy: v })} />
              </div>
              <div className="flex items-center justify-center gap-1 mt-3">
                <NudgeBtn onClick={() => patch({ dx: (Number(ov.dx) || 0) - 1 })}>←</NudgeBtn>
                <div className="flex flex-col gap-1">
                  <NudgeBtn onClick={() => patch({ dy: (Number(ov.dy) || 0) - 1 })}>↑</NudgeBtn>
                  <NudgeBtn onClick={() => patch({ dy: (Number(ov.dy) || 0) + 1 })}>↓</NudgeBtn>
                </div>
                <NudgeBtn onClick={() => patch({ dx: (Number(ov.dx) || 0) + 1 })}>→</NudgeBtn>
              </div>
              <p className="text-[11px] text-zinc-600 text-center mt-2">
                也可直接拖拽画面里的蓝框 · 方向键微调
              </p>
            </Section>

            {/* 字号 */}
            <Section label="字号 px">
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="8"
                  max="200"
                  value={ov.fontSize || prefill.fontSize || 32}
                  onChange={(e) => patch({ fontSize: Number(e.target.value) })}
                  className="flex-1 accent-blue-500"
                />
                <input
                  type="number"
                  value={ov.fontSize || ''}
                  placeholder={String(prefill.fontSize)}
                  onChange={(e) => patch({ fontSize: e.target.value ? Number(e.target.value) : '' })}
                  className="w-16 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm text-white"
                />
              </div>
            </Section>

            {/* 颜色 */}
            <Section label="文字颜色">
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={ov.color || prefill.color}
                  onChange={(e) => patch({ color: e.target.value })}
                  className="w-10 h-9 bg-transparent border border-zinc-800 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={ov.color || ''}
                  placeholder={prefill.color}
                  onChange={(e) => patch({ color: e.target.value })}
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm text-white font-mono"
                />
              </div>
            </Section>

            {/* 旋转 & 字间距 */}
            <Section label="旋转 / 字间距">
              <div className="grid grid-cols-2 gap-3">
                <NumField label="旋转 °" value={ov.rotate} onChange={(v) => patch({ rotate: v })} />
                <NumField
                  label="字间距 px"
                  value={ov.letterSpacing}
                  onChange={(v) => patch({ letterSpacing: v === '' ? '' : v })}
                />
              </div>
            </Section>

            {/* 操作 */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={copyCss}
                className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition-colors"
              >
                复制 CSS
              </button>
              <button
                onClick={resetElement}
                className="w-full py-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-sm font-medium transition-colors"
              >
                重置此元素
              </button>
            </div>
          </div>
        )}

        {/* 底部：本页调整统计 */}
        <div className="px-5 py-3 border-t border-zinc-800 flex items-center justify-between text-[12px]">
          <span className="text-zinc-500">本页已调整 {editCount} 处</span>
          {editCount > 0 && (
            <button onClick={clearSlide} className="text-red-400 hover:text-red-300">
              清除本页
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/* ---------- 小组件 ---------- */
function Section({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function NumField({ label, value, onChange }) {
  return (
    <div>
      <span className="block text-[11px] text-zinc-500 mb-1">{label}</span>
      <input
        type="number"
        value={value === '' || value === undefined ? '' : value}
        onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
        className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1.5 text-sm text-white"
      />
    </div>
  );
}

function NudgeBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-base flex items-center justify-center transition-colors"
    >
      {children}
    </button>
  );
}
