import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Node from './Node/Node';
import styles from './NodesChildren.module.css';
import { copperSkApi } from '../../../../service/CopperSkService';
import { RootState } from '../../../../store/store';
import { INode } from '../../../../model/INode';

interface IProps {}

const fetchNodeChildren = (node: INode) => {
  const { data: nodeChildren } = copperSkApi.useFetchChildrenNodeQuery(node.id);
  return nodeChildren;
};

export const NodesChildren: FC<IProps> = ({}) => {
  let selectedPathNode = useSelector(
    (state: RootState) => state.linksSlice.selectedPathNode
  );

  // const [nodeChildren, setNodeChildren] = useState<INode[]>();

  // useEffect(() => {
  //   selectedPathNode && setNodeChildren(fetchNodeChildren(selectedPathNode));
  // });

  const currentTail = useSelector(
    (state: RootState) => state.linksSlice.currentTail
  );

  // debugger;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* {nodeChildren?.} */}
        NodesChildren{/* <Node nodes={currentTail.} */}
      </div>
    </div>
  );
};

export default NodesChildren;
