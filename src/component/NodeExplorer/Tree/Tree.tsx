import { FC } from 'react';
import { INode } from '../../../model/INode';
import Branch from './Branch/Branch';
import styles from './Tree.module.css';
import { copperSkApi } from '../../../service/CopperSkService';
import { useEffect } from 'react';
import { setCurrentNode } from '../../../store/reducer/nodeExplorerSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface ITree {
  // root: INode;
}

const Tree: FC<ITree> = ({}) => {
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
    <div className={styles.wrapper}>
      <div className={styles.data}>
        {rootNode && <Branch node={rootNode} indent="" />}
      </div>
    </div>
  );
};

export default Tree;
