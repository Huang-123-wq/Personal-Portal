import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const staticPages = ["/", "/projects", "/dashboard", "/about"];

  const projectPages = getProjects().map((p) => `/projects/${p.slug}`);

  const allPages = [...staticPages, ...projectPages];

  return allPages.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: url === "/" ? 1 : 0.8,
  }));
}
