import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICartItem } from '../interfaces'
import { ICart } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _apiUrl = `http://localhost:4444`;

  constructor(
    private _http: HttpClient
  ) { }

  addItem(item: ICartItem): Observable<ICart> {
    return this._http.post<ICart>(`${this._apiUrl}/cart/add`, item);
  }

  cartItems(): Observable<ICart[]> {
    return this._http.get<ICart[]>(`${this._apiUrl}/cart`);
  }

  deleteItem(item: ICartItem): Observable<ICart> {
    return this._http.post<ICart>(`${this._apiUrl}/cart/delete`, item);
  }

}
