import { Component } from '@angular/core';
import { ICart, ICartItem, IProduct } from 'src/app/interfaces';
import { ProductService, UserService, UserStateService } from 'src/app/services';
import { Observable, share } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartStateService } from 'src/app/services/cart-state.service';


@Component({
  selector: 'app-store',
  styleUrls: ['./store.component.scss'],
  template: `
  <div class="container" fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="25px" *ngFor="let product of products$ | async">
    <mat-card class="example-card">
      <mat-card-header>
        <img class="image" mat-card-image src="../../../assets/img/imgo.png"/>
        <mat-card-title>{{product.name}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Цена: {{product.price | currency:'RUB':'symbol-narrow'}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button class="button" mat-button (click)="addItem(product)">В Корзину</button>
        <button class="button" mat-button [routerLink]="['..', 'product', product._id]">Подробнее</button>
      </mat-card-actions>
    </mat-card>
  </div>
  <ng-container *ngIf="addItem$ | async"></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent {
  
  products$: Observable<IProduct[]> = this._productService.getProducts();

  addItem$: Observable<ICart>;


  constructor(
    private _productService: ProductService,
    private _cartState: CartStateService
  ) {}

  ngOnInit() {
  }

  addItem(product: IProduct): void {
    this.addItem$ = this._cartState.addItem({
      _id: product._id,
      name: product.name,
      quantity: 1
    });

    this._cartState.cart$.subscribe(cart => console.log(cart));
  }

}
