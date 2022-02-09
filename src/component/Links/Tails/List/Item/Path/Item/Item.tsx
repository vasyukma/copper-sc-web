import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INode } from '../../../../../../../model/Node';
import { copperSkApi } from '../../../../../../../service/CopperSkService';
import { setSelectedPathNode } from '../../../../../../../store/reducer/linksSlice';
import { RootState } from '../../../../../../../store/store';
import styles from './Item.module.css';
import Label from './Label/Label';

interface IProps {
  node: INode;
}
export const Item: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();

  const { data: parentNode } = copperSkApi.useFetchNodeQuery(node.parentId);
  const { data: rootNode } = copperSkApi.useFetchRootNodeQuery('');

  const [selected, setSelected] = useState<boolean>(false);
  const [itemStyles, setItemStyles] = useState<string>(styles.item);

  const selectedPathNode = useSelector(
    (state: RootState) => state.linksSlice.selectedPathNode
  );

  useEffect(() => {
    selectedPathNode?.id === node.id ? setSelected(true) : setSelected(false);

    selected
      ? setItemStyles(`${styles.item} ${styles.selected}`)
      : setItemStyles(styles.item);
  });

  return (
    <div className={styles.wrapper}>
      <div
        className={itemStyles}
        onClick={() => {
          dispatch(setSelectedPathNode(node));
        }}
      >
        {/* {node.shortName} {node.type.shortName} */}
        <Label node={node} />
      </div>
      {parentNode && rootNode && parentNode.id !== rootNode.id && (
        // <div className={styles.item}>
        <Item node={parentNode} />
        // </div>
      )}
    </div>
  );
};

export default Item;
