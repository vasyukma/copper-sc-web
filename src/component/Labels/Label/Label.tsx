import { FC } from 'react';
import { ILink } from '../../../model/ILink';
import stylesParent from '../Labels.module.css';

interface LinkItemProps {
  item: ILink;
}

const Label: FC<LinkItemProps> = ({ item }) => {
  return (
    <div className={stylesParent.block__column}>
      <div className={stylesParent.block__item}>{item.name}</div>
    </div>
  );
};

export default Label;
