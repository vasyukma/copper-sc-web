import { FC } from 'react';
import { useSelector } from 'react-redux';
import { copperSkApi } from '../../../../service/CopperSkService';
import { RootState } from '../../../../store/store';
import { Branch } from './Branch/Branch';
import styles from './NodesChildren.module.css';

interface IProps {}

export const NodesChildren: FC<IProps> = ({}) => {
  let selectedPathNode = useSelector(
    (state: RootState) => state.linksSlice.selectedPathNode
  );

  const { data: rootNode } = copperSkApi.useFetchRootNodeQuery('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {selectedPathNode && rootNode && (
          <Branch node={selectedPathNode} rootNode={rootNode} />
        )}
      </div>
    </div>
  );
};

export default NodesChildren;
