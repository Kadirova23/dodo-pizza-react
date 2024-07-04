export interface ModalContextType {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export interface AddonContextType {
  onAddonSelect: (addon: string) => void;
  selectedAddons: string[];
}

export interface ButtonInterface {
  onClick?: () => void;
  children: string[] | string;
  type: string;
  disabled?: boolean;
}

export interface Ingredient {
  id: string;
  title: string;
}

export interface Image {
  id: string;
  imageUrl: string;
}

export interface Pizza {
  id: string;
  title: string;
  coverImageLink: string;
  price: Price;
  ingredients: Ingredient[];
  images: Image[];
  addons: string[];
  diameter: Diameter;
  weight: WeightInterface;
  nutritions: NutritionsInterface[];
}

export interface PizzaExtendedData extends Pizza {}

export interface SwitchItemIntreface {
  id: number;
  title: string;
}

export interface AddonInterface {
  id: string;
  title: string;
  price: Price;
  image: string;
}

export interface SizeInterface {
  small: number;
  medium: number;
  large: number;
}

export interface Price extends SizeInterface {}

export interface SelectedAddon {
  id: string;
  imgPath: string;
  title: string;
  price: number;
  isSelected: boolean;
}

export interface Diameter extends SizeInterface {}

export interface WeightInterface {
  unit: string;
  doughType: DoughTypeInterface;
}

export interface NutritionsInterface {
  title: string;
  unit: string;
  doughType: DoughTypeInterface;
}

export interface DoughTypeInterface {
  traditional: { size: SizeInterface };
  thin: { size: ThinDoughTypeSize };
}

export interface ThinDoughTypeSize extends Omit<SizeInterface, "small"> {}

export interface TooltipInterface {
  weight: WeightInterface;
  nutritions: NutritionsInterface[];
  size: SizeInterface;
}
