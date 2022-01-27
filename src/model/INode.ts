export interface INode {
  id: number;
  shortName: string;
  longName: string;
  description: string;
  typeId: bigint;
  parentId: bigint;
}
