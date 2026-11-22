import type { ReactNode } from "react";
import { BottomNav } from "../BottomNav";

interface ScreenProps {
  nav?: boolean;
  children: ReactNode;
}

/** Moldura das telas do cliente: largura de celular, margens e barra inferior. */
export function Screen({ nav = true, children }: ScreenProps) {
  return (
    <>
      <main className={`mx-auto w-full max-w-[430px] px-5 ${nav ? "pb-36" : "pb-10"}`}>{children}</main>
      {/* {nav && <BottomNav />} */}
    </>
  );
}
