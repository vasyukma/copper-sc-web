import { FC } from 'react';
import styles from './ElementTitle.module.css';

interface IProps {
  titleText: string;
}
export const ElementTitle: FC<IProps> = ({ titleText }) => {
  return (
    <div className={`${styles.Block} ${styles.Block_theme_default}`}>
      <div className={styles.Block__text}>{titleText}</div>
    </div>
  );
};

export default ElementTitle;
