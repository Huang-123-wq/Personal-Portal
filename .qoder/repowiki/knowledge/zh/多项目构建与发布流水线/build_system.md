该仓库包含多个独立子项目，各自采用不同的构建与发布策略：

### 1. `superpowers` (技能框架)
- **版本管理**：采用自定义的 `scripts/bump-version.sh` 脚本配合 `.version-bump.json` 配置文件。该脚本支持跨多个插件清单文件（如 `.claude-plugin/plugin.json`, `.cursor-plugin/plugin.json` 等）同步版本号，并提供 `--check`（检测版本漂移）和 `--audit`（扫描未声明的版本引用）功能。
- **代码质量**：通过 `.pre-commit-config.yaml` 集成 `pre-commit` 钩子，针对 `evals/` 目录下的 Python 代码执行 `ruff` 检查、格式化及 `ty` 类型检查。
- **测试**：包含大量基于 Shell 和 Node.js 的集成测试脚本（位于 `tests/`），用于验证不同 AI 代理平台（Claude, Codex, Kimi 等）的技能兼容性。

### 2. `ui-ux-pro-max-skill` (UI/UX 技能系统)
- **CI/CD 流水线**：使用 GitHub Actions 实现自动化发布。
  - **Release**：`.github/workflows/release.yml` 利用 `semantic-release` 根据 Conventional Commits 规范自动分析提交记录、生成变更日志、创建 Git Tag 并发布到 NPM。
  - **资产同步检查**：`check-asset-sync.yml` 确保 `src/ui-ux-pro-max`（源码）与 `cli/assets`（CLI 分发资产）保持内容一致，防止分发过时数据。
  - **冒烟测试**：`smoke-stacks.yml` 在 Python 环境下运行 `scripts/smoke-stacks.sh`，验证设计栈数据的完整性。
- **构建工具**：CLI 部分使用 `Bun` 进行 TypeScript 编译 (`bun build`)，并通过 `npm` 管理依赖。

### 3. `personal-portal` (个人门户)
- **技术栈**：基于 Next.js (App Router) 和 TypeScript。
- **构建流程**：遵循标准的 Next.js 工作流 (`next dev`, `next build`, `next start`)。
- **代码规范**：集成 `eslint` 和 `typescript` 进行静态检查。

### 开发约定
- **语义化版本**：`ui-ux-pro-max-skill` 严格遵循语义化版本控制；`superpowers` 通过脚本强制多文件版本同步。
- **资产一致性**：在涉及 CLI 分发的项目中，必须确保源数据与打包资产同步，CI 中设有专门关卡拦截不同步的 PR。
- **平台无关性**：构建脚本（如 `bump-version.sh`）尽量使用 POSIX shell 以确保跨平台兼容性。