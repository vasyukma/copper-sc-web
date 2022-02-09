import { FC } from 'react';
import { INodeType } from '../../../model/NodeType';
import './NodeType.css';

interface NodeTypeItemProps {
  item: INodeType;
}

const NodeTypeItem: FC<NodeTypeItemProps> = ({ item }) => {
  return (
    <div className="Item">
      <div className="Item_element">{item.id}</div>
      <div className="Item_element">{item.shortName}</div>
      <div className="Item_element">{item.description}</div>
    </div>
  );
};

export default NodeTypeItem;
