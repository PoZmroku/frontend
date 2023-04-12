import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { IRegisterUserResult } from '../interfaces';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes("/auth/login")) {
            return next.handle(req);
        }
        const user: IRegisterUserResult = JSON.parse(localStorage.getItem('user') ?? '');
        if (!user) {
            throw new Error(`User is not logged in`);
        }
        const clone = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${user.token}`)
        });

        return next.handle(clone);
    }
}