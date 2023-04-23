import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IRegisterCredentials } from '../../interfaces';
import { RegisterService } from '../../services/';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  form: { email: string | undefined, password: string  | undefined, fullName: string | undefined,  } = { email: undefined, password: undefined, fullName: undefined };

  register$: Observable<any>;

  constructor(private _registerService: RegisterService) {}

  register() {
    if (!this.form.email && !this.form.password && !this.form.fullName){
      return;
    }

    this.register$ = this._registerService.register(this.form as IRegisterCredentials).pipe(
      tap(result => localStorage.setItem('user', JSON.stringify(result)))
    );
  }
}
