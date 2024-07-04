import { useEffect, useRef } from "react";
import { SwitchProps } from "./Switch.props";
import styles from "./Switch.module.scss";

const Switch: React.FC<SwitchProps> = ({
  values,
  selectedId,
  onSelect,
  disabled = () => false,
}: SwitchProps) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current as HTMLDivElement;
      slider.style.width = `${100 / values.length}%`;
      slider.style.transform = `translateX(${(selectedId - 1) * 100}%)`;
    }
  }, [selectedId, values.length]);

  const handleClick = (id: number) => {
    const index = values.findIndex((value) => value.id === id);
    onSelect(id);
    if (sliderRef.current) {
      const slider = sliderRef.current as HTMLDivElement;
      slider.style.transform = `translateX(${index * 100}%)`;
    }
  };

  return (
    <div className={styles.switch__outer}>
      <div className={styles.switch__container}>
        {values.map(({ id, title }) => (
          <div
            key={id}
            className={`${styles.switch__item} ${
              disabled(id) ? styles.disabled : ""
            }`}
            onClick={() => handleClick(id)}
          >
            {title}
          </div>
        ))}
        <div ref={sliderRef} className={styles.switch__slider}></div>
      </div>
    </div>
  );
};

export default Switch;
