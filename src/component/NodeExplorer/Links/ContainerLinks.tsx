import styles from "./ContainerLinks.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Links from "./Links";
interface IContainerLinks {}

const ContainerLinks: FC<IContainerLinks> = () => {
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );

  return (
    <div className={styles.wrapper}>
      {currentNode && <Links node={currentNode} />}
    </div>
  );
};
export default ContainerLinks;
