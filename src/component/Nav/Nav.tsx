import { Outlet } from 'react-router-dom';
import styles from './Nav.module.css';
import NavItem from './NavItem/NavItem';

export default Navi;

function Navi() {
  return (
    <div className={styles.block}>
      <div className={styles.nav}>
        {/* <nav> */}
        <div className={styles.element}>
          <NavItem to="/">Home</NavItem>
        </div>
        <div className={styles.element}>
          <NavItem to="/cable-list">Кабельный журнал</NavItem>
        </div>
        <div className={styles.element}>
          <NavItem to="/labels">Этикирование</NavItem>
        </div>
        <div className={styles.element}>
          <NavItem to="/node-explorer">Узлы</NavItem>
        </div>
        <div className={styles.element}>
          <NavItem to="/links">Линии</NavItem>
        </div>
        {/* </nav> */}
      </div>
      <Outlet />
    </div>
  );
}
