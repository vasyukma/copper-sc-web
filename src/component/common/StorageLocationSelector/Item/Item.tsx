import React, { useEffect } from 'react';
import { INode } from '../../../../model/Node';
import styles from './Item.module.css';
import appStyles from '../../../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStorageLocation } from '../../../../store/reducer/storageLocationSelectorSlice';
import { RootState } from '../../../../store/store';
import { useState } from 'react';

interface IProps {
  storageLocation: INode;
  onClick: Function;
  onDoubleClick: Function;
}
export const Item: React.FC<IProps> = ({
  storageLocation,
  onClick,
  onDoubleClick,
}) => {
  const dispatch = useDispatch();

  const { selectedStorageLocation } = useSelector(
    (state: RootState) => state.storageLocationSelectorSlice
  );

  const [stylesItem, setStylesItem] = useState(appStyles.SimpleList_list);

  useEffect(() => {
    // debugger;
    selectedStorageLocation?.id === storageLocation.id
      ? setStylesItem(
          // `${appStyles.SimpleList_list} ${appStyles.SimpleList_selected}`
          `${appStyles.SimpleList_selected}`
        )
      : setStylesItem(appStyles.SimpleList_list);
  });

  return (
    <div
      className={stylesItem}
      onDoubleClick={() => dispatch(setCurrentStorageLocation(storageLocation))}
    >
      <div
        className={appStyles.SimpleList_item}
        onClick={() => onClick()}
        onDoubleClick={() => onDoubleClick()}
      >
        {`${storageLocation.type.shortName} ${storageLocation.shortName}`}
      </div>
    </div>
  );
};
