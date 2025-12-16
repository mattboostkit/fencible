import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export function Logo({ className, variant = "icon" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent-primary", className)}
    >
      {/* Modern stylised fence/garden design */}
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="8"
        className="fill-current opacity-10"
      />

      {/* Fence posts - representing the "Fencible" name */}
      <rect
        x="10"
        y="14"
        width="4"
        height="24"
        rx="1"
        className="fill-current"
      />
      <rect
        x="22"
        y="10"
        width="4"
        height="28"
        rx="1"
        className="fill-current"
      />
      <rect
        x="34"
        y="14"
        width="4"
        height="24"
        rx="1"
        className="fill-current"
      />

      {/* Horizontal rails */}
      <rect
        x="8"
        y="18"
        width="32"
        height="3"
        rx="1"
        className="fill-current opacity-80"
      />
      <rect
        x="8"
        y="30"
        width="32"
        height="3"
        rx="1"
        className="fill-current opacity-80"
      />

      {/* Decorative leaf element - representing landscaping */}
      <path
        d="M38 8C38 8 42 12 42 16C42 20 38 24 38 24C38 24 34 20 34 16C34 12 38 8 38 8Z"
        className="fill-accent-gold"
      />
      <path
        d="M38 24V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="stroke-bg-primary"
      />
    </svg>
  );
}

// Alternative text-based logo for larger displays
export function LogoFull({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo className="h-10 w-10" />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-text-primary">
          Fencible
        </span>
        <span className="text-[10px] text-text-secondary -mt-1">
          You visualise, we materialise
        </span>
      </div>
    </div>
  );
}
