import { FC } from 'react';
import styles from './Path.module.css';
import { INode } from '../../../../../model/INode';
import { copperSkApi } from '../../../../../service/CopperSkService';
import { ITail } from '../../../../../model/ITail';
import { Item } from './Item/Item';

interface IProps {
  tail: ITail;
}

export const Path: FC<IProps> = ({ tail }) => {
  const { data: path } = copperSkApi.useFetchPathNodeQuery(tail.nodeId);

  //   let path = fetchedPath?.slice();

  return (
    <div className={styles.wrapper}>
      {path && (
        <div className={styles.content}>
          <Item path={path?.slice()} />
        </div>
      )}
    </div>
  );
};

export default Path;
