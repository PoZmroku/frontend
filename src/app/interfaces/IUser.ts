import { IToken } from './IToken';

export interface IUser {
    email: string;
    fullName: string;
    role: string;
    createAt: Date;
}

export type IUserCredentials = Pick<IUser, 'email'> & { password: string };

export type IRegisterUserResult = IUser & IToken;