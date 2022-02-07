import { FC } from 'react';
import styles from './CreateTail.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';

interface IProps {}
export const CreateTail: FC<IProps> = ({}) => {
  const selectedNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.selectedNode
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}></div>
    </div>
  );
};

export default CreateTail;
