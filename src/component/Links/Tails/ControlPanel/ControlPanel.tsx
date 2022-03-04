import { FC } from 'react';
import { useAppSelector } from '../../../../hook/redux';
import { RootState } from '../../../../store/store';
import ChangeBtn from './ChangeBtn/ChangeBtn';
import styles from './ControlPanel.module.css';
import CreateBtn from './CreateBtn/CreateBtn';

interface IProps {}
export const ControlPanel: FC<IProps> = ({}) => {
  return (
    <div className={styles.__wrapper}>
      <CreateBtn />
      <ChangeBtn />
    </div>
  );
};

export default ControlPanel;
