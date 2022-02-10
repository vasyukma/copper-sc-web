import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook/redux";
import { ILink } from "../../model/Link";
import { copperSkApi } from "../../service/CopperSkService";
import PatchPanel from "./Label/Types/PathPanel/PatchPanel";
import Tail from "./Label/Types/Tail/Tail";
import styles from "./Labels.module.css";

export const Labels = () => {
  const [filterText, setFilterText] = useState<string>("");

  const {
    data: links,
    error,
    isLoading,
    refetch,
  } = copperSkApi.useFetchAllLinksQuery(filterText);

  const handleOnChangeOfFilterText = (event: any) => {
    setFilterText(event.target.value);
    refetch();
  };
  // const {
  //   register,
  //   setValue,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<any>();

  enum LableType {
    TAIL,
    PATCH,
    SOCET,
  }

  const [lableType, setLableType] = useState<LableType>(LableType.TAIL);

  const handleChangeLableType = (event: any) => {
    setLableType(event.target.value);
  };

  const getLableType = (links: ILink[]) => {
    if (lableType == LableType.TAIL) {
      return <Tail links={links} />;
    } else if (lableType == LableType.PATCH) {
      return <PatchPanel links={links} />;
    } else {
      return <div>Не реализован</div>;
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
        <div className={styles.control_elements}>
          <div className={styles.filter}>
            <label className={styles.label}>Фильтр</label>
            <input
              type="text"
              value={filterText}
              onChange={handleOnChangeOfFilterText}
            />
          </div>
          <div className={styles.type}>
            <label className={styles.label}>Тип: </label>
            <select
              className={styles.type_list}
              value={lableType}
              onChange={handleChangeLableType}
            >
              <option value={LableType.TAIL}>Конец кабеля</option>
              <option value={LableType.PATCH}>Патч-панель</option>
              <option value={LableType.SOCET}>Розетка</option>
            </select>
          </div>
        </div>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {links && getLableType(links)}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Labels;
