import React, { useContext } from "react";
import styles from "./Addon.module.scss";
import { AddonProps } from "./Addon.props";
import { formatPrice } from "@/utilities";
import { AddonContext } from "@/context";
import classNames from "classnames";

const Addon: React.FC<AddonProps> = ({
  id,
  imgPath,
  title,
  price,
  isSelected,
}: AddonProps) => {
  const { onAddonSelect } = useContext(AddonContext);

  const clickHandler = () => {
    onAddonSelect(id);
  };

  return (
    <div
      className={classNames(styles.addon__container, {
        [styles.selected]: isSelected,
      })}
      onClick={clickHandler}
    >
      <img className={styles.addon__image} src={imgPath} />
      <h2 className={styles.addon__title}>{title}</h2>
      <div className={styles.addon__price}>{formatPrice(price)} сум</div>
    </div>
  );
};

export default Addon;
