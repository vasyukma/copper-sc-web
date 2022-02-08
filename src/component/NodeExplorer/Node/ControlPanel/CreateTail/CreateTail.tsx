import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import EditFrom from "../EditNode/EditForm";
import styles from "./CreateTail.module.css";

interface IProps {}
export const CreateNode: FC<IProps> = ({}) => {
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        {currentNode && <EditFrom node={currentNode} title="Создание" />}
      </div>
    </div>
  );
};

export default CreateNode;
