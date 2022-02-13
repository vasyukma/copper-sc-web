import { FC, useEffect, useState } from 'react';
import { ILink } from '../../../../model/Link';
import styles from './Item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setCurrentLink } from '../../../../store/reducer/linksSlice';

interface IProps {
  link: ILink;
}
export const Item: FC<IProps> = ({ link }) => {
  let currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );
  let dispatch = useDispatch();

  let [itemStyles, setStylesWrapper] = useState(styles.item);

  useEffect(() => {
    currentLink?.id === link.id
      ? setStylesWrapper(`${styles.item} ${styles.selected}`)
      : setStylesWrapper(styles.item);
  });

  return (
    // <div className={styles.wrapper}>
    <div className={styles.wrapper}>
      <div
        className={itemStyles}
        onClick={() => dispatch(setCurrentLink(link))}
      >
        {/* <span className={styles.link_name}>{link.name}</span> */}
        <div className="simple-list simple-list--name-column-size">
          {link.name}
        </div>
        {/* <span className={styles.link_description}>{link.description}</span> */}
        <div className="simple-list simple-list--description-column-size">
          {link.description}
        </div>
      </div>
    </div>
  );
};

export default Item;
