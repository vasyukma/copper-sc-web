import { FC } from 'react';
import styles from './Label.module.css';
import { INode } from '../../../../../../../../model/Node';

interface IProps {
  node: INode;
}
export const Label: FC<IProps> = ({ node }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {node.type.shortName} {node.shortName}
      </div>
    </div>
  );
};

export default Label;
