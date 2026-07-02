import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/layout/container";

export const metadata = {
  title: "项目",
  description: "我的项目作品展示",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="px-6 py-24">
      <Container>
        <p className="mb-2 text-eyebrow uppercase tracking-wider text-ink-subtle">
          作品集
        </p>
        <h1 className="mb-12 text-headline font-semibold text-ink">项目</h1>

        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-ink-subtle">暂无项目</p>
        )}
      </Container>
    </div>
  );
}
