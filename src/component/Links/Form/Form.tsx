import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ElementTitle from '../../common/elementTitle/ElementTitle';
import EditFrom from '../EditForm/EditForm';
import { Content } from './Content/Content';
import styles from './Form.module.css';

interface IProps {}
export const Form: FC<IProps> = ({}) => {
  let currentLink = useSelector(
    (state: RootState) => state.linksSlice.currentLink
  );

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={styles.Block}>
      {/* <div className="element-title element-title--theme-default">
        <div className="element-title__text">Информация о линии</div>
      </div> */}
      <ElementTitle titleText="Информация о линии" />
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
