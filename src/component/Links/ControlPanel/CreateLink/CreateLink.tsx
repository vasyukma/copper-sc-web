import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import { ILink, ILinkForCreateAndUpdate } from '../../../../model/Link';
import { copperSkApi } from '../../../../service/CopperSkService';
import { offCreateEditLink } from '../../../../store/reducer/linksSlice';
import { RootState } from '../../../../store/store';
import styles from './CreateLink.module.css';
interface ICreateLink {}

const CreateLink: FC<ICreateLink> = () => {
  const dispatch = useAppDispatch();

  const isCreateNode = useAppSelector(
    (state: RootState) => state.nodeExplorerSlice.isCreateNode
  );

  const isEditNode = useAppSelector(
    (state: RootState) => state.nodeExplorerSlice.isEditNode
  );

  const [createLink, {}] = copperSkApi.usePostLinkMutation();

  if (isEditNode && isCreateNode) {
    alert('Влючен режим созадния и редактирования одновременно!!!');
    dispatch(offCreateEditLink());
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ILink>();
  const onSubmit = handleSubmit((data) => {
    console.log({ ...data });
    createLink({
      ...data,
      id: null,
      //   name:
    } as ILinkForCreateAndUpdate);
  });
  useEffect(() => {
    // setValue('id', link.id);
    setValue('name', '');
    setValue('cableBrand', '');
    setValue('cabinetLength', 0);
    setValue('metalStructursLength', 0);
    setValue('cableChannelLength', 0);
    setValue('reserveLength', 0);
    setValue('parts', 0);
    setValue('length', 0);
    setValue('description', '');
  }, []);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <label>Имя: </label>
          <input {...register('name')} />
        </div>
        {/* <div>
        <label>Марка кабеля: </label>
        <input {...register("cableBrand")} />
      </div>
      <div>
        <label>В шкафу (м): </label>
        <input {...register("cabinetLength")} />
      </div>
      <div>
        <label>По металоконструкции (м): </label>
        <input {...register("metalStructursLength")} />
      </div>
      <div>
        <label>В гофро-трубе/каб. канале (м): </label>
        <input {...register("cableChannelLength")} />
      </div>
      <div>
        <label>Запас на разделку и подключение (м): </label>
        <input {...register("reserveLength")} />
      </div>
      <div>
        <label>Количество кусков (шт): </label>
        <input {...register("parts")} />
      </div>
      <div>
        <label>Итого длина (м): </label>
        <input {...register("length")} />
      </div>
      <div>
        <label>Примечание: </label>
        <input {...register("description")} />
      </div> */}
        <input type="submit" />
      </form>
      <button onClick={() => dispatch(offCreateEditLink())}>Close</button>
    </div>
  );
};
export default CreateLink;
