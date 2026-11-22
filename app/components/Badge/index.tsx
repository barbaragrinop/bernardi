import type { ReactNode } from "react";

type Variant = "success" | "danger" | "hero" | "neutral";

const variants: Record<Variant, string> = {
  success: "bg-success-bg text-success",
  danger: "bg-danger-bg text-danger",
  hero: "bg-white/10 text-hero-fg", // sobre fundo escuro
  neutral: "bg-soft text-fg",
};

interface BadgeProps {
  variant?: Variant;
  icon?: ReactNode;
  dot?: boolean;
  className?: string;
  children: ReactNode;
}

export function Badge({ variant = "neutral", icon, dot, className = "", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-base font-semibold leading-none ${variants[variant]} ${className}`}
    >
      {dot && <span aria-hidden="true" className="size-2.5 rounded-full bg-current" />}
      {icon}
      {children}
    </span>
  );
}
