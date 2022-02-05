import { FC } from 'react';
import { INode } from '../../../model/INode';
import Branch from './Branch/Branch';
import styles from './Tree.module.css';

interface ITree {
  root: INode;
}

const Tree: FC<ITree> = ({ root }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.data}>
        <Branch node={root} indent="" />
      </div>
    </div>
  );
};

export default Tree;
