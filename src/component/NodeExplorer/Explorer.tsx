import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { copperSkApi } from '../../service/CopperSkService';
import { setCurrentNode } from '../../store/reducer/nodeExplorerSlice';
import styles from './Explorer.module.css';
import ContainerTails from './Tails/ContainerTails';
import Node from './Node/Node';
import Tree from './Tree/Tree';

const Explorer = () => {
  return (
    <div className={styles.wrapper}>
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
