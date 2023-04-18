import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  template: `
    <ng-container *ngIf="cart$ | async as cart else emptyCart">
      <div *ngFor="let item of cart.items">
        <app-cart-item [cartItem]="item"></app-cart-item>
      </div>
    </ng-container>
    <ng-template #emptyCart>THE CART IS EMPTY BITCH</ng-template>
  `
})
export class CartComponent implements OnInit {

  cart$: Observable<any>;
  
  constructor(private _cartService: CartService) {}
  
  ngOnInit() {

    this.cart$ = this._cartService.cartItems('641748e7b4093cdee2c76d6c');
  }
}
