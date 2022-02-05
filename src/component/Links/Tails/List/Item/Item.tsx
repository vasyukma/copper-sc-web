import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITail } from '../../../../../model/ITail';
import { copperSkApi } from '../../../../../service/CopperSkService';
import { setCurrentTail } from '../../../../../store/reducer/linksSlice';
import { RootState } from '../../../../../store/store';
import styles from './Item.module.css';
import Path from './Path/Path';

interface IProps {
  tail: ITail;
}
export const Item: FC<IProps> = ({ tail }) => {
  // let currentTail = useSelector(
  //   (state: RootState) => state.linksSlice.currentTail
  // );

  const { data: nodePath } = copperSkApi.useFetchNodePathQuery(tail.nodeId);

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  let currentTail = useSelector(
    (state: RootState) => state.linksSlice.currentTail
  );

  const [stylesWrapper, setStylesWrapper] = useState(styles.wrapper);

  useEffect(() => {
    currentTail?.id === tail.id
      ? setStylesWrapper(`${styles.wrapper} ${styles.selected}`)
      : setStylesWrapper(styles.wrapper);
  });

  return (
    <div
      className={stylesWrapper}
      onClick={() => dispatch(setCurrentTail(tail))}
      onDoubleClick={() => {
        isEdit || setIsEdit(true);
      }}
    >
      {!isEdit && (
        <div className={styles.content}>
          {nodePath?.text}
          {tail.id}
        </div>
      )}
      {nodePath && isEdit && <Path tail={tail} path={nodePath} />}
    </div>
  );
};

export default Item;
