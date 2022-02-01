import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from './Content.module.css';
import Info from './Info/Info';
import List from './List/List';
import Header from './List/Header/Header';

interface IProps {}

const Content: FC<IProps> = () => {
  let currentNode = useSelector(
    (state: RootState) => state.nodeExplorer.currentNode
  );
  const nodeExplorerDispatch = useDispatch();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <div className={styles.Info}>
          {currentNode && <Info node={currentNode} />}
        </div>
      </div>
      <div className={styles.Header}>{<Header />}</div>
      <div className={styles.List}>
        {currentNode && <List parentNode={currentNode} />}
      </div>
    </div>
  );
};

export default Content;
