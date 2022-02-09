import { INodeType } from './NodeType';

export interface INode {
  id: number;
  shortName: string;
  longName: string;
  description: string;
  type: INodeType;
  typeId: number | undefined;
  parentId: number;
}

export interface INodeForCreateAndUpdate {
  id: null | number;
  shortName: string;
  longName: string;
  description: string;
  typeId: number;
  parentId: number;
}
