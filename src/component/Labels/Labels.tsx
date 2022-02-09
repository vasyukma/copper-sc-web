import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook/redux";
import { ILink } from "../../model/ILink";
import { copperSkApi } from "../../service/CopperSkService";
import Branch from "../Links/Tails/NodesChildren/Branch/Branch";
import PatchPanel from "./Label/Types/PathPanel/PatchPanel";
import Tail from "./Label/Types/Tail/Tail";
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

  enum LableType {
    TAIL,
    PATCH,
    SOCET,
  }

  const [lableType, setLableType] = useState<LableType>(LableType.TAIL);

  // const onSubmit = handleSubmit((data) => {
  //   setLableType(data);
  //   console.log("setState");
  //   // if (isCreateNode) {
  //   // postNode({
  //   //   ...data,
  //   //   id: null,
  //   //   parentId: node.id,
  //   //   typeId: nodeTypeId,
  //   // } as INode);
  //   // dispatch(offCreateEditNode());
  // });

  const handleChangeLableType = (event: any) => {
    // console.log(event.target.value);
    setLableType(event.target.value);
    // console.log(event.target.value);
  };

  const getLableType = (links: ILink[]) => {
    console.log(lableType);
    if (lableType == LableType.TAIL) {
      // console.log("tail");
      return <Tail links={links} />;
    } else if (lableType == LableType.PATCH) {
      // console.log("path");
      return <PatchPanel links={links} />;
    } else {
      // console.log("default");
      return <div>Не реализисован</div>;
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* {/* <div className={styles.controlPanel}>ControlPanel</div> */}
      {/* <div className={styles.block}> */}
        <div className={styles.title}></div>
        <div className={styles.title__text}>
          <h1>Этикирование</h1>
        </div>
        <div className={styles.item}>
          {/* Node: {currentNode?.shortName} */}
          {/* <form className={styles.form} onSubmit={onSubmit}> */}
          <div className={styles.element}>
            <label className={styles.label}>Тип: </label>
            {/* <input {...register('descriptison')} /> */}
            <select
              className={styles.input}
              value={lableType}
              onChange={handleChangeLableType}
            >
              <option value={LableType.TAIL}>Tail</option>
              <option value={LableType.PATCH}>Path</option>
              <option value={LableType.SOCET}>Socket</option>
            </select>
          </div>
          {/* <input type="submit" /> */}
          {/* </form> */}
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка</h1>}
          {/* <div className={styles.block__row}> */}
          {/* {links &&
              links.map((item) => {
                return <Tail item={item} />;
              })} */}
          {links && getLableType(links)}
          {/* </div> */}
          {/* sdf */}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Labels;
