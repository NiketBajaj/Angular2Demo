"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'exp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBrith: '2/25/1988' },
            { code: 'exp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBrith: '6/6/1988' },
            { code: 'exp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBrith: '8/16/1988' },
            { code: 'exp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBrith: '5/5/1988' },
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'exp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBrith: '2/25/1988' },
            { code: 'exp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBrith: '6/6/1988' },
            { code: 'exp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBrith: '8/16/1988' },
            { code: 'exp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBrith: '5/5/1988' },
            { code: 'exp105', name: 'nancy', gender: 'Female', annualSalary: 6700.826, dateOfBrith: '5/6/1988' },
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map