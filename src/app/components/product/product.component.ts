import { Component } from '@angular/core';
import { ICart, IProduct } from '../../interfaces';
import { ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable, map } from 'rxjs';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { CartStateService } from 'src/app/services/cart-state.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  template: `
  <div class="container">
    <ng-container  *ngIf="product$ | async as product else productNotFound">
      <mat-card>
        <div class="product">
          <mat-form-field appearance="outline">
            <mat-label>Название товара</mat-label>
            <input matInput [ngModel]="product.name" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Описание</mat-label>
            <input matInput [ngModel]="product.description" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Цена</mat-label>
            <input matInput [ngModel]="product.price | currency:'RUB':'symbol-narrow'" readonly>
          </mat-form-field>
          <mat-card-actions>
            <button class="button" mat-button (click)="addItem(product)">В Корзину</button>
          </mat-card-actions>
        </div>
      </mat-card>
    </ng-container>
  </div>

    <ng-template #productNotFound>
      <mat-card>
        <div class="product">
          PRODUCT NOT FOUND
        </div>
      </mat-card>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  product$: Observable<IProduct> = this._activatedRoute.data.pipe(map(({product}) => product));
  //addtoCart$: Observable<ICartState> = this._activatedRoute.data.pipe(map(({product}) => product));
  productSubscription: Subscription;
  addItem$: Observable<ICart>;
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cartState: CartStateService
  ) {}


  addItem(product: IProduct): void {
    this.addItem$ = this._cartState.addItem({
      _id: product._id,
      name: product.name,
      quantity: 1
    });
  }

}
