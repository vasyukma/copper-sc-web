import { FC } from 'react';
import appStyles from '../../../App.module.css';
import { copperSkApi } from '../../../service/CopperSkService';
import ElementTitle from '../../common/elementTitle/ElementTitle';
import { Item } from './Item/Item';

interface IProps {}
export const List: FC<IProps> = ({}) => {
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery('%');

  return (
    <div className={appStyles.SimpleList}>
      <ElementTitle titleText="Линии" />
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
        {links?.map((link) => {
          return <Item link={link} />;
        })}
      </div>
    </div>
  );
};

export default List;
