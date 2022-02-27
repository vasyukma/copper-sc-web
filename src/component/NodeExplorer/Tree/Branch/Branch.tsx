import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INode } from '../../../../model/Node';
import { setCurrentNode } from '../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../store/store';
import SubBranches from '../SubBranches/SubBranches';
import styles from './Branch.module.css';
import { Item } from './Item/Item';

interface IBranchProps {
  node: INode;
  indent: string;
}

const Branch: FC<IBranchProps> = ({ node, indent }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState<boolean>(false);
  const [dataStyles, setDataStyles] = useState<string>(styles.Wrapper);

  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );

  useEffect(() => {
    currentNode?.id === node.id ? setActive(true) : setActive(false);

    active
      ? setDataStyles(`${styles.data} ${styles.active}`)
      : setDataStyles(styles.data);
  });

  const [showSubBranches, setShowSubBranch] = useState(false);
  const onShowSubBranches = () => {
    if (showSubBranches) {
      setShowSubBranch(false);
    } else {
      setShowSubBranch(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={dataStyles}
        onDoubleClick={onShowSubBranches}
        onClick={() => dispatch(setCurrentNode(node))}
      >
        <div className={styles.indent}>{indent}</div>
        <Item node={node} />
      </div>
      <div className={styles.branch_content}>
        {showSubBranches && <SubBranches parentNode={node} indent={indent} />}
      </div>
    </div>
  );
};
export default Branch;
