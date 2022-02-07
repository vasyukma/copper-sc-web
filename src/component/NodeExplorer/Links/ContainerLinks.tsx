import styles from "./ContainerLinks.module.css";
import { FC } from "react";
interface IContainerLinks {}

const ContainerLinks: FC<IContainerLinks> = () => {
  return <div className={styles.wrapper}></div>;
};
export default ContainerLinks;
