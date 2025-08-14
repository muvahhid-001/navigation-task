import styles from "./Indicator.module.scss";

type IndicatorProps = {
  count: number;
  onClick?: () => void;
  isActive?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  className?: string;
  height: number;
  orientation: string;
};

export const Indicator = ({
  count,
  onClick,
  isActive,
  className,
  height,
  orientation,
  isFocused,
  isSelected,
}: IndicatorProps) => {
  if (count === 0) return null;

  return (
    <span
      onClick={onClick}
      className={`${styles.indicator} 
    ${isSelected ? styles.selected : isFocused ? styles.focused : ""} 
    ${isActive ? styles.active : ""} 
    ${className ?? ""} 
    ${orientation === "down" ? styles.downText : ""} 
    ${height <= 42 && orientation === "left" ? styles.position : ""}`}
    >
      {isActive ? `+${count}` : count}
    </span>
  );
};
