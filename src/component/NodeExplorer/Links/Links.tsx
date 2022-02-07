import styles from "./Links.module.css";
import { FC } from "react";
import { INode } from "../../../model/INode";
import { copperSkApi } from "../../../service/CopperSkService";
interface ILinks {
  node: INode;
}

const Links: FC<ILinks> = ({ node }) => {
  // const {data: tails} = copperSkApi.useFetchTail

  return <div className={styles.wrapper}>{node.longName}</div>;
};
export default Links;
