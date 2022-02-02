import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Form from './Form/Form';
import styles from './Link.module.css';
import Tail from './Tail/Tail';
import Tails from './Tails/Tails';

interface LinkItemProps {}

const Link: FC<LinkItemProps> = () => {
  let currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );

  return (
    <div className={styles.wrapper}>
      {currentLink && <Form link={currentLink} />}
      {currentLink && <Tails link={currentLink} />}
      {currentLink && <Tail />}
    </div>
  );
};

export default Link;
