import Image from "next/image";

interface LogoProps {
  /** Caminho da imagem em /public sem src, mostra o espaço reservado */
  src?: string;
  alt?: string;
}

/** Logo da loja ocupa 120×48. */
export function Logo({ src, alt = "Logo" }: LogoProps) {
  if (src) {
    return <Image src={src} alt={alt} width={120} height={48} className="h-12 w-[120px] object-contain" priority />;
  }

  return (
    <div className="flex h-12 w-[120px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-brand bg-warning-bg leading-tight">
      <span className="font-display text-sm font-bold text-brand-deep">SEU LOGO</span>
      <span className="text-[11px] text-muted">espaço de 120×48</span>
    </div>
  );
}
