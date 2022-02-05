import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Item.module.css';
import { INode } from '../../../../../../model/INode';
import { RootState } from '../../../../../../store/store';

interface IProps {
  node: INode;
}
export const Item: React.FC<IProps> = ({ node }) => {
  // const dispatch = useDispatch();

  // let currentNode = useSelector(
  //   (state: RootState) => state.nodeExplorerSlice.currentNode
  // );

  // let [active, setActive] = useState<boolean>(false);
  // let [stylesWrapper, setStylesWrapper] = useState<string>(styles.Wrapper);

  // useEffect(() => {
  //   currentNode?.id === node.id ? setActive(true) : setActive(false);

  //   active
  //     ? setStylesWrapper(`${styles.Wrapper} ${styles.Active}`)
  //     : setStylesWrapper(styles.Wrapper);
  // });

  // const dispatch = useDispatch();

  // const [active, setActive] = useState<boolean>(false);
  // const [wrapperStyles, setWrapperStyles] = useState<string>(styles.Wrapper);

  // const currentNode = useSelector(
  //   (state: RootState) => state.linksSlice.current;
  // );

  // useEffect(() => {
  //   currentNode.id === node.id ? setActive(true) : setActive(false);

  //   active
  //     ? setWrapperStyles(`${styles.wrapper} ${styles.active}`)
  //     : setWrapperStyles(styles.wrapper);
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
        className={styles.content}
        // onClick={() => dispatch(setCurrentNode(node))}
      >
        {`${node.shortName} ${node.type.longName}`}
      </div>
    </div>
  );
};
