import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppointmentListService {
    user_info: any = [];
    constructor(public _http: HttpClient) { }
    appointmentList(appointmentListAPI, userDetail): any {
        return new Promise((resolve, reject) => {
            const param = {
                'params': userDetail
            };
            this._http.post(appointmentListAPI, param).subscribe((res: any) => {

                if (res.code === 200) {
                    this.user_info = res.data.user;
                    this.user_info.token = res.data.token;
                    if (this.user_info !== '') {
                        localStorage.setItem('user_info', JSON.stringify(this.user_info));
                    }
                    resolve(res);
                } else {
                    resolve(res);
                }
            }, (err) => {
                reject(err);
            });
        });
    }
}
