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
  const dispatch = useDispatch();

  let currentNode = useSelector(
    (state: RootState) => state.nodeExplorer.currentNode
  );

  let [active, setActive] = useState<boolean>(false);
  let [stylesWrapper, setStylesWrapper] = useState<string>(styles.Wrapper);

  useEffect(() => {
    currentNode?.id === node.id ? setActive(true) : setActive(false);

    active
      ? setStylesWrapper(`${styles.Wrapper} ${styles.Active}`)
      : setStylesWrapper(styles.Wrapper);
  });

  return (
    <div className={stylesWrapper}>
      <div
        className={styles.Content}
        onClick={() => dispatch(setCurrentNode(node))}
      >
        {`${node.shortName} ${node.type.longName}`}
      </div>
    </div>
  );
};
