import { INode } from '../../../model/INode';
import styles from './NodeExplorerItem.module.css';
import { FC } from 'react';
import { copperSkApi } from '../../../service/CopperSkService';

interface NodeExplorerItemProps {
  node: INode;
}

const NodeExplorerItem: FC<NodeExplorerItemProps> = ({ node }) => {
  const {
    data: children,
    error,
    isLoading,
  } = copperSkApi.useFetchChildrenNodeQuery(node.id);

  return (
    <div className={styles.block}>
      <div className={styles.element}>
        {node.id}-{node.longName}
      </div>
    </div>
  );
};

export default NodeExplorerItem;
