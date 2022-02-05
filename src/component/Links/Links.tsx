import styles from '../Links/Links.module.css';
import Form from './Form/Form';
import Link from './Link/Link';
import List from './List/List';
import { Tails } from './Tails/Tails';
import { NodesChildren } from './Tails/NodesChildren/NodesChildren';

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Form />
      </div>
      <div className={styles.item}>
        <List />
      </div>
      <div className={styles.item}>
        <Tails />
      </div>
      {/* <div className={styles.item}>
        <Nodes />
      </div> */}
    </div>
  );
};

export default Links;
