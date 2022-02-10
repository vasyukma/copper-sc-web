import styles from './PatchPanel.module.css';
import { FC } from 'react';
import { ILink } from '../../../../../model/Link';
interface IProps {
  links: ILink[];
}

const PathPanel: FC<IProps> = ({ links }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.title}>Для патч-панели </div>
        {links.map((item) => {
          return <div className={styles.block__item}> {item.name} </div>;
        })}
      </div>
    </div>
  );
};

export default PathPanel;
