import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { copperSkApi } from "../../service/CopperSkService";
import { setCurrentNode } from "../../store/reducer/nodeExplorerSlice";
import styles from "./Explorer.module.css";
import ContainerLinks from "./Links/ContainerLinks";
import Node from "./Node/Node";
import Tree from "./Tree/Tree";

const Explorer = () => {
  const dispatch = useDispatch();

  const {
    data: rootNode,
    error: fetchRootError,
    isLoading: fetchRootIsLoading,
  } = copperSkApi.useFetchRootNodeQuery("");

  useEffect(() => {
    dispatch(setCurrentNode(rootNode));
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Tree}>
        {fetchRootIsLoading && <h1>Идёт загрузка...</h1>}
        {fetchRootError && <h1>Ошибка получения данных</h1>}
        {rootNode && <Tree root={rootNode} />}
      </div>
      <div className={styles.Data}>
        <Node />
      </div>
      <div className={styles.item}>
        <ContainerLinks />
      </div>
    </div>
  );
};

export default Explorer;
