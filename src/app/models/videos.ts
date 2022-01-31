import { IChannels } from './channels';
import { IUser } from './user';

export interface IVideos {
  _id: string;
  user: IUser;
  channel: IChannels;
  title: string;
  slug: string;
  description: string;
  link: string;
  cover: string;
  likes: number;
  views: number;
}
