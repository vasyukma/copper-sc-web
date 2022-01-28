import { copperSkApi } from "../../service/CopperSkService";
import Label from "./Label/Label";
import styles from "./Labels.module.css";

export const Labels = () => {
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery("");
  // debugger;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Block}>
        <div className={styles.Title}></div>
        <div className={styles.Title__Text}>
          <h1>Этикирование</h1>
        </div>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        <div className={styles.Block__Row}>
          {links &&
            links.map((item) => {
              return <Label item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Labels;
