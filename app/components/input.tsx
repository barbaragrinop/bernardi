"use client";

import { forwardRef, useId, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { applyMask, isNumericMask, type Mask } from "../utils/mask";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  label: string;
  hint?: string;
  error?: string;
  prefix?: ReactNode;
  mask?: Mask;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, prefix, mask, id, className = "", required, onChange, maxLength, inputMode, ...rest },
  ref,
) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (mask) e.target.value = applyMask(e.target.value, mask);
    onChange?.(e);
  };
  const maskLength = mask ? Math.max(...(typeof mask === "string" ? [mask] : mask).map((m) => m.length)) : undefined;

  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`flex w-full flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--text)]">
        {label}
        {required && (
          <span aria-hidden="true" className="text-[var(--danger)]">
            {" "}*
          </span>
        )}
      </label>

      <div
        className={[
          "flex min-h-12 items-center gap-2 rounded-[var(--radius-md)] border-2 bg-[var(--surface)] px-4",
          "transition-all duration-200 ease-out",
          "focus-within:-translate-y-px focus-within:border-[var(--brand)]",
          "focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand)_35%,transparent)]",
          "motion-reduce:transition-none motion-reduce:transform-none",
          error
            ? "border-[var(--danger)] animate-[shake_0.4s_ease] motion-reduce:animate-none focus-within:border-[var(--danger)] focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--danger)_30%,transparent)]"
            : "border-[var(--border)]",
        ].join(" ")}
      >
        {prefix && <span className="font-semibold text-[var(--text-muted)]">{prefix}</span>}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={handleChange}
          maxLength={maxLength ?? maskLength}
          inputMode={inputMode ?? (mask && isNumericMask(mask) ? "numeric" : undefined)}
          className="h-11 min-w-0 flex-1 bg-transparent text-[length:inherit] text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] placeholder:opacity-70 disabled:cursor-not-allowed disabled:opacity-60"
          {...rest}
        />
      </div>

      {error ? (
        <p id={errorId} role="alert" className="m-0 animate-[slide-in_0.25s_ease] text-sm font-semibold text-[var(--danger)] motion-reduce:animate-none">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="m-0 animate-[slide-in_0.25s_ease] text-sm text-[var(--text-muted)] motion-reduce:animate-none">
          {hint}
        </p>
      ) : null}
    </div>
  );
});