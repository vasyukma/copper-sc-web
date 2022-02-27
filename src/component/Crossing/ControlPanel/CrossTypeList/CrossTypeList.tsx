import { FC } from 'react';
import appStyles from '../../../../App.module.css';
import styles from './CrossTypeList.module.css';

interface IProps {}
export const CrossTypeList: FC<IProps> = ({}) => {
  return (
    <div className={styles.__wrapper}>
      <div className={styles.item}>
        Типы кроссов
        <div className={appStyles.SimpleList_header}>
          <div
            className={`${appStyles.SimpleList_header} ${appStyles.SimpleList__nameColumnSize}`}
          >
            Имя
          </div>
          <div
            className={`${appStyles.SimpleList_descriptionHeader} ${appStyles.SimpleList__descriptionColumnSize}`}
          >
            Комментарий
          </div>
        </div>
        <div className={`${appStyles.SimpleList_data}`}>
          {/* {links?.map((link) => {
            return <Item link={link} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default CrossTypeList;
