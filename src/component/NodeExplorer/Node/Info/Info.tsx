import { FC } from 'react';
import { INode } from '../../../../model/Node';
import styles from './Info.module.css';
import Item from './Item/Item';

interface IProps {
  node: INode;
}

const Info: FC<IProps> = ({ node }) => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={contentStyles.idColumn_size}> */}
      <Item text={node.id} />
      {/* </div> */}
      {/* <div className={contentStyles.shortNameColumn_size}> */}
      <Item text={node.shortName} />
      {/* </div> */}
      {/* <div className={contentStyles.longNameColumn_size}> */}
      <Item text={node.shortName} />
      {/* </div> */}
      {/* <div className={contentStyles.descriptionColumn_size}> */}
      <Item text={node.description} />
      {/* </div> */}
      {/* <div className={contentStyles.shortNameColumn_size}> */}
      <Item text={node.type.shortName} />
      {/* </div> */}
      {/* <div className={contentStyles.longNameColumn_size}> */}
      <Item text={node.type.longName} />
      {/* </div> */}
      {/* <div className={contentStyles.descriptionColumn_size}> */}
      <Item text={node.type.description} />
      {/* </div> */}
    </div>
  );
};

export default Info;
