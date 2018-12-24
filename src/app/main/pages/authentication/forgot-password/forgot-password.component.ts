import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { ApiUrl, ForgotPasswordToasterMessage } from '../../../../../assets/constant/constant';
import { ToasterService } from '../../../../common/services/toaster.service';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';


@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    forgotPasswordAPI: any = ApiUrl.siteUrl.forgotPassword;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     * @param {ToasterService} _toasterService
     * @param {ForgotPasswordService} _loginServiceService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _toasterService: ToasterService,
        private _forgotPasswordService: ForgotPasswordService
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
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    /**
    * Forgot Password
    */
    forgotPassword(): void {
        const email = this.forgotPasswordForm.get('email').value;
        const loginDATA = { 'email': email };
        this._forgotPasswordService.forgotPassword(this.forgotPasswordAPI, loginDATA).then((data: any) => {
            if (data.code === 200) {
                this._toasterService.success(ForgotPasswordToasterMessage.successfullySent);
                this._router.navigate(['/pages/auth/login']);
            } else {
                this._toasterService.error(ForgotPasswordToasterMessage.emailNotExistError);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }
}
