import { Badge } from "../Badge";
import { Logo } from "../Logo";

interface HeaderProps {
  isOpen?: boolean;
}

/** logo à esquerda e se a loja está aberta. */
export function Header({ isOpen = true }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-5">
      <Logo />
      {isOpen ? (
        <Badge variant="success" dot>Aberto agora</Badge>
      ) : (
        <Badge variant="danger" dot>Fechado</Badge>
      )}
    </header>
  );
}
