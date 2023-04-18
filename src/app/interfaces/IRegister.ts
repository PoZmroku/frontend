import { IToken } from './IToken';

export interface IRegister {
    email: string;
    fullName: string;
    password: string;
}

export type IRegisterUserResult = IRegister & IToken;

export type IRegisterCredentials = Pick<IRegister, 'email'> & { password: string, fullName: string };