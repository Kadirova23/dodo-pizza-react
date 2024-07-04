import { Pizza } from "@/interfaces";

export interface PizzaProps {
  data: Pizza;
  setSelectedProduct: (product: Pizza) => void;
}
