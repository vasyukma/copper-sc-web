import StorageLocationSelector from '../common/StorageLocationSelector/StorageLocationSelector';
import styles from '../Links/Links.module.css';
import Tree from '../NodeExplorer/Tree/Tree';
import ControlPanel from './ControlPanel/ControlPanel';
import Form from './Form/Form';
import List from './List/List';
import { Tails } from './Tails/Tails';

export const Links = () => {
  return (
    <div className={styles.__wrapper}>
      <div className={styles.control_panel}>
        <ControlPanel />
      </div>
      <div className={styles.Content}>
        <div className="links-page__link-information">
          <Form />
        </div>
        <div className={styles.LinksList}>
          <List />
        </div>
        <div className="links-page__tails-list">
          <Tails />
        </div>
        <div className={styles.StorageLocationSelector}>
          <Tree />
        </div>
      </div>
    </div>
  );
};

export default Links;
