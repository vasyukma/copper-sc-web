import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { copperSkApi } from '../../service/CopperSkService';
import { setCurrentNode } from '../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../store/store';
import EditFormContainer from './EditForm/EditFormContainer';
import { EditFrom } from './EditForm/EditForm';
import styles from './Explorer.module.css';
import Node from './Node/Node';
import Tree from './Tree/Tree';

const Explorer = () => {
  // const isEditNode = useSelector(
  //   (state: RootState) => state.nodeExplorerSlice.isEditNode
  // );

  const dispatch = useDispatch();

  const {
    data: rootNode,
    error: fetchRootError,
    isLoading: fetchRootIsLoading,
  } = copperSkApi.useFetchRootNodeQuery('');

  useEffect(() => {
    dispatch(setCurrentNode(rootNode));
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Tree}>
        {fetchRootIsLoading && <h1>Идёт загрузка...</h1>}
        {fetchRootError && <h1>Ошибка получения данных</h1>}
        {rootNode && <Tree root={rootNode} />}
      </div>
      <div className={styles.Data}>
        <Node />
      </div>
      {/* {isEditNode && (
        <div className={styles.editForm}>
          <Conteiner />
        </div>
      )} */}
    </div>
  );
};

export default Explorer;
