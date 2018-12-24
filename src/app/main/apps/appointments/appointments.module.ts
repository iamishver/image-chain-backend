import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


const routes = [
    {
        path: 'appointments-list',
        loadChildren: './appointment-list/appointment-list.module#AppointmentListModule'
    },
    {
        path: 'appointments-inspect/:id',
        loadChildren: './appointment-inspect/appointment-inspect.module#AppointmentInspectModule'
    },
    { path: '', redirectTo: 'appointments-list', pathMatch: 'full' },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        // FuseSharedModule
    ]
})
export class AppointmentsModule {
}
