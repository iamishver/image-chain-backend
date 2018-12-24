import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ForgotPasswordService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    forgotPassword(forgotPasswordAPI, userDetail): any {
        return new Promise((resolve, reject) => {
            const param = {
                'params': userDetail
            };
            this._http.post(forgotPasswordAPI, param).subscribe((res: any) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
