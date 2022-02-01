import { FC, useState } from 'react';
import { INode } from '../../../../model/INode';
import SubBranches from '../SubBranches/SubBranches';
import styles from './Branch.module.css';
import { Item } from './Item/Item';

interface IBranchProps {
  node: INode;
  indent: string;
}

const Branch: FC<IBranchProps> = ({ node, indent }) => {
  let [showSubBranches, setShowSubBranch] = useState(false);

  const onShowSubBranches = () => {
    if (showSubBranches) {
      setShowSubBranch(false);
    } else {
      setShowSubBranch(true);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Data}>
        <div className={styles.Indent}>{indent}</div>
        <button onClick={onShowSubBranches}>+</button>
        <Item node={node} />
      </div>
      {showSubBranches && <SubBranches parentNode={node} indent={indent} />}
    </div>
  );
};
export default Branch;
