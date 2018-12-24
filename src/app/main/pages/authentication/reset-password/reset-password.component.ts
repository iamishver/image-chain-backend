import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { ApiUrl, RecetPasswordToasterMessage, GeneralError } from '../../../../../assets/constant/constant';
import { ToasterService } from '../../../../common/services/toaster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResetPasswordService } from 'app/main/pages/authentication/reset-password/reset-password.service';

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
    resetPasswordForm: FormGroup;
    resetPasswordAPI: any = ApiUrl.siteUrl.resetPassword;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param {Router} _router
     * @param {ActivatedRoute} _activatedRoute
     * @param {ToasterService} _toasterService
     * @param {ResetPasswordService} _resetPasswordService
     */

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _toasterService: ToasterService,
        private _resetPasswordService: ResetPasswordService
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

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.resetPasswordForm = this._formBuilder.group({
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
            });
    }


    /**
     * resetPassword
     */
    resetPassword(): void {

        // const token = this._activatedRoute.snapshot.paramMap.get('id');
        const token = this._activatedRoute.snapshot.params.id;
        const password = this.resetPasswordForm.get('password').value;
        const formData = { 'password': password, 'token': token };

        this._resetPasswordService.resetPassword(this.resetPasswordAPI, formData).then((data: any) => {
            if (data.code === 200) {
                this._toasterService.success(RecetPasswordToasterMessage.successfullyUpdate);
                this._router.navigate(['/pages/auth/login']);
            } else {
                this._toasterService.error(GeneralError.somethingWentWrong);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return { 'passwordsNotMatching': true };
};
