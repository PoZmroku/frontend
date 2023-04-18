import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IToken, ILoginResult, IUserCredentials } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = `http://localhost:4444`;

  constructor(
    private _http: HttpClient
  ) { }

  login(user: IUserCredentials): Observable<ILoginResult> {
    return this._http.post<ILoginResult>(`${this._apiUrl}/auth/login`, user);
  }

  me(): Observable<IUser> {
    return this._http.get<IUser>(`${this._apiUrl}/auth/me`);
  }

  isTokenExpired(): Observable<boolean> {
    return this._http.get<boolean>(`${this._apiUrl}/auth/isTokenExpired`);
  }

  logout(): Observable<boolean> {
    return this._http.get<boolean>(`${this._apiUrl}/logout`);
  }
}
