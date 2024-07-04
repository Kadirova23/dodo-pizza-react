import { Addon } from "./Addon";
import { AddonsProps } from "./Addons.props";
import { addons } from "@/constants/modal.data";
import styles from "./Addons.module.scss";
import { AddonInterface } from "@/interfaces";
import { AddonContext } from "@/context";
import { useContext } from "react";

const Addons: React.FC<AddonsProps> = ({
  addonsIDs,
  pizzaSize,
}: AddonsProps) => {
  const { selectedAddons } = useContext(AddonContext);

  const changeAddonPrice = (pizzaSize: number, addon: AddonInterface) => {
    if (pizzaSize === 1) {
      return addon.price.small;
    } else if (pizzaSize === 2) {
      return addon.price.medium;
    } else if (pizzaSize === 3) {
      return addon.price.large;
    } else {
      return addon.price.small;
    }
  };

  return (
    <div className={styles.addons__container}>
      {addonsIDs.map((id) => {
        const foundAddon = addons.find((addon) => id === addon.id);
        if (foundAddon) {
          const isAddonSelected = selectedAddons.includes(id);

          return (
            <Addon
              key={id}
              id={foundAddon.id}
              imgPath={foundAddon.image}
              title={foundAddon.title}
              price={changeAddonPrice(pizzaSize, foundAddon)}
              isSelected={isAddonSelected}
            />
          );
        }
      })}
    </div>
  );
};

export default Addons;
