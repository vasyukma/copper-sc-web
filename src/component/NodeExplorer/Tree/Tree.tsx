import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { copperSkApi } from '../../../service/CopperSkService';
import { setCurrentNode } from '../../../store/reducer/nodeExplorerSlice';
import ElementTitle from '../../common/elementTitle/ElementTitle';
import Branch from './Branch/Branch';
import styles from './Tree.module.css';

interface IProps {}

const Tree: FC<IProps> = ({}) => {
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
    <div className={styles.Block}>
      <ElementTitle titleText="Места хранения" />
      <div className={styles.data}>
        {rootNode && <Branch node={rootNode} indent="" />}
      </div>
    </div>
  );
};

export default Tree;
