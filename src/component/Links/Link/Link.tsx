import { ILink } from '../../../model/ILink';
import { FC } from 'react';
import './Link.css';

interface LinkItemProps {
  item: ILink;
}

const Link: FC<LinkItemProps> = ({ item }) => {
  return (
    <div className="block__column">
      <div className="block__item">{item.shortName}</div>
    </div>
    // <div className="Item">
    //   <div className="Item_element">{item.id}</div>
    //   <div className="Item_element">{item.shortName}</div>
    // </div>
  );
};

export default Link;
