import { FC, useState } from 'react';
import { INode } from '../../../../model/Node';
import { copperSkApi } from '../../../../service/CopperSkService';
import Branch from '../Branch/Branch';
import styles from './SubBranches.module.css';

interface ISubBranches {
  parentNode: INode;
  indent: string;
}

const SubBranches: FC<ISubBranches> = ({ parentNode, indent }) => {
  let [localIndent] = useState<string>(indent + '--');

  const {
    data: subBranches,
    error: error,
    isLoading: isLoading,
  } = copperSkApi.useFetchChildrenNodeQuery(parentNode.id);

  return (
    <div className={styles.wrapper}>
      {subBranches?.map((node: INode) => (
        <Branch node={node} indent={localIndent} />
      ))}
    </div>
  );
};

export default SubBranches;
