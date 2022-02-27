import { FC } from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import styles from './Crossing.module.css';
import { CrossTypeList } from './ControlPanel/CrossTypeList/CrossTypeList';
import Tree from '../NodeExplorer/Tree/Tree';

interface IProps {}
export const Crossing: FC<IProps> = ({}) => {
  return (
    <div className={styles.__wrapper}>
      <div>
        <ControlPanel />
      </div>
      <div className={styles.item}>Кроссировка</div>
      <div>
        <Tree />
      </div>
      <div>
        <CrossTypeList />
      </div>
    </div>
  );
};

export default Crossing;
