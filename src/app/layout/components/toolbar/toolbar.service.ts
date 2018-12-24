import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToolbarService {

    private personalName: BehaviorSubject<any> = new BehaviorSubject(null);
    newPersonalName: any;
    constructor() {

    }
    getUserName(): Observable<Boolean> {
        this.getUserInfo();
        this.personalName.next(this.newPersonalName);
        return this.personalName.asObservable();
    }

    setUserName(): void {
        this.getUserInfo();
        this.personalName.next(this.newPersonalName);
    }

    getUserInfo(): void {
        if (localStorage.getItem('user_info') && localStorage.getItem('user_info') !== null) {
            const user_info = JSON.parse(localStorage.getItem('user_info'));
            if (user_info.firstName !== '' && user_info.lastName) {
                this.newPersonalName = user_info.firstName + ' ' + user_info.lastName;
            } else {
                this.newPersonalName = user_info.email;
            }
        }
    }

}
