import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IUserCredentials, IUserState } from 'src/app/interfaces';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  styleUrls: ['./orders.component.scss'],
  template: `
    <div class="container" fxLayout="row wrap" fxLayoutAlign="center center" fxLayoutGap="25px" *ngFor="let order of orders$ | async">
    <mat-card class="example-card">
      <mat-card-header>
        <img class="image" mat-card-image src=""/>
        <mat-card-title>{{order.shippingAddress.street}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Статус заказа: {{order.status}}</p>
        <p>Номер заказа: {{order.cart}}</p>
      </mat-card-content>
    </mat-card>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {

  orders$: Observable<any>;
  user$: Observable<IUserState>;

  constructor(
    private _orderService: OrderService
  ) {}

  ngOnInit() {
    this.orders$ = this._orderService.orders();
  }

}
