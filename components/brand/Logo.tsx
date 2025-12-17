import { cn } from "@/lib/cn";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export function Logo({ className, variant = "icon" }: LogoProps) {
  return (
    <Image
      src="/fencible_logo.svg"
      alt="Fencible Logo"
      width={48}
      height={48}
      className={cn("h-11 w-auto logo-invert", className)}
      priority
    />
  );
}

// Alternative text-based logo for larger displays
export function LogoFull({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo className="h-10 w-10" />
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-text-primary">
          Fencible
        </span>
        <span className="text-[10px] text-text-tertiary -mt-1">
          You visualise, we materialise
        </span>
      </div>
    </div>
  );
}
