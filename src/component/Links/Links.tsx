import styles from '../Links/Links.module.css';
import Link from './Link/Link';
import List from './List/List';

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <List />
      <Link />
    </div>
  );
};

export default Links;
