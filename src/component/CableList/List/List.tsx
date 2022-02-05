import { FC } from 'react';
import styles from './List.module.css';
import { Item } from './Item/Item';
import { copperSkApi } from '../../../service/CopperSkService';

interface IProps {}
export const List: FC<IProps> = ({}) => {
  const { data: links } = copperSkApi.useFetchAllLinksQuery('');
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <table className={styles.table}>
          <tr>
            <th>Пом</th>
            <th>№ кабеля</th>
            <th>№ розетки</th>
            <th>№ шкафа</th>
            <th>№ панели</th>
            <th>№ порта</th>
            <th>Марка кабеля</th>
            <th>в шкафу, м</th>
            <th>По металоконструкции, м</th>
            <th>В гофро-трубе/каб. канале</th>
            <th>Запас на разделку и подключение</th>
            <th>Количество кусков</th>
            <th>Итого длинна, м</th>
            <th>Наименование цели</th>
            <th>Примечание</th>
          </tr>
          {links && links.map((link) => <Item link={link} />)}
        </table>
      </div>
    </div>
  );
};
