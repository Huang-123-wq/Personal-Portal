该仓库采用混合依赖管理策略，根据子项目的技术栈特性分别使用 npm、Bun 和原生 Python 脚本。

### 1. Node.js 项目 (personal-portal)
- **包管理器**：使用 `npm` 作为主要包管理器。
- **锁定文件**：通过 `package-lock.json` (lockfileVersion 3) 确保依赖版本的确定性。
- **依赖声明**：在 `package.json` 中明确区分 `dependencies`（如 `next`, `react`, `recharts`）和 `devDependencies`（如 `typescript`, `eslint`, `tailwindcss`）。
- **版本策略**：采用语义化版本控制（Semver），生产依赖使用 `^` 前缀以允许小版本更新，核心框架（Next.js, React）则锁定具体版本以确保稳定性。

### 2. CLI 工具 (ui-ux-pro-max-skill/cli)
- **构建工具链**：采用 `Bun` 进行构建和依赖管理，利用其高性能特性。
- **锁定文件**：使用 `bun.lock` 记录精确的依赖树和完整性哈希。
- **编译流程**：通过 `bun build` 将 TypeScript 源码编译为 Node.js 可执行的 JavaScript，并在 `prepublishOnly` 钩子中强制执行类型检查和资源同步。

### 3. 技能引擎与脚本 (superpowers, ui-ux-pro-max-skill/skills)
- **零依赖设计**：核心搜索逻辑（如 `core.py`）仅使用 Python 标准库（`csv`, `re`, `pathlib`, `math`），无需 `pip` 或虚拟环境即可运行，极大降低了跨平台集成的复杂度。
- **轻量级测试**：部分测试套件（如 `tests/brainstorm-server`）包含独立的 `package.json` 和 `package-lock.json`，实现了测试环境的隔离。

### 4. 开发者规范
- **禁止手动修改锁文件**：所有依赖增减必须通过包管理器命令（`npm install` 或 `bun add`）执行。
- **环境隔离**：Node.js 项目均通过 `node_modules` 进行本地化安装，避免全局污染。
- **类型安全**：TypeScript 项目配置了 `strict: true` 和 `skipLibCheck: true`，在保障代码质量的同时优化了依赖解析性能。