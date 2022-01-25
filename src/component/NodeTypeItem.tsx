import { FC } from 'react';
import { INodeType } from '../model/INodeType';

interface NodeTypeItemProps {
  item: INodeType;
}

const NodeTypeItem: FC<NodeTypeItemProps> = ({ item }) => {
  return (
    <div>
      <span>{item.id}</span>
      <span>{item.shortName}</span>
      <span>{item.description}</span>
    </div>
  );
};

export default NodeTypeItem;
