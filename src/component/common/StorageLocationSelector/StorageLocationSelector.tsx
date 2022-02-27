import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { copperSkApi } from '../../../service/CopperSkService';
import { setCurrentStorageLocation } from '../../../store/reducer/storageLocationSelectorSlice';
import { RootState } from '../../../store/store';
import ElementTitle from '../elementTitle/ElementTitle';
import ChildrenList from './ChildrenList/ChildrenList';
import { Path } from './Path/Path';
import styles from './StorageLocationSelector.module.css';

interface IProps {}

const StorageLocationSelector: FC<IProps> = ({}) => {
  const dispatch = useDispatch();

  const { currentStorageLocation } = useSelector(
    (state: RootState) => state.storageLocationSelectorSlice
  );

  const { data: rootStorageLocation } = copperSkApi.useFetchRootNodeQuery('');

  // useEffect(() => {
  //   // if (!currentStorageLocation) {
  //   dispatch(setCurrentStorageLocation(rootStorageLocation));
  //   // }
  // }, []);

  return (
    <div className={styles.__wrapper}>
      <ElementTitle titleText="Выбор места хранения" />
      <div className={styles.Path}>
        {currentStorageLocation && (
          <Path currentStorageLocation={currentStorageLocation} />
        )}
        {!currentStorageLocation && rootStorageLocation && (
          <Path currentStorageLocation={rootStorageLocation} />
        )}
      </div>
      <div>---------------</div>
      <div className={styles.Children}>
        {currentStorageLocation && (
          <ChildrenList currentStorageLocation={currentStorageLocation} />
        )}
        {!currentStorageLocation && rootStorageLocation && (
          <ChildrenList currentStorageLocation={rootStorageLocation} />
        )}
      </div>
    </div>
  );
};

export default StorageLocationSelector;
