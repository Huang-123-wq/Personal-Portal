## 1. 系统/方法概述
该仓库**未引入专用的日志框架**（如 `winston`, `pino`, `bunyan` 等）。日志输出主要依赖各语言/平台的标准输出工具：
- **Node.js/TypeScript**: 使用全局 `console` 对象 (`console.log`, `console.error`)。
- **Python**: 使用内置 `print` 或 `logging` 模块的默认行为（在部分脚本中观察到 `from math import log` 为数学计算，非日志系统）。
- **Shell**: 使用 `echo` 进行状态输出。

在 `ui-ux-pro-max-skill` 的 CLI 工具中，存在一个**轻量级的自定义日志封装** (`logger.ts`)，通过 `chalk` 库为不同级别的日志添加颜色标识，提升了终端输出的可读性。

## 2. 关键文件与包
- **`ui-ux-pro-max-skill/cli/src/utils/logger.ts`**: 唯一的结构化日志封装实现。定义了 `info`, `success`, `warn`, `error`, `title`, `dim` 等方法，统一了 CLI 工具的输出格式。
- **`ui-ux-pro-max-skill/cli/src/commands/*.ts`**: 展示了 `logger` 的实际使用场景，如在安装成功、失败或警告时调用对应的日志方法。
- **`superpowers/skills/systematic-debugging/SKILL.md`**: 虽然不是代码实现，但该文档强调了在调试过程中“收集证据”和“日志记录”的重要性，建议在组件边界记录数据流入流出，体现了对日志作为调试手段的重视。

## 3. 架构与约定
- **去中心化输出**: 大部分模块（如 `personal-portal`, `awesome-design-md` 中的脚本）直接使用原生输出语句，缺乏统一的日志配置中心。
- **CLI 增强模式**: 仅在面向用户的命令行工具 (`ui-ux-pro-max-skill/cli`) 中实现了简单的日志美化，目的是提升用户体验，而非用于后端服务监控。
- **无持久化与路由**: 所有日志均输出至标准输出 (stdout/stderr)，未发现日志文件写入、远程发送或日志轮转的配置。

## 4. 开发者应遵循的规则
- **CLI 开发规范**: 在 `ui-ux-pro-max-skill/cli` 项目中，**必须**使用 `src/utils/logger.ts` 提供的接口进行输出，禁止直接使用 `console.log`，以确保界面风格统一。
- **调试日志建议**: 遵循 `superpowers` 中的系统化调试原则，在排查复杂问题时，应在组件边界显式添加临时日志以追踪数据流，问题解决后应清理或转为正式的错误处理逻辑。
- **通用实践**: 在其他模块中，建议保持输出简洁。若未来需要引入服务端日志，应考虑集成结构化日志库以支持 JSON 格式输出和级别管理。