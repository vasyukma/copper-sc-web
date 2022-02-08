import { FC } from "react";
import styles from "./ControlPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsCreateNode,
  setIsEditNode,
} from "../../../../store/reducer/nodeExplorerSlice";
import { RootState } from "../../../../store/store";
import EditNodeContainer from "./EditNode/EditFormContainer";
import { CreateNode } from "./CreateTail/CreateTail";

interface IProps {}
export const ControlPanel: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const isEditNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isEditNode
  );
  const isCreateTail = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isCreateNode
  );
  // const currentNode = useSelector(
  //   (state: RootState) => state.nodeExplorerSlice.currentNode
  // );

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <button onClick={() => dispatch(setIsEditNode(true))}>Edit Node</button>
        <button onClick={() => dispatch(setIsCreateNode(true))}>
          Create Node
        </button>
      </div>
      {isEditNode && (
        <div className={styles.editForm}>
          <EditNodeContainer />
        </div>
      )}
      {isCreateTail && (
        <div className={styles.editForm}>
          <CreateNode />
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
