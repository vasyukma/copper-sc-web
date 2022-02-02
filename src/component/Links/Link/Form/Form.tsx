import { FC } from 'react';
import { ILink } from '../../../../model/ILink';
import styles from './Form.module.css';

interface IProps {
  link: ILink;
}
export const Form: FC<IProps> = ({ link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span>Имя: </span>
        <span>{link.name}</span>
      </div>
      <div className={styles.content}>
        <span>Короткое имя: </span>
        <span>{link.shortName}</span>
      </div>
      <div className={styles.content}>
        <span>Длинное имя: </span>
        <span>{link.longName}</span>
      </div>
      <div className={styles.content}>
        <span>Марка кабеля: </span>
        <span>{link.cableBrand}</span>
      </div>
      <div className={styles.content}>
        <span>Длина по металлоконструкциям: </span>
        <span>{link.metalStructursLength}</span>
      </div>
      <div className={styles.content}>
        <span>Длина в гофротрубе: </span>
        <span>{link.cabelChannelLength}</span>
      </div>
      <div className={styles.content}>
        <span>Запас на разделку и подключение: </span>
        <span>{link.reservLength}</span>
      </div>
      <div className={styles.content}>
        <span>Количество кусков: </span>
        <span>{link.parts}</span>
      </div>
      <div className={styles.content}>
        <span>Длина всего: </span>
        <span>{link.length}</span>
      </div>
      <div className={styles.content}>
        <span>Описание: </span>
        <span>{link.description}</span>
      </div>
    </div>
  );
};

export default Form;
