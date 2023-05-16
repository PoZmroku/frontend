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

<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <button class="butone" mat-button fxLayout="column" fxLayoutAlign="center center" [routerLink]="'/posts'">Новости</button>
    <button class="butone" mat-button fxLayout="column" fxLayoutAlign="center center" *ngIf="isLoggedIn$ | async" [routerLink]="['/orders']">Мои заказы</button>
    <button class="butone" mat-button fxLayout="column" fxLayoutAlign="center center" [routerLink]="['/store']">Каталог</button>
</mat-drawer>
  
  
  <mat-toolbar>
    <button mat-icon-button (click)="drawer.toggle()">
      <mat-icon>menu</mat-icon>
    </button>
    <span><a class="homepage" [routerLink]="'/store'">Онколит</a></span>
    <span class="spacer"></span>
    <button class="button" mat-button [routerLink]="'/login'" *ngIf="!(isLoggedIn$ | async)">
      <mat-icon>login</mat-icon>
      Войти
    </button>
    <button class="button" mat-button [routerLink]="'/logout'" *ngIf="isLoggedIn$ | async">
      <mat-icon>logout</mat-icon>
      Выйти
    </button>
    <div class="demo-section">
      <button class="button" mat-raised-button [routerLink]="['..', 'cart']"
      *ngIf="isLoggedIn$ | async"
      matBadge="1" matBadgePosition="before" matBadgeColor="accent">
      Корзина
    </button>
  </div>
</mat-toolbar>
<div class="container">
  <router-outlet></router-outlet>
</div>
</mat-drawer-container>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'frontend';
  
  isLoggedIn$ = this._state.isLoggedIn$.pipe(share());
  
  constructor(private _state: UserStateService) {
  }
}
