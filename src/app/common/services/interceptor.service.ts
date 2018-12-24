import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    user_info: any;
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user_info') && localStorage.getItem('user_info') !== null) {
            this.user_info = JSON.parse(localStorage.getItem('user_info'));
            const token = this.user_info.token;
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
