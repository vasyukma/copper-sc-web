import { ILink } from './Link';
import { INode } from './Node';

export interface ITail {
  id: number;
  linkId: number;
  link: ILink;
  nodeId: number;
  node: INode;
  description: string;
}

export interface ITailForCreateAndUpdate {
  id: null | number;
  linkId: number;
  nodeId: number;
  description: string;
}
