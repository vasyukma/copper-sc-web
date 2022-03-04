import { FC } from 'react';
import appStyles from '../../../../../App.module.css';
import styles from './CreateBtn.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { ITail } from '../../../../../model/Tail';
import { copperSkApi } from '../../../../../service/CopperSkService';

interface IProps {}

export const CreateBtn: FC<IProps> = ({}) => {
  const linksState = useSelector((state: RootState) => state.linksSlice);
  const currentNode = useSelector(
    (state: RootState) => state.nodeExplorerSlice.currentNode
  );
  const [createTail, {}] = copperSkApi.usePostTailMutation();

  const handleCreate = () => {
    // // const linksState = useSelector((state: RootState) => state.linksSlice);
    // if (linksState.currentLink && linksState.selectedChildNode) {
    if (linksState.currentLink && currentNode) {
      const newTail = {
        linkId: linksState.currentLink.id,
        nodeId: currentNode.id,
        description: '',
      } as ITail;
      createTail(newTail);
    } else {
      alert('Не указан узел');
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.item} onClick={handleCreate}> */}
      <div
        className={`${appStyles.Btn} ${appStyles.Btn__caption}`}
        onClick={handleCreate}
      >
        Create
      </div>
    </div>
  );
};

export default CreateBtn;
