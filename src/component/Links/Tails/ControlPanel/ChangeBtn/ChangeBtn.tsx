import { FC } from 'react';
import { useSelector } from 'react-redux';
import appStyles from '../../../../../App.module.css';
import { copperSkApi } from '../../../../../service/CopperSkService';
import { RootState } from '../../../../../store/store';
import styles from './ChangeBtn.module.css';

interface IProps {}

export const ChangeBtn: FC<IProps> = ({}) => {
  const currentTail = useSelector(
    (state: RootState) => state.linksSlice.currentTail
  );
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );
  const [updateTail, {}] = copperSkApi.usePostTailMutation();

  const handleOnClick = () => {
    if (currentTail && currentNode) {
      const changeTail = {
        ...currentTail,
        nodeId: currentNode.id,
      };
      updateTail(changeTail);
    } else {
      alert('Не указан конец линии или место хранения');
    }
  };

  return (
    <div className={styles.__wrapper}>
      <div
        className={`${appStyles.Btn} ${appStyles.Btn__caption}`}
        onClick={handleOnClick}
      >
        Изменить место хранения
      </div>
    </div>
  );
};

export default ChangeBtn;
