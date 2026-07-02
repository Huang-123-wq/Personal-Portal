import { ReactNode } from "react";
import { Container } from "./container";

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  action,
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  action?: ReactNode;
}) {
  return (
    <section className={`py-24 ${className}`}>
      <Container>
        {(eyebrow || title || action) && (
          <div className="mb-12 flex items-end justify-between">
            <div>
              {eyebrow && (
                <p className="mb-2 text-eyebrow uppercase tracking-wider text-ink-subtle">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-headline font-semibold text-ink">
                  {title}
                </h2>
              )}
            </div>
            {action && <div>{action}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
