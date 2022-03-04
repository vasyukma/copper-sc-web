import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ElementTitle from '../../common/elementTitle/ElementTitle';
import ControlPanel from './ControlPanel/ControlPanel';
import { List } from './List/List';
import { NodesChildren } from './NodesChildren/NodesChildren';
import styles from './Tails.module.css';

interface IProps {}
export const Tails: FC<IProps> = ({}) => {
  const currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );
  return (
    <div className={styles.Block}>
      {/* <div className={styles.controlPanel}> */}

      {/* </div> */}

      <ElementTitle titleText="Концы линии" />
      <ControlPanel />
      <div className={styles.list}>
        {currentLink && <List link={currentLink} />}
      </div>

      {/* <div className={styles.nodes}>
        <NodesChildren />
      </div> */}
    </div>
  );
};

export default Tails;
