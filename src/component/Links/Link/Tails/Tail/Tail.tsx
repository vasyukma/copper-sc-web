import { ITail } from '../../../../../model/ITail';
import { FC } from 'react';

interface TailItemProps {
  item: ITail;
}

const Link: FC<TailItemProps> = ({ item }) => {
  return (
    <div className="Item">
      <div className="Item_element">{item.id}</div>
      <div className="Item_element">{item.linkId}</div>
      <div className="Item_element">{item.nodeId}</div>
    </div>
  );
};

export default Link;
