import { FC } from 'react';
import styles from './List.module.css';

interface IProps {}
export const List: FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>List</div>
    </div>
  );
};
