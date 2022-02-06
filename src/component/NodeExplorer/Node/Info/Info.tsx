import styles from './Info.module.css';
import contentStyles from '../Node.module.css';
import { INode } from '../../../../model/INode';
import { FC, useEffect } from 'react';
import Item from './Item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditNode } from '../../../../store/reducer/nodeExplorerSlice';
import { RootState } from '../../../../store/store';
import { copperSkApi } from '../../../../service/CopperSkService';

interface IProps {
  node: INode;
}

const Info: FC<IProps> = ({ node }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.wrapper}
      onDoubleClick={() => dispatch(setIsEditNode(true))}
    >
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
