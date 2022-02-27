import { ILink } from './Link';

export interface ICableListItem {
  link: ILink;
  roomName: string;
  socketNumber: string;
  telecommunicationsClosetNumber: string;
  patchPanelNumber: string;
  portNumber: string;
}
