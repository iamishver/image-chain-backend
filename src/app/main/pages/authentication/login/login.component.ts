import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ApiUrl, LoginToasterMessage } from '../../../../../assets/constant/constant';
import { ToasterService } from '../../../../common/services/toaster.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginAPI: any = ApiUrl.siteUrl.login;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     * @param {ToasterService} _toasterService
     * @param {LoginService} _loginServiceService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _toasterService: ToasterService,
        private _loginService: LoginService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['ishver.nayak@viitor.cloud', [Validators.required, Validators.email]],
            password: ['123456', Validators.required]
        });
    }

    /**
    * Login
    */
    login(): void {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        const loginDATA = { 'email': email, 'password': password };
        if (email === '' && password === '') {
            this._toasterService.error(LoginToasterMessage.blankInputError);
        }
        this._loginService.login(this.loginAPI, loginDATA).then((data: any) => {
            if (data.code === 401) {
                this._toasterService.error(LoginToasterMessage.userPasswordError);
            } else if (data.code === 200) {
                this._toasterService.success(LoginToasterMessage.successLogin);
                this._router.navigate(['/apps/dashboards']);
            } else {
                this._toasterService.error(LoginToasterMessage.errorLogin);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }
}
