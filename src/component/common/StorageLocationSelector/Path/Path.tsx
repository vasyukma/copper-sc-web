import { FC } from 'react';
import { useSelector } from 'react-redux';
import { copperSkApi } from '../../../../service/CopperSkService';
import { RootState } from '../../../../store/store';
import styles from './Path.module.css';
import appStyles from '../../../../App.module.css';
import { INode } from '../../../../model/Node';
import { Item } from '../Item/Item';
import { useDispatch } from 'react-redux';
import {
  setSelectedStorageLocation,
  setSelectedStorageLocationChild,
} from '../../../../store/reducer/storageLocationSelectorSlice';

interface IProps {
  currentStorageLocation: INode;
}
export const Path: FC<IProps> = ({ currentStorageLocation }) => {
  const dispatch = useDispatch();
  // const { currentStorageLocation } = useSelector(
  //   (state: RootState) => state.storageLocationSelectorSlice
  // );
  const { data: currentStorageLocationPath } =
    copperSkApi.useFetchNodePathQuery(currentStorageLocation.id);

  // debugger;

  // let [itemStyles, setStylesWrapper] = useState(styles.item);

  // useEffect(() => {
  //   currentLink?.id === link.id
  //     ? setStylesWrapper(`${styles.item} ${styles.selected}`)
  //     : setStylesWrapper(styles.item);
  // });

  return (
    <div className={styles.__wrapper}>
      <div className={`${appStyles.SimpleList} ${appStyles.SimpleList_data}`}>
        {currentStorageLocationPath &&
          currentStorageLocationPath.nodes
            .map((storageLocation) => (
              <Item
                storageLocation={storageLocation}
                onClick={() =>
                  dispatch(setSelectedStorageLocation(storageLocation))
                }
              />
            ))
            .reverse()}
        <div className={styles.item}></div>
      </div>
    </div>
  );
};

export default Path;
