import { FC } from 'react';
import styles from './ControlPanel.module.css';
import Create from './Create/Create';

interface IProps {}
export const ControlPanel: FC<IProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Create />
      </div>
    </div>
  );
};

export default ControlPanel;
