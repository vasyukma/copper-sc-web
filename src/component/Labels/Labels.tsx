import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook/redux";
import { copperSkApi } from "../../service/CopperSkService";
import Label from "./Label/Label";
import styles from "./Labels.module.css";

export const Labels = () => {
  const dispatch = useAppDispatch();
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery("");
  // debugger;

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = handleSubmit((data) => {
    // if (isCreateNode) {
    // postNode({
    //   ...data,
    //   id: null,
    //   parentId: node.id,
    //   typeId: nodeTypeId,
    // } as INode);
    // dispatch(offCreateEditNode());
  });

  enum LableType {
    TAIL,
    PATCH,
    SOCET,
  }

  const [lableType, setLableType] = useState<LableType>(LableType.TAIL);

  return (
    <div className={styles.wrapper}>
      {/* {/* <div className={styles.controlPanel}>ControlPanel</div> */}
      <div className={styles.block}>
        <div className={styles.title}></div>
        <div className={styles.title__text}>
          <h1>Этикирование</h1>
        </div>
        <div className={styles.item}>
          {/* Node: {currentNode?.shortName} */}
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.element}>
              <label className={styles.label}>Тип: </label>
              {/* <input {...register('descriptison')} /> */}
              <select
              // className={styles.input}
              // value={nodeTypeId}
              // onChange={handleChangeNodeType}
              >
                <option value={LableType.TAIL} selected>
                  Tail
                </option>
                <option value={LableType.PATCH}>Path</option>
                <option value={LableType.SOCET}>Socket</option>
              </select>
            </div>

            {/* <input type="submit" /> */}
          </form>
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка</h1>}
          <div className={styles.block__row}>
            {links &&
              links.map((item) => {
                return <Label item={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labels;
