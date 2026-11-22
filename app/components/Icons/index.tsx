import type { ReactNode, SVGProps } from "react";
export type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { size?: number };

function make(children: ReactNode) {
  return function Icon({ size = 24, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  };
}

export const AlertIcon = make(<><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></>);
export const ArrowDownIcon = make(<><path d="M12 5v14M19 12l-7 7-7-7" /></>);
export const ArrowLeftIcon = make(<><path d="M19 12H5M12 19l-7-7 7-7" /></>);
export const ArrowRightIcon = make(<><path d="M5 12h14M12 5l7 7-7 7" /></>);
export const ArrowUpIcon = make(<><path d="M12 19V5M5 12l7-7 7 7" /></>);
export const BagIcon = make(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" /></>);
export const BikeIcon = make(<><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" /><path d="M15 6h-3l-3 8h9M12 14l-1-4M14 3h3" /></>);
export const CheckIcon = make(<><path d="M20 6 9 17l-5-5" /></>);
export const ChevronDownIcon = make(<><path d="M6 9l6 6 6-6" /></>);
export const ClockIcon = make(<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>);
export const CompanyIcon = make(<><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" /></>);
export const EditIcon = make(<><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>);
export const HomeIcon = make(<><path d="M3 11 12 3l9 8M5 10v10h14V10" /></>);
export const ImageIcon = make(<><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></>);
export const InfoIcon = make(<><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></>);
export const MapPinIcon = make(<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>);
export const MenuIcon = make(<><path d="M7 3v8a2 2 0 0 0 4 0V3M9 3v18M17 3c-2 2-3 5-3 8h3v10" /></>);
export const MinusIcon = make(<><path d="M5 12h14" /></>);
export const MoreIcon = make(<><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></>);
export const MotorcycleIcon = make(<><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" /><path d="M15 6h3l1.5 5.5M5.5 17.5 9 9h5l3.5 8.5M9 9 7 6H5" /></>);
export const OrdersIcon = make(<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>);
export const PhoneIcon = make(<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></>);
export const PlusIcon = make(<><path d="M12 5v14M5 12h14" /></>);
export const PotIcon = make(<><path d="M4 11h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM2 11h20M8 7c0-2 2-2 2-4M14 7c0-2 2-2 2-4" /></>);
export const PrintIcon = make(<><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" /></>);
export const QrScanIcon = make(<><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10" /></>);
export const StarIcon = make(<><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z" /></>);
export const StoreIcon = make(<><path d="M3 9l2-5h14l2 5M3 9h18v11H3zM9 20v-6h6v6" /></>);
export const TrashIcon = make(<><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" /></>);
export const WhatsAppIcon = make(<><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z" /></>);

export const icons = {
  alert: AlertIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowUp: ArrowUpIcon,
  bag: BagIcon,
  bike: BikeIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  clock: ClockIcon,
  company: CompanyIcon,
  edit: EditIcon,
  home: HomeIcon,
  image: ImageIcon,
  info: InfoIcon,
  mapPin: MapPinIcon,
  menu: MenuIcon,
  minus: MinusIcon,
  more: MoreIcon,
  motorcycle: MotorcycleIcon,
  orders: OrdersIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  pot: PotIcon,
  print: PrintIcon,
  qrScan: QrScanIcon,
  star: StarIcon,
  store: StoreIcon,
  trash: TrashIcon,
  whatsApp: WhatsAppIcon,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  const Component = icons[name];
  return <Component {...props} />;
}
