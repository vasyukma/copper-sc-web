import { Outlet } from 'react-router-dom';
import styles from './Nav.module.css';
import Item from './Item/Item';

export default Navi;

function Navi() {
  return (
    <div className={styles.Block}>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigation}>
          {/* <nav> */}
          <div className={styles.element}>
            <Item to="/">Home</Item>
          </div>
          <div className={styles.element}>
            <Item to="/cable-list">Кабельный журнал</Item>
          </div>
          <div className={styles.element}>
            <Item to="/labels">Этикирование</Item>
          </div>
          <div className={styles.element}>
            <Item to="/node-explorer">Узлы</Item>
          </div>
          <div className={styles.element}>
            <Item to="/links">Линии</Item>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
