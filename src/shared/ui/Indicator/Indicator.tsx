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
    ${height <= 22 && orientation === "left" ? styles.positionLeft : ""}
    ${height >= 23 && orientation === "left" ? styles.positionLeftTwo : ""}
    ${height > 60 && orientation === "left" ? styles.positionReset : ""}
    ${height <= 40 && orientation === "note" ? styles.positionNote : ""}`}
    >
      {isActive ? `+${count}` : count}
    </span>
  );
};
