import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants, ApiUrl, ProfileToasterMessage, GeneralError } from '../../../../assets/constant/constant';
import { ToasterService } from '../../../common/services/toaster.service';
import { MyProfileService } from './my-profile.service';
import { ToolbarService } from '../../../layout/components/toolbar/toolbar.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

    profileForm: FormGroup;
    profileAPI: any = ApiUrl.siteUrl.updateProfile;
    user_info: any;
    // type_formats: any = Constants.type_formats;
    type_formats: any = environment.general_const.type_formats;
    adminstatus: any = environment.general_const.status;

    displayStatus = false;
    displayRole = false;


    company: any;
    email: any;
    firstName: any;
    lastName: any;
    username: any;
    adminType: any;
    isActive: any;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     * @param {ToasterService} _toasterService
     * @param {MyProfileService} _myProfileService
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _toasterService: ToasterService,
        private _myProfileService: MyProfileService,
        private _toolbarService: ToolbarService,
    ) {

    }


    /**
     * On init
     */
    ngOnInit(): void {

        if (localStorage.getItem('user_info') && localStorage.getItem('user_info') !== null) {
            this.user_info = JSON.parse(localStorage.getItem('user_info'));
            this.company = this.user_info.company;
            this.firstName = this.user_info.firstName;
            this.lastName = this.user_info.lastName;
            this.username = this.user_info.username;
            this.email = this.user_info.email;
            this.adminType = Number(this.user_info.adminType);
            this.isActive = Number(this.user_info.isActive);

            if (Number(this.adminType) === 1) {
                this.displayRole = true;
                this.type_formats = this.type_formats.filter(type_formats => type_formats.type >= this.adminType);
            } else if (Number(this.adminType) === 2) {
                this.displayRole = false;
            } else {
                this.displayRole = true;
            }

            if (Number(this.adminType) === 1) {
                this.displayStatus = false;
            } else if (Number(this.adminType) === 2) {
                this.displayStatus = false;
            } else {
                this.displayStatus = true;
            }
        }

        this.profileForm = this._formBuilder.group({
            company: [this.company, [Validators.required]],
            firstName: [this.firstName, [Validators.required]],
            lastName: [this.lastName, [Validators.required]],
            email: [this.email, [Validators.required, Validators.email]],
            username: [this.username, [Validators.required]],
            adminType: [this.adminType, [Validators.required]],
            isActive: [this.isActive, [Validators.required]],
        });
    }

    /**
    * myProfile
    */
    myProfile(): void {
        const profileDATA = {
            'company': this.profileForm.get('company').value, 'firstName': this.profileForm.get('firstName').value, 'lastName': this.profileForm.get('lastName').value,
            'email': this.profileForm.get('email').value, 'username': this.profileForm.get('username').value,
            'adminType': this.profileForm.get('adminType').value, 'isActive': this.profileForm.get('isActive').value
        };
        this._myProfileService.myProfile(this.profileAPI, profileDATA).then((data: any) => {
            if (data.code === 200) {
                this._toolbarService.setUserName();
                this._toasterService.success(ProfileToasterMessage.profileUpdate);
            } else {
                this._toasterService.error(GeneralError.somethingWentWrong);
            }
        }).catch(err => {
            this._toasterService.error(err.message);
        });
    }

}
