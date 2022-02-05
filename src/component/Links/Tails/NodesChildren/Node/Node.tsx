import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Node.module.css';
import { Item } from './Item/Item';
import { INode } from '../../../../../model/INode';

interface IProps {
  nodes: INode[];
}

const Node: FC<IProps> = ({ nodes }) => {
  const dispatch = useDispatch();
  let [node, setNode] = useState(nodes.pop());

  // useEffect(() => {}, []);

  // const [active, setActive] = useState<boolean>(false);
  // const [dataStyles, setDataStyles] = useState<string>(styles.Wrapper);

  // const currentNode = useSelector(
  //   (state: RootState) => state.nodeExplorerSlice.currentNode
  // );

  // useEffect(() => {
  //   currentNode?.id === node.id ? setActive(true) : setActive(false);

  //   active
  //     ? setDataStyles(`${styles.data} ${styles.active}`)
  //     : setDataStyles(styles.data);
  // });

  // const [showSubBranches, setShowSubBranch] = useState(false);
  // const onShowSubBranches = () => {
  //   if (showSubBranches) {
  //     setShowSubBranch(false);
  //   } else {
  //     setShowSubBranch(true);
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <div
      // className={dataStyles}
      // onDoubleClick={onShowSubBranches}
      // onClick={() => dispatch(setCurrentNode(node))}
      >
        {/* <div className={styles.indent}>{indent}</div> */}
        {/* <button onClick={onShowSubBranches}>+</button> */}
        {node && <Item node={node} />}
      </div>
      {/* <div className={styles.branch_content}>
        {showSubBranches && <SubBranches parentNode={node} indent={indent} />}
      </div> */}
    </div>
  );
};
export default Node;
