import styles from './ContainerTails.module.css';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import LeftTail from './LeftTail';
interface IContainerTails {}

const ContainerTails: FC<IContainerTails> = () => {
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );

  return (
    <div className={styles.wrapper}>
      {currentNode && <LeftTail node={currentNode} />}
    </div>
  );
};
export default ContainerTails;
