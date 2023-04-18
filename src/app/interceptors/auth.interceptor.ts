import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { IRegisterUserResult } from '../interfaces';
import { UserStateService } from "../services";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
    private _state: UserStateService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes("/auth/login")) {
            return next.handle(req);
        }

        const user = this._state.user$;

        return user.pipe(switchMap(user => {
            if (!user) {
                return next.handle(req);
            }

            const clone = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${user.token}`)
            });
            return next.handle(clone);
        }));
    }
}