// Tokens da máscara:  9 = dígito · A = letra · * = letra ou dígito · resto = caractere fixo
const TOKENS: Record<string, RegExp> = {
  "9": /\d/,
  A: /[a-zA-Z]/,
  "*": /[a-zA-Z0-9]/,
};

export type Mask = string | readonly string[];

const slots = (mask: string) => [...mask].filter((c) => c in TOKENS).length;

export function applyMask(value: string, mask: Mask): string {
  const raw = value.replace(/[^a-zA-Z0-9]/g, "");
  const list = typeof mask === "string" ? [mask] : mask;
  const pattern = list.find((m) => slots(m) >= raw.length) ?? list[list.length - 1];

  let out = "";
  let i = 0;
  for (const m of pattern) {
    if (i >= raw.length) break;
    const token = TOKENS[m];
    if (!token) {
      out += m;
      continue;
    }
    while (i < raw.length && !token.test(raw[i])) i++;
    if (i >= raw.length) break;
    out += raw[i++].toUpperCase();
  }
  return out;
}

/** Remove a formatação: "(11) 98765-4321" → "11987654321". */
export const unmask = (value: string) => value.replace(/[^a-zA-Z0-9]/g, "");

/** Só dígitos na máscara? Então o celular deve abrir o teclado numérico. */
export const isNumericMask = (mask: Mask) =>
  (typeof mask === "string" ? [mask] : mask).every((m) => ![...m].some((c) => c === "A" || c === "*"));

export const masks = {
  phone: ["(99) 9999-9999", "(99) 99999-9999"],
  cpf: "999.999.999-99",
  cnpj: "99.999.999/9999-99",
  cep: "99999-999",
  date: "99/99/9999",
} as const satisfies Record<string, Mask>;
