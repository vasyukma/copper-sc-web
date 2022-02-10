import { FC } from "react";
import { ILink } from "../../../../../model/Link";
import styles from "./Tail.module.css";

interface LinkItemProps {
  links: ILink[];
}

const Tail: FC<LinkItemProps> = ({ links }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>Для конца линии </div>
        {links.map((item) => {
          return (
            <div className={styles.block__item}>
              <div className={styles.normal}> {item.name} </div>
              <div className={styles.rotate}> {item.name} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tail;
