import { Component } from '@angular/core';
import { UserService } from '../../services';
import { IUserCredentials } from '../../interfaces';
import { Observable, tap, exhaustMap, delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: { email: string | undefined, password: string  | undefined } = { email: undefined, password: undefined };

  obs$: Observable<any>;

  constructor(private _userService: UserService) {}

  login() {
    // TODO: Deactivate the login button
    if (!this.form.email && !this.form.password) {
      return;
    }

    this.obs$ = this._userService.login(this.form as IUserCredentials).pipe(
      tap(result => localStorage.setItem('user', JSON.stringify(result)))
    );
  }
}
