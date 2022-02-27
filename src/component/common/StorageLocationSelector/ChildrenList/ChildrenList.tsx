import { FC } from 'react';
import { useSelector } from 'react-redux';
import { copperSkApi } from '../../../../service/CopperSkService';
import { RootState } from '../../../../store/store';
import styles from './Path.module.css';
import { INode } from '../../../../model/Node';
import { Item } from '../Item/Item';

interface IProps {
  currentStorageLocation: INode;
}
export const ChildrenList: FC<IProps> = ({ currentStorageLocation }) => {
  // const { currentStorageLocation } = useSelector(
  //   (state: RootState) => state.storageLocationSelectorSlice
  // );
  const { data: storageLocationChildren } =
    copperSkApi.useFetchChildrenNodeQuery(currentStorageLocation.id);

  return (
    <div className={styles.__wrapper}>
      {storageLocationChildren &&
        storageLocationChildren.map((storageLocation) => (
          <Item
            storageLocation={storageLocation}
            onClick={() => alert('!')}
            onDoubleClick={() => {}}
          />
        ))}
      <div className={styles.item}></div>
    </div>
  );
};

export default ChildrenList;
