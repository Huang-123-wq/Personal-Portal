import fs from "fs";
import path from "path";
import { Container } from "@/components/layout/container";
import { TechStackChart } from "@/components/dashboard/charts";

export const metadata = {
  title: "看板",
  description: "个人数据统计与可视化",
};

interface DashboardStats {
  stats: { projects: number; stars: number; commits: number };
  techStack: { name: string; percentage: number }[];
  timeline: { year: string; title: string; description: string }[];
}

export default function DashboardPage() {
  const statsPath = path.join(
    process.cwd(),
    "content",
    "dashboard",
    "stats.json"
  );
  const stats: DashboardStats = JSON.parse(
    fs.readFileSync(statsPath, "utf8")
  );

  const statCards = [
    { label: "项目", value: stats.stats.projects, unit: "个" },
    { label: "GitHub Stars", value: stats.stats.stars, unit: "" },
    { label: "Commits", value: stats.stats.commits, unit: "" },
  ];

  return (
    <div className="px-6 py-24">
      <Container>
        <p className="mb-2 text-eyebrow uppercase tracking-wider text-ink-subtle">
          数据
        </p>
        <h1 className="mb-12 text-headline font-semibold text-ink">看板</h1>

        {/* Stats Overview */}
        <div className="mb-12 grid grid-cols-3 gap-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-hairline bg-surface-1 p-6"
            >
              <p className="text-sm text-ink-subtle">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-ink">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1 text-sm text-ink-tertiary">
                    {stat.unit}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="rounded-lg border border-hairline bg-surface-1 p-6">
          <h3 className="mb-4 text-card-title font-medium text-ink">
            技术栈分布
          </h3>
          <TechStackChart data={stats.techStack} />
        </div>

        {/* Timeline */}
        <div className="mt-12">
          <h3 className="mb-6 text-card-title font-medium text-ink">里程碑</h3>
          <div>
            {stats.timeline.map((item, i) => (
              <div key={i} className="border-b border-hairline py-6">
                <div className="flex gap-6">
                  <span className="w-12 shrink-0 text-sm font-medium text-primary-hover">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-base font-medium text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-ink-subtle">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
