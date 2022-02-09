import { FC, useEffect } from "react";
import styles from "./EditForm.module.css";
import { useForm } from "react-hook-form";
import { ILink } from "../../../model/ILink";
import { copperSkApi } from "../../../service/CopperSkService";

interface IProps {
  link: ILink;
}
export const EditFrom: FC<IProps> = ({ link }) => {
  const [createPost, {}] = copperSkApi.usePutLinkMutation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ILink>();
  const onSubmit = handleSubmit((data) => {
    console.log({ ...data, id: link.id });
    createPost({
      ...data,
      id: link.id,
    } as ILink);
  });
  // firstName and lastName will have correct type

  useEffect(() => {
    setValue("id", link.id);
    setValue("name", link.name);
    setValue("cableBrand", link.cableBrand);
    setValue("cabinetLength", link.cabinetLength);
    setValue("metalStructursLength", link.metalStructursLength);
    setValue("cableChannelLength", link.cableChannelLength);
    setValue("reserveLength", link.reserveLength);
    setValue("parts", link.parts);
    setValue("length", link.length);
    setValue("description", link.description);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <label>Имя: </label>
        <input {...register("name")} />
      </div>
      <div>
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
      </div>
      <input type="submit" />
    </form>
  );
};

export default EditFrom;
