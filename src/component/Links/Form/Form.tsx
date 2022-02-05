import { FC, useState } from 'react';
import styles from './Form.module.css';
import { Content } from './Content/Content';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { ILink } from '../../../model/ILink';
import EditFrom from '../EditForm/EditForm';

interface IProps {}
export const Form: FC<IProps> = ({}) => {
  let currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );

  // const [editLink, setEditLink] = useState(currentLink);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={styles.wrapper}>
      {currentLink && <Content link={currentLink} />}
      <button
        onClick={() => {
          isEdit ? setIsEdit(false) : setIsEdit(true);
        }}
      >
        Редактировать
      </button>
      {isEdit && currentLink && <EditFrom link={currentLink} />}
    </div>
  );
};

export default Form;
