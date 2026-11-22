"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, MenuIcon, OrdersIcon } from "../Icons";

const items = [
  { href: "/", label: "Início", Icon: HomeIcon },
  { href: "/menu", label: "Cardápio", Icon: MenuIcon },
  { href: "/orders", label: "Meus pedidos", Icon: OrdersIcon },
];

/** Barra fixa no rodapé das páginas do cliente. */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(12px,env(safe-area-inset-bottom))]"
    >
      <ul className="pointer-events-auto mx-auto flex max-w-[430px] gap-1 rounded-[32px] border border-soft bg-surface p-2 shadow-card">
        {items.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "flex min-h-16 flex-col items-center justify-center gap-1 rounded-[24px] font-display text-sm font-semibold transition-colors",
                  active ? "bg-brand text-on-brand" : "text-muted hover:bg-soft",
                ].join(" ")}
              >
                <Icon size={24} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
