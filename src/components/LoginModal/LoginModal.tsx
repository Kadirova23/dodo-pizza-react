import { ModalContext } from "@/context";
import React, { useContext, useState } from "react";
import { Button } from "../Button";
import { PhoneInput } from "react-international-phone";
import styles from "./LoginModal.module.scss";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const LoginModal: React.FC = () => {
  const { isModalOpen, toggleModal } = useContext(ModalContext);
  const [phone, setPhone] = useState("");
  const isValid = isPhoneValid(phone);

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      <div className={styles.modal__container}>
        <div className={styles.modal__background} onClick={toggleModal}></div>
        <div className={styles.modal__content}>
          <span className={styles.modal__close__icon} onClick={toggleModal}>
            <img src="/icons/close-icon.svg" alt="close icon" />
          </span>
          <div className={styles.modal__description}>
            <h3 className={styles.modal__title}>Вход на сайт</h3>
            <p className={styles.modal__text}>
              Подарим подарок на день рождения, сохраним адрес доставки и
              расскажем об акциях
            </p>
          </div>

          <div className={styles.label__box}>
            <span className={styles.label__box_country}>Страна</span>
            <span className={styles.label__box_number}>Номер телефона</span>
          </div>
          <PhoneInput
            defaultCountry="uz"
            className={styles.phone_input__box}
            countrySelectorStyleProps={{
              className: styles.phone_input__country_box,
              buttonClassName: styles.phone_input__country_btn,
            }}
            inputClassName={styles.phone_input__number_box}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            hideDropdown
            forceDialCode
          />

          <div className={styles.button}>
            <Button onClick={toggleModal} disabled={!isValid} type="secondary">
              Выслать код
            </Button>
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export default LoginModal;
