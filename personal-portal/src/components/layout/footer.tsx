import Link from "next/link";

const footerLinks = [
  {
    title: "内容",
    links: [
      { href: "/projects", label: "项目", external: false },
      { href: "/blog", label: "博客", external: false },
      { href: "/dashboard", label: "看板", external: false },
    ],
  },
  {
    title: "关于",
    links: [
      { href: "/about", label: "关于我", external: false },
      { href: "/about#contact", label: "联系方式", external: false },
    ],
  },
  {
    title: "社交",
    links: [
      { href: "https://github.com", label: "GitHub", external: true },
      { href: "https://twitter.com", label: "Twitter", external: true },
      { href: "mailto:hello@example.com", label: "Email", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas px-6 py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <span className="text-base font-semibold text-ink">门户</span>
            <p className="mt-2 text-sm text-ink-subtle">
              一个全栈开发者的个人空间,记录项目、思考与数据。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-tertiary">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-subtle transition-colors hover:text-ink"
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-6">
          <p className="text-xs text-ink-tertiary">
            © {new Date().getFullYear()} 个人门户. 使用 Next.js 与 Tailwind CSS 构建.
          </p>
        </div>
      </div>
    </footer>
  );
}
