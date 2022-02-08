import { INodeType } from "./INodeType";

export interface INode {
  id: number | null;
  shortName: string;
  longName: string;
  description: string;
  type: INodeType;
  typeId: number | undefined;
  parentId: number;
}
