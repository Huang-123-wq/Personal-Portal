import { Container } from "@/components/layout/container";

export const metadata = {
  title: "关于",
  description: "关于我 - 一个全栈开发者的自我介绍",
};

const skills: Record<string, string[]> = {
  前端: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  后端: ["Node.js", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
  工具: ["Git", "Docker", "Figma", "Vercel", "Linux"],
};

const contacts = [
  {
    label: "GitHub",
    value: "Huang-123-wq",
    href: "https://github.com/Huang-123-wq",
  },
  {
    label: "Email",
    value: "qzx98120@gmail.com",
    href: "mailto:qzx98120@gmail.com",
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 py-24">
      <Container className="max-w-3xl">
        <p className="mb-2 text-eyebrow uppercase tracking-wider text-ink-subtle">
          关于
        </p>

        <h1
          className="mb-8 font-semibold text-ink"
          style={{ fontSize: "2.5rem", lineHeight: 1.15, letterSpacing: "-1px" }}
        >
          你好，我是一个全栈开发者
        </h1>

        {/* Introduction */}
        <div className="prose mb-16">
          <p>
            我是一名热爱技术的全栈开发者，专注于构建简洁优雅的 Web
            应用。从前端到后端，从设计到部署，我享受将想法转化为产品的每一个环节。
          </p>
          <p>
            我相信好的产品来自对细节的关注 —
            一个恰到好处的动画、一个精心选择的颜色、一行简洁的代码，都能让用户体验提升一个层次。
          </p>
          <p>
            工作之余，我喜欢写技术博客、参与开源项目、探索新的技术栈。这个网站就是我用
            Next.js 和 Tailwind CSS
            构建的，参考了 Linear 的极简暗色设计系统。
          </p>
        </div>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="mb-6 text-headline font-semibold text-ink">技能</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg border border-hairline bg-surface-1 p-6"
              >
                <h3 className="mb-4 text-sm font-medium text-ink-subtle">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="mb-6 text-headline font-semibold text-ink">联系</h2>
          <p className="mb-8 text-body-lg text-ink-muted">
            如果你有项目合作、技术交流或者其他任何想法，欢迎通过以下方式联系我。
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-lg border border-hairline bg-surface-1 p-6 transition-colors hover:border-hairline-strong hover:bg-surface-2"
              >
                <p className="text-sm text-ink-subtle">{contact.label}</p>
                <p className="mt-2 text-base font-medium text-ink transition-colors group-hover:text-primary-hover">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
