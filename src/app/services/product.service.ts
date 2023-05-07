import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct, IProducts } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _apiUrl = `http://localhost:4444`;

    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._apiUrl}/products`);
    }

    getProduct(productId: string): Observable<IProduct> {
        return this._http.get<IProduct>(`${this._apiUrl}/product/${productId}`);
    }

    create(product: IProduct): Observable<void> {
        return this._http.post<void>(`${this._apiUrl}/product/add`, product);
    }

    deleteProduct(productId: string): Observable<void> {
        return this._http.delete<void>(`${this._apiUrl}/product/delete/${productId}`);
    }

}