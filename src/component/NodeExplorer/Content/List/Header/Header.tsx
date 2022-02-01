import { FC } from 'react';
import styles from './Header.module.css';
import contentStyles from '../../Content.module.css';
import Item from './Item/Item';

interface IProps {}

const Header: FC<IProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={contentStyles.idColumn_size}>
        <Item text="ID" />
      </div>
      <div className={contentStyles.shortNameColumn_size}>
        <Item text="Короткое имя" />
      </div>
      <div className={contentStyles.longNameColumn_size}>
        <Item text="Длинное имя" />
      </div>
      <div className={contentStyles.descriptionColumn_size}>
        <Item text="Описание" />
      </div>
      <div className={contentStyles.shortNameColumn_size}>
        <Item text="Короткое имя типа" />
      </div>
      <div className={contentStyles.longNameColumn_size}>
        <Item text="Длинное имя типа" />
      </div>
      <div className={contentStyles.descriptionColumn_size}>
        <Item text="Описание типа" />
      </div>
    </div>
  );
};

export default Header;
