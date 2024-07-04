import { AddonContextType, ModalContextType } from "@/interfaces";
import { createContext } from "react";

const defaultValue: ModalContextType = {
  isModalOpen: false,
  toggleModal: () => {},
};

export const ModalContext = createContext<ModalContextType>(defaultValue);

const selectedAddon: AddonContextType = {
  onAddonSelect: () => {},
  selectedAddons: [],
};

export const AddonContext = createContext<AddonContextType>(selectedAddon);
