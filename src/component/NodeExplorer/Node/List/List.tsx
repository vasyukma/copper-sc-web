import styles from './List.module.css';
import { INode } from '../../../../model/Node';
import { FC } from 'react';
import { copperSkApi } from '../../../../service/CopperSkService';
import Item from './Item/Item';

interface IProps {
  parentNode: INode;
}

const List: FC<IProps> = ({ parentNode }) => {
  const {
    data: children,
    error: fecthChildredError,
    isLoading: fetchChildrenError,
  } = copperSkApi.useFetchChildrenNodeQuery(parentNode.id);
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.item}> */}
      {children?.map((node: INode) => (
        <Item node={node} />
      ))}
      {/* {children && <Item node={children[0]} />} */}
      {/* </div> */}
    </div>
  );
};

export default List;
