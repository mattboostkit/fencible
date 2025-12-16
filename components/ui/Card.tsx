import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-tertiary rounded-xl border border-border-subtle",
        paddings[padding],
        hover && "transition-all duration-300 hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/5",
        className
      )}
    >
      {children}
    </div>
  );
}
