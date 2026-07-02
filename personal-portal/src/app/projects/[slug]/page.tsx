import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="px-6 py-24">
      <Container className="max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center text-sm text-ink-subtle transition-colors hover:text-ink"
        >
          ← 返回项目
        </Link>

        <h1
          className="mb-4 font-semibold text-ink"
          style={{ fontSize: "2.5rem", lineHeight: 1.15, letterSpacing: "-1px" }}
        >
          {project.title}
        </h1>

        <p className="mb-6 text-body-lg text-ink-muted">{project.description}</p>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <span className="text-sm text-ink-tertiary">
            {formatDate(project.date)}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-hover transition-colors hover:underline"
            >
              线上地址 →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-hover transition-colors hover:underline"
            >
              源代码 →
            </a>
          )}
        </div>

        <div className="mb-8 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-surface-2 px-2 py-0.5 text-xs text-ink-subtle"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose border-t border-hairline pt-8">
          <MDXRemote source={project.content} />
        </div>
      </Container>
    </article>
  );
}
