import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cssVariables } from "@/theme";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased ppy-5`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVariables() }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
