import { FC, useReducer, useState, useEffect } from 'react';
import { ILink } from '../../../../model/ILink';
import styles from './Content.module.css';

interface IProps {
  link: ILink;
}

export const Content: FC<IProps> = ({ link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span>Имя: </span>
        <span>{link.name}</span>
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
        <span>{link.cableChannelLength}</span>
      </div>
      <div className={styles.content}>
        <span>Запас на разделку и подключение: </span>
        <span>{link.reserveLength}</span>
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

export default Content;
