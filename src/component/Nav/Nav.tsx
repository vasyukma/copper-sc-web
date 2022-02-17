import { Outlet } from 'react-router-dom';
import styles from './Nav.module.css';
import Item from './Item/Item';

export default Navi;

function Navi() {
  return (
    <div className={styles.__wrapper}>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigation}>
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
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
}
