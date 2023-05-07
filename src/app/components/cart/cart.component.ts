import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CartStateService } from 'src/app/services';
import { ICart } from '../../interfaces';

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  template: `
  <button class="button" [routerLink]="['..', 'order']" mat-button>Сделать заказ</button>
    <ng-container *ngIf="cart$ | async as cart else emptyCart">
      <div *ngFor="let item of cart.items">
        <app-cart-item [cartItem]="item"></app-cart-item>
      </div>
    </ng-container>
    <ng-template #emptyCart>THE CART IS EMPTY</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  cart$: Observable<ICart | null>;

  constructor(private _cartState: CartStateService) {}
  
  ngOnInit() {
    this.cart$ = this._cartState.cart$;
  }
}
