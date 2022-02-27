import styles from './Explorer.module.css';
import Node from './Node/Node';
import ContainerTails from './Tails/ContainerTails';
import Tree from './Tree/Tree';

const Explorer = () => {
  return (
    <div className={styles.__wrapper}>
      <div className={styles.tree}>
        <Tree />
      </div>
      <div className={styles.data}>
        <Node />
      </div>
      <div className={styles.tails}>
        <ContainerTails />
      </div>
    </div>
  );
};

export default Explorer;
