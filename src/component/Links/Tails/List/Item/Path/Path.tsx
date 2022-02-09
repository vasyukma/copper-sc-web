import { FC } from 'react';
import { ITail } from '../../../../../../model/Tail';
import { copperSkApi } from '../../../../../../service/CopperSkService';
import { Item } from './Item/Item';
import styles from './Path.module.css';

interface IProps {
  tail: ITail;
}

export const Path: FC<IProps> = ({ tail }) => {
  const { data: node } = copperSkApi.useFetchNodeQuery(tail.nodeId);

  return (
    <div className={styles.wrapper}>
      {node && (
        <div className={styles.item}>
          <Item node={node} />
        </div>
      )}
    </div>
  );
};

export default Path;
