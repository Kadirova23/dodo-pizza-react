import React from "react";
import styles from "./Button.module.scss";
import { ButtonInterface } from "@/interfaces";
import classNames from "classnames";

const Button: React.FC<ButtonInterface> = ({
  onClick,
  children,
  type = "primary",
  disabled = false,
}: ButtonInterface) => {
  return (
    <button
      className={classNames(styles.btn, styles[type])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
