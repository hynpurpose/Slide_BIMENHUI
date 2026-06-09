# GEO 2026 幻灯片设计与排版规范 (Slide Design Specifications)

本文件定义了幻灯片的核心设计规范。在开发、调整或新增幻灯片页面时，必须严格遵守以下规范。

## 1. 尺寸比例与缩放关系
* **设计稿分辨率 (Figma)**: `3840px × 2160px` (4K 比例)
* **前端代码分辨率 (React)**: `1920px × 1080px` (1080p 比例)
* **缩放转换**: 前端代码中的所有像素尺寸、坐标定位、字号，均需为 **Figma 设计稿的 1/2 (0.5x)**。

---

## 2. 核心元素排版规范 (以 1920 × 1080 计)

### 2.1 右上角品牌标识 (Brand Line)
* **文字内容**: `GEOINDEXFUTURE // 2026`
* **字体 (font-family)**: `'Montserrat', sans-serif`
* **字号 (font-size)**: `26px` (Figma: 52px)
* **字重 (font-weight)**: `400`
* **字间距 (letter-spacing)**: `6px` (Figma: 12px)
* **前置横线 (Horizontal Divider)**:
  * 宽度: `174px` (Figma: 348px)
  * 高度: `2px` (Figma: 4px)
  * 颜色: `rgba(255, 255, 255, 0.2)`
* **整体定位**: 右上角绝对定位 (`top: 24px`, `right: 40px`；Figma: `top: 48px`, `right: 80px`)

### 2.2 一级标题 (H1)
* **字体 (font-family)**: `'AlimamaShuHeiTi', sans-serif` (阿里妈妈数黑体)
* **字号 (font-size)**: `48px` (Figma: 96px)
* **字重 (font-weight)**: `700`
* **行高 (line-height)**: `58px`
* **颜色**: `#FFFFFF`

### 2.3 二级标题 (H2)
* **字体 (font-family)**: `'MiSans', sans-serif` (小米 MiSans)
* **字号 (font-size)**: `32px` (Figma: 64px)
* **字重 (font-weight)**: `400`
* **行高 (line-height)**: `42px`
* **颜色**: `#FFFFFF`

---

## 3. 版面布局限制与安全区域 (Safe Zones)

根据参考线定义，1920 × 1080 空间下划分了如下区域：

### 3.1 底部避让区 (Subtitle Area) - ⚠️ 严禁排版文字
* **底线范围**: 屏幕底部往上 `80px` (Figma: 160px) 的区域。
* **规则**: 此区域预留给实时会议字幕。**绝对禁止**在此区域内排版任何关键文字、列表或图表内容。

### 3.2 顶部页眉区 (Header Area)
* **顶线范围**: 屏幕顶部往下 `225px` (Figma: 450px) 的区域。
* **规则**: 仅用于展示一级标题、二级标题和右上角品牌词。

### 3.3 主要排版安全区 (Content Safe Zone)
* **垂直范围**: `top: 225px` 至 `bottom: 80px` (高度为 `775px`)。
* **水平范围**: `left: 40px` 至 `right: 40px` (宽度为 `1840px`；Figma: 左右边距 `80px`，宽度 `3680px`)。
* **规则**: 所有卡片、图片、数据指标、对比列表等主要内容，必须包含在此区域内。

---

## 4. React 布局组件与排版辅助线 (SlideLayout)

为了保证开发页面时完全符合上述设计规范，项目提供了通用的布局容器组件 [SlideLayout.jsx](file:///j:/GEO%20Home/Close_Door/src/components/SlideLayout.jsx)。

### 4.1 引入与使用方法
在开发或新增幻灯片页面时，将页面组件的外层用 `<SlideLayout>` 包裹：

```jsx
import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function MyNewSlide() {
  return (
    <SlideLayout 
      title="为什么要做GEO（一级标题）" 
      subtitle="我们团队为什么在2024年决定全力押注 GEO？（二级标题）"
    >
      {/* 核心排版内容放置在这里：自动被限制在 1840px x 775px 的安全区内 */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-3xl">主排版内容区域</p>
      </div>
    </SlideLayout>
  );
}
```

### 4.2 排版辅助参考线切换 (Guidelines)
为了在浏览器中实时确认排版元素是否越界或对齐：
1. **按键切换**：在幻灯片运行页面中，直接在键盘上按下 **`G` 键**，即可打开/关闭蓝色虚线排版辅助线和底部的红色避让区警示带。
2. **双击切换**：也可以直接 **双击** 页面右上角的品牌标识词 `GEOINDEXFUTURE // 2026` 切换。

