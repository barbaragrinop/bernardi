import { ClockIcon, PotIcon, StarIcon, StoreIcon } from "@/app/components/Icons";
import Image from "next/image";

const HERO_IMAGE = "";
const STARTING_PRICE = 22;

export function HeroSection() {
  return (
       <section className="relative mt-3 overflow-hidden rounded-[32px] bg-[var(--hero)] text-[var(--hero-text)]">
        {/* brilho amarelo de fundo */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand)] opacity-40 blur-3xl" />

        <div className="relative flex flex-col gap-4 px-6 pt-8">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
            <StarIcon size={14} /> Comida caseira de verdade
          </span>

          <h1 className="font-[family-name:var(--font-heading)] text-[42px] font-bold leading-[1.02] tracking-[-0.8px]">
            Hoje tem <span className="text-[var(--brand)]">marmita</span> quentinha!
          </h1>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--hero-text-muted)]">
            <span className="inline-flex items-center gap-1.5"><ClockIcon size={16} /> Entrega 35–40 min</span>
            <span className="inline-flex items-center gap-1.5"><StoreIcon size={16} /> Retirada 20 min</span>
          </div>
        </div>

        {/* imagem principal + etiqueta de preço */}
        <div className="relative mt-6">
          <div className="relative h-60 w-full overflow-hidden rounded-t-[28px] bg-white/5">
            {HERO_IMAGE ? (
              <Image src={HERO_IMAGE} alt="Marmita do dia" fill priority sizes="480px" className="object-cover" />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--brand)_28%,transparent),transparent_65%)] text-[var(--brand)]">
                <PotIcon size={56} />
              </div>
            )}
          </div>

          <div className="absolute bottom-4 left-4 flex flex-col rounded-2xl bg-[var(--brand)] px-4 py-2 leading-tight text-[var(--on-brand)] shadow-xl">
            <span className="text-xs font-semibold">marmitas a partir de</span>
            <b className="font-[family-name:var(--font-heading)] text-[38px] font-bold leading-none tracking-tight">
              <small className="mr-0.5 text-base font-semibold">R$</small>
              {STARTING_PRICE}
            </b>
          </div>
        </div>
      </section>
  )
}
