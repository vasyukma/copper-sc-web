export interface ILink {
  id: number;
  name: string;
  cableBrand: string;
  cabinetLength: number;
  metalStructursLength: number;
  cableChannelLength: number;
  reserveLength: number;
  parts: number;
  length: number;
  description: string;
}

export interface ILinkForCreateAndUpdate {
  id: null | number;
  name: string;
  cableBrand: string;
  cabinetLength: number;
  metalStructursLength: number;
  cableChannelLength: number;
  reserveLength: number;
  parts: number;
  length: number;
  description: string;
}
