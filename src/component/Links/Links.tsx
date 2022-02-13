import styles from '../Links/Links.module.css';
import Tree from '../NodeExplorer/Tree/Tree';
import ControlPanel from './ControlPanel/ControlPanel';
import Form from './Form/Form';
import List from './List/List';
import { Tails } from './Tails/Tails';

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.control_panel}>
        <ControlPanel />
      </div>
      {/* <div className={styles.content}> */}
      <div className="links-page__data">
        {/* <div className={styles.item}> */}
        <div className="links-page__link-information">
          <Form />
        </div>
        {/* <div className={styles.item}> */}
        <div className="links-page__links-list">
          <List />
        </div>
        {/* <div className={styles.item}> */}
        <div className="links-page__tails-list">
          <Tails />
        </div>
        {/* <div className={styles.item}> */}
        <div className="links-page__nodes-tree">
          <Tree />
        </div>
      </div>
    </div>
  );
};

export default Links;
