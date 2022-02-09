import { FC } from "react";
import { ILink } from "../../../../../model/ILink";
import styles from "./Tail.module.css";

interface LinkItemProps {
  links: ILink[];
}

const Tail: FC<LinkItemProps> = ({ links }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Для конца линии </div>
      {links.map((item) => {
        return <div className={styles.block__item}> {item.name} </div>;
      })}
    </div>
  );
};

export default Tail;
