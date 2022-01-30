import { FC } from 'react';
import { INode } from '../../model/INode';
import { copperSkApi } from '../../service/CopperSkService';
import styles from './NodeExplorer.module.css';

const NodeExplorer = () => {
  const {
    data: rootNode,
    error: fetchRootError,
    isLoading: fetchRootIsLoading,
  } = copperSkApi.useFetchRootNodeQuery('');

  return (
    <div className={styles.block}>
      <div className={styles.element}>
        <h1>Node explorer</h1>
        {fetchRootIsLoading && <h1>Идёт загрузка...</h1>}
        {fetchRootError && <h1>Произошла ошибка</h1>}
      </div>
    </div>
  );
};

interface TreeNodeItemProps {
  node: INode;
}

const BranchNode: FC<TreeNodeItemProps> = ({ node }) => {
  const {
    data: children,
    error,
    isLoading,
    // } = copperSkApi.useFetchChildrenNodeQuery(node.id);
  } = copperSkApi.useFetchChildrenNodeQuery(node.id);

  return (
    <div className={styles.block}>
      <div className={styles.element}>
        {node.id}-{node.longName}
      </div>
      <div>
        {children &&
          children.map((child) => {
            return <BranchNode node={child} />;
          })}
      </div>
    </div>
  );
};

export function getNode(node: INode) {
  return <TreeNode node={node} />;
}

const TreeNode: FC<TreeNodeItemProps> = ({ node }) => {
  debugger;
  return (
    <div>
      <BranchNode node={node} />
    </div>
  );
};

export default NodeExplorer;
