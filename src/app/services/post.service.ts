import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPost } from '../interfaces/IPost';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _apiUrl = `http://localhost:4444`;

    constructor(private _http: HttpClient) {
    }

    create(post: IPost): Observable<IPost> {
        return this._http.post<IPost>(`${this._apiUrl}/posts`, post);
    }

    getAll(post: IPost): Observable<IPost[]> {
        return this._http.get<IPost[]>(`${this._apiUrl}/posts`);
    }

    remove(post: IPost): Observable<void> {
        return this._http.delete<void>(`${this._apiUrl}/posts/${post._id}`);
    }

    getOne(post: IPost): Observable<IPost> {
        return this._http.get<IPost>(`${this._apiUrl}/posts/${post._id}`);
    }

    update(post: IPost): Observable<IPost> {
        return this._http.patch<IPost>(`${this._apiUrl}/posts/${post._id}`, post);
    }

    



}