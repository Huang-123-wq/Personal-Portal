import { ReactNode } from "react";

type BadgeVariant = "default" | "success";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface-2 text-ink-muted border-hairline",
  success: "bg-success/10 text-success border-success/20",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
