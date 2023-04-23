import { Component } from '@angular/core';
import { IProducts, IProduct } from 'src/app/interfaces';
import { ProductService, UserService, UserStateService } from 'src/app/services';
import { Observable, share } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-store',
  styleUrls: ['./store.component.scss'],
  template: `
  <div class="container" fxLayout="row wrap" fxLayoutAlign="center center" fxLayoutGap="25px" *ngFor="let product of products$ | async">
    <mat-card class="example-card">
      <mat-card-header>
        <img class="image" mat-card-image src="../../../assets/img/imgo.png"/>
        <mat-card-title>{{product.name}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Цена: {{product.price | currency:'RUB':'symbol-narrow'}}</p>
        <p>{{product._id}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button class="button" mat-button [routerLink]="['cart']">В Корзину</button>
        <button class="button" mat-button [routerLink]="['..', 'product', product._id]">Подробнее</button>
      </mat-card-actions>
    </mat-card>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent {
  products$: Observable<IProducts[]> = this._productService.getProducts();
  
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

}
