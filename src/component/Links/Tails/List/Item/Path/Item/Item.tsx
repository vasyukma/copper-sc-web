import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { INode } from '../../../../../../../model/INode';
import { copperSkApi } from '../../../../../../../service/CopperSkService';
import { setSelectedPathNode } from '../../../../../../../store/reducer/linksSlice';
import styles from './Item.module.css';

interface IProps {
  node: INode;
}
export const Item: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();
  // const nodes = useSelector(
  //   (state: RootState) => state.linksSlice.currentNodePath?.nodes
  // );

  // const [nextNode, setPathNode] = useState(nodes?.pop());

  const { data: parentNode } = copperSkApi.useFetchNodeQuery(node.parentId);
  const { data: rootNode } = copperSkApi.useFetchRootNodeQuery('');

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.item}
        onClick={() => {
          dispatch(setSelectedPathNode(node));
        }}
      >
        {node.shortName} {node.type.shortName}
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
