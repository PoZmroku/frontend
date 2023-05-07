import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { IOrder, IUser } from 'src/app/interfaces';
import { CartStateService } from 'src/app/services';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  form: { shippingAddress: {street: string, city: string , state: string, country: string }  } = {shippingAddress: {}} as IOrder;

  order$: Observable<any>;
  user$: Observable<IUser>;


  constructor(
    private _orderService: OrderService,
    private _cartState: CartStateService,
    private _router: Router
  ) {}

  order() {
    if (!this.form.shippingAddress){
      return;
    }

    this.order$ = this._cartState.cart$.pipe(switchMap(cart => {
        console.log(cart);
        return this._orderService.add({ ...this.form, cartId: cart!._id });
      }
    ),
    tap(() => {
      alert('Заказ успешно сформирован.');
      this._router.navigate(['/store']);
    }));
  }

}
