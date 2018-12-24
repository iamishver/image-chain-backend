import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    MatPaginatorModule, MatTableModule, MatSortModule,
    MatIconModule, MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatMenuModule, MatTooltipModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { AppointmentListComponent } from './appointment-list.component';
import { AppointmentListService } from './appointment-list.service';

const routes: Routes = [
    {
        path: '**',
        component: AppointmentListComponent,
    },
];

@NgModule({
    declarations: [
        AppointmentListComponent
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
    providers: [AppointmentListService],
})
export class AppointmentListModule { }
