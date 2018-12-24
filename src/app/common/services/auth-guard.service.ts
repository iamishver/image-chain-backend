import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) {
    }
    canActivate(): any {
        if (localStorage.getItem('user_info')) {
            return true;
        }
        this.router.navigate(['/pages/auth/login']);
        return false;
    }
}


@Injectable()
export class LoginGuardService implements CanActivate {

    constructor(private router: Router) {
    }
    canActivate(): any {
        if (!localStorage.getItem('user_info')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
