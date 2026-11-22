import { Button } from "@/app/components/Button";
import { Header } from "@/app/components/Header";
import { BagIcon, MapPinIcon } from "@/app/components/Icons";
import { Screen } from "@/app/components/Screen";
import { Sections } from "./sections";
import { InfoItem } from "@/app/components/InfoItem";


export default function MenuPage() {
  return (
    <Screen>
      <Header isOpen />
      <Sections.Hero />
      <Sections.TopDishes />
      <Sections.Steps />
      <Button.Primary icon={<BagIcon />} fullWidth size="lg" className="mt-8">
        Fazer meu pedido
      </Button.Primary>
      <p className="mt-8 flex justify-center text-muted">
        <InfoItem icon={<MapPinIcon size={20} />}>Atendimento só pelo WhatsApp</InfoItem>
      </p>
    </Screen>
  );
}