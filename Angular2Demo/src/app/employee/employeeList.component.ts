import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})


export class EmployeeListComponent {
    employees: any[];

    constructor() {
        this.employees = [
            { code: 'exp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBrith: '2/25/1988' },
            { code: 'exp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBrith: '6/6/1988' },
            { code: 'exp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBrith: '8/16/1988' },
            { code: 'exp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBrith: '5/5/1988' },
        ]
    }

    getEmployees(): void {
        this.employees = [
            { code: 'exp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBrith: '2/25/1988' },
            { code: 'exp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBrith: '6/6/1988' },
            { code: 'exp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBrith: '8/16/1988' },
            { code: 'exp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBrith: '5/5/1988' },
            { code: 'exp105', name: 'nancy', gender: 'Female', annualSalary: 6700.826, dateOfBrith: '5/6/1988' },
        ]
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}