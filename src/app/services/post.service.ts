import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPost } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PostService {
    private _apiUrl = `http://localhost:4444`;
  addpost$: any;

    constructor(private _http: HttpClient) {
    }

    create(post: IPost): Observable<void> {
        return this._http.post<void>(`${this._apiUrl}/posts`, post);
    }

    getAll(): Observable<IPost[]> {
        return this._http.get<IPost[]>(`${this._apiUrl}/posts`);
    }

    remove(post: IPost): Observable<void> {
        return this._http.delete<void>(`${this._apiUrl}/posts/delete/${post._id}`);
    }

    getOne(postId: string): Observable<IPost> {
        return this._http.get<IPost>(`${this._apiUrl}/posts/${postId}`);
    }

    update(post: Partial<IPost>): Observable<void> {
        return this._http.patch<void>(`${this._apiUrl}/posts/${post._id}`, post);
    }
}