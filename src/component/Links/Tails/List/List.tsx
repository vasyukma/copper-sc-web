import { FC } from 'react';
import { ILink } from '../../../../model/Link';
import { copperSkApi } from '../../../../service/CopperSkService';
import ElementTitle from '../../../common/elementTitle/ElementTitle';
import ControlPanel from './ControlPanel/ControlPanel';
import { Item } from './Item/Item';
import styles from './List.module.css';

interface IProps {
  link: ILink;
}
export const List: FC<IProps> = ({ link }) => {
  const { data: tails } = copperSkApi.useFetchLinkTailsQuery(link.id);

  return (
    <div className={styles.element}>
      {/* <div className="element-title element-title--theme-default">
        <div className="element-title__text">Концы линии</div>
      </div> */}

      <div className={styles.controlPanel}>
        <ControlPanel />
      </div>
      {tails && (
        <div className={styles.element}>
          {tails.map((tail) => (
            <Item tail={tail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
