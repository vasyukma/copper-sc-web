import { FC, useState } from 'react';
import { INode } from '../../../../model/INode';
import { copperSkApi } from '../../../../service/CopperSkService';
import Branch from '../Branch/Branch';
import styles from './SubBranches.module.css';

interface ISubBranches {
  parentNode: INode;
  indent: string;
}

const SubBranches: FC<ISubBranches> = ({ parentNode, indent }) => {
  let [localIndent] = useState<string>(indent + '-');

  const {
    data: subBranches,
    error: error,
    isLoading: isLoading,
  } = copperSkApi.useFetchChildrenNodeQuery(parentNode.id);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Data}>
        {subBranches?.map((node: INode) => (
          <Branch node={node} indent={localIndent} />
        ))}
      </div>
    </div>
  );
};

export default SubBranches;
