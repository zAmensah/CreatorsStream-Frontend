import { IUser } from 'src/app/models/user';

export interface IAuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: IUser;
}
