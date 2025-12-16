import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "tertiary";
}

const backgrounds = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  tertiary: "bg-bg-tertiary",
};

export function Section({
  children,
  className,
  id,
  background = "primary",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      {children}
    </section>
  );
}
