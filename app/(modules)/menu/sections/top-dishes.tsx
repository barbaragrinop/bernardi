import { PotIcon } from "@/app/components/Icons";
import Image from "next/image";

interface TopDish {
  id: number;
  name: string;
  description: string;
  small: number | null; 
  large: number;
  image: string; 
}
const topDishes: TopDish[] = [
  { id: 1, name: "Frango à Parmegiana", description: "Arroz, feijão, fritas e salada", small: 24, large: 28, image: "" },
  { id: 2, name: "Frango empanado", description: "Arroz, feijão, purê e salada", small: 22, large: 24, image: "" },
  { id: 3, name: "Churrasco misto", description: "Arroz, feijão, farofa e vinagrete", small: null, large: 28, image: "" },
];

function TopDishCard({ dish, rank }: { dish: TopDish; rank: number }) {
  const price = dish.small ?? dish.large;

  return (
    <li className="relative w-[280px] flex-none snap-start overflow-hidden rounded-[28px] bg-[var(--surface)] shadow-[var(--shadow)]">
      {/* foto */}
      <div className="relative h-52 w-full overflow-hidden bg-[var(--soft)]">
        {dish.image ? (
          <Image src={dish.image} alt={dish.name} fill sizes="280px" className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--brand)_28%,transparent),transparent_65%)] text-[var(--brand-deep)]">
            <PotIcon size={44} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* posição no ranking */}
      <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--brand-deep)] shadow-md">
        {rank}º
      </span>

      {/* preço sobre a foto */}
      <div className="absolute right-3 top-[152px] flex items-baseline gap-1.5 rounded-2xl bg-[var(--brand)] px-3.5 py-1.5 text-[var(--on-brand)] shadow-xl">
        <span className="text-xs font-semibold">{dish.small ? "a partir de" : "por"}</span>
        <b className="font-[family-name:var(--font-heading)] text-[30px] font-bold leading-none tracking-tight">
          <small className="mr-0.5 text-base font-semibold">R$</small>
          {price}
        </b>
      </div>

      {/* nome e descrição */}
      <div className="p-4">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold leading-tight">{dish.name}</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{dish.description}</p>
      </div>
    </li>
  );
}

export function TopDishesSection() {
  return (
    <section className="-mx-5 mt-9">
      <div className="px-5">
        <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold">Mais pedidos</h2>
        <p className="text-sm text-[var(--text-muted)]">Os preferidos dos nossos clientes</p>
      </div>

      <ul className="mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 scrollbar-thin pointer-coarse:scrollbar-none">
        {topDishes.map((dish, index) => (
          <TopDishCard key={dish.id} dish={dish} rank={index + 1} />
        ))}
      </ul>
    </section>
  );
}