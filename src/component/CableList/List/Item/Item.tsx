import { FC } from 'react';
import { ICableListItem } from '../../../../model/CableListItem';
import styles from './Item.module.css';

interface IProps {
  item: ICableListItem;
}
export const Item: FC<IProps> = ({ item }) => {
  return (
    <tr className={styles.td}>
      <td>{item.roomName}</td>
      <td>{item.link.name}</td>
      <td>{item.socketNumber}</td>
      <td>{item.telecommunicationsClosetNumber}</td>
      <td>{item.patchPanelNumber}</td>
      <td>{item.portNumber}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{item.link.description}</td>
    </tr>
  );
};
