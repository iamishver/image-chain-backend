import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { AppointmentInspectComponent } from './appointment-inspect.component';
import { AppointmentInspectService } from './appointment-inspect.service';

const routes: Routes = [
    {
        path: '**',
        component: AppointmentInspectComponent,
    },
];

@NgModule({
    declarations: [
        AppointmentInspectComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatPaginatorModule, MatTableModule, MatSortModule,
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
    providers: [AppointmentInspectService],
})
export class AppointmentInspectModule { }
