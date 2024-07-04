import React from "react";
import { TooltipInterface } from "@/interfaces";
import styles from "./Tooltip.module.scss";

const InfoModal: React.FC<TooltipInterface> = ({
  doughType,
  pizzaSize,
  size,
  weight,
  nutritions,
}: TooltipInterface) => {
  return (
    <div className={styles.tooltip__container}>
      <h2 className={styles.tooltip__title}> Пишевая ценность на 100 г</h2>
      <div className={styles.nutritions__container}>
        {nutritions.map((nutrition) => (
          <div key={nutrition.title}>{nutrition.title && nutrition.unit}</div>
        ))}
      </div>
      <div className={styles.}></div>
    </div>
  );
};

export default InfoModal;
