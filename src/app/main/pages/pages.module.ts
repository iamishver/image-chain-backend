import { NgModule } from '@angular/core';
import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { ForgotPasswordModule } from 'app/main/pages/authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from 'app/main/pages/authentication/reset-password/reset-password.module';
import { ProfileModule } from 'app/main/pages/profile/profile.module';


@NgModule({
    imports: [
        LoginModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        ProfileModule,
    ]
})
export class PagesModule { }
