import styles from './Item.module.css';
import { FC } from 'react';

interface IItem {
  text: string;
}

const Item: FC<IItem> = ({ text }) => {
  return <div className={styles.wrapper}>{text}</div>;
};

export default Item;
