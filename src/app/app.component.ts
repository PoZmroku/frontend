import { Component } from '@angular/core';
import { UserService } from './services';
import { IProduct } from './interfaces';
import { UserStateService } from './services/state.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { share } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <mat-toolbar>
    <button mat-icon-button>
      <mat-icon>menu</mat-icon>
    </button>
    <span>Онколит</span>
    <span class="spacer"></span>
    <button mat-button [routerLink]="'/login'" *ngIf="!(isLoggedIn$ | async)">
      <mat-icon>login</mat-icon>
      Login
    </button>
    <button mat-button [routerLink]="'/logout'" *ngIf="isLoggedIn$ | async">
      <mat-icon>logout</mat-icon>
      Logout
    </button>
  </mat-toolbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'frontend';

  isLoggedIn$ = this._state.isLoggedIn$.pipe(share());

  constructor(private _state: UserStateService) {
  }
}
