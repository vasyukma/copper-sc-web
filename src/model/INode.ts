import { INodeType } from './INodeType';

export interface INode {
  id: number;
  shortName: string;
  longName: string;
  description: string;
  type: INodeType;
  typeId: number | undefined;
  parentId: number;
}
