import styles from './Info.module.css';
import contentStyles from '../Content.module.css';
import { INode } from '../../../../model/INode';
import { FC } from 'react';
import Item from './Item/Item';

interface IProps {
  node: INode;
}

const Info: FC<IProps> = ({ node }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={contentStyles.idColumn_size}>
        <Item text={node.id} />
      </div>
      <div className={contentStyles.shortNameColumn_size}>
        <Item text={node.shortName} />
      </div>
      <div className={contentStyles.longNameColumn_size}>
        <Item text={node.shortName} />
      </div>
      <div className={contentStyles.descriptionColumn_size}>
        <Item text={node.description} />
      </div>
      <div className={contentStyles.shortNameColumn_size}>
        <Item text={node.type.shortName} />
      </div>
      <div className={contentStyles.longNameColumn_size}>
        <Item text={node.type.longName} />
      </div>
      <div className={contentStyles.descriptionColumn_size}>
        <Item text={node.type.description} />
      </div>
    </div>
  );
};

export default Info;
