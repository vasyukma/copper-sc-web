import { FC } from 'react';
import styles from './Item.module.css';
import { ILink } from '../../../../model/ILink';

interface IProps {
  link: ILink;
}
export const Item: FC<IProps> = ({ link }) => {
  return (
    <tr className={styles.td}>
      <td></td>
      <td>{link.shortName}</td>
      <td>111</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};
