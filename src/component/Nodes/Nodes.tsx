import { useParams } from 'react-router-dom';
import { copperSkApi } from '../../service/CopperSkService';
import Node from './Node/Node';
import styles from './Nodes.module.css';

function getTest(text: string): string {
  return 'text';
}

const Nodes = () => {
  // debugger;
  let { id } = useParams<'id'>();
  let rootNodeId = 143;
  if (id) {
    rootNodeId = Number(id);
  }

  const {
    data: rootNode,
    error: fetchRootError,
    isLoading: fetchRootIsLoading,
  } = copperSkApi.useFetchRootNodeQuery('');
  // } = copperSkApi.useFetchNodeQuery(rootNodeId);

  const {
    data: children,
    error: fecthChildredError,
    isLoading: fetchChildrenError,
    // } = copperSkApi.useFetchRootNodeQuery('');
  } = copperSkApi.useFetchNodeQuery(rootNodeId);

  // rootNode && getNode(rootNode);

  // debugger;
  return (
    <div className={styles.block}>
      <h1>!!!</h1>
      <div className={styles.element}>
        <div className={styles.element}>
          {fetchRootIsLoading && <h1>Идёт загрузка...</h1>}
          {fetchRootError && <h1>Произошла ошибка</h1>}
        </div>
        <div className={styles.element}>
          {/* {rootNode && <Node node={rootNode} />} */}
        </div>
      </div>
    </div>
  );
};

export default Nodes;
