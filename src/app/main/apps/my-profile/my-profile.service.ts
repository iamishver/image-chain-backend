import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyProfileService {

    user_info: any = [];
    constructor(public _http: HttpClient) { }
    myProfile(profileAPI, userDetail): any {
        return new Promise((resolve, reject) => {
            const param = {
                'params': userDetail
            };
            this._http.post(profileAPI, param).subscribe((res: any) => {
                if (res.code === 200) {
                    if (localStorage.getItem('user_info') && localStorage.getItem('user_info') !== null) {
                        this.user_info = JSON.parse(localStorage.getItem('user_info'));
                        this.user_info.firstName = userDetail.firstName;
                        this.user_info.lastName = userDetail.lastName;
                        this.user_info.company = userDetail.company;
                        this.user_info.email = userDetail.email;
                        this.user_info.username = userDetail.username;
                        this.user_info.adminType = userDetail.adminType;
                        this.user_info.isActive = userDetail.isActive;
                        localStorage.setItem('user_info', JSON.stringify(this.user_info));
                    }
                }
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
