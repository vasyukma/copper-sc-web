import { FC } from 'react';
import styles from './CableList.module.css';
import { List } from './List/List';

interface IProps {}
export const CableList: FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>КЖ</div>
        <List />
      </div>
    </div>
  );
};
