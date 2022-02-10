import { FC } from "react";
import styles from "./List.module.css";
import { Item } from "./Item/Item";
import { copperSkApi } from "../../../service/CopperSkService";

interface IProps {}
export const List: FC<IProps> = ({}) => {
  const {
    data: links,
    error,
    isLoading,
  } = copperSkApi.useFetchAllLinksQuery("%");

  return (
    <div className={styles.wrapper}>
      {links?.map((link) => {
        return <Item link={link} />;
      })}
    </div>
  );
};

export default List;
