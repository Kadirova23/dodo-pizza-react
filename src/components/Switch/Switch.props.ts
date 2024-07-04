import { SwitchItemIntreface } from "@/interfaces";

export interface SwitchProps {
  values: SwitchItemIntreface[];
  selectedId: number;
  onSelect: (id: number) => void;
  disabled?: (id: number) => boolean;
}
