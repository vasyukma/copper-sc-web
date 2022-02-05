import { FC } from 'react';
import styles from './Header.module.css';

interface IProps {}
export const Header: FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}></div>
    </div>
  );
};

export default Header;
