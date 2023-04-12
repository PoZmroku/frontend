import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _apiUrl = `http://localhost:4444`;

  constructor(
    private _http: HttpClient
  ) { }

    orders(order: IOrder): Observable<IOrder[]> {
        return this._http.get<IOrder[]>(`${this._apiUrl}/orders`);
    }

    add(order: IOrder): Observable<IOrder> {
        return this._http.post<IOrder>(`${this._apiUrl}/order`, order);
    }

}