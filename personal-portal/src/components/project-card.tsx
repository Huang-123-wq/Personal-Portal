import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { formatDateShort } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-lg border border-hairline bg-surface-1 p-6 transition-colors hover:border-hairline-strong hover:bg-surface-2">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs text-ink-tertiary">
            {formatDateShort(project.date)}
          </span>
          {project.featured && (
            <Badge variant="success">精选</Badge>
          )}
        </div>

        <h3 className="mb-2 text-card-title font-medium text-ink transition-colors group-hover:text-primary-hover">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-ink-subtle line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-surface-2 px-2 py-0.5 text-xs text-ink-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
