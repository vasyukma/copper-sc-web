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

  let [stylesWrapper, setStylesWrapper] = useState(styles.wrapper);

  useEffect(() => {
    currentLink?.id === link.id
      ? setStylesWrapper(`${styles.wrapper} ${styles.selected}`)
      : setStylesWrapper(styles.wrapper);
  });

  return (
    <div
      className={stylesWrapper}
      onClick={() => dispatch(setCurrentLink(link))}
    >
      {link.name}
    </div>
  );
};

export default Item;
