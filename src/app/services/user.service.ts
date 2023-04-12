import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IToken, IRegisterUserResult, IUserCredentials } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = `http://localhost:4444`;

  constructor(
    private _http: HttpClient
  ) { }

  register(user: IUser): Observable<IRegisterUserResult> {
    return this._http.post<IRegisterUserResult>(`${this._apiUrl}/auth/register`, user);
  }

  login(user: IUserCredentials): Observable<IRegisterUserResult> {
    return this._http.post<IRegisterUserResult>(`${this._apiUrl}/auth/login`, user);
  }

  me(): Observable<IUser> {
    return this._http.get<IUser>(`${this._apiUrl}/auth/me`);
  }
}
