"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface MonthlyData {
  month: string;
  count: number;
}

interface TechData {
  name: string;
  percentage: number;
}

const tooltipStyle = {
  backgroundColor: "#0f1011",
  border: "1px solid #23252a",
  borderRadius: "8px",
  color: "#f7f8f8",
  fontSize: "13px",
};

export function MonthlyPostsChart({ data }: { data: MonthlyData[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#23252a" />
        <XAxis
          dataKey="month"
          stroke="#8a8f98"
          fontSize={12}
          tickLine={false}
          axisLine={{ stroke: "#23252a" }}
        />
        <YAxis
          stroke="#8a8f98"
          fontSize={12}
          allowDecimals={false}
          tickLine={false}
          axisLine={{ stroke: "#23252a" }}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={{ color: "#8a8f98" }}
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#5e6ad2"
          strokeWidth={2}
          dot={{ fill: "#5e6ad2", r: 3 }}
          activeDot={{ r: 5, fill: "#828fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function TechStackChart({ data }: { data: TechData[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 8, bottom: 0, left: 8 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#23252a"
          horizontal={false}
        />
        <XAxis
          type="number"
          stroke="#8a8f98"
          fontSize={12}
          tickLine={false}
          axisLine={{ stroke: "#23252a" }}
        />
        <YAxis
          type="category"
          dataKey="name"
          stroke="#8a8f98"
          fontSize={12}
          width={90}
          tickLine={false}
          axisLine={{ stroke: "#23252a" }}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          labelStyle={{ color: "#8a8f98" }}
          cursor={{ fill: "#141516" }}
        />
        <Bar
          dataKey="percentage"
          fill="#5e6ad2"
          radius={[0, 4, 4, 0]}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
