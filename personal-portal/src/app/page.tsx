import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-24">
        <Container>
          <p className="mb-4 text-eyebrow uppercase tracking-wider text-ink-subtle">
            全栈开发者
          </p>
          <h1
            className="mb-6 max-w-3xl font-semibold tracking-tight text-ink"
            style={{ fontSize: "3.5rem", lineHeight: 1.1, letterSpacing: "-1.8px" }}
          >
            构建简洁优雅的数字产品
          </h1>
          <p className="mb-8 max-w-2xl text-body-lg text-ink-muted">
            专注于 Web 前端与全栈开发，热爱极简设计与开源社区。这里记录我的项目与数据。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              查看项目
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-hairline bg-surface-1 px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
            >
              了解我
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-hairline px-6 py-24">
        <Container>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-eyebrow uppercase tracking-wider text-ink-subtle">
                精选项目
              </p>
              <h2 className="text-headline font-semibold text-ink">作品展示</h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              查看全部 →
            </Link>
          </div>
          {featuredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-ink-subtle">暂无精选项目</p>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <Container>
          <div className="rounded-lg border border-hairline bg-surface-1 p-12 text-center">
            <h2 className="mb-4 text-headline font-semibold text-ink">
              一起创造些什么
            </h2>
            <p className="mb-6 text-body-lg text-ink-muted">
              如果你有有趣的想法或合作意向，欢迎与我联系
            </p>
            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              联系我
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
