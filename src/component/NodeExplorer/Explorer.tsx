import { copperSkApi } from '../../service/CopperSkService';
import Content from './Content/Content';
import styles from './Explorer.module.css';
import Tree from './Tree/Tree';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentNode } from '../../store/reducer/nodeExplorerSlice';

const Explorer = () => {
  let dispatch = useDispatch();

  const {
    data: rootNode,
    error: fetchRootError,
    isLoading: fetchRootIsLoading,
  } = copperSkApi.useFetchRootNodeQuery('');

  useEffect(() => {
    dispatch(setCurrentNode(rootNode));
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Tree}>
        {fetchRootIsLoading && <h1>Идёт загрузка...</h1>}
        {fetchRootError && <h1>Ошибка получения данных</h1>}
        {rootNode && <Tree root={rootNode} />}
      </div>
      <div className={styles.Data}>
        <Content />
      </div>
    </div>
  );
};

export default Explorer;
