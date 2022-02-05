import { FC } from 'react';
import styles from './Tail.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

interface IProps {}
export const Tail: FC<IProps> = ({}) => {
  let currentTail = useSelector(
    (state: RootState) => state.linksSlice.currentTail
  );
  return (
    <div className={styles.wrapper}>
      {/* {currentTail && <Path tail={currentTail} />} */}
    </div>
  );
};

export default Tail;
