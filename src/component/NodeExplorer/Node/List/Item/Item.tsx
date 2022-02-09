import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INode } from '../../../../../model/Node';
import { setSelectedNode } from '../../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../../store/store';
// import parentStyles from "../../Node.module.css";
import styles from './Item.module.css';
import LeftTail from '../../../Tails/LeftTail';

interface IProps {
  node: INode;
}

const Item: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();
  const [stylesWrapper, setStylesWrapper] = useState(styles.wrapper);
  const selectedNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.selectedNode
  );
  useEffect(() => {
    node.id === selectedNode?.id
      ? setStylesWrapper(`${styles.wrapper} ${styles.selected}`)
      : setStylesWrapper(styles.wrapper);
  });

  return (
    <div
      className={stylesWrapper}
      onClick={() => dispatch(setSelectedNode(node))}
    >
      <div className={`${styles.item} ${styles.item1}`}>{node.id}</div>
      <div className={`${styles.item} ${styles.item2}`}>
        {node.type.shortName}
      </div>
      <div className={`${styles.item} ${styles.item2}`}>{node.shortName}</div>
      <div className={`${styles.item} ${styles.item3}`}>{node.description}</div>
      <div className={`${styles.item} ${styles.item3}`}>
        <LeftTail node={node} />
      </div>
    </div>
  );
};

export default Item;
