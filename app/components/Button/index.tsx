import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  icon?: ReactNode;
  iconRight?: ReactNode;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  href?: string;
  className?: string;
  children?: ReactNode;
}

export type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full whitespace-nowrap select-none " +
  "font-[family-name:var(--font-heading)] font-semibold tracking-[-0.2px] " +
  "transition-all duration-150 ease-out active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--brand)_45%,transparent)] " +
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--brand)] text-[var(--on-brand)] hover:brightness-95 hover:shadow-[var(--shadow)]",
  secondary: "border-2 border-[var(--border)] bg-transparent text-[var(--text)] hover:bg-[var(--soft)]",
  ghost: "bg-transparent text-[var(--brand-deep)] hover:bg-[var(--soft)]",
  danger: "bg-[var(--danger)] text-white hover:brightness-95",
};

// min-h garante alvo de toque confortável no celular
const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-base",
  md: "min-h-14 px-6 text-[18px]",
  lg: "min-h-16 px-7 text-xl",
};

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" className="animate-spin motion-reduce:animate-none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function create(variant: Variant) {
  const Component = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonVariant(
    { icon, iconRight, size = "md", fullWidth, loading, href, className = "", children, disabled, type = "button", ...rest },
    ref,
  ) {
    const classes = [base, variants[variant], sizes[size], fullWidth ? "w-full" : "", className].join(" ");
    const content = (
      <>
        {loading ? <Spinner /> : icon}
        {children}
        {!loading && iconRight}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes} aria-disabled={disabled || loading || undefined}>
          {content}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {content}
      </button>
    );
  });
  Component.displayName = `Button.${variant[0].toUpperCase()}${variant.slice(1)}`;
  return Component;
}


export const Button = {
  Primary: create("primary"),
  Secondary: create("secondary"),
  Ghost: create("ghost"),
  Danger: create("danger"),
};
