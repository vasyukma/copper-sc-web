import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ITail } from '../../../../../../model/ITail';
import { INodePath } from '../../../../../../model/INodePath';
import { RootState } from '../../../../../../store/store';
import { Item } from './Item/Item';
import styles from './Path.module.css';
import { copperSkApi } from '../../../../../../service/CopperSkService';

interface IProps {
  tail: ITail;
  path: INodePath;
}

export const Path: FC<IProps> = ({ tail, path }) => {
  // const nodes = useSelector(
  //   (state: RootState) => state.linksSlice.currentNodePath?.nodes
  // );

  // const [node, setPathNode] = useState(nodes?.pop());

  const { data: node } = copperSkApi.useFetchNodeQuery(tail.nodeId);

  return (
    <div className={styles.wrapper}>
      {node && (
        <div className={styles.content}>
          <Item node={node} />
        </div>
      )}
    </div>
  );
};

export default Path;
