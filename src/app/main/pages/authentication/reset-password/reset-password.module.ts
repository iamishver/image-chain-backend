import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { ResetPasswordComponent } from 'app/main/pages/authentication/reset-password/reset-password.component';
import { ResetPasswordService } from 'app/main/pages/authentication/reset-password/reset-password.service';

const routes = [
    {
        path: 'auth/reset-password/:id',
        component: ResetPasswordComponent
    }
];

@NgModule({
    declarations: [
        ResetPasswordComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        FuseSharedModule
    ],
    providers: [ResetPasswordService]
})
export class ResetPasswordModule {
}
