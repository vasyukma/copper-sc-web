import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import styles from "./Conteiner.module.css";
import EditFrom from "./EditForm";

interface IProps {}
export const EditFormContainer: FC<IProps> = ({}) => {
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );

  return (
    <div className={styles.wrapper}>
      {currentNode && <EditFrom node={currentNode} />}
    </div>
  );
};

export default EditFormContainer;
