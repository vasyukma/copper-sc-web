import { FC } from 'react';
import { ILink } from '../../../../model/Link';
import blockStyles from '../Form.module.css';
import styles from './Content.module.css';

interface IProps {
  link: ILink;
}

export const Content: FC<IProps> = ({ link }) => {
  return (
    <div className={styles.element}>
      <div className={styles.row}>
        <div className={styles.caption}>Имя: </div>
        <div className={styles.data}>{link.name}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Марка кабеля: </div>
        <div className={styles.data}>{link.cableBrand}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Длина по металлоконструкциям: </div>
        <div className={styles.data}>{link.metalStructursLength}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Длина в гофротрубе: </div>
        <div className={styles.data}>{link.cableChannelLength}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Запас на разделку и подключение: </div>
        <div className={styles.data}>{link.reserveLength}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Количество кусков: </div>
        <div className={styles.data}>{link.parts}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Длина всего: </div>
        <div className={styles.data}>{link.length}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.caption}>Описание: </div>
        <div className={styles.data}>{link.description}</div>
      </div>
    </div>
  );
};

export default Content;
