import { FC } from 'react';
import styles from './Tails.module.css';
import { ILink } from '../../../../model/ILink';
import { List } from './List/List';
import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import { Tail } from '../Tail/Tail';

interface IProps {
  link: ILink;
}
export const Tails: FC<IProps> = ({ link }) => {
  let currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {currentLink && <List link={currentLink} />}
      </div>
      {/* <div className={styles.content}>{currentLink && <Tail />}</div> */}
    </div>
  );
};

export default Tails;
