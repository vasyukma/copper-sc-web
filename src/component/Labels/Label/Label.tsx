import { FC } from "react";
import { ILink } from "../../../model/ILink";
import stylesParent from "../Labels.module.css";

interface LinkItemProps {
  item: ILink;
}

const Label: FC<LinkItemProps> = ({ item }) => {
  return (
    <div className={stylesParent.Block__Column}>
      <div className={stylesParent.Block__Item}>{item.shortName}</div>
    </div>
  );
};

export default Label;
