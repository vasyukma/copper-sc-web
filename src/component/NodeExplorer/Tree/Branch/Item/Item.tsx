import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INode } from '../../../../../model/INode';
import { setCurrentNode } from '../../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../../store/store';
import styles from './Item.module.css';

interface IProps {
  node: INode;
}
export const Item: React.FC<IProps> = ({ node }) => {
  // const [active, setActive] = useState<boolean>(false);
  // const [wrapperStyles, setWrapperStyles] = useState<string>(styles.Wrapper);

  // const currentNode = useSelector(
  //   (state: RootState) => state.nodeExplorerSlice.currentNode
  // );

  // useEffect(() => {
  //   currentNode?.id === node.id ? setActive(true) : setActive(false);

  //   active
  //     ? setWrapperStyles(`${styles.wrapper} ${styles.active}`)
  //     : setWrapperStyles(styles.wrapper);
  // });

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {`${node.shortName} ${node.type.longName}`}
      </div>
    </div>
  );
};
