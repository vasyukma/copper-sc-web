import { FC } from 'react';
import styles from './ControlPanel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsEditNode,
  toggleIsCreateTail,
} from '../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../store/store';
import EditNodeContainer from './EditNode/EditFormContainer';
import { CreateTail } from './CreateTail/CreateTail';

interface IProps {}
export const ControlPanel: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const isEditNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isEditNode
  );
  const isCreateTail = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isCreateTail
  );
  // const currentNode = useSelector(
  //   (state: RootState) => state.nodeExplorerSlice.currentNode
  // );

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <button onClick={() => dispatch(setIsEditNode(true))}>Edit Node</button>
        <button onClick={() => dispatch(toggleIsCreateTail())}>
          Create Tail
        </button>
      </div>
      {isEditNode && (
        <div className={styles.editForm}>
          <EditNodeContainer />
        </div>
      )}
      {isCreateTail && (
        <div className={styles.editForm}>
          <CreateTail />
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
