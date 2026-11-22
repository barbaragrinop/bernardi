interface PriceTagProps {
  label?: string;
  value: number;
  className?: string;
}

export function PriceTag({ label, value, className = "" }: PriceTagProps) {
  const [int, cents] = value.toFixed(2).split(".");

  return (
    <div className={`inline-flex flex-col rounded-[20px] bg-brand px-5 py-3 text-on-brand shadow-card ${className}`}>
      {label && <span className="text-sm font-semibold">{label}</span>}
      <span className="flex items-baseline gap-1 font-display font-bold leading-none">
        <span className="text-lg">R$</span>
        <span className="text-[44px] tracking-[-1px]">{int}</span>
        {cents !== "00" && <span className="text-lg">,{cents}</span>}
      </span>
    </div>
  );
}
