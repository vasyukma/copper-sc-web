import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from '../../../../App.module.css';
import { ILink } from '../../../../model/Link';
import { setCurrentLink } from '../../../../store/reducer/linksSlice';
import { RootState } from '../../../../store/store';
import styles from './Item.module.css';

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
    <div className={styles.wrapper}>
      <div
        className={itemStyles}
        onClick={() => dispatch(setCurrentLink(link))}
      >
        <div
          className={`${appStyles.SimpleList} ${appStyles.SimpleList__nameColumnSize}`}
        >
          {link.name}
        </div>
        <div
          className={`${appStyles.SimpleList} ${appStyles.SimpleList__descriptionColumnSize}`}
        >
          {link.description}
        </div>
      </div>
    </div>
  );
};

export default Item;
