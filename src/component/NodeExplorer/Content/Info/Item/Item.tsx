import styles from './Item.module.css';
import { FC } from 'react';

interface IProps {
  text: string | number;
}

const Item: FC<IProps> = ({ text }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>{text}</div>
    </div>
  );
};

export default Item;
