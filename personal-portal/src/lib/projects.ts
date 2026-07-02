import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  tech: string[];
  url?: string;
  repo?: string;
  featured: boolean;
  date: string;
  content: string;
}

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs
    .readdirSync(projectsDirectory)
    .filter((f) => f.endsWith(".md"));

  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      cover: data.cover,
      tech: data.tech || [],
      url: data.url,
      repo: data.repo,
      featured: data.featured || false,
      date: data.date || new Date().toISOString(),
      content,
    } as Project;
  });

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug) || null;
}

export function getAllProjectSlugs(): string[] {
  return getProjects().map((p) => p.slug);
}
