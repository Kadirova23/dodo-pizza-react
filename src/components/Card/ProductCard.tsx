import React, { useContext } from "react";
import styles from "./ProductCard.module.scss";
import { Button } from "../Button";
import { PizzaProps } from "./ProductCard.props";
import { ModalContext } from "../../context";
import { formatPrice } from "@/utilities";
import { Pizza } from "@/interfaces";

const ProductCard: React.FC<PizzaProps> = ({
  data,
  setSelectedProduct,
}: PizzaProps) => {
  const { toggleModal } = useContext(ModalContext);

  const handleClick = () => {
    setSelectedProduct(data);
    toggleModal();
  };

  const getPizzaDescription = (data: Pizza) => {
    const allExceptLast = data.ingredients
      .slice(0, -1)
      .map((ingredient) => ingredient.title)
      .join(", ");
    const lastIngredient =
      data.ingredients[data.ingredients.length - 1].title.toLowerCase();

    if (data.ingredients.length > 1) {
      return `${allExceptLast} и ${lastIngredient}`;
    }
  };

  let initPrice = data.price.small;
  formatPrice(initPrice);

  return (
    <div className={styles.card__container} key={data.id} onClick={handleClick}>
      <div className={styles.card__content}>
        <img className={styles.product__image} src={data.coverImageLink} />
        <div className={styles.product__name}>{data.title}</div>
        <p className={styles.product__description}>
          {getPizzaDescription(data)}
        </p>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.product__price}>от {formatPrice(initPrice)} сум</p>
        <Button onClick={toggleModal} type="primary">
          Выбрать
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
