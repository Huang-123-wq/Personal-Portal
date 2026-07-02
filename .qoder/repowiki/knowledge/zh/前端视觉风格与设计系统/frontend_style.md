该仓库的前端视觉风格呈现出**高度模块化与多元化**的特征，主要由三个独立但互补的设计体系构成：

1. **Linear 风格深色极简主义 (Linear-style Dark Minimalism)**
   - **核心特征**：以 `#010102`（近黑）为画布，使用四级表面阶梯（Surface Ladder）构建层级，而非依赖阴影。
   - **色彩体系**：单色强调色 `#5e6ad2`（Lavender Blue），仅用于品牌标识、焦点环和主要 CTA。文本采用高对比度灰阶（`#f7f8f8` 至 `#62666d`）。
   - **排版策略**：定制无衬线字体（Linear Display/Text），标题采用激进的负字间距（-3.0px @ 80px），正文保持中性。
   - **组件规范**：卡片使用 `12px` 圆角与 `1px` 发丝边框；按钮采用 `8px` 圆角；产品截图作为主要视觉元素。

2. **Tailwind CSS 实用主义组件库 (Utility-First Component System)**
   - **实现方式**：在 `personal-portal`项目中，通过 React 组件封装 Tailwind CSS类。
   - **设计令牌**：使用语义化类名如 `bg-primary`, `text-ink`, `border-hairline`，映射到具体的 Tailwind 配置。
   - **交互反馈**：强调状态变化，如 `hover:bg-surface-2`, `focus-visible:ring-2`，确保无障碍访问性。
   - **变体管理**：通过 `variant` props（primary, secondary, ghost）控制组件外观，保持 API 简洁。

3. **UI/UX Pro Max 风格知识库 (Style Reference Library)**
   - **内容覆盖**：包含 70+ 种前沿设计风格的数据集（CSV），如 Neubrutalism（新粗野主义）、Glassmorphism（玻璃拟态）、Bento Grids（便当盒网格）、Cyberpunk（赛博朋克）等。
   - **技术细节**：每种风格均定义了具体的 CSS 技术参数，包括 `box-shadow` 偏移量、`backdrop-filter` 模糊度、渐变色值及动画时长。
   - **应用场景**：为不同产品类型（SaaS、电商、游戏）提供配色方案（Primary/Secondary/Accent）和字体配对建议（如 Inter + JetBrains Mono）。

**开发约定：**
- **深色优先**：核心营销页面强制使用深色模式，避免纯黑 `#000000`，推荐使用带微蓝 tint 的深色。
- **层级通过表面颜色区分**：避免使用复杂的 drop-shadow，转而使用背景色亮度差异（Canvas -> Surface-1 -> Surface-2）。
- **严格的网格与间距**：遵循 4px/8px 基础间距系统，卡片布局推荐 Bento Grid 不对称网格。
- **无障碍约束**：所有文本对比度需满足 WCAG AA/AAA 标准，焦点状态必须可见（2px-4px 环）。