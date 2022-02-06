import { FC } from 'react';
import styles from './ControlPanel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditNode } from '../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../store/store';
import EditFormContainer from '../../EditForm/EditFormContainer';

interface IProps {}
export const ControlPanel: FC<IProps> = ({}) => {
  const dispatch = useDispatch();
  const isEditNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.isEditNode
  );
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <button onClick={() => dispatch(setIsEditNode(true))}>Edit</button>
      </div>
      {isEditNode && (
        <div className={styles.editForm}>
          <EditFormContainer />
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
