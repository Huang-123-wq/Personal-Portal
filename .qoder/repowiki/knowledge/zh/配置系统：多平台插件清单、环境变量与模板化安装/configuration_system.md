该仓库的配置体系呈现为**“声明式插件清单 + 运行时环境变量 + 模板化生成”**的混合模式，主要服务于 AI 代理技能的跨平台分发与个人门户的内容驱动构建。

### 1. 核心系统与工具
*   **Next.js 配置层**：`personal-portal` 采用 Next.js 标准配置 (`next.config.ts`)，结合 `package.json` 中的脚本命令管理开发、构建与 linting 流程。
*   **AI 插件清单 (Plugin Manifests)**：`superpowers` 和 `ui-ux-pro-max-skill` 通过 `.claude-plugin/plugin.json`、`.qoder-plugin/plugin.json` 等目录下的 JSON 文件，向不同 AI 客户端（Claude, Qoder, OpenCode 等）声明技能元数据、版本及入口点。
*   **CLI 模板引擎**：`ui-ux-pro-max-skill/cli` 使用 TypeScript 编写的 CLI 工具，根据用户选择的 AI 类型动态生成或从 GitHub Release 下载对应的配置文件结构。

### 2. 关键文件与逻辑
*   **环境变量加载**：
    *   `personal-portal/src/lib/blog.ts` 等模块直接使用 `process.cwd()` 定位内容目录，并在 `layout.tsx` 中通过 `process.env.NEXT_PUBLIC_SITE_URL` 读取站点配置。
    *   `superpowers/.opencode/plugins/superpowers.js` 展示了复杂的运行时配置逻辑：优先读取 `process.env.OPENCODE_CONFIG_DIR`，若不存在则回退到默认的 `~/.config/opencode` 路径。
*   **配置注入机制**：在 `superpowers` 的 OpenCode 插件中，通过 `config` 钩子动态修改内存中的配置对象（如追加 `skills.paths`），实现了无需手动编辑全局配置文件的“零接触”集成。
*   **持久化设计系统**：`ui-ux-pro-max-skill` 支持通过 `--persist` 参数将生成的设计规范保存为 `design-system/MASTER.md` 及页面级覆盖文件，形成了一种基于文件系统的层级化配置检索模式。

### 3. 架构约定与规则
*   **平台自适应 (Platform-Adaptive)**：配置不依赖单一的中央文件，而是通过在不同根目录下放置符合各平台规范的 `plugin.json` 或 `SKILL.md` 来实现兼容。
*   **环境隔离**：个人门户严格区分编译时配置（`next.config.ts`）与运行时环境变量（`NEXT_PUBLIC_*`），确保静态导出时的灵活性。
*   **开发者规范**：
    *   新增 AI 技能时，必须在对应的 `.xxx-plugin/` 目录下维护最新的 `plugin.json`。
    *   涉及路径查找的逻辑应优先使用 `os.homedir()` 配合环境变量回退，以适配不同操作系统的配置目录规范。
    *   避免在代码中硬编码配置路径，应遵循“环境变量 > 默认全局路径 > 本地路径”的优先级顺序。