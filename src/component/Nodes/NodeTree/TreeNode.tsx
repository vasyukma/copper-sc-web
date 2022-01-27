import { FC } from 'react';
import { INode } from '../../../model/INode';
import { copperSkApi } from '../../../service/CopperSkService';

interface NodeItemProps {
  node: INode;
}

const BranchNode: FC<NodeItemProps> = ({ node }) => {
  const {
    data: children,
    error,
    isLoading,
    // } = copperSkApi.useFetchChildrenNodeQuery(node.id);
  } = copperSkApi.useFetchChildrenNodeQuery(node.id);

  return (
    <div className="Component__Data">
      <div className="Component__Item">
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

const TreeNode: FC<NodeItemProps> = ({ node }) => {
  debugger;
  return (
    <div>
      <BranchNode node={node} />
    </div>
  );
};

export default TreeNode;
