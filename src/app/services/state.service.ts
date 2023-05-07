import { Injectable } from '@angular/core';
import { IUserRole, IUserState } from '../interfaces';
import { BehaviorSubject, Observable, switchMap, map } from 'rxjs';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor(
  private _userService: UserService
  ) {}
  
  #userState$ = new BehaviorSubject<IUserState | null>(null);

  user$: Observable<IUserState | null> = this.#userState$.asObservable();
  isLoggedIn$: Observable<boolean> = this._userService.isTokenExpired()
    .pipe(map(isExpired => !isExpired));
  
  userRole$: Observable<IUserRole | null> = this.#userState$.asObservable();

  setState(state: IUserState): void {
    localStorage.setItem('user', JSON.stringify(state));
    this.#userState$.next(state);
  }
  
  clearState(): void {
    localStorage.removeItem('user');
    this.#userState$.next(null);
  }

}
