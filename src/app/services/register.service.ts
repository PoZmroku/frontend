import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister, IToken, IRegisterUserResult } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _apiUrl = `http://localhost:4444`;

  constructor(
    private _http: HttpClient
  ) { }

  register(user: IRegister): Observable<IRegisterUserResult> {
    return this._http.post<IRegisterUserResult>(`${this._apiUrl}/auth/register`, user);
  }

}
