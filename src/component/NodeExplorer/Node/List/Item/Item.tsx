import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INode } from "../../../../../model/INode";
import { setSelectedNode } from "../../../../../store/reducer/nodeExplorerSlice";
import { RootState } from "../../../../../store/store";
// import parentStyles from "../../Node.module.css";
import styles from "./Item.module.css";

interface IProps {
  node: INode;
}

const Item: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();
  const [stylesWrapper, setStylesWrapper] = useState(styles.wrapper);
  const selectedNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.selectedNode
  );
  useEffect(() => {
    node.id === selectedNode?.id
      ? setStylesWrapper(`${styles.wrapper} ${styles.selected}`)
      : setStylesWrapper(styles.wrapper);
  });

  return (
    <div
      className={stylesWrapper}
      onClick={() => dispatch(setSelectedNode(node))}
    >
      {/* <div className={parentStyles.idColumn_size}> */}
      <div className={`${styles.item1} `}>{node.id}</div>
      {/* </div> */}
      {/* <div className={parentStyles.shortNameColumn_size}> */}
      <div className={styles.item2}>{node.type.shortName}</div>
      {/* </div> */}

      {/* <div className={parentStyles.shortNameColumn_size}> */}
      <div className={styles.item2}>{node.shortName}</div>
      {/* </div> */}
      {
        /* <div className={parentStyles.longNameColumn_size}>
        <div className={styles.content}>{node.longName}</div>
      </div>*/
        // <div className={parentStyles.descriptionColumn_size}>
        <div className={styles.item3}>{node.description}</div>
        // </div>
      }
      {/* <div className={parentStyles.longNameColumn_size}>
        <div className={styles.content}>{node.type.longName}</div>
      </div>
      <div className={parentStyles.descriptionColumn_size}>
        <div className={styles.content}>{node.type.description}</div>
      </div> */}
    </div>
  );
};

export default Item;
