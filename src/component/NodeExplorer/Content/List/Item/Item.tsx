import styles from './Item.module.css';
import parentStyles from '../../Content.module.css';
import { INode } from '../../../../../model/INode';
import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setSelectedNode } from '../../../../../store/reducer/nodeExplorerSlice';

interface IProps {
  node: INode;
}

const Item: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();
  let [stylesWrapper, setStylesWrapper] = useState(styles.wrapper);
  let selectedNode = useSelector(
    (state: RootState) => state.nodeExplorer.selectedNode
  );
  useEffect(() => {
    node.id === selectedNode?.id
      ? setStylesWrapper(`${styles.wrapper} ${styles.selected}`)
      : setStylesWrapper(styles.wrapper);
    // stylesWrapper =
  });

  return (
    <div
      className={stylesWrapper}
      onClick={() => dispatch(setSelectedNode(node))}
    >
      <div className={parentStyles.idColumn_size}>
        <div className={styles.content}>{node.id}</div>
      </div>
      <div className={parentStyles.shortNameColumn_size}>
        <div className={styles.content}>{node.shortName}</div>
      </div>
      <div className={parentStyles.longNameColumn_size}>
        <div className={styles.content}>{node.longName}</div>
      </div>
      <div className={parentStyles.descriptionColumn_size}>
        <div className={styles.content}>{node.description}</div>
      </div>
      <div className={parentStyles.shortNameColumn_size}>
        <div className={styles.content}>{node.type.shortName}</div>
      </div>
      <div className={parentStyles.longNameColumn_size}>
        <div className={styles.content}>{node.type.longName}</div>
      </div>
      <div className={parentStyles.descriptionColumn_size}>
        <div className={styles.content}>{node.type.description}</div>
      </div>
    </div>
  );
};

export default Item;
