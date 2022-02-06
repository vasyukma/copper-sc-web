import React from 'react';
import { INode } from '../../../../../../../model/INode';
import styles from './Item.module.css';

interface IProps {
  node: INode;
}
export const Item: React.FC<IProps> = ({ node }) => {
  return (
    <div className={styles.wrapper}>
      {`${node.type.shortName} ${node.shortName}`}
    </div>
  );
};
