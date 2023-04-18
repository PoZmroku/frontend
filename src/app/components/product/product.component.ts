import { Component } from '@angular/core';
import { IProduct } from '../../interfaces';
import { Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  template: `
    <ng-container *ngIf="product else productNotFound">
      <mat-card>
        <div class="product">
          <mat-form-field appearance="outline">
            <mat-label>Product name</mat-label>
            <input matInput [ngModel]="product.name" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Description</mat-label>
            <input matInput [ngModel]="product.description" readonly>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Price</mat-label>
            <input matInput [ngModel]="product.price | currency" readonly>
          </mat-form-field>
        </div>
      </mat-card>
    </ng-container>

    <ng-template #productNotFound><mat-card>
        <div class="product">
          PRODUCT NOT FOUND
        </div>
      </mat-card></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product: IProduct;
}
