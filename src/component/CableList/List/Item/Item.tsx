import { FC } from 'react';
import styles from './Item.module.css';

interface IProps {}
export const Item: FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}></div>
    </div>
  );
};
