import { ILink } from "../../../model/ILink";
import { FC } from "react";
import "./Link.css";

interface LinkItemProps {
  item: ILink;
}

const Link: FC<LinkItemProps> = ({ item }) => {
  return (
    <div className="Block__Column">
      <div className="Block__Item">{item.shortName}</div>
    </div>
  );
};

export default Link;
