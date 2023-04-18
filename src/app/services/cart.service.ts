import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICart, ICartItem } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _apiUrl = `http://localhost:4444`;

  constructor(
    private _http: HttpClient
  ) { }

  add(cart: ICartItem): Observable<ICartItem> {
    return this._http.post<ICartItem>(`${this._apiUrl}/cart/add`, cart);
  }

  cartItems(userId: string): Observable<ICart> {
    return this._http.get<ICart>(`${this._apiUrl}/cart/${userId}`);
  }

  cartDeleteItems(cart: ICartItem): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/cart/${cart.productId}`);
  }

}
