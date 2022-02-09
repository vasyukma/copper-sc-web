import styles from "../Links/Links.module.css";
import Tree from "../NodeExplorer/Tree/Tree";
import ControlPanel from "./ControlPanel/ControlPanel";
import Form from "./Form/Form";
import List from "./List/List";
import { Tails } from "./Tails/Tails";

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.control_panel}>
        <ControlPanel />
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <Form />
        </div>
        <div className={styles.item}>
          <List />
        </div>
        <div className={styles.item}>
          <Tails />
        </div>
        <div className={styles.item}>
          <Tree />
        </div>
      </div>
    </div>
  );
};

export default Links;
