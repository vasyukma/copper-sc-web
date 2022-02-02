export interface ILink {
  id: number;
  name: string;
  shortName: string;
  longName: string;
  cableBrand: string | null;
  cabinetLength: number | null;
  metalStructursLength: string | null;
  cabelChannelLength: string | null;
  reservLength: string | null;
  parts: string | null;
  description: string;
  length: number | null;
}
