import { Component, OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector : "my-employee",
    templateUrl: "app/employee/employee.component.html",
    styleUrls: ["app/employee/employee.component.css"]
})

export class EmployeeComponent implements OnInit {
    employee: void | IEmployee;
    statusMessage: string = "Loading data. Please wait...";

    subscription: ISubscription;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }


    onBackButtonClick(): void {
        this._router.navigate(['/employeeslist'])
    }

    onCancelButtonClick(): void {
        this.statusMessage = "Request Cancelled";
        this.subscription.unsubscribe();
    }

    //ngOnInit() {
    //    let empCode: string = this._activatedRoute.snapshot.params['code'];
    //    this._employeeService.getEmployeeByCode(empCode).then(
    //        (employeeData) => {
    //            if (employeeData == null) {
    //                this.statusMessage =
    //                    'Employee with the specified Employee Code does not exist';
    //            }
    //            else {
    //                this.employee = employeeData;
    //            }
    //        },
    //    ).catch((error) => {
    //        this.statusMessage =
    //            'Problem with the service. Please try again after sometime';
    //        console.error(error);
    //    });
    //}

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying...Attempt #' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw(err)
                    }
                }, 0).delay(1000)
            })
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            }
        );
    }

    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
    
}