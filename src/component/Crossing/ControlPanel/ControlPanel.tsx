import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../hook/redux';
import { showCrossTypeCreateForm } from '../../../store/reducer/crossingSlice';
import {
  onIsCreateLinks,
  onIsEditLinks,
} from '../../../store/reducer/linksSlice';
import { RootState } from '../../../store/store';
import styles from './ControlPanel.module.css';
import CreateCrossType from './CreateCrossType/CreateCrossType';

interface IControlPanel {}

const ControlPanel: FC<IControlPanel> = () => {
  const dispatch = useDispatch();

  const { isCrossTypeCreateFormShow } = useAppSelector(
    (state: RootState) => state.crossingSlice
  );
  // const isEditLink = useSelector(
  //   (state: RootState) => state.linksSlice.isEditLink
  // );

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <button onClick={() => dispatch(onIsCreateLinks())}>Create Link</button>
        <button onClick={() => dispatch(showCrossTypeCreateForm())}>
          Создать тип кросса
        </button>
      </div>
      {isCrossTypeCreateFormShow && (
        <div className={styles.create_edit_form}>
          <CreateCrossType />
        </div>
      )}
    </div>
  );
};
export default ControlPanel;
