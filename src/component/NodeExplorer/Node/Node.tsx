import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ControlPanel from './ControlPanel/ControlPanel';
import InfoContainer from './Info/InfoContainer';
import Header from './List/Header/Header';
import List from './List/List';
import styles from './Node.module.css';

interface IProps {}

const Node: FC<IProps> = () => {
  let currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );
  // useSelector((state: RootState) => state.nodeExplorerSlice.isEditNode);
  // const nodeExplorerDispatch = useDispatch();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.controlPanel}>
        <ControlPanel />
      </div>
      <div className={styles.Content}>
        <div className={styles.Info}>
          {currentNode && <InfoContainer node={currentNode} />}
        </div>
      </div>
      <div className={styles.Header}>{<Header />}</div>
      <div className={styles.List}>
        {currentNode && <List parentNode={currentNode} />}
      </div>
    </div>
  );
};

export default Node;
