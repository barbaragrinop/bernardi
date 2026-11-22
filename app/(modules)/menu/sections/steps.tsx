interface Step {
  number: string;
  title: string;
  text: string;
}

const steps: Step[] = [
  { number: "1", title: "Escolha sua marmita", text: "Abra o Cardápio e veja os pratos e tamanhos do dia." },
  { number: "2", title: "Diga onde entregar", text: "Digite o CEP e a gente calcula o frete." },
  { number: "3", title: "Escolha como pagar", text: "Pix, dinheiro ou cartão." },
  { number: "4", title: "Acompanhe", text: "Você vê quando sai e quando chega." },
];

function StepCard({ step }: { step: Step }) {
  return (
    <li className="flex items-center gap-4 rounded-3xl bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
      <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[var(--brand)] font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--on-brand)]">
        {step.number}
      </span>
      <div>
        <b className="font-[family-name:var(--font-heading)] text-base">{step.title}</b>
        <p className="text-sm text-[var(--text-muted)]">{step.text}</p>
      </div>
    </li>
  );
}

export function StepsSection() {
  return (
    <section className="mt-10 ">
      <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold">Pedir é fácil</h2>
      <ol className="mt-4 grid gap-3">
        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </ol>
    </section>
  );
}