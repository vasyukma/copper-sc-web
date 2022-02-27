import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import { ICrossType } from '../../../../model/CrossType';
import { copperSkApi } from '../../../../service/CopperSkService';
import { closeCrossTypeCreateForm } from '../../../../store/reducer/crossingSlice';
import { offCreateEditLink } from '../../../../store/reducer/linksSlice';
import { RootState } from '../../../../store/store';
import styles from './CreateCrossType.module.css';
interface IProps {}

const CreateCrossType: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const { isCrossTypeCreateFormShow } = useAppSelector(
    (state: RootState) => state.crossingSlice
  );

  // const isEditNode = useAppSelector(
  //   (state: RootState) => state.nodeExplorerSlice.isEditNode
  // );

  const [createLink, {}] = copperSkApi.usePostCrossTypeMutation();

  // if (isEditNode && isCreateNode) {
  //   alert('Влючен режим созадния и редактирования одновременно!!!');
  //   dispatch(offCreateEditLink());
  // }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ICrossType>();
  const onSubmit = handleSubmit((data) => {
    console.log({ ...data });
    createLink({
      ...data,
      // id: null,
      //   name:
    } as ICrossType);
  });

  useEffect(() => {
    setValue('shortName', '');
    setValue('longName', '');
    setValue('description', '');
  }, []);

  return (
    <div className={styles.__wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <label>Сокращённое имя: </label>
          <input {...register('shortName')} />
          <label>Длинное имя: </label>
          <input {...register('longName')} />
          <label>Описание: </label>
          <input {...register('description')} />
        </div>
        <input type="submit" />
      </form>
      <button onClick={() => dispatch(closeCrossTypeCreateForm())}>
        Close
      </button>
    </div>
  );
};
export default CreateCrossType;
