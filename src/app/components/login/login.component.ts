import { Component } from '@angular/core';
import { UserService } from '../../services';
import { IUserCredentials } from '../../interfaces';
import { Observable, tap } from 'rxjs';
import { UserStateService } from 'src/app/services/state.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  
  form: { email: string | undefined, password: string  | undefined } = { email: undefined, password: undefined };

  obs$: Observable<any>;

  constructor(
    private _userService: UserService,
    private _state: UserStateService,
    private _router: Router
  ) {}

  login() {
    // TODO: Deactivate the login button
    if (!this.form.email && !this.form.password) {
      return;
    }

    this.obs$ = this._userService.login(this.form as IUserCredentials).pipe(
      tap(result => this._state.setState(result)),
      tap(() => this._router.navigate(['/store']))
    );
  }
}
