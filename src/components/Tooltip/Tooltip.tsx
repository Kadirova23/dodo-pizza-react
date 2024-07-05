import React from "react";
import { Diameter, DoughTypeInterface, TooltipInterface } from "@/interfaces";
import styles from "./Tooltip.module.scss";

const InfoModal: React.FC<TooltipInterface> = ({
  pizzaDough,
  pizzaSize,
  weight,
  nutritions,
  diameter,
}: TooltipInterface) => {
  const getPizzaWeight = () => {
    if (pizzaSize === 1 && pizzaDough === 1) {
      return weight.doughType.traditional.size.small;
    } else if (pizzaSize === 2 && pizzaDough === 1) {
      return weight.doughType.traditional.size.medium;
    } else if (pizzaSize === 3 && pizzaDough === 1) {
      return weight.doughType.traditional.size.large;
    } else if (pizzaSize === 2 && pizzaDough === 2) {
      return weight.doughType.thin.size.medium;
    } else if (pizzaSize === 3 && pizzaDough === 2) {
      return weight.doughType.thin.size.large;
    }
  };

  const getNutritionValue = (doughType: DoughTypeInterface) => {
    if (pizzaDough === 1) {
      if (pizzaSize === 1) {
        return doughType.traditional.size.small;
      } else if (pizzaSize === 2) {
        return doughType.traditional.size.medium;
      } else if (pizzaSize === 3) {
        return doughType.traditional.size.large;
      }
    } else if (pizzaDough === 2) {
      if (pizzaSize === 2) {
        return doughType.thin.size.medium;
      } else if (pizzaSize === 3) {
        return doughType.traditional.size.large;
      }
    }
  };

  const getPizzaDiameter = (diameter: Diameter, pizzaSize: number) => {
    const size =
      pizzaSize === 1
        ? diameter.small
        : pizzaSize === 2
        ? diameter.medium
        : diameter.large;
    return size;
  };

  return (
    <div className={styles.tooltip__container}>
      <img
        className={styles.tooltip__container_svg}
        src="/icons/tooltip-icon.svg"
      />

      <h2 className={styles.tooltip__title}> Пищевая ценность на 100 г</h2>
      <div className={styles.nutritions__container}>
        {nutritions.map((nutrition) => (
          <div key={nutrition.title} className={styles.nutritions__item}>
            <span>{nutrition.title}</span>
            <span>
              {getNutritionValue(nutrition.doughType)} {nutrition.unit}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.params__container}>
        <div className={styles.nutritions__item}>
          <span>Вес</span>
          <span>{getPizzaWeight()} г</span>
        </div>

        <div className={styles.nutritions__item}>
          <span>Диаметр</span>
          <span>{getPizzaDiameter(diameter, pizzaSize)} см</span>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
