import { ILink } from './ILink';
import { INode } from './INode';

export interface ITail {
  id: number;
  linkId: number;
  link: ILink;
  nodeId: number;
  node: INode;
  description: string;
}
