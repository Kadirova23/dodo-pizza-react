import React, { useContext, useEffect, useState } from "react";
import { ModalProps } from "./Modal.props";
import styles from "./Modal.module.scss";
import { Switch } from "../Switch";
import { Diameter, Price, SwitchItemIntreface } from "@/interfaces";
import { AddonContext, ModalContext } from "../../context";
import Addons from "../Addons/Addons";
import { Button } from "../Button";
import { addons } from "@/constants/modal.data";
import { formatPrice } from "@/utilities";
import { Tooltip } from "../Tooltip";

const Modal: React.FC<ModalProps> = ({ data }: ModalProps) => {
  const { toggleModal } = useContext(ModalContext);
  const [pizzaSize, setPizzaSize] = useState<number>(2);
  const [pizzaDough, setPizzaDough] = useState<number>(1);
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const onAddonSelect = (addon: string) => {
    const isSelectedAddonExist = selectedAddons.includes(addon);
    if (!isSelectedAddonExist) {
      setSelectedAddons((prevAddon) => [...prevAddon, addon]);
    } else {
      setSelectedAddons((prevAddons: string[]) =>
        prevAddons.filter((selectedAddon: string) => selectedAddon !== addon)
      );
    }
  };

  const switchPizzaSizeValues: SwitchItemIntreface[] = [
    { id: 1, title: "Маленькая" },
    { id: 2, title: "Средняя" },
    { id: 3, title: "Большая" },
  ];

  const switchDoughTypeValues: SwitchItemIntreface[] = [
    { id: 1, title: "Традиционное" },
    { id: 2, title: "Тонкое" },
  ];

  useEffect(() => {
    if (pizzaSize === 1 && pizzaDough === 2) {
      setPizzaDough(1);
    }
  }, [pizzaSize]);

  const isDoughDisabled = (id: number) => {
    return pizzaSize === 1 && id === 2;
  };

  const switchImageSize = (pizzaSize: number) => {
    if (pizzaSize === 1) {
      return styles.small_img;
    } else if (pizzaSize === 2) {
      return styles.medium_img;
    } else if (pizzaSize === 3) {
      return styles.large_img;
    }
  };

  const getPizzaImageUrl = (pizzaSize: number, pizzaDough: number) => {
    let imgId: string;
    if (pizzaSize === 1 && pizzaDough === 1) {
      imgId = "1";
    } else if (pizzaSize === 2 && pizzaDough === 1) {
      imgId = "2";
    } else if (pizzaSize === 3 && pizzaDough === 1) {
      imgId = "3";
    } else if (pizzaSize === 2 && pizzaDough === 2) {
      imgId = "4";
    } else if (pizzaSize === 3 && pizzaDough === 2) {
      imgId = "5";
    }

    const image = data.images.find((img) => img.id === imgId);
    if (image) {
      return image.imageUrl;
    } else {
      return "";
    }
  };

  const getDoughTypeTitle = (
    id: number,
    switchDoughTypeValues: SwitchItemIntreface[]
  ) => {
    const doughType = switchDoughTypeValues.find((dough) => dough.id === id);
    return doughType ? doughType.title : "";
  };

  const pizzaParameters = (
    diameter: Diameter,
    pizzaSize: number,
    pizzaDough: number
  ) => {
    const size =
      pizzaSize === 1
        ? diameter.small
        : pizzaSize === 2
        ? diameter.medium
        : diameter.large;
    const dough = getDoughTypeTitle(pizzaDough, switchDoughTypeValues);
    return `${size} см, ${dough} тесто`;
  };

  const getPrice = (price: Price) => {
    if (pizzaSize === 1) {
      return price.small;
    } else if (pizzaSize === 2) {
      return price.medium;
    } else if (pizzaSize === 3) {
      return price.large;
    }
    return 0;
  };

  const calculatePrice = () => {
    let price = getPrice(data.price);
    addons.forEach((addon) => {
      if (selectedAddons.includes(addon.id)) {
        price += getPrice(addon.price);
      }
    });
    return formatPrice(price);
  };

  return (
    <AddonContext.Provider value={{ onAddonSelect, selectedAddons }}>
      <div className={styles.modal__container}>
        <div className={styles.modal__background} onClick={toggleModal}></div>
        <div className={styles.modal__content}>
          <span className={styles.modal__close__icon} onClick={toggleModal}>
            <img src="/icons/close-icon.svg" alt="close icon" />
          </span>
          <div className={styles.modal__img__container}>
            <div className={styles.modal__pizza__border}>
              <img src="/images/large-pizza-size.svg" alt="large border" />
            </div>
            <div className={styles.modal__pizza__border__medium}>
              <img src="/images/medium-pizza-size.svg" alt="medium border" />
            </div>

            <img
              className={`${styles.pizza__image} ${switchImageSize(pizzaSize)}`}
              src={getPizzaImageUrl(pizzaSize, pizzaDough)}
              alt="pizza picture"
            />
          </div>
          <div className={styles.pizza__content}>
            <div className={styles.pizza__wrap}>
              <div className={styles.pizza__details}>
                <div className={styles.pizza__container}>
                  <h1 className={styles.pizza__name}>{data.title}</h1>
                  <div className={styles.pizza__tooltip}>
                    <img
                      className={styles.pizza__nutritions}
                      src="/icons/info-icon.svg"
                      onClick={toggleTooltip}
                    />
                    {isTooltipOpen && (
                      <Tooltip
                        weight={data.weight}
                        nutritions={data.nutritions}
                        pizzaSize={pizzaSize}
                        pizzaDough={pizzaDough}
                        diameter={data.diameter}
                      />
                    )}
                  </div>
                </div>
                <p className={styles.pizza__diameter}>
                  {pizzaParameters(
                    data.diameter,
                    pizzaSize,
                    pizzaDough
                  ).toLowerCase()}
                </p>
                <p className={styles.pizza__description}>
                  {data.ingredients
                    .map((ingredient) => ingredient.title)
                    .join(", ")}
                </p>
                <div className={styles.switch}>
                  <Switch
                    values={switchPizzaSizeValues}
                    selectedId={pizzaSize}
                    onSelect={setPizzaSize}
                  />
                  <Switch
                    values={switchDoughTypeValues}
                    selectedId={pizzaDough}
                    onSelect={setPizzaDough}
                    disabled={isDoughDisabled}
                  />
                </div>
                <h3 className={styles.addons__title}>Добавить по вкусу</h3>
                <Addons addonsIDs={data.addons} pizzaSize={pizzaSize} />
              </div>
            </div>
            <div className={styles.pizza__button_box}>
              <Button onClick={toggleModal} type="secondary">
                В корзину за {calculatePrice().toString()} сум
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AddonContext.Provider>
  );
};

export default Modal;
