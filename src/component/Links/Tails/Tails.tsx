import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { List } from './List/List';
import styles from './Tails.module.css';
import { NodesChildren } from './NodesChildren/NodesChildren';

interface IProps {}
export const Tails: FC<IProps> = ({}) => {
  const currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {currentLink && <List link={currentLink} />}
      </div>
      <div className={styles.nodes}>
        <NodesChildren />
      </div>
    </div>
  );
};

export default Tails;
