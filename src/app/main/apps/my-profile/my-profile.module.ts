import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule, MatButtonModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileService } from './my-profile.service';

const routes: Routes = [
    {
        path: '**',
        component: MyProfileComponent,
    },
];

@NgModule({
    declarations: [
        MyProfileComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatToolbarModule,
        MatMenuModule,

        FuseSharedModule
    ],
    providers: [MyProfileService],
})
export class MyProfileModule { }
