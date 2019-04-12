import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from '../UserPreferences/userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})


export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = "All";
    statusMessage: string = "Loading data. Please wait...";

    constructor(private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService) {
    }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(
                employeesData => this.employees = employeesData,
                error => {
                    this.statusMessage = "Problem with the service. Please try again later.";
                    console.error(error);
                });
    }


    getTotalEmployeeCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }


    //getEmployees(): void {
    //    this.employees = [
    //        { code: 'exp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '2/25/1988' },
    //        { code: 'exp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '6/6/1988' },
    //        { code: 'exp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '8/16/1988' },
    //        { code: 'exp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '5/5/1988' },
    //        { code: 'exp105', name: 'nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '5/6/1988' },
    //    ]
    //}

    //trackByEmpCode(index: number, employee: any): string {
    //    return employee.code;
    //}
}