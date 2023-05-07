import { IToken } from './IToken';


export interface IUser {
    _id: string;
    email: string;
    fullName: string;
    role: string;
    createAt: Date | null;
}

export type ILoginResult = IUser & IToken;

export type IUserState = ILoginResult;

export type IUserCredentials = Pick<IUser, 'email'> & { password: string };

export type IUserRole = Pick<IUser, 'role'>
