import { FC } from 'react';
import styles from './List.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { copperSkApi } from '../../../../../service/CopperSkService';
import { ILink } from '../../../../../model/ILink';
import { Item } from './Item/Item';

interface IProps {
  link: ILink;
}
export const List: FC<IProps> = ({ link }) => {
  const { data: tails } = copperSkApi.useFetchTailsLinkQuery(link.id);

  return (
    <div className={styles.wrapper}>
      {tails && (
        <div className={styles.content}>
          {tails.map((tail) => (
            <Item tail={tail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
