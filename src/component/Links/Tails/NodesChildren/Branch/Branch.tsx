import { FC } from 'react';
import styles from './Branch.module.css';
import Node from './Node/Node';
import { INode } from '../../../../../model/INode';
import { INodePath } from '../../../../../model/INodePath';
import { copperSkApi } from '../../../../../service/CopperSkService';

interface IProps {
  node: INode;
  rootNode: INode;
}

export const Branch: FC<IProps> = ({ node, rootNode }) => {
  // const { data: nodes } = copperSkApi.useFetchNodePathQuery(node.id);
  const { data: nodeChildren } = copperSkApi.useFetchChildrenNodeQuery(node.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {nodeChildren &&
          rootNode &&
          nodeChildren.map((node) => <Node node={node} rootNode={rootNode} />)}
      </div>
    </div>
  );
};

export default Branch;
