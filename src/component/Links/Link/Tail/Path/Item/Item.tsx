import { FC } from 'react';
import styles from './Item.module.css';
import { INode } from '../../../../../../model/INode';

interface IProps {
  path: INode[];
}
export const Item: FC<IProps> = ({ path }) => {
  const node = path.pop();

  return (
    <div className={styles.wrapper}>
      {node && (
        <div className={styles.content}>
          {node.shortName} {node.type.shortName}
        </div>
      )}
    </div>
  );
};

export default Item;
