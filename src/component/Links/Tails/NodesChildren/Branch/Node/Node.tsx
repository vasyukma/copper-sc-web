import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INode } from '../../../../../../model/Node';
import {
  setSelectedChildNode,
  setSelectedPathNode,
} from '../../../../../../store/reducer/linksSlice';
import { RootState } from '../../../../../../store/store';
import { Item } from './Item/Item';
import styles from './Node.module.css';

interface IProps {
  node: INode;
  rootNode: INode;
}

const Node: FC<IProps> = ({ node, rootNode }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<boolean>(false);
  const [itemStyles, setItemStyles] = useState<string>(styles.item);

  const selectedChildNode = useSelector(
    (state: RootState) => state.linksSlice.selectedChildNode
  );

  useEffect(() => {
    selectedChildNode?.id === node.id ? setSelected(true) : setSelected(false);

    selected
      ? setItemStyles(`${styles.item} ${styles.selected}`)
      : setItemStyles(styles.item);
  });

  return (
    <div className={styles.wrapper}>
      <div
        className={itemStyles}
        onDoubleClick={() => dispatch(setSelectedPathNode(node))}
        onClick={() => dispatch(setSelectedChildNode(node))}
      >
        {rootNode.id !== node.id && <Item node={node} />}
      </div>
    </div>
  );
};
export default Node;
