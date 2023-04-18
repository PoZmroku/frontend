import { Component } from '@angular/core';
import { ICartItem, IProduct } from '../../interfaces';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  styleUrls: ['./cart-item.component.scss'],
  template: `
    <ng-container *ngIf="cartItem">
      <mat-card>
        <div class="cartItem">
          <mat-form-field appearance="outline">
            <mat-label>Item name</mat-label>
            <input matInput [ngModel]="cartItem.name" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Quantity</mat-label>
            <input matInput [ngModel]="cartItem.quantity" readonly>
          </mat-form-field>
        </div>
      </mat-card>
    </ng-container>
  `
})
export class CartItemComponent {

  @Input() cartItem: ICartItem;
}
