import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './NavItem.module.css';

function NavItem({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let elementStyles = match
    ? styles.element + ' ' + styles.element_active
    : styles.element;

  return (
    <div className={styles.block}>
      <div className={elementStyles}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </div>
    </div>
  );
}

export default NavItem;
