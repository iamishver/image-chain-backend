import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ToasterService } from '../../../../common/services/toaster.service';
import { AccessToasterMessage } from '../../../../../assets/constant/constant';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit, AfterViewInit {

    users: UserData[] = [];
    // displayedColumns = ['id', 'name', 'reasontovisit', 'Date', 'Status', 'Action'];
    displayedColumns = ['id', 'name', 'reasontovisit', 'Date', 'Action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private _toasterService: ToasterService, private _router: Router) {
        // Create 100 users
        // this.users: UserData[] = [];
        for (let i = 1; i <= 100; i++) { this.users.push(createNewUser(i)); }
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.users);
    }


    ngOnInit(): void {

    }

    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit(): any {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string): void {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }


    inspectAppointment(value): void {
        const res =
        {
            'firstName': value.name,
            'lastName': value.name,
            'reasonToVisit': value.reasontovisit,
            'timeSlot': value.Date,
        };
        localStorage.setItem('appointment_info', JSON.stringify(res));
        this._router.navigate(['/apps/appointments/appointments-inspect/' + (value.id + 1)]);
        // alert('inspect Appointment goes here....');
    }

    askForAcces(value): void {
        this.users[value.id - 1].Status = 'Yes';
        // console.log('valuevalue - ', this.users[value.id - 1]);
        // console.log('valuevalue - ', value.id);
        this._toasterService.success(AccessToasterMessage.accessUpdate);
    }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {

    const Date = DATES[Math.floor(Math.random() * DATES.length)];
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        name: name,
        Date: Date,
        reasontovisit: reasontovisit[Math.round(Math.random() * (reasontovisit.length - 1))],
        Status: Status[Math.round(Math.random() * (Status.length - 1))],
        Action: ''
    };
}

/** Constants used to fill up our data base. */

const DATES = ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:30 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
    , '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM'];
const Status = ['Yes', 'No'];
const reasontovisit = ['Skin disorders', 'acne', 'Back problems', 'Cholesterol problems', 'High blood pressures'];
const NAMES = ['Vishal', 'Ishver', 'Deepak', 'Ram', 'Hitesh', 'Robert Laidlaw',
    'Pankaj', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    name: string;
    reasontovisit: string;
    Date: string;
    Status: string;
    Action: string;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
