import { IUser } from './user';
import { IVideos } from './videos';

export interface IChannels {
  _id: string;
  user: IUser;
  name: string;
  slug: string;
  logo: string;
  cover: string;
  about: string;
  videos: [IVideos];
  totalLikes: number;
  totalViews: number;
  charge: number;
}
