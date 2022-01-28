import { ILink } from "../../../model/ILink";
import { FC } from "react";
import stylesParent from "../Links.module.css";
import styles from "./Link.module.css";

interface LinkItemProps {
  item: ILink;
}

const Link: FC<LinkItemProps> = ({ item }) => {
  return (
    <div className={stylesParent.Block__Column}>
      <div className={stylesParent.Block__Item}>{item.shortName}</div>
    </div>
  );
};

export default Link;
