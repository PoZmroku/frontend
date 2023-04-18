import { Component } from '@angular/core';
import { UserService, UserStateService } from '../../services';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logout',
  styleUrls: ['./logout.component.scss'],
  template: `
    <ng-container *ngIf="logout$ | async"></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent {
  
  logout$: Observable<boolean> = this._userService.logout().pipe(
    tap(() => this._state.clearState()),
    tap(() => this._router.navigate(['/store']))
  );

  constructor(
    private _userService: UserService,
    private _state: UserStateService,
    private _router: Router
  ) {}
}
