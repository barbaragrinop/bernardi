export const fonts = {
  heading: "var(--font-poppins), Poppins, sans-serif", // títulos, botões, números
  body: "var(--font-inter), Inter, sans-serif", // texto corrido
  headingLetterSpacing: "-0.2px",
} as const;

export const colors = {
  light: {
    bg: "#FFFAEE", // fundo da página (creme quente)
    surface: "#FFFFFF", // cartões
    text: "#1C1710",
    textMuted: "#5C5446",
    border: "#D2C8B2",
    soft: "#F4EBD6", // divisórias e fundos suaves
    brand: "#FFC21A", // cor da marca: amarelo-girassol (botão principal, preços)
    brandDeep: "#946000", // texto da marca sobre fundo claro
    onBrand: "#1C1710", // texto sobre a cor da marca
    hero: "#1C1710", // faixa de destaque
    heroText: "#FFF4EA",
    heroTextMuted: "#D8C8BC",
    success: "#14804A",
    successBg: "#DDF5E7",
    danger: "#C42B1C",
    dangerBg: "#FDE4E1",
    warningBg: "#FFF0D1",
    shadow: "0 8px 28px rgba(28,23,16,.10)",
  },
  dark: {
    bg: "#121110",
    surface: "#1D1B17",
    text: "#F7EFE9",
    textMuted: "#CBBDB3",
    border: "#8F827A",
    soft: "#2C2820",
    brand: "#FFC21A",
    brandDeep: "#FFD25A",
    onBrand: "#1C1710",
    hero: "#26211A",
    heroText: "#FFF4EA",
    heroTextMuted: "#D8C8BC",
    success: "#7BE0A8",
    successBg: "#0E2A1B",
    danger: "#FF8A7A",
    dangerBg: "#3A1512",
    warningBg: "#2E2312",
    shadow: "none",
  },
} as const;

export const fontSize = {
  xs: "14px",
  sm: "16px",
  base: "18px",
  lg: "20px",
  xl: "24px",
  "2xl": "30px",
  "3xl": "34px",
} as const;

export const fontWeight = { regular: 400, medium: 500, semibold: 600, bold: 700 } as const;

export const radius = { sm: "12px", md: "20px", lg: "32px", full: "999px" } as const;

export const spacing = { 1: "4px", 2: "8px", 3: "12px", 4: "16px", 5: "24px", 6: "32px", 8: "48px" } as const;

/** Largura referência  telas mobile */
export const layout = { phoneWidth: "390px", minTouch: "48px" } as const;

export const orderStatus = {
  NEW: { label: "Novo", color: "warning" },
  PREPARING: { label: "Em preparo", color: "brand" },
  READY: { label: "Pronto", color: "brand" },
  ON_ROUTE: { label: "A caminho", color: "brand" },
  DELIVERED: { label: "Entregue", color: "success" },
  PICKED_UP: { label: "Retirado", color: "success" },
  CANCELLED: { label: "Cancelado", color: "danger" },
} as const;


const toVars = (c: Record<string, string>) =>
  Object.entries(c)
    .map(([k, v]) => `--${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}:${v};`)
    .join("");

export function cssVariables(): string {
  return (
    `:root{${toVars(colors.light)}--font-heading:${fonts.heading};--font-body:${fonts.body};` +
    `--radius-sm:${radius.sm};--radius-md:${radius.md};--radius-lg:${radius.lg};color-scheme:light}` +
    `@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){${toVars(colors.dark)}color-scheme:dark}}` +
    `:root[data-theme="dark"]{${toVars(colors.dark)}color-scheme:dark}` +
    `body{background:var(--bg);color:var(--text);font-family:var(--font-body);font-size:${fontSize.base};line-height:1.5}` +
    `h1,h2,h3,button{font-family:var(--font-heading);letter-spacing:${fonts.headingLetterSpacing}}`
  );
}

export const theme = { fonts, colors, fontSize, fontWeight, radius, spacing, layout, orderStatus } as const;
export type Theme = typeof theme;
