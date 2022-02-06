import { FC } from 'react';
import styles from './Create.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { ITail } from '../../../../../../model/ITail';
import { copperSkApi } from '../../../../../../service/CopperSkService';

interface IProps {}

export const Create: FC<IProps> = ({}) => {
  const linksState = useSelector((state: RootState) => state.linksSlice);
  const [createTail, {}] = copperSkApi.usePostTailMutation();

  const handleCreate = () => {
    // // const linksState = useSelector((state: RootState) => state.linksSlice);
    if (linksState.currentLink && linksState.selectedChildNode) {
      const newTail = {
        linkId: linksState.currentLink.id,
        nodeId: linksState.selectedChildNode.id,
        description: '',
      } as ITail;
      createTail(newTail);
    } else {
      alert('Не указан узел');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item} onClick={handleCreate}>
        Create
      </div>
    </div>
  );
};

export default Create;
