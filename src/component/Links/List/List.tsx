import { FC } from 'react';
import styles from './List.module.css';
import { Item } from './Item/Item';
import { copperSkApi } from '../../../service/CopperSkService';
import ElementTitle from '../../common/elementTitle/ElementTitle';

interface IProps {}
export const List: FC<IProps> = ({}) => {
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery('%');

  return (
    // <div className={styles.wrapper}>

    // <div className="simple-list">
    <div className="simple-list">
      {/* <div className="element-title element-title--theme-default">
        <div className="element-title__text">Линии</div>
      </div> */}
      <ElementTitle titleText="Линии" />
      {/* <div className={styles.list}> */}
      <div className="simple-list__header">
        <div className="simple-list__name-header simple-list--name-column-size">
          Имя
        </div>
        <div className="simple-list__description-header simple-list--description-column-size">
          Комментарий
        </div>
      </div>
      {/* <div className= */}
      <div className="simple-list__data">
        {links?.map((link) => {
          return <Item link={link} />;
        })}
      </div>
    </div>
  );
};

export default List;
