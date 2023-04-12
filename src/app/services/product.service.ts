import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../interfaces/IProduct";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _apiUrl = `http://localhost:4444`;

    constructor(private _http: HttpClient) {
    }

    getProducts(product: IProduct): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._apiUrl}/products`);
    }

    getProduct(product: IProduct): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._apiUrl}/product`);
    }

    create(product: IProduct): Observable<IProduct> {
        return this._http.post<IProduct>(`${this._apiUrl}/products`, product);
    }

    deleteProduct(product: IProduct): Observable<void> {
        return this._http.delete<void>(`${this._apiUrl}/product/${product._id}`);
    }

}