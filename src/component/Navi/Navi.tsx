import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Navi.module.css";

interface NaviItemProps {
  selected: string;
}

export const Navi: FC<NaviItemProps> = ({ selected }) => {
  return (
    <div className={styles.block}>
      <div className={`${styles.item} ${selected} ? ${styles.selected}`}>
        <Link to="/cable-list">Кабельный журнал</Link>
      </div>
      <div className={styles.item}>
        <Link to="/labels">Этикирование</Link>
      </div>
      <div className={styles.item}>
        <Link to="/nodes">Узлы</Link>
      </div>
    </div>
  );
};

export default Navi;
