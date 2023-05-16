import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/interfaces';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  form: { name: string, price: number , description: string } = {} as IProduct;

  product$: Observable<any>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  product() {
    if (!this.form){
      return;
    }

    this.product$ = this._productService.create(this.form as IProduct).pipe(tap(() => {
      alert('Товар успешно добавлен.');
      this._router.navigate(['/store']);
    }));

}
}

