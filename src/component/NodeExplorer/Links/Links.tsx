import styles from "./Links.module.css";
import { FC } from "react";
interface ILinks {}

const Links: FC<ILinks> = () => {
  return <div className={styles.wrapper}></div>;
};
export default Links;
