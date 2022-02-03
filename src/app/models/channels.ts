import { IUser } from './user';
import { IVideos } from './videos';

export interface IChannels {
  user: IUser;
  name: string;
  slug: string;
  logo: string;
  cover: string;
  about: string;
  videos: [IVideos];
}
