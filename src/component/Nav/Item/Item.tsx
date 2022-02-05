import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './Item.module.css';

function Item({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  let wrapperStyles = match
    ? styles.wrapper + ' ' + styles.wrapper_active
    : styles.wrapper;

  return (
    <div className={wrapperStyles}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default Item;
