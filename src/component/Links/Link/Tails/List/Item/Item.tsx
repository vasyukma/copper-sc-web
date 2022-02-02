import { FC, useEffect, useState } from 'react';
import styles from './Item.module.css';
import { ITail } from '../../../../../../model/ITail';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { setCurrentTail } from '../../../../../../store/reducer/linksSlice';

interface IProps {
  tail: ITail;
}
export const Item: FC<IProps> = ({ tail }) => {
  let currentTail = useSelector(
    (state: RootState) => state.linksSlice.currentTail
  );

  let dispatch = useDispatch();

  let [stylesWrapper, setStylesWrapper] = useState(styles.wrapper);

  useEffect(() => {
    currentTail?.id === tail.id
      ? setStylesWrapper(`${styles.wrapper} ${styles.selected}`)
      : setStylesWrapper(styles.wrapper);
  });

  return (
    <div
      className={stylesWrapper}
      onClick={() => dispatch(setCurrentTail(tail))}
    >
      <div className={styles.content}>{tail.id}</div>
    </div>
  );
};

export default Item;
