import type { ReactNode } from "react";

interface InfoItemProps {
  icon: ReactNode;
  className?: string;
  children: ReactNode;
}
export function InfoItem({ icon, className = "", children }: InfoItemProps) {
  return (
    <span className={`inline-flex items-center gap-2 text-base ${className}`}>
      <span className="shrink-0" aria-hidden="true">{icon}</span>
      {children}
    </span>
  );
}
