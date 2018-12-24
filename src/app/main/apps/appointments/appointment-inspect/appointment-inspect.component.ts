import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants, ApiUrl, ProfileToasterMessage, GeneralError } from '../../../../../assets/constant/constant';
import { ToasterService } from '../../../../common/services/toaster.service';
import { AppointmentInspectService } from './appointment-inspect.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment-inspect',
    templateUrl: './appointment-inspect.component.html',
    styleUrls: ['./appointment-inspect.component.scss']
})
export class AppointmentInspectComponent implements OnInit {

    profileForm: FormGroup;
    profileAPI: any = ApiUrl.siteUrl.profile;
    user_info: any;
    type_formats: any = Constants.type_formats;
    adminstatus: any = Constants.status;
    appointment_info: any;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     * @param {ToasterService} _toasterService
     * @param {AppointmentInspectService} _appointmentInspectService
     * @param {Router} _router
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _toasterService: ToasterService,
        private _appointmentInspectService: AppointmentInspectService,
        private _router: Router
    ) {

    }


    /**
     * On init
     */
    ngOnInit(): void {

        if (localStorage.getItem('user_info') && localStorage.getItem('user_info') !== null) {
            this.user_info = JSON.parse(localStorage.getItem('user_info'));
        }

        if (localStorage.getItem('appointment_info') && localStorage.getItem('appointment_info') !== null) {
            this.appointment_info = JSON.parse(localStorage.getItem('appointment_info'));
        }
        // console.log('appointment_info', this.appointment_info);
        this.profileForm = this._formBuilder.group({
            firstName: [this.appointment_info.firstName, [Validators.required]],
            lastName: [this.appointment_info.lastName, [Validators.required]],
            reasonToVisit: [this.appointment_info.reasonToVisit, [Validators.required]],
            timeSlot: [this.appointment_info.timeSlot, [Validators.required]],
        });
    }

    /**
    * myProfile
    */
    myProfile(): void {
        // const profileDATA = {
        //     'company': this.profileForm.get('company').value, 'firstName': this.profileForm.get('firstName').value, 'lastName': this.profileForm.get('lastName').value,
        //     'email': this.profileForm.get('email').value, 'username': this.profileForm.get('username').value,
        //     'adminType': this.profileForm.get('adminType').value, 'status': this.profileForm.get('status').value
        // };
        // this._myProfileService.myProfile(this.profileAPI, profileDATA).then((data: any) => {
        //     if (data.code === 200) {
        //         this._toasterService.success(ProfileToasterMessage.profileUpdate);
        //     } else {
        //         this._toasterService.error(GeneralError.somethingWentWrong);
        //     }
        // }).catch(err => {
        //     this._toasterService.error(err.message);
        // });
    }

    /**
    * cancelToBack
    */

    cancelToBack(): void {
        this._router.navigate(['/apps/appointments/appointments-list']);
    }
}

