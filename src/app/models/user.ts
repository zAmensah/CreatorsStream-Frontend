import { IChannels } from './channels';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  expireToken: string;
  resetToken: string;
  balance: number;
  channels: [IChannels];
  subscriptions: [IChannels];
}
