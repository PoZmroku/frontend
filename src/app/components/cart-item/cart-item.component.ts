import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICart, ICartItem, IProduct } from '../../interfaces';
import { Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CartStateService } from 'src/app/services/cart-state.service';

@Component({
  selector: 'app-cart-item',
  styleUrls: ['./cart-item.component.scss'],
  template: `
    <ng-container *ngIf="cartItem">
      <mat-card>
        <div class="cartItem">
          <mat-form-field appearance="outline">
            <mat-label>Название товара</mat-label>
            <input matInput [ngModel]="cartItem.name" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Количество</mat-label>
            <input matInput [ngModel]="cartItem.quantity" readonly>
          </mat-form-field>
          <mat-card-actions>
            <button class="button" (click)="deleteItem(cartItem)" (click)="openSnackBar()" mat-button>Удалить</button>
          </mat-card-actions>
        </div>
      </mat-card>
    </ng-container>
    <ng-container *ngIf="deleteItems$ | async"></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  deleteItems$: Observable<ICart>;


  constructor(
    private _snackBar: MatSnackBar,
    private _cartState: CartStateService
  ) {}

  deleteItem(product: ICartItem): void {
    console.log(product);
    this.deleteItems$ = this._cartState.removeItem(product);
  }

  openSnackBar() {
    if(!this.deleteItems$) {
      this._snackBar.open('Товар успешно удален', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000
    });
    } else {

      this._snackBar.open('Произошла ошибка при удалении', '', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2 * 1000
      });
    }
  }

  @Input() cartItem: ICartItem;
}
